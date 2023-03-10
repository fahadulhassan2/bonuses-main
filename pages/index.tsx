import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import Layout from "../components/Layout";
import { ClearButton, DarkButton } from "../components/Buttons";
import NavCards from "../components/NavCards";
import BonusCards from "../components/BonusCards";

import roulette from "../public/static/roulette.svg";
import Roobet from "../public/static/roobet.png";
import Test from "../public/static/test.png";

const bonuses = [
  {
    image: "https://i.imgur.com/iX5SfJC.png",
    title: "Stake",
    plainUrl: "Stake.com",
    code: "Bonuses",
    reward: "10% Rakeback, $7 Reload & VIP Rewards",
    link: "https://stake.com/?c=Bonuses",
  },
  {
    image: "https://rollbit.com/static/media/rollbit-logo-glow.9277851a6346811f86d40f1c9e365d65.svg",
    title: "Rollbit",
    plainUrl: "Rollbit.com",
    code: "Bonuses",
    reward: "20% Rakeback & Rewards",
    link: "https://rollbit.com/referral/bonuses",
  },
  {
    image: "https://i.imgur.com/0djjgFo.png",
    title: "DuelBits",
    plainUrl: "Duelbits.com",
    code: "Bonuses",
    reward: "Rakeback & VIP Rewards",
    link: "https://duelbits.com/?a=bonuses",
  },
  {
    image: "https://roobet.com/images/logo.svg",
    title: "Roobet",
    plainUrl: "Roobet.com",
    code: "DaaN",
    reward: "Rakeback & VIP Rewards",
    link: "https://roobet.com/?ref=daan",
  },
  {
    image:
      "https://s3-eu-west-1.amazonaws.com/tpd/logos/5c90a779c0170b0001e5ffb5/0x0.png",
    title: "500",
    plainUrl: "CSGO500.com",
    code: "DaaN",
    reward: "Welcome Bonus & VIP Rewards",
    link: "https://csgo500.com/r/DAAN",
  },
  {
    image:
      "https://s3-eu-west-1.amazonaws.com/tpd/logos/5c90a779c0170b0001e5ffb5/0x0.png",
    title: "500",
    plainUrl: "CSGO500.com",
    code: "DaaN",
    reward: "Welcome Bonus & VIP Rewards",
    link: "https://csgo500.com/r/DAAN",
  },
];

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative w-full flex flex-col items-center bg-mainBg pt-20 px-2 sm:px-20 dm:px-20">
        <div className="relative max-w-screen-2xl w-full flex flex-col">
          <div
            className="hidden md:block absolute opacity-100 bottom-[980px]"
            style={{ mixBlendMode: "overlay" }}
          >
            <Image src={Test} alt="test" width={1597} height={822} />
          </div>
          <div className="flex flex-row justify-between items-center z-50 px-4 xl:px-0">
            <div className="flex flex-col text-center sm:text-left md:w-[641px]">
              <div className="font-specify font-bold text-3xl xl:text-3xl  lg:text-2xl  md:text-xl sm:text-2xl">
                Claim Bonuses Receive Rewards
              </div>
              <div className="text-warningTxt my-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
              <div className="flex flex-col items-center justify-center sm:justify-start sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0 mt-16">
                <ClearButton
                  className="w-[168px] h-[53px] flex flex-col items-center justify-center liner"
                  path="/bonuses"
                >
                  <div className="text-base font-medium ">Claim Bonuses</div>
                </ClearButton>
                <DarkButton
                  className="w-[168px] h-[53px] flex flex-col items-center justify-center"
                  path="/giveaways"
                >
                  <div className="text-base font-medium text-darkBorder bg-set">
                    Giveaways
                  </div>
                </DarkButton>
              </div>
            </div>
            <div className=" justify-self-start  hidden md:block">
              <Image
                src={roulette}
                alt="roulette"
                width="605px"
              />
            </div>
          </div>
          <NavCards />
        </div>
      </div>
      <div className="flex flex-col w-full items-center bg-featuredBg border-t-2 border-active/25 py-12 px-2 sm:px-20 dm:px-20">
        <div className="max-w-screen-2xl w-full flex flex-col items-center">
          <div className="flex flex-col text-center space-y-3.5">
            <div className="font-specify font-bold text-2xl sm:text-2xl">
              Featured Bonuses
            </div>
            <div className="text-warningTxt text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut <br /> labore et dolore magna aliqua
            </div>
          </div>
          <BonusCards bonuses={bonuses} />
          <DarkButton className="py-3 px-9" path="/bonuses">
            <div className="text-base font-medium text-darkBorder">
              View more
            </div>
          </DarkButton>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
