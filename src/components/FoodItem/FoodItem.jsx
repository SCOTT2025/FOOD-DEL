import React, { useContext} from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'

const FoodItem = ({id,name,price,description,image}) => {

    //const [itemCount,setItemCount] = useState(0) removed line since we are not using it i have replace
    //it with the one below becausethe line above will be is not reasonable to craete 
    //state for each item if we added about 30 items 
const {cartItems,addToCart,removeFromCart} = useContext(StoreContext)

  return (
    <div className='food-item'>
       <div className="food-item-img-container">
         <img className='food-item-image' src={image} alt="" />
         {!cartItems[id]
                 ?<img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt="" />
                 :<div className='food-item-count'>
                    <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                    <p>{cartItems[id]}</p>
                     <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
                 </div>

         }
       </div>
       <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
          
       
       <p className="foof-item-description">
        {description}
       </p>

       <p className="food-item-price">
        ${price}
        
       </p>
       </div>
    </div>
  )
}

export default FoodItem
