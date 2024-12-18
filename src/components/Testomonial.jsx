import Image from "next/image";
import { user2,user3,user4,user5,user6 } from "../../public/as/assets";

export default function Testomonial() {
  return (
    <section className=" mx-auto px-6 py-12 lg:flex lg:items-center flex-col bg-[#E6F0F4]">
      <div className="container flex flex-col justify-center items-center mx-auto">
        <h1 className="text-4xl text-center font-bold text-main py-5">
          Few Words From Our Clients
        </h1>

        <p className="bg-w1 p-6 w-[400px] sm:w-[450px] md:w-[600px]  ">
          We had an incredible experience working with them and were impressed
          they made such a big difference in only three weeks. Our team is so
          grateful for the wonderful improvements they made and their ability to
          get familiar with the product concept so quickly. It acted as a
          catalyst to take our design to the next level and get more eyes on our
          product.
        </p>

        <div className="flex flex-row justtify-center items-center gap-4 sm:gap-6 md:gap-16 pt-12 ">
        <div className="flex items-center space-x-2 p-4 bg-transparent rounded-lg  ">
          <Image
            src={user2}
            alt="User 1"
            className="w-14 h-14 rounded-full object-cover"
          />

          <div>
            <h3 className="text-lg font-semibold text-gray-800">Projects</h3>
            <p className="text-sm text-gray-600">250+</p>
          </div>
          
        </div>
            <Image
            src={user3}
            alt="User 1"
            className="w-14 h-14 rounded-full object-cover"
          />
           <Image
            src={user4}
            alt="User 1"
            className="w-14 h-14 rounded-full object-cover hidden md:inline"
          />
           <Image
            src={user5}
            alt="User 1"
            className="w-14 h-14 rounded-full object-cover"
          />
           <Image
            src={user6}
            alt="User 1"
            className="w-14 h-14 rounded-full object-cover"
          />

        </div>

      </div>
    </section>
  );
}
