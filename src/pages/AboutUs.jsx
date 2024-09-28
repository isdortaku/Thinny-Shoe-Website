import yellow from '../components/Database/Images/bhoe.jpg'
import products from '../components/Database/Database';
import { Link } from 'react-router-dom';

import Slide from './Slide';
// import red from '../components/Images/pexels-lilartsy-1159670.jpg'
const AboutUs = () => {

  return (
    <>
    
    <div className="about">


      <div className="green-shoe">
        <img src={yellow} alt="" className='about--img' />
      </div>

      <div className="about-text">
        <h1 className='abaut-h1'>What we do</h1>
        <p className='about-p'>At Thinny, we are passionate about providing the best selection of Nike shoes and products. Our mission is to offer quality, style, and comfort for every step you take. We believe that the right footwear can elevate your performance and enhance your lifestyle. Join us on this journey to discover the latest trends and exclusive releases, ensuring you stay ahead in the sneaker game. Thank you for choosing Thinny!</p>
        <div className="lins">
          <Link className="about-btn" to='/Testimonials'>Testimonials</Link>
          <p></p>
        </div>
      </div>

    </div>

      <marquee behavior="scroll" direction="center">
        <div className="images">

          {products.map(product => <div key={product.id} className="product">

            <img src={product.img} alt={product.name} className='data-img' />


          </div>

          )}

        </div> </marquee>
        <Slide />
        
        </>
    
  )
}

export default AboutUs;