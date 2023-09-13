// components/storeForm.jsx
import React from 'react';

const StoreForm = ({ storeData, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={storeData.name} onChange={handleChange} />
      </div>
      <div>
        <label>Cities:</label>
        <input type="text" name="cities" value={storeData.cities} onChange={handleChange} />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default StoreForm;
