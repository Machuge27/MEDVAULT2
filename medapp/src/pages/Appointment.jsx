import React, { useState, useEffect } from 'react';
import '../css/Pages.css';

const AppointmentForm = () => {
  const [hospitalMap, setHospitalMap] = useState(null);

  useEffect(() => {
    if (window.google) {
      initMap();
    }
  }, []);

  const initMap = (hospitalName = "City General Hospital") => {
    const hospitalLocations = {
      "City General Hospital": { lat: -1.2921, lng: 36.8219 },
      "Eastside Clinic": { lat: -1.2906, lng: 36.8225 },
      "Westside Hospital": { lat: -1.2895, lng: 36.8200 },
    };

    const mapOptions = {
      center: hospitalLocations[hospitalName],
      zoom: 14,
    };

    const map = new window.google.maps.Map(document.getElementById('hospital-map'), mapOptions);
    new window.google.maps.Marker({
      position: hospitalLocations[hospitalName],
      map,
      title: hospitalName,
    });
    setHospitalMap(map);
  };

  const updateMap = (e) => {
    const selectedHospital = e.target.options[e.target.selectedIndex].text;
    initMap(selectedHospital);
  };

  return (
    <div className="container">
      <header className="header">
        <div className="header-container">
          <h1>City General Hospital</h1>
          <p>Your Health, Our Priority</p>
        </div>
      </header>

      <main className="main">
        <div className="form-container">
          <h2>Schedule an Appointment</h2>
          <form>
            <section className="section">
              <h3>Patient Information</h3>
              <div className="grid">
                <div className="field">
                  <label>First Name</label>
                  <input type="text" required />
                </div>
                <div className="field">
                  <label>Last Name</label>
                  <input type="text" required />
                </div>
                <div className="field">
                  <label>Date of Birth</label>
                  <input type="date" required />
                </div>
                <div className="field">
                  <label>Phone Number</label>
                  <input type="tel" required />
                </div>
              </div>
            </section>

            <section className="section">
              <h3>Area Information</h3>
              <div className="field">
                <label>Area</label>
                <input type="text" placeholder="Enter your area" required />
              </div>
              <div className="field">
                <label>Preferred Hospital</label>
                <select id="preferred-hospital" onChange={updateMap} required>
                  <option value="">Select Hospital</option>
                  <option value="city-general">City General Hospital</option>
                  <option value="eastside-clinic">Eastside Clinic</option>
                  <option value="westside-hospital">Westside Hospital</option>
                </select>
              </div>
              <div className="field">
                <label>Other Hospital (if not listed)</label>
                <input type="text" placeholder="Enter hospital name (optional)" />
              </div>
            </section>

            <section className="map-section">
              <h3>Hospital Location</h3>
              <div id="hospital-map" className="hospital-map"></div>
            </section>

            <section className="section">
              <h3>Appointment Details</h3>
              <div className="field">
                <label>Department</label>
                <select required>
                  <option value="">Select Department</option>
                  <option value="cardiology">Cardiology</option>
                  <option value="dermatology">Dermatology</option>
                  <option value="neurology">Neurology</option>
                  <option value="orthopedics">Orthopedics</option>
                  <option value="pediatrics">Pediatrics</option>
                </select>
              </div>
              <div className="field">
                <label>Preferred Doctor</label>
                <select>
                  <option value="">Select Doctor (Optional)</option>
                  <option value="dr-smith">Dr. Smith</option>
                  <option value="dr-johnson">Dr. Johnson</option>
                  <option value="dr-williams">Dr. Williams</option>
                </select>
              </div>
              <div className="field">
                <label>Preferred Date</label>
                <input type="date" required />
              </div>
              <div className="field">
                <label>Preferred Time</label>
                <select required>
                  <option value="">Select Time</option>
                  <option value="09:00">09:00 AM</option>
                  <option value="10:00">10:00 AM</option>
                  <option value="11:00">11:00 AM</option>
                  <option value="14:00">02:00 PM</option>
                  <option value="15:00">03:00 PM</option>
                  <option value="16:00">04:00 PM</option>
                </select>
              </div>
            </section>

            <section className="section">
              <h3>Reason for Visit</h3>
              <div className="field">
                <label>Brief Description</label>
                <textarea rows="3" required></textarea>
              </div>
            </section>

            <section className="section">
              <h3>Insurance Information</h3>
              <div className="field">
                <label>Insurance Provider</label>
                <input type="text" />
              </div>
              <div className="field">
                <label>Policy Number</label>
                <input type="text" />
              </div>
            </section>

            <div className="terms">
              <input type="checkbox" required />
              <label>
                I agree to the hospital's terms and conditions and privacy policy
              </label>
            </div>

            <button type="submit" className="submit-button">Submit Appointment</button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default AppointmentForm;