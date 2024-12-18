import Image from "next/image";
import { logo, logo2, logo3, logo4 } from "../../public/as/assets";

export default function Clients() {
  return (
    <section className=" mx-auto px-6 py-12 lg:flex lg:items-center flex-col">
      <div className="container flex justify-center items-center">
        <h1 className="text-center text-2xl font-semibold">
          OUR TRUSTED CLIENTS{" "}
        </h1>
      </div>

      <div className="lg:w-full grid grid-cols-1 sm:grid-cols-4 mt-4 gap-6">
        <div className="flex items-center   bg-white rounded-lg shadow-md hover:shadow-xl">
          <Image
            src={logo}
            alt="User 1"
            className="w-70 h-50 rounded-full object-cover"
          />
        </div>

        {/* Card 2 */}
        <div className="flex items-center  bg-white rounded-lg shadow-md hover:shadow-xl">
          {/* User Image */}
          <Image
            src={logo2}
            alt="User 2"
            className="w-50 h-50 rounded-full object-cover"
          />
        </div>

        {/* Card 3 */}
        <div className="flex items-center bg-white rounded-lg shadow-md hover:shadow-xl">
          <Image
            src={logo3}
            alt="User 3"
            className="w-50 h-50 rounded-full object-cover"
          />
        </div>

        <div className="flex items-center  bg-white rounded-lg shadow-md hover:shadow-xl">
          <Image
            src={logo4}
            alt="User 4"
            className="w-50 h-50 rounded-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
