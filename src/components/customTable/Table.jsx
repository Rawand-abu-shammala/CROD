// components/customTable.jsx
import React from 'react';

const CustomTable = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Cities</th>
          {/* يمكنك إضافة المزيد من الأعمدة حسب الحاجة */}
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.cities.join(', ')}</td>
            {/* يمكنك إضافة مزيد من البيانات هنا */}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CustomTable;
