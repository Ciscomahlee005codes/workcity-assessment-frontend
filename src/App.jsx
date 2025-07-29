import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loader from './Components/Loader/Loader';
import DelayLoader from './Components/Loader/DelayLoader';
import DashboardPage from './Pages/DashboardPage/DashboardPage';
import ProfilePage from './Pages/ProfilePage/ProfilePage';
import ManagementPage from './Pages/ManagementPage/ManagementPage';
import ProjectPage from './Pages/ProjectPage/ProjectPage';
import SettingsPage from './Pages/SettingsPage/SettingsPage';

const HomePage = DelayLoader(() => import("./Pages/HomePage/HomePage"));
const LoginPage = DelayLoader(() => import("./Pages/LoginPage/LoginPage"));

function App() {
  

  return (
    <div className="app">
     <Suspense fallback={<Loader />}>
     <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/dashboard/home' element={<DashboardPage />} />
      <Route path='/dashboard/profile' element={<ProfilePage />} />
       <Route path='/dashboard/userManagement' element={<ManagementPage />} />
       <Route path='/dashboard/projects' element={<ProjectPage />} />
        <Route path='/dashboard/settings' element={<SettingsPage />} />
     </Routes>
     </Suspense>
    </div>
  )
}

export default App
