import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const AddToy = () => {

    const { user } = useContext(AuthContext)

    console.log(user.email);

    const [pictureUrl, setPictureUrl] = useState('');
    const [sellerEmail, setSellerEmail] = useState('');
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [rating, setRating] = useState('');
    const [quantity, setQuantity] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault();


        const toyData = {
            pictureUrl,
            sellerEmail,
            name,
            category,
            price,
            rating,
            quantity,
        };

        fetch('http://localhost:5000/postToys', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(toyData)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })

        console.log(toyData);
    };

    return (
        <div>
            <div className=" p-4 bg-slate-200 rounded-2xl my-8">
                <h1 className="text-3xl mb-4">Add A Toy</h1>
                <form onSubmit={handleFormSubmit}>
                    <label htmlFor="pictureUrl" className="block mb-2">
                        Picture URL of the toy:
                    </label>
                    <input
                        type="text"
                        id="pictureUrl"
                        value={pictureUrl}
                        onChange={(event) => setPictureUrl(event.target.value)}
                        className="border rounded px-2 py-1 mb-2 w-full"
                    />

                    <label htmlFor="sellerEmail" className="block mb-2">
                        Seller Email:
                    </label>
                    <input
                        type="email"
                        id="sellerEmail"
                        value={sellerEmail}
                        onChange={(event) => setSellerEmail(event.target.value)}
                        className="border rounded px-2 py-1 mb-2 w-full"
                    />

                    <label htmlFor="name" className="block mb-2">
                        Name:
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        className="border rounded px-2 py-1 mb-2 w-full"
                    />


                    <label htmlFor="category" className="block mb-2">
                        Sub-category:
                    </label>
                    <select
                        id="category"
                        value={category}
                        onChange={(event) => setCategory(event.target.value)}
                        className="border rounded px-2 py-1 mb-2 w-full"
                    >
                        <option value="">Select sub-category</option>
                        <option value="Regular car">Regular car</option>
                        <option value="Sports Car">Sports Car</option>
                        <option value="Trucks">Trucks</option>
                    </select>

                    <label htmlFor="price" className="block mb-2">
                        Price:
                    </label>
                    <input
                        type="text"
                        id="price"
                        value={price}
                        onChange={(event) => setPrice(event.target.value)}
                        className="border rounded px-2 py-1 mb-2 w-full"
                    />

                    <label htmlFor="rating" className="block mb-2">
                        Rating:
                    </label>
                    <input
                        type="text"
                        id="rating"
                        value={rating}
                        onChange={(event) => setRating(event.target.value)}
                        className="border rounded px-2 py-1 mb-2 w-full"
                    />

                    <label htmlFor="quantity" className="block mb-2">
                        Available quantity:
                    </label>
                    <input
                        type="text"
                        id="quantity"
                        value={quantity}
                        onChange={(event) => setQuantity(event.target.value)}
                        className="border rounded px-2 py-1 mb-2 w-full"
                    />

                    <button
                        type="submit"
                        className="bg-slate-500 text-white rounded-xl px-4 py-2"
                    >
                        Add Toy
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddToy;