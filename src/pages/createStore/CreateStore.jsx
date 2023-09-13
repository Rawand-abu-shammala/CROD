import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { createStore } from '../../api/stores';
import StoreForm from '../../components/storeForm/StoreForm';

const CreateStore = () => {
  const navigate = useNavigate();
  const [storeData, setStoreData] = useState({
    name: '',
    cities: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStoreData({ ...storeData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createStore(storeData);
      alert('Store created successfully.');
      navigate('/stores'); 
    } catch (error) {
      console.error('Error creating store:', error);
    }
  };

  return (
    <div>
      <h1>Create Store</h1>
      <StoreForm storeData={storeData} handleChange={handleChange} handleSubmit={handleSubmit} />
    </div>
  );
};

export default CreateStore;
