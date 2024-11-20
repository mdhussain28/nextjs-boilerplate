import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 items-center text-center">
        {/* Tech Takshak Logo */}
        <Image
          src="app/final  logo.png" // Adjust this path based on your file location
          alt="Tech Takshak Logo"
          width={200}
          height={200}
          priority
        />

        {/* Welcome Text */}
        <h1 className="text-4xl font-extrabold tracking-tight">
          Welcome to <span className="text-blue-600">Tech Takshak</span>!
        </h1>

        {/* Description */}
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl">
          Tech Takshak, the annual tech fest of <strong>KNS Institute of Technology (KNSIT)</strong>, is the ultimate destination for innovation, learning, and collaboration. 
          Stay tuned as we bring you an electrifying lineup of events, workshops, and challenges!
        </p>
        <p className="text-base text-gray-500 dark:text-gray-400">
          The official website is under construction and will go live soon. Stay updated for more information!
        </p>

        {/* Buttons */}
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-blue-600 text-white gap-2 hover:bg-blue-700 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://knsit.edu.in"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit KNSIT Website
          </a>
          <a
            className="rounded-full border border-solid border-gray-300 dark:border-gray-700 transition-colors flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="#"
          >
            Learn More
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="row-start-2 flex gap-6 flex-wrap items-center justify-center">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Tech Takshak | KNS Institute of Technology
        </p>
      </footer>
    </div>
  );
}
