import React from "react";
import './Info.css';
import download from './brown and sugar/download.png';
import b1 from './brown and sugar/BROWN Y SUGAR.png';
import b2 from './brown and sugar/Awwww _3.png';
import b3 from './brown and sugar/9123b159-6adf-4b46-831c-af31d23348c1.png';
import b4 from './brown and sugar/hearts.png'


const Info = () =>{
    return(
        <>
        <div className="Iphone1415ProMax1" style={{width: 430, height: 932, position: 'relative', background: '#F79DB4'}}>
        <div className="Happy" style={{width: 314, height: 84, left: 41, top: 44, position: 'absolute', color: 'white', fontSize: 75, fontFamily: 'Mea Culpa', fontWeight: '400', wordWrap: 'break-word'}}>happy</div>
        <div className="Valentines" style={{width: 314, height: 84, left: 198, top: 157, position: 'absolute', color: 'white', fontSize: 75, fontFamily: 'Mea Culpa', fontWeight: '400', wordWrap: 'break-word'}}>valentines</div>
        <div className="Day" style={{width: 314, height: 84, left: 41, top: 306, position: 'absolute', color: 'white', fontSize: 75, fontFamily: 'Mea Culpa', fontWeight: '400', wordWrap: 'break-word'}}>day</div>
        <img className="BrownYSugar1" style={{width: 436, height: 400,  left: 41, top: 406, position: 'absolute'}} src={b4} />
        <div className="TuBestHai" style={{width: 199, height: 122, left: 116, top: 560, position: 'absolute', color: 'white', fontSize: 39, fontFamily: 'Mea Culpa', fontWeight: '400', wordWrap: 'break-word'}}>Lorem ipsum dolor </div>
        <img className="Download1" style={{width: 92, height: 88, left: 322, top: 19, position: 'absolute', borderRadius: 75.50}} src={download} />
        <img className="heart" style={{width: 92, height: 88, left: 322, top: 19, position: 'absolute', borderRadius: 75.50}} src={b4} />
        <img className="BrownYSugar1" style={{width: 155, height: 142, left: 18, top: 128, position: 'absolute'}} src={b1} />
        <img className="BrownYSugar1" style={{width: 155, height: 142, left: 198, top: 157, position: 'absolute'}} src={b4} />
        <img className="BrownYSugar1" style={{width: 155, height: 142, left: 18, top: 28, position: 'absolute'}} src={b4} />
        <img className="B1596adf4b46831cAf31d23348c11" style={{width: 123, height: 131, left: 254, top: 253, position: 'absolute'}} src={b3} />
        <div className="Jannnuuuuuuuu" style={{width: 439, height: 135, left: 49, top: 420, position: 'absolute', color: 'white', fontSize: 75, fontFamily: 'Mea Culpa', fontWeight: '400', wordWrap: 'break-word'}}>Lorem</div><br/>
        <div className="SometimesIWonderTuMujeKaiseMilGayiThenIRemember" style={{width: 375, height: 268, left: 29, top: 655, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 48, fontFamily: 'Mea Culpa', fontWeight: '400', wordWrap: 'break-word'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</div>
        <img className="BrownYSugar1" style={{width: 155, height: 142, left: 120, top: 830, position: 'absolute'}} src={b4} />
        
        
        <img className="Awwww31" style={{width: 134, height: 134, left: 269, top: 505, position: 'absolute'}} src={b2} />
        </div>
        
        </>
    );
}
export default Info

