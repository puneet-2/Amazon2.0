import {selectItems, selectTotal} from "../slices/basketSlice";
import Header from '../components/Header';
import { useSelector } from 'react-redux';
import CheckoutProduct from '../components/CheckoutProduct';
import { useSession } from "next-auth/react";
import {signIn} from "next-auth/react";


function checkout() {
    const items = useSelector(selectItems);
    const {data: session} = useSession();
    const total = useSelector(selectTotal);
  return (
    <div className = "bg-gray-200">
        <Header/>

        <main className ="lg:flex max-w-screen-2xl mx-auto">
            {/* leftsection */}
            <div className='flex-grow p-5 shadow-xl'>
                <img src="https://www.dominos.co.in/blog/wp-content/uploads/2022/10/Dominos_Diwali_Dhamaka_Offer.jpg"
                width={1020}
                height={250}
                objectFit="contain"
                ></img>
                <div className='flex flex-col p-5 space-y-10 bg-white'>
                    <h1 className='text-3xl border-b pb-4'>
                        {items.length ===0 ? "Your Amazon Basket is empty." : "Shopping Basket"}
                    </h1>
                    {items.map((item,i)=>  (
                        <CheckoutProduct
                        key={i}
                        id={item.id}
                        title={item.title}
                        rating={item.rating}
                        price={item.price}
                        description={item.description}
                        category={item.category}
                        image={item.image}
                        hasPrime={item.hasPrime}/>
                        
                    ))}
                </div>

            </div>



            {/* rightsection */}
            <div className="flex flex-col bg-white p-10 shadow-md">
                {items.length > 0 && (
                    <>
                    <h2 className="whitespace-nowrap">Subtotal ({items.length} items): 
                    <span className="font-bold">
                        {" "} ${total}
                    </span></h2>
                    {/* <button 
                    disabled={!session}
                    className={`button mt-2 ${!session && 'from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed'}`}>
                        {!session? 'Sign in to checkout' : 'proceed to checkout'}
                    </button> */}


                    <button 
                    disabled={!session}
                    onClick={() => (session ? console.log("Proceed to checkout") : signIn())}
                    className={`button mt-2 ${
                        !session && "from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed"
                    }`}
                    >
                    {!session ? "Sign in to checkout" : "Proceed to checkout"}
                    </button>

                    
                    </>
                )}

            </div>

        </main>

    </div>
  )
}

export default checkout