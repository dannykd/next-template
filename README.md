# Next.js Starter Template with Layout components

This is a template for rapidly starting Next.js projects with built in components relating to page layouts. Inspired by [@clexmente's template](https://github.com/user/repo/blob/branch/other_file.md) with a few added dependencies + a components/layout folder that holds components including a Navbar and Footer components as well as a general Layout component that wraps all the pages.
## Dependencies Included

-[Next.js](https://nextjs.org/)

-[TailwindCSS](https://tailwindcss.com/)

-[Prettier](https://prettier.io/)

-[@headlessui/react](https://headlessui.com/)

-[@heroicons/react](https://heroicons.com/)

## Instructions

-Start a new Next project following this template with your choice of package manager(yarn/npm/pnpm).

--**PNPM (recommended) :** ``pnpm create next-app YOUR_PROJECT_NAME -e https://github.com/dannykd/next-template``

--**NPM:** ``npm create next-app YOUR_PROJECT_NAME -e https://github.com/dannykd/next-template``

--**Yarn:** ``yarn create next-app YOUR_PROJECT_NAME -e https://github.com/dannykd/next-template``


-Change placeholder strings. If you CRTL-F "INSERT" you should see all the string that should be changed.

--Ex. 

        ``<<Link href="/INSERT_PAGE_PATH">INSERT_PAGE_NAME</Link>``
        *should be changed to*
        ``<Link href="/Home">/home</Link>``
        
--List of strings to change/remove: **INSERT_APP_NAME** (2x), **INSERT_PAGE_NAME** (4x), **INSERT_PAGE_PATH** (4x) in components/layout

-Delete the **INSERT_PAGE_PATH.tsx** page or use it as Page template and your project should be ready for your own code!
