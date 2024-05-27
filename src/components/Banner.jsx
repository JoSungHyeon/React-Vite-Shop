import { useRef } from 'react';
import './css/Banner.css'

const Banner = () => {
    let slideNum = 0;
    let x = 0;
    let slideWrap = useRef(null);
    
    const move = () => {
        slideNum++;
        if(slideNum == 3) {
            slideNum = 0;
        }
        console.log("진행중")
        if(slideWrap.current === null) {
            x = 0;
        } else {
            x = slideWrap.current.offsetWidth;
            slideWrap.current.style.left = -x * slideNum + 'px';
        }
    }
    
    /* let timerId =  */setInterval(() => move(), 3000);
    
    return (
        <div className='Banner'>
            <div className='Banner_slide' id='Slide_wrap' ref={slideWrap}>
                <div className='Banner_img'>
                    <h1>HELLO, MY LOADED BOARD</h1>
                </div>
                
                <div className='Banner_img'>
                    <h1>INTERESING HOBBY</h1>
                </div>
                <div className='Banner_img'>
                    <h1>FUN BOARDING</h1>
                </div>
            </div>
        </div>
    )
}

export default Banner;