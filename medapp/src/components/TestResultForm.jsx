// TestResultForm.jsx
import React, { useState } from 'react';
import '../css/TestResultForm.css';
import {Api} from '../Api';

const TestResultForm = ({addData,showResultsFormModal}) => {
    const [formData, setFormData] = useState({
        //patientId: '1',
        patientEmail: '',
        testName: '',
        status: 'in_progress',
        testResults: '',
        attachments: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleFileChange = (e) => {
        const files = e.target.files[0];
        setFormData(prevData => ({
            ...prevData,
            attachments:files
        }));
    };

    const handleSubmit = async (e) => {
    try{
        e.preventDefault();
        // Handle form submission logic here
        const res = await Api.post('api/post/results/', formData);
        console.log(res,'yoloyyy')
        addData(res)
        showResultsFormModal()
    }catch(error){
        console.log('error',error)
    }
        
    };

    const removeAttachment = (index) => {
        setFormData(prevData => ({
            ...prevData,
            attachments: prevData.attachments.filter((_, i) => i !== index)
        }));
    };

    // const saveResults = async () => {
    //   try{ const res = await Api.get('api/post/results/');
    //     if (res.status === 200) {
    //         alert('Test results saved successfully!');
    //         setResults(res)
    //     } else {
    //         alert('An error occurred. Please try again.');
    //     }
    //   }catch(error){
    //     console.error('error ', error)
    //   }
    // }

    return (
        <div className="test-result-container">
            <h1>Medical Test Results Entry</h1>
            
            <form onSubmit={handleSubmit} className="test-result-form">
                {/* <div className="form-group">
                    <label htmlFor="patientId">Patient ID:</label>
                    <input
                        type="text"
                        id="patientId"
                        name="patientId"
                        value={formData.patientId}
                        onChange={handleInputChange}
                        required
                    />
                </div> */}

                <div className="form-group">
                    <label htmlFor="patientEmail">Patient Email:</label>
                    <input
                        type="email"
                        id="patientEmail"
                        name="patientEmail"
                        value={formData.patientEmail}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="testName">Test Name:</label>
                    <input
                        type="text"
                        id="testName"
                        name="testName"
                        value={formData.testName}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                {/* <div className="form-group">
                    <label htmlFor="date">Test Date:</label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        required
                    />
                </div> */}

                <div className="form-group">
                    <label htmlFor="status">Status:</label>
                    <select
                        id="status"
                        name="status"
                        value={formData.status}
                        onChange={handleInputChange}
                        required
                    >
                        <option value="in_progress">In Progress</option>
                        <option value="completed">Completed</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="testResults">Test Results & Notes:</label>
                    <textarea
                        id="testResults"
                        name="testResults"
                        value={formData.testResults}
                        onChange={handleInputChange}
                        rows="6"
                        required
                    ></textarea>
                </div>

                <div className="form-group">
                    <label htmlFor="attachments">Attach Documents:</label>
                    <div className="file-upload-container">
                        <input
                            type="file"
                            id="attachments"
                            onChange={handleFileChange}
                            multiple
                            className="file-input"
                        />
                        <label htmlFor="attachments" className="file-upload-button">
                            Choose Files
                        </label>
                    </div>
                </div>

                {formData.attachments&& (
                    <div className="attachments-list">
                        <h3>Attached Files:</h3>
                        <ul>
                                <li>
                                    {formData.attachments.name}
                                    <button
                                        type="button"
                                        // onClick={() => removeAttachment(index)}
                                        className="remove-file"
                                    >
                                        ×
                                    </button>
                                </li>
                            
                        </ul>
                    </div>
                )}

                <div className="form-actions">
                    <button type="submit" className="submit-button">
                        Save Test Results
                    </button>
                    <button type="reset" className="reset-button">
                        Clear Form
                    </button>
                </div>
            </form>
        </div>
    );
};

export default TestResultForm;