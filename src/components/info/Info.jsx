import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

function Info() {
  return (
    <section className="mt-52 px-6 lg:px-20 h-[545px]">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        {/* Text Section */}
        <div className="flex flex-col gap-6 max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 dark:text-gray-900">
            <Typewriter
              words={['Hi, I am Saydullojon Rahmonov', 'I am a Frontend Developer']}
              loop={Infinity}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h1>
          <p className="text-gray-600 dark:text-gray-800 text-lg leading-relaxed">
            I'm a passionate Frontend Developer with experience in building responsive, user-friendly web interfaces using React, Tailwind CSS, and modern JavaScript frameworks. I love turning complex ideas into clean, interactive designs. Always learning. Always building.
          </p>

          {/* Download Resume Button */}
          <div className="relative group w-fit">
            <a
              href="/saydullojon_rahmonov.pdf"
              download
              title="Click to download resume"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl shadow-md hover:bg-blue-700 transition cursor-pointer"
            >
              Download Resume
              <FontAwesomeIcon icon={faDownload} className='ms-1' />
            </a>
          </div>

        </div>

        {/* Image Section */}
        <div>
          <img src="/logo.svg" alt="Developer" width="470" className="object-contain" />
        </div>
      </div>
    </section>
  );
}

export default Info;
