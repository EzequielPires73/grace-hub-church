/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'www.maysabrao.com.br',
            },
            {
                hostname: 'localhost'
            },
            {
                hostname: 'api.omnigrace.me'
            }
        ]
    }
};

export default nextConfig;
