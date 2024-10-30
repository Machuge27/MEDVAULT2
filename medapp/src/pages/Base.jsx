import React from 'react'

export default function Base() {

  return (
    <>
    <section className="preloader">
         <div className="spinner">

              <span className="spinner-rotate"></span>
              
         </div>
    </section>


    {/* <!-- HEADER --> */}
    <header>
         <div className="container">
              <div className="row">

                   <div className="col-md-4 col-sm-5">
                        <p>Welcome to a Professional Health Care</p>
                   </div>
                        
                   <div className="col-md-8 col-sm-7 text-align-right">
                        <span className="phone-icon"><i className="fa fa-phone"></i> +254790625309 </span>
                        <span className="date-icon"><i className="fa fa-calendar-plus-o"></i> HEALTHCARE 24/7 </span>
                        <span className="email-icon"><i className="fa fa-envelope-o"></i> <a href="#">solutech888@gmail.com</a></span>
                   </div>

              </div>
         </div>
    </header>


    {/* <!-- MENU --> */}
    <section className="navbar navbar-default navbar-static-top" role="navigation">
         <div className="container">

              <div className="navbar-header">
                   <button className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span className="icon icon-bar"></span>
                        <span className="icon icon-bar"></span>
                        <span className="icon icon-bar"></span>
                   </button>

                   {/* <!-- lOGO TEXT HERE --> */}
                   <a href="#" className="logo">
                        <img src="images/logo12.png" width="136" height="46" alt=""/>
                      </a>
                  
              </div>

              {/* <!-- MENU LINKS --> */}
              <div className="collapse navbar-collapse">
                   <ul className="nav navbar-nav navbar-right">
                        <li><a href="#top" className="smoothScroll">Home</a></li>
                        <li><a href="#about" className="smoothScroll">About Us</a></li>
                        <li><a href="#services" className="smoothScroll">Services</a></li>
                        <li><a href="#google-map" className="smoothScroll">Contact Us</a></li>
                        <li className="appointment-btn"><a href="#appointment">Check Your Health History</a></li>
                   </ul>
              </div>

         </div>
    </section>


    {/* <!-- HOME --> */}
    <section id="home" className="slider" data-stellar-background-ratio="0.5">
         <div className="container">
              <div className="row">

                        <div className="owl-carousel owl-theme">
                             <div className="item item-first">
                                  <div className="caption">
                                       <div className="col-md-offset-1 col-md-10">
                                            <h3 style={{color: "black"}}>Let's make monitoring your Health Easier</h3>
                                            <h1 >Healthy Living</h1>
                                            <a href="#services" className="section-btn btn btn-default smoothScroll">Our services</a>
                                       </div>
                                  </div>
                             </div>

                             <div className="item item-second">
                                  <div className="caption">
                                       <div className="col-md-offset-1 col-md-10">
                                            <h3 style={{color: "black"}}>Your journey to better health starts here.</h3>
                                            <h1>New Lifestyle</h1>
                                            <a href="#about" className="section-btn btn btn-default btn-gray smoothScroll">More About Us</a>
                                       </div>
                                  </div>
                             </div>

                             <div className="item item-third">
                                  <div className="caption">
                                       <div className="col-md-offset-1 col-md-10">
                                            <h3 style={{color: "black"}}>Prioritize your well-being—every day matters.</h3>
                                            <h1>Your Health Benefits</h1>
                                            <a href="#google-map" className="section-btn btn btn-default btn-blue smoothScroll scroll-behavior: smooth;">Contact Us</a>
                                       </div>
                                  </div>
                             </div>
                        </div>

              </div>
         </div>
    </section>


    {/* <!-- ABOUT --> */}
    <section id="about">
         <div className="container">
              <div className="row">

                   <div className="col-md-6 col-sm-6">
                        <div className="about-info">
                             <h2 className="wow fadeInUp" data-wow-delay="0.6s">Welcome to Your <i className="fa fa-h-square"></i>ealth MedVault</h2>
                             <div className="wow fadeInUp" data-wow-delay="0.8s">
                                  <p style={{color: 'rgb(5, 5, 4)'}}>Healthy choices for a happier life.</p>
                                  <p style={{color: 'rgb(5, 5, 4)'}}>Empowering you to live a healthier life.</p>
                             </div>
                             <figure className="profile wow fadeInUp" data-wow-delay="1s">
                                  <figcaption>
                                       <h3>MEDVAULT</h3>
                                       <p style={{color: 'rgb(9, 9, 9)'}}>Connects you to all hospitals all doctors of your choice and records your health history where you can add everytime you visit a hospital/doctor, and does a comprehensive analysis of your health status then recommends steps to healthy living!</p>
                                  </figcaption>
                             </figure>
                        </div>
                   </div>
                   
              </div>
         </div>
    </section>


    {/* <!-- TEAM --> */}
    <section id="services" data-stellar-background-ratio="1">
         <div className="container">
              <div className="row">

                   <div className="col-md-6 col-sm-6">
                        <div className="about-info">
                             <h2 className="wow fadeInUp" data-wow-delay="0.1s">Services</h2>
                        </div>
                   </div>

                   <div className="clearfix"></div>

                   <div className="col-md-4 col-sm-6">
                        <div className="team-thumb wow fadeInUp" data-wow-delay="0.2s">
                             <img src="images/health10.png" className="img-responsive" alt="" style={{height: 300,width: 300}}/>

                                  <div className="team-info">
                                       <h3>Health History</h3>
                                       <div className="team-contact-info">
                                            
                                       </div>
                                       <ul className="social-icon">
                                            
                                       </ul>
                                  </div>

                        </div>
                   </div>

                   <div className="col-md-4 col-sm-6">
                        <div className="team-thumb wow fadeInUp" data-wow-delay="0.4s">
                             <img src="images/healthpres.png" className="img-responsive" alt=""/>

                                  <div className="team-info">
                                       <h3>Prescription Notification</h3>
                                       <div className="team-contact-info">
                                            
                                       </div>
                                       <ul className="social-icon">
                                            <li><a href="#" className="fa fa-facebook-square"></a></li>
                                            <li><a href="#" className="fa fa-envelope-o"></a></li>
                                            <li><a href="#" className="fa fa-flickr"></a></li>
                                       </ul>
                                  </div>

                        </div>
                   </div>

                   <div className="col-md-4 col-sm-6">
                        <div className="team-thumb wow fadeInUp" data-wow-delay="0.6s">
                             <img src="images/healthhistory.png" className="img-responsive" alt=""/>

                                  <div className="team-info">
                                       <h3>Comprehensive Health Status Analysis</h3>
                                       <div className="team-contact-info">
                                            
                                       </div>
                                       <ul className="social-icon">
                                            <li><a href="#" className="fa fa-twitter"></a></li>
                                            <li><a href="#" className="fa fa-envelope-o"></a></li>
                                       </ul>
                                  </div>

                        </div>
                   </div>
                   <div className="col-md-4 col-sm-6">
                        <div className="team-thumb wow fadeInUp" data-wow-delay="0.6s">
                             <img src="images/health3.jpg" className="img-responsive" alt="" style={{height: 792, width: 792}}/>

                                  <div className="team-info">
                                       <h3>Book Appointment</h3>
                                       <div className="team-contact-info">
                                            
                                       </div>
                                       <ul className="social-icon">
                                            <li><a href="#" className="fa fa-twitter"></a></li>
                                            <li><a href="#" className="fa fa-envelope-o"></a></li>
                                       </ul>
                                  </div>

                        </div>
                   </div>
                   <div className="col-md-4 col-sm-6">
                        <div className="team-thumb wow fadeInUp" data-wow-delay="0.6s">
                             <img src="images/healthresults.png" className="img-responsive" alt=""/>

                                  <div className="team-info">
                                       <h3>Test Results</h3>
                                       <div className="team-contact-info">
                                            
                                       </div>
                                       <ul className="social-icon">
                                            <li><a href="#" className="fa fa-twitter"></a></li>
                                            <li><a href="#" className="fa fa-envelope-o"></a></li>
                                       </ul>
                                  </div>

                        </div>
                   </div>
                   
              </div>
         </div>
    </section>



   


    <section id="google-map">
    {/* <!-- How to change your own map point
           1. Go to Google Maps
           2. Click on your location point
           3. Click "Share" and choose "Embed map" tab
           4. Copy only URL and paste it within the src="" field below
 --> */}
         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3647.3030413476204!2d100.5641230193719!3d13.757206847615207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf51ce6427b7918fc!2sG+Tower!5e0!3m2!1sen!2sth!4v1510722015945" width="100%" height="350" frameBorder="0" style={{border:0}} allowFullScreen></iframe>
    </section>           


    {/* <!-- FOOTER --> */}
    <footer data-stellar-background-ratio="5">
         <div className="container">
              <div className="row">

                   <div className="col-md-4 col-sm-4">
                        <div className="footer-thumb"> 
                             <h4 className="wow fadeInUp" data-wow-delay="0.4s">Contact Info</h4>
                             <p>MEDVAULT</p>

                             <div className="contact-info">
                                  <p><i className="fa fa-phone"></i> +254790625309 </p>
                                  <p><i className="fa fa-envelope-o"></i> <a href="#">solutech888@gmail.com</a></p>
                             </div>
                        </div>
                   </div>

                   <div className="col-md-4 col-sm-4"> 
                        <div className="footer-thumb"> 
                             <h4 className="wow fadeInUp" data-wow-delay="0.4s">Latest News</h4>
                             <div className="latest-stories">
                                  <div className="stories-image">
                                       <a href="#"><img src="images/news-image.jpg" className="img-responsive" alt=""/></a>
                                  </div>
                                  <div className="stories-info">
                                       <a href="#"><h5>Dentist</h5></a>
                                       <span>November 08, 2024</span>
                                  </div>
                             </div>

                             <div className="latest-stories">
                                  <div className="stories-image">
                                       <a href="#"><img src="images/news-image.jpg" className="img-responsive" alt=""/></a>
                                  </div>
                                  <div className="stories-info">
                                       <a href="#"><h5>Optician</h5></a>
                                       <span>November 20, 2024</span>
                                  </div>
                             </div>
                        </div>
                   </div>

                   <div className="col-md-4 col-sm-4"> 
                        <div className="footer-thumb">
                             <div className="opening-hours">
                                  <h4 className="wow fadeInUp" data-wow-delay="0.4s">Opening Hours</h4>
                                  <p>Monday - Friday <span>24/7</span></p>
                                  
                             </div> 

                             <ul className="social-icon">
                                  <li><a href="https://www.tiktok.com/@_solutech?_t=8qcWYV9ZJF0&_r=1" className="fa fa-tiktok" ></a></li>
                                  <li><a href="https://x.com/SolTech888?t=2JrmCCJcOA074q6ueZF70A&s=09" className="fa fa-twitter"></a></li>
                                  <li><a href="https://www.instagram.com/_.solutech/profilecard/?igsh=djJwZjF3bXg1dHNh" className="fa fa-instagram"></a></li>
                             </ul>
                        </div>
                   </div>

                   <div className="col-md-12 col-sm-12 border-top">
                        <div className="col-md-4 col-sm-6">
                             <div className="copyright-text"> 
                                  <p>Copyright; 2024 SolTech
                                  
                                  | Design: <a href="https://solutiontechkenya.github.io/SolTech/" target="_parent">SolTech Solutions</a></p>
                             </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                             <div className="footer-link"> 
                                  <a href="#">Laboratory Tests</a>
                                  <a href="#">Departments</a>
                                  <a href="#">Insurance Policy</a>
                                  <a href="#">Careers</a>
                             </div>
                        </div>
                        <div className="col-md-2 col-sm-2 text-align-center">
                             <div className="angle-up-btn"> 
                                 <a href="#top" className="smoothScroll wow fadeInUp" data-wow-delay="1.2s"><i className="fa fa-angle-up"></i></a>
                             </div>
                        </div>   
                   </div>
                   
              </div>
         </div>
    </footer>

  </>
  )
}
