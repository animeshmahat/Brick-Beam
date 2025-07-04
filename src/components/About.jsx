import { assets } from "../assets/assets";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden"
      id="About"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2">
        Who &nbsp;
        <span className="underline underline-offset-4 decoration-1 under font-light">
          We Are
        </span>
      </h1>
      <p className="text-gray-500 max-w-80 text-center mb-8">
        We are storytellers of space — shaping homes, lifestyles, and legacies.
      </p>
      <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
        <img
          src={assets.brand_img}
          alt=""
          className="w-full md:w-1/2 max-w-lg"
        />
        <div className="flex flex-col items-center md:items-start mt-10 text-gray-600">
          <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
            <div>
              <p className="text-4xl font-medium text-gray-800">10+</p>
              <p>Years of Architectural Passion</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">12+</p>
              <p>Landmark Visions Realized</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">20+</p>
              <p>Million Sq. Ft. of Inspired Living</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">25+</p>
              <p>Dreams Under Construction</p>
            </div>
          </div>
          <p className="my-10 max-w-lg text-justify">
            At the heart of every structure we build lies a story — a story of
            vision, dedication, and unwavering quality. From skyline-defining
            towers to serene communities, we design not just buildings, but
            better ways of living. With over a decade of excellence and
            innovation, our mission is simple: to turn everyday spaces into
            extraordinary experiences.
          </p>
          <button className="bg-blue-600 text-white px-8 py-2 rounded">
            Learn More
          </button>
        </div>
      </div>
    </motion.div>
  );
}
