import './App.css';
import React from 'react';
import Form from './pages/Form';
import CurrentCertsTable from './pages/CurrentCerts';
function App() {
  // const [data, setData] = useState([]);
  // const [employee, setEmployee] = useState({
  //   employeeid: 0,
  //   firstname: '',
  //   lastname: '',
  //   age: 0,
  //   gender: '',
  // });

  // const setInput = (e) => {
  //   const { name, value } = e.target;
  //   // console.log(name, value);
  //   if (name === 'employeeid' || name === 'age') {
  //     setEmployee((prevState) => ({
  //       ...prevState,
  //       [name]: parseInt(value),
  //     }));
  //     return;
  //   }
  //   setEmployee((prevState) => ({
  //     ...prevState,
  //     [name]: value,
  //   }));
  // };

  // const getData = async () => {
  //   console.log(employee);
  //   const newData = await axios.post('http://localhost:4000/api', {
  //     name: employee.firstname,
  //   });
  //   console.log(newData.data[0]);
  //   setData(newData.data[0]);
  //   if (newData.data[0] === undefined) {
  //     alert('No employee found');
  //   }
  // };

  // const createData = async () => {
  //   console.log(employee);
  //   const newData = await axios.post('http://localhost:4000/quit', {
  //     ...employee,
  //   });
  //   console.log(newData);
  //   setData(newData.data[0]);
  // };

  // const deleteData = async () => {
  //   console.log(employee);
  //   const newData = await axios.delete('http://localhost:4000/delete', {
  //     data: {
  //       employeeid: employee.employeeid,
  //     },
  //   });
  //   console.log(newData);
  //   setData(newData);
  //   alert(`Employee ${employee.firstname} ${employee.lastname} deleted`);
  // };

  // const getAllData = async () => {
  //   console.log(employee);
  //   const newData = await axios.get('http://localhost:4000/all', {
  //     ...employee,
  //   });
  //   console.log(newData);
  //   setData(newData);
  // };

  // return (
  //   <div className="App">
  //     <input
  //       type="number"
  //       name="employeeid"
  //       placeholder="Employee ID"
  //       onChange={setInput}
  //     ></input>
  //     <input
  //       name="firstname"
  //       placeholder="First Name"
  //       onChange={setInput}
  //     ></input>
  //     <input
  //       name="lastname"
  //       placeholder="Last Name"
  //       onChange={setInput}
  //     ></input>
  //     <input
  //       type="number"
  //       name="age"
  //       placeholder="Age"
  //       onChange={setInput}
  //     ></input>
  //     <input name="gender" placeholder="Gender" onChange={setInput}></input>
  //     <button className="searchButton" onClick={() => getData()}>
  //       Search By First Name
  //     </button>
  //     <button onClick={() => createData()}>Create</button>
  //     <button className="deleteButton" onClick={() => deleteData()}>
  //       Delete
  //     </button>
  //     <button onClick={() => getAllData()}>Get All</button>
  //     <p>Employee ID: {data.employeeid}</p>
  //     <p>First Name: {data.firstname}</p>
  //     <p>Last Name: {data.lastname}</p>
  //     <p>Age: {data.age}</p>
  //     <p>Gender: {data.gender}</p>
  //   </div>
  // );
  return (
    <div className="App">
      <Form />
      <CurrentCertsTable />
    </div>
  );
}

export default App;

// ! To try to test this code, we would have to comment out a lot of the current build due to current project state. Keep for study purposes.
// * This is the original code that was used to fetch data from the backend. It was replaced with the axios code below. This is before we added React Component for the frontend.
// const getData = async (url) => {
//   const newData = await fetch(url, {
//     method: 'GET',
//     headers: {
//       'content-type': 'application/json',
//       Accept: 'application/json',
//     },
//   }).then((res) => res.json());
//   console.log(newData);
//   setData(newData.result);

// * Using axios instead of fetch, see code below, this is testing just the server side get request to /api and logging the result to the console

// const getData = async (url) => {
//   const newData = await axios.get(url);
//   console.log(newData.data);
// };

// getData('/api');
