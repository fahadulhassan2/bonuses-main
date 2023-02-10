import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import Layout from "../components/Layout";
import { ClearButton } from "../components/Buttons";

import Ethereum from "../public/static/ethereum.png";

const give = [
  {
    image: Ethereum,
    title: "$50 Ethereum",
    value: 27,
    countdown: "25 Days",
    link: "https://github.com/",
  },
  {
    image: Ethereum,
    title: "$50 Ethereum",
    countdown: "23 Days",
    value: 50,
    link: "https://github.com/",
  },
  {
    image: Ethereum,
    title: "$50 Ethereum",
    countdown: "23 Days",
    value: 42,
    link: "https://github.com/",
  },
  {
    image: Ethereum,
    title: "$50 Ethereum",
    countdown: "23 Days",
    value: 30,
    link: "https://github.com/",
  },
  {
    image: Ethereum,
    title: "$50 Ethereum",
    countdown: "23 Days",
    value: 99,
    link: "https://github.com/",
  },
  {
    image: Ethereum,
    title: "$50 Ethereum",
    countdown: "24 Days",
    value: 299,
    link: "https://github.com/",
  },
];

function Giveaways(props: any) {
  const [giveaways, setGiveaways] = useState(give);
  const [ascending, setAscending] = useState(true);

  const toggle = () => {
    setAscending(!ascending);
  };

  /* sort give array by ascending and decending */
  useEffect(() => {
    if (ascending) {
      setGiveaways(giveaways.sort((a, b) => a.value - b.value));
    } else {
      setGiveaways(giveaways.sort((a, b) => b.value - a.value));
    }
  }, [ascending, giveaways]);

  return (
    <Layout className="bg-mainBg">
      <div className="flex flex-col w-[90%]">
        <div className=" flex justify-center py-8 pb-48">
          <div className="flex flex-col max-w-screen-2xl items-center w-full justify-between">
            <div className="flex flex-col w-full lg:flex-row justify-between  px-4 xl:px-0">
              <div className="font-specify font-bold text-3xl sm:text-2xl">Giveaways</div>
              <div
                className="text-warningTxt text-base flex flex-row items-center space-x-2"
                onClick={() => toggle()}
              >
                <div>Price {ascending ? "Ascending" : "Decending"}</div>

                {ascending ? (
                  <div className="flex flex-col">
                    <svg
                      width="8"
                      height="7"
                      viewBox="0 0 8 7"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="rotate-180 opacity-25"
                    >
                      <path
                        d="M7.49994 0.878906H0.500038C0.364534 0.878906 0.247392 0.938874 0.148419 1.05871C0.0494455 1.17868 0 1.32067 0 1.48481C0 1.64896 0.0494455 1.79105 0.148419 1.91095L3.64838 6.15326C3.74746 6.27322 3.86461 6.33329 4 6.33329C4.13539 6.33329 4.25265 6.27322 4.35154 6.15326L7.8515 1.91092C7.95036 1.79105 8 1.64896 8 1.48478C8 1.32067 7.95039 1.17868 7.8515 1.05867C7.75261 0.938741 7.63536 0.878906 7.49994 0.878906Z"
                        fill="#7A7AA9"
                      />
                    </svg>
                    <svg
                      width="8"
                      height="7"
                      viewBox="0 0 8 7"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.49994 0.878906H0.500038C0.364534 0.878906 0.247392 0.938874 0.148419 1.05871C0.0494455 1.17868 0 1.32067 0 1.48481C0 1.64896 0.0494455 1.79105 0.148419 1.91095L3.64838 6.15326C3.74746 6.27322 3.86461 6.33329 4 6.33329C4.13539 6.33329 4.25265 6.27322 4.35154 6.15326L7.8515 1.91092C7.95036 1.79105 8 1.64896 8 1.48478C8 1.32067 7.95039 1.17868 7.8515 1.05867C7.75261 0.938741 7.63536 0.878906 7.49994 0.878906Z"
                        fill="#7A7AA9"
                      />
                    </svg>
                  </div>
                ) : (
                  <div className="flex flex-col">
                    <svg
                      width="8"
                      height="7"
                      viewBox="0 0 8 7"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="rotate-180"
                    >
                      <path
                        d="M7.49994 0.878906H0.500038C0.364534 0.878906 0.247392 0.938874 0.148419 1.05871C0.0494455 1.17868 0 1.32067 0 1.48481C0 1.64896 0.0494455 1.79105 0.148419 1.91095L3.64838 6.15326C3.74746 6.27322 3.86461 6.33329 4 6.33329C4.13539 6.33329 4.25265 6.27322 4.35154 6.15326L7.8515 1.91092C7.95036 1.79105 8 1.64896 8 1.48478C8 1.32067 7.95039 1.17868 7.8515 1.05867C7.75261 0.938741 7.63536 0.878906 7.49994 0.878906Z"
                        fill="#7A7AA9"
                      />
                    </svg>
                    <svg
                      width="8"
                      height="7"
                      viewBox="0 0 8 7"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="opacity-25"
                    >
                      <path
                        d="M7.49994 0.878906H0.500038C0.364534 0.878906 0.247392 0.938874 0.148419 1.05871C0.0494455 1.17868 0 1.32067 0 1.48481C0 1.64896 0.0494455 1.79105 0.148419 1.91095L3.64838 6.15326C3.74746 6.27322 3.86461 6.33329 4 6.33329C4.13539 6.33329 4.25265 6.27322 4.35154 6.15326L7.8515 1.91092C7.95036 1.79105 8 1.64896 8 1.48478C8 1.32067 7.95039 1.17868 7.8515 1.05867C7.75261 0.938741 7.63536 0.878906 7.49994 0.878906Z"
                        fill="#7A7AA9"
                      />
                    </svg>
                  </div>
                )}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full py-12 px-4 xl:px-0">
              {giveaways.map((item, index) => {
                return (
                  <div
                    className="flex flex-col items-center py-5 bg-gradient-to-b from-footerY via-footerM to-footerY rounded-md px-4"
                    key={index}
                    style={{
                      boxShadow: "inset 0px 1px 0px rgba(72, 72, 179, 0.44)",
                    }}
                  >
                    <div className="my-6">
                      <Image
                        src={item.image}
                        width="70px"
                        height="70px"
                        alt="crypto"
                      />
                    </div>
                    <div className="text-center space-y-2">
                      <div className="font-bold text-xl">{item.title}</div>
                      <div className="text-base flex flex-row items-center justify-center space-x-2">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.6667 2.33337H3.66667C2.19391 2.33337 1 3.52728 1 5.00004V11.6667C1 13.1395 2.19391 14.3334 3.66667 14.3334H11.6667C13.1394 14.3334 14.3333 13.1395 14.3333 11.6667V5.00004C14.3333 3.52728 13.1394 2.33337 11.6667 2.33337Z"
                            stroke="#7A7AA9"
                            strokeWidth="1.4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M5 1V3.66667"
                            stroke="#7A7AA9"
                            strokeWidth="1.4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M10.333 1V3.66667"
                            stroke="#7A7AA9"
                            strokeWidth="1.4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M1 6.33337H14.3333"
                            stroke="#7A7AA9"
                            strokeWidth="1.4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>

                        <div className="text-warningTxt text-base font-medium">
                          {item.countdown}
                        </div>
                      </div>
                    </div>
                    <a href={item.link} className="mt-4 w-full">
                      <ClearButton className="w-full h-[57px] flex items-center justify-center space-x-2 liner" >
                        <svg
                          width="15"
                          height="12"
                          viewBox="0 0 24 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="fill-white"
                        >
                          <path d="M21.2497 5.4253C22.1965 4.73399 23.0231 3.8774 23.6842 2.91563C22.8126 3.2913 21.8659 3.56185 20.889 3.66702C21.8959 3.06593 22.6623 2.11916 23.023 0.992017C22.0912 1.54807 21.0393 1.95382 19.9423 2.1642C19.0555 1.21744 17.7932 0.631348 16.3956 0.631348C13.7056 0.631348 11.5415 2.81041 11.5415 5.48541C11.5415 5.86112 11.5866 6.23679 11.6617 6.59746C7.63427 6.38704 4.0425 4.46348 1.65305 1.51798C1.23221 2.23932 0.991836 3.06587 0.991836 3.96755C0.991836 5.6507 1.84838 7.13847 3.15583 8.0101C2.3594 7.98011 1.60793 7.75469 0.961757 7.39401V7.4541C0.961757 9.8135 2.62991 11.7671 4.85406 12.218C4.44835 12.3232 4.01251 12.3833 3.57672 12.3833C3.26108 12.3833 2.96054 12.3532 2.65995 12.3082C3.27613 14.2318 5.06449 15.6294 7.19847 15.6745C5.53032 16.9819 3.44137 17.7484 1.17218 17.7484C0.766427 17.7484 0.390758 17.7333 0 17.6883C2.14904 19.0708 4.70377 19.8673 7.45393 19.8673C16.3807 19.8673 21.2648 12.4734 21.2648 6.05649C21.2648 5.84611 21.2648 5.63565 21.2497 5.42527L21.2497 5.4253Z" />
                        </svg>

                        <div>Enter Giveaway</div>
                      </ClearButton>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Giveaways;
