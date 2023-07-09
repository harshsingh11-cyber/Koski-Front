import React, { useEffect, useState } from 'react';
import './Home.css';
import axios from 'axios';
import User from './User';
import More from './More';
import Header from './Header';
import Footer from './Footer';


let page = 1;
let limit = 10;

const baseUrl = "https://koski-back.onrender.com";

function Home() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [date, setDate] = useState('');
  const [about, setAbout] = useState('');
  const [pos, setPos] = useState('');
  const [lev, setLev] = useState('');
  const [sort, setSort] = useState(true);

  const [data, setData] = useState([]);
  const [bol, setBol] = useState(false);
  const [search,setSearch] = useState('');

  const [id, setUpd] = useState(0);
  const [sortOption, setSortOption] = useState('name');

  function getDataC() {
    axios.get(`${baseUrl}/getcust`).then((res) => {
      setData(res.data)
    }).catch((error) => console.log(error));
    console.log(data);
  }

  useEffect(() => {
    getDataC();
  }, []);



  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    // You can access the form data from the state variables (name, email, phone, address, dob, additionalInfo)
    console.log(name, email, phone, address, date, about);
    axios.post(`${baseUrl}/customer`, { name, email, phone, pos, lev, address, date, about }).then((res) => {
      console.log(res.data);
      alert("successfully submitted ....");
      getDataC();
    })
      .catch((error) => {
        console.log(error);
      });
    // Reset the form fields
    setName('');
    setEmail('');
    setPhone('');
    setAddress('');
    setDate('');
    setAbout('');
    setPos("");
    setLev('');
  };

  function UpdateOne(e) {
    console.log(e);
    setUpd(e);
    setBol(true);
  }

  function updateO(e) {
    console.log("final update", id);
    e.preventDefault();
    console.log("update one ");

    axios.put(`${baseUrl}/update/${id}`, { name, email, phone, pos, lev, address, date, about }).then((res) => {
      console.log(res.data);
      alert("Data updated....");
      setBol(false);
      setUpd(0);
      getDataC();
      setName('');
      setEmail('');
      setPhone('');
      setAddress('');
      setDate('');
      setAbout('');
      setPos('');
      setLev('');
    }).catch((error) => {
      console.log(error);
    });
  }

  function deleteOne(e) {
    let _id = e;
    axios.delete(`${baseUrl}/delete`, { _id }).then((res) => {
      console.log("deleted");
      getDataC();
    }).catch((error) => console.log(error));

  }


  const handleSortChange = (e) => {
    setSortOption(e.target.value);
    getDataC();
    setSort(false);
    setSearch('');
  };
  const sortedData = [...data].sort((a, b) => {
    if (sortOption === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortOption === 'date') {
      return new Date(a.date) - new Date(b.date);
    }
    return 0;
  });


  console.log(data);


const searchFunction = async (el)=>{
  setSort(true);
  const res = await axios.get(`${baseUrl}/search/${el}`);
  setData(res.data);
  console.log(data);
}


  return (
    <div>
      <Header/>
      <div className='registration-form'>
        <h2>Registration Form</h2>
        <form>
          <label>
            Name:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <br />
          <label>
            Email:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <br />
          <label>
            Phone Number:
            <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
          </label>
          <br />
          <label>
            Position :
            <input type="text" value={pos} onChange={(e) => setPos(e.target.value)} />
          </label>
          <br />
          <label>
            Access Level :
            <input type="email" value={lev} onChange={(e) => setLev(e.target.value)} />
          </label>
          <br />
          <label>
            Address:
            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
          </label>
          <br />
          <label>
            Date :
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
          </label>
          <br />
          <label>
            Additional Information:
            <textarea value={about} onChange={(e) => setAbout(e.target.value)} />
          </label>
          <br />
          {
            bol ? <button onClick={updateO}>Update</button> : <button className='button-20' onClick={handleSubmit}>Register</button>
          }
        </form>
      </div>


      <div className="search_sort">
        <div className="first_search">
          <label htmlFor="sort"> Sort by : </label>
          <select id="sort" value={sortOption} onChange={handleSortChange}>
            <option value="name">Name</option>
            <option value="date">Date</option>
          </select>
        </div>
        <div className="second_search">
          <label For="list"> Search by Name : </label>
          <input type="text" id='list' value={search} onChange={(e)=> setSearch(e.target.value)}/>
          <button className='button-33' onClick={()=>searchFunction(search)}> search </button>
        </div>
      </div>
       

<div className="parent_hold">
<div className='data_hold'>

{
  sort
    ? data.map((elm,ind) => (
      console.log(ind),
      <User
        d = {ind}
        name={elm.name}
        email={elm.email}
        phone={elm.phone}
        update={UpdateOne}
        _id={elm._id}
        deleteA={deleteOne}
      />
    ))
    : sortedData.map((elm,ind) => (
      <User
      d = {ind}
        name={elm.name}
        email={elm.email}
        phone={elm.phone}
        update={UpdateOne}
        _id={elm._id}
        deleteA={deleteOne}
      />
    ))
}



</div>
</div>
     

<Footer/>
    </div>
  )
}

export default Home;
