import React, { createContext, useState, useEffect } from 'react';


const baseUrl = "http://localhost:4000";
// Create the data context
export const DataContext = createContext();

// Create the data provider component
export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const [ind,setInd] = useState(1);

  useEffect(() => {
    // Fetch data from an API or any other data source
    const fetchData = async () => {
      try {
        const response = await fetch(`${baseUrl}/getcust`);
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const updateInd = (el) => {
    setInd(el);
  }

  const value = { ind, data , updateInd };

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
};
