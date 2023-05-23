import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className="my-5">
            <div className="mx-auto">
                <Link to='/'><button className="btn bg-slate-100 btn-ghost btn-xs mx-auto">Home</button></Link>
            </div>
            <div>
                <img className="w-50" src="./../../../6342464.jpg" alt="" />
            </div>
        </div>
    );
};

export default Error;