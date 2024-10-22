import React, { useState } from 'react';
import { Menu, BarChart3, User, X, Loader } from 'lucide-react';
import '../css/MedicalPOSInterface.css';

const PatientHome = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResults, setAnalysisResults] = useState(null);

  const handleHealthAnalysis = async () => {
    setIsAnalyzing(true);
    // Simulate API call with setTimeout
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setAnalysisResults({
      generalHealth: 'Good',
      recommendations: [
        'Schedule annual check-up',
        'Update vaccination records',
        'Review medication history',
      ],
      metrics: {
        bmi: '22.4',
        bloodPressure: '120/80',
        heartRate: '72 bpm',
      },
    });

    setIsAnalyzing(false);
    setActiveSection('analysis');
  };

  const sections = {
    medicalHistory: {
      title: 'Medical History',
      content: (
        <div>
          <h3 className="section-subtitle">Recent Conditions:</h3>
          <ul className="list">
            <li>Hypertension - Diagnosed 2022</li>
            <li>Type 2 Diabetes - Diagnosed 2021</li>
          </ul>
          <h3 className="section-subtitle">Allergies:</h3>
          <ul className="list">
            <li>Penicillin</li>
            <li>Peanuts</li>
          </ul>
        </div>
      ),
    },
    bookAppointment: {
      title: 'Book Appointment',
      content: (
        <div>
          <h3 className="section-subtitle">Available Slots:</h3>
          <ul className="button-list">
            <li>
              <button className="action-button">Dr. Smith - Mar 25, 10:00 AM</button>
            </li>
            <li>
              <button className="action-button">Dr. Johnson - Mar 27, 2:00 PM</button>
            </li>
          </ul>
        </div>
      ),
    },
    prescriptions: {
      title: 'Prescriptions',
      content: (
        <div>
          <h3 className="section-subtitle">Active Prescriptions:</h3>
          <ul className="list">
            <li>Lisinopril 10mg - Take once daily</li>
            <li>Metformin 500mg - Take twice daily with meals</li>
          </ul>
        </div>
      ),
    },
    testResults: {
      title: 'Test Results',
      content: (
        <div>
          <h3 className="section-subtitle">Recent Tests:</h3>
          <ul className="button-list">
            <li>
              <button className="action-button">Blood Work - Mar 10, 2024</button>
            </li>
            <li>
              <button className="action-button">A1C Test - Feb 15, 2024</button>
            </li>
          </ul>
        </div>
      ),
    },
    settings: {
      title: 'Settings',
      content: (
        <div>
          <h3 className="section-subtitle">Account Settings:</h3>
          <ul className="button-list">
            <li>
              <button className="action-button">Update Personal Information</button>
            </li>
            <li>
              <button className="action-button">Change Password</button>
            </li>
            <li>
              <button className="action-button">Notification Preferences</button>
            </li>
            <li>
              <button
                className="action-button"
                onClick={handleHealthAnalysis}
              >
                Comprehensive Health Status Analysis
                {isAnalyzing && <Loader className="animate-spin" size={20} />}
              </button>
            </li>
          </ul>
        </div>
      ),
    },
    analysis: {
      title: 'Health Analysis Results',
      content: analysisResults && (
        <div className="p-4 space-y-6">
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Overall Status</h3>
            <p className="text-xl font-bold text-green-700">
              {analysisResults.generalHealth}
            </p>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Key Metrics</h3>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <p className="text-sm text-gray-600">BMI</p>
                <p className="font-semibold">{analysisResults.metrics.bmi}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Blood Pressure</p>
                <p className="font-semibold">{analysisResults.metrics.bloodPressure}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Heart Rate</p>
                <p className="font-semibold">{analysisResults.metrics.heartRate}</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Recommendations</h3>
            <ul className="space-y-2">
              {analysisResults.recommendations.map((rec, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2" />
                  {rec}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ),
    },
  };

  return (
    <div className="medical-pos-interface">
      <header className="header">
        <Menu className="icon" onClick={() => setActiveSection('settings')} />
        <h1 className="title">Medical Records</h1>
        <User className="icon" />
      </header>

      {activeSection ? (
        <div className="active-section">
          <div className="section-header">
            <h2 className="section-title">{sections[activeSection].title}</h2>
            <X className="icon" onClick={() => setActiveSection(null)} />
          </div>
          {sections[activeSection].content}
        </div>
      ) : (
        <>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-content">
                <p className="stat-label">Last Visit</p>
                <p className="stat-value">Mar 15</p>
              </div>
              <BarChart3 className="icon" />
            </div>
            <div className="stat-card">
              <div className="stat-content">
                <p className="stat-label">Appointments</p>
                <p className="stat-value">2</p>
              </div>
              <BarChart3 className="icon" />
            </div>
          </div>

          <h2 className="section-title">Quick Actions</h2>
          <div className="quick-actions-grid">
            {Object.entries(sections).map(([key, { title }]) => (
              <button
                key={key}
                className="quick-action-button"
                onClick={() => setActiveSection(key)}
              >
                {title}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default PatientHome;
