import { ISection } from "@/utils/server";
import Image from "next/image";
import React from "react";
import image1 from "../../../public/images/section1Image.png";
import image2 from "../../../public/images/challengeIcon1.png";
import image3 from "../../../public/images/challengeIcon2.png";
import image4 from "../../../public/images/challengeIcon2.png";
import image5 from "../../../public/images/challengeIcon4.png";
import image6 from "../../../public/images/challengeIcon5.png";

// import image2 from "/images/challengeIcon2.png";
// import image3 from "/images/challengeIcon3.png";
// import image4 from "/images/challengeIcon4.png";
// import image5 from "/images/challengeIcon5.png";
// import image6 from "/images/challengeIcon6.png";

const HowDifferent = ({ sectionData }: { sectionData?: ISection }) => {
  return (
    <div className="max-w-7xl relative  m-auto p-4 lg:p-14">
      <div className="m-auto lg:w-full  text-left lg:mb-8">
        <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-2xl xl:text-3xl font-bold text-[#252525] leading-7">
          {sectionData?.title ||
            "How Differently Esteem, Can Help You Overcome"}
          <span className="text-[#F75D34]"> {"Your Challenges"}</span>
        </h2>
        <p className="text-lg sm:text-lg md:text-lg lg:text-lg xl:text-lg line-clamp-4 md:line-clamp-none text-[#252525] mt-4 leading-8">
          {sectionData?.description ||
            "Here's How Esteem Makes Car Financing Simple, Transparent, and Accessible"}
        </p>
      </div>
      <section className="container relative text-gray-900 mx-auto lg:p-4 flex flex-col lg:flex-row items-center justify-center lg:gap-8 ">
        {/* Left Column - Image */}
        <div className="lg:w-1/2 w-full flex justify-center">
          <Image
            src={image1}
            alt="Who We Are Image"
            width={800}
            height={630}
            className="rounded-xl shadow-lg w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl object-cover"
          />
        </div>

        {/* Right Column - Content */}
        <div className="lg:w-1/2 w-full mt-8 lg:mt-0 lg:pl-12 text-left">
          <ul>
            <li className="flex justify-start items-center text-sm sm:text-lg md:text-xl lg:text-[16px] xl:text-[16px]  text-[#252525] mt-4 p-2 leading-8">
              <Image
                src={image2}
                width={35}
                height={35}
                alt="icon"
                className="m-1"
              />

              <p className="pl-2 lg:pl-0 text-lg">
                {sectionData?.description ||
                  "Car finance is very expensive in New Zealand."}
              </p>
            </li>{" "}
            <li className="flex justify-start items-center text-sm sm:text-lg md:text-xl lg:text-[16px] xl:text-[16px]  text-[#252525] mt-4 p-2 leading-8">
              <Image
                src={image3}
                width={35}
                height={35}
                alt="icon"
                className="m-1"
              />

              <p className="pl-2 lg:pl-0 text-lg">
                {sectionData?.description || "Not many options are provided."}
              </p>
            </li>{" "}
            <li className="flex justify-start items-center text-sm sm:text-lg md:text-xl lg:text-[16px] xl:text-[16px]  text-[#252525] mt-4 p-2 leading-8">
              <Image
                src={image4}
                width={35}
                height={35}
                alt="icon"
                className="m-1"
              />

              <p className="pl-2 lg:pl-0 text-lg">
                {sectionData?.description ||
                  "New Zealand  car finance is still not a buyers market."}
              </p>
            </li>{" "}
            <li className="flex justify-start items-center text-sm sm:text-lg md:text-xl lg:text-[16px] xl:text-[16px]  text-[#252525] mt-4 p-2 leading-8">
              <Image
                src={image5}
                width={35}
                height={35}
                alt="icon"
                className="m-1"
              />

              <p className="pl-2 lg:pl-0 text-lg">
                {sectionData?.description ||
                  "Lacks transparent, unbiased, true business consulting."}
              </p>
            </li>
            <li className="flex justify-start items-center text-sm sm:text-lg md:text-xl lg:text-[16px] xl:text-[16px]  text-[#252525] mt-4 p-2 leading-8">
              <Image
                src={image6}
                width={35}
                height={35}
                alt="icon"
                className="m-1"
              />

              <p className="pl-2 lg:pl-0 text-lg">
                {sectionData?.description ||
                  "Car finance market lacks one stop shop intellegent system providing complete knowledge and resources for addressing customer needs & solutions."}
              </p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default HowDifferent;
