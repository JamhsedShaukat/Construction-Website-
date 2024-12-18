import Image from "next/image";
import { worker } from "../../public/as/assets";

export default function ToBuild() {
  return (
    <section className="container mx-auto flex justify-center items-center py-12 px-4">
      <div className="flex flex-col justify-center items-center gap-4 w-full">
        {/* Heading */}
        <h1 className="text-2xl md:text-4xl text-main text-center font-bold">
          Let us help you build.
        </h1>

        {/* Paragraph */}
        <p className="text-main text-center w-[300px] md:w-[500px] max-w-[600px]">
          Over 17 years of experience in creating spaces that positively impact
          people’s lives.
        </p>

        {/* Image  w-[80%] md:w-[60%] lg: */}
        <div className="w-[90%] px-4">  
          <Image
            src={worker}
            alt="worker"
            layout="responsive"
            objectFit="contain"
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
