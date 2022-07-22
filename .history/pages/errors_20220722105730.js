// This is to import the Error component from Next.js

import Error from "next/error";

export async function getServerSideProps() {
    const res = await fetch('https://api.github.com/repos/vercel/next.js')
    const 
}