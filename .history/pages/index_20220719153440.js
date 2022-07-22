import Head from 'next/head';
import Alert from '../components/alert';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {

  const handleOpenAlert () => {
    return (
      <Alert
    )
  }

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello, my name is Martine, I'm a front-end developer and a writer. You
          can contact me on{' '}
          <a
            href='https://www.linkedin.com/in/martine-boulanger/'
            target='_blank'
          >
            LinkedIn
          </a>
          .
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href='https://nextjs.org/learn'>our Next.js tutorial</a>.)
        </p>
        <button onClick={handleOpenAlert}>Click me!</button>
      </section>
    </Layout>
  );
}
