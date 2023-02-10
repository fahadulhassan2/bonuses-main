import Link from "next/link";
import Image from "next/image";

import Gamcare from "../../public/static/gamcare.png";
import Overage from "../../public/static/18plus.png";

import Twitter from "../../public/static/twitter.svg";
import Discord from "../../public/static/discord.svg";
import Instagram from "../../public/static/instagram.svg";
import bouns from "../../public/static/logo.png";

import facebook from '../../public/static/facebook.png'

function Footer(props: any) {
  return (
    <div className="w-full flex flex-col">
      <div className="bg-gradient-to-r from-footerY via-footerY to-footerY flex justify-center py-8 border-t-2 border-active/25">
        <div className="flex flex-col max-w-screen-2xl items-center w-full justify-between mx-20 ">
          <div className="flex flex-col items-center space-y-4 sm:flex-row justify-between w-full ">
            <div className="flex flex-col space-y-2">
              <div className="flex flex-row space-x-4">

            <Image className="inline-block" src={bouns} alt="twitter"  width={35} height={1}   />
              <p className=" font-extrabold text-2xl mt-4"> Bonuses</p>
              </div>
              <div className="text-sm text-warningTxt">
                © {new Date().getFullYear()} Bonuses.gg Copyrights Reserved
              </div>
            </div>
            <div className="flex flex-row space-x-4">
              <div>
                <Image src={Twitter} alt="twitter" width={23} height={20} />
              </div>
              <div>
                <Image src={Discord} alt="discord" width={23} height={20} />
              </div>
              <div>
                <Image src={Instagram} alt="instagram" width={23} height={20} />
              </div>
              <div>
              <Image src={facebook} alt="instagram" width={23} height={20} />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-4 sm:flex-row justify-between w-full pt-14" >
            <div className="border-l-2 border-active" >
              <div className="text-warningTxt pr-0 text-sm ml-4 sm:pr-20 ">
                We do not take responsibility for any losses from gambling in
                casinos and betting sites which <br /> are linked or promoted on our
                website(s). As a player, you are responsible for your bets.
              </div>
            </div>
            <div className="flex flex-row justify-between  items-center text-center space-x-4 ">
              <div className="mr-[1rem]">
                <Image src={Gamcare} width={105} height={30} alt="gamcare" />
              </div>
              <div >
                <Image src={Overage} width={30} height={30} alt="overage" />
              </div>
              <h6 className="font-extrabold text-warningTxt text-sm mb-2">
                Responsible Gambling
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
