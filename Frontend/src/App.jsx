import {  useUser } from '@clerk/clerk-react'
import { Navigate, Route, Routes } from 'react-router'
import HomePage from './pages/HomePage';
import ProblemsPage from './pages/ProblemsPage';
import DashboardPage from './pages/DashboardPage';
import { Toaster } from "react-hot-toast";
import ProblemPage from './pages/ProblemPage';
function App() {
  const { isSignedIn, isLoaded } = useUser();
  // this will fet rif of flickring effect
  console.log(import.meta.env.VITE_API_URL)
  if (!isLoaded) return null;
  return (
    <>
      <Toaster toastOptions={{ duration: 3000 }} />
      <Routes>
        <Route path="/" element={!isSignedIn ? <HomePage /> : <Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={isSignedIn ? <DashboardPage /> : <Navigate to="/" replace />} />
        <Route path="/problems" element={isSignedIn ? <ProblemsPage /> : <Navigate to="/" replace />} />
        <Route path="/problem/:id" element={isSignedIn ? <ProblemPage /> : <Navigate to="/" replace/>} />

      </Routes>

    </>
  )
}

export default App
