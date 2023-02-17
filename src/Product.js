import React from 'react';

import './Product.css';
import Footer from './Footer.js'

function Product() {
  return (

    <div className='product'>
        <div className='product_hero'>
            <div className='product_hero_content'>
                    <p>On Campus Program</p>
                    <div className='product_hero_content_line'></div>
                    <h1>Take Your First Step 
                        Towards Becoming 
                            An Accounting Expert!</h1>
                      <p>An 8-week long mentorship program to teach you everything you need to start 
                         and accelerate your career in accounting with a community of like-minded people.</p>

                         <button>Apply for Program</button>
            </div>
            <div className='product_hero_image'>
                    <img src='https://images.unsplash.com/photo-1616596871445-bb8290a7a2c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8b25saW5lJTIwY2xhc3Nlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'/>

                    {/** instructed by */}
            </div>
        </div>


        {/** Who is this progrm for  */}

        <div className='product_eligibility'>
            <h1>Who is this Program for?</h1>
            <div className='product_eligibility_line'></div>
            <div className='product_eligibility_points'>
                <div className='product_eligibility_points_point'> 
                    <img src='/images/tick.png'/>
                    <p>College Graduates</p>
                </div>

                <div className='product_eligibility_points_point'> 
                    <img src='/images/tick.png'/>
                    <p>College Graduates</p>
                </div>


                <div className='product_eligibility_points_point'> 
                    <img src='/images/tick.png'/>
                    <p>College Graduates</p>
                </div>

                

            </div>

            <p>If you agree to anyone of the above statements, then this program is for you!</p>
            <button>Reserve Seat for 14999</button>
        </div>



         {/** what can u excpect  */}

         <div className='product_desc'>
            <h1>What can you expect ?</h1>
            <div className='product_desc_line'></div>
            <div className='product_desc_points'>
                <div className='product_desc_points_point'>
                    <img src= "/images/arrow.png"/>
                    <p> "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum</p>
                </div>
                <div className='product_desc_points_point'>
                    <img src= "/images/arrow.png"/>
                    <p> "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum</p>
                </div>
                <div className='product_desc_points_point'>
                    <img src= "/images/arrow.png"/>
                    <p> "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum</p>
                </div>
                <div className='product_desc_points_point'>
                    <img src= "/images/arrow.png"/>
                    <p> "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum</p>
                </div>
                <div className='product_desc_points_point'>
                    <img src= "/images/arrow.png"/>
                    <p> "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum</p>
                </div>
                <div className='product_desc_points_point'>
                    <img src= "/images/arrow.png"/>
                    <p> "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum</p>
                </div>
                

            </div>
         </div>



          {/** Mentor  */}

          <div  className='product_mentor'>
                <h1>
                    Mentored by
                </h1>
                <div className='product_mentor_line'></div>

                <div className='mentor_content'>
                        <div className='mentor_content_img'>
                            <img src='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'/>
                        </div>
                        <div className='mentor_content_info'>
                            <h1>Name</h1>
                            <p>A Chartered Accountant with more than two decades of experience in multi-functional roles in Assurance, Finance, SOX Compliance, Taxation, Business and Risk Advisory in India and abroad. 
                            <br/>
His experience and exposure to Indian, Middle East, European, American and Australian markets makes him a true global professional and who can be a trusted advisor for all international business and cross border transactions.
<br/>
 With a career stint spread across industries like retail, infrastructure, telecom, steel and FMCG, he maintains a consistently proven track record of client relationships and professional services delivery</p>
                        </div>
                </div>
          </div>



             {/** CTA  */}

            <div className='product_eligibility'>
                <button>Reserve seat for 1999</button>
            </div>


              {/** Frequnetly asked question */}




            <Footer/>
          
             
    </div>
  )
}

export default Product