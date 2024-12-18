import Image from "next/image";
import { client, country, project, skilled } from "../../public/as/assets";

export default function Achievements() {
  return (
    <section className="container mx-auto px-6 py-12 lg:flex lg:items-center lg:justify-between">
      <div className="lg:w-1/2 space-y-4 mb-8 lg:mb-0">
        <h2 className="text-3xl md:text-5xl font-bold text-main md:leading-relaxed">
          Over a Decade of <br className="mt-4" /> Achievements
        </h2>

        <p className="text-lg text-main">
          With our super powers we have reached this
        </p>
      </div>

      {/* Right Side Cards */}
      <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="flex items-center space-x-2 p-4 bg-white rounded-lg shadow-md hover:shadow-xl">
          <Image
            src={client}
            alt="User 1"
            className="w-16 h-16 rounded-full object-cover"
          />

          <div>
            <h3 className="text-lg font-semibold text-gray-800">Projects</h3>
            <p className="text-sm text-gray-600">250+</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex items-center space-x-2 p-4 bg-white rounded-lg shadow-md hover:shadow-xl">
          {/* User Image */}
          <Image
            src={country}
            alt="User 2"
            className="w-16 h-16 rounded-full object-cover"
          />
          {/* Text Content */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Clients</h3>
            <p className="text-sm text-gray-600">120+</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex items-center space-x-2 p-4 bg-white rounded-lg shadow-md hover:shadow-xl">
          {/* User Image */}
          <Image
            src={project}
            alt="User 3"
            className="w-16 h-16 rounded-full object-cover"
          />
          {/* Text Content */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Awards</h3>
            <p className="text-sm text-gray-600">15</p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="flex items-center space-x-2 p-4 bg-white rounded-lg shadow-md hover:shadow-xl">
          {/* User Image */}
          <Image
            src={skilled}
            alt="User 4"
            className="w-16 h-16 rounded-full object-cover"
          />
          {/* Text Content */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Team</h3>
            <p className="text-sm text-gray-600">50+</p>
          </div>
        </div>
      </div>
    </section>
  );
}
