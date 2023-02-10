import Link from "next/link";
import Image from "next/image";

import Layout from "../components/Layout";
import { ClearButton, RewardsButton } from "../components/Buttons";

import Roobet from "../public/static/roobet.png";
import Stake from "../public/static/stake.png";
import ChipsGG from "../public/static/chipsgg.png";
import SweetBonanza from "../public/static/sweetbonanza.png";

const reviews = [
  {
    image: SweetBonanza,
    title: "Sweet Bonanza",
    by: "by Pragmatic Play",
    code: "daancs",
    link: "http://stake.com",
    stars: 4,
    available: [Stake, Roobet, ChipsGG],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    image: SweetBonanza,
    title: "Sweet Bonanza",
    by: "by Pragmatic Play",
    code: "daancs",
    link: "http://stake.com",
    stars: 4,
    available: [Stake, Roobet, ChipsGG],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    image: SweetBonanza,
    title: "Sweet Bonanza",
    by: "by Pragmatic Play",
    code: "daancs",
    link: "http://stake.com",
    stars: 4,
    available: [Stake, Roobet, ChipsGG],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

function SlotReviews(props: any) {
  return (
    <Layout>
      <div className="flex flex-col w-full">
        <div className="bg-mainBg flex justify-center py-8 pb-56">
          <div className="flex flex-col items-center sm:items-start max-w-screen-2xl w-full px-4 xl:px-0">
            <div className="text-2xl font-specify font-bold">Slot Reviews</div>
            <div className="text-base text-warningTxt">
              Compare the Best Online Casinos & Deposit Bonuses
            </div>
            <div className="flex flex-col space-y-8 w-full mt-8">
              {reviews.map((item, index) => (
                <div
                  key={index}
                  className="w-full flex flex-col lg:flex-row bg-gradient-to-b from-footerY via-footerM to-footerY rounded-md"
                  style={{
                    boxShadow: "inset 0px 1px 0px rgba(72, 72, 179, 0.44)",
                  }}
                >
                  <div className="flex flex-col items-center text-center lg:w-[346px] py-6 px-6 space-y-2 rounded-l-md">
                    <div className="">
                      <Image
                        src={item.image}
                        alt="review"
                        width="139px"
                        height="81px"
                      />
                    </div>
                    <div className="font-bold text-white">{item.title}</div>
                    <div className="text-warningTxt text-xs">{item.by}</div>
                  </div>
                  <div
                    className="flex flex-col py-6 px-8 w-full space-y-4"
                    style={{
                      background:
                        "linear-gradient(180deg, #17174B 0%, rgba(23, 23, 75, 0) 100%)",
                      boxShadow: "inset 0px 0px 44px rgba(0, 0, 0, 0.05)",
                    }}
                  >
                    <div className="text-xs text-warningTxt">
                      {item.description}
                    </div>
                    <div className="w-full border border-warningTxt/25" />
                    <div className="flex flex-row items-center space-x-4">
                      <div className="text-xs text-warningTxt font-bold">
                        Available on
                      </div>
                      <div className="flex items-center">
                        <Image
                          src={item.available[0]}
                          alt="available on"
                          width="38px"
                          height="18px"
                        />
                      </div>
                      <div className="flex items-center">
                        <Image
                          src={item.available[1]}
                          alt="available on"
                          width="70px"
                          height="18px"
                        />
                      </div>
                      <div className="flex items-center">
                        <Image
                          src={item.available[2]}
                          alt="available on"
                          width="50px"
                          height="18px"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center lg:w-[246px] justify-center px-8 space-y-4">
                    <ClearButton className="w-[200px] h-[57px] flex items-center justify-center">
                      <div className="font-medium">Play on Stake</div>
                    </ClearButton>
                    <div className="flex flex-row space-x-1">
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
                          stroke="#FFC32B"
                        />
                      </svg>
                      <div className="text-xs !ml-2.5">{item.stars}/5</div>
                    </div>
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

export default SlotReviews;
