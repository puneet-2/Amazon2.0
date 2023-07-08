// import Image from "next/image";
import {
    MenuIcon,
    SearchIcon,
    ShoppingCartIcon,
} from "@heroicons/react/outline";
function Header(){
    return (
        <header>
            {/* topnav */}
            <div className="flex items-center bg-amazon_blue flex-grow py-2 h-20">
                <div className="nt-2 p-1.5 flex items-center flex-grow sm:flex-grow-0">
                    <img src="data:image/jpeg;base64,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"
                    width={100}
                    height={10}
                    objectfit="contain"
                    className="cursor-pointer"
                    />
                </div>
                {/* search */}
                <div className="hidden sm:flex items-center h-10 rounded-md cursor-pointer bg-purple-800 hover:bg-purple-900 flex-grow justify-between">
                    <input type="text" className="flex-grow rounded-l-md focus:outline-none p-2 w-6 flex-shrink h-full"/>
                    <SearchIcon className="h-12 p-4"/>
                    
                </div>
                        {/* rightt-side */}
                <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap" >
                    <div className="link">
                        <p>Hello Doddi Puneet</p>
                        <p className="font-extrabold md:text-sm">Account & Lists</p>

                    </div >
                    <div className="link">
                        <p>Returns</p>
                        <p className="font-extrabold md:text-sm">& Orders</p>
                    </div>


                    <div className="relative link flex items-center">
                        <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-purple-500 text-center rounded-full text-black font-bold">0</span>
                        <ShoppingCartIcon className="h-10 "/>
                        <p className="hidden md:inline font-extrabold md:text-sm mt-2">Basket</p>
                    </div>

                </div>
            </div> 



            {/* bottom nav */}
            <div className="flex items-center justify-around space-x-1.4 p-2 pl-2 bg-amazon_blue-light text-white text-s">
                <p className="link flex items-center" >
                    <MenuIcon className="h-5 mr-1"/>
                    All  
                </p>                
                <p className="link">Prime Video</p>
                <p className="link">Business</p>
                <p className="link">Today's Deals</p>
                <p className="link">Electronics</p>
                <p className="link hidden md:inline flex">Food & Grocery</p>
                <p className="link hidden md:inline-flex">Prime</p>
                <p className="link hidden md:inline-flex">Buy Again</p>
                <p className="link hidden md:inline-flex">Toolkit</p>
                <p className="link hidden lg:inline-flex">Health & Personal</p>

            </div>
        </header>

    );
}

export default Header;