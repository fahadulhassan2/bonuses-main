import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import Layout from "../components/Layout";
import { ClearButton } from "../components/Buttons";

import HOWTO from "../public/static/HOWTO.svg";
import Logo from "../public/static/logo.svg";

const ranksTemp = [
  {
    rank: 1,
    name: "Madness",
    wagered: 3500,
    prize: 500,
  },
  {
    rank: 2,
    name: "Madness",
    wagered: 3500,
    prize: 500,
  },
  {
    rank: 3,
    name: "Madness",
    wagered: 3500,
    prize: 500,
  },
  {
    rank: 4,
    name: "Madness",
    wagered: 3500,
    prize: 500,
  },
  {
    rank: 5,
    name: "Madness",
    wagered: 3500,
    prize: 500,
  },
  {
    rank: 6,
    name: "Madness",
    wagered: 3500,
    prize: 500,
  },
  {
    rank: 7,
    name: "Madness",
    wagered: 3500,
    prize: 500,
  },
  {
    rank: 8,
    name: "Madness",
    wagered: 3500,
    prize: 500,
  },
  {
    rank: 9,
    name: "Madness",
    wagered: 3500,
    prize: 500,
  },
  {
    rank: 10,
    name: "Madness",
    wagered: 3500,
    prize: 500,
  },
];

function Leaderboard(props: any) {
  const [ranks, setRanks] = useState(ranksTemp.slice(2));
  const [top, setTop] = useState([ranksTemp[1], ranksTemp[0], ranksTemp[2]]);

  useEffect(() => {
    setRanks(ranksTemp.slice(2));
    setTop([ranksTemp[1], ranksTemp[0], ranksTemp[2]]);
  }, []);

  return (
    <Layout>
      <div className="flex flex-col w-full relative">
        <div className="bg-mainBg flex flex-col items-center justify-center pt-8 relative">
          <div className="absolute z-50 top-[350px]">
            <div className="flex flex-col items-center relative">
              <div className="flex flex-row items-center relative">
                <Image
                  className=""
                  src={Logo}
                  alt="logo"
                  width="80px"
                  height="80px"
                />
                <div className="text-5xl font-bold mt-6 sm:text-2xl">Bonuses</div>
              </div>
              <Link href="https://twitter.com/bonusesdotgg" passHref={true}>
                <a className="lg:text-lg sm:text-sm font-bold">
                  To be notified on the launch of our leaderboard, follow us on
                  twitter @BonusesDotGG
                </a>
              </Link>
            </div>
          </div>
          <div className="relative opacity-25">
            <div className="flex flex-col items-center max-w-screen-2xl  px-4 xl:px-0 relative">
              <div className="font-specify font-bold text-3xl sm:text-2xl bg-set">Leaderboard</div>
            </div>
            <div className="flex flex-col items-center max-w-screen-xl w-full px-4 xl:px-0 relative">
              <div className="flex flex-col gap-32 md:gap-0 justify-evenly md:flex-row space-x-0 md:space-x-4 w-full mt-32 relative">
                {top.map((rank: any) => {
                  let move = null;

                  if (rank.rank === 1) {
                    move = "absolute top-[-55px]";
                  }

                  return (
                    <div
                      className={`${move} flex flex-col items-center relative bg-gradient-to-r from-footerY via-footerM to-footerY rounded-md w-[352px] py-6 px-7`}
                      key={rank.rank}
                      style={{
                        boxShadow: "inset 0px 1px 0px rgba(72, 72, 179, 0.44)",
                      }}
                    >
                      <div
                        className="absolute top-[-0px] w-[150px] h-[75px] rounded-bl-full rounded-br-full"
                        style={{
                          background:
                            "linear-gradient(180deg, #17174B 0%, rgba(23, 23, 75, 0) 100%)",
                          boxShadow: "inset 0px 0px 44px rgba(0, 0, 0, 0.05)",
                        }}
                      />
                      <div
                        className="absolute top-[-50px] font-bold text-active text-3xl rounded-full w-[100px] h-[100px] flex items-center justify-center"
                        style={{
                          background:
                            "linear-gradient(201.1deg, rgba(138, 147, 255, 0.33) 13.92%, rgba(104, 114, 234, 0.33) 46.24%, rgba(138, 147, 255, 0.33) 86.08%), #21215D",
                        }}
                      >
                        #{rank.rank}
                      </div>
                      <div className="space-y-4 flex flex-col items-center mt-14">
                        <div className="font-bold text-xl">{rank.name}</div>
                        <div className="text-warningTxt text-sm">
                          ${rank.wagered}
                        </div>
                      </div>
                      <ClearButton className="w-full h-[57px] flex items-center justify-center mt-11">
                        <div>${rank.prize.toFixed(2)}</div>
                      </ClearButton>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-col items-center max-w-screen-2xl w-full px-4 xl:px-0 mt-24">
              <div className="flex flex-col space-y-[7px] w-full">
                <div className="flex flex-row items-center justify-between w-full text-warningTxt text-base">
                  <div className="w-full">User</div>
                  <div className="flex flex-row w-full justify-between">
                    <div className="">Wagered</div>
                    <div className="pr-4">Prize</div>
                  </div>
                </div>
                {ranks.map((rank) => {
                  return (
                    <div
                      key={rank.rank}
                      className="w-full flex flex-col sm:flex-row items-center sm:h-[52px] sm:space-x-[7px] space-y-4 sm:space-y-0"
                    >
                      <div className="sm:w-[52px] sm:h-[52px] bg-gradient-to-r from-footerY/50 via-footerM/50 to-footerY/50 flex items-center justify-center rounded-md">
                        #{rank.rank}
                      </div>
                      <div className="w-full flex flex-col sm:flex-row items-center justify-between bg-gradient-to-b from-footerY via-footerM to-footerY rounded-md sm:h-[52px]">
                        <div className="font-bold text-sm sm:pl-4">
                          {rank.name}
                        </div>
                        <div className="font-medium text-sm">
                          ${rank.wagered.toFixed(2)}
                        </div>
                        <div className="sm:pr-4 font-medium text-sm">
                          ${rank.prize.toFixed(2)}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div
            className="w-full min-h-[464px] flex flex-col items-center justify-center space-y-3 border-t-2 border-active/25 mt-24 relative"
            style={{
              background:
                "radial-gradient(91.5% 91.5% at 50% 8.5%, #12123D 0%, rgba(11, 11, 45, 0.4) 100%)",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
          >
            <div className="absolute top-[0%]">
              <Image
                src={HOWTO}
                alt="how to"
                width="2151"
                height="347"
                style={{ mixBlendMode: "overlay", opacity: 1 }}
              />
            </div>
            <div className="font-bold font-specify text-3xl">
              How to use Stake.com
            </div>
            <div className="text-base text-warningTxt text-center lg:text-lg sm:text-sm ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <ClearButton
              className="h-[53px] flex items-center justify-center w-[168px] !mt-12 liner"
              path="/stake"
            >
              How to
            </ClearButton>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Leaderboard;
