import { useLoaderData } from "react-router-dom";


const UpdateToy = () => {

    const previousInfo = useLoaderData();

    const { pictureUrl, sellerEmail, _id, name, quantity, price, rating, category } = previousInfo;

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const pictureUrl = form.pictureUrl.value;
        const sellerEmail = form.sellerEmail.value;
        const quantity = form.quantity.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const category = form.category.value;

        const updatedToy = { name, pictureUrl, sellerEmail, quantity, price, rating, category }

        console.log(updatedToy);


        fetch(`http://localhost:5000/cars/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                form.reset()
            })



    };

    return (
        <div className="p-4 bg-slate-200 rounded-2xl my-8">
            <h1 className="text-3xl mb-4">Update Toy</h1>
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="pictureUrl" className="block mb-2">
                    Picture URL of the toy:
                </label>
                <input
                    type="text"
                    name="pictureUrl"
                    defaultValue={pictureUrl}
                    className="border rounded px-2 py-1 mb-2 w-full"
                />

                <label htmlFor="name" className="block mb-2">
                    Name:
                </label>
                <input
                    type="text"
                    name="name"
                    defaultValue={name}
                    className="border rounded px-2 py-1 mb-2 w-full"
                />

                <label htmlFor="sellerEmail" className="block mb-2">
                    Seller Email:
                </label>
                <input
                    type="email"
                    name="sellerEmail"
                    defaultValue={sellerEmail}
                    className="border rounded px-2 py-1 mb-2 w-full"
                />

                {/* Assuming subCategory options are fetched from an API */}
                <label htmlFor="category" className="block mb-2">
                    category:
                </label>
                <select
                    name="category"
                    defaultValue={category}
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
                    name="price"
                    defaultValue={price}
                    className="border rounded px-2 py-1 mb-2 w-full"
                />

                <label htmlFor="rating" className="block mb-2">
                    Rating:
                </label>
                <input
                    type="text"
                    name="rating"
                    defaultValue={rating}
                    className="border rounded px-2 py-1 mb-2 w-full"
                />

                <label htmlFor="quantity" className="block mb-2">
                    Available quantity:
                </label>
                <input
                    type="text"
                    name="quantity"
                    defaultValue={quantity}
                    className="border rounded px-2 py-1 mb-2 w-full"
                />

                <button
                    type="submit"
                    className="bg-slate-500 text-white rounded-xl px-4 py-2"
                >
                    Update Toy
                </button>
            </form>
        </div>
    );
};

export default UpdateToy;