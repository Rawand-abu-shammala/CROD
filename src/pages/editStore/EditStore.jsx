import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; 
import { getStoreById, updateStore } from '../../api/stores';
import StoreForm from '../../components/storeForm/StoreForm'; 

const EditStore = () => {
  const { id } = useParams();
  const navigate = useNavigate(); 
  const [storeData, setStoreData] = useState({
    name: '',
    cities: '',
  });

  useEffect(() => {
    async function fetchStoreData() {
      try {
        const data = await getStoreById(id);
        setStoreData(data);
      } catch (error) {
        console.error('Error fetching store:', error);
      }
    }

    fetchStoreData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStoreData({ ...storeData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateStore(id, storeData);
      alert('Store updated successfully.');
      navigate(`/stores/${id}/view`); 
    } catch (error) {
      console.error('Error updating store:', error);
    }
  };

  return (
    <div>
      <h1>Edit Store</h1>
      <StoreForm storeData={storeData} handleChange={handleChange} handleSubmit={handleSubmit} />
    </div>
  );
};

export default EditStore;
