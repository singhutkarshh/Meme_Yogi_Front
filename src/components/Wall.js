import React from "react";
import styled from "styled-components";
import Avatar from "@material-ui/core/Avatar";
import { useAuth0 } from "@auth0/auth0-react";
const Wall = () => {
  return (
    <Wrapper>
      <Header />
      <Upload />
      <div className="postDrawer">
        <Posts />
        <Posts />
        <Posts />
        <Posts />
        <Posts />
        <Posts />
      </div>
    </Wrapper>
  );
};

const Header = () => {
  const { user, isAuthenticated } = useAuth0();

  const isUser = isAuthenticated && user;

  return (
    <>
      <div className="header">
        <h2>Home</h2>
        {isUser && user.name && (
          <p>
            Welcome , <strong> {user.name.toUpperCase()} </strong>
          </p>
        )}
      </div>
    </>
  );
};

const Upload = () => {
  const { user, isAuthenticated } = useAuth0();

  const isUser = isAuthenticated && user;
  return (
    <article className="upload">
      <div className="upload_caption">
        {isUser && (
          <Avatar alt="Remy Sharp" src={user.picture} alt={user.name} />
        )}
        <input type="text" placeholder="Caption" />
      </div>
      <div className="upload_file">
        <p>Choose an image to upload : </p>
        <input type="file" />
      </div>
      <button>Upload</button>
    </article>
  );
};
const Posts = () => {
  return (
    <>
      <div className="posts">
        <div className="head">
          <Avatar alt="Remy Sharp" src="" />
          <h3>Unknown User</h3>
        </div>
        <img src="./logo.png" className="postImage" />
      </div>
    </>
  );
};

const Wrapper = styled.section`
  flex: 0.5;
  height: 44rem;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  overflow:scroll;
  // position:relative;
  .header {
    width: 100%;
    border: 1px solid grey;
    border-right:none;
    flex: 0.1;
    align-items: center;
    display: flex;
    flex-dircetion:row;
    justify-content:space-evenly;
    align-items:center;
    padding-left: 1rem;
  }
  .header > p{
    color:grey;
  }
  .upload{
      width:100%:;
      flex:0.1;
      padding: 1rem ;
      border-left:1px solid grey;
  }

  .upload_caption{
   display:flex;
   flex-direction:row;
   align-items:center;
   justify-content:space-evenly;
   width:100%;
  }

  .upload_caption > input{
      width:80%;
      font-size:20px;
  }

  .upload_file{
   display:flex;
   flex-direction:row;
   align-items:center;
   justify-content:space-evenly;
   width:100%;
  }

  article > button{
     justify-content:center;
     margin-left:2rem;
  }

  .postDrawer {
    width: 100%;
    border: 1px solid grey;
    border-right:none;
    flex: 0.8;
    padding-left: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    // overflow:scroll;
  }

  .posts{
      width:80%;
      max-width:80%;
      height:60vh;
      border:2px solid grey;
      margin-top:1rem;
  }

  .posts > .head{
      display:flex;
      flex-direction:row;
      align-items:center;
      border-bottom:1px solid grey;
      padding-left:1rem;
  }
  .posts > .head : first-child{
      
  }
  .posts > .head >h3{
      margin-left:2rem;
  }

  .postImage{
      width:100%;
      height:80%;
  }
`;

export default Wall;
