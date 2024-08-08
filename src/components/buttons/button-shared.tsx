'use client'

import { FiShare } from 'react-icons/fi';

export const ButtonShare = ({ url, title }) => {
    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: title || document.title,
                    url: url || window.location.href,
                });
                console.log('Shared successfully!');
            } catch (error) {
                console.error('Error sharing:', error);
            }
        } else {
            alert('Sharing is not supported on this browser.');
        }
    };

    return (
        <button onClick={handleShare} className="bg-gray-700 w-10 h-10 rounded-full flex items-center justify-center text-white">
            <FiShare />
        </button>
    );
};