import { Link } from "react-router-dom";

export default function Home() {
  const artworks = [
    {
      id: 1,
      title: "Abstract Beauty",
      price: 1500,
      image:
        "https://images.unsplash.com/photo-1694727504314-5fd0903f90a3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGFydHdvcmslMjBwYWludGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
    },
    {
      id: 2,
      title: "John Freeth and his Circle or Birmingham Men",
      price: 2000,
      image:
        "https://images.unsplash.com/photo-1694727504401-b62eadca10bd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fGFydHdvcmslMjBwYWludGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
    },
    {
      id: 3,
      title: "ArtWork",
      price: 2500,
      image:
        "https://plus.unsplash.com/premium_photo-1673514502996-5144e7728e05?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YXJ0d29yayUyMHBhaW50aW5nfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-pink-100 via-pink-50 to-white text-gray-800 flex flex-col items-center justify-center px-6 mt-12">
      <div className="text-center max-w-3xl mb-6 md:mb-16">
        <h1 className="text-lg md:text-5xl font-bold mb-3 md:mb-6">
           Hi, I’m Daniel — Digital Artist from Pune, Maharashtra
        </h1>
        <p className="text-sm md:text-xl leading-relaxed mb-5 md:mb-8">
          I have over <span className="font-semibold">9+ years</span> of
          experience in creating stunning{" "}
          <span className="text-pink-600 font-medium">
            digital illustrations
          </span>{" "}
          and{" "}
          <span className="text-pink-600 font-medium">
            artwork commissions
          </span>
          . Explore my gallery to see my best works and exclusive offers!
        </p>

        <Link
          to="/products"
          className="bg-pink-500 hover:bg-pink-600 text-white px-3 py-2 md:px-6 md:py-3 text-[12px] sm:text-lg rounded-full shadow-lg transition-all duration-300"
        >
          View My Artworks
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-6">
        {artworks.map((art) => (
          <div
            key={art.id}
            className="rounded-2xl overflow-hidden shadow-md hover:shadow-lg hover:scale-105 transition-all"
          >
            <img
              src={art.image}
              alt={art.title}
              className="w-[400px] h-30 md:w-full md:h-65 object-cover"
            />
            <div className="p-3 md:p-4 bg-white">
              <h3 className="font-semibold text-sm md:text-md">{art.title}</h3>
              <p className="text-pink-600 font-medium">₹{art.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
