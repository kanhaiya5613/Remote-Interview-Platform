import React from 'react'
import { PROBLEMS} from "../data/problems"
import { Code2Icon } from 'lucide-react';
function CreateSessionModal({
    isOpen,
    onClose,
    roomConfig,
    setRoomConfig,
    onCreateRoom,
    isCreating
}) {
    const problems = Object.values(PROBLEMS)
    if(!isOpen) return null;
  return (
    <div className='modal modal-open'>
        <div className='modal-box max-w-2xl'>
            <h3 className='font-bold text-2xl mb-6'> Create New Session</h3>

            <div className='space-y-8'>
                {/* PROBLEM SECTION */}
                <div className='space-y-2'>
                    <label className='label'>
                        <span className='label-text font-semibold'>
                            Select Problem
                        </span>
                    </label>
                    <select 
                    className='select w-full'
                    value={roomConfig.problem}
                    onChange={(e)=>{
                        const selectedProblem = problems.find((p)=>p.title === e.target.value);
                        setRoomConfig({
                            difficulty: selectedProblem.difficulty,
                            problem: e.target.value,
                        })
                    }}
                    >
                        <option value="" disabled>
                            Choose a Coding Problem...
                        </option>
                        {problems.map((problem)=>(
                            <option key={problem.id} value={problem.title}>
                                {problem.title} ({problem.difficulty})
                            </option>
                        ))}
                    </select>
                </div>
                {/* ROOM SUMMERY */}
                {roomConfig.problem && (
                    <div className='alert alert-success'>
                        <Code2Icon className='size-5'/>
                        <div>
                            <p className='font-semibold'>Room Summery:</p>
                            <p>
                                Problem: <span className='font-medium'>{roomConfig.problem}</span>
                            </p>
                            <p>
                                Max Participants: <span className='font-medium'>2 (1-on-1 session)</span>
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    </div>
  )
}

export default CreateSessionModal