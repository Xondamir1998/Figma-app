import './Content_5.css';
import Img from '../../images/image-7.png';

export default function Content_5(){
    return (
        <div className="content_5">
            <div>
                <h1>Call our store and takeaway when it suits your best.</h1>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.
                </p>
                <button className='btnphone'>Ph. +61 233 2333</button>
            </div>

            <img src={Img}/>
        </div>
    )
}