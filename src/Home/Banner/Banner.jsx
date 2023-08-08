

const Banner = () => {

  const backgroundImageUrl = 'https://img.freepik.com/free-photo/closeup-shot-small-toy-car-wooden-train-track_181624-32510.jpg?w=996&t=st=1684863077~exp=1684863677~hmac=a4dc8b6e9a2b1699c190426a799974fe46f6f8429f4a85b18c1ebb20766691ea'

  return (
    <div>
      <div className="hero md:min-h-screen" style={{ backgroundImage: `url("${backgroundImageUrl}")` }}>
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