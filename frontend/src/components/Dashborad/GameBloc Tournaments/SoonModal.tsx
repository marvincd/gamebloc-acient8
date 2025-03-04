// import React from "react"
import { RiCloseFill } from "react-icons/ri";
import gamelogo from "../../../assets/gamelogo.png";
import welcome from "../../../assets/welcome.png";

interface Props {
  modal: () => void;
}

const SoonModal = ({ modal }: Props) => {
  return (
    <div>
      <div>
        <div
          className="relative z-10"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="fixed inset-0 bg-[#fff]/20  bg-opacity-75 transition-opacity">
            <div className="fixed z-10 inset-0 overflow-y-auto">
              <div className="flex items-center justify-center min-h-full ">
                <div className="relative bg-[#030C15] w-[90%] md:max-w-[55%]  lg:max-w-[40%] 2xl:max-w-[30%] rounded-[25px] border border-solid border-[#595959] overflow-hidden">
                  <div className="bg-[#030C15] p-[2rem] flex flex-col justify-center items-center">
                    <img src={welcome} alt="" className="rounded-t-[25px]" />
                    <RiCloseFill
                      onClick={modal}
                      className="absolute text-white right-4 text-[1rem] top-4 cursor-pointer"
                    />
                    <div className="">
                      <img
                        src={gamelogo}
                        className="-mt-4 mb-[.3rem] w-[3rem] h-[3rem]"
                        alt=""
                      />
                    </div>
                    <h1 className="font-valorant text-white mt-4 text-primary-second text-[1.1rem] text-semibold">
                      🎉 Coming Soon 🚀🚀🚀
                    </h1>
                    <p className="text-[.7rem] lg:text-[.82rem] text-white text-center text-primary-second/80 my-[.2rem]">
                      🔥🔥🔥 Stay tuned for more updates! In the meantime, sit
                      back and relax. We'll also be sharing exclusive sneak
                      peeks and behind-the-scenes content on our social media
                      channels, so be sure to follow us on Social Media
                      Platforms.🌟🌟🌟
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoonModal;
