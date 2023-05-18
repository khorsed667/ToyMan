


const Gallery = () => {


    const carImages = [
        "./../../../public/gallery-img/gal-1.jpg",
        "./../../../public/gallery-img/gal-2.jpg",
        "./../../../public/gallery-img/gal-3.jpg",
        "./../../../public/gallery-img/gal-4.jpg",
        "./../../../public/gallery-img/gal-5.jpg",
      ];
    

    // const backgroundeImgUrl1 = "./../../../public/gallery-img/gal-1.jpg";
    // const backgroundeImgUrl2 = "./../../../public/gallery-img/gal-2.jpg";
    // const backgroundeImgUrl3 = "./../../../public/gallery-img/gal-3.jpg";
    // const backgroundeImgUrl4 = "./../../../public/gallery-img/gal-4.jpg";
    // const backgroundeImgUrl5 = "./../../../public/gallery-img/gal-5.jpg";
    return (

        <section className="gallery-section py-10">
      <h2 className="text-3xl text-center font-bold mb-8">Explore Our Revved-Up Gallery</h2>
      <p className="text-xl text-center mb-8">A Spectacular Showcase of Exciting Car Toys!</p>
      <div className="flex flex-wrap">
        {carImages.map((imageUrl, index) => (
          <div key={index} className="w-1/5 p-2 relative">
            <div className="gallery-item">
              <img src={imageUrl} alt={`Car ${index + 1}`} className="w-full h-full object-cover" />
              <div className="overlay">
                <div className="text-center text-white absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <p className="text-xl font-bold">Explore your dream</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>











        // <div>
        //     <div className="text-center">this is  gallery serction</div>
        //     <div className="flex w-full h-full items-center justify-center">
        //         <div className="flex w-5/6 h-5/6">
        //             <div className="slide relative flex-auto bg-cover bg-center transition-all duration-500 ease-in-out hover:flex-grow" style={{backgroundImage: `url('${backgroundeImgUrl1}')`}}></div>
        //             <div className="slide relative flex-auto bg-cover bg-center transition-all duration-500 ease-in-out hover:flex-grow" style={{backgroundImage: `url('${backgroundeImgUrl2}')`}}></div>
        //             <div className="slide relative flex-auto bg-cover bg-center transition-all duration-500 ease-in-out hover:flex-grow" style={{backgroundImage: `url('${backgroundeImgUrl3}')`}}></div>
        //             <div className="slide relative flex-auto bg-cover bg-center transition-all duration-500 ease-in-out hover:flex-grow" style={{backgroundImage: `url('${backgroundeImgUrl4}')`}}></div>
        //             <div className="slide relative flex-auto bg-cover bg-center transition-all duration-500 ease-in-out hover:flex-grow" style={{backgroundImage: `url('${backgroundeImgUrl5}')`}}></div>
        //         </div>
        //     </div>
        // </div>
    );
};

export default Gallery;