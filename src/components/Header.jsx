import styled from "styled-components";
import React from "react";
import portrait from "../assets/portrait.png";
import { VscBellDot } from "react-icons/vsc";
import { FiSettings } from "react-icons/fi";
import { BsWallet2 } from "react-icons/bs";

const Header = () => {
  return (
    <Container>
      <div className="logo">
        <h1>
          Wha<span>Let</span>
        </h1>{" "}
        <BsWallet2 size={25} />
      </div>
      <div className="profile">
        <h3>Arian Dedier</h3>
        <img src={portrait} alt="portrait" />
        <button>
          <VscBellDot />
        </button>
        <button>
          <FiSettings />
        </button>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  color: #f6f6f6;
  padding: 30px;
  text-align: center;
  align-items: center;
  justify-content: space-between;
  max-width: 100%;
  height: 5%;

  div.logo {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
  }
  h1 {
    font-weight: 700;
  }
  span {
    font-weight: 300;
  }

  div.profile {
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
    align-self: center;
    gap: 15px;
  }

  h3 {
    font-weight: 600;
    cursor: pointer;
  }

  img {
    width: 3rem;
    height: 3rem;
    cursor: pointer;
  }

  button {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 3rem;
    height: 3rem;
    border: none;
    border-radius: 50px;
    background-color: #323949;
    color: #f6f6f6;
    font-size: 20px;
    :hover {
      background-color: #4c5265;
      transition: 0.5s;
    }
  }
`;

export default Header;
