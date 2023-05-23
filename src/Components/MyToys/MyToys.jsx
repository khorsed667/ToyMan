import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import ViewToys from "./ViewToys";
import Swal from 'sweetalert2';


const MyToys = () => {

    const {user} = useContext(AuthContext)
    
    const [myToys, setMyToys] = useState([])

    console.log(myToys);

    useEffect(()=>{
        console.log(user.email);
        fetch(`https://toy-man-server-khorsed667.vercel.app/myToys/${user?.email}`)
        .then(res => res.json())
        .then(data => {
            setMyToys(data)
        })
    },[user])


    const handelDelete = id =>{
        const procceed = confirm('Are you to delete this toy?')
        if(procceed){
            fetch(`https://toy-man-server-khorsed667.vercel.app/cars/${id}`,{
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data =>{
                console.log(data);
                if(data.deletedCount > 0){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Toy deleted successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                      })
                    const remaining = myToys.filter(tys => tys._id !== id)
                    setMyToys(remaining)
                }
            })
        }
    }


    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Toy Name</th>
                            <th>Update Info</th>
                            <th>Sub-Category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                            {/* row 1 */}
                            {
                                myToys.map(mt => <ViewToys
                                    key={mt._id}
                                    mt={mt}
                                    handelDelete={handelDelete}
                                ></ViewToys>)
                            }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;