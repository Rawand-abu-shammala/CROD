import React from 'react';

const CustomTable = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Cities</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.cities.join(', ')}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CustomTable;
