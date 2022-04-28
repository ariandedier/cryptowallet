import React from "react";
import styled from "styled-components";
import { FaBtc } from "react-icons/fa";
import { FaEthereum } from "react-icons/fa";
import { SiLitecoin } from "react-icons/si";
import { FaViacoin } from "react-icons/fa";

const Wallets = () => {
  return (
    <Container>
      <div className="title">
        <h1>My Wallets</h1>
        <button>More Details</button>
      </div>
      <div className="wallets" id="wallets">
        <div className="card">
          <h1>Rates</h1>
          <h3>1.00 BTC = $42.483,10</h3>
          <h4>1.05% 24 hours</h4>
          <div className="in">
            <h1>Wallet</h1>
            <div className="cardin">
              <Amount1>
                <h3>1.09 BTC</h3>
                <h4>$46 306,58</h4>
              </Amount1>
              <div>
                <Button1>
                  <FaBtc size={25} />
                </Button1>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <h1>Rates</h1>
          <h3>1.00 ETH = $885,4</h3>
          <h4>1.05% 24 hours</h4>
          <div className="in">
            <h1>Wallet</h1>
            <div className="cardin">
              <Amount2>
                <h3>566.07 ETC</h3>
                <h4>$501 136,39</h4>
              </Amount2>
              <div>
                <Button2>
                  <FaEthereum size={25} />
                </Button2>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <h1>Rates</h1>
          <h3>1.00 LTC = $121,9</h3>
          <h4>1.05% 24 hours</h4>
          <div className="in">
            <h1>Wallet</h1>
            <div className="cardin">
              <Amount3>
                <h3>332.88 LTC</h3>
                <h4>$40 470,80</h4>
              </Amount3>
              <div>
                <Button3>
                  <SiLitecoin size={25} />
                </Button3>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <h1>Rates</h1>
          <h3>1.00 VIA = $0,075632</h3>
          <h4>1.05% 24 hours</h4>
          <div className="in">
            <h1>Wallet</h1>
            <div className="cardin">
              <Amount4>
                <h3>12 562,26 VIA</h3>
                <h4>$950,08</h4>
              </Amount4>
              <div>
                <Button4>
                  <FaViacoin size={25} />
                </Button4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Total>
        <button className="b1">Send</button>
        <button className="b2">Replenish</button>
        <div className="total">
          <h1>Total Balance</h1>
          <h3>$588 863,85</h3>
        </div>
      </Total>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  max-height: 100%;
  margin-left: 30px;
  color: #f6f6f6;

  div.title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width: 100%;

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
  }

  div.wallets {
    cursor: grab;
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    gap: 20px;
    white-space: nowrap;
    overflow-x: scroll;
    overflow-y: hidden;
    -ms-overflow-style: none;
    -webkit-scrollbar {
      display: none;
    }
    scrollbar-width: none;
    position: relative;
    width: 100%;
    max-width: 100%;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;

    div.card {
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      width: 300px;
      height: 320px;
      background: linear-gradient(
        164deg,
        rgba(255, 252, 0, 1) 0%,
        rgba(183, 202, 219, 1) 0%,
        rgba(92, 109, 125, 1) 52%
      );
      padding: 10px;
      border-radius: 15px;
      max-width: 100%;
      min-width: 30%;

      div.in {
        margin-top: 100px;
      }
      h1 {
        font-weight: 600;
        font-size: 25px;
      }
      h3 {
        font-weight: 300;
        font-size: 20px;
      }
      h4 {
        font-weight: 300;
        font-size: 15px;
      }
    }
    div.card:nth-child(2) {
      background: linear-gradient(
        164deg,
        rgba(255, 252, 0, 1) 0%,
        rgba(199, 180, 238, 1) 0%,
        rgba(134, 118, 167, 1) 52%
      );
    }
    div.card:nth-child(3) {
      background: linear-gradient(
        164deg,
        rgba(255, 252, 0, 1) 0%,
        rgba(134, 198, 207, 1) 0%,
        rgba(83, 127, 133, 1) 52%
      );
    }
    div.card:nth-child(4) {
      background: linear-gradient(
        164deg,
        rgba(255, 252, 0, 1) 0%,
        rgba(76, 82, 101, 1) 0%,
        rgba(45, 49, 62, 1) 62%
      );
    }
  }
  div.cardin {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #f6f6f6;
    padding: 20px;
    border-radius: 15px;
    h4 {
      font-weight: 600;
      color: #212129;
    }
    button {
      padding: 10px;
      border-radius: 10px;
      border: none;
      color: #f6f6f6;
      font-weight: 600;
      margin-left: 20px;
      cursor: pointer;
    }
  }
`;
const Amount1 = styled.div`
  color: #b7cadb;
`;
const Amount2 = styled.div`
  color: #c7b4ee;
`;
const Amount3 = styled.div`
  color: #86c6cf;
`;
const Amount4 = styled.div`
  color: #4c5265;
`;

const Button1 = styled.button`
  background-color: #b7cadb;
  :hover {
    background-color: #9eb0c0;
    transition: 0.5s;
  }
`;
const Button2 = styled.button`
  background-color: #c7b4ee;
  :hover {
    background-color: #af9adb;
    transition: 0.5s;
  }
`;
const Button3 = styled.button`
  background-color: #86c6cf;
  :hover {
    background-color: #659ea6;
    transition: 0.5s;
  }
`;
const Button4 = styled.button`
  background-color: #4c5265;
  :hover {
    background-color: #2d313e;
    transition: 0.5s;
  }
`;
const Total = styled.div`
  max-width: 100%;
  width: auto;
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-top: 20px;

  button.b1 {
    background-color: #212129;
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
  button.b2 {
    background-color: #f6f6f6;
    padding: 15px;
    border-radius: 10px;
    border: 1px solid;
    border-color: #f6f6f6;
    color: #212129;
    font-weight: 600;
    width: 150px;
    cursor: pointer;
  }
  div.total {
    display: flex;
    width: 100%;
    border-radius: 10px;
    background: linear-gradient(
      164deg,
      rgba(255, 252, 0, 1) 0%,
      rgba(178, 179, 189, 1) 0%,
      rgba(100, 101, 115, 1) 62%
    );
    color: #f6f6f6;
    align-items: center;
    padding: 10px;
    justify-content: space-between;
    max-width: 65%;

    h1 {
      font-weight: 300;
      font-size: 20px;
    }
    h3 {
      font-weight: 600;
    }
  }
`;

// const slider = document.querySelector(".wallets");
// let isDown = false;
// let startX;
// let scrollLeft;

// slider.addEventListener("mousedown", (e) => {
//   isDown = true;
//   slider.classList.add("active");
//   startX = e.pageX - slider.offsetLeft;
//   scrollLeft = slider.scrollLeft;
// });
// slider.addEventListener("mouseleave", () => {
//   isDown = false;
//   slider.classList.remove("active");
// });
// slider.addEventListener("mouseup", () => {
//   isDown = false;
//   slider.classList.remove("active");
// });
// slider.addEventListener("mousemove", (e) => {
//   if (!isDown) return;
//   e.preventDefault();
//   const x = e.pageX - slider.offsetLeft;
//   const walk = (x - startX) * 3;
//   slider.scrollLeft = scrollLeft - walk;
//   console.log(walk);
// });

export default Wallets;
