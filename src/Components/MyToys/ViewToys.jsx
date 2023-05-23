import { Link } from "react-router-dom";


const ViewToys = ({mt, handelDelete}) => {


    const { pictureUrl, _id, name, price, rating, category} = mt


    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={pictureUrl} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="text-sm opacity-50">{name}</div>
                    </div>
                </div>
            </td>
            <td>
                <button className="btn bg-slate-100 btn-ghost btn-xs">Update</button>
            </td>
            <td>
                {category}
            </td>
            <td>
                <p>$ {price}</p>
            </td>
            <td>{rating}</td>
            <td>
                <Link><button onClick={() => handelDelete(_id)} className="btn bg-slate-100 btn-ghost btn-xs">Delete</button></Link>
            </td>
        </tr>
    );
};

export default ViewToys;