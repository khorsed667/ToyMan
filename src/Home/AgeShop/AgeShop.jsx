

const AgeShop = () => {
    return (
        <div>
            <div>
                <p className='text-center text-2xl font-bold'>Shop By Age</p> <br />
                <p className='text-center text-teal-600'>Our Collections</p>
            </div>
            <div className="flex">
                <div className="m-5">
                    <img className="w-75" src="https://cdn.shopify.com/s/files/1/1152/4590/files/category_img1.png?v=1676031096" alt="" />
                    <p className='text-center font-bold'>For Baby</p>
                </div>
                <div className="m-5">
                    <img className="w-75" src="https://cdn.shopify.com/s/files/1/1152/4590/files/category_img2.png?v=1676031123" alt="" />
                    <p className='text-center font-bold'>3-6 years</p>
                </div>
                <div className="m-5">
                    <img className="w-75" src="https://cdn.shopify.com/s/files/1/1152/4590/files/category_img4.png?v=1676031270" alt="" />
                    <p className='text-center font-bold'>7-12 years</p>
                </div>
                <div className="m-5">
                    <img className="w-75" src="https://cdn.shopify.com/s/files/1/1152/4590/files/category_img6.png?v=1676031270" alt="" />
                    <p className='text-center font-bold'>Above 12 years</p>
                </div>
            </div>
        </div>
    );
};

export default AgeShop;