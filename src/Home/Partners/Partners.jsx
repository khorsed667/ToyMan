

const Partners = () => {
    return (
        <div className="my-5">
            <p className="text-center text-2xl font-bold mb-3">Our Partners</p>
            <div className="grid md:grid-cols-4 sm:grid-cols-2 w-full mx-auto">
                <div className="my-1 mx-2 p-4 bg-slate-100 rounded-2xl">
                    <img className=" w-3/5 mx-auto" src="https://cdn.shopify.com/s/files/1/1152/4590/files/logo1_compact.png?v=1676127525" alt="" />
                    <p className="text-center font-semibold">Our Co-founder</p>
                </div>
                <div className="my-1 mx-2 p-4 bg-slate-100 rounded-2xl">
                    <img className=" w-3/5 mx-auto" src="https://cdn.shopify.com/s/files/1/1152/4590/files/logo2_compact.png?v=1676127525" alt="" />
                    <p className="text-center font-semibold">Our Product distributor</p>
                </div>
                <div className="my-1 mx-2 p-4 bg-slate-100 rounded-2xl">
                    <img className=" w-3/5 mx-auto" src="https://cdn.shopify.com/s/files/1/1152/4590/files/logo3_compact.png?v=1676127524" alt="" />
                    <p className="text-center font-semibold">Our technical Support</p>
                </div>
                <div className="my-1 mx-2 p-4 bg-slate-100 rounded-2xl">
                    <img className=" w-3/5 mx-auto" src="https://cdn.shopify.com/s/files/1/1152/4590/files/logo5_compact.png?v=1676127524" alt="" />
                    <p className="text-center font-semibold">our Distributor</p>
                </div>
            </div>
        </div>
    );
};

export default Partners;