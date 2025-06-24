/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXTAUTH_URL: process.env.NEXTAUTH_URL || 'https://connecthive.mecwebcraft.com'
  }
};

export default nextConfig;
