import React, { useState } from 'react';
import { Menu, BarChart3, User, X, Loader } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import '../css/MedicalPOSInterface.css';

const PatientHome = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResults, setAnalysisResults] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

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
      path: '/History', // Define path for navigation
    },
    bookAppointment: {
      title: 'Book Appointment',
      path: '/Appointment', // Define path for navigation
    },
    prescriptions: {
      title: 'Prescriptions',
      path: '', // Define path for navigation
    },
    testResults: {
      title: 'Test Results',
      path: '/results', // Define path for navigation
    },
    analysis: {
      title: 'Health Analysis Results',
      path: '/analysis', // Define path for navigation
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
            {Object.entries(sections).map(([key, { title, path }]) => (
              <button
                key={key}
                className="quick-action-button"
                onClick={() => navigate(path)} // Navigate to the specified path
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
