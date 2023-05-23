


const Gallery = () => {


    const carImages = [
        "https://img.freepik.com/free-photo/small-red-car-toy-kid-child-playing-with-it_114579-7239.jpg?w=996&t=st=1684863332~exp=1684863932~hmac=d3216e46d14bcfb5edd2bf67b795046fc60ff6abd565a7b599593d711754ca1b",
        "https://img.freepik.com/free-photo/fun-gorilla-3d-illustration_183364-80089.jpg?w=740&t=st=1684863407~exp=1684864007~hmac=2087ed69b5f4111b3e4033c22ac3c80d99fef8428743b1f21f5e2d08ad4f8f91",
        "https://img.freepik.com/free-photo/closeup-shot-toy-red-wooden-train-wooden-table_181624-21684.jpg?w=996&t=st=1684863459~exp=1684864059~hmac=65293199c060ec92dbd3f123c108854c24584d37527dd4918fbe25dc75c3ef34",
        "https://img.freepik.com/free-photo/small-red-car-toy-kid-child-playing-with-it_114579-7239.jpg?w=996&t=st=1684863332~exp=1684863932~hmac=d3216e46d14bcfb5edd2bf67b795046fc60ff6abd565a7b599593d711754ca1b",
        "https://img.freepik.com/free-photo/fun-gorilla-3d-illustration_183364-80089.jpg?w=740&t=st=1684863407~exp=1684864007~hmac=2087ed69b5f4111b3e4033c22ac3c80d99fef8428743b1f21f5e2d08ad4f8f91",
        "https://img.freepik.com/free-photo/closeup-shot-toy-red-wooden-train-wooden-table_181624-21684.jpg?w=996&t=st=1684863459~exp=1684864059~hmac=65293199c060ec92dbd3f123c108854c24584d37527dd4918fbe25dc75c3ef34",
        "https://img.freepik.com/free-photo/small-red-car-toy-kid-child-playing-with-it_114579-7239.jpg?w=996&t=st=1684863332~exp=1684863932~hmac=d3216e46d14bcfb5edd2bf67b795046fc60ff6abd565a7b599593d711754ca1b",
        "https://img.freepik.com/free-photo/fun-gorilla-3d-illustration_183364-80089.jpg?w=740&t=st=1684863407~exp=1684864007~hmac=2087ed69b5f4111b3e4033c22ac3c80d99fef8428743b1f21f5e2d08ad4f8f91",
      ];

      
    return (

        <section className="gallery-section py-10">
      <h2 className="text-3xl text-center font-bold mb-8">Explore Our Revved-Up Gallery</h2>
      <h2 className="text-xl text-center mb-8">A Spectacular Showcase of Exciting Car Toys</h2>
      <div className="flex flex-wrap">
        {carImages.map((imageUrl, index) => (
          <div key={index} className="w-1/4 p-2 relative">
            <div className="gallery-item">
              <img
                src={imageUrl}
                alt={`Car ${index + 1}`}
                className="w-full h-full object-cover hover:scale-125"
              />
              <div className="overlay">
                <div className="text-center text-white absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <p className="text-xl font-bold">Explore your dream <br /> with Us</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
    );
};

export default Gallery;