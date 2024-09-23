import './Content_3.css';
import Burger1 from '../../images/burger1.png';
import Burger2 from '../../images/burger2.png';
import Burger3 from '../../images/burger3.png';
import Burger4 from '../../images/burger4.png';
import Burger5 from '../../images/burger5.png';
import Burger6 from '../../images/burger6.png';

export default function Content_3(){
    return (
        <div className="content_3">
            <h2>Browse our menu</h2>
            
            <p id='phone'>Use our menu to place an order online, or <span style={{color: '#35B8BE', cursor:'pointer'}}>phone</span> our store to place a pickup order. Fast and fresh food.</p>

            <div className='btns'>
                <button className='btn2' style={{background:"#35B8BE", color:"white"}}>Burgers</button>
                <button className='btn2'>Sides</button>
                <button className='btn2'>Drinks</button>
            </div>

            <div className='img_section'>
                <div style={{display:"flex", width:"580px", padding:"20px"}}>
                    <img src={Burger1} alt="image" />
                    <div style={{padding:"0 20px"}}>
                        <div style={{display:"flex", justifyContent:"space-between"}}>
                            <p style={{fontWeight:"600", color:"black"}}>Burger Dreams</p>
                            <p style={{color:"#35B8BE"}}>$ 9.20 USD</p>
                        </div>

                        <p style={{color:"grey", padding:"10px 0"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        
                        <div style={{display:"flex"}}>
                            <p className='CountNumber'>1</p>
                            <button id='addbtn'>Add to card</button>
                        </div>
                    </div>
                </div>

                <div style={{display:"flex", width:"580px", padding:"20px"}}>
                    <img src={Burger2} alt="image" />
                    <div style={{padding:"0 20px"}}>
                        <div style={{display:"flex", justifyContent:"space-between"}}>
                            <p style={{fontWeight:"600", color:"black"}}>Burger Classic</p>
                            <p style={{color:"#35B8BE"}}>$ 8.0 USD</p>
                        </div>

                        <p style={{color:"grey", padding:"10px 0"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        
                        <div style={{display:"flex"}}>
                            <p className='CountNumber'>1</p>
                            <button id='addbtn'>Add to card</button>
                        </div>
                    </div>
                </div>

                <div style={{display:"flex", width:"580px", padding:"20px"}}>
                    <img src={Burger3} alt="image" />
                    <div style={{padding:"0 20px"}}>
                        <div style={{display:"flex", justifyContent:"space-between"}}>
                            <p style={{fontWeight:"600", color:"black"}}>Burger Bacon Buddy</p>
                            <p style={{color:"#35B8BE"}}>$ 10.0 USD</p>
                        </div>

                        <p style={{color:"grey", padding:"10px 0"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        
                        <div style={{display:"flex"}}>
                            <p className='CountNumber'>1</p>
                            <button id='addbtn'>Add to card</button>
                        </div>
                    </div>
                </div>

                <div style={{display:"flex", width:"580px", padding:"20px"}}>
                    <img src={Burger4} alt="image" />
                    <div style={{padding:"0 20px"}}>
                        <div style={{display:"flex", justifyContent:"space-between"}}>
                            <p style={{fontWeight:"600", color:"black"}}>Burger Waldo</p>
                            <p style={{color:"#35B8BE"}}>$ 9.90 USD</p>
                        </div>

                        <p style={{color:"grey", padding:"10px 0"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        
                        <div style={{display:"flex"}}>
                            <p className='CountNumber'>1</p>
                            <button id='addbtn'>Add to card</button>
                        </div>
                    </div>
                </div>

                <div style={{display:"flex", width:"580px", padding:"20px"}}>
                    <img src={Burger5} alt="image" />
                    <div style={{padding:"0 20px"}}>
                        <div style={{display:"flex", justifyContent:"space-between"}}>
                            <p style={{fontWeight:"600", color:"black"}}>Burger Spicy</p>
                            <p style={{color:"#35B8BE"}}>$ 9.99 USD</p>
                        </div>

                        <p style={{color:"grey", padding:"10px 0"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        
                        <div style={{display:"flex"}}>
                            <p className='CountNumber'>1</p>
                            <button id='addbtn'>Add to card</button>
                        </div>
                    </div>
                </div>

                <div style={{display:"flex", width:"580px", padding:"20px"}}>
                    <img src={Burger6} alt="image" />
                    <div style={{padding:"0 20px"}}>
                        <div style={{display:"flex", justifyContent:"space-between"}}>
                            <p style={{fontWeight:"600", color:"black"}}>Burger Call</p>
                            <p style={{color:"#35B8BE"}}>$ 8.0 USD</p>
                        </div>

                        <p style={{color:"grey", padding:"10px 0"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        
                        <div style={{display:"flex"}}>
                            <p className='CountNumber'>1</p>
                            <button id='addbtn'>Add to card</button>
                        </div>
                    </div>
                </div>

                
            </div>

            <div style={{display:"flex", justifyContent:"center"}}><button id='btnSee'>See Full Menu</button></div>

        </div>
    )
}