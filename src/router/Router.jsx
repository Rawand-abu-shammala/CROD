// import React from "react";
// import { Outlet, Route, Routes } from "react-router";
// import { Paths } from "./Paths";
// import Home from "../pages/home/Home";
// import Store from "../pages/storeDetails/Store";
// import CreateStore from "../pages/createStore/CreateStore";
// import EditStore from "../pages/editStore/EditStore";
// const Router = () => {
//   return (
//     <Routes>
//       <Route path={Paths.stores.Home} element={<Outlet />}>
//         <Route index element={<Home />}></Route>
//         <Route path={Paths.stores.view} element={<Store />}></Route>
//         <Route path={Paths.stores.create} element={<CreateStore />}></Route>
//         <Route path={Paths.stores.edit} element={<EditStore />}></Route>
//       </Route>
//       <Route path={Paths.about} element={<h1>about</h1>}></Route>
//       <Route path={Paths.contact} element={<h1>contact</h1>}></Route>
//     </Routes>
//   );
// };

// export default Router;






// router/Router.jsx
import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import { Paths } from './Paths';
// import Home from '../pages/Home';
// import Store from '../pages/Store';
// import CreateStore from '../pages/CreateStore';
// import EditStore from '../pages/EditStore';

import Home from '../pages/home/Home';
import Store from '../pages/storeDetails/Store';
import CreateStore from '../pages/createStore/CreateStore';
import EditStore from '../pages/editStore/EditStore';



const Router = () => {
  return (
    <Routes>
      <Route path={Paths.stores.Home} element={<Outlet />}>
        <Route index element={<Home />} />
        <Route path={Paths.stores.view} element={<Store />} />
        <Route path={Paths.stores.create} element={<CreateStore />} />
        <Route path={Paths.stores.edit} element={<EditStore />} />
      </Route>
      <Route path={Paths.about} element={<h1>About</h1>} />
      <Route path={Paths.contact} element={<h1>Contact</h1>} />
    </Routes>
  );
};

export default Router;
