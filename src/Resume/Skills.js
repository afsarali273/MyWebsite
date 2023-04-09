import React, { useState } from "react";
import { Typography, Box, Button } from "@material-ui/core";
import "./Skills.css";

const Skills = () => {
  const [skillLevel, setSkillLevel] = useState("All");

  const handleFilterClick = (level) => {
    setSkillLevel(level);
  };

  const skills = [
    { name: "RestAssured", level: "Expert" },
    { name: "Java", level: "Expert" },
    { name: "Selenium", level: "Expert" },
    { name: "Webdriverio", level: "Expert" },
    { name: "Playwright", level: "Expert" },
    { name: "Cucumber", level: "Expert" },
    { name: "TestNG", level: "Expert" },
    { name: "Typescript", level: "Expert" },
    { name: "SpringBoot", level: "Advanced" },
    { name: "Salesforce", level: "Advanced" },
    { name: "JMeter", level: "Expert" },
    { name: "Kubernates", level: "Advanced" },
    { name: "Docker", level: "Advanced" },
    { name: "ReactJS", level: "Intermediate" },
    { name: "Node.js", level: "Intermediate" },
  ];

  const filteredSkills =
    skillLevel === "All"
      ? skills
      : skills.filter((skill) => skill.level === skillLevel);

  return (
    <div style={{ marginTop: "2rem" }}>
      <Box py={2}>
        <Typography variant="h5">Skills</Typography>
        <Typography style={{ marginTop: "2rem" }}>Filter by level:</Typography>
        <Box display="flex" alignItems="center" py={1}>
          <Button
            onClick={() => handleFilterClick("All")}
            variant={skillLevel === "All" ? "contained" : "outlined"}
          >
            All
          </Button>
          <Button
            onClick={() => handleFilterClick("Beginner")}
            variant={skillLevel === "Beginner" ? "contained" : "outlined"}
          >
            Beginner
          </Button>
          <Button
            onClick={() => handleFilterClick("Intermediate")}
            variant={skillLevel === "Intermediate" ? "contained" : "outlined"}
          >
            Intermediate
          </Button>
          <Button
            onClick={() => handleFilterClick("Advanced")}
            variant={skillLevel === "Advanced" ? "contained" : "outlined"}
          >
            Advanced
          </Button>
          <Button
            onClick={() => handleFilterClick("Expert")}
            variant={skillLevel === "Expert" ? "contained" : "outlined"}
          >
            Expert
          </Button>
        </Box>
        {filteredSkills.map((skill) => (
          <Typography style={{ marginLeft: "1rem" }} key={skill.name}>
            {skill.name} - {skill.level}
          </Typography>
        ))}
      </Box>
    </div>
  );
};

export default Skills;
