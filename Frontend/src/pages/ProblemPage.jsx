import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate,useParams } from 'react-router'
import { PROBLEMS } from '../data/problems'
import { Panel, PanelGroup, PanelResizeHandle} from "react-resizable-panels";
import CodeEditorPanel from "../components/CodeEditorPanel"
import Navbar from '../components/Navbar';
import OutPutPanel from "../components/OutputPanel"
import ProblemDescriptionPanel from '../components/ProblemDescriptionPanel';
function ProblemPage() {
    const {id} = useParams();
    const navigate = useNavigate();

    const [currentProblemId, setCurrentProblemId] = useState("two-sum")
    const [selectedLanguage, setSelectedLanguage] = useState("cpp")
    const [code,setCode] = useState(PROBLEMS[currentProblemId].starterCode.cpp)
    const [output, setOutput] = useState(null)
    const [isRunning, setIsRunning] = useState(false)

    const currentProblem = PROBLEMS[currentProblemId]

    // Update problem when url changes
    useEffect(()=>{
        if(id && PROBLEMS[id] ){
            setCurrentProblemId(id)
            setCode(PROBLEMS[id].starterCode[selectedLanguage])
            setOutput(null)
        }
    },[id,selectedLanguage])

    const handleLanguageChange = (e) => {}

    const handleProblemChange = () => {}

    const triggerConfetti = () => {}

    const checkIfTestsPassed = () => {}

    const handleRunCode = () => {}
  return (
    <div className='h-screen w-screen bg-base-100 flex flex-col'>
        <Navbar/>
        <div className='flex-1'>
            <PanelGroup direction="horizontal">
                {/* Left Problem Description Panel */}
                <Panel>
                    <ProblemDescriptionPanel
                        problem={currentProblem}
                        currentProblemId={currentProblemId}
                        onProblemChange={handleProblemChange}
                        allProblems={Object.values(PROBLEMS)}
                    />
                </Panel>
                <PanelResizeHandle className="w-2 bg-base-300 hover:bg-primary transition-colors cursor-col-resize"/>
                {/* Right Code Editor and Output Panel */}
                <Panel defaultSize={40} minSize={30}>
                    <PanelGroup direction="vertical">
                        <Panel defaultSize={70} minSize={30}>
                            <CodeEditorPanel/>
                        </Panel>
                        <PanelResizeHandle className="h-2 bg-base-300 hover:bg-primary transition-colors cursor-row-resize"/>
                        <Panel defaultSize={30} minSize={30}>
                            <OutPutPanel/>
                        </Panel>
                    </PanelGroup>
                </Panel>
            </PanelGroup>
        </div>
        </div>
  )
}

export default ProblemPage