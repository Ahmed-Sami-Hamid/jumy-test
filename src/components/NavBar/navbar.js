import React , {Component} from "react";

class NavBar extends Component {
    render(){
        return(
      <div className="flex bg-white w-full h-5 pl-10 py-5">



            {/* // this is the nav bar section */}




            {/* // this is the LOGO section */}
            <div className="flex items-start bg-white ">
              <img src="./images/jumy.svg" />
              <img src="./images/beta.svg" className="px-2 pt-1"/>
            </div>
            {/* // this is the END of the LOGO section */}






            {/* // this is the the SEARCH bar section */}
              <div className="flex items-center pl-5 bg-white text-sm text-gray-700 border border-gray-500 w-1/2 h-12 ml-12 ">
                <svg xmlns="http://www.w3.org/2000/svg" class="flex h-4 w-4 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <div>
                  <span className="flex pl-5 text-gray-600 text-base">
                    Search art or artist...
                  </span>
                </div>
              </div>
            {/* // this is the END of the SEARCH bar section */}






            {/* // this is the MENU ITEMS section */}
            <div className="flex">
              <ul className="flex mx-5 font-bold">
                <li className="px-5 mt-3">
                  <a href="#" className="" >
                    <span>
                      Explore
                    </span>
                  </a>
                </li>

                <li className="px-5 mt-3">
                  <a href="#" className="" >
                    <span>
                      Drops
                    </span>
                  </a>
                </li>

                <li className="px-5 mt-3">
                  <a href="#" className="" >
                    <span>
                      Community
                    </span>
                  </a>
                </li>

                <li className="flex items-center  mb-20 text-white text-sm bg-black border-black px-12 h-12">
                  <a href="#" className="flex" >
                    <span>
                      Connect Wallet
                    </span>
                  </a>
                </li>
              </ul>

            </div>
            {/* // this is the END of the MENU ITEMS section */}





            {/* // this is the END of the nav bar section */}
        </div>
      )
    }
  }
export default NavBar ;