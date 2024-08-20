import styled from "styled-components"
import portrait from "../images/portrait.png"
import ScholasticLogo from "../images/scholastic.png"

const Resume = () => {
  return (
    <ResumeContainer>
      <Section>
        <img src={portrait} />
        <CompanyTitle>Scholastic</CompanyTitle>
        {/* <CompanyLogo src={ScholasticLogo} /> */}
        <JobTitle>Software Engineer II</JobTitle>
        <JobDetails>New York, NY (remote) | Oct 2023 - Present</JobDetails>
        <p>Architecting and implementing React applications</p>
        <p>Negotiating API specs for future development work</p>

        <JobTitle>Software Engineer I</JobTitle>
        <JobDetails>New York, NY (hybrid) | Jan 2022 - Oct 2023</JobDetails>
        <p>
          Integrated React applications with AEM's Headless content management
          system
        </p>
        <p>
          Completed high-complexity UI items including calendars, tables, and
          scheduling interfaces
        </p>
        <JobTitle>Software Engineer Intern</JobTitle>
        <JobDetails>New York, NY (remote) | Jun 2021 - Aug 2021</JobDetails>
        <p>
          Developed and released React application with Java Spring Boot backend
        </p>
        <p>
          Wrote API endpoints that compiled data from multiple upstream APIs
          using asynchronous programming
        </p>

        <CompanyTitle>Manheim Township School District</CompanyTitle>
        <JobTitle>Substitute Teacher</JobTitle>
        <JobDetails>Lancaster, PA | Nov 2020 - Jun 2021</JobDetails>
        <p>Taught in Elementary, Middle School, and High School classrooms</p>

        <CompanyTitle>Mountain Vista Custom Homes</CompanyTitle>
        <JobTitle>Carpenter</JobTitle>
        <JobDetails>Denver, CO | Jan 2018 - Nov 2020</JobDetails>
        <p>
          Framed, finished, and managed subcontractors during the construction
          of custom single-family homes
        </p>
        <p>
          Developed virtual renderings from home blueprints to take clients on
          virtual walkthroughs
        </p>
      </Section>
      <Section>
        <EducationItem>
          <CompanyTitle>Harvard Extension School</CompanyTitle>
          <p>Masters, Software Engineering</p>
          <JobDetails>2020 - 2024</JobDetails>
          <p>
            Coursework: Data Structures in Java, Web Programming with Python and
            JS, Designing and Developing Relational and NoSQL Databases with
            MongoDB, Web Application Development using Node.js
          </p>
          <p>
            Capstone: Developed image and data collection web application for
            WildTrack wildlife conservation organization
          </p>
        </EducationItem>
        <EducationItem>
          <CompanyTitle>University of Delaware</CompanyTitle>
          <p>Bachelor of Science, Management Information Systems</p>
          <JobDetails>2013-2017</JobDetails>

          <p>
            Coursework: Statistics, Java Programming, Database Structures & SQL,
            Web Design with HTML & CSS
          </p>
          <p>
            Capstone: Transitioned Wilmington, DE Court of Appeals to new ERP
            software
          </p>
        </EducationItem>
      </Section>

      <Section>
        <TechnologyList>
          <Technology>
            <strong>Languages:</strong> Javascript, Java, HTML, CSS, Python, UML
          </Technology>
          <Technology>
            <strong>Tools:</strong> Git, Postman, MySQL, MongoDB, Figma,
            LucidChart, Redux, Redux Toolkit Query
          </Technology>
          <Technology>
            <strong>Frameworks:</strong> React, JQuery, Spring
          </Technology>
        </TechnologyList>
      </Section>
    </ResumeContainer>
  )
}

const ResumeContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  @media (max-width: 575px) {
    max-width: 400px;
  }
  @media (max-width: 500px) {
    max-width: 300px;
  }
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #333;
  padding-bottom: 10px;
`

const Name = styled.h1`
  font-size: 24px;
  margin: 0;
`

const CompanyLogo = styled.img`
  height: 30px;
`

const ContactInfo = styled.div`
  text-align: right;
`

const Section = styled.section`
  margin-top: 20px;
`

const SectionTitle = styled.h2`
  font-size: 18px;
  border-bottom: 2px solid #333;
  padding-bottom: 5px;
  margin-bottom: 10px;
`

const CompanyTitle = styled.h3`
  font-size: 24px;
  margin: 10px 0 5px;
`

const JobTitle = styled.h3`
  font-size: 18px;
  margin: 10px 0 5px;
`

const JobDetails = styled.div`
  font-size: 14px;
`

const TechnologyList = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Technology = styled.span`
  margin-right: 10px;
`

const EducationItem = styled.div`
  margin-top: 10px;
`

export default Resume
