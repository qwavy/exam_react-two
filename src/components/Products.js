import logo from '../images/minimal.jpg'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import '../styles.css'
import heels from '../images/heels.jfif'
import shoes from '../images/shoes.jpg'
import shirt from '../images/shirt.jpg'
import dress from '../images/drress.jpg'
import pants from '../images/pants.jfif'
import tie from '../images/tie.jpeg'
import cart from '../images/cart.jpg'
import '../styles.css'

// import heels from '../images/shoes-png.jpg'

const Products = () => {
    // console.log(items)
    const [items, setItems] = useState([
        { id: 0, name: 'heels', price: 41000, amount: 0, img: heels, active: false },
        { id: 1, name: 'shoes', price: 35000, amount: 0, img: shoes, active: false },
        { id: 2, name: 'shirt', price: 14500, amount: 0, img: shirt, active: false },
        { id: 3, name: 'dress', price: 32000, amount: 0, img: dress, active: false },
        { id: 4, name: 'pants', price: 21000, amount: 0, img: pants, active: false },
        { id: 5, name: 'tie', price: 3800, amount: 0, img: tie, active: false },

    ])
    const [cartItems, setCartItems] = useState([])
    // const [isActive,setIsActive] = useState(false)
    const addCart = items.map((data) => <button key={data.id} onClick={((e) => add(e, data))}><img src={cart} className='cart_logo' /></button>)
    const addedCart = items.map((data) => <button key={data.id} onClick={((e) => add(e, data))}>added to cart <img src={cart} className='cart_logo' /></button>)
    const add = (e, data, prev) => {
        // data.amount += 1
        // data.price *= data.amount
        // console.log(data)
        
        // console.log(data.active)
        data.active = !data.active
        let res = []
        for(let i = 0;i < items.length;i++){
            if(items[i].active == true){
                // cartItems.push(data)
                res.push(items[i])
                console.log(res)
            }
        }
        setCartItems(res)
        console.log(cartItems)
        // data.active = !active
        // setIsActive(!isActive)
    }
    // const delCart
    return (
        <div>
            <div className='navbar'>
                {/* <div className='logo'> */}
                <img src={logo} className='logo' />
                {/* </div> */}
                <div className='links'>
                    <div className='link'>
                        <Link to='/' className='link'>home  </Link>

                    </div>
                    <div className='link'>
                        <Link to='/product' className='link'>product  </Link>

                    </div>
                    <div className='link'>
                        <Link to='/cart' className='link' state={{ from: cartItems }}>cart  </Link>

                    </div>
                    <div>
                        <Link to='/profile' className='link'>profile  </Link>

                    </div>
                </div>
            </div>
            <div className='products'>
                <h1 className='prodcuts_h'>products</h1>
                {/* {items.map((data) => } */}
                <div className='products_list'>
                    <div className='products_img'>
                        {/* {items.map((data) => <div key={data.id} onClick={((e) => add(e, data))}><img src={data.img} className='products_images' />{data.name}<div onClick={((e) => add(e, data))}>{data.price}</div><button key={data.id} onClick={((e) => add(e, data))}><img src={cart} className='cart_logo'/></button></div>)} */}
                        {items.map((data) => <div key={data.id}>
                            <img src={data.img} className='products_images' />
                            <div>{data.name}</div>
                            <div>{data.price}</div>
                            <button onClick={((e) => add(e, data))} className='products_button'><img src={cart} className='cart_logo'/> </button>
                        </div>)}
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Products 