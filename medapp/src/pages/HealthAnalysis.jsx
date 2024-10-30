import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import '../css/HealthAnalysis.css';
import InformationOverlay from './../components/InformationOverlay';
import { Api } from '../Api';

const HealthAnalysis= () => {
  const heartRateChartRef = useRef(null);
  const bloodPressureChartRef = useRef(null);
  const heartRateInstance = useRef(null);
  const bloodPressureInstance = useRef(null);
  const [isOpen,setIsOpen]=useState(false)
  const [receivedData,setReceivedData]=useState('')

 function onClose(){
   setIsOpen(false)
 }

 function onSubmit({ selectedOption, inputValue }){

  try{
    const res=Api.post('api/post/analysis/results/',{'testName':selectedOption,'value':inputValue})
    console.log(res)
  }catch(error){

    console.log('an error occured',error)
  }
 }

  useEffect(() => {
    // Destroy existing chart instances
    if (heartRateInstance.current) {
      heartRateInstance.current.destroy();
    }
    if (bloodPressureInstance.current) {
      bloodPressureInstance.current.destroy();
    }

    // Create Heart Rate Chart
    if(receivedData!=='' ){
      
    if (heartRateChartRef.current) {
      const ctx = heartRateChartRef.current.getContext('2d');
      heartRateInstance.current = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['May', 'June', 'July', 'August', 'September', 'October'],
          datasets: [{
            label: 'Heart Rate (BPM)',
            data: [75, 78, 72, 76, 74, 72],
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 2,
            fill: false,
            pointRadius: 3,
            pointHoverRadius: 6,
            tension: 0.3
          }]
        },
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: false,
              suggestedMax: 100
            }
          }
        }
      });
    }
  

    // Create Blood Pressure Chart
    if (bloodPressureChartRef.current) {
      const ctx = bloodPressureChartRef.current.getContext('2d');
      bloodPressureInstance.current = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['May', 'June', 'July', 'August', 'September', 'October'],
          datasets: [{
            label: 'Blood Pressure (mmHg)',
            data: [120, 122, 118, 119, 121, 120],
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 2,
            fill: false,
            pointRadius: 3,
            pointHoverRadius: 6,
            tension: 0.3
          }]
        },
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: false,
              suggestedMax: 140
            }
          }
        }
      });
    }
  
    // Cleanup function
    return () => {
      if (heartRateInstance.current) {
        heartRateInstance.current.destroy();
      }
      if (bloodPressureInstance.current) {
        bloodPressureInstance.current.destroy();
      }
    }};
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div className="app">
      {/* Header Section */}
      <header className="header">
          <h1>Comprehensive Health Status Analysis</h1>
          <p>Monitor your health with detailed insights and recommendations.</p>
        {/* <div className="container">
        </div> */}
      </header>

      {/* Main Content */}
      <main className="main container">

        <InformationOverlay isOpen={isOpen} onClose={onClose} onSubmit={onSubmit} />

        {/* Patient Information */}
        <div className="card">

          <div className='flex flex-row items-center justify-between'>
          <h2>Patient Overview</h2>
          <button className='analysisBtn ' onClick={()=>setIsOpen(true)}>
            Add
            </button>
          </div>

          <div className="patient-grid">

            <div className="patient-info">
              <label>Patient Name:</label>
              <p>John Doe</p>
            </div>

            <div className="patient-info">
              <label>Age:</label>
              <p>39 years</p>
            </div>

            <div className="patient-info">
              <label>Last Checkup:</label>
              <p>10/15/2024</p>
            </div>

          </div>
        </div>

        {/* Vital Signs Overview */}
        <div className="card">
          <h2>Vital Signs</h2>
          <div className="vitals-grid">
            <div className="vital-item">
              <h3>Heart Rate</h3>
              <p className="vital-value">72 BPM</p>
              <p className="vital-range">Normal Range: 60-100 BPM</p>
            </div>
            <div className="vital-item">
              <h3>Blood Pressure</h3>
              <p className="vital-value">120/80 mmHg</p>
              <p className="vital-range">Normal Range: 120/80 mmHg</p>
            </div>
            <div className="vital-item">
              <h3>Body Temperature</h3>
              <p className="vital-value">98.6°F</p>
              <p className="vital-range">Normal Range: 97.8-99.1°F</p>
            </div>
          </div>
        </div>

        {/* Health Trends */}
        <div className="card">
          <h2>Health Trends Over Time</h2>
          <div className="charts-grid">
            <div className="chart-container">
              <h3>Heart Rate (Last 6 Months)</h3>
              <canvas ref={heartRateChartRef}></canvas>
            </div>
            <div className="chart-container">
              <h3>Blood Pressure (Last 6 Months)</h3>
              <canvas ref={bloodPressureChartRef}></canvas>
            </div>
          </div>
        </div>

        {/* Health Recommendations */}
        <div className="card">
          <h2>Personalized Health Recommendations</h2>
          <ul className="recommendations-list">
            <li>Maintain a healthy diet rich in fruits, vegetables, and whole grains.</li>
            <li>Exercise regularly for at least 30 minutes per day to improve cardiovascular health.</li>
            <li>Monitor your blood pressure regularly and consult your physician if it goes beyond the normal range.</li>
            <li>Stay hydrated and aim for at least 8 glasses of water per day.</li>
            <li>Follow up with your doctor for regular check-ups and screenings.</li>
          </ul>
        </div>

        {/* Download Button */}
        <div className="download-section">
          <button className="download-button">
            Download Full Health Report
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
          <p>&copy; 2024 Health Status Analysis. All rights reserved.</p>
        {/* <div className="container">
        </div> */}
      </footer>
    </div>
  );
};

export default HealthAnalysis;