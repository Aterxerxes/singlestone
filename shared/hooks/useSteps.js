import { useEffect, useState } from 'react'

export default (props) => {
  const [steps, setSteps] = useState([])

  useEffect(() => {
    const retrieveSteps = async () => {
      const url = 'https://uqnzta2geb.execute-api.us-east-1.amazonaws.com/default/FrontEndCodeChallenge'
      try {
        const response = await fetch(url)
        const data = await response.json()
        data.sort((a, b) => {
          const one = Number.parseInt(a.stepNumber)
          const two = Number.parseInt(b.stepNumber)
          if (one > two) { return 1 }
          if (one < two) { return -1 }
          return 0
        })
        const result = data.map(item => {
          const versionContent = item.versionContent
          if (versionContent.length !== 1) {
            // Find the most recent version
            versionContent.sort((v1, v2) => {
              const a = new Date(v1.effectiveDate)
              const b = new Date(v2.effectiveDate)
              return a - b
            })
          }
          return {
            content: versionContent[0],
            id: item.id,
            step: item.stepNumber
          }
        })
        setSteps(result)
      } catch (error) {
        console.error('Steps retrieval error:', error)
      }
    }

    retrieveSteps()
  }, [])

  return steps
}