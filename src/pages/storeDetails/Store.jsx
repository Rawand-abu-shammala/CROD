import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getStoreById } from '../../api/stores';

const Store = () => {
  const { id } = useParams();
  const [store, setStore] = useState({});

  useEffect(() => {
    async function fetchStoreData() {
      try {
        const data = await getStoreById(id);
        setStore(data);
      } catch (error) {
        console.error('Error fetching store:', error);
      }
    }

    fetchStoreData();
  }, [id]);

  return (
    <div>
      <h1>Store Details</h1>
      <p>ID: {store.id}</p>
      <p>Name: {store.name}</p>
      <p>Cities: {store.cities}</p>
    </div>
  );
};

export default Store;
