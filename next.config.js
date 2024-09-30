/** @type {import('next').NextConfig} */

const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
});

const nextConfig = withMDX({
    env: {
        appName: 'ลุงตุ่มข้าวมันไก่',
        appUrl: 'https://lungtumkhaomunkai.rubnganphanha.com/',
        email: ''
    },
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'], // เพิ่มการรองรับไฟล์ .md และ .mdx
    reactStrictMode: true, // เพิ่มโหมด Strict Mode
    images: {
        domains: ['example.com'], // เพิ่ม domain ของรูปที่อนุญาตให้แสดงในเว็บไซต์
    },
    webpack: (config, { isServer }) => {
        if (!isServer) {
            // Fixes packages that depend on 'fs' module
            config.resolve.fallback = {
                fs: false,
                path: false,
                os: false,
            };
        }

        return config;
    },
});

module.exports = nextConfig;
