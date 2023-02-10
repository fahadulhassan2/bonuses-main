import Link from "next/link";
import { useRouter } from "next/router";

import Warning from "./Warning";

const routes = [
  { name: "Home", route: "/" },
  { name: "Bonuses", route: "/bonuses" },
  { name: "Casino Reviews", route: "/casinoreviews" },
  /*{ name: "Slot Reviews", route: "/slotreviews" }, */
  { name: "Giveaways", route: "/giveaways" },
  { name: "Leaderboard", route: "/leaderboard" },
  { name: "Stake", route: "/stake", special: true },
];

function Header(props: any) {
  const router = useRouter();

  return (
    <div className="flex flex-col w-full z-50">
      <Warning />
      
      <div className="bg-headerBg flex justify-center min-h-[69px] border-b border-active/25">
        <div className="flex flex-col mx-9 md:mx-20 space-y-2 sm:space-y-0 lg:flex-row max-w-screen-2xl md:items-center  sm:items-start  w-full justify-between md:px-4 xl:px-0">
          <Link href="/" passHref>
            <a>
              <div className="flex flex-row mt-2  sm:mt-0 items-center space-x-2">
                <svg
                  width="21"
                  height="29"
                  viewBox="0 0 21 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.25078 8.7488V12.6069C9.25078 12.8794 9.0213 13.0945 8.76314 13.0945H5.30665C5.03415 13.0945 4.81901 13.3096 4.81901 13.5678V17.0243C4.81901 17.2968 4.60387 17.5119 4.3457 17.5119H0.487624C0.21512 17.5119 0 17.2968 0 17.0243V8.7488C0 8.4763 0.21512 8.26116 0.487624 8.26116H8.76314C9.0213 8.26116 9.25078 8.4763 9.25078 8.7488ZM9.25078 24.8265V28.6846C9.25078 28.9571 9.03564 29.1722 8.76314 29.1722H0.487624C0.21512 29.1722 0 28.9571 0 28.6846V20.4091C0 20.1366 0.21512 19.9215 0.487624 19.9215H4.3457C4.60387 19.9215 4.81901 20.1366 4.81901 20.4091V23.8656C4.81901 24.1237 5.03415 24.3389 5.30665 24.3389H8.76314C9.03564 24.3389 9.25078 24.554 9.25078 24.8265ZM16.0347 13.6395C16.0777 13.3527 15.8482 13.0945 15.547 13.0945H12.1336C11.8754 13.0945 11.6603 12.8794 11.6603 12.6069V8.7488C11.6603 8.4763 11.8754 8.26116 12.1336 8.26116H16.2785C18.7741 8.26116 20.8967 10.14 20.8967 13.0945C20.8967 14.7582 19.3908 17.5119 16.2785 17.5119H11.6603C11.6507 17.5119 11.6507 17.5119 11.6603 17.5119C14.0698 17.4976 15.7478 15.4753 16.0347 13.6395ZM20.8967 24.3389C20.8967 27.2934 18.7741 29.1722 16.2785 29.1722H12.1336C11.8754 29.1722 11.6603 28.9571 11.6603 28.6846V24.8265C11.6603 24.554 11.8754 24.3389 12.1336 24.3389H15.547C15.8482 24.3389 16.0777 24.0807 16.0347 23.7939C15.7478 21.9581 14.0698 19.9358 11.6603 19.9215C11.6507 19.9215 11.6507 19.9215 11.6603 19.9215H16.2785C19.3908 19.9215 20.8967 22.6752 20.8967 24.3389ZM11.6746 5.56482L13.2092 1.43423C13.324 1.14738 13.4818 0.87488 13.7112 0.645403C14.5861 -0.215134 15.9917 -0.215134 16.8665 0.645403C17.7271 1.52028 17.7271 2.92583 16.8665 3.78637C16.6371 4.01585 16.3646 4.18795 16.0777 4.30269L11.9471 5.83731C11.8754 5.86599 11.7894 5.85166 11.7176 5.79429C11.6603 5.72258 11.6459 5.63653 11.6746 5.56482ZM4.04452 3.78637C3.16964 2.92583 3.16964 1.52028 4.04452 0.645403C4.90506 -0.215134 6.31061 -0.215134 7.18549 0.645403C7.41496 0.87488 7.58707 1.14738 7.68747 1.43423L9.23642 5.56482C9.26511 5.63653 9.23644 5.72258 9.17907 5.79429C9.1217 5.85166 9.02129 5.86599 8.94958 5.83731L4.81901 4.30269C4.53216 4.18795 4.274 4.01585 4.04452 3.78637Z"
                    fill="#7781FF"
                  />
                </svg>
                <div className="font-bold mt-1.5">Bonuses</div>
              </div>
            </a>
          </Link>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 h-full mr-8">
            {routes.map((route: any) => {
              if (route?.special && router.pathname === route.route) {
                return (
                  <Link href={route.route} key={route.name}>
                    <div
                      className={`${
                        router.pathname === route.route
                          ? "border-b-2 border-active h-full"
                          : "border-b-2 border-transparent"
                      } text-[#FFC32B] flex items-center font-medium hover:cursor-pointer`}
                    >
                      {route.name}
                    </div>
                  </Link>
                );
              }

              if (route.special && router.pathname !== route.route) {
                return (
                  <Link href={route.route} key={route.name}>
                    <div
                      className={`${
                        router.pathname === route.route
                          ? "border-b-2 border-active h-full"
                          : "border-b-2 border-transparent"
                      } text-[#FFC32B] flex items-center font-medium hover:cursor-pointer`}
                    >
                      {route.name}
                    </div>
                  </Link>
                );
              }

              return (
                <Link href={route.route} key={route.name}>
                  <div
                    className={`${
                      router.pathname === route.route
                        ? "border-b-2 border-active h-full text-white"
                        : "text-warningTxt border-b-2 border-transparent"
                    } flex items-center font-medium hover:cursor-pointer`}
                  >
                    {route.name}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
