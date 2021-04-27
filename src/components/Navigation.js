import React from "react";
import styled from "styled-components";
import HomeIcon from "@material-ui/icons/Home";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MessageIcon from "@material-ui/icons/Message";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Navigation = () => {
  return (
    <Wrapper>
      <div style={{ marginLeft: "10rem", borderRight: "2px solid grey" }}>
        <Header />
        <NavBox />
      </div>
    </Wrapper>
  );
};

const Header = () => {
  return (
    <>
      <div className="header">
        <img src="./logo.png" alt="logo" />
      </div>
    </>
  );
};

const NavBox = () => {
  const {
    loginWithRedirect,
    logout,
    user,
    isAuthenticated,
    isLoading,
  } = useAuth0();
  const isUser = isAuthenticated && user;

  return (
    <>
      <Link to="/" style={{ textDecoration: "none" }}>
        <button className="navItems">
          Home
          <HomeIcon className="icon" />
        </button>
      </Link>
      <hr></hr>

      <Link to="/notifications" style={{ textDecoration: "none" }}>
        <button className="navItems">
          Notifications
          <NotificationsIcon className="icon" />
        </button>
      </Link>
      <hr></hr>

      <Link to="/messages" style={{ textDecoration: "none" }}>
        <button className="navItems">
          Messages
          <MessageIcon className="icon" />
        </button>
      </Link>
      <hr></hr>

      {isUser ? (
        <button
          className="navItems"
          onClick={() => {
            logout({ returnTo: window.location.origin });
          }}
        >
          Logout
          <BookmarkBorderIcon className="icon" />
        </button>
      ) : (
        <button className="navItems" onClick={loginWithRedirect}>
          Login
          <MoreHorizIcon className="icon" />
        </button>
      )}
      <hr></hr>
    </>
  );
};

const Wrapper = styled.section`
  flex: 0.3;
  height: 42rem;
  padding: 2rem 2rem;

  .header {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 2rem;
    justify-content: space-between;
    align-items: center;
  }
  img {
    width: 5rem;
    height: 4rem;
  }
  .navItems {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 2rem;
    justify-content: space-between;
    align-items: center;
    margin-top: 3rem;
    padding: 0 1rem;
    max-width: 14rem;
  }
  .navItems:hover {
    border: 1px solid #8c6614;
    border-left: 5px solid #8c6614;
    padding: 5px 2rem;
  }
  .icon {
    font-size: 30px;
    color: #a88332;
  }
  .icon:hover {
    color: #b88414;
  }
  button {
    background-color: white;
    border: none;
    font-size: 22px;
  }
`;

export default Navigation;
