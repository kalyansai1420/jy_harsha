import React from 'react';
import './Card.css';
import { useNavigate } from 'react-router-dom';
import arrow from './images/arrow.png'

function CourseCard() {

  let history = useNavigate();


  const coursedetails = () => {
    history("/product");
  }
  return (
    <div className='coursecard' onClick={coursedetails}>
      <p>on campus program</p>
      <div className='coursecard_underline_one'></div>

      <div className='coursecard_content'>
        <h1>Course Tittle</h1>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, to</p>
        <div className='coursecard_content_features' >
          <div className='coursecard_content_features_row'>
              <div className='coursecard_content_features_row_features'>
                <img src="../src/images/clock.png" />
                <p>2 months</p>
              </div>
              <div className='coursecard_content_features_row_features'>
                <img src="/images/type.png" />
                <p>Full Time</p>
              </div>
          </div>
          <div className='coursecard_content_features_row'>
          <div className='coursecard_content_features_row_features'>
                <img src="/images/certificate.png" />
                <p>12th pass out</p>
              </div>
              <div className='coursecard_content_features_row_features'>
                <img src="/images/calender.png" />
                <div className='coursecard_content_features_row_features_calender' >
                  <p>Starts from</p>
                  <p1>12th sept</p1>
                </div>
              </div>
          </div>

        </div>
      </div>  

      <div className='coursecard_underline'></div>

      <div className='coursecard_fee'>
        <p>Total Program Fee</p>
        <h1>INR 20000/-</h1>
        <div className='coursecard_fee_line'></div>
        <p1>Enroll now <span><img src='/arrow.png'/></span></p1>
      </div>
    </div>
  )
}

export default CourseCard