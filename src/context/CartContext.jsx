import { createContext, useContext, useMemo, useState } from "react";
import toast from "react-hot-toast";
const CartContext = createContext();

export function CartProvider({ children }) {

    const [cartItems, setCartItems] = useState([]);

    function addToCart(product, quantity = 1){

        setCartItems(current=>{

            const existing=current.find(

                item=>item.id===product.id

            );

            if(existing){

                return current.map(item=>

                    item.id===product.id

                    ?{

                        ...item,

                        quantity:item.quantity+quantity

                    }

                    :item

                );

            }

            return[

                ...current,

                {

                    ...product,

                    quantity

                }

            ];

        });
        toast(

    `${quantity} × ${product.name} added to cart`,

    {

        icon: "🛒"

    }

);

    }

    function removeFromCart(id){

        setCartItems(

            current=>

            current.filter(item=>item.id!==id)

        );

    }
function clearCart(){

    setCartItems([]);

    localStorage.removeItem("cart");

}
    function increaseQuantity(id){

        setCartItems(current=>

            current.map(item=>

                item.id===id

                ?{

                    ...item,

                    quantity:item.quantity+1

                }

                :item

            )

        );

    }

    function decreaseQuantity(id){

        setCartItems(current=>

            current

            .map(item=>

                item.id===id

                ?{

                    ...item,

                    quantity:item.quantity-1

                }

                :item

            )

            .filter(item=>item.quantity>0)

        );

    }

    const cartCount=useMemo(

        ()=>cartItems.reduce(

            (sum,item)=>sum+item.quantity,

            0

        ),

        [cartItems]

    );

    const cartTotal=useMemo(

        ()=>cartItems.reduce(

            (sum,item)=>

            sum+

            item.price*item.quantity,

            0

        ),

        [cartItems]

    );

    return(

        <CartContext.Provider

          value={{

    cartItems,

    addToCart,

    removeFromCart,

    increaseQuantity,

    decreaseQuantity,

    clearCart,

    cartCount,

    cartTotal

}}

        >

            {children}

        </CartContext.Provider>

    );

}

export function useCart(){

    return useContext(CartContext);

}