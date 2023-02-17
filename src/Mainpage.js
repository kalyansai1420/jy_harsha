import React from 'react';
import CourseCard from './CourseCard';
import Footer from './Footer';
import './Mainpage.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from './Product';
import NavBar from './NavBar';


function Mainpage() {
  return (
    <div className='MainPage'>
      <NavBar/>
        <div className='MainPage_hero'>
            <div className='MainPage_hero_info'>
              
                <h1>Learn from the <span>25<div className='underline'></div></span>     <br /> year's of experience <span>⚡</span></h1>
                <p>Learn beyond class rooms</p>
                <p>Learn from Bhasker Jagata</p>
                <p>Placement Driven Program</p>

                <button>Explore Programs</button>
            </div>
            <div className='MainPage_hero_image'>
                <img src='https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xhc3Nlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'/>
            </div>
        </div>

        {/***Courses */}

        <div className='MainPage_courses'>
          <h1>Placement Driven Programmes</h1>
          <div className='MainPage_courses_underline'></div>
          <div className='MainPage_courses_cards'>
            <CourseCard/>
            <CourseCard/>
            <CourseCard/>
            <CourseCard/>
          </div>
        </div>



      {/*** ABout Jy Academy  */}


      <div className='MainPage_about'>
        <h1>Why JY Academy</h1>
        <div className='MainPage_about_underline'></div>
        <div className='MainPage_about_content'>
            <div className='MainPage_about_content_text'>
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
            <div className='MainPage_about_content_keyfeatures'>
                  <div className='MainPage_about_content_keyfeatures_row'>
                        <div className='MainPage_about_content_keyfeatures_row_image' >
                            <img className='abouticon' src='/images/classes.png'/>
                        </div>
                        <div className='MainPage_about_content_keyfeatures_row_content'>
                            <h1>LIVE CLASSES & ON DEMAND VIDEOS</h1>
                            <p>Go beyond pre-recorded courses with LIVE and get doubts cleared personally</p>
                        </div>
                  </div>


                  <div className='MainPage_about_content_keyfeatures_row'>
                        <div className='MainPage_about_content_keyfeatures_row_image' >
                            <img className='abouticon' src='/images/handson.png'/>
                        </div>
                        <div className='MainPage_about_content_keyfeatures_row_content'>
                            <h1>Learn Hand’s on</h1>
                            <p>Actionable programs to offset the Pareto Principle; you will execute projects using what you learned</p>
                        </div>
                  </div>


                  <div className='MainPage_about_content_keyfeatures_row'>
                        <div className='MainPage_about_content_keyfeatures_row_image' >
                            <img className='abouticon' src='/images/rupee.png'/>
                        </div>
                        <div className='MainPage_about_content_keyfeatures_row_content'>
                            <h1>Placement support</h1>
                            <p>Get placed after your finish the course</p>
                        </div>
                  </div>
              </div>
        </div>
      </div>

  


     {/*** Footer */}
     
      <Footer/>

    </div>
  )
}

export default Mainpage