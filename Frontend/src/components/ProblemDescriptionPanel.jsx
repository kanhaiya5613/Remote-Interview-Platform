import React from 'react'
import { getDifficultyBadgeClass } from '../lib/utils'

function ProblemDescriptionPanel({ problem, currentProblemId, onProblemChange, allProblems }) {
  return (

    <div className='h-full overflow-y-auto bg-base-200'>
      {/*  HEADER */}
      <div className='p-6 bg-base-100 border-b border-base-300'>
        <div className='flex items-start justify-between mb-3'>
          <h1 className='text-3xl font-bold text-base-content'>{problem.title}</h1>
          <span className={`badge ${getDifficultyBadgeClass(problem.difficulty)}`}>
            {problem.difficulty}
          </span>
        </div>
        <p className='text-base-content/60'>{problem.category}</p>
        {/* Problem Selector */}
        <div className='mt-4'>
          <select
            className='select select-sm w-full'
            value={currentProblemId}
            onChange={(e) => onProblemChange(e.target.value)}
          >
            {allProblems.map((p) => (
              <option key={p.id} value={p.id}>
                {p.title}-{p.difficulty}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className='p-6 space-y-6'>
        {/* PROBLEM DESCRIPTION */}
        <div className='bg-base-100 rounded-xl shadow-sm p-5 border-base-300'>
          <h2 className='space-y-3 text-base leading-relaxed'>
            <p className='text-base-content/90'>{problem.description.text}</p>
            {problem.description.notes.map((note, idx) => (
              <p key={idx} className='text-base-content/90'>
                {note}
              </p>
            ))
    
            }
        </h2>
      </div>
    </div>
    </div >
  )
}

export default ProblemDescriptionPanel