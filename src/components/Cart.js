import logo from '../images/minimal.jpg'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import '../styles.css'
const Cart = () => {
    const location = useLocation()
    const { from } = location.state
    const carts =
        from.map((data) => <div key={data.id}>
            <img src={data.img} className='products_images' />
            <div>{data.name}</div>
            <div>{data.price}</div>
            {/* <button onClick={((e) => add(e, data))} className='products_button'><img src={cart} className='cart_logo'/> </button> */}
        </div>)
    const nul = <h1>null</h1>
    console.log(from)
    return (
        <div>
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
                            <Link to='/cart' className='link'>cart  </Link>

                        </div>
                        <div>
                            <Link to='/profile' className='link'>profile  </Link>

                        </div>
                    </div>

                </div>
                {/* {from.map((data) => <div key={data.id}>{data.name}</div>)}
                 */}
                 <div className='cart'>
                    <h1>cart</h1>
                 </div>
                {from ? <div className='products_img'>{carts}</div> : <h1>nul</h1>}
            </div>
        </div>
    )
}
export default Cart