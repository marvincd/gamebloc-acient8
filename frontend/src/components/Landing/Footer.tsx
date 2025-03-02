// import React from 'react'
import Logo from "../../assets/GBLogo.png";
import trademark from "../../assets/trademark.png";
import instagram from "../../assets/instagram.png";
import discord from "../../assets/discord.png";
import twitter from "../../assets/twitter.png";
import whatsapp from "../../assets/whatsapp.png";

function Footer() {
  return (
    <div className="relative overflow-y-hidden section px-[5%] border-t-slate-300 border-t pt-5 flex flex-col gap-5 md:flex-row md:justify-between mb-8 md:items-center">
      <div className="flex items-center ">
        <img src={Logo} alt="" className="w-[50%] md:w-28" />
        <img src={trademark} alt="" className="w-16 h-2" />
      </div>
      <div className="flex flex-col md:flex-row md:gap-5">
        <ul className="list-none">
          <li className="text-[#F8DBFB] text-xs md:text-sm mb-1 md:mb-2 cursor-pointer">
            Terms and Conditions
          </li>
          <li className="text-[#F8DBFB] text-xs md:text-sm mb-1 md:mb-2 cursor-pointer">
            Privacy & Policy
          </li>
        </ul>
        <ul className="list-none">
          <li className="text-[#F8DBFB] text-xs md:text-sm mb-1 md:mb-2 cursor-pointer">
            Launch a Game
          </li>
          <li className="text-[#F8DBFB] text-xs md:text-sm mb-1 md:mb-2 cursor-pointer">
            Collaboration
          </li>
          <li className="text-[#F8DBFB] md:text-sm text-xs mb-1 md:mb-2 cursor-pointer">
            Host a Tournament
          </li>
        </ul>
      </div>
      <div className="flex justify-between w-[80%] md:w-max mx-auto md:mx-0 h-max">
        <a href="https://x.com/Game_bloc" target="_blank">
          <img
            src={twitter}
            alt="link to twitter"
            className="w-7 md:mr-8 md:h-8 cursor-pointer"
          />
        </a>
        <a
          href="https://www.instagram.com/game_bloc?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          target="_blank"
        >
          <img
            src={instagram}
            alt="link to instagram"
            className="w-7 md:h-8 md:mr-8 cursor-pointer"
          />
        </a>
        <img
          src={whatsapp}
          alt="link to twitter"
          className="w-7 md:mr-8 md:h-8"
        />
        <a href="https://discord.gg/AWW8UhWFDw" target="_blank">
          <img
            src={discord}
            alt="link to discord server"
            className="w-7 md:h-8 cursor-pointer"
          />
        </a>
      </div>
      {/* <img src={blur2} alt="" className="absolute top-0 left-0" /> */}
    </div>
  );
}

export default Footer;
