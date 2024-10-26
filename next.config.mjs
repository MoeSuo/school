/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{ hostname: "images.pexels.com",
           hostname:"cdn.pixabay.com",
           hostname:"thispersondoesnotexist.com",
          
          }],
      },
};

export default nextConfig;
