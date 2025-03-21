import Image from "next/image";

const Essentials = () => {
  const clients = [
    {
      id: 1,
      name: "Search and Rescue",
      desc: "Access to hard-to-reach locations and identification of victims.",
      logo: "/images/flotingTyre.png",
    },
    {
      id: 2,
      name: "Disaster Response",
      desc: "Resource management and coordination of operations in disaster situations.",
      logo: "/images/wave.png",
    },
    {
      id: 3,
      name: "Fire Fighting Support",
      desc: "Assistance in extinguishing fires using thermal information and area monitoring.",
      logo: "/images/fire.png",
    },
    {
      id: 4,
      name: "Fire Fighting Support",
      desc: "Assistance in extinguishing fires using thermal information and area monitoring.",
      logo: "/images/exit.png",
    },
  ];

  return (
    <section className="py-12 max-w-7xl mx-auto p-4 lg:p-0">
      {/* Radial Gradient Background */}

      {/* Content */}
      <div className="relative z-10 text-center lg:w-3/5 mx-auto lg:mb-2 lg:p-12">
        <h2 className="text-sm sm:text-3xl md:text-4xl lg:text-sm xl:text-sm font-normal  text-gray-50 leading-7 mb-3">
          Our Commitments
        </h2>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold text-gray-50 leading-7">
          Why SkyField
        </h2>
        <p className="text-base sm:text-lg md:text-xl lg:text-[16px] xl:text-[16px] text-gray-100 mt-4 leading-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      {/* Clients Grid */}
      <div className="relative z-10 py-8">
        <div className="max-w-screen-xl mx-auto w-4/5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {clients.map((client, index) => (
            <div
              key={index}
              className={`flex flex-col justify-center items-center h-64 rounded-lg p-6 bg-transparent`}
            >
              <Image
                src={client.logo || "/images/wave.png"}
                width={5000}
                height={5000}
                alt={`Client ${index + 1}`}
                className="w-28 h-28 object-contain p-2"
              />
              <p className="mt-2 text-lg font-semibold text-center text-gray-50">
                {client.name}
              </p>
              <p className="mt-2 text-xs font-   text-center text-gray-300">
                {client.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Essentials;
