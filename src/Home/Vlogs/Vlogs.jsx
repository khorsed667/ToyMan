
// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const Vlogs = () => {

//     const cars = [
//         {
//             id: 1,
//             name: 'Car 1',
//             image: 'car1.jpg',
//         },
//         {
//             id: 2,
//             name: 'Car 2',
//             image: 'car2.jpg',
//         },
//         {
//             id: 3,
//             name: 'Car 3',
//             image: 'car3.jpg',
//         },
//         {
//             id: 4,
//             name: 'Car 4',
//             image: 'car4.jpg',
//         },
//         {
//             id: 5,
//             name: 'Car 5',
//             image: 'car5.jpg',
//         },
//         {
//             id: 6,
//             name: 'Car 6',
//             image: 'car6.jpg',
//         },
//     ];

//     const settings = {
//         dots: true,
//         infinite: true,
//         slidesToShow: 6,
//         slidesToScroll: 1,
//         autoplay: true,
//         speed: 1000,
//         autoplaySpeed: 3000,
//         cssEase: 'linear',
//     };


//     return (
//         <Slider {...settings}>
//             {cars.map((car) => (
//                 <div key={car.id}>
//                     <img src={car.image} alt={car.name} />
//                     <h3>{car.name}</h3>
//                 </div>
//             ))}
//         </Slider>
//     );
// };

// export default Vlogs;