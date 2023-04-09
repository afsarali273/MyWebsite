import React from "react";
import { Container, Paper, Grid } from "@material-ui/core";
import Header from "./Header";
import Skills from "./Skills";
import Education from "./Education";
import Experience from "./Experience";
import Certification from "./Certification";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import "./Resume.css";

const Resume = () => {
  const handlePrint = () => {
    window.print();
  };

  const downloadPDF = () => {
    const input = document.getElementById("resume");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("resume.pdf");
    });
  };

  return (
    <div>
      <div className="app__header">
        <button className="app__button" onClick={handlePrint}>
          Print
        </button>
        <button className="app__button" onClick={downloadPDF}>
          Download PDF
        </button>
      </div>

      <Container maxWidth="md" id="resume" className="resume">
        <Paper>
          <Header />
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Skills />
              <Education />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Experience />
              <Certification />
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </div>
  );
};

export default Resume;
