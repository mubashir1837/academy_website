import React from 'react';

const TimeSection = () => {
  return (
    <div id='time' className="admission-section">
      <h2 className=' text-center font-bold '>Time Table</h2>
      <div className=" table-container sm:min-w-md mt-20">
        <table className="timetable">
          <thead >
            <tr >
              <th>Time</th>
              <th>Monday</th>
              <th>Tuesday</th>
              <th>Wednesday</th>
              <th>Thursday</th>
              <th>Friday</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>9:00 AM - 10:00 AM</td>
              <td>Math</td>
              <td>Phsics</td>
              <td>Biology</td>
              <td>Chemistry</td>
              <td>Geography</td>
            </tr>
            <tr>
              <td>10:00 AM - 11:00 AM</td>
              <td>Science</td>
              <td>Math</td>
              <td>History</td>
              <td>English</td>
              <td>Art</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TimeSection;
