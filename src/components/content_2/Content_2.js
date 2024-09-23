import './Content_2.css';
import Img1 from '../../images/image-3.png';
import Img2 from '../../images/image-4.png';
import Img3 from '../../images/image-5.png';

export default function Content_2() {
    return (
        <div className="content_2">
            <h2>How it works</h2>
            <div className='card'>
                <div className='cards'>
                    <img src={Img1} alt='image'/>
                    <h4>Adapt your menu items</h4>
                    <p>Easily adapt your menu using the webflow CMS and allow customers to browse your items.</p>
                </div>

                <div className='cards'>
                    <img src={Img2} alt='image'/>
                    <h4>Accept online orders & takeout</h4>
                    <p>Let your customers order and pay via the powerful ecommerce system, or simple let them call your store.</p>
                </div>

                <div className='cards'>
                    <img src={Img3} alt='image'/>
                    <h4>Manage delivery or takeout</h4>
                    <p>Manage your own logistics and take orders simply through the ecommerce system.</p>
                </div> 
                
            </div>
        </div>
    );
}