import './Content_1.css';
import Burger from '../../images/image-2.png';

export default function Content_1() {
    return (
        <div id='content_1'>
        <div>
            <h1>The home of fresh products</h1>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.
            </p>
            <button className='btn'>Learn about us</button>
            
        </div>
        <img src={Burger}/>
    </div>
    );
}
