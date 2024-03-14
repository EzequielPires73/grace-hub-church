import React, { useRef, useCallback, useEffect } from 'react';
import Webcam from 'react-webcam';
import { ButtonPrimary } from './buttons/button-primary';
import { FiCamera } from 'react-icons/fi';

interface Props {
    show: boolean,
    close: () => void,
    onChange: (file: File) => void,
}

const ProfilePicture = ({ show, close, onChange }: Props) => {
    const webcamRef = useRef(null);
    const ref = useRef(null);
    const handleOutsideClick = (event: any) => {
        if (ref.current && !ref.current.contains(event.target)) {
            close();
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    const capture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        const byteString = atob(imageSrc.split(',')[1]);
        const ab = new ArrayBuffer(byteString.length);
        const ia = new Uint8Array(ab);
        for (let i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        const blob = new Blob([ab], { type: 'image/jpeg' });

        // Criando um objeto File
        const file = new File([blob], 'profile_picture.jpg', { type: 'image/jpeg' });
        onChange(file);
        close();
    }, [webcamRef]);

    if (!show) return null;

    return (
        <div className="fixed top-0 bottom-0 left-0 right-0 bg-black/50 flex flex-col gap-4 items-center justify-center z-50">
            <div className="bg-white w-full max-w-md h-fit p-4 flex flex-col justify-between gap-4 rounded-md min-h-[408px]" ref={ref}>
                <Webcam
                    audio={false}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    width={640}
                    height={480}
                    className='rounded-lg'
                />
                <ButtonPrimary title='Capturar' Icon={FiCamera} onClick={capture} />
            </div>
        </div>
    );
};

export default ProfilePicture;
