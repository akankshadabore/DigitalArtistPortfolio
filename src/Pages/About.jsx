import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="min-h-screen bg-linear-to-b from-pink-100 via-pink-50 to-white py-24 px-6 flex items-center justify-center">
      <div className="max-w-8xl  rounded-md md:p-10 flex flex-col lg:flex-row items-center  gap-20">
        <img
          src="https://images.unsplash.com/photo-1695843126492-8d720b51077f?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=600"
          alt="Daniel Digital Artist"
          className="rounded-2xl shadow-lg w-full md:w-1/1 lg:w-1/3 object-cover hover:scale-105 transition-all"
        />
        <div className="flex-1">
          <h1 className="text-xl sm:text-lg md:text-3xl  font-bold text-gray-800 mb-4">
            Hi, I’m <span className="text-pink-600">Daniel</span> 👋
          </h1>
          <p className="text-gray-700 text-sm md:text-xl leading-relaxed mb-6">
            I’m a <span className="font-semibold text-pink-600">Digital Artist</span> 
            from <span className="font-medium">Pune, Maharashtra</span> with over{" "}
            <span className="font-semibold">9+ years</span> of experience in creating 
            stunning <span className="text-pink-600 font-medium">digital artworks, illustrations,</span> 
            and <span className="text-pink-600 font-medium">concept designs.</span>
          </p>

          <p className="text-gray-700 text-sm leading-relaxed md:text-md mb-6">
            My passion lies in blending imagination with digital creativity. I work with 
            vibrant colors, bold textures, and expressive compositions to create unique art 
            pieces that inspire emotion and storytelling.
          </p>

          <p className="text-gray-700 text-sm leading-relaxed md:text-md mb-6">
            Apart from my personal projects, I also take{" "}
            <span className="font-semibold text-pink-600">
              custom art commissions
            </span>{" "}
            — whether it’s a personalized portrait, digital painting, or custom 
            illustration for your brand or home décor. Every artwork is crafted with 
            detail, dedication, and emotion.
          </p>
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">My Skills</h2>
            <ul className="grid grid-cols-2 gap-3 text-gray-700 text-sm md:text-md">
              <li>🎨 Digital Painting</li>
              <li>🖌️ Illustration & Sketching</li>
              <li>💡 Concept Art</li>
              <li>🖼️ Adobe Photoshop & Illustrator</li>
              <li>🧠 Creative Direction</li>
              <li>📱 Visual Storytelling</li>
            </ul>
          </div>
          <div className="mt-10 flex gap-4">
            <Link
              to="/products"
              className="bg-pink-500 hover:bg-pink-600 text-white px-3 py-3 md:px-3 md:py-4 text-sm md:text-[14px] rounded-full text-center font-medium shadow-lg transition-all"
            >
              View My Artworks
            </Link>
            <a
              href="mailto:daniel.artworks@example.com"
              className="border-2 border-pink-500 text-pink-600 hover:bg-pink-500 hover:text-white px-6 py-3 text-[14px] md:px-8 text-center rounded-full font-medium shadow-lg transition-all"
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
