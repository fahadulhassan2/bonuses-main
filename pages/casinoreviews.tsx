import Link from "next/link";
import Image from "next/image";

import Layout from "../components/Layout";
import { ClearButton, RewardsButton } from "../components/Buttons";

import Roobet from "../public/static/roobet.png";

const reviews = [
  {
    image: "https://i.imgur.com/iX5SfJC.png",
    title: "Stake",
    plainUrl: "Stake.com",
    code: "Bonuses",
    reward: "10% Rakeback & $7 Free",
    link: "https://stake.com/?c=Bonuses",
    stars: 5,
    pros: [
      "Thousands of Available Games",
      "10% Rakeback on All Bets",
      "VIP Bonuses",
      "Weekly and Monthly Bonuses",
      "24/7 Live Support",
    ],
    cons: ["No native casino apps"],
    description:
      "Stake.com is a worldwide leader in crypto gambling with one of the best casino and sports betting platforms for Bitcoin and other cryptocurrencies. With thousands of availble games and multiple cryptocurrency-suported deposit and withdrawal methods alongside a strong community. With recently reaching 100 Billion bets, Stake is by far the largest and most popular online casino. By using the code 'Bonuses' on signing up and visiting the dedicated stake page, you can claim a $7 Reload upon signing up alongside many other benefits Stake has to offer.",
  },
  {
    image: "https://rollbit.com/static/media/rollbit-logo-glow.9277851a6346811f86d40f1c9e365d65.svg",
    title: "Rollbit",
    plainUrl: "Rollbit.com",
    code: "Bonuses",
    reward: "Rakeback & Rewards",
    link: "https://rollbit.com/referral/bonuses",
    stars: 5,
    pros: [
      "Thousands of Available Games",
      "Bonus Buy Battles",
      "NFT Gambling and Marketplace",
    ],
    cons: [
      "Limited number of available cryptocurrency deposit and withdraw methods",
    ],
    description:
      "Rollbit is an online casino platform specializing in cryptocurrencies. Founded in February 2020 by a team of entrepreneurs with a shared passion for online gambling, Rollbit is committed to creating unique and fun experiences for its users. Rollbit creates a unique experience by enabling the ability to leverage cryptocurrency and use NFTs on the website to gamble, trade buy & sell. Rollbit creates a more in-depth experience for the community by allowing users to go head to head in bonus buy battles against eachother; this is personally one of the Bonuses team's favourite features.",
  },
  {
    image: "https://i.imgur.com/0djjgFo.png",
    title: "Duelbits",
    plainUrl: "Duelbits.com",
    code: "daan",
    reward: "Rakeback & VIP System",
    link: "https://duelbits.com/?a=daan",
    stars: 5,
    pros: [
      "VIP System",
      "Rakeback and Rewards",
      "Variety of Deposit and Withdraw methods",
    ],
    cons: ["Limited Support"],
    description:
      "Duelbits has thousands of exciting, provably fair games and get the best odds on 50+ sports. Deposit with PayPal, Visa, Ethereum, Bitcoin, Litecoin & more. Featuring instant withdrawals and tons of rewards every day!",
  },
  {
    image: "https://roobet.com/images/logo.svg",
    title: "Roobet",
    plainUrl: "roobet.com",
    code: "daan",
    reward: "Rakeback & Rewards",
    link: "https://roobet.com/?ref=daan",
    stars: 5,
    pros: [
      "Curaçao Gaming license",
      "Roowards Cashback Program",
      "Over 3,000 Games to Play",
    ],
    cons: ["Curaçao Gaming license"],
    description:
      "Roobet is Crypto's fastest growing casino and has a library of 3,000+ exciting games and counting, including several games by Pragmatic Play, such as Rooolette. Play for Free in fun mode, and when you're ready simply Login or Register on Roobet and begin placing your first bet within minutes! Our massive online gambling community has placed over 2,000,000,000 bets and counting. Roooooo!",
  },
  {
    image: "https://i.imgur.com/0djjgFo.png",
    title: "Duelbits",
    plainUrl: "Duelbits.com",
    code: "daan",
    reward: "Rakeback & VIP System",
    link: "https://duelbits.com/?a=daan",
    stars: 5,
    pros: [
      "VIP System",
      "Rakeback and Rewards",
      "Variety of Deposit and Withdraw methods",
    ],
    cons: ["Limited Support"],
    description:
      "Duelbits has thousands of exciting, provably fair games and get the best odds on 50+ sports. Deposit with PayPal, Visa, Ethereum, Bitcoin, Litecoin & more. Featuring instant withdrawals and tons of rewards every day!",
  },
];

