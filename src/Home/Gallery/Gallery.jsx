


const Gallery = () => {


    const carImages = [
        "./../../../public/gallery-img/gal-1.jpg",
        "./../../../public/gallery-img/gal-2.jpg",
        "./../../../public/gallery-img/gal-3.jpg",
        "./../../../public/gallery-img/gal-4.jpg",
        "./../../../public/gallery-img/gal-5.jpg",
        "./../../../public/gallery-img/gal-1.jpg",
        "./../../../public/gallery-img/gal-2.jpg",
        "./../../../public/gallery-img/gal-3.jpg",
      ];
    

    // const backgroundeImgUrl1 = "./../../../public/gallery-img/gal-1.jpg";
    // const backgroundeImgUrl2 = "./../../../public/gallery-img/gal-2.jpg";
    // const backgroundeImgUrl3 = "./../../../public/gallery-img/gal-3.jpg";
    // const backgroundeImgUrl4 = "./../../../public/gallery-img/gal-4.jpg";
    // const backgroundeImgUrl5 = "./../../../public/gallery-img/gal-5.jpg";
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