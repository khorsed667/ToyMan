import { useLoaderData } from "react-router-dom";


const SingleToyDetails = () => {
    const carDetalis = useLoaderData()


    const { picture, name, price, rating, id, details } = carDetalis

    return (
        <div className="mb-5">
            <div>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src={picture} className="max-w-sm rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-5xl font-bold">{name}</h1>
                            <p className="py-6">{details}</p>
                            <p className="py-6">Price: ${price}</p>
                            <p className="py-6">Rating: {rating}</p>
                            <p className="py-6">Product Id: {id}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleToyDetails;