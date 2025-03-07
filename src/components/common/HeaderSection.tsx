import React from "react";

export default function HeaderSection({
  title,
  subTitle,
  description,
  textColor,
}: {
  title: string;
  subTitle: string;
  description: string;
  textColor?: string;
}) {
  return (
    <div className="lg:w-4/6 m-auto mb-8 text-center">
      <h2
        className={`text sm:text-sm md:text-sm lg:text-sm xl:text-sm font-normal tracking-widest ${
          textColor ? `text-${textColor}-600` : "text-gray-50"
        } leading-8 mb-3`}
      >
        {subTitle}
      </h2>
      <h2
        className={`text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl font-bold ${
          textColor ? `text-${textColor}-600` : "text-gray-50"
        } leading-8 mb-4 `}
      >
        {title}
      </h2>
      <p
        className={`text-sm sm:text-lg md:text-xl lg:text-[16px] xl:text-[16px] line-clamp-3 md:line-clamp-none ${
          textColor ? `text-${textColor}-600` : "text-gray-100"
        } mt-4 leading-8`}
      >
        {description}
      </p>
    </div>
  );
}
