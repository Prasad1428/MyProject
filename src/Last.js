import React from 'react';
import DataTable from 'react-data-table-component';
import seat_info from './tabledata';
import './Last.css';




function Last() {
  const columns = [
    {
      name: 'Seat Number',
      selector: 'seat_no',
    },
    
    {
      name: 'Current Price',
      selector: 'current_price',
    },
    {
      name: 'Status',
      selector: 'status',
    },
  ];

  return (
    <div className="last">
      <DataTable
        title=""
        columns={columns}
        data={seat_info} 
        className='custom-datatable'
      />
      <div className="image-container">
        <img src='woman2.jpg' id='woman2' alt='woman2' className='woman-image' />
      </div>
      <div className='seatReport'>
        
        <h2 className='report-title'><div className='color-circle red'></div>Seat availability</h2>
        <p>REPORT:2023-05-18</p>
        <div className='color-circles'>
        <div className='color-circle blue'></div>
        <div className='color-circle yellow'></div>
        <div className='color-circle violet'></div>
        </div>

        
        
        <button className='btn btn-dark'>Submit</button>
      </div>
      <img src='zigzag3.png' id='zigzag3' alt='zigzag3'/> 
    </div>
  );
}

export default Last;
