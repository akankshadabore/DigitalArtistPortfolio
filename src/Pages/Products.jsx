export default function Products({ onAddToCart }) {
  const artworks = [
    {
      id: 1,
      title: "Abstract Beauty",
      price: 1500,
      image:
        "https://images.unsplash.com/photo-1632230886681-5ec2015fdb96?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTh8fGFydHdvcmslMjBwYWludGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
      desc: "A beautiful abstract composition blending colors and motion.",
    },
    {
      id: 2,
      title: "Color Splash",
      price: 2000,
      image:
        "https://images.unsplash.com/photo-1703593191783-ba925f0b5584?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA0fHxhcnR3b3JrJTIwcGFpbnRpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
      desc: "Vibrant splash of colors symbolizing creativity and emotion.",
    },
    {
      id: 3,
      title: "Digital Dreams",
      price: 2500,
      image:
        "https://images.unsplash.com/photo-1694727504314-5fd0903f90a3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGFydHdvcmslMjBwYWludGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
      desc: "A dreamy digital landscape full of imagination.",
    },
    {
      id: 4,
      title: "Mystic Portrait",
      price: 2200,
      image:
        "https://images.unsplash.com/photo-1703593191760-ff33fe19c56d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM1fHxhcnR3b3JrJTIwcGFpbnRpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
      desc: "A mysterious portrait with surreal color depth.",
    },
    {
      id: 5,
      title: "Golden Hour",
      price: 2700,
      image:
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=500",
      desc: "Sunset hues and glowing light — the golden moment.",
    },
    {
      id: 6,
      title: "Floral Fantasy",
      price: 1800,
      image:
        "https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500",
      desc: "Floral patterns in pastel tones creating peace and beauty.",
    },
    {
      id: 7,
      title: "Cosmic Flow",
      price: 2600,
      image:
        "https://images.unsplash.com/photo-1503264116251-35a269479413?w=500",
      desc: "A galaxy-inspired flow of color and movement.",
    },
    {
      id: 8,
      title: "Urban Glow",
      price: 2400,
      image:
        "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=500",
      desc: "Neon-lit city vibes — bright, modern, and expressive.",
    },
    {
      id: 9,
      title: "Vintage Vision",
      price: 2100,
      image:
        "https://images.unsplash.com/photo-1694727504314-5fd0903f90a3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGFydHdvcmslMjBwYWludGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
      desc: "A nostalgic artwork inspired by retro colors and tones.",
    },
    {
      id: 10,
      title: "Serene Sky",
      price: 2300,
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500",
      desc: "Calm and peaceful sky illustration bringing harmony.",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-pink-100 via-pink-50 to-white py-24 px-6">
      <h2 className="text-center text-2xl md:text-4xl font-bold text-gray-800 mt-6">
         Daniel’s Artworks Gallery
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mt-14 hover:scale-75ale-">
        {artworks.map((art) => (
          <div
            key={art.id}
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-all"
          >
            <img
              src={art.image}
              alt={art.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-5 flex flex-col justify-between h-48">
              <div>
                <h3 className="font-semibold text-lg text-gray-800">
                  {art.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1">{art.desc}</p>
              </div>
              <div className="flex items-center justify-between mt-4">
                <span className="text-pink-600 font-bold text-lg">
                  ₹{art.price}
                </span>
                <button
                  onClick={() => onAddToCart(art)}
                  className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 md:px-3  md:text-[12px] text-sm rounded-full transition-all"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
