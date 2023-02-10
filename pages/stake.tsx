import Link from "next/link";
import Image from "next/image";
import Layout from "../components/Layout";

import BonusCards from "../components/BonusCards";
import { ClearButton, RewardsButton, DarkButton } from "../components/Buttons";


import Roobet from "../public/static/roobet.png";
import Roulette from "../public/static/bonuses/stake-roulette.png";
import Grr from "../public/static/bonuses/Group 1059.png";
import Rectangle from "../public/static/bonuses/Rectangle 13.png";



function Bonuses(props: any) {

return (
    <Layout>
        <div className="w-full ">
          <div className="panel flex flex-col lg:flex-row sm:flex-col items-center mx-auto w-full justify-evenly" id="one">
            <div className="flex flex-col md:items-left md:align-right py-2 px-3 center my-28 lg:my-0 ">
              <h1 className="font-specify font-bold sm:text-left sm:text-xl text-xl text-center">
                Visit Stake.com
              </h1> 
              <p className="text-warningTxt py-4 text-base sm:text-xs">
                On Stake.com, register for an account & Sign up using <br />
                code “<b className="text-darkBorder">Bonuses</b>”
              </p>
              <RewardsButton
                className="w-[201px] h-[57px] flex flex-col items-center justify-center  my-2"
                path="/"
              >
                <div className="text-base font-medium text-darkBorder">Bonuses</div>
              </RewardsButton>
              <ClearButton
                className="w-[200px] h-[57px] flex flex-col items-center justify-center liner"
                path="/"
              >
                <div className="text-base font-medium">Stake.com</div>
              </ClearButton>
            </div>
            <div className="md:flex lg:flex-row md:flex-col sm:flex-col md:py-36 md:z-50 ">
              <Image
                src={Rectangle}
                className="fill-[#131318] "
                alt=""
                width={655}
                height={540}
              />
              <svg
                width="63"
                height="69"
                className="lg:flex lg:flex-col lg:-translate-x-[5rem] lg:translate-y-20 lg:absolute lg:z-[-1] md:hidden hidden "
                viewBox="0 0 63 69"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M59.5793 23.2024L39.5884 2.76999C37.9584 1.1049 35.7584 0.118806 33.4308 0.0100546C31.1032 -0.0986968 28.8208 0.677965 27.0427 2.18381L4.99638 20.8197C3.54081 22.053 2.36143 23.5792 1.53508 25.2988C0.708728 27.0184 0.253956 28.8928 0.20039 30.7999L0.0024602 38.3212C-0.0471313 40.3014 0.654562 42.227 1.96653 43.711L21.8052 66.1379C22.5268 66.9528 23.4024 67.617 24.3816 68.0923C25.3607 68.5676 26.4242 68.8447 27.5109 68.9077C28.5975 68.9707 29.6858 68.8182 30.7134 68.4592C31.7409 68.1001 32.6873 67.5415 33.4982 66.8155L57.2498 45.5C59.6166 43.3816 61.2616 40.576 61.9544 37.4762L62.7157 34.1495C63.147 32.205 63.0868 30.1837 62.5405 28.2683C61.9942 26.3529 60.9791 24.604 59.5869 23.1796"
                  fill="#BCBEFF"
                />
                <path
                  d="M31.2148 12.1792C31.9567 12.9316 32.966 13.3603 34.0227 13.3717C35.0794 13.3831 36.0977 12.9763 36.8558 12.2401C38.2489 10.7176 37.9824 8.19777 36.262 6.62956C34.5415 5.06135 32.0141 5.03851 30.621 6.56866C29.2279 8.09881 29.5019 10.5805 31.2148 12.1792Z"
                  fill="#807FFB"
                />
                <path
                  d="M14.2455 27.2067C15.966 28.7749 18.4934 28.8054 19.8865 27.2676C21.2796 25.7299 21.0132 23.2253 19.2927 21.6647C17.5722 20.1041 15.0448 20.066 13.6517 21.5962C12.2586 23.1263 12.525 25.6385 14.2455 27.2067Z"
                  fill="#807FFB"
                />
                <path
                  d="M45.4733 27.6178C47.1938 29.1403 49.7212 29.2088 51.1143 27.6787C52.5074 26.1485 52.2486 23.6363 50.5205 22.0681C48.7924 20.4999 46.2802 20.4695 44.8795 22.0072C43.4788 23.545 43.7528 26.0496 45.4733 27.6178"
                  fill="#807FFB"
                />
                <path
                  d="M28.4965 42.6757C30.2169 44.2439 32.7443 44.2667 34.1375 42.7366C35.5306 41.2064 35.2641 38.6942 33.5437 37.126C31.8232 35.5578 29.2958 35.535 27.9027 37.0651C26.5096 38.5953 26.776 41.1075 28.4965 42.6757"
                  fill="#807FFB"
                />
                <path
                  d="M29.1137 27.4046C30.8342 28.9728 33.3616 29.0033 34.7547 27.4731C36.1478 25.943 35.8814 23.4308 34.1609 21.8626C32.4405 20.2943 29.913 20.2639 28.5199 21.8017C27.1268 23.3394 27.4085 25.7983 29.1137 27.4046Z"
                  fill="#807FFB"
                />
                <path
                  d="M43.4328 53.2345C43.8667 53.6303 45.7166 52.2981 47.5741 50.2579C49.4316 48.2177 50.5811 46.2536 50.1472 45.8578C49.7133 45.4619 47.8634 46.7941 46.0059 48.8343C44.1484 50.8745 42.9608 52.8386 43.4328 53.2345"
                  fill="#807FFB"
                />
                <path
                  d="M3.9614 43.5359C5.17943 45.0585 6.45836 46.071 6.81615 45.8197C7.17395 45.5685 6.47358 44.0688 5.29362 42.5387C4.11365 41.0085 2.79666 40.0037 2.44648 40.2549C2.09629 40.5061 2.78905 42.0058 3.96901 43.5359"
                  fill="#807FFB"
                />
                <path
                  d="M11.8709 49.2758C13.089 50.7984 14.3679 51.8108 14.7257 51.5596C15.0835 51.3084 14.3755 49.8087 13.1575 48.2785C11.9394 46.7484 10.6681 45.7435 10.3103 45.9947C9.95253 46.246 10.6529 47.7457 11.8709 49.2758Z"
                  fill="#807FFB"
                />
                <path
                  d="M19.7958 55.0158C21.0138 56.5383 22.2851 57.5508 22.6429 57.2996C23.0007 57.0484 22.3003 55.5487 21.1204 54.0185C19.9404 52.4884 18.631 51.4835 18.2732 51.7347C17.9154 51.986 18.6158 53.4857 19.8338 55.0082"
                  fill="#807FFB"
                />
              </svg>
              <svg
                width="297"
                height="269"
                className="md:flex md:flex-col md:-order-2 md:absolute z-[-2] md:-translate-x-32 hidden"
                viewBox="0 0 297 269"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M223.421 39.1347C251.424 56.4805 286.131 72.0522 294.808 95.9026C303.288 119.753 285.737 151.882 266.608 181.843C247.677 211.607 227.168 239.005 198.179 254.577C169.19 270.345 131.525 274.091 101.747 261.278C71.9698 248.466 50.0803 218.702 30.7545 186.771C11.2315 154.839 -5.92509 120.739 1.963 93.5373C9.85108 66.336 42.7838 46.0336 71.9698 28.885C101.156 11.7364 126.792 -2.25849 150.259 0.303948C173.923 2.86639 195.221 21.789 223.421 39.1347Z"
                  fill="#21215C"
                  fillOpacity="0.33"
                />
              </svg>
              <svg
                width="130"
                height="139"
                className="lg:flex lg:flex-col lg:-order-3 z-[-3] lg:absolute lg:translate-x-[36rem] md:hidden hidden"
                viewBox="0 0 130 139"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M128.223 83.6108C127.826 100.133 129.898 119.106 121.778 128.918C113.608 138.645 95.245 139.212 77.42 138.545C59.7303 137.914 42.6638 135.999 28.5632 127.412C14.3773 118.874 3.19258 103.528 1.17724 87.3894C-0.838082 71.2508 6.48666 54.2196 15.4008 37.7469C24.2649 21.1889 34.6684 5.10404 48.4449 1.60793C62.2214 -1.88818 79.371 7.20445 94.2042 15.4769C109.037 23.7494 121.604 31.2871 126.454 42.0918C131.353 52.9818 128.571 67.0033 128.223 83.6108Z"
                  fill="#21215C"
                  fillOpacity="0.33"
                />
              </svg>
              <svg
                width="297"
                height="269"
                className="lg:flex lg:flex-col lg:-order-5 lg:absolute lg:z-[-5] lg:translate-x-[28rem] translate-y-60 md:hidden hidden"
                viewBox="0 0 297 269"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M223.421 39.1347C251.424 56.4805 286.131 72.0522 294.808 95.9026C303.288 119.753 285.737 151.882 266.608 181.843C247.677 211.607 227.168 239.005 198.179 254.577C169.19 270.345 131.525 274.091 101.747 261.278C71.9698 248.466 50.0803 218.702 30.7545 186.771C11.2315 154.839 -5.92509 120.739 1.963 93.5373C9.85108 66.336 42.7838 46.0336 71.9698 28.885C101.156 11.7364 126.792 -2.25849 150.259 0.303948C173.923 2.86639 195.221 21.789 223.421 39.1347Z"
                  fill="#21215C"
                  fillOpacity="0.33"
                />
              </svg>
              <svg
                width="63"
                height="63"
                className="lg:flex lg:flex-col lg:-order-1 lg:absolute lg:z-[1] lg:translate-x-[40rem] lg:translate-y-[26rem] md:hidden hidden"
                viewBox="0 0 63 63"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.6431 0.0697632L0.278453 23.5814L0 38.2326L23.4597 62.6512L38.0785 62.9302L62.4431 39.3488L62.7215 24.6977L39.2619 0.279066L24.6431 0.0697632Z"
                  fill="#807EFA"
                />
                <path
                  d="M53.1848 37.0465L53.3936 26.7209L36.8953 9.55812L26.5925 9.34882L9.46763 25.9535L9.25879 36.279L25.7571 53.4418L36.0599 53.6511L53.1848 37.0465Z"
                  fill="#6C6CE7"
                />
                <path
                  d="M29.7948 24.4884C29.1683 25.6047 27.4976 28.9535 28.9594 31.3256C29.3075 30.5582 29.7948 29.8605 30.3517 29.2326C32.1617 27.4884 35.4335 26.8605 38.0788 29.7209C40.376 32.1628 40.3064 35.9302 37.9396 38.3023C35.0158 41.093 31.2567 40.5349 28.4025 37.5349C23.0423 31.9535 25.4788 25.1861 26.7318 22.9535C26.871 22.6744 27.2887 22.5349 27.5672 22.6744C27.5672 22.6744 27.5672 22.6744 27.6368 22.6744L29.586 23.5814C29.8644 23.7209 30.0036 24 29.7948 24.4884ZM31.8136 35.5814C32.7882 36.5581 34.3893 36.5581 35.3639 35.5814C36.3385 34.6047 36.3385 33 35.3639 32.0233C34.3893 31.0465 32.7882 31.0465 31.8136 31.9535C30.839 32.9302 30.839 34.5349 31.8136 35.5814Z"
                  fill="#4E4EC9"
                />
                <path
                  d="M38.0787 62.9302L36.06 53.6511L25.7572 53.4418L23.46 62.7209L38.0787 62.9302Z"
                  fill="#6C6CE7"
                />
                <path
                  d="M0 38.2325L9.25856 36.2791L9.4674 25.9535L0.278453 23.6512L0 38.2325Z"
                  fill="#6C6CE7"
                />
                <path
                  d="M62.4431 39.4186L53.1845 37.0465L53.3933 26.7209L62.7215 24.6977C62.7215 24.7674 62.4431 39.4186 62.4431 39.4186Z"
                  fill="#6C6CE7"
                />
                <path
                  d="M39.2623 0.348833L36.8955 9.55814L26.5927 9.34883L24.6436 0.0697632L39.2623 0.348833Z"
                  fill="#BABDFE"
                />
              </svg>
            </div>
          </div>

          <div className="panel flex lg:flex-row md:flex-col sm:flex-col items-center mx-auto w-full h-full py-10 justify-evenly px-3" id="two">
            <div className="flex flex-col shrink">
              <div className="sm:w-[671px] sm:h-[57px] bg-gradient-to-b from-footerY via-footerM to-footerY rounded-md cursor-pointer flex flex-col items-center justify-center my-2">
                E-mail
              </div>
              <svg
                width="37"
                height="27"
                viewBox="0 0 37 27"
                className="absolute hidden"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_190_232)">
                  <path
                    d="M34.6 22.7L36.7 17.7L32.8 16.1C30.3 13 26 10 20.7 7.7C15.4 5.4 10.2 4.7 6.29999 5.1L2.39999 3.5L0.299994 8.5C-1.50001 12.8 4.69999 19.5 14.2 23.5C23.7 27.5 32.8 27.1 34.6 22.7Z"
                    fill="#001C2B"
                  />
                  <path
                    d="M25.4003 3.89998C24.6003 3.49998 23.7003 3.09998 22.8003 2.69998C21.9003 2.29998 21.1003 2.09998 20.3003 1.69998L19.9003 9.79998L25.4003 3.89998Z"
                    fill="#807EFA"
                  />
                  <path
                    d="M36.5997 14.2C35.3997 10.8 31.1997 6.79999 25.2997 3.89999L19.7997 9.89999L36.5997 14.2Z"
                    fill="#001C2B"
                  />
                  <path
                    d="M20.6997 20C26.2997 21.6 31.2997 21.6 34.2997 20.1L19.7997 9.89999L20.6997 20Z"
                    fill="#001C2B"
                  />
                  <path
                    d="M34.2997 20.1C35.3997 19.6 36.1997 18.8 36.6997 17.7C37.0997 16.6 37.0997 15.3 36.6997 14.2L19.7997 9.89999L34.2997 20.1Z"
                    fill="#807EFA"
                  />
                  <path
                    d="M2.09957 5C1.99957 8.4 5.69957 12.7 11.5996 16.1L19.8996 9.9L2.09957 5Z"
                    fill="#001C2B"
                  />
                  <path
                    d="M20.7 20L19.8 9.89999L11.5 16.1C13 17 14.6 17.8 16.2 18.4C17.7 19.1 19.2 19.6 20.7 20Z"
                    fill="#807EFA"
                  />
                  <path
                    d="M20.2995 1.8C14.6995 -0.100005 9.49955 -0.500005 6.09955 0.599995L19.8995 9.89999L20.2995 1.8Z"
                    fill="#001C2B"
                  />
                  <path
                    d="M6.09955 0.600006C4.49955 0.900006 3.09955 2.00001 2.39955 3.50001C2.19955 4.00001 2.09955 4.50001 2.09955 5.00001L19.8995 9.90001L6.09955 0.600006Z"
                    fill="#807EFA"
                  />
                  <path
                    d="M17.5003 15.4C10.8003 12.7 6.40028 7.89999 7.70028 4.8C9.00028 1.7 15.5003 1.5 22.2003 4.3C28.9003 7.1 33.3003 11.8 32.1003 14.9C30.9003 18 24.3003 18.2 17.5003 15.4Z"
                    fill="#BABDFE"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_190_232">
                    <rect width="37" height="26.2" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <div className="sm:w-[671px] sm:h-[57px] bg-gradient-to-b  from-footerY via-footerM to-footerY rounded-md cursor-pointer flex flex-col items-center justify-center my-2">
                Stake Username
              </div>
              <svg
                width="297"
                height="269"
                className="absolute sm:-translate-y-20 sm:-translate-x-20 hidden"
                viewBox="0 0 297 269"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M223.421 39.1347C251.424 56.4805 286.131 72.0522 294.808 95.9026C303.288 119.753 285.737 151.882 266.608 181.843C247.677 211.607 227.168 239.005 198.179 254.577C169.19 270.345 131.525 274.091 101.747 261.278C71.9698 248.466 50.0803 218.702 30.7545 186.771C11.2315 154.839 -5.92509 120.739 1.963 93.5373C9.85108 66.336 42.7838 46.0336 71.9698 28.885C101.156 11.7364 126.792 -2.25849 150.259 0.303948C173.923 2.86639 195.221 21.789 223.421 39.1347Z"
                  fill="#21215C"
                  fillOpacity="0.33"
                />
              </svg>
              <div className="sm:w-[671px] sm:h-[57px] bg-gradient-to-b  from-footerY via-footerM to-footerY rounded-md cursor-pointer flex flex-row items-center justify-center my-2 opacity-30">
                Twitter Username
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="Capa_1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 490 490"
                  className=" flex justify-end  fill-green-400 w-6 h-5"
                >
                  <polygon points="452.253,28.326 197.831,394.674 29.044,256.875 0,292.469 207.253,461.674 490,54.528 " />
                </svg>
              </div>
              <svg
                width="182"
                height="165"
                className="absolute sm:translate-x-[34rem] sm:translate-y-[5rem] hidden"
                viewBox="0 0 182 165"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M136.911 24.0046C154.071 34.6442 175.34 44.1956 180.657 58.825C185.853 73.4544 175.098 93.1618 163.376 111.539C151.775 129.796 139.207 146.602 121.443 156.153C103.679 165.825 80.5977 168.122 62.3502 160.264C44.1027 152.405 30.689 134.148 18.8462 114.562C6.8826 94.9754 -3.63086 74.059 1.20291 57.3742C6.03669 40.6894 26.2177 28.2362 44.1027 17.7176C61.9877 7.19888 77.6974 -1.38532 92.0779 0.186436C106.579 1.75819 119.63 13.365 136.911 24.0046Z"
                  fill="#21215C"
                  fillOpacity="0.33"
                />
              </svg>
              <svg
                width="108"
                height="81"
                className="absolute sm:translate-x-[36rem] sm:translate-y-[11rem] hidden"
                viewBox="0 0 108 81"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_190_227)">
                  <path
                    d="M107.333 33.5906L73.5143 0.809179C73.0619 0.372892 72.4786 0.0962337 71.8536 0.0214751C71.2287 -0.0532834 70.5963 0.0779689 70.0532 0.395178L0.591338 41.0363C0.438355 41.1258 0.307272 41.2482 0.207591 41.3944C0.107911 41.5407 0.0421314 41.7072 0.0150214 41.882C-0.0120886 42.0567 0.00015037 42.2353 0.050851 42.4048C0.101552 42.5742 0.189443 42.7303 0.308155 42.8617L34.07 80.3978C34.3561 80.7164 34.7457 80.9244 35.1703 80.9852C35.595 81.046 36.0275 80.9557 36.3921 80.7303L106.98 37.0092C107.26 36.8319 107.497 36.5936 107.671 36.3123C107.845 36.031 107.954 35.714 107.988 35.385C108.022 35.056 107.98 34.7237 107.867 34.4129C107.753 34.1021 107.571 33.8209 107.333 33.5906Z"
                    fill="#BABDFE"
                  />
                  <path
                    d="M62.3442 10.5821L63.4329 10.626C63.672 10.626 63.7161 10.7578 63.7098 10.946C63.7212 11.3151 63.8588 11.6692 64.1 11.9496C64.4901 12.3636 65.3145 12.4514 66.271 11.7677L72.8661 7.14467C72.9305 7.09379 73.0104 7.0661 73.0926 7.0661C73.1749 7.0661 73.2547 7.09379 73.3192 7.14467L74.4645 8.36158C74.4894 8.3916 74.5077 8.42654 74.5181 8.46411C74.5285 8.50167 74.5308 8.54101 74.5248 8.57952C74.5189 8.61804 74.5048 8.65487 74.4836 8.68758C74.4623 8.72029 74.4344 8.74814 74.4016 8.76931L67.8065 13.386C65.8746 14.7598 64.1692 14.9166 62.6777 13.3359C62.3568 13.002 62.1239 12.5941 61.9998 12.1486C61.8757 11.7031 61.8643 11.2338 61.9666 10.7829C61.9996 10.7134 62.0541 10.6564 62.1221 10.6202C62.1901 10.5841 62.268 10.5707 62.3442 10.5821Z"
                    fill="#807EFA"
                  />
                  <path
                    d="M62.2246 32.2043H46.5236L44.4658 37.6929L51.8915 37.1598L51.0671 42.9056L60.129 42.0839L62.2246 32.2043Z"
                    fill="#807EFA"
                  />
                  <path
                    d="M41.1875 39.6187L47.1973 44.4675L48.6384 38.9726L41.1875 39.6187Z"
                    fill="#807EFA"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_190_227">
                    <rect width="108" height="81" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>

            <div className="flex  lg:flex-row  flex-col  justify-end">
              <div className="flex flex-col  items-right align-right justify-end py-5 px-3 center my-28 lg:my-0">
                <h1 className="font-specify font-bold text-right text-xl">
                  Fill out the Google Form
                </h1>
                <p className="text-warningTxt my-4 text-base text-center lg:text-right sm:text-xs">
                  Once singed up, fill out the Google Form via the button <br />
                  below to notify us of your Stake username so the $7 <br />
                  reload can be added to your account!
                </p>
                <div className="w-full flex justify-center lg:justify-end ">
                  <div className="flex flex-col   bg-gradient-to-b from-clearBY/25 via-clearBM/25 to-clearBY/25 cursor-pointer rounded-md border border-darkBorder w-[168px] h-[57px] items-center justify-center text-base font-medium text-darkBorder">
                    <div className="items-center justify-center text-base content-center">
                      Google Form
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-evenly w-full my-10">
              <div className="  ">
            <Image src={Roulette} width={143} height={128} alt="roulette" />
            </div>
            <div className="flex flex-col justify-center">
                <h1 className="font-specify font-bold text-center text-2xl md:text-3xl">
                  Enjoy your Bonus!
                </h1>
                <p className=" text-warningTxt text-center ">
                  Enjoy instant access to exclusive 10% rakeback on bets!
                </p>
            </div>
            <div className="">
            <Image src={Grr} width={249.6} height={223.2} alt="asd" />
            </div>
          </div>
        </div>
    </Layout>
  );
}

export default Bonuses;


