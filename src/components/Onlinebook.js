import React from 'react'
import './online.css';


function Onlinebook() {
    return (
        <div>
            <div className='hometitle'>
                <img src="/book/online-booking.jpg" alt="" />
            </div>
            <section role='main' className='container-fluid bg_secondary '>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 col-md-12 col-lg-8 pt-1 pb-1'></div>
                        <div className='hedonline'>Zong Online Booking</div>
                        <div className='pegonline'> Let us know what you want delivered to your doorstep. We will get in touch with you within 2 business days. </div>
                        <div className='onclick pb-3'>BOOK YOUR NUMBER (SELF PICK-UP)</div>
                        {/* form start */}
                        <div className='container bg_middle'>
                            <div className='question pt-4 pb-1 mx-5'>What do you want to buy?</div>
                            <div className="row mx-4">
                                <div className="col">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                        <label className="form-check-label" for="flexRadioDefault1">
                                            Default radio
                                        </label>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                        <label className="form-check-label" for="flexRadioDefault2"> Default checked radio</label>
                                    </div>
                                </div>
                                <div className="w-100"></div>
                                <div className="col">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                        <label className="form-check-label" for="flexRadioDefault2">Default checked radio</label>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                        <label className="form-check-label" for="flexRadioDefault2">
                                            Default checked radio
                                        </label>
                                    </div>
                                </div>
                                <div className="w-70">
                                </div>
                                <div className="col">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                        <label className="form-check-label" for="flexRadioDefault2">
                                            MNP - Converting my existing number to Zong network
                                        </label>
                                    </div>
                                </div>
                            </div>
                            {/* Radio End */}
                            <div className="row mx-5 mt-2 pl-2">
                                <div className="col ">
                                    <div className="mb-3">
                                        <label for="exampleInputEmail1" className="form-label">Name</label>
                                        <input type="name" className="form-control pl-2" id="name" aria-describedby="emailHelp" />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="mb-3">
                                        <label for="exampleInputEmail1" className="form-label">Email</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                </div>
                            </div>
                            <div className="col mx-5">
                                <label for="exampleInputEmail1" className="form-label">City</label>
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>select your city</option>
                                    <option value="1">Lahore</option>
                                    <option value="2">Karachi</option>
                                    <option value="3">Pashawer</option>
                                    <option value="1">Lahore</option>
                                    <option value="2">Karachi</option>
                                    <option value="3">Pashawer</option>
                                    <option value="1">Lahore</option>
                                    <option value="2">Karachi</option>
                                    <option value="3">Pashawer</option>
                                    <option value="1">Lahore</option>
                                    <option value="2">Karachi</option>
                                    <option value="3">Other</option>
                                </select>
                            </div>
                            <div className="mb-3  mx-5 pt-2">
                                <label for="formGroupExampleInput" className="form-label">Address</label>
                                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="" />
                            </div>
                            <div className="row">
                                <div className="col-6 col-md-4">
                                    <div className="col mx-5">
                                        <label for="exampleInputEmail1" className="form-label">Contect Number:</label>
                                        <select className="form-select" aria-label="Default select example">
                                            <option selected>0300</option>
                                            <option value="1">0301</option>
                                            <option value="2">0302</option>
                                            <option value="3">0303</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-12 col-md-8">
                                    <div className="mb-3  mx-5 pt-2">
                                        <label for="formGroupExampleInput" className="form-label">Address</label>
                                        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="" />
                                    </div>
                                </div>
                            </div>
                            <div className='form-submit'>
                                <button className='submit-button' type='post' formAction='submit'>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className='blackline'></div>
        </div>
    )
}

export default Onlinebook
