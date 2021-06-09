import PostsGrid from "../posts/posts-grid";
import classes from "./featured-posts.module.css";

const FeaturedPosts = (props) => {
  // console.log(props.post);=
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={props.posts} />
    </section>
  );
};

export default FeaturedPosts;
