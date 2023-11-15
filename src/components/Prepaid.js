import React from 'react'
import "./Prepaid.css";


function Prepaid() {
    return (
        <div>
            <div className='hometitle'>
                <img src="/postpaid/prepaid_hero.jpg" alt="" />
            </div>
            {/* card flipping */}
            <section className='inner_hot'>
                <ul>
                    <li>
                        <div className="flip-box flip_inner">
                            <div className="flip-box-inner">
                                <div className="flip-box-front">
                                    <img src="/postpaid/all_icon.svg" alt="flip" />
                                </div>
                                <div className="flip-box-back">
                                    <img src="/postpaid/all_flip_icon.svg" alt="flip" />
                                </div>
                            </div>
                            <div className='desprepaid'>All Triffs</div>
                        </div>
                    </li>
                    <li>
                        <div className="flip-box flip_inner">
                            <div className="flip-box-inner">
                                <div className="flip-box-front">
                                    <img src="/postpaid/data_icon.svg" alt="flip" />
                                </div>
                                <div className="flip-box-back">
                                    <img src="/postpaid/data_flip_icon.svg" alt="flip" />
                                </div>
                            </div>
                            <div className='desprepaid'>Data Add-one</div>
                        </div>
                    </li>
                    <li>
                        <div className="flip-box flip_inner">
                            <div className="flip-box-inner">
                                <div className="flip-box-front">
                                    <img src="/postpaid/call_icon.svg" alt="flip" />
                                </div>
                                <div className="flip-box-back">
                                    <img src="/postpaid/call_flip_icon.svg" alt="flip" />
                                </div>
                            </div>
                            <div className='desprepaid'>Voice Add-ons</div>

                        </div>
                    </li>
                    <li>
                        <div className="flip-box flip_inner">
                            <div className="flip-box-inner">
                                <div className="flip-box-front">
                                    <img src="/postpaid/international_icon.svg" alt="flip" />
                                </div>
                                <div className="flip-box-back">
                                    <img src="/postpaid/international_flip_icon.svg" alt="flip" />
                                </div>
                            </div>
                            <div className='desprepaid'>Inter Services</div>
                        </div>
                    </li>
                    <li>
                        <div className="flip-box flip_inner">
                            <div className="flip-box-inner">
                                <div className="flip-box-front">
                                    <img src="/postpaid/international_icon.svg" alt="flip" />
                                </div>
                                <div className="flip-box-back">
                                    <img src="/postpaid/international_flip_icon.svg" alt="flip" />
                                </div>
                            </div>
                            <div className='desprepaid'> SMS BUNDLES</div>
                        </div>
                    </li>
                </ul>
            </section>
            {/* Headding */}
            <div className='hadding'>
                <div className='filtericon'>
                    <img src="/postpaid/filter_icon.svg" alt="icon" />
                    <h5>Filter More</h5>
                    <div className="dropdown">
                        <button type="icon" className="btn dropdown-toggle" data-bs-toggle="dropdown">
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="/">Link 1</a></li>
                            <li><a className="dropdown-item" href="/">Link 2</a></li>
                            <li><a className="dropdown-item" href="/">Link 3</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='footer-hadding'>
                <i className="fa-solid fa-plus"></i>
                <div className='textmore'>ALL TARIFFS</div>
            </div>
            <div className='container-sm'>
                <hr />
            </div>
            <div className='container-fluid'>
                <div className='footer-hadding'>
                    <i className="fa-solid fa-plus"></i>
                    <div className='textmore'>DATA ADD-ONS</div>
                </div>
                <div className='container-sm'>
                    <hr />
                </div>
                <div className='row'>
                    <div className='col-4 '>
                        <div className='cards-sliders'>
                            <div className="card ">
                                <div className="card-body">
                                    <div className='card-offer'>MONTHELY</div>
                                    <h5 className="card-title">MONTHELY DIGITAL MAX OFFER</h5>
                                    <div className="card-icon">
                                        <ul>
                                            <li>
                                                <img src="card/wifi.svg" alt="wifi" />
                                                <div className='description'>100GB<br />
                                                    <small className='desc'>internet</small>
                                                </div>
                                            </li>
                                            <li>
                                                <img src="card/call.svg" alt="call" />
                                                <div className='description'>6000<br />
                                                    <small className='desc'>call-mins</small>
                                                </div>
                                            </li>
                                            <li>
                                                <img src="card/sms.svg" alt="sms" />
                                                <div className='description'>8000<br />
                                                    <small className='desc'>sms</small>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='cardfooter'>
                                        <div className="col">
                                            <div className='card-pkr'>
                                                PKR.120.00
                                                <br />
                                                <small>Consumer Price</small>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <a href="/" className="btn btn-footer">READ MORE</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-4 '>
                        <div className='cards-sliders'>
                            <div className="card ">
                                <div className="card-body">
                                    <div className='card-offer'>MONTHELY</div>
                                    <h5 className="card-title">MONTHELY DIGITAL MAX OFFER</h5>
                                    <div className="card-icon">
                                        <ul>
                                            <li>
                                                <img src="card/wifi.svg" alt="wifi" />
                                                <div className='description'>100GB<br />
                                                    <small className='desc'>internet</small>
                                                </div>
                                            </li>
                                            <li>
                                                <img src="card/call.svg" alt="call" />
                                                <div className='description'>6000<br />
                                                    <small className='desc'>call-mins</small>
                                                </div>
                                            </li>
                                            <li>
                                                <img src="card/sms.svg" alt="sms" />
                                                <div className='description'>8000<br />
                                                    <small className='desc'>sms</small>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='cardfooter'>
                                        <div className="col">
                                            <div className='card-pkr'>
                                                PKR.120.00
                                                <br />
                                                <small>Consumer Price</small>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <a href="/" className="btn btn-footer">READ MORE</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-4 '>
                        <div className='cards-sliders'>
                            <div className="card ">
                                <div className="card-body">
                                    <div className='card-offer'>MONTHELY</div>
                                    <h5 className="card-title">MONTHELY DIGITAL MAX OFFER</h5>
                                    <div className="card-icon">
                                        <ul>
                                            <li>
                                                <img src="card/wifi.svg" alt="wifi" />
                                                <div className='description'>100GB<br />
                                                    <small className='desc'>internet</small>
                                                </div>
                                            </li>
                                            <li>
                                                <img src="card/call.svg" alt="call" />
                                                <div className='description'>6000<br />
                                                    <small className='desc'>call-mins</small>
                                                </div>
                                            </li>
                                            <li>
                                                <img src="card/sms.svg" alt="sms" />
                                                <div className='description'>8000<br />
                                                    <small className='desc'>sms</small>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='cardfooter'>
                                        <div className="col">
                                            <div className='card-pkr'>
                                                PKR.120.00
                                                <br />
                                                <small>Consumer Price</small>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <a href="/" className="btn btn-footer">READ MORE</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid'>
                <div className='footer-hadding'>
                    <i className="fa-solid fa-plus"></i>
                    <div className='textmore'>VOICE ADD-ONS</div>
                </div>
                <div className='container-sm'>
                    <hr />
                </div>
                <div className='row'>
                    <div className='col-4 '>
                        <div className='cards-sliders'>
                            <div className="card ">
                                <div className="card-body">
                                    <div className='card-offer'>MONTHELY</div>
                                    <h5 className="card-title">MONTHELY DIGITAL MAX OFFER</h5>
                                    <div className="card-icon">
                                        <ul>
                                            <li>
                                                <img src="card/wifi.svg" alt="wifi" />
                                                <div className='description'>100GB<br />
                                                    <small className='desc'>internet</small>
                                                </div>
                                            </li>
                                            <li>
                                                <img src="card/call.svg" alt="call" />
                                                <div className='description'>6000<br />
                                                    <small className='desc'>call-mins</small>
                                                </div>
                                            </li>
                                            <li>
                                                <img src="card/sms.svg" alt="sms" />
                                                <div className='description'>8000<br />
                                                    <small className='desc'>sms</small>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='cardfooter'>
                                        <div className="col">
                                            <div className='card-pkr'>
                                                PKR.120.00
                                                <br />
                                                <small>Consumer Price</small>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <a href="/" className="btn btn-footer">READ MORE</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-4 '>
                        <div className='cards-sliders'>
                            <div className="card ">
                                <div className="card-body">
                                    <div className='card-offer'>MONTHELY</div>
                                    <h5 className="card-title">MONTHELY DIGITAL MAX OFFER</h5>
                                    <div className="card-icon">
                                        <ul>
                                            <li>
                                                <img src="card/wifi.svg" alt="wifi" />
                                                <div className='description'>100GB<br />
                                                    <small className='desc'>internet</small>
                                                </div>
                                            </li>
                                            <li>
                                                <img src="card/call.svg" alt="call" />
                                                <div className='description'>6000<br />
                                                    <small className='desc'>call-mins</small>
                                                </div>
                                            </li>
                                            <li>
                                                <img src="card/sms.svg" alt="sms" />
                                                <div className='description'>8000<br />
                                                    <small className='desc'>sms</small>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='cardfooter'>
                                        <div className="col">
                                            <div className='card-pkr'>
                                                PKR.120.00
                                                <br />
                                                <small>Consumer Price</small>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <a href="/" className="btn btn-footer">READ MORE</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-4 '>
                        <div className='cards-sliders'>
                            <div className="card ">
                                <div className="card-body">
                                    <div className='card-offer'>MONTHELY</div>
                                    <h5 className="card-title">MONTHELY DIGITAL MAX OFFER</h5>
                                    <div className="card-icon">
                                        <ul>
                                            <li>
                                                <img src="card/wifi.svg" alt="wifi" />
                                                <div className='description'>100GB<br />
                                                    <small className='desc'>internet</small>
                                                </div>
                                            </li>
                                            <li>
                                                <img src="card/call.svg" alt="call" />
                                                <div className='description'>6000<br />
                                                    <small className='desc'>call-mins</small>
                                                </div>
                                            </li>
                                            <li>
                                                <img src="card/sms.svg" alt="sms" />
                                                <div className='description'>8000<br />
                                                    <small className='desc'>sms</small>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='cardfooter'>
                                        <div className="col">
                                            <div className='card-pkr'>
                                                PKR.120.00
                                                <br />
                                                <small>Consumer Price</small>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <a href="/" className="btn btn-footer">READ MORE</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid'>
                <div className='footer-hadding'>
                    <i className="fa-solid fa-plus"></i>
                    <div className='textmore'>SMS BUNDLES</div>
                </div>
                <div className='container-sm'>
                    <hr />
                </div>
                <div className='row'>
                    <div className='col-4 '>
                        <div className='cards-sliders'>
                            <div className="card ">
                                <div className="card-body">
                                    <div className='card-offer'>MONTHELY</div>
                                    <h5 className="card-title">MONTHELY DIGITAL MAX OFFER</h5>
                                    <div className="card-icon">
                                        <ul>
                                            <li>
                                                <img src="card/wifi.svg" alt="wifi" />
                                                <div className='description'>100GB<br />
                                                    <small className='desc'>internet</small>
                                                </div>
                                            </li>
                                            <li>
                                                <img src="card/call.svg" alt="call" />
                                                <div className='description'>6000<br />
                                                    <small className='desc'>call-mins</small>
                                                </div>
                                            </li>
                                            <li>
                                                <img src="card/sms.svg" alt="sms" />
                                                <div className='description'>8000<br />
                                                    <small className='desc'>sms</small>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='cardfooter'>
                                        <div className="col">
                                            <div className='card-pkr'>
                                                PKR.120.00
                                                <br />
                                                <small>Consumer Price</small>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <a href="/" className="btn btn-footer">READ MORE</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-4 '>
                        <div className='cards-sliders'>
                            <div className="card ">
                                <div className="card-body">
                                    <div className='card-offer'>MONTHELY</div>
                                    <h5 className="card-title">MONTHELY DIGITAL MAX OFFER</h5>
                                    <div className="card-icon">
                                        <ul>
                                            <li>
                                                <img src="card/wifi.svg" alt="wifi" />
                                                <div className='description'>100GB<br />
                                                    <small className='desc'>internet</small>
                                                </div>
                                            </li>
                                            <li>
                                                <img src="card/call.svg" alt="call" />
                                                <div className='description'>6000<br />
                                                    <small className='desc'>call-mins</small>
                                                </div>
                                            </li>
                                            <li>
                                                <img src="card/sms.svg" alt="sms" />
                                                <div className='description'>8000<br />
                                                    <small className='desc'>sms</small>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='cardfooter'>
                                        <div className="col">
                                            <div className='card-pkr'>
                                                PKR.120.00
                                                <br />
                                                <small>Consumer Price</small>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <a href="/" className="btn btn-footer">READ MORE</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-4 '>
                        <div className='cards-sliders'>
                            <div className="card ">
                                <div className="card-body">
                                    <div className='card-offer'>MONTHELY</div>
                                    <h5 className="card-title">MONTHELY DIGITAL MAX OFFER</h5>
                                    <div className="card-icon">
                                        <ul>
                                            <li>
                                                <img src="card/wifi.svg" alt="wifi" />
                                                <div className='description'>100GB<br />
                                                    <small className='desc'>internet</small>
                                                </div>
                                            </li>
                                            <li>
                                                <img src="card/call.svg" alt="call" />
                                                <div className='description'>6000<br />
                                                    <small className='desc'>call-mins</small>
                                                </div>
                                            </li>
                                            <li>
                                                <img src="card/sms.svg" alt="sms" />
                                                <div className='description'>8000<br />
                                                    <small className='desc'>sms</small>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='cardfooter'>
                                        <div className="col">
                                            <div className='card-pkr'>
                                                PKR.120.00
                                                <br />
                                                <small>Consumer Price</small>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <a href="/" className="btn btn-footer">READ MORE</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-sm'>
                <hr />
            </div>
            <div className='footer-hadding'>
                <i className="fa-solid fa-plus"></i>
                <div className='textmore'>REGIONAL OFFERS</div>
            </div>
            <div className='container-sm'>
                <hr />
            </div>
            <div className='footer-hadding'>
                <i className="fa-solid fa-plus"></i>
                <div className='textmore'>MOBILE BROADBAND</div>
            </div>
            <div className='container-sm'>
                <hr />
            </div>
            <div className='footer-hadding'>
                <i className="fa-solid fa-plus"></i>
                <div className='textmore'>MISSED CALL ALERT</div>
            </div>
            <div className='container-sm'>
                <hr />
            </div>
            <div className='footer-hadding'>
                <i className="fa-solid fa-plus"></i>
                <div className='textmore'>STAY-AT-HOME</div>
            </div>
            <div className='container-sm'>
                <hr />
            </div>
            <div className='blackline'></div>
        </div>
    )
}

export default Prepaid
