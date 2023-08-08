import { Link } from "react-router-dom";


const SportCard = ({sport}) => {

    const {picture, name, price, rating, id, details} = sport

    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img style={{height: "100px"}} src={picture} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <div className="flex justify-end">
                        <p className="mx-5">$ {price}</p>
                        <p className="mx-5">{rating} ratings</p>
                    </div>
                    <div className="card-actions">
                    <Link sport={sport} to={`/sports-car-details/${id}`}><button className="btn bg-orange-500">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SportCard;