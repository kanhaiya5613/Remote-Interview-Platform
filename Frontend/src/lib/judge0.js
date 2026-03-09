const JUDGE0_API = "https://ce.judge0.com"

const LANGUAGE_IDS = {
    javascript: 63,
    python:     71,
    java:       62,
    cpp:        54,
}

function getFileExtension(language) {
    const extensions = { javascript: "js", python: "py", java: "java", cpp: "cpp" }
    return extensions[language] || "txt"
}

export async function executeCode(language, code) {
    try {
        const languageId = LANGUAGE_IDS[language]
        if (!languageId) {
            return { success: false, error: `Unsupported language: ${language}` }
        }

        const response = await fetch(`${JUDGE0_API}/submissions?base64_encoded=false&wait=true`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                language_id: languageId,
                source_code: code,
            })
        })

        if (!response.ok) {
            return { success: false, error: `HTTP error! status: ${response.status}` }
        }

        const data = await response.json()

        const output  = data.stdout         || ""
        const compile = data.compile_output || ""
        const error   = data.stderr         || ""

        if (compile) return { success: false, error: compile }
        if (error)   return { success: false, error }

        return { success: true, output: output || "No output" }

    } catch (error) {
        return { success: false, error: `Failed to execute code: ${error.message}` }
    }
}