export interface INotice {
    id?: number;
    title: string;
    introduction: string;
    content: string;
    image?: string;
    active: boolean;
    responsibleId?: number;
    responsible?: any;
    church?: any;
    churchId?: number;
    createdAt?: Date;
}

export const notices: INotice[] = [
    {
        id: 1,
        title: 'Um Título para a notícia',
        introduction: 'Uma pequena descrição para a notícia aqui.',
        active: true,
        content: 'Um conteúdo para a notícia aqui.',
        image: '/assets/image-01.png'
    },
    {
        id: 2,
        title: 'Um Título para a notícia',
        introduction: 'Uma pequena descrição para a notícia aqui.',
        active: true,
        content: 'Um conteúdo para a notícia aqui.',
        image: '/assets/image-02.png'
    },
    {
        id: 3,
        title: 'Um Título para a notícia',
        introduction: 'Uma pequena descrição para a notícia aqui.',
        active: true,
        content: 'Um conteúdo para a notícia aqui.',
        image: '/assets/image-03.png'
    },
    {
        id: 4,
        title: 'Um Título para a notícia',
        introduction: 'Uma pequena descrição para a notícia aqui.',
        active: true,
        content: 'Um conteúdo para a notícia aqui.',
        image: '/assets/image-04.png'
    },
]