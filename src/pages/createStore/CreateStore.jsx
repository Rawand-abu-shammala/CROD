// import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
// import { createStore } from '../../api/stores';

// const CreateStore = () => {
//   const history = useHistory();
//   const [storeData, setStoreData] = useState({
//     name: '',
//     cities: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setStoreData({ ...storeData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // إرسال طلب لإنشاء المتجر باستخدام API
//       await createStore(storeData);
//       alert('Store created successfully.');
//       history.push('/stores'); // توجيه المستخدم إلى قائمة المتاجر بعد الإنشاء
//     } catch (error) {
//       console.error('Error creating store:', error);
//       // يمكنك إضافة منطق إضافي لعرض رسالة خطأ للمستخدم هنا
//     }
//   };

//   return (
//     <div>
//       <h1>Create Store</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Name:</label>
//           <input type="text" name="name" value={storeData.name} onChange={handleChange} />
//         </div>
//         <div>
//           <label>Cities:</label>
//           <input type="text" name="cities" value={storeData.cities} onChange={handleChange} />
//         </div>
//         <div>
//           <button type="submit">Create</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default CreateStore;


// pages/CreateStore.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // استخدام useNavigate بدلاً من useHistory
import { createStore } from '../../api/stores';
import StoreForm from '../../components/storeForm/StoreForm'; // تأكد من استيراد المكون بشكل صحيح

const CreateStore = () => {
  const navigate = useNavigate(); // استخدام useNavigate بدلاً من useHistory
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
      // إرسال طلب لإنشاء المتجر باستخدام API
      await createStore(storeData);
      alert('Store created successfully.');
      navigate('/stores'); // استخدام navigate بدلاً من history.push
    } catch (error) {
      console.error('Error creating store:', error);
      // يمكنك إضافة منطق إضافي لعرض رسالة خطأ للمستخدم هنا
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
