import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate,useParams } from 'react-router'
import { PROBLEMS } from '../data/problems'
import { Panel, PanelGroup, PanelResizeHandle} from "react-resizable-panels";
import CodeEditorPanel from "../components/CodeEditorPanel"
import Navbar from '../components/Navbar';
import OutPutPanel from "../components/OutputPanel"
import {executeCode} from "../lib/piston.js"
import ProblemDescriptionPanel from '../components/ProblemDescriptionPanel';
import toast from 'react-hot-toast';
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

    const handleLanguageChange = (e) => {
        const newLang = e.target.value;
        setSelectedLanguage(newLang);
        setCode(currentProblem.starterCode[newLang]);
        setOutput(null);

    }

    const handleProblemChange = (newProblemId) => navigate(`/problem/${newProblemId}`)

    const triggerConfetti = () => {}

    const normalizeOutput = (output) => {
    // normalize output for comparison (trim whitespace, handle different spacing)
    return output
      .trim()
      .split("\n")
      .map((line) =>
        line
          .trim()
          // remove spaces after [ and before ]
          .replace(/\[\s+/g, "[")
          .replace(/\s+\]/g, "]")
          // normalize spaces around commas to single space after comma
          .replace(/\s*,\s*/g, ",")
      )
      .filter((line) => line.length > 0)
      .join("\n");
  };

    const checkIfTestsPassed = (actualOutput, expectedOutput) => {
        const normalizeActual = normalizeOutput(actualOutput)
        const normalizeExpected = normalizeOutput(expectedOutput)
        return normalizeActual === normalizeExpected
    }

    const handleRunCode = async () => {
    setIsRunning(true)
    setOutput(null)

    const result = await executeCode(selectedLanguage, code)
    console.log("Result:", result) 
    setOutput(result)
    setIsRunning(false)

    if(result.success){
        const expectedOutput = currentProblem.expectedOutput[selectedLanguage]
        const testsPassed = checkIfTestsPassed(result.output, expectedOutput)

        if(testsPassed){
            toast.success("All tests Passed! Great Job")
        } else {
            toast.error("Tests Failed. Check Your Output!")
        }
    }
    else{
        toast.error("Tests Failed. Check Your Output!")
    }
}
  return (
    <div className='h-screen bg-base-100 flex flex-col'>
        <Navbar/>
        <div className='flex-1 overflow-hidden'>
            <PanelGroup direction="horizontal">
                {/* Left Problem Description Panel */}
                <Panel className='overflow-hidden'>
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
                            <CodeEditorPanel
                              selectedLanguage={selectedLanguage}
                              code={code}
                              isRunning={isRunning}
                              onLanguageChange={handleLanguageChange}
                              onCodeChange={setCode}
                              onRunCode={handleRunCode}
                            />
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