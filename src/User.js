import React from "react";
import {
  Link,
  NavLink,
  Route,
  Switch,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import UserPosts from "./UserPosts";
import UserProfile from "./UserProfile";

export const User = ({ users = [] }) => {
  const { userId } = useParams();
  const routeMatch = useRouteMatch();

  if (!userId) {
    throw new Error("No URL parameter for userId");
  }

  const user = users.find((user) => `${user.id}` === userId);

  console.log(routeMatch);

  if (user) {
    return (
      <section>
        <Link to="/"> &lt;- Users</Link>
        <div>
          <h2>{user.name}</h2>
          <ul>
            <li>
              <NavLink to={`${routeMatch.url}`} data-testid="user-profile">
                Profile
              </NavLink>
            </li>
            <li>
              <NavLink to={`${routeMatch.url}/posts`} data-testid="user-posts">
                Posts
              </NavLink>
            </li>
          </ul>
          <Switch>
          <Route path={`${routeMatch.url}/posts`}>
              <UserPosts posts={user.posts} />
            </Route>
            <Route path={`${routeMatch.url}`}>
              <UserProfile user={user} />
            </Route>
          </Switch>
        </div>
      </section>
    );
  }
  return <p>User not found</p>;
};

export default User;
