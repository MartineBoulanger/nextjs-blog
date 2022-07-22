import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';

export default function Post({ post }) {
  return (
    <Layout>
      {post.title}
      <br />
      {post.slug}
      <br />
      {post.date}
      <br />
      <div />
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = await getPostData(params.slug);
  return {
    props: {
      post,
    },
  };
}
