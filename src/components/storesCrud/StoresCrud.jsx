import React from 'react';
import { Link } from 'react-router-dom';
import CustomTable from '../customTable/Table';


const StoresCRUD = ({ storesData }) => {
  return (
    <div>
      <h2>Stores</h2>
      <Link to="/stores/create">Create Store</Link>
      <CustomTable data={storesData} />
    </div>
  );
};

export default StoresCRUD;
