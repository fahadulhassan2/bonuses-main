import Link from "next/link";
import Image from "next/image";

import Layout from "../components/Layout";
import BonusCards from "../components/BonusCards";
import { ClearButton, RewardsButton } from "../components/Buttons";
import rol from  "./Artboard.png";


import Roobet from "../public/static/roobet.png";

const featured = [
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
 
];

const bonuses = [
  {
    image: "https://rocketpot.io/static/img/rocket_icon.de54b120c0cb.svg",
    title: "Rocketpot",
    plainUrl: "Rocketpot.io",
    code: "DaaN",
    reward: "Deposit Bonus up to 1 BTC",
    link: "https://record.rocketpotaffiliates.io/_FgDsiETCGFSVAv0U_Fv2nWNd7ZgqdRLk/1/",
  },
  {
    image: "https://gamdom.com/build/logo.c13e920c68b0bd27a349.svg",
    title: "Gamdom",
    plainUrl: "Gamdom.com",
    code: "DaaN",
    reward: "Rakeback & Rewards",
    link: "https://gamdom.com/r/daan",
  },
  {
    image:
      "https://cryptogamble.tips/wp-content/uploads/2021/05/chips.gg-logo.webp",
    title: "Chips",
    plainUrl: "Chips.gg",
    code: "Bonuses",
    reward: "Rakeback & Rewards",
    link: "https://chips.gg/?r=bonuses",
  },
  {
    image: "https://bc.game/assets/logo.b7a2c469.png",
    title: "BCGame",
    plainUrl: "bc.game",
    code: "v1c58l7",
    reward: "Up to a 180% Deposit Bonus",
    link: "https://bc.game/i-v1c58l7-n/",
  },
  {
    image:
      "https://bc-api.partners.io/system/file/settings/7/original.jpg?1544692994",
    title: "Bitcasino",
    plainUrl: "Bitcasino.io",
    code: "Use Link",
    reward: "Deposit Bonuses & Rewards",
    link: "https://clicks.bitcasino.io/?serial=6231&creative_id=5&anid=",
  },
  {
    image: "https://vipgames.com/wp-content/uploads/2019/07/vipGames_logo.png",
    title: "VIPGame",
    plainUrl: "VIPGame.io",
    code: "Bonuses",
    reward: "Rewards & Rakeback",
    link: "https://vipgame.io?code=bonuses",
  },
  {
    image: "https://freecash.com/public/img/freecashLogo.svg",
    title: "FreeCash",
    plainUrl: "FreeCash.com",
    code: "Bonuses",
    reward: "Free Case",
    link: "https://freecash.com/r/Bonuses",
  },
  {
    image: "https://www.hypedrop.com/en/assets/logo-dark.svg",
    title: "Hypedrop",
    plainUrl: "Hypedrop.com",
    code: "DaaN",
    reward: "3 Free Cases & 5% Deposit Bonuses",
    link: "https://hypedrop.com/r/DAAN",
  },
  {
    image: "https://www.csgoroll.com/en/assets/logo.png",
    title: "CSGORoll",
    plainUrl: "CSGORoll.com",
    code: "Bonuses",
    reward: " Free Cases & 5% Deposit Bonuses",
    link: "https://csgoroll.com/r/BONUSES",
  },
  {
    image: "https://csgoempire.com/img/coin-bonus.806c9d88.png",
    title: "CSGOEmpire",
    plainUrl: "CSGOEmpire.com",
    code: "DaaN",
    reward: "Free Cases",
    link: "https://csgoempire.com/r/daan",
  },
  {
    image: "https://www.ezy.com/static/media/datdrop.c52d7813.png",
    title: "DatDrop",
    plainUrl: "DatDrop.com",
    code: "DaaN",
    reward: "5% Deposit Bonus",
    link: "https://datdrop.com/p/DaaN",
  },
  {
    image:
      "https://daddycrypto.com/static/images/logo-default-ukraine.da899c9b.png",
    title: "DaddyCrypto",
    plainUrl: "DaddyCrypto.com",
    code: "DaaN",
    reward: "5% Deposit Bonus",
    link: "https://daddycrypto.com/promo-code/DaaN",
  },
  {
    image: "https://i.ibb.co/NVzHCGf/bounty-logo-white-1.png",
    title: "BountyGG",
    plainUrl: "Bounty.gg",
    code: "Bonuses",
    reward: "Free Credit",
    link: "https://bounty.gg/",
  },
 
];

