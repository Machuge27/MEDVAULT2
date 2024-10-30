import React, { useState } from 'react';
import '../css/PrescriptionPage.css'

const PrescriptionPage = () => {
  const [prescriptions, setPrescriptions] = useState([
    {
      id: 1,
      medicine: "Amoxicillin",
      dosage: "500mg",
      frequency: "3 times daily",
      duration: "7 days",
      status: "Active"
    },
    {
      id: 2,
      medicine: "Ibuprofen",
      dosage: "400mg",
      frequency: "As needed",
      duration: "5 days",
      status: "Completed"
    }
  ]);

  const [showNewPrescription, setShowNewPrescription] = useState(false);
  const [newPrescription, setNewPrescription] = useState({
    medicine: "",
    dosage: "",
    frequency: "",
    duration: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPrescription(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPrescriptions(prev => [...prev, {
      id: prev.length + 1,
      ...newPrescription,
      status: "Active"
    }]);
    setShowNewPrescription(false);
    setNewPrescription({
      medicine: "",
      dosage: "",
      frequency: "",
      duration: "",
    });
  };

  return (
    <div className="prescription-container">
      <header className="prescription-header">
        <h1>My Prescriptions</h1>
        <button 
          className="add-prescription-btn"
          onClick={() => setShowNewPrescription(true)}
        >
          Add New Prescription
        </button>
      </header>

      {showNewPrescription && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>New Prescription</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Medicine Name:</label>
                <input
                  type="text"
                  name="medicine"
                  value={newPrescription.medicine}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Dosage:</label>
                <input
                  type="text"
                  name="dosage"
                  value={newPrescription.dosage}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Frequency:</label>
                <input
                  type="text"
                  name="frequency"
                  value={newPrescription.frequency}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Duration:</label>
                <input
                  type="text"
                  name="duration"
                  value={newPrescription.duration}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="modal-buttons">
                <button type="submit" className="submit-btn">Add Prescription</button>
                <button 
                  type="button" 
                  className="cancel-btn"
                  onClick={() => setShowNewPrescription(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="prescriptions-list">
        {prescriptions.map(prescription => (
          <div key={prescription.id} className="prescription-card">
            <h3>{prescription.medicine}</h3>
            <div className="prescription-details">
              <p><strong>Dosage:</strong> {prescription.dosage}</p>
              <p><strong>Frequency:</strong> {prescription.frequency}</p>
              <p><strong>Duration:</strong> {prescription.duration}</p>
              <span className={status ${prescription.status.toLowerCase()}}>
                {prescription.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrescriptionPage;