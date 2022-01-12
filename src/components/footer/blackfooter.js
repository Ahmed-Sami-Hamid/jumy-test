import React, { Component } from "react";

class BlackFooter extends Component {
    render(){
        return(
            <div className="flex flex-col bg-black">
                {/* this is the footer section */}




                {/* this is the are you an artist section */}
                <div className="flex justify-center my-20 mb-10 relative">
                        <h1 className=" text-4xl flex justify-center font-bold text-white absolute">
                            Are you an artist?
                        </h1>

                    
                    <div className="my-20">
                        <a href="#" className=" px-10 py-4 bg-white font-bold">
                            Tell us about you
                        </a>

                    </div>
                </div>
                {/* this is the END of are you an artist section */}



                {/* this is the Hello@jumy section */}
                <div className="flex justify-between px-10 pb-20">
                    <div className="grid text-white font-light text-sm">
                        <p>The Offices 4, One Central</p>
                        <p>Dubai, United Arab Emirates</p>
                    </div>


                    <div className="flex text-white font-bold text-lg">
                        <p>hello@jumy.co</p>
                        
                    </div>


                    <div className="flex justify-between">
                        <span className="flex text-white font-normal text-sm mx-3">
                            instgram

                        </span>
                        <span className="flex text-white font-normal text-sm mx-3">
                            Twitter

                        </span>
                        <span className="flex text-white font-normal text-sm mx-3">
                            Medium

                        </span>
                        
                    </div>


                </div>
                {/* this is the END of Hello@jumy section */}

                

                {/* this is the arrow section */}
                <div className="flex justify-between px-10 pt-10 pb-5">
                    <div className="grid text-white font-light text-sm">
                        <p>All right reserved.</p>
                    </div>


                    <div className="flex justify-between">
                   <i className="flex fa fa-arrow-up text-white text-sm"></i>
                        
                    </div>


                    <div className="flex justify-center">
                        <span className="flex text-white font-normal text-sm mx-3">
                            FAQ

                        </span>
                        <span className="flex text-white font-normal text-sm mx-3">
                            Terms

                        </span>
                        <span className="flex text-white font-normal text-sm mx-3">
                            Policy

                        </span>
                        
                    </div>


                </div>

                {/* this is the END of the arrow section */}








                {/* this is the END of the footer section */}

                
            </div>
        )
    }
}

export default BlackFooter;