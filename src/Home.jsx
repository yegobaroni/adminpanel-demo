// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill,} from 'react-icons/bs';
import {LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function Home() {


const data = [
  {
    name: 'Feb',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Mar',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Apr',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'May',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Jun',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Jul',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Aug',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

  const productsCount = data[0].pv; // Extracting products count
  const categoriesCount = data[1].pv; // Extracting categories count
  const customersCount = data[2].pv; // Extracting customers count
  const alertsCount = data[3].pv; //Extracting alters count

  return (
    <main className='main-container'>
      <div className='main-title'>
        <h3>DASHBOARD</h3>
      </div>
      <div className='main-cards'>
        <div className='card'>
            <div className='card-inner'>
              <h3>PRODUCTS</h3>
              <BsFillArchiveFill className='card_icon'/>
            </div>
            <h1>{productsCount}</h1>
        </div>
        <div className='card'>
            <div className='card-inner'>
              <h3>CATEGORIES</h3>
              <BsFillGrid3X3GapFill className='card_icon'/>
            </div>
            <h1>{categoriesCount}</h1>
        </div>
        <div className='card'>
            <div className='card-inner'>
              <h3>CUSTOMERS</h3>
              <BsPeopleFill className='card_icon'/>
            </div>
            <h1>{customersCount}</h1>
        </div>
        <div className='card'>
            <div className='card-inner'>
              <h3>ALTERS</h3>
              <BsFillBellFill className='card_icon'/>
            </div>
            <h1>{alertsCount}</h1>
        </div>
      </div>

      <div className='charts'>
          <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" />
          <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
      </div>
    </main>
  )
}

export default Home;