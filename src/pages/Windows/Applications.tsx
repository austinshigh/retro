import React from "react"
import Folder from "../../components/desktop/Folder"
import solidity from "../../images/solidity.png"
import react from "../../images/react.png"
import java from "../../images/java.png"
import { WindowContainer } from "./Photos"

const Applications = () => {
  return (
    <WindowContainer>
      <Folder
        title={"Parametric Insurance Application"}
        src={solidity}
        href={"https://github.com/austinshigh/parametric-insurance"}
      />
      <Folder
        title={"Wildtrack Image Upload"}
        src={react}
        href={"https://ai.wildtrack.org/"}
      />
      <Folder
        title={"Autonomous Store Service"}
        src={java}
        href={"https://github.com/austinshigh/autonomous-store-service/"}
      />
      <Folder
        title={"BFA CSV App"}
        src={react}
        href={"https://bfa-csv.web.app/"}
      />
    </WindowContainer>
  )
}

export default Applications

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
