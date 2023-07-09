import React from 'react';
import { RiDashboardLine, RiContactsLine, RiCalendarLine } from 'react-icons/ri';
import './Header.css'; // Import your custom styles for the header

function Header() {
    return (
      <header className="header">
      <h1>CRM Application</h1>
      <nav className="nav-menu">
        <ul>
          <li>
            <RiDashboardLine />
            Dashboard
          </li>
          <li>
            <RiContactsLine />
            Contacts
          </li>
          <li>
            <RiCalendarLine />
            Calendar
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header


{/* <Header/>
<div className="search_sort">
  <div className="first_search">
    <select name="" id=""> 
      <option value="">Sort by Name</option>
      <option value="">Sort by Date</option>
    </select>
  </div>
  <div className="second_search">
    <label For="list">Search by Name : </label>
    <input type="text" id='list'/>
  </div> */}