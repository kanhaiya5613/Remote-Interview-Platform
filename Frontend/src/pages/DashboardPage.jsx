import { useNavigate } from 'react-router'
import Navbar from '../components/Navbar'
import { useUser } from '@clerk/clerk-react'
import { useState } from 'react'
import { useActiveSessions, useCreateSession, useMyRecentSessions } from "../hooks/useSessions.js"
import WelcomeSection from "../components/WelcomeSection.jsx"
export default function DashboardPage() {
  const navigate = useNavigate()
  const { user } = useUser()
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [roomConfig, setRoomConfig] = useState({ problem: "", difficulty: "" });

  const createSessionMutation = useCreateSession();

  const { data: activeSessionsData, isLoading: loadingActiveSessions } = useActiveSessions();
  const { data: recentSessionsData, isLoading: loadingRecentSessions } = useMyRecentSessions();


  const handleCreateRoom = () => {
    if (!roomConfig.problem || !roomConfig.difficulty) return;

    createSessionMutation.mutate(
      {
        problem: roomConfig.problem,
        difficulty: roomConfig.difficulty,
      },
      {
        onSuccess: (data) => {
          setShowCreateModal(false);
          navigate(`/session/${data.session._id}`);
        }
      }
    )
  }
  const activeSessions = activeSessionsData?.sessions || [];
  const recentSessions = recentSessionsData?.sessions || [];
  return <>
    <div className='min-h-screen bg-base-300'>
      <Navbar />
      <WelcomeSection onCreateSession={() => setShowCreateModal} />
    </div>
  </>
}
