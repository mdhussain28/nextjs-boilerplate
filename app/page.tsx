import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[1fr_20px] items-center justify-items-center min-h-screen bg-black text-white">
      <main className="flex flex-col gap-8 items-center text-center">
        {/* Tech Takshak Logo */}
        <Image
          src="/tt.png" // Path based on public folder
          alt="Tech Takshak Logo"
          width={200}
          height={200}
          priority
        />
        
        <h1 className="text-4xl font-bold">
          Welcome to <span className="text-blue-500">Tech Takshak!</span>
        </h1>
        
        <p className="max-w-md">
          Tech Takshak, the annual tech fest of <strong>KNS Institute of Technology (KNSIT)</strong>, 
          is the ultimate destination for innovation, learning, and collaboration. Stay tuned as we 
          bring you an electrifying lineup of events, workshops, and challenges!
        </p>
        
        <p>The official website is under construction and will go live soon. Stay updated for more information!</p>

        {/* Buttons for Links */}
        <div className="flex gap-4">
          <a
            href="https://knsit.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Visit KNSIT Website
          </a>
          <a
            href="https://www.instagram.com/tech_takshak/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600"
          >
            Follow on Instagram
          </a>
        </div>
      </main>

      <footer className="text-sm text-gray-500">
        © 2024 Tech Takshak | KNS Institute of Technology
      </footer>
    </div>
  );
}
