import React, { useEffect, useState } from 'react';
import '../App.css';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Handle loader
    setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Remove loader after 1 second

    // Handle login dropdown
    const loginBtn = document.getElementById("loginBtn");
    if (loginBtn) {
      const handleClick = () => {
        document.querySelector(".dropdown")?.classList.toggle("show");
      };
      
      const handleBlur = () => {
        document.querySelector(".dropdown")?.classList.remove("show");
      };

      loginBtn.addEventListener("click", handleClick);
      loginBtn.addEventListener("blur", handleBlur);

      return () => {
        loginBtn.removeEventListener("click", handleClick);
        loginBtn.removeEventListener("blur", handleBlur);
      };
    }
  }, []);

  return (
    <div className="App">
      {isLoading && (
        <div className="preloader" data-preloader>
          <div className="circle"></div>
        </div>
      )}

      <header className="header" data-header>
        {/* Header content remains the same */}
      </header>

      <main>
        <article>
          <section className="section hero" id="home" style={{ backgroundImage: 'url("./assets/images/hero-bg.png")' }} aria-label="home">
            <div className="container">
              <div className="hero-content">
                <p className="hero-subtitle has-before" data-reveal="left">
                  Welcome To <span style={{ color: "gray" }}> MEDVAULT</span>
                </p>
                <h1 className="headline-lg hero-title" data-reveal="left">
                  MONITOR YOUR HEALTH, <br/>
                  <span>For a better lifestyle.</span>
                </h1>
              </div>

              <figure className="hero-banner" data-reveal="right">
                <img src="./assets/images/img2.jpg" width="590" height="517" loading="eager" alt="hero banner" className="w-100"/>
              </figure>
            </div>
          </section>

          <section className="service" id="services" aria-label="service">
            <div className="container">
              <ul className="service-list">
                <li>
                  <div className="service-card" data-reveal="bottom">
                    <div className="card-icon">
                      <img src="./assets/images/icon-1.png" width="71" height="71" loading="lazy" alt="icon"/>
                    </div>
                    <h3 className="headline-sm card-title">
                      {/* <a href="#">Patient Health History Management</a> */}
                    </h3>
                    <p className="card-text">
                      Securely store, manage, and access patients' medical histories, diagnoses, medications, and treatment plans in a
                      centralized digital system.
                    </p>
                  </div>
                </li>

                <li>
                  <div className="service-card" data-reveal="bottom">
                    <div className="card-icon">
                      <img src="./assets/images/icon-2.png" width="71" height="71" loading="lazy" alt="icon"/>
                    </div>
                    <h3 className="headline-sm card-title">
                      {/* <a href="#">Comprehensive Health Status Analysis</a> */}
                    </h3>
                    <p className="card-text">
                      Offer detailed analytics and reporting tools to monitor patient outcomes, clinic performance, and operational
                      efficiency, helping to improve care quality and decision-making.
                    </p>
                  </div>
                </li>

                {/* Add other service items similarly */}
              </ul>
            </div>
          </section>

          <section className="section about" id="about" aria-labelledby="about-label">
            <div className="container">
              <div className="about-content">
                <p className="section-subtitle title-lg has-after" id="about-label" data-reveal="left">About Us</p>
                <h2 className="headline-md" data-reveal="left">Improving Health Status.</h2>
                <p className="section-text" data-reveal="left">
                  To be the premier healthcare system, delivering exceptional care while shaping the future of medicine.
                </p>
                <ul className="tab-list" data-reveal="left">
                  <li>
                    <h3>Vision</h3>
                    <p>To empower healthcare providers with secure, seamless access to patient data, improving care quality and outcomes
                      while ensuring the highest standards of data privacy and security.</p>
                  </li>
                  <li>
                    <h3>Mission</h3>
                    <p>Our mission is to create a cutting-edge, patient-centric system that securely stores and manages health data,
                      ensuring quick and reliable access for healthcare professionals.</p>
                  </li>
                </ul>
              </div>

              <figure className="about-banner" data-reveal="right">
                <img src="./assets/images/about-banner.png" width="554" height="678" loading="lazy" alt="about banner" className="w-100"/>
              </figure>
            </div>
          </section>
        </article>
      </main>

      <footer className="footer" id="contacts" style={{ backgroundImage: 'url("./assets/images/footer-bg.png")' }}>
        <div className="container">
          <div className="section footer-top">
            <div className="footer-brand" data-reveal="bottom">
              {/* <a href="#" className="logo">
                <img src="./assets/images/logo3.jpg" width="136" height="46" loading="lazy" alt="Doclab home"/>
              </a> */}
              {/* Add footer content */}
            </div>
          </div>
        </div>
      </footer>

      <a href="#top" className="back-top-btn" aria-label="back to top" data-back-top-btn>
        <ion-icon name="chevron-up"></ion-icon>
      </a>
    </div>
  );
};

export default App;