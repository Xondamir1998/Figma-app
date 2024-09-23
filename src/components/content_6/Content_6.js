import './Content_6.css';
import IMG from '../../images/image-8.png';

export default function Content_6() {
    return (
        <div className="content_6">
            <img src={IMG} alt='image'/>
            <div className='fon'>
                <h1><span style={{color:"#2e6b6e"}}>Support</span> good food and local business.</h1>
                <div>
                    <button className='btnorder'>Order Now</button>
                </div>
            </div>
        </div>
    )
}