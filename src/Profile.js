import React from "react";
import { Container, Typography, Card, CardContent, Link, List, ListItem, Divider } from "@mui/material";

const Section = ({ title, children }) => (
  <>
    <Typography variant="h5" gutterBottom sx={{ mt: 2 }}>
      {title}
    </Typography>
    {children}
    <Divider sx={{ my: 2 }} />
  </>
);

const Profile = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Card>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            Mary Yunju Kim
          </Typography>
          <Typography variant="h6" color="textSecondary" gutterBottom>
            Solution Architect | Cloud Operations Engineer | Microsoft Azure | IT Automation
          </Typography>

          <Section title="Contact Information">
            <List>
              <ListItem>Email: <Link href="mailto:maryunjukim@gmail.com">maryunjukim@gmail.com</Link></ListItem>
              <ListItem>LinkedIn: <Link href="https://linkedin.com/in/mary-yunju-kim-610002123" target="_blank">linkedin.com/in/mary-yunju-kim-610002123</Link></ListItem>
              <ListItem>Nationality: New Zealand Citizen</ListItem>
            </List>
          </Section>

          <Section title="Profile">
            <Typography>
            Passionate Cloud Engineer with hands-on experience in Azure, automation, and IT operations. Proven track record of optimising cloud environments, improving security, and reducing IT costs through strategic IT system management and automation. Adept at troubleshooting complex infrastructure issues, automating workflows, and building dashboards that drive decision-making.
            </Typography>
          </Section>

          <Section title="Experience">
            <Typography variant="h6">Junior Solutions Architect (Oct 2023 - Dec 2024)</Typography>
            <Typography color="textSecondary">TIC Company</Typography>
            <List>
              <ListItem>Independently managed IT support, system administration, financial reporting, automation, cloud solutions, and project management as the sole IT representative, collaborating with cross-functional teams and clients to ensure seamless operations and service delivery.</ListItem>
              <ListItem>Optimised IT costs by identifying unused cloud resources by 20%, implementing auto-scaling policies, and improving cost efficiency by 15%.</ListItem>
              <ListItem>Streamlined BAU processes in Salesforce by implementing app integrations, reducing working tabs from five to three and improving workflow efficiency.</ListItem>
              <ListItem>Developed Power BI dashboards that consolidated Azure cost data across multiple subscriptions, transforming raw cost listings into interactive, visual reports that enhanced financial tracking and resource allocation efficiency.</ListItem>
              <ListItem>Executed proactive system health checks, performance monitoring, and troubleshooting using Azure Monitor, ensuring optimal cloud infrastructure reliability and rapid issue resolution.</ListItem>
              <ListItem>Provided subject matter expertise (SME) support for IT systems, delivering targeted training and documentation to upskill staff, bridge stakeholder knowledge gaps, and enhance system adoption and efficiency.</ListItem>
              <ListItem>Supported faster SDLC by taking on multiple roles as a project analyst, business analyst, software developer, and tester.</ListItem>
            </List>

            <Typography variant="h6">Information Technology Analyst (May 2022 - Oct 2023)</Typography>
            <Typography color="textSecondary">TIC Company</Typography>
            <List>
              <ListItem>Delivered actionable insights to internal teams and clients, enabling data-driven decision-making and improving strategic planning.</ListItem>
              <ListItem>Developed dynamic Power BI and Salesforce dashboards for IT Finance and BAU operations, enabling upper management to gain real-time visibility into financial data, resource usage, and operational performance, streamlining decision-making and reporting efficiency.</ListItem>
              <ListItem>Actively collaborated with stakeholders to identify IT-related challenges, ensuring swift issue resolution and continuous system improvements.</ListItem>
            </List>

            <Typography variant="h6">Senior AML Analyst (Jul 2022 - Sep 2022)</Typography>
            <Typography color="textSecondary">TIC Company</Typography>
            <List>
              <ListItem>Engaged with clients to provide expert guidance on AML/KYC compliance solutions, ensuring regulatory adherence and effective risk management.</ListItem>
              <ListItem>Collaborated with analysts to resolve issues and manage escalations, ensuring timely responses and maintaining compliance standards.</ListItem>
              <ListItem>Leveraged Excel, Power BI, and SQL to analyse large datasets, generate insightful reports, and support data-driven decision-making.</ListItem>
              <ListItem>Managed case workflows and optimised process efficiency in Salesforce, ensuring compliance with regulatory standards and improving operational performance.</ListItem>
              <ListItem>Contributed to BAU process refinements by mentoring new analysts and supporting senior executives.</ListItem>
            </List>

            <Typography variant="h6">AML Analyst (Jul 2021 - Jul 2022)</Typography>
            <Typography color="textSecondary">TIC Company</Typography>
            <List>
              <ListItem>Applied strong analytical skills and meticulous attention to detail to ensure data integrity and 100% accuracy in reporting, supporting precise risk assessments and compliance monitoring.</ListItem>
              <ListItem>Verified customer identities, assessed risk, and conducted due diligence in line with AML regulations and ensuring compliance.</ListItem>
            </List>
          </Section>

          <Section title="Education">
            <List>
              <ListItem>Postgraduate Diploma in Information Technology, University of Auckland (2019 - 2024)</ListItem>
              <ListItem>Postgraduate Certificate in Information Technology, University of Auckland (2018 - 2019)</ListItem>
              <ListItem>Bachelor of Arts in Criminology (Minor: Logic & Computation), University of Auckland (2015 - 2018)</ListItem>
            </List>
          </Section>

          <Section title="Skills">
            <List>
              <ListItem>Microsoft Azure, Power Automate, Power BI</ListItem>
              <ListItem>Cloud Monitoring, Optimisation</ListItem>
              <ListItem>Salesforce Administration, Automation, Reporting</ListItem>
              <ListItem>SQL, Python, React, Go</ListItem>
              <ListItem>Project Management, Agile Methodologies, Jira, Confluence</ListItem>
              <ListItem>IT Consulting, Process Refinement, Data Analysis & Reporting</ListItem>
            </List>
          </Section>

          <Section title="Certifications & Learning Journeys">
            <List>
              <ListItem>TOGAF 10 Foundation/Practitioner (In Progress, 2025)</ListItem>
              <ListItem>Microsoft Certified: Azure Administrator AZ-104 (In Progress, 2025)</ListItem>
              <ListItem>MongoDB Python Developer Path (2023)</ListItem>
              <ListItem>Microsoft Certified: Azure Data Fundamentals DP-900 (2023)</ListItem>
              <ListItem>Enterprise Design Thinking Practitioner (2021)</ListItem>
              <ListItem>AWS Certified Cloud Practitioner (2019)</ListItem>
            </List>
          </Section>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Profile;
