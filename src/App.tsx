import "@mantine/core/styles.css";
import "./styles.css";
import { MantineProvider, createTheme, Stack } from "@mantine/core";

import HomeSection from "./sections/HomeSection.tsx";
import Layout from "./Layout";
import AboutSection from "./sections/AboutSection.tsx";
import AchievementsSection from "./sections/AchievementsSection.tsx";
import WorkExperienceSection from "./sections/WorkExperienceSection.tsx";
import ProjectsSection from "./sections/ProjectsSection.tsx";

const theme = createTheme({
  primaryColor: "gray",
  colors: {
    orange: [
      "#ffeae8",
      "#ffd3d0",
      "#fba5a0",
      "#f7756d",
      "#f44c41",
      "#f23225",
      "#f22316",
      "#d8150b",
      "#c10d07",
      "#a90003",
    ],
  },
  fontFamily:
    "Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
  fontFamilyMonospace:
    "Roboto Mono, source-code-pro, Menlo, Monaco, Consolas, Courier New, monospace",
  headings: {
    fontFamily: "Roboto",
    fontWeight: "600",
    sizes: {
      h1: {
        fontWeight: "600",
        fontSize: "4rem",
      },
      h2: {
        fontSize: "3rem",
        fontWeight: "300",
      },
      h3: {
        fontSize: "2rem",
      },
    },
  },
});

export default function App() {
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <Layout>
        <Stack>
          <HomeSection />
          <AboutSection />
          <AchievementsSection />
          <WorkExperienceSection />
          <ProjectsSection />
        </Stack>
      </Layout>
    </MantineProvider>
  );
}
