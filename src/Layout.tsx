import { AppShell, Group, Anchor, Flex } from "@mantine/core";
import { useHeadroom } from "@mantine/hooks";
import resume from "./assets/resume.pdf";
import classes from "./Layout.module.css";

export default function Layout(props: any) {
  const pinned = useHeadroom({ fixedAt: 120 });

  const homeSection = document.getElementById("home-section");
  const aboutSection = document.getElementById("about-section");
  const achievementsSection = document.getElementById("achievements-section");
  const workExperienceSection = document.getElementById(
    "work-experience-section",
  );
  const projectsSection = document.getElementById("projects-section");

  return (
    <AppShell
      header={{ height: 72, collapsed: !pinned, offset: false }}
      withBorder={false}
    >
      <AppShell.Header>
        <Flex justify="space-between" pl="xl" pr="xl">
          <Anchor
            className={classes.logo}
            underline="never"
            onClick={() => homeSection?.scrollIntoView({ behavior: "smooth" })}
          >
            SK
          </Anchor>
          <Group gap="3rem" justify="flex-end" mx="1rem">
            <Anchor
              className={classes.navLink}
              underline="never"
              onClick={() =>
                aboutSection?.scrollIntoView({ behavior: "smooth" })
              }
            >
              About Me
            </Anchor>
            <Anchor
              className={classes.navLink}
              underline="never"
              onClick={() =>
                achievementsSection?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Achievements
            </Anchor>
            <Anchor
              className={classes.navLink}
              underline="never"
              onClick={() =>
                workExperienceSection?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Experience
            </Anchor>
            <Anchor
              className={classes.navLink}
              underline="never"
              onClick={() =>
                projectsSection?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Projects
            </Anchor>
            <Anchor
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className={classes.navLink}
              underline="never"
            >
              Resume
            </Anchor>
          </Group>
        </Flex>
      </AppShell.Header>

      <AppShell.Main pl="9%" pr="9%" display="grid">
        {props.children}
      </AppShell.Main>
    </AppShell>
  );
}
