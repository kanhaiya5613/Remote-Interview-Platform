import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton, useUser } from '@clerk/clerk-react'
import { Navigate, Route, Routes } from 'react-router'
import HomePage from './pages/HomePage';
import ProblemsPage from './pages/ProblemsPage';
import DashboardPage from './pages/DashboardPage';
import { Toaster } from "react-hot-toast";
function App() {
  const { isSignedIn, isLoaded } = useUser();
  // this will fet rif of flickring effect
  if (!isLoaded) return null;
  return (
    <>
      <Toaster toastOptions={{ duration: 3000 }} />
      <Routes>
        <Route path="/" element={!isSignedIn ? <HomePage /> : <Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={isSignedIn ? <DashboardPage /> : <Navigate to="/" replace />} />
        <Route path="/problems" element={isSignedIn ? <ProblemsPage /> : <Navigate to="/" replace />} />
        <Route path="/problems/:id" element={isSignedIn ? <ProblemsPage /> : <Navigate to="/" replace />} />

      </Routes>

    </>
  )
}

export default App
