import {StarIcon} from "@heroicons/react/solid";
import {Currency} from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../slices/basketSlice";  
function CheckoutProduct ({
    id,title,price,rating,description,category,image,hasPrime
}){
    const dispatch= useDispatch();
    const addItemToBasket =()=> {
        const product ={
            id,title,price,rating,description,category,image,hasPrime

        }
        dispatch(addToBasket(product))
    }

    const removeItemFromBasket = () => {
        dispatch(removeFromBasket({id}))
    }


    return (
        <div className="grid grid-cols-5"
        >
            <img src={image} height={200} objectfit="contain"/>

            <div className="col-span-3 mx-5">
                <p>{title}</p>
                <p>{category}</p>
                <div className="flex">
                    {Array(rating)
                    .fill()
                    .map((_,i) => (
                        <StarIcon key={i} className="h-5 text-yellow-400"/>
                    ))}
                </div>
                <p className="text-xs my-2 line-clamp-3">{description}</p>
                <div className="mb-5">
                    <p>${price}</p>
                {/* <Currency quantity={price} currency="GBP"/> */}
                </div>
                {hasPrime && ( 
                  <div className="flex items-center space-x-2"> 
                       <img
                       loading="laxy"
                    className="w-12"
                      src="https://png.pngtree.com/png-clipart/20210311/original/pngtree-sale-logo-png-image_6019472.jpg"
                       alt=""/>
                       <p className="text-xs "><strong>10-50% OFF</strong></p>
                    <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
                    </div>
             )}
            </div>
{/* right and remove button  */}

            <div className="flex flex-col space-y-2 my-auto justify-self-end">
                <button className="button text-gray-100 p-5" onClick={addItemToBasket}>Add to Basket</button>
                <button className="button text-green-200 p-5" onClick={removeItemFromBasket}>Remove from Basket</button>
                
            </div>
        </div>
    )
}
export default CheckoutProduct;