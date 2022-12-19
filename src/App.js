import React, { useEffect, useState } from 'react';
import "./App.css"


function App() {
  const [datas, setDatas] = useState()
  const [search, setSearch] = useState('');

  function fetchs() {
    fetch('https://northwind.vercel.app/api/orders')
    .then((res)=>res.json())
    .then((data)=>setDatas(data))
}

  useEffect(()=>{
      fetchs()
  },[datas])

  return (
      <div className='customer-div'>
        <div className='search-div'>
            <input type="text" onChange={(e) => setSearch(e.target.value)} placeholder='Search contacts'/>
        </div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Customer Id</th>
              <th>Ship Name</th>
              <th>Employee ID</th>
            </tr>
          </thead>
          <tbody>
            {datas && datas.filter((item) => {
                return search.toLowerCase() === ''
                  ? item
                  : item.customerId.toLowerCase().includes(search);
              })
              .map((item, index) => (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.customerId}</td>
                  <td>{item.shipName}</td>
                  <td>{item.employeeId}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
  );
}

export default App;
