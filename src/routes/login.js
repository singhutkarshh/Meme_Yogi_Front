import React from "react";
import styled from "styled-components";

const Login = () => {
  return (
    <Wrapper>
      <div>
        <img src="./logo.png" />
        <h2>Welcome to Meme Yogi </h2>
        <h3>A Place to Share Memes and Laughs !</h3>
        <button> Login </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  flex: 1;
  div {
    width: 50rem;
    height: 32rem;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
  }
  img {
    width:20rem: ;
    height:20rem;
  }
  h2{
      font-size:32px;
      margin-top:-1rem;
      
  }
  h3{
    font-size:20px;
    font-family:Kaushan Script;
  }
  button{
      padding:5px 15px;
      background-color:#bd7946;
      color:white;
      font-size:20px;
      margin-top:2rem;
  }
  button:hover{
      background-color:#f0c3a1;
      color:#bd7946;
  }
`;

export default Login;
