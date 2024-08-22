import styled from "styled-components"
import ResumeContent from "../../components/ResumeContent"

const Resume = () => {
  return (
    <ResumeContainer>
      <ResumeContent />
    </ResumeContainer>
  )
}

const ResumeContainer = styled.div`
  margin: 0 auto;
  padding: 20px;
  margin-bottom: 50px;
`

export default Resume
