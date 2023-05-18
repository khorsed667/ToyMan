

const Banner = () => {

  const backgroundImageUrl = './../../../public/banner-img/banner.jpg'

  return (
    <div>
      <div className="hero min-h-screen" style={{ backgroundImage: `url("${backgroundImageUrl}")` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Lets Drive With your Dream</h1>
            <p className="mb-5">Experience the thrill of imagination with our wide selection of car toys, where endless adventures await young enthusiasts.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;