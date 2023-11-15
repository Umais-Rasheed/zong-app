import React from 'react'
import './inter.css';


function Interzong() {
    return (
        <div>
            <div className='hometitle'>
                <img src="/interpic/int_hero.jpg" alt="" />
            </div>
            <section>
                <div className='row g-0'>
                    <div className='col-12 col-md-12 col-lg-6'>
                        <div class="image-container">
                            <img class="image" src="/interpic/irs_bg.jpg" alt="Original" />
                            <div class="overlay overlay-text">
                                <div className='fourg-title '>BOOK YOUR <br />4G DEVICES </div><br />
                                <p className='fourgdec-title'>Book your favorite 4G device online. experience</p>
                                <button className='btn business-button btn_outline'>Learn More</button>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-12 col-lg-6'>
                        <div class="image-container">
                            <img class="image" src="/interpic/idd_bg.jpg" alt="Original" />
                            <div class="overlay overlay-text">
                                <div className='business-title '>COMMUNICATION <br /> ON THE GO</div><br />
                                <p className='state-title'>Experience seamless communication on the go for your business.</p>
                                <button className='btn business-button btn_outline'>Learn More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div class="image-cont">
                    <img src="/interpic/idd-bundle-cat.jpg" alt="" />
                    <div class="inter-container">
                        <div class="interproduct">IDD BUNDLES</div>
                        <p class="intertext">Amazing international call rates to keep you connected with friends and family abroad.</p>
                        <button className='btn product_button '>Learn More</button>
                    </div>
                </div>
            </section>
            <section>
                <div className='row g-0'>
                    <div className='col-12 col-md-12 col-lg-6'>
                        <div class="image-container">
                            <img class="image" src="/interpic/upload_408ae3123e6810d34d8346b669874323.jpg" alt="Original" />
                        </div>
                    </div>
                    <div className='col-12 col-md-12 col-lg-6'>
                        <div class="image-container">
                            <img class="image" src="/interpic/upload_b611952381383c58ced0da85ed3ae18a1.jpg" alt="Original" />
                            <div class="overlay overlay-text">
                                <div className='business-title '>INTERNATIONAL  <br /> CUSTOMER CARE</div><br />
                                <p className='state-title'>Experience seamless communication on the go for your business.</p>
                                <button className='btn business-button btn_outline'>Learn More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Interzong
