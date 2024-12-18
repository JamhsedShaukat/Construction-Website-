import Image from "next/image";
import { c1, c2, c3 } from "../../public/as/assets";

// Array of objects containing card data
const articlesData = [
  {
    id: 1,
    image: c1,
    title: "Canadian Construction Branches.",
    description:
      "We'll Supply You With Materials To Create Your Dream Property From Foundation To Finish. Call To Get Started!",
  },
  {
    id: 2,
    image: c2,
    title: "Australian Construction Branches.",
    description:
      "We'll Supply You With Materials To Create Your Dream Property From Foundation To Finish. Call To Get Started!",
  },
  {
    id: 3,
    image: c3,
    title: "Brazilian Construction Branches.",
    description:
      "We'll Supply You With Materials To Create Your Dream Property From Foundation To Finish. Call To Get Started!",
  },
];

export default function Articles() {
  return (
    <section className="  py-12  items-center">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-2 lg:gap-6">
        {articlesData.map((article) => (
          <div
            key={article.id}
            className="flex flex-col items-center text-left  shadow-md rounded-lg p-2  md:w-[333px]  max-w-[320px] lg:max-w-[305px] lx:maz-w-[380px] bg-white"
          >
            {/* Image */}
            <div className="h-[250px] lx:w-[375px] lg:w-[300px] md:w-[333px] relative overflow-hidden">
              <Image
                src={article.image}
                alt={article.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>

          
            <h1 className="font-bold text-2xl text-left py-4 text-main">
              {article.title}
            </h1>

        
            <p className="text-left text-main px-2">
              {article.description}
            </p>

     
            <button className="mt-4 text-t3 text-start font-semibold hover:text-[#f09000]">
              Read More &gt;
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
