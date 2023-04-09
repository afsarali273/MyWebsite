import React from 'react';
import { Typography, Box } from '@material-ui/core';
import './Experience.css';


const Experience = () => {
  return (
    <div style={{marginTop: '2rem'}}>
    <Box py={2}>
      <Typography variant="h5">Experience</Typography>
      <Typography variant="h6">Sr. Test Automation Architect</Typography>
      <Typography>PropertyGuru - Singapore (2022-Present)</Typography>
      <ul>
        <li>Developed and maintained automation frameworks for Web application, Mobile Application , API and Salesforce Automation.</li>
        <li>Collaborated with Product Owner and Developers on prioritization of defect.</li>
        <li>Developed various tools to help team with repetative tasks</li>
        <li>Hands on backend development using ExpresJs and Salesforce Lightening Web Components </li>
        <li>Collaborated on In house Test Report dashboard using springboot and Angualr</li>
      </ul>
     <Typography variant="h6">Sr. Backend Java Developer and SDET</Typography>
      <Typography>GovTech (Contract) -Singapore (2020 - 2022)</Typography>
      <ul>
        <li>Worked on Apache Spark ,Spring batch,Spring Boot application.</li>
        <li>Worked on Web services REST API and SOAP based API development.</li>
        <li>Worked on Oracle and MySql Database and query optimization for bigdata applications.</li>
        <li>Developed automation framework using Cypress and Cucumber</li>
        <li>Maintained and Enahanced Springboot cucumber Test framework</li>
        <li>Worked on Shellscript and Kubernates,AWS Fargate, S3, GCP</li>
        <li>Maintained CI pipeline on Gitlab and Kubernates cluster with Jenkins.</li>
        <li>Performed load testing with millions record.</li>
      </ul>

      <Typography variant="h6">Sr. Software Development Engineer in Test</Typography>
      <Typography>HOOQ (Singtel Group) -Singapore (2019 - 2020)</Typography>
      <ul>
        <li>Worked on Mobile(Android and iOS) and API Automation test and framework development.</li>
        <li>Performed Integration, regression and functional in-sprint tests automation on modules.</li>
        <li>Responsible for Sprint Automation of all new Features for the Mobile Team using Selenium and Appium .</li>
        <li>Performed migration of existing jenkins CI/CD pipeline to GitHub Action based CI/CD with AWS and Docker</li>
        <li>I used tools like Appium, Selenium, Xcode, RestAssured, GitHub Actions, Jenkins, Selenium python binding, AWS, Testproject, Docker, Cypress</li>
      </ul>

      <Typography variant="h6">Sr. Quality Assurance Engineer</Typography>
      <Typography>Telstra (Contract) -Singapore (2018 - 2019)</Typography>
      <ul>
        <li>Designed a javascript based framework with WebDriverIo which could automate Web ,Mobile Web ,Mobile Native and API.</li>
        <li>I worked on tools like Selenium with Java , Selenium with C#, Spring boot based cucumber framework , Rest Template framework,Xamarin framework for react Native applications,Gatling , WebDriverIo , Postressql,appium,cucumber , Docker etc.</li>
        <li>Helped team with e2e deployment and testing</li>
        <li>Performed Test Automation using Appium and React Native applications</li>
        <li>Setup mobile device center for inhouse distributed appium test execution</li>
      </ul>

      <Typography variant="h6">Sr. Quality Engineer</Typography>
      <Typography>Accenture  - Mumbai, India (2015 - 2018)</Typography>
      <ul>
        <li>Developed a fully automated continuous integration system using GitHub,Jenkins,Selenium Grid and custom tools developed in Python.</li>
        <li>Researched and investigated on various Robotics Process Automation tools like Blue Prism , UiPath , Automation Anywhere , Open Span etc. for project POC.</li>
        <li>Performed automated test for Web, mobile , and API using Selenium , Appium , SOAPUI .</li>
        <li>Worked on tools like Guidewire Policy Center , Mainframe application , Selenium ,Appium , Jenkins , Soapui, HP UFT , Agile Central, HP ALM QC , Blue prism ,Uipath</li>
      </ul>

    </Box>
    </div>
  );
};

export default Experience;
