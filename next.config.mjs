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
            },
            {
                hostname: 'storage.googleapis.com'
            }
        ]
    }
};

export default nextConfig;
