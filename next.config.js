/** @type {import('next').NextConfig} */

//import style from "./src/style/index.scss"
const nextConfig = {
  reactStrictMode: true,
  images:{
    remotePatterns:[
     {
      protocol:"https",
      hostname:"d1zbg1tvj6dkkl.cloudfront.net"
     },
     {
      protocol:"https",
      hostname:"images.pexels.com"
     }

    ]
  },
  env: {
    LARAVEL_BASEURL: 'http://127.0.0.1:8000',
  },
}

const path = require('path');
 
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, './src/style/globals.scss')],
  },
};

module.exports = nextConfig
