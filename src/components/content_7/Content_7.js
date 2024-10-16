import './Content_7.css';
import Location from '../../images/img location.png';
import Inst from '../../images/IMAGEinst.png';
import Twitter from '../../images/IMAGEtwit.png';
import YouTube from '../../images/IMAGEyt.png';


export default function Footer() {
    return (
        <div className="content_7">
            <div className='content_77'>
                <div>
                    <img src={Location} alt='image' style={{cursor:'pointer'}}/>
                    <p style={{fontSize:"18px"}}>Takeaway & Delivery template</p>
                    <p>for small - medium busnisess</p>
                </div>

                <div style={{width:"150px"}}></div>
            
                <div>
                    <h4>Company</h4>
                    <p>Home</p>
                    <p>Order</p>
                    <p>Home</p>
                    <p>Contact</p>
                </div>
            
                <div>
                    <h4>Template</h4>
                    <p>Style Guide</p>
                    <p>Changelog</p>
                    <p>Licence</p>
                    <p>Webflovw University</p>
                 </div>
            
                <div>
                    <h4>Flowbase</h4>
                    <p>More Cloneables</p>
                 </div>
            </div>

            <div className='icons'>
                <div style={{fontSize:"18px"}}>
                    Built by <span style={{color:"#35B8BE", cursor:'pointer'}}>Flowbase</span> Powered by <span style={{color:"#35B8BE", cursor:'pointer'}}>Webflow</span>
                </div>
                <div style={{display:"flex", justifyContent:"space-between"}}>
                    <img src={Inst} alt='image'/>
                    <img src={Twitter} alt='image'/>
                    <img style={{marginRight: '20px'}} src={YouTube} alt='image'/>
                </div>
            </div>

        </div>
    )
}