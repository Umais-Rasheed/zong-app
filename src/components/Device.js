import React from 'react'
import './device.css';

function Device() {
    return (
        <div>
            <div className='hometitle'>
                <img src="/device/handset_hero.jpg" alt="" />
            </div>
            <section>
                <div className='row g-0'>
                    <div className='col-12 col-md-12 col-lg-6'>
                        <div class="image-container">
                            <img class="image" src="/device/4g_bg.jpg" alt="Original" />
                            <div class="overlay overlay-text">
                                <div className='fourg-title '>BOOK YOUR <br />4G DEVICES </div><br />
                                <p className='fourgdec-title'>Book your favorite 4G device online. experience</p>
                                <button className='business-button btn_outline'>Learn More</button>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-12 col-lg-6'>
                        <div class="image-container">
                            <img class="image" src="/device/mbb-bg.jpg" alt="Original" />
                            <div class="overlay overlay-text">
                                <div className='business-title '>COMMUNICATION <br /> ON THE GO</div><br />
                                <p className='state-title'>Experience seamless communication on the go for your business.</p>
                                <button className='btn business-button btn_outline'>Learn More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className='blackline'></div>
        </div>
    )
}

export default Device
