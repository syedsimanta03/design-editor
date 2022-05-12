**Grammable** is a [Next.js](https://nextjs.org/) bootstrapped project with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## 💫Getting Started

First, run the development server:

```bash
yarn install
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

- yarn for installing packages or package management. Alternatively npm can be used.

- TS config that using esnext and extends `tsconfigExtra` config with base directories.

- commonjs module targeting module format/feature by commonjs 

- redux for maning state globally

- redux provider which is used inside __app.tsx to flow data on other components

- pages folder contains all pages that shows on front-end

- components folder has all the components used on this app

- .env contains all environment variables

- store -> where we have all redux code. 

- Turned off immutableCheck & serializableCheck to avoid timeout err as the app is huge also we could increase time limit.
  
  
  
  ---
  
  > There we many errors like package import wasn't correct or typos, code logic err like show editor page when user not loggedin but I'm already loggedin as homepage is login page to enter the app. 
