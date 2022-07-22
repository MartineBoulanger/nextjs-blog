// This is to import the Error component from Next.js

import Error from 'next/error';

export async function getServerSideProps() {
  const res = await fetch('https://api.github.com/repos/vercel/next.js');
  const errorCode = res.ok ? false : res.statusCode;
  const json = await res.json();

  return {
    props: { errorCode, stars: json.stargazers_count },
  };
}

export default function ErrorPage({errorCode, stars}) {
    
}
