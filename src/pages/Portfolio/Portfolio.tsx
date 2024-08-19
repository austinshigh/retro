import React from "react"
import PortfolioCard from "../Card/Card"
import bfa from "../../images/bfa.png"
import hangman from "../../images/hangman.png"
import wildtrack from "../../images/wildtrack.png"
import store from "../../images/java.png"
import scholastic from "../../images/scholastic-card.png"
import solidity from "../../images/solidity_card.png"
import react from "../../images/react_card.png"
import "./Portfolio.css"
import java from "../../images/java_card.png"

const Portfolio = () => {
  return (
    <div className="portfolio-container--outer">
      <div className="portfolio-container--cards">
        {/* <PortfolioCard
          title="Book Fair Host Hub"
          src={scholastic}
          link={
            "https://bookfairs.scholastic.com/content/fairs/hub/videos/welcome.html"
          }
        >
          Book Fair Text
        </PortfolioCard> */}
        {/*  This proof of concept app would
          be used to allow insurance firms to insure small farms against
          drought. This card links to a Repo with code and further explanation */}
        <PortfolioCard
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
        </PortfolioCard>
        {/* <PortfolioCard
          title="Hangman"
          src={hangman}
          link={"https://hangman-15975.web.app/"}
        >
          Hangman game. One player mode calls API to retrieve a random quote for
          user to guess, 2 player mode allows player 1 to choose a phrase and
          player 2 to guess the phrase.
        </PortfolioCard> */}
      </div>
    </div>
  )
}

export default Portfolio
