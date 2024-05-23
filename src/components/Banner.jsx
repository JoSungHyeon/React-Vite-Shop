import './css/Banner.css'

const Banner = () => {
    let slideNum = 0;
    let x = 0;
    let slideWrap = document.getElementById("Slide_wrap");
    const move = () => {
        slideNum++;
        if(slideNum == 3) {
            slideNum = 0;
        }
        x = slideWrap.clientWidth;
        slideWrap.style.left = -x * slideNum + 'px';
        console.log(slideNum)
    }

    let timerId = setInterval(() => move(), 3000);
    
    
    return (
        <div className='Banner'>
            <div className='Banner_slide' id='Slide_wrap'>
                <div className='Banner_img'>
                    <h1>HELLO, MY LOADED BOARD</h1>
                </div>
                <div className='Banner_img'>
                    <h1>HELLO, MY LOADED BOARD</h1>
                </div>
                <div className='Banner_img'>
                    <h1>HELLO, MY LOADED BOARD</h1>
                </div>
            </div>
        </div>
    )
}

export default Banner;