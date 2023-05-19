import { useState } from "react";
import SportCard from "./SportCard";
import RegCCar from "./RegCCar";
import Trucks from "./Trucks";


const Tab = () => {

    const [activeTab, setActiveTab] = useState('featured-cars');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const [sportCar, setSportCar] = useState([])
    const [trucks, setTrucks] = useState([])
    const [regCar, setRegCar] = useState([])

    fetch('sport-car.json')
    .then(res => res.json())
    .then(data => setSportCar(data))


    fetch('trucks.json')
    .then(res => res.json())
    .then(data => setTrucks(data))


    fetch('regular-car.json')
    .then(res => res.json())
    .then(data => setRegCar(data))

    return (
        <div className="container mx-auto p-4">
            <p className="text-2xl text-center font-semibold mb-8">Whether your child is a fan of racing cars, off-road adventures, or classic vintage models, our diverse tab system allows you to easily navigate and find the perfect car toy to fuel their imagination.</p>
            <div className="mx-auto">
                <div className="border-b border-gray-200">
                    <ul className="flex">
                        <li className="mr-1">
                            <button
                                className={`${activeTab === 'featured-cars' ? 'bg-orange-500 hover:bg-orange-700 text-white' : 'bg-orange-300 hover:bg-orange-400 text-gray-800'
                                    } font-semibold py-2 px-4 rounded-t-lg focus:outline-none`}
                                onClick={() => handleTabClick('featured-cars')}
                            >
                                Sports Car
                            </button>
                        </li>
                        <li className="mr-1">
                            <button
                                className={`${activeTab === 'new-releases' ? 'bg-orange-500 hover:bg-orange-700 text-white' : 'bg-orange-300 hover:bg-orange-400 text-gray-800'
                                    } font-semibold py-2 px-4 rounded-t-lg focus:outline-none`}
                                onClick={() => handleTabClick('new-releases')}
                            >
                                Regular Car
                            </button>
                        </li>
                        <li className="mr-1">
                            <button
                                className={`${activeTab === 'sale-items' ? 'bg-orange-500 hover:bg-orange-700 text-white' : 'bg-orange-300 hover:bg-orange-400 text-gray-800'
                                    } font-semibold py-2 px-4 rounded-t-lg focus:outline-none`}
                                onClick={() => handleTabClick('sale-items')}
                            >
                                Trucks
                            </button>
                        </li>
                    </ul>
                </div>
                <div className="bg-white p-4">
                    <div className="tab-content">
                        <div className={`tab-pane ${activeTab === 'featured-cars' ? '' : 'hidden'}`} id="featured-cars">
                            <div className="grid md:grid-cols-3">
                            {
                                sportCar.map((sport, index) => <SportCard
                                key={index}
                                sport={sport}
                                ></SportCard>)
                            }
                            </div>
                        </div>
                        <div className={`tab-pane ${activeTab === 'new-releases' ? '' : 'hidden'}`} id="new-releases">
                        <div className="grid md:grid-cols-3">
                            {
                                regCar.map((regular, index) => <RegCCar
                                key={index}
                                regular={regular}
                                ></RegCCar>)
                            }
                            </div>
                        </div>
                        <div className={`tab-pane ${activeTab === 'sale-items' ? '' : 'hidden'}`} id="sale-items">
                        <div className="grid md:grid-cols-3">
                            {
                                trucks.map((truck, index) => <Trucks
                                key={index}
                                truck={truck}
                                ></Trucks>)
                            }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tab;