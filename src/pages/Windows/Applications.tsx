import { useState } from "react"
import styled from "styled-components"
import FileIcon from "../../components/desktop/FileIcon"
import java from "../../images/Java8Bit.png"
import react from "../../images/ReactLogo8Bit.png"
import solidity from "../../images/Solidity8Bit.png"
import type { WindowProps } from "../Desktop/Desktop"
import { WindowContainer } from "./Photos"

const Applications = ({ windowtop, windowleft }: WindowProps) => {
  const [activeDescription, setActiveDescription] = useState("")

  const handleSetDescription = (input: string) => {
    console.log("input")
    setActiveDescription(input)
  }

  return (
    <OuterFlexContainer>
      <WindowContainer>
        <FileIcon
          title={"Partner Up Creator Dashboard"}
          src={react}
          description={"austin"}
          href={"https://www.partner-up.net/"}
          windowtop={windowtop}
          windowleft={windowleft}
          handleCurrentDescription={handleSetDescription}
        />
        <FileIcon
          title={"Parametric Insurance Application"}
          src={solidity}
          href={"https://github.com/austinshigh/parametric-insurance"}
          windowtop={windowtop}
          windowleft={windowleft}
          handleCurrentDescription={handleSetDescription}
          description="Blockchain application written in Solidity. The application allows a
user to create a smart contract that pays out to interested parties in
the event of specific weather events."
        />
        <FileIcon
          title={"Wildtrack Image Upload"}
          src={react}
          href={"https://ai.wildtrack.org/"}
          windowtop={windowtop}
          windowleft={windowleft}
          handleCurrentDescription={handleSetDescription}
          description="WildTrack uses user uploaded animal footprints to train ML and AI
models to track animals in the wild. I developed the frontend for
their Image uploading and tagging platform. Create a free account to
upload images!"
        />
        <FileIcon
          title={"Autonomous Store Service"}
          src={java}
          href={"https://github.com/austinshigh/autonomous-store-service/"}
          windowtop={windowtop}
          windowleft={windowleft}
          handleCurrentDescription={handleSetDescription}
        />
        <FileIcon
          title={"BFA CSV App"}
          src={react}
          href={"https://bfa-csv.web.app/"}
          windowtop={windowtop}
          windowleft={windowleft}
          handleCurrentDescription={handleSetDescription}
          description="This application automates a simple string formatting process to
replace a manual process. Commissioned by the licensing team at BFA
Fashion Photography."
        />
      </WindowContainer>
      <DescriptionContainer>{activeDescription}</DescriptionContainer>
    </OuterFlexContainer>
  )
}

export default Applications

const DescriptionContainer = styled.div`
  width: 75%;
  min-height: 40px;
  background-color: rgba(255, 255, 255, 0.5);

  padding: 10px;
  border-left: 1px solid #333;
`

const OuterFlexContainer = styled.div`
  display: flex;
  flex-direction: row;
`

{
  /* <PortfolioCard
title="Parametric Insurance Application"
src={solidity}
githubLink={"https://github.com/austinshigh/parametric-insurance"}
>
Blockchain application written in Solidity. The application allows a
user to create a smart contract that pays out to interested parties in
the event of specific weather events.
</PortfolioCard>
<PortfolioCard
title="Wildtrack Image Upload"
src={react}
appLink={"https://ai.wildtrack.org/"}
>
WildTrack uses user uploaded animal footprints to train ML and AI
models to track animals in the wild. I developed the frontend for
their Image uploading and tagging platform. Create a free account to
upload images!
</PortfolioCard>
<PortfolioCard
title="Autonomous Store Service"
src={java}
githubLink={
  "https://github.com/austinshigh/autonomous-store-service/"
}
>
Backend for a theoretical autonomous store. Features blockchain ledger
for tracking customer spending. Card links to github with instructions
for building and testing the project.
</PortfolioCard>
<PortfolioCard
title="BFA CSV App"
src={react}
appLink={"https://bfa-csv.web.app/"}
>
This application automates a simple string formatting process to
replace a manual process. Commissioned by the licensing team at BFA
Fashion Photography.
</PortfolioCard> */
}
