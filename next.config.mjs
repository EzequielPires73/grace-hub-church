/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'www.maysabrao.com.br'
            }
        ]
    }
};

export default nextConfig;
