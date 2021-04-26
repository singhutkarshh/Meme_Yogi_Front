import React from "react";
import styled from "styled-components";
import Avatar from "@material-ui/core/Avatar";

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
  return (
    <>
      <div className="header">Home</div>
    </>
  );
};

const Upload = () => {
  return (
    <article className="upload">
      <div className="upload_caption">
        <Avatar alt="Remy Sharp" src="" />
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
  overflow:hidden;
  .header {
    width: 100%;
    border: 1px solid grey;
    border-right:none;
    flex: 0.1;
    font-size: 24px;
    align-items: center;
    display: flex;
    padding-left: 1rem;
    font-weight: 700;
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
    overflow:scroll;
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
