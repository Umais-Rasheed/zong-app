import React from 'react';
import "./Artical.css";

function Artical() {
  return (
    <div>
      <div class="section-add">
        <div class="row">
          <div class="col-6"><img src="card/zong_devices.webp" alt="" /></div>
          <div class="col">
            <div className='section-add'>
              <h2>Broadband <br /> Devices</h2>
              <p>Our MBB Devices will make internet browsing convenient, quick and simple.</p>
              <p className='text-center d-none d-md-block mt-5 btn bmz primary'>Book Yours Today</p>
            </div>
          </div>
        </div>
      </div>
      {/* artical section */}
      <div class="section-artical">
        <div class="row">
          <div class="col-6 col-md-4"> <h2>Internet Packages</h2>
            <p>Enjoy Sublime internet plans on pakistan's No.1 data network</p>
            <p className='text-center d-none d-md-block mt-5 btn bmz primary'>Subscribe Now</p></div>
          <div class="col-6 col-md-4"><img src="card/hm_internet.webp" alt="card" /></div>
        </div>
      </div>
      <div className='blackline'></div>
    </div>
  )
}

export default Artical