function CasinoReviews(props: any) {
  return (
    <Layout className="bg-mainBg w-[100%]">
      <div className="flex  w-auto  lg:w-[90%]">
        <div className="flex justify-center mx-auto py-8 pb-56">
          <div className="flex flex-col items-center sm:items-start max-w-screen-2xl w-full px-4 xl:px-0">
            <div className="font-specify font-bold xl:text-3xl lg:text-2xl md:text-xl sm:text-xl">
              Casino Reviews
            </div>
            <div className="text-base text-warningTxt">
              Compare the Best Online Casinos & Deposit Bonuses
            </div>
            <div className="flex flex-col space-y-8 w-full mt-8">
              {reviews.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col lg:flex-row bg-gradient-to-b from-footerY via-footerM to-footerY rounded-md"
                  style={{
                    boxShadow: "inset 0px 1px 0px rgba(72, 72, 179, 0.44)",
                  }}
                >
                  <div className="flex flex-col md:row items-center justify-evenly p-12 space-y-6 rounded-l-md">
                    <div>
                      <Image
                        src={item.image}
                        alt="review"
                        width="140px"
                        height="36px"
                      />
                    </div>
                    <div className="text-warningTxt text-xs">
                      {item.plainUrl}
                    </div>
                    <div className="flex flex-row  space-x-1">
                      <svg
                        width="14"
                        height="13"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.15253 0.511153C6.49908 -0.170384 7.50092 -0.170384 7.84747 0.511153L9.49832 3.75389L13.19 4.27386C13.965 4.38315 14.2744 5.30703 13.7136 5.83719L11.042 8.36241L11.6728 11.9262C11.8059 12.675 10.9951 13.2459 10.3013 12.8929L6.99965 11.2094L3.69867 12.8929C3.00556 13.2459 2.19484 12.6756 2.32646 11.9262L2.95726 8.36241L0.286364 5.83719C-0.274418 5.30771 0.0350271 4.38315 0.810041 4.27386L4.50168 3.75389L6.15253 0.511153Z"
                          fill="#FFC32B"
                        />
                      </svg>
                      <svg
                        width="14"
                        height="13"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.15253 0.511153C6.49908 -0.170384 7.50092 -0.170384 7.84747 0.511153L9.49832 3.75389L13.19 4.27386C13.965 4.38315 14.2744 5.30703 13.7136 5.83719L11.042 8.36241L11.6728 11.9262C11.8059 12.675 10.9951 13.2459 10.3013 12.8929L6.99965 11.2094L3.69867 12.8929C3.00556 13.2459 2.19484 12.6756 2.32646 11.9262L2.95726 8.36241L0.286364 5.83719C-0.274418 5.30771 0.0350271 4.38315 0.810041 4.27386L4.50168 3.75389L6.15253 0.511153Z"
                          fill="#FFC32B"
                        />
                      </svg>
                      <svg
                        width="14"
                        height="13"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.15253 0.511153C6.49908 -0.170384 7.50092 -0.170384 7.84747 0.511153L9.49832 3.75389L13.19 4.27386C13.965 4.38315 14.2744 5.30703 13.7136 5.83719L11.042 8.36241L11.6728 11.9262C11.8059 12.675 10.9951 13.2459 10.3013 12.8929L6.99965 11.2094L3.69867 12.8929C3.00556 13.2459 2.19484 12.6756 2.32646 11.9262L2.95726 8.36241L0.286364 5.83719C-0.274418 5.30771 0.0350271 4.38315 0.810041 4.27386L4.50168 3.75389L6.15253 0.511153Z"
                          fill="#FFC32B"
                        />
                      </svg>
                      <svg
                        width="14"
                        height="13"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.15253 0.511153C6.49908 -0.170384 7.50092 -0.170384 7.84747 0.511153L9.49832 3.75389L13.19 4.27386C13.965 4.38315 14.2744 5.30703 13.7136 5.83719L11.042 8.36241L11.6728 11.9262C11.8059 12.675 10.9951 13.2459 10.3013 12.8929L6.99965 11.2094L3.69867 12.8929C3.00556 13.2459 2.19484 12.6756 2.32646 11.9262L2.95726 8.36241L0.286364 5.83719C-0.274418 5.30771 0.0350271 4.38315 0.810041 4.27386L4.50168 3.75389L6.15253 0.511153Z"
                          fill="#FFC32B"
                        />
                      </svg>
                      <svg
                        width="14"
                        height="13"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.15253 0.511153C6.49908 -0.170384 7.50092 -0.170384 7.84747 0.511153L9.49832 3.75389L13.19 4.27386C13.965 4.38315 14.2744 5.30703 13.7136 5.83719L11.042 8.36241L11.6728 11.9262C11.8059 12.675 10.9951 13.2459 10.3013 12.8929L6.99965 11.2094L3.69867 12.8929C3.00556 13.2459 2.19484 12.6756 2.32646 11.9262L2.95726 8.36241L0.286364 5.83719C-0.274418 5.30771 0.0350271 4.38315 0.810041 4.27386L4.50168 3.75389L6.15253 0.511153Z"
                          fill="#FFC32B"
                        />
                      </svg>
                    
                      <div className="text-xs !ml-2.5">{item.stars}/5</div>
                    </div>
                  </div>
                  <div
                    className="flex flex-col py-6 px-8 w-full space-y-4"
                    style={{
                      background:
                        "linear-gradient(180deg, #17174B 0%, rgba(23, 23, 75, 0) 100%)",
                      boxShadow: "inset 0px 0px 44px rgba(0, 0, 0, 0.05)",
                    }}
                  >
                    <div className="flex flex-col md:flex-row space-x-6">
                      <div className="text-warningTxt text-xs">Pros</div>
                      {item.pros.map((item, index) => (
                        <div
                          className="flex flex-row space-x-4 items-center"
                          key={index}
                        >
                          <div
                            className="rounded-full px-2"
                            style={{
                              background:
                                "linear-gradient(180deg, rgba(0, 158, 105, 0.75) 0%, rgba(0, 158, 105, 0) 100%)",
                            }}
                          >
                            <div style={{ color: "#009E69" }}>+</div>
                          </div>
                          <div className="font-medium text-xs">{item}</div>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-col md:flex-row space-x-6">
                      <div className="text-warningTxt text-xs">Cons</div>
                      {item.cons.map((item, index) => (
                        <div className="flex flex-row space-x-4" key={index}>
                          <div
                            className="rounded-full px-2"
                            style={{
                              background:
                                "linear-gradient(180deg, rgba(246, 63, 107, 0.75) 0%, rgba(246, 63, 107, 0) 100%)",
                            }}
                          >
                            <div style={{ color: "#F63F6B" }}>-</div>
                          </div>
                          <div className="font-medium text-xs">{item}</div>
                        </div>
                      ))}
                    </div>
                    <div className="w-full border border-warningTxt/25" />
                    <div className="text-xs text-warningTxt">
                      {item.description}
                    </div>
                  </div>
                  <div className="flex flex-col  items-center justify-center px-8  space-y-4">
                    <ClearButton className="w-[200px] h-[57px] flex items-center justify-center liner">
                      <div className="font-medium ">Claim Bonus</div>
                    </ClearButton>
                    <RewardsButton className="w-[200px] h-[57px] text-center flex items-center justify-center">
                      <div className="flex flex-row justify-center font-medium text-sm space-x-2  ">
                        <svg
                        className="mt-[0.1rem] "
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
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default CasinoReviews;
