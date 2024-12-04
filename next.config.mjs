/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'skillapp.literesults.net',
            },
        ],
    }
};

export default nextConfig;
