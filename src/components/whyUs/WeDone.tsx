"use client";

const WeDone: React.FC = () => {
  const datas = [
    { id: 1, value: "98", unit: "Projects", logo: "/images/bulb.png" },
    { id: 2, value: "65", unit: "People", logo: "/images/high-qualty.png" },
    { id: 3, value: "10", unit: "Years", logo: "/images/consumer-centric.png" },
    { id: 4, value: "15", unit: "Office", logo: "/images/global-online.png" },
  ];

  return (
    <section className="bg-whitem max-w-7xl m-auto p-4 lg:p-0 py-20">
      <div className="m-auto lg:w-3/5 text-center mb-8">
        <h2 className="text-sm sm:text-3xl md:text-4xl lg:text-sm xl:text-sm font-normal  text-gray-50 leading-7 mb-3">
          Our Achievements{" "}
        </h2>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold text-gray-50 leading-7">
          What We Have Done
        </h2>
        <p className="text-base sm:text-lg md:text-xl lg:text-[16px] xl:text-[16px] line-clamp-3 md:line-clamp-none text-gray-100 mt-4 leading-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat
        </p>
      </div>

      <div className="relative overflow-hidden py-4">
        <div className="relative  overflow-hidden max-w-screen-xl mx-auto w-4/5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {/* Map clients to show in pairs */}
          {datas &&
            datas?.map((data, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex justify-center items-center h-44 ;g:h-64 rounded-none"
              >
                <h2 className="relative text-9xl font-extrabold text-[#b0b0b08c] flex justify-center items-center">
                  {data?.value}

                  <span className="absolute text-gray-100 text-xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    {data?.unit}
                  </span>
                </h2>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default WeDone;
