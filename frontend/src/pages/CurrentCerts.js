import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import './CurrentCerts.css';

const CurrentCertsTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('http://localhost:4000/certifications');
      setData(result.data);
    };
    fetchData();
  }, []);

  const deleteData = async (id) => {
    console.log(id);
    const newData = await axios.delete(
      `http://localhost:4000/certifications/${id}`
    );
    console.log(newData);
    setData(newData.data);
  };

  return (
    <div className="CurrentCertsTable">
      <h3>Current Certifications</h3>
      <table>
        <thead className="static_background">
          <tr>
            <th>Industry</th>
            <th>Name</th>
            <th>Description</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {data.map((certification) => (
            <tr key={certification.id}>
              <td>{certification.industry}</td>
              <td>{certification.name}</td>
              <td>{certification.description}</td>
              <td>{certification.created_at}</td>
              <td>
                <button onClick={() => deleteData(certification.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CurrentCertsTable;
