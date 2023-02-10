import Link from "next/link";
import Image from "next/image";

import Twitter from "../../public/static/twitter.svg";
import Discord from "../../public/static/discord.svg";
import Instagram from "../../public/static/instagram.svg";

function Warning(props: any) {
  return (
    <div className="bg-warningBg flex justify-center h-[25px]">
      <div className="flex flex-row mx-20 max-w-screen-2xl items-center w-full justify-between bg-test">
        <div className="text-warningTxt opacity-40 text-xs  hidden sm:block">
          We do not take responsibility for any losses from gambling in casinos
          and betting sites which are linked or promoted on our website(s). As a
          player, you are responsible for your bets.
        </div>
        <div className="flex flex-row mr-7 items-center space-x-2">
          <div>
            <Image src={Twitter} alt="twitter" width={10} height={9} />
          </div>
          <div>
            <Image src={Discord} alt="discord" width={10} height={9} />
          </div>
          <div>
            <Image src={Instagram} alt="instagram" width={10} height={9} />
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="9"
              viewBox="0 0 32 32"
              className="fill-warningTxt"
            >
              <path d="M16.708 0.027c1.745-0.027 3.48-0.011 5.213-0.027 0.105 2.041 0.839 4.12 2.333 5.563 1.491 1.479 3.6 2.156 5.652 2.385v5.369c-1.923-0.063-3.855-0.463-5.6-1.291-0.76-0.344-1.468-0.787-2.161-1.24-0.009 3.896 0.016 7.787-0.025 11.667-0.104 1.864-0.719 3.719-1.803 5.255-1.744 2.557-4.771 4.224-7.88 4.276-1.907 0.109-3.812-0.411-5.437-1.369-2.693-1.588-4.588-4.495-4.864-7.615-0.032-0.667-0.043-1.333-0.016-1.984 0.24-2.537 1.495-4.964 3.443-6.615 2.208-1.923 5.301-2.839 8.197-2.297 0.027 1.975-0.052 3.948-0.052 5.923-1.323-0.428-2.869-0.308-4.025 0.495-0.844 0.547-1.485 1.385-1.819 2.333-0.276 0.676-0.197 1.427-0.181 2.145 0.317 2.188 2.421 4.027 4.667 3.828 1.489-0.016 2.916-0.88 3.692-2.145 0.251-0.443 0.532-0.896 0.547-1.417 0.131-2.385 0.079-4.76 0.095-7.145 0.011-5.375-0.016-10.735 0.025-16.093z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Warning;
