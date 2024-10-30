// HealthHistory.jsx
import React from 'react';
import '../css/HealthHistory.css';

const HealthHistory = () => {
  // Filter history based on type
  const filterHistory = (type) => {
    console.log('Filtering history:', type);
    // Implement filtering logic
  };

  // Export health records
  const exportHistory = () => {
    console.log('Exporting health records');
    // Implement export functionality
  };

  // View detailed lab results
  const viewLabResults = (labId) => {
    console.log('Viewing lab results:', labId);
    // Implement lab results view
  };

  // View visit details
  const viewDetails = (visitId) => {
    console.log('Viewing visit details:', visitId);
    // Implement visit details view
  };

  // Download medical report
  const downloadReport = (visitId) => {
    console.log('Downloading report:', visitId);
    // Implement report download
  };

  // Schedule new appointment
  const scheduleAppointment = () => {
    console.log('Opening appointment scheduler');
    // Implement appointment scheduling
  };

  // View all medications
  const viewAllMedications = () => {
    console.log('Viewing all medications');
    // Implement medications view
  };

  // Load more history
  const loadMoreHistory = () => {
    console.log('Loading more history');
    // Implement pagination
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="header">
        <div className="header-container">
          <div className="header-content">
            <h1 className="header-title">Health History</h1>
            <div className="header-actions">
              <select className="timeframe-filter">
                <option value="all">All Time</option>
                <option value="year">Past Year</option>
                <option value="6months">Past 6 Months</option>
                <option value="3months">Past 3 Months</option>
              </select>
              <button onClick={exportHistory} className="export-button">
                Export Records
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {/* Summary Cards */}
        <div className="summary-cards">
          <div className="summary-card">
            <h3 className="card-title">Latest Vitals</h3>
            <div className="card-content">
              <p className="vital-item">Blood Pressure: <span>120/80 mmHg</span></p>
              <p className="vital-item">Heart Rate: <span>72 bpm</span></p>
              <p className="vital-item">Temperature: <span>98.6°F</span></p>
              <p className="vital-item">Weight: <span>150 lbs</span></p>
            </div>
            <p className="update-date">Last updated: 2024-03-15</p>
          </div>

          <div className="summary-card">
            <h3 className="card-title">Upcoming Appointments</h3>
            <div className="card-content">
              <div className="appointment-item">
                <p>Annual Physical</p>
                <p>2024-04-15</p>
              </div>
              <div className="appointment-item">
                <p>Dental Checkup</p>
                <p>2024-05-01</p>
              </div>
            </div>
            <button onClick={scheduleAppointment} className="action-link">
              Schedule New Appointment
            </button>
          </div>

          <div className="summary-card">
            <h3 className="card-title">Active Medications</h3>
            <div className="card-content">
              <div className="medication-item">
                <p className="medication-name">Lisinopril 10mg</p>
                <p className="medication-dosage">1 tablet daily</p>
              </div>
              <div className="medication-item">
                <p className="medication-name">Metformin 500mg</p>
                <p className="medication-dosage">2 tablets daily</p>
              </div>
            </div>
            <button onClick={viewAllMedications} className="action-link">
              View All Medications
            </button>
          </div>
        </div>

        {/* Timeline */}
        <div className="timeline-container">
          <div className="timeline-header">
            <div className="timeline-header-content">
              <h2 className="timeline-title">Medical Timeline</h2>
              <div className="timeline-filters">
                <button onClick={() => filterHistory('all')} className="filter-button">All</button>
                <button onClick={() => filterHistory('visits')} className="filter-button">Visits</button>
                <button onClick={() => filterHistory('labs')} className="filter-button">Lab Results</button>
                <button onClick={() => filterHistory('medications')} className="filter-button">Medications</button>
              </div>
            </div>
          </div>

          <div className="timeline-entries">
            <div className="timeline-entry">
              <div className="entry-date">2024-03-15</div>
              <div className="entry-content visit">
                <div className="entry-header">
                  <h4>Regular Checkup</h4>
                  <span className="entry-tag">Visit</span>
                </div>
                <p className="entry-description">
                  Annual physical examination with Dr. Smith. All vitals normal.
                  Blood pressure slightly elevated, recommended lifestyle changes.
                </p>
                <div className="entry-actions">
                  <button onClick={() => viewDetails('visit-123')}>View Details</button>
                  <button onClick={() => downloadReport('visit-123')}>Download Report</button>
                </div>
              </div>
            </div>

            <div className="timeline-entry">
              <div className="entry-date">2024-03-10</div>
              <div className="entry-content lab">
                <div className="entry-header">
                  <h4>Blood Work Results</h4>
                  <span className="entry-tag">Lab Result</span>
                </div>
                <div className="lab-results">
                  <p>Complete Blood Count (CBC) and Comprehensive Metabolic Panel (CMP)</p>
                  <div className="lab-values">
                    <div>
                      <p className="lab-label">Glucose</p>
                      <p className="lab-value">95 mg/dL</p>
                    </div>
                    <div>
                      <p className="lab-label">Cholesterol</p>
                      <p className="lab-value">180 mg/dL</p>
                    </div>
                  </div>
                </div>
                <button onClick={() => viewLabResults('lab-456')} className="view-results">
                  View Full Results
                </button>
              </div>
            </div>

            <div className="timeline-entry">
              <div className="entry-date">2024-03-01</div>
              <div className="entry-content medication">
                <div className="entry-header">
                  <h4>Medication Change</h4>
                  <span className="entry-tag">Medication</span>
                </div>
                <p className="entry-description">
                  Started Lisinopril 10mg for blood pressure management.
                  Take 1 tablet daily in the morning.
                </p>
                <div className="prescribed-by">Prescribed by: Dr. Smith</div>
              </div>
            </div>

            <div className="timeline-entry">
              <div className="entry-date">2024-02-15</div>
              <div className="entry-content vaccine">
                <div className="entry-header">
                  <h4>Immunization</h4>
                  <span className="entry-tag">Vaccine</span>
                </div>
                <p className="entry-description">
                  Flu shot administered. Next dose due in 1 year.
                </p>
                <div className="administered-by">Administered by: Nurse Johnson</div>
              </div>
            </div>
          </div>

          <div className="load-more">
            <button onClick={loadMoreHistory} className="load-more-button">
              Load More History
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HealthHistory;