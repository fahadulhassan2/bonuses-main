import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { ClearButton, RewardButtonMain } from "./Buttons";

function Card({ image, title, plainUrl, code, reward, link }: any) {
  const [hover, setHover] = useState(false);

  const hovered = () => {
    setHover(!hover);
  };

  return (
    <div
      className="grid lg:grid-cols-3  lg:place-items-center  xl:gap-[12rem]  lg:gap-[4rem]  bg-gradient-to-b from-footerY via-footerM to-footerY rounded-md items-center lg:justify-between justify-center lg:h-[102px] space-y-4 lg:space-y-0 p-4 lg:p-0 "
      style={{ boxShadow: "inset 0px 1px 0px rgba(72, 72, 179, 0.44)" }}
      onMouseEnter={() => hovered()}
      onMouseLeave={() => hovered()}
    >
      <div className="flex flex-row items-center space-x-12 lg:ml-8">
        <div className="w-[140px] h-[40px]">
          <Image src={image} width="140px" height="36px" alt="bonus" />
        </div>
        <div className="flex flex-col">
          <div className="font-bold text-xl">{title}</div>
          <div className="text-warningTxt text-base">{plainUrl}</div>
        </div>
      </div>
      <RewardButtonMain
        className="h-full flex flex-col items-center justify-center px-4 py-4 lg:w-[365px]  text-center liner"
        code={code}
        reward={reward}
        hover={hover}
      />
      <div className="flex flex-col lg:flex-row space-x-4 items-center">
        <div className="px-2 py-2 bg-gradient-to-b from-bonusesBg to-transparent rounded-full">
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 14C3.1339 14 0 10.8661 0 7C0 3.1339 3.1339 0 7 0C10.8661 0 14 3.1339 14 7C14 10.8661 10.8661 14 7 14ZM7 5.6C6.81435 5.6 6.6363 5.67375 6.50503 5.80503C6.37375 5.9363 6.3 6.11435 6.3 6.3V9.8C6.3 9.98565 6.37375 10.1637 6.50503 10.295C6.6363 10.4262 6.81435 10.5 7 10.5C7.18565 10.5 7.3637 10.4262 7.49497 10.295C7.62625 10.1637 7.7 9.98565 7.7 9.8V6.3C7.7 6.11435 7.62625 5.9363 7.49497 5.80503C7.3637 5.67375 7.18565 5.6 7 5.6ZM7 4.9C7.18565 4.9 7.3637 4.82625 7.49497 4.69497C7.62625 4.5637 7.7 4.38565 7.7 4.2C7.7 4.01435 7.62625 3.8363 7.49497 3.70503C7.3637 3.57375 7.18565 3.5 7 3.5C6.81435 3.5 6.6363 3.57375 6.50503 3.70503C6.37375 3.8363 6.3 4.01435 6.3 4.2C6.3 4.38565 6.37375 4.5637 6.50503 4.69497C6.6363 4.82625 6.81435 4.9 7 4.9Z"
              fill="#7A7AA9"
            />
          </svg>
        </div>

        <ClearButton
          className="px-[4rem] py-[1rem] flex items-center justify-end liner"
          outside
          path={link}
        >
          Claim Bonus
        </ClearButton>
      </div>
    </div>
  );
}

export default Card;
