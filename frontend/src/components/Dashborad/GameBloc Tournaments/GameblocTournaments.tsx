import { useEffect, useState } from "react";
import SoonModal from "./SoonModal";
import { DotChartOutlined } from "@ant-design/icons";
import Skeleton from "antd/es/skeleton";
import img1 from "../../../assets/category1.png";
import gamelogo from "../../../assets/gamelogo.png";
import Gcard2 from "../../../assets/Gcard2.png";
import Gcard3 from "../../../assets/Gcard3.png";
import Gcard4 from "../../../assets/Gcard4.png";

// const img1 = require("../../../../assets/category1.png").default;

// interface props {
//   loading: boolean
// }

const GameblocTournaments = () => {
  const [modal, setModal] = useState<boolean>(false);
  const [isImageLoaded, setImageLoaded] = useState<boolean>(false);

  const handleModal = () => {
    setModal(!modal);
  };

  useEffect(() => {
    const img = new Image();
    if (img1) {
      setImageLoaded(true);
    }
    img.src = img1;
  }, []);

  return (
    <div className="bg-[#151718] rounded-[1.5rem] w-full p-4 mt-14">
      <div className="flex flex-col ">
        <div className="flex w-full mt-4 justify-center items-center">
          <img src={gamelogo} className="w-[1.5rem] sm:w-[3rem] m-0" alt="" />
          <h2 className="font-valorant ml-4 text-sm sm:text-lg md:text-xl text-white">
            GAMEBLOC TOURNAMENTS
          </h2>
        </div>
        <div className=" lg:flex w-full lg:justify-center lg:items-center">
          <div className="mt-8 gap-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 2xl:gap-[3rem]">
            {/* <div
              onClick={() => setModal(true)}
              className="relative flex cursor-pointer "
            >
              {!isImageLoaded ? (
                <div className="flex flex-col w-full h-full justify-center items-center">
                  <Skeleton.Node className=" bg-[#505050] " active={true}>
                    <DotChartOutlined
                      style={{ fontSize: 40, color: "#bfbfbf" }}
                    />
                  </Skeleton.Node>
                  <Skeleton.Input
                    className="mt-[1rem] bg-[#505050] h-[1.2rem]"
                    active={true}
                    size={"small"}
                  />
                </div>
              ) : (
                <>
                  <img src={`Gcard1.png`} />
                  <div className="absolute -bottom-[2px] py-2  w-full rounded-bl-[0.625rem] rounded-br-[0.625rem] rounded bg-[#311A34] flex justify-center items-center">
                    <p className="text-white text-[0.7rem] sm:text-sm ">
                      Registration: Coming
                    </p>
                  </div>
                </>
              )}
            </div> */}
            <div
              onClick={() => setModal(true)}
              className="relative cursor-pointer "
            >
              {!isImageLoaded ? (
                <div className="flex flex-col w-full h-full justify-center items-center">
                  <Skeleton.Node className=" bg-[#505050] " active={true}>
                    <DotChartOutlined
                      style={{ fontSize: 40, color: "#bfbfbf" }}
                    />
                  </Skeleton.Node>
                  <Skeleton.Input
                    className="mt-[1rem] bg-[#505050] h-[1.2rem]"
                    active={true}
                    size={"small"}
                  />
                </div>
              ) : (
                <>
                  <img src={Gcard2} />
                  <div className="absolute -bottom-[2px] py-2  w-full rounded-bl-[0.625rem] rounded-br-[0.625rem] rounded bg-[#311A34] flex justify-center items-center">
                    <p className="text-white text-[0.7rem] sm:text-sm ">
                      Registration: Coming
                    </p>
                  </div>
                </>
              )}
            </div>
            <div
              onClick={() => setModal(true)}
              className="relative  cursor-pointer"
            >
              {!isImageLoaded ? (
                <div className="flex flex-col w-full h-full justify-center items-center">
                  <Skeleton.Node className=" bg-[#505050] " active={true}>
                    <DotChartOutlined
                      style={{ fontSize: 40, color: "#bfbfbf" }}
                    />
                  </Skeleton.Node>
                  <Skeleton.Input
                    className="mt-[1rem] bg-[#505050] h-[1.2rem]"
                    active={true}
                    size={"small"}
                  />
                </div>
              ) : (
                <>
                  <img src={Gcard3} />
                  <div className="absolute -bottom-[2px] py-2  w-full rounded-bl-[0.625rem] rounded-br-[0.625rem] rounded bg-[#311A34] flex justify-center items-center">
                    <p className="text-white text-[0.7rem] sm:text-sm ">
                      Registration: Coming
                    </p>
                  </div>
                </>
              )}
            </div>
            <div
              onClick={() => setModal(true)}
              className="relative cursor-pointer"
            >
              {!isImageLoaded ? (
                <div className="flex flex-col w-full h-full justify-center items-center">
                  <Skeleton.Node className=" bg-[#505050] " active={true}>
                    <DotChartOutlined
                      style={{ fontSize: 40, color: "#bfbfbf" }}
                    />
                  </Skeleton.Node>
                  <Skeleton.Input
                    className="mt-[1rem] bg-[#505050] h-[1.2rem]"
                    active={true}
                    size={"small"}
                  />
                </div>
              ) : (
                <>
                  <img src={Gcard4} />
                  <div className="absolute -bottom-[2px] py-2  w-full rounded-bl-[0.625rem] rounded-br-[0.625rem] rounded bg-[#311A34] flex justify-center items-center">
                    <p className="text-white text-[0.7rem] sm:text-sm ">
                      Registration: Coming
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="flex w-full mt-4 justify-center items-center">
          <button
            onClick={() => setModal(true)}
            className="pt-1 pb-[.25rem]  px-[.6rem] w-max   sm:w-[10rem] sm:px-6 text-[.7rem] sm:text-base text-black mt-[0.7rem] sm:mt-[1.5rem] bg-button rounded-md items-center cursor-pointer sm:py-3"
          >
            <p>See All</p>
          </button>
        </div>
      </div>
      {modal && <SoonModal modal={handleModal} />}
    </div>
  );
};

export default GameblocTournaments;
