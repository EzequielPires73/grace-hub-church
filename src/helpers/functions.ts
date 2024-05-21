export const calculeTotalPages = (total) => total > 0 ? Math.ceil(total / 15) : 0;

export const getImagePath = (path: string) => {
    if (!path) {
        return '/no-image.png';
    }
    return path?.startsWith('storage') ? `${process.env.NEXT_PUBLIC_URL_DEFAULT}${path}` : path;
}