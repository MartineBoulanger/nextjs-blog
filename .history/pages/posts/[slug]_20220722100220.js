import Layout from '../../components/layout';
import { getAllPostIds } from '../../lib/posts';

export default function Post() {
  return <Layout>...</Layout>;
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return 
}

export async function getStaticProps({ params }) {}