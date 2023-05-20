

const SingleToys = ({ toy }) => {

    const { picture, name, price, rating, category, sellerEmail, } = toy

    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={picture} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="text-sm opacity-50">{name}</div>
                    </div>
                </div>
            </td>
            <td>
                {sellerEmail}
            </td>
            <td>
                {category}
            </td>
            <td>
                <p>$ {price}</p>
            </td>
            <td>{rating}</td>
            <td>
                <button className="btn btn-ghost btn-xs">details</button>
            </td>
        </tr>
    );
};

export default SingleToys;