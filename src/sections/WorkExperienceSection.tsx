import { Box, List, Paper, Stack, Text, Title, Group } from "@mantine/core";
import SectionHeader from "../components/SectionHeader";
import classes from "./WorkExperienceSection.module.css";

interface Experience {
  role: string;
  organisation: string;
  period: string;
  items: string[];
}

export default function WorkExperienceSection() {
  const experiences: Experience[] = [
    {
      role: "Software Engineer (Intern)",
      organisation: "IMC Trading",
      period: "2025 - 2026",
      items: [
        "Given joint ownership of a large Java project with another intern",
        "Responsible for managing requirements, scope, features, and implementation",
        "Worked with Maven, Dagger 2, Apache Kafka, Dremio, and Grafana",
      ],
    },
    {
      role: "Monash Connected Autonomous Vehicles (MCAV)",
      organisation: "Monash University",
      period: "2025 - 2026",
      items: [
        "Integrating Autoware and ROS2 into a StreetDrone Twizy and Nissan ENV200",
        "Working in a C++ codebase and using Python for testing",
        "Currently developing an automatic valet parking system",
      ],
    },
    {
      role: "Software Engineer and Data Science (Intern)",
      organisation: "WSP Digital",
      period: "2025",
      items: [
        "Worked on development, API migration, and auth testing for LandiQ (a $29M geospatial analysis tool)",
        "Built with Django, ReactTS, Docker, and Postgres",
        "Contributed to long-term cost optimisation for NSW's upcoming electric bus fleet using Google OR-Tools",
      ],
    },
    {
      role: "Residential Advisor",
      organisation: "Monash University",
      period: "2025",
      items: [
        "Responsible for organising and running events while contributing to the community",
        "Developed leadership, communication, conflict resolution, teamwork, and confidence",
      ],
    },
    {
      role: "University Teaching Associate",
      organisation: "Monash University",
      period: "2024 - 2025",
      items: [
        "Tutored Data Structures and Algorithms, and Introduction to Software Engineering",
        "Communicated difficult concepts in a comprehensible way by adapting to each student's learning style",
        "Received a near-perfect rating on the student satisfaction report",
      ],
    },
    {
      role: "Private Tutor",
      organisation: "Self-employed",
      period: "2021 - 2025",
      items: [
        "Taught Year 11-12 Chemistry and Physics, and Year 9-12 equivalent Mathematics",
        "Improved time management and online communication while balancing tutoring and studying",
        "Students improved significantly, including one graduating with a 99+ ATAR (top 1% in the state)",
      ],
    },
  ];

  return (
    <Stack
      justify="center"
      align="start"
      gap="xl"
      h="75vh"
      mih="75vh"
      id="work-experience-section"
      style={{ scrollMarginTop: "96px" }}
    >
      <SectionHeader number="2" text="Work Experience" />
      <Box w="100%" className={classes.scrollShell}>
        <Stack w="100%" h="100%" gap="lg" className={classes.scrollContent}>
          {experiences.map((experience) => (
            <Paper
              key={`${experience.role}-${experience.organisation}-${experience.period}`}
              p="lg"
              radius="md"
              className={classes.experienceCard}
            >
              <Stack gap={0}>
                <Group justify="space-between" align="baseline" wrap="wrap" gap="sm">
                  <Title order={4} className={classes.role}>
                    {experience.role}
                  </Title>
                  <Text className={classes.period}>{experience.period}</Text>
                </Group>
                <Text className={classes.organisation}>
                  {experience.organisation}
                </Text>
              </Stack>

              <List withPadding mt="sm">
                {experience.items.map((item) => (
                  <List.Item key={`${experience.role}-${item}`}>{item}</List.Item>
                ))}
              </List>
            </Paper>
          ))}
        </Stack>
      </Box>
    </Stack>
  );
}
