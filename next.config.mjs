/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'www.maysabrao.com.br',
            },
            {
                hostname: 'localhost'
            }
        ]
    }
};

export default nextConfig;
