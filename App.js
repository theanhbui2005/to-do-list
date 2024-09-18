import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [job, setJob] = useState(''); 
  const [jobs, setJobs] = useState([]); 

  
  useEffect(() => {
    const storedJobs = JSON.parse(localStorage.getItem('jobs')); 
    if (storedJobs) {
      setJobs(storedJobs); 
    }
  }, []);

  const handleAddJob = (e) => {
    e.preventDefault(); 
    if (job.trim()) {  
      const updatedJobs = [...jobs, job]; 
      setJobs(updatedJobs);  
      localStorage.setItem('jobs', JSON.stringify(updatedJobs)); 
      setJob('');  
    }
  };

  return (
    <div className="App">
      <h1>To do list</h1>
      <form onSubmit={handleAddJob}>
        Job content:
        <input
          type="text"
          name="name"
          value={job}
          onChange={(e) => setJob(e.target.value)} 
        />
        <br />
        <button className="add" type="submit">Add</button>
      </form>

      <ul>
        {jobs.map((job, index) => (
          <li key={index}>{job}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
