import Image from "next/image";
import { mainHero, line, play } from "../../public/as/assets";

export default function Hero() {
  return (
   
    <section
      className="relative bg-cover bg-center flex items-center "
      style={{ backgroundImage: `url(${mainHero.src})` }} // Replace with your image path
    >
      <div className=" container mx-16  flex flex-col-reverse md:flex-row    md:py-20">
        {/* Left Side: Text and Buttons */}
        <div className="flex-1  text-left space-y-6 md:pr-12 py-12">
          {/* Heading */}
          <h1 className="text-4xl  md:text-5xl lg:text-6xl  leading-10">
            Stunning Visuals <br /> 
            For Your Brand
          </h1>

          {/* Paragraph */}
          <p className="text-t1 max-w-md">
            We create captivating designs and digital experiences tailored to
            elevate your brand and engage your audience
            <span className="hidden md:inline">

            elevate your brand and engage your audience.
            </span>
          </p>

          {/* Button and Icons */}
          <div className="flex items-center space-x-3 md:space-x-6 ">
            {/* Primary Button */}
            <button className="bg-main text-white px-2 md:px-6 py-2 md:py-4 md:mr-2 rounded hover:bg-[#777777]">
              See Our Work
            </button>

            {/* Line Icon and Explore */}
            <div className=" items-center md:space-x-2 hidden md:flex text-main">
              <Image className="hover:text-[#777777] cursor-pointer" src={play} alt="Play Icon " width={70} height={70} />
              <Image src={line} alt="Line Icon md:w-[40px]" width={80} height={2} />
              <span className="font-medium uppercase">Explore</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
