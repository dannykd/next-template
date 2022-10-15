# Next.js Starter Template with built in Layout components

This is a template for rapidly starting Next.js projects with built in components relating to page layouts. Inspired by [@clxmente's template](https://github.com/clxmente/next) with a few added dependencies + a components/layout folder that holds components including a Navbar and Footer as well as a general Layout component that wraps all the pages.

## What you'll get (a fully formatted page with a responsive navigation bar and footer)

<a href="https://ibb.co/RDbqcvQ"><img width=500 src="https://i.ibb.co/vjqSkwL/Screen-Shot-2022-10-14-at-10-53-00-PM.png" alt="Screen-Shot-2022-10-14-at-10-53-00-PM" border="0"></a>

<a href="https://ibb.co/52TT559"><img width=300 src="https://i.ibb.co/Fn66BBW/Screen-Shot-2022-10-14-at-10-53-15-PM.png" alt="Screen-Shot-2022-10-14-at-10-53-15-PM" border="0"></a>



## Dependencies Included

[Next.js](https://nextjs.org/)

[TailwindCSS](https://tailwindcss.com/)

[Prettier](https://prettier.io/)

[@headlessui/react](https://headlessui.com/)

[@heroicons/react](https://heroicons.com/)

## Instructions

1. Start a new Next project following this template with your choice of package manager(yarn/npm/pnpm).

        **PNPM (recommended) :** ``pnpm create next-app YOUR_PROJECT_NAME -e https://github.com/dannykd/next-template``

        **NPM:** ``npm create next-app YOUR_PROJECT_NAME -e https://github.com/dannykd/next-template``

        **Yarn:** ``yarn create next-app YOUR_PROJECT_NAME -e https://github.com/dannykd/next-template``


2. Change placeholder strings. If you CRTL-F "INSERT" you should see all the string that should be changed.


        <Link href="/INSERT_PAGE_PATH">INSERT_PAGE_NAME</Link> 
        
        Should be changed to ⤵️
        
        <Link href="/Home">home</Link>
        
        List of strings to change/remove: **INSERT_APP_NAME** (2x), **INSERT_PAGE_NAME** (4x), **INSERT_PAGE_PATH** (4x) in components/layout

3. Delete the **INSERT_PAGE_PATH.tsx** page or use it as Page template and your project should be ready for your own code!
