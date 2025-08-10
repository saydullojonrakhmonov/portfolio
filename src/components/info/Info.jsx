import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

function Info() {
  return (
    <section className="px-6 lg:px-20 lg:h-[750px] md:mx-10 flex items-center">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between w-full space-y-8 lg:space-y-0 lg:gap-12">
        
        {/* Text Section */}
        <div className="flex flex-col gap-6 max-w-3xl text-center sm:mt-10 lg:text-left">
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-800 dark:text-gray-900 leading-tight">
            <Typewriter
              words={[
                "Hi, I'm Saydullojon Rahmonov",
                "I'm a Frontend Developer"
              ]}
              loop={Infinity}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h1>

          <p className="text-gray-600 dark:text-gray-800 text-base sm:text-lg leading-relaxed">
            I'm a passionate Frontend Developer with experience in building responsive, 
            user-friendly web interfaces using React, Tailwind CSS, and modern JavaScript frameworks. 
            I love turning complex ideas into clean, interactive designs. Always learning. Always building.
          </p>

          {/* Download Resume Button */}
          <div className="relative group w-fit mx-auto lg:mx-0">
            <a
              href="/saydullojon_rahmonov.pdf"
              download
              title="Click to download resume"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl shadow-md hover:bg-blue-700 transition cursor-pointer"
            >
              Download Resume
              <FontAwesomeIcon icon={faDownload} className="ms-1" />
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center mt-5 ">
          <img
            src="/logo.svg"
            alt="Developer"
            className="w-60 sm:w-80 lg:w-[470px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default Info;
