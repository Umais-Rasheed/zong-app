import React from 'react';
import '../swiper.css';
import '../slider.css';
import './../App.css';

import { Swiper, SwiperSlide } from 'swiper/react';

function CardSlides() {
  return (
    <div className='container-fluid'>
      {/* Heading section */}
      <section >
        <div className='row-card'>
          <div className="col-3">
            <div className='home-hot-bundle'>
              <h2>Hot Bundles</h2>
              <p>Check out Zong 4G hot bundles and enjoy the most exhilarating mobile internet packages, SMS, Voice, & hybrid bundles</p>
              <div className="card-buttons">
                <div className="icon" id="prev">&#60;</div>
                <div className="icon" id="next">&#62;</div>
              </div>
              <p className='text-center d-none d-md-block mt-2 btn bmz primary'>View All</p>
            </div>
          </div>
          {/* card */}
          <Swiper>
            <div className='col-7'>
              <SwiperSlide>
                <div className='container-fluid'>
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
                              <div class="col">
                                <div className='card-pkr'>
                                  PKR.120.00
                                  <br />
                                  <small>Consumer Price</small>
                                </div>
                              </div>
                              <div class="col">
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
                              <div class="col">
                                <div className='card-pkr'>
                                  PKR.120.00
                                  <br />
                                  <small>Consumer Price</small>
                                </div>
                              </div>
                              <div class="col">
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
                              <div class="col">
                                <div className='card-pkr'>
                                  PKR.120.00
                                  <br />
                                  <small>Consumer Price</small>
                                </div>
                              </div>
                              <div class="col">
                                <a href="/" className="btn btn-footer">READ MORE</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='container-fluid'>
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
                              <div class="col">
                                <div className='card-pkr'>
                                  PKR.120.00
                                  <br />
                                  <small>Consumer Price</small>
                                </div>
                              </div>
                              <div class="col">
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
                              <div class="col">
                                <div className='card-pkr'>
                                  PKR.120.00
                                  <br />
                                  <small>Consumer Price</small>
                                </div>
                              </div>
                              <div class="col">
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
                              <div class="col">
                                <div className='card-pkr'>
                                  PKR.120.00
                                  <br />
                                  <small>Consumer Price</small>
                                </div>
                              </div>
                              <div class="col">
                                <a href="/" className="btn btn-footer">READ MORE</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='container-fluid'>
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
                              <div class="col">
                                <div className='card-pkr'>
                                  PKR.120.00
                                  <br />
                                  <small>Consumer Price</small>
                                </div>
                              </div>
                              <div class="col">
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
                              <div class="col">
                                <div className='card-pkr'>
                                  PKR.120.00
                                  <br />
                                  <small>Consumer Price</small>
                                </div>
                              </div>
                              <div class="col">
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
                              <div class="col">
                                <div className='card-pkr'>
                                  PKR.120.00
                                  <br />
                                  <small>Consumer Price</small>
                                </div>
                              </div>
                              <div class="col">
                                <a href="/" className="btn btn-footer">READ MORE</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='container-fluid'>
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
                              <div class="col">
                                <div className='card-pkr'>
                                  PKR.120.00
                                  <br />
                                  <small>Consumer Price</small>
                                </div>
                              </div>
                              <div class="col">
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
                              <div class="col">
                                <div className='card-pkr'>
                                  PKR.120.00
                                  <br />
                                  <small>Consumer Price</small>
                                </div>
                              </div>
                              <div class="col">
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
                              <div class="col">
                                <div className='card-pkr'>
                                  PKR.120.00
                                  <br />
                                  <small>Consumer Price</small>
                                </div>
                              </div>
                              <div class="col">
                                <a href="/" className="btn btn-footer">READ MORE</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='container-fluid'>
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
                              <div class="col">
                                <div className='card-pkr'>
                                  PKR.120.00
                                  <br />
                                  <small>Consumer Price</small>
                                </div>
                              </div>
                              <div class="col">
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
                              <div class="col">
                                <div className='card-pkr'>
                                  PKR.120.00
                                  <br />
                                  <small>Consumer Price</small>
                                </div>
                              </div>
                              <div class="col">
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
                              <div class="col">
                                <div className='card-pkr'>
                                  PKR.120.00
                                  <br />
                                  <small>Consumer Price</small>
                                </div>
                              </div>
                              <div class="col">
                                <a href="/" className="btn btn-footer">READ MORE</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
      </section >
    </div >
  )
}

export default CardSlides
