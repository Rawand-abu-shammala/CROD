// pages/Store.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import { getStoreById } from '../api';
import { getStoreById } from '../../api/stores';

const Store = () => {
  const { id } = useParams();
  const [store, setStore] = useState({});

  useEffect(() => {
    // استرجاع بيانات المتجر المحدد باستخدام API عند تحميل المكون
    async function fetchStoreData() {
      try {
        const data = await getStoreById(id);
        setStore(data);
      } catch (error) {
        console.error('Error fetching store:', error);
        // يمكنك إضافة منطق إضافي لعرض رسالة خطأ للمستخدم هنا
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
      {/* يمكنك تنسيق وعرض مزيد من تفاصيل المتجر هنا */}
    </div>
  );
};

export default Store;
