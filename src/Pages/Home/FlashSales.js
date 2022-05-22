import React from 'react';
import img from "../../assets/images/flashsale.jpg";
import PrimaryButton from '../Shared/PrimaryButton';

const FlashSales = () => {

    return (

        <div className="hero min-h-screen bg-base-100 shadow-2xl">
            <div className="hero-content flex-col lg:flex-row">
                <img src={img} className="mr-12 ml-8 max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
                        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                            <span className="countdown font-mono text-5xl">
                                <span>00</span>
                                {/* <span style="--value:15;"></span> */}
                            </span>
                            days
                        </div>
                        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                            <span className="countdown font-mono text-5xl">
                                <span>00</span>
                                {/* <span style="--value:10;"></span> */}
                            </span>
                            hours
                        </div>
                        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                            <span className="countdown font-mono text-5xl">
                                <span>00</span>
                                {/* <span style="--value:24;"></span> */}
                            </span>
                            min
                        </div>
                        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                            <span className="countdown font-mono text-5xl">
                                <span>00</span>
                                {/* <span style={{--value:"47"}}></span> */}

                            </span>
                            sec
                        </div>
                    </div>


                    <div>
                        <h1 className="text-5xl font-bold mt-4">Subscribe Now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <PrimaryButton>Subscribe Here</PrimaryButton>
                    </div>

                </div>

            </div>
        </div >

    );
};

export default FlashSales;