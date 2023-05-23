import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [emailError, setEmailError] = useState('');
    // const [passwordError, setPasswordError] = useState('');

    const { singIn, singWithGoogle } = useContext(AuthContext)

    const handelLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const loginInfo = { email, password }
        console.log(loginInfo);

        singIn(email, password)
            .then(result => {
                const user = result.user
                console.log(user);
                form.reset();
            })
            .catch(error => console.log(error))

            singWithGoogle()
            .then(result=> {
                const user = result.user
                console.log(user);
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl text-orange-500 font-bold">Login now!</h1>
                    <p className="py-6">Welcome to our Car Toy website! Log in to explore our exciting collection of car toys and start your adventure on the virtual road.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handelLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-orange-500">Login</button>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-orange-500">SignUp with Google</button>
                        </div>
                        <div>
                            <p>New to CarMan? Please <Link className='text-orange-500' to='/registration'>SignUp</Link></p>
                        </div>
                    </form>

                </div>
            </div>

        </div>
    );
};

export default Login;
