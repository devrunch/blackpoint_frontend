import Hero_img from '../assets/images/hero_image.png'
const Hero = () => {
  return (
    <div className="bg-gray-200 flex relative z-20 items-center overflow-hidden">
      <div className="container mx-auto px-6 flex relative py-16">
        <div className="sm:w-2/3 lg:w-1/2 flex flex-col relative z-20">
          <span className="w-20 h-2 bg-gray-800 mb-12"></span>
          <h1 className="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none text-gray-800">
            BLACKINFO
            <span className="text-1xl sm:text-3xl"> Your Road Saftey Companion  </span>
          </h1>
          <p className="text-sm sm:text-base text-gray-700">
          Our website is dedicated to identifying high-risk road accident spots and providing effective treatment strategies. Through data analysis and community collaboration, we pinpoint hazardous areas, offer insights into their causes, and propose actionable solutions to enhance road safety. Join us in making travel safer for everyone
          </p>
          <div className="flex mt-8">
            <a
              href="#"
              className="uppercase py-2 px-4 rounded-lg bg-blue-900 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400"
            >
              Upload file
            </a>
            <a
              href="#"
              className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-pink-500 text-pink-500 dark:text-white hover:bg-pink-500 hover:text-white text-md"
            >
              Manual Entry
            </a>
          </div>
        </div>
        <div className="hidden sm:block sm:w-1/3 lg:w-1/2 relative">
          <img
            src={Hero_img}
            className="max-w-64 md:max-w-64 m-auto"
            alt="Illustration"
          />
        </div>  
      </div>
    </div>
  )
}

export default Hero