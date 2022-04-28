import React from "react";
import styled from "styled-components";
import { FaBtc } from "react-icons/fa";
import { FaEthereum } from "react-icons/fa";
import { SiLitecoin } from "react-icons/si";
import { FaViacoin } from "react-icons/fa";

const Latest = () => {
  return (
    <Container>
      <Head>
        <h1>Latest Transactions</h1>
        <button>View all</button>
      </Head>
      <List>
        <div className="coin">
          <Button1>
            <FaBtc size={20} />
          </Button1>
          <Coin1>BTC</Coin1>
        </div>

        <Date>26 Feb, 23:10</Date>
        <Desc>Replenishment (IPN)</Desc>
        <Amount>$ 11 910.77</Amount>

        <div className="ok">
          <Status />
          <OkDesc>Queue</OkDesc>
        </div>
      </List>
      <List>
        <div className="coin">
          <Button2>
            <FaEthereum size={20} />
          </Button2>
          <Coin2>ETH</Coin2>
        </div>

        <Date>3 Feb, 03:10</Date>
        <Desc>Replenishment (IPN)</Desc>
        <Amount>$ 8 120.00</Amount>

        <div className="ok">
          <Status1 />
          <OkDesc>Successfully</OkDesc>
        </div>
      </List>
      <List>
        <div className="coin">
          <Button3>
            <SiLitecoin size={20} />
          </Button3>
          <Coin3>LTC</Coin3>
        </div>

        <Date>6 Aug, 16:10</Date>
        <Desc>Replenishment (IPN)</Desc>
        <Amount>$ 3 720.23</Amount>

        <div className="ok">
          <Status1 />
          <OkDesc>Successfully</OkDesc>
        </div>
      </List>
      <List>
        <div className="coin">
          <Button4>
            <FaViacoin size={20} />
          </Button4>
          <Coin4>VIA</Coin4>
        </div>

        <Date>25 Dic, 13:19</Date>
        <Desc>Replenishment (IPN)</Desc>
        <Amount>$ 6 460.85</Amount>

        <div className="ok">
          <Status2 />
          <OkDesc>Declined!</OkDesc>
        </div>
      </List>
    </Container>
  );
};
const Status2 = styled.div`
  height: 10px;
  width: 10px;
  background: #c64040;
  border-radius: 10px;
  margin-left: 1rem;
`;
const Status1 = styled.div`
  height: 10px;
  width: 10px;
  background: #40c6a7;
  border-radius: 10px;
  margin-left: 1rem;
`;
const Status = styled.div`
  height: 10px;
  width: 10px;
  background: #9d9d9d;
  border-radius: 10px;
  margin-left: 1rem;
`;

const Button1 = styled.button`
  background-color: #b7cadb;
`;
const Button2 = styled.button`
  background-color: #c7b4ee;
`;
const Button3 = styled.button`
  background-color: #86c6cf;
`;
const Button4 = styled.button`
  background-color: #4c5265;
`;
const Coin1 = styled.h1`
  color: #b7cadb;
`;
const Coin2 = styled.h1`
  color: #c7b4ee;
`;
const Coin3 = styled.h1`
  color: #86c6cf;
`;
const Coin4 = styled.h1`
  color: #4c5265;
`;

const Date = styled.h3``;
const Desc = styled.h3`
  text-decoration: underline;
  cursor: pointer;
`;
const Amount = styled.h3``;
const OkDesc = styled.h3``;
const Ok = styled.button``;

const List = styled.div`
  white-space: nowrap;
  width: 90%;
  align-items: center;
  display: flex;
  flex-direction: row;
  padding: 15px;
  justify-content: space-between;
  div {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  button {
    border: none;
    border-radius: 50px;
    padding: 10px;
    color: #f6f6f6;
  }
  div.ok {
    width: 20%;
  }
`;

const Head = styled.div`
  display: flex;
  flex-direction: row;
  padding: 15px;
  justify-content: space-between;
  align-items: center;

  button {
    background-color: #212129;
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

const Container = styled.div`
  white-space: nowrap;
  overflow-y: auto;
  -ms-overflow-style: none;
  -webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
  position: relative;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  max-width: 100%;
  max-height: 100%;
  margin-left: 30px;
  color: #f6f6f6;
  background-color: #212129;
  border-radius: 20px 20px 0px 0px;
  border-top: 1px solid #f6f6f6;
  border-left: 1px solid #f6f6f6;
  border-right: 1px solid #f6f6f6;
  h3 {
    font-weight: 300;
    font-size: 15px;
  }
  h1 {
    font-weight: 600;
    font-size: 20px;
  }
`;

export default Latest;
