import { Fragment } from "react";
import Head from "next/head";

import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-util";

const AllPostsPage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta name="description" content="Blogs for all frameworks" />
      </Head>
      <AllPosts posts={props.posts} />;
    </Fragment>
  );
};

export function getStaticProps() {
  const featuredPosts = getAllPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}

export default AllPostsPage;
