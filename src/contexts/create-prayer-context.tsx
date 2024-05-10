'use client'

import { useForm, useFormProps } from '@/hooks/useForm';
import { useSelect, useSelectProps } from '@/hooks/useSelect';
import { IPrayer } from '@/models/prayer';
import { IUser } from '@/models/users';
import { api } from '@/services/api';
import { activeData, motiveOptions } from '@/utils/data';
import { useRouter } from 'next/navigation';
import { createContext, useContext, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

export interface CreatePrayerContextProps {
    prayer: UsePrayerProps;
    create(): Promise<void>;
    update(): Promise<void>;
}

export const CreatePrayerContext = createContext({} as CreatePrayerContextProps);

export function CreatePrayerProvider({ children, prayer: initialPrayer, users, userId }: { children, prayer?: IPrayer, users?: IUser[], userId?: number }) {
    const router = useRouter();
    const prayer = usePrayer({ prayer: initialPrayer, users: users, userId: userId });

    const create = async () => {
        try {
            if (prayer.isValid()) {
                const data = prayer.toJson();
                const res = await api.post('prayers', data).then(res => res.data);

                if (res.success && res.data.id) {
                    toast('Oração criada com sucesso.');
                    if (prayer.image instanceof File) await uploadImage(res.data.id, prayer.image);
                    setTimeout(() => {
                        router.push(`/prayer`);
                    }, 2000)
                }
            }
        } catch (error) {
            console.log(error);
            toast(error.response?.data?.error ?? error.response?.data?.message ?? error.message, {
                type: 'error'
            });
        }
    }

    const update = async () => {
        try {
            if (prayer.isValid()) {
                const data = prayer.toJson();
                const res = await api.patch(`prayers/${initialPrayer.id}`, data).then(res => res.data);

                if (res.success && res.data.id) {
                    toast('Oração atualizada com sucesso.');
                    if (prayer.image instanceof File) await uploadImage(res.data.id, prayer.image);
                }
            }
        } catch (error) {
            toast(error.response?.data?.error ?? error.message, {
                type: 'error'
            });
        }
    }

    const uploadImage = async (id: number, file: File) => {
        const data = new FormData();
        data.append('file', file);
        const res = await api.post(`prayers/${id}/upload-image`, data).then(res => res.data);

        if (res.success) {
            toast("Upload realizado com sucesso!");
        }
    }

    return (
        <CreatePrayerContext.Provider value={{
            prayer,
            create,
            update
        }}>
            <ToastContainer />
            {children}
        </CreatePrayerContext.Provider>
    )
}

export const useCreatePrayer = () => useContext(CreatePrayerContext);


export interface UsePrayerProps {
    reason: useSelectProps,
    description: useFormProps,
    user: useSelectProps,
    image: File | string,
    setImage(f: File | string): void,
    active: useSelectProps,
    postOnWall: useSelectProps,
    receiveCall: useSelectProps,
    receiveVisit: useSelectProps,
    toJson(): IPrayer;
    isValid(): boolean;
}

export const usePrayer = ({ prayer: value, users, userId }: { prayer?: IPrayer, users: IUser[], userId?: number }): UsePrayerProps => {
    const reason = useSelect(motiveOptions, motiveOptions.find(item => item.enum == value?.reason));
    const description = useForm('text', value?.description);
    const [image, setImage] = useState<File | string>(value?.image);
    const active = useSelect(activeData, value && value.active == false ? activeData[1] : activeData[0]);
    const postOnWall = useSelect(activeData, value && value.postOnWall == false ? activeData[1] : activeData[0]);
    const receiveCall = useSelect(activeData, value && value.receiveCall == false ? activeData[1] : activeData[0]);
    const receiveVisit = useSelect(activeData, value && value.receiveVisit == false ? activeData[1] : activeData[0]);
    const user = useSelect(users?.map(item => {
        return {
            name: item.name,
            id: item.id,
            enum: item.id
        }
    },), users?.find(item => item.id == value?.user?.id));

    function toJson(): IPrayer {
        return {
            reason: reason.value.enum.toString(),
            description: description.value,
            active: active.value.id == 1 ? true : false,
            userId: userId,
            postOnWall: postOnWall.value.id == 1 ? true : false,
            receiveCall: receiveCall.value.id == 1 ? true : false,
            receiveVisit: receiveVisit.value.id == 1 ? true : false,
            churchId: +process.env.NEXT_PUBLIC_CHURCH_ID,
        }
    }

    const isValid = () => reason.validate() && description.validate();

    return {
        reason,
        description,
        user,
        image,
        setImage,
        active,
        postOnWall,
        receiveCall,
        receiveVisit,
        toJson,
        isValid
    }
}