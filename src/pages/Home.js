import logo from '../images/minimal.jpg'
import sale_png from '../images/sale-png.jpg'
import sale_male_png from '../images/sale-male-png.jpg'
import shoes_png from '../images/shoes-png.jpg'
import shoes_female_png from '../images/shoes-female-png.jpeg'
import shoes_female from '../images/shoes-female-png2.jfif'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import '../styles.css'
const Home = () => {
    const [flag, setFlag] = useState('')

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'eb26413fe4msh3340b0a9be1b0aep1f11a7jsna27db1131803',
            'X-RapidAPI-Host': 'country-flags.p.rapidapi.com'
        }
    };

    fetch('https://countryflagsapi.com/png/kazakhstan', options)
        .then(response => response)
        .then(data => setFlag(data.url))
        .catch(err => console.error(err));
    // console.log(flag)


    return (
        <div>
            <div className='container'>
                <div className='navbar'>
                    <div className='logo'>
                        <img src={logo} className='logo' />
                    </div>
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

                <h1 className='sale_h'>sale</h1>
                <div className='content'>
                    {/* <div className='sale'> */}
                    <div>
                        <p className='sale_p'>sale 20% wait you</p>
                    </div>
                    <div className='sale_png'>
                        <img src={sale_png} className='sale_png' />
                    </div>
                    {/* </div> */}

                </div>
                <div className='sale_male'>
                    {/* <div className='sale'> */}
                    <div className='sale_male_png'>
                        <img src={sale_male_png} className='sale_male_png' />
                    </div>
                    <div className='sale_male_p'>
                        <p className='sale_male_p'>sale 40% for male</p>
                    </div>
                    {/* </div> */}
                </div>
                <div className='shoes'>
                    {/* <div className='shoes_male_female'> */}
                    <div className='shoes_png'>
                        <div className='shoes_p'>
                            <p>shoes for boys 35% discount</p>
                        </div>
                        <img src={shoes_png} className='shoes_png' />

                    </div>
                    <div className='shoes_female'>

                        <img src={shoes_female} className='shoes_female' />
                        <div className='shoes_female_p'>
                            <p>heels for girls 40% discount</p>
                        </div>
                    </div>
                    {/* </div> */}

                    {/* <div className=''></div> */}
                </div>
                <h1 className='contact_h'>contact us</h1>
                <div className='contact'>


                    <div className='constact_logo'>
                        <img src={logo} className='contact_logo' />
                        {/* <img /> */}
                    </div>

                </div>
                <div className='email'>
                    <div className='email_flag'>
                        <p>
                            nursultanr585@gmail.com
                        </p>
                    </div>
                    <div className='email_num'>
                        made in kazakhstan
                        <img src={flag} alt="flag" className='kz_flag' />
                    </div>
                    
                </div>
            </div>
        </div >
    )
    
}
export default Home
