import React from "react";
import styled from "styled-components";
import { FaBtc } from "react-icons/fa";
import { FaEthereum } from "react-icons/fa";
import { SiLitecoin } from "react-icons/si";
import { FaViacoin } from "react-icons/fa";
import { SiNike } from "react-icons/si";
import { SiJordan } from "react-icons/si";
import { CgAdidas } from "react-icons/cg";

const Exchange = () => {
  return (
    <Container>
      <Fast>
        <div className="head">
          <h1>Fast Buy</h1>
        </div>
        <div className="buttons">
          <button>
            <FaBtc size={17} /> BTC
          </button>
          <button>
            <FaEthereum size={17} /> ETH
          </button>
          <button>
            <SiLitecoin size={17} /> LTC
          </button>
          <button>
            <FaViacoin size={17} /> VIA
          </button>
        </div>

        <div className="amounts">
          <div>
            <h3>Amount</h3>
            <input type="text" placeholder="1.000000" />
          </div>
          <div>
            <h3>Currency Conversion</h3>
            <input type="text" placeholder="USD" />
          </div>
        </div>

        <div className="accept">
          <h3>
            Comission <span>10%</span>
          </h3>
          <button>Buy</button>
        </div>
      </Fast>

      <Merchants>
        <div className="top">
          <h1>My Merchants</h1>
          <button>More Details</button>
        </div>

        <div className="items">
          <Item>
            <div className="logo">
              <SiNike size={30} />
              <h3>Nike</h3>
            </div>
            <div className="status">
              <Status />
              <h3>Verified</h3>
            </div>
          </Item>
          <Item>
            <div className="logo">
              <CgAdidas size={30} />
              <h3>Adidas</h3>
            </div>
            <div className="status">
              <Status />
              <h3>Verified</h3>
            </div>
          </Item>

          <Item>
            <div className="logo">
              <SiJordan size={30} />
              <h3>Jordan</h3>
            </div>
            <div className="status">
              <Status />
              <h3>Verified</h3>
            </div>
          </Item>
        </div>
      </Merchants>
    </Container>
  );
};

const Status = styled.div`
  height: 10px;
  width: 10px;
  background: #41c6a7;
  border-radius: 10px;
  margin-left: 1rem;
`;
const Item = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-radius: 10px;
  margin: 20px;
  background: linear-gradient(
    202deg,
    rgba(255, 252, 0, 1) 0%,
    rgba(246, 246, 246, 1) 0%,
    rgba(178, 179, 189, 1) 62%
  );
  div.logo {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  div.status {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
    h3 {
      font-weight: 300;
      font-size: 20px;
      color: #fff;
    }
  }
`;

const Merchants = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 20px;
  max-width: 100%;
  max-height: 100%;
  background: linear-gradient(
    300deg,
    rgba(255, 252, 0, 1) 0%,
    rgba(178, 179, 189, 1) 0%,
    rgba(100, 101, 115, 1) 62%
  );
  margin-left: 40px;
  padding: 20px;
  border-radius: 30px;
  color: #f6f6f6;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;

  div.items {
    white-space: nowrap;
    overflow: auto;
    -ms-overflow-style: none;
    -webkit-scrollbar {
      display: none;
    }
    scrollbar-width: none;
    position: relative;
    margin-bottom: 100px;
    height: 100px;
    overflow: scroll;
    display: flex;
    flex-direction: column;
  }
  h1 {
    font-weight: 600;
    font-size: 25px;
  }
  div.top {
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  button {
    background-color: transparent;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid;
    border-color: #f6f6f6;
    color: #f6f6f6;
    font-weight: 600;
    cursor: pointer;
    :hover {
      color: #212129;
      background-color: #f6f6f6;
      transition: 0.5s;
    }
  }
`;

const Fast = styled.div`
  display: block;
  width: 400px;
  height: 410px;
  background: linear-gradient(
    164deg,
    rgba(255, 252, 0, 1) 0%,
    rgba(178, 179, 189, 1) 0%,
    rgba(100, 101, 115, 1) 62%
  );
  margin-left: 40px;
  padding: 20px;
  border-radius: 30px;
  color: #f6f6f6;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  div.accept {
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    h3 {
      font-size: 12px;
      font-weight: 300;
      align-self: flex-end;
    }
    span {
      font-weight: 700;
    }
    button {
      background-color: transparent;
      padding: 15px;
      border-radius: 10px;
      border: 1px solid;
      border-color: #f6f6f6;
      color: #f6f6f6;
      font-weight: 600;
      width: 150px;
      cursor: pointer;
      :hover {
        color: #212129;
        background-color: #f6f6f6;
        transition: 0.5s;
      }
    }
  }
  div.amounts {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 30px;
    color: #f6f6f6;
    input {
      border-radius: 10px;
      padding: 10px;
      border: none;
      width: 95%;
    }
    h3 {
      font-weight: 300;
      font-size: 15px;
    }
  }
  div.head {
    text-align: center;
    font-size: 10px;
    font-weight: 600;
    border: 1px solid #f6f6f6;
    border-radius: 10px;
    padding: 10px;
  }
  div.buttons {
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    text-align: center;
    font-size: 10px;
    font-weight: 600;
    border-radius: 30px;
    background-color: #f6f6f6;
    button {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      padding: 10px;
      width: 100%;
      border: 1px solid #f6f6f6;
      background-color: #f6f6f6;
      border-radius: 20px;
      color: #212129;
      font-weight: 700;
      :hover {
        background-color: #212129;
        color: #f6f6f6;
        transition: 0.3s;
        border: 1px solid #f6f6f6;
      }
    }
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Exchange;
