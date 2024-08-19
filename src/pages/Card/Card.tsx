import { ReactNode, useState } from "react"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"

import "./Card.css"

interface Props {
  title: string
  src: string
  githubLink?: string
  appLink?: string
  children: ReactNode
}

function PortfolioCard({ title, src, githubLink, appLink, children }: Props) {
  const [flipped, setFlipped] = useState(false)

  const flipCard = () => {
    setFlipped(!flipped)
  }
  return (
    <>
      {flipped ? (
        <Card
          style={{ width: "18rem" }}
          className="card-hover-state"
          onClick={() => flipCard()}
        >
          {/* <Card.Img variant="top" src={src} /> */}
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{children}</Card.Text>
            {githubLink && (
              <button onClick={() => window.open(githubLink)}>GitHub</button>
            )}
            {appLink && (
              <button onClick={() => window.open(appLink)}>App</button>
            )}
            {/* <Button variant="primary" href={link}>
        Try It!
      </Button> */}
          </Card.Body>
        </Card>
      ) : (
        <Card
          style={{ width: "18rem" }}
          className="card-hover-state"
          onClick={() => flipCard()}
        >
          {/* <Card.Img variant="top" src={src} /> */}
          <Card.Body>
            <Card.Text>
              <img src={src} />
            </Card.Text>
            {/* <Button variant="primary" href={link}>
              Try It!
            </Button> */}
          </Card.Body>
        </Card>
      )}
    </>
  )
}

export default PortfolioCard
