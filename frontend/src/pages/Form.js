import React, { useState, useContext } from 'react';
import axios from 'axios';
import './Form.css';

const Form = () => {
  const [data, setData] = useState([]);
  const [certification, setCertification] = useState({
    industry: '',
    name: '',
    description: '',
  });

  const setInput = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);
    setCertification((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const createData = async () => {
    console.log(certification);
    const newData = await axios.post(
      'http://localhost:4000/certifications',
      certification
    );
    console.log(newData);
    setData(newData.data[0]);
    console.log(data);
  };

  return (
    <div>
      <div className="Form">
        <h1 id="Form_Header">Add A Certification</h1>
        <form>
          <label htmlFor="industry">Industry</label>
          <input type="text" name="industry" onChange={setInput} />
          <label htmlFor="name">Name</label>
          <input type="text" name="name" onChange={setInput} />
          <label htmlFor="description">Description</label>
          <input type="text" name="description" onChange={setInput} />
          <button type="button" onClick={createData}>
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
