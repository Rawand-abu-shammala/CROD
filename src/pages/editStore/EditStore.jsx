// pages/EditStore.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // استخدام useNavigate بدلاً من useHistory
import { getStoreById, updateStore } from '../../api/stores';
import StoreForm from '../../components/storeForm/StoreForm'; // تأكد من استيراد المكون بشكل صحيح

const EditStore = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // استخدام useNavigate بدلاً من useHistory
  const [storeData, setStoreData] = useState({
    name: '',
    cities: '',
  });

  useEffect(() => {
    // استرجاع بيانات المتجر المحدد باستخدام API عند تحميل المكون
    async function fetchStoreData() {
      try {
        const data = await getStoreById(id);
        setStoreData(data);
      } catch (error) {
        console.error('Error fetching store:', error);
        // يمكنك إضافة منطق إضافي لعرض رسالة خطأ للمستخدم هنا
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
      // إرسال طلب لتحديث المتجر باستخدام API
      await updateStore(id, storeData);
      alert('Store updated successfully.');
      navigate(`/stores/${id}/view`); // استخدام navigate بدلاً من history.push
    } catch (error) {
      console.error('Error updating store:', error);
      // يمكنك إضافة منطق إضافي لعرض رسالة خطأ للمستخدم هنا
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
