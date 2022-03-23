import React from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import UserPost from "./UserPost";

export const UserPosts = ({ posts = [] }) => {
  const { url } = useRouteMatch();

  const postLinks = posts.map((post) => (
    <li key={post.id}>
      <Link to={`${url}/${post.id}`} data-testid={`user-post-${post.id}`}>
        {post.title}
      </Link>
    </li>
  ));
    console.log("URL:", url);
  return (
    <div>
      <ul>{postLinks}</ul>
      <div>
        <Switch>
          <Route path={`${url}/:postId`}>
            <UserPost posts={posts}/>
          </Route>
          <Route>
            <p>No Post selected...</p>
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default UserPosts;
