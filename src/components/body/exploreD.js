import React , {Component} from "react";

class ExploreD extends Component{
render() {
    return(

        // this is the Explore section
    <div className="flex-col mt-20 px-10">
        <div className="flex-col">
        <h2 className="font-bold text-black text-4xl">
            Explore Drops
        </h2>
        <div className="flex my-5">
        <span className="flex mr-5 text-black text-md font-bold">
            Live
        </span>
        <span className="flex mr-5 text-gray-800 text-md">
            Upcoming
        </span>
        <span className="flex text-gray-800 text-md">
            Past
        </span>
        </div>
        <hr />
       
        </div>
        {/* // this is the END of Explore section */}






        {/* the image & Discription secion */}
        <div className="flex my-10">

            {/* the image is here */}
            <div className="flex-col mr-4">
                <img src="./images/Artwork.svg" className=""/>
            </div>

            {/* the Discription of the image is here */}
            <div className="flex-col ml-4 ">
                <div className="flex justify-between">
                    <span className=" flex font-bold text-black text-md">
                        Edition 4/4
                    </span>

                    <div className="flex">
                        
                        <svg xmlns="http://www.w3.org/2000/svg" className="flex mx-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
</svg>
                        
                        
                        <svg xmlns="http://www.w3.org/2000/svg" className="flex mx-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
</svg>
                        
                        
                        <svg xmlns="http://www.w3.org/2000/svg" className="flex mx-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
</svg>
                        
                    </div>
                </div>
            </div>
        </div>
        {/* the END of image & Discription secion */}





    </div>
        
    )
}
}

export default ExploreD;