function Bonuses(props: any) {
  return (
    <Layout className="bg-mainBg ">
      <div className="flex flex-col w-full ">
        <div className="bg-mainBg flex justify-center py-8">
          <div className="flex flex-col max-w-screen-2xl items-center w-[90%] justify-between">
            <div className="flex flex-col lg:flex-row  w-full space-x-4 items-center">
              <div className="font-specify font-bold text-3xl">Featured</div>
              <div className="text-warningTxt text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </div>
            <div className="grid gird-rows-2 md:grid-cols-6 gap-4  w-full py-4">
              {featured.map((item, index) => {
                return (
                  <div
                    className={`${
                      index < 2 ? " col-span-0 lg:col-span-3  md:col-span-2" : ""
                    } col-span-0  md:col-span-2 justify-center  items-center py-5 px-4 bg-gradient-to-b from-footerY via-footerM to-footerY rounded-md`}
                    key={index}
                  >
                    <div className="text-center my-6">
                      <Image
                        src={item.image}
                        width="189px"
                        height="49px"
                        alt="crypto"
                      />
                    </div>
                    <div className="text-center ">
                      <div className="text-xl font-bold">{item.title}</div>
                      <div className="text-warningTxt text-md">
                        {item.plainUrl}
                      </div>
                    </div>
                    <div className="flex flex-col pt-12 w-full space-y-2">
                      <RewardsButton className="w-full text-center h-[57px] flex items-center justify-center hur">
                        <div className="flex flex-row items-center justify-center font-medium text-base space-x-4 ">
                          <svg
                            width="13"
                            height="13"
                            viewBox="0 0 13 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12.22 12.4976C12.22 12.7755 11.9876 13 11.7 13H7.0525V7.09662H12.22V12.4976ZM5.9475 13H1.3C1.01238 13 0.780001 12.7755 0.780001 12.4976V7.09662H5.9475V13ZM0.52 3.3285H2.9185C2.6975 2.99251 2.5675 2.59372 2.5675 2.16667C2.5675 0.97186 3.57338 0 4.81 0C5.48275 0 6.08888 0.288889 6.5 0.744203C6.91113 0.288889 7.51725 0 8.19 0C9.42663 0 10.4325 0.97186 10.4325 2.16667C10.4325 2.59372 10.3041 2.99251 10.0815 3.3285H12.48C12.7676 3.3285 13 3.55302 13 3.83092V6.02899H7.0525V3.3285H5.9475V6.02899H0V3.83092C0 3.55302 0.232375 3.3285 0.52 3.3285ZM7.0525 3.2657H8.19C8.81725 3.2657 9.3275 2.77271 9.3275 2.16667C9.3275 1.56063 8.81725 1.06763 8.19 1.06763C7.56275 1.06763 7.0525 1.56063 7.0525 2.16667V3.2657ZM4.81 3.2657H5.9475V2.16667C5.9475 1.56063 5.43725 1.06763 4.81 1.06763C4.18275 1.06763 3.6725 1.56063 3.6725 2.16667C3.6725 2.77271 4.18275 3.2657 4.81 3.2657Z"
                              fill="#7781FF"
                            />
                          </svg>
                          <div>{item.reward}</div>
                        </div>
                      </RewardsButton>

                      <a href={item.link} className="mt-4 w-full">
                        <ClearButton className="text-center py-4 liner">
                          <div className="font-medium text-base">
                            Claim Bonus
                          </div>
                        </ClearButton>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="bg-featuredBg flex justify-center py-16 border-t-2 border-active/25">
          <div className="flex flex-col max-w-screen-2xl items-center w-[90%] justify-between">
            <div className="flex flex-col lg:flex-row w-full space-x-4 items-center">
              <div className="font-specify font-bold text-3xl">
                More Bonuses
              </div>
              <div className="text-warningTxt text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </div>
            <BonusCards bonuses={bonuses} />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Bonuses;
