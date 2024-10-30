import React, { useEffect, useState } from 'react';
import '../css/PatientResults.css';
import TestResultForm from '../components/TestResultForm';
import { Api } from '../Api';

const PatientResults = () => {
  const [showForm, setShowForm] = useState(false);
  const [userData,setUserData]=useState({username:'',email:'',uuid:''})
  const [results, setResults] = useState([
    {
      attachment: 'http://192.168.100.34:8000/document/alpha_himself_cropped.jpg',
      created: "2024-10-29T22:08:15.647074Z",
      id: 1,
      status: "in_progress",
      testName: "nnn",
      testResults: "2222",
      updated: "2024-10-29T22:11:43.000934Z",
      user: 1
    }
  ]);

  useEffect(()=>{
     setUserData({
      username:localStorage.getItem('username'),
      email:localStorage.getItem('email'),
      uuid:localStorage.getItem('uuid')
     })
  },[])
  const addData=(data)=>{
    setResults(
      [...results,data]
    )
  }

  const showResultsFormModal = () => {
    setShowForm((prevShowForm) => !prevShowForm);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await Api.get('api/post/results/');
          setResults(res); // Set the response data to results
        
      } catch (error) {
        console.error("Failed to fetch results:", error);
      }
    };
    fetchData();
  }, []);

  const downloadReport = (url) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = url.split('/').pop();
    link.click();
  };

  return (
    <div className="bg-gray-100">
      <header className="bg-green-600 text-white p-4">
        <h1 className="text-2xl font-bold">Patient Record Keep - Test Results</h1>
      </header>

      <main className="container mx-auto p-6">
        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-xl font-semibold mb-4">Patient Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Patient Name:</label>
              <p className="text-lg font-medium">{userData.username}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Date of Birth:</label>
              <p className="text-lg font-medium">12/01/1985</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">uuid Number:</label>
              <p className="text-lg font-medium">{userData.uuid}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email:</label>
              <p className="text-lg font-medium">{userData.email}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <span className='flexSpace'>
            <h2 className="text-xl font-semibold mb-4">Test Results</h2>
            <button onClick={showResultsFormModal}> {showForm ? 'x' : '+'} </button>
          </span>
          <div className='overflow-y-scroll max-h-72'>
          {showForm ? <TestResultForm addData={addData} showResultsFormModal={showResultsFormModal}/> :
          
          <table className="min-w-full bg-white " >
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left py-2 px-4">Test Name</th>
                <th className="text-left py-2 px-4">Date</th>
                <th className="text-left py-2 px-4">Result</th>
                <th className="text-left py-2 px-4">Status</th>
                <th className="text-left py-2 px-4">Actions</th>
              </tr>
            </thead>
            <tbody >
              {results.map((element, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                  <td className="py-2 px-4">{element.testName}</td>
                  <td className="py-2 px-4">{new Date(element.created).toLocaleDateString()}</td>
                  <td className="py-2 px-4">{element.testResults}</td>
                  <td className="py-2 px-4"><span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full">{element.status}</span></td>
                  <td className="py-2 px-4">
                    <button onClick={() => downloadReport(element.attachment)} className="text-green-600 underline">
                      Download Report
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>}
          </div>
        </div>

        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mt-6">
          <p className="font-semibold">Note:</p>
          <p>Some test results are still pending. You will be notified once they are available.</p>
        </div>

        <div className="mt-6">
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg shadow hover:bg-green-700">
            Download All Results
          </button>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-4 mt-8">
        <p>&copy; 2024 Patient Record Keep. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default PatientResults;
