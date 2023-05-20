import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const MyToys = () => {

    const {user} = useContext(AuthContext)

    console.log(user.email);
    
    const [myToys, setMyToys] = useState([])

    // useEffect(() => {
    //     fetch(`http://localhost:5000/myToys/${user.email}`)
    //         .then(res => res.json())
    //         .then(data => console.log(data))
    // }, [user])

    useEffect(()=>{
        console.log(user.email);
        fetch(`http://localhost:5000/myToys/${user?.email}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    },[user])

    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Toy Name</th>
                            <th>Seller Email</th>
                            <th>Sub-Category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>Check Details</th>
                        </tr>
                    </thead>
                    <tbody>
                            {/* row 1 */}
                            {/* {
                                toys.map(toy => <SingleToys
                                    key={toy._id}
                                    toy={toy}
                                ></SingleToys>)
                            } */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;