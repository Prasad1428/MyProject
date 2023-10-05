import React from 'react'
import Highcharts from 'highcharts'
import { useEffect } from 'react';
import 'highcharts/modules/exporting';
import 'highcharts/modules/export-data'; 
import './Graph.css'
import main_via from './chartdata'

function Graph() {

      useEffect(() => {
        // Highcharts configuration options
        const options = {
          chart: {
            type: 'column', // Example chart type (you can customize this)
          },
          title: {
            text: '',
          },
          xAxis: {
            categories: main_via.map((item) => item["0"]), // Example categories
          },
          yAxis: {
            title: {
              text: "Bookings",
            },
            min: 0,      // Set the minimum value to 0
            max: 80,     // Set the maximum value to 80
            tickInterval: 10, // Set the tick interval to 10 to display multiples of 10
          },
          series: [
            {
                name: "Via Booking",
                data: main_via.map((item) => item["1"]), // Via booking counts
              },
            {
              name: "Main Booking",
              data: main_via.map((item) => item["2"]), // Main booking counts
            },
            
          ],
        };
    
        // Create the Highcharts chart
        Highcharts.chart('chartContainer', options);
      }, []);
  return (
    <div id="chartContainer" style={{ width: '100%', height: '400px' }}>
    {}
  </div>
  )
}

export default Graph
