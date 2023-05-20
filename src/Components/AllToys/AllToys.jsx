import { useEffect, useState } from "react";
import SingleToys from "./SingleToys";


const AllToys = () => {


    const [toys, setToys] = useState([])

    const { picture, name, price, rating, id, details } = toys

    useEffect(() => {
        fetch('http://localhost:5000/cars')
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])
    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Toy Name</th>
                            <th>Sub-Category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                            {/* row 1 */}
                            {
                                toys.map(toy => <SingleToys
                                    key={toy._id}
                                    toy={toy}
                                ></SingleToys>)
                            }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;