import Image from "next/image";
import React from "react";
import image1 from "../../../public/assets/Section-1.png";
import image2 from "../../../public/assets/Section-2.png";
import image3 from "../../../public/assets/Section-3.png";
import image4 from "../../../public/assets/Section-4.png";
import image5 from "../../../public/assets/Section.png";

const WhyChooseUs = () => {
  return (
    <div className="max-w-7xl relative  m-auto p-4 lg:p-14">
      <div className="m-auto lg:w-full  text-left lg:mb-8">
        <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl font-bold text-center font-[poppins] text-[#252525] leading-7">
          {"Our Simple Car Loan Process"}
        </h2>
        <p className="text-base sm:text-base md:text-base lg:text-base xl:text-base line-clamp-4 text-center md:line-clamp-none text-[#252525] font-[cabin] leading-8">
          {
            "A hassle free and smooth process designed to help you get the car you want "
          }
        </p>
      </div>
      <section className="container relative text-gray-900 mx-auto lg:p-4 flex flex-col lg:flex-row items-center justify-center">
        {/* Right Column - Content */}
        <div className="grid lg:grid-flow-col lg:grid-rows-1 gap-4 w-full ">
          <div className="flex flex-col gap-4">
            <div className="border relative rounded-3xl overflow-hidden w-full ">
              <Image
                src={image1}
                width={900}
                height={900}
                alt="icon"
                className="h-52 w-full object-fill"
              />
              <div className="absolute bottom-0 bg-[#1262A1CC] backdrop-blur">
                <h3
                  className="text-sm sm:text-sm md:text-sm lg:text-sm xl:text-sm
               p-4 text-center font-[poppins] text-gray-50 leading-7"
                >
                  Leveraging technology, intellectual resources and
                  partnerships, Esteem can bring most cost-effective car finance
                  solutions to customers.
                </h3>
              </div>
            </div>

            <div className="border relative rounded-3xl overflow-hidden w-full">
              <Image
                src={image2}
                width={900}
                height={900}
                alt="icon"
                className="h-52 w-full object-fill"
              />
              <div className="absolute bottom-0 bg-[#1262A1CC] backdrop-blur ">
                <h3
                  className="text-sm sm:text-sm md:text-sm lg backdrop-blur:text-sm xl:text-sm
               p-4 text-center font-[poppins] text-gray-50 leading-7"
                >
                  Fastest turn around time for finance process.
                </h3>
              </div>
            </div>
          </div>

          <div className="border relative rounded-3xl overflow-hidden w-full">
            <Image
              src={image3}
              width={900}
              height={900}
              alt="icon"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 w-full bg-[#1262A1CC] backdrop-blur p-4">
              <h3 className="text-sm sm:text-sm md:text-sm lg:text-sm xl:text-sm text-center font-[poppins] text-gray-50 leading-7">
                Esteem&apos;s subject matter experts analyze and recommend unbiased
                finance solution pertinent to the needs and wants of customers
                by providing bottom line statistics.
              </h3>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="border relative rounded-3xl overflow-hidden w-full">
              <Image
                src={image4}
                width={900}
                height={900}
                alt="icon"
                className="h-52 w-full object-fill"
              />
              <div className="absolute bottom-0 bg-[#1262A1CC] backdrop-blur">
                <h3
                  className="text-sm sm:text-sm md:text-sm lg:text-sm xl:text-sm
             p-4 text-center font-[poppins] text-gray-50 leading-7"
                >
                  Esteem can provide wider vendor options to choose from.
                </h3>
              </div>
            </div>

            <div className="border relative rounded-3xl overflow-hidden w-full">
              <Image
                src={image5}
                width={900}
                height={900}
                alt="icon"
                className="h-52 w-full object-fill"
              />
              <div className="absolute bottom-0 bg-[#1262A1CC] backdrop-blur ">
                <h3
                  className="text-sm sm:text-sm md:text-sm lg:text-sm xl:text-sm
             p-4 text-center font-[poppins] text-gray-50 leading-7"
                >
                  Esteem&apos;s services are unconditionally, in the benefit of
                  customers making a customer centric market.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;
