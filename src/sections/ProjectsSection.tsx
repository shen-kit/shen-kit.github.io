import {
  Stack,
  Text,
  Title,
  Anchor,
  Group,
  AspectRatio,
  Box,
} from "@mantine/core";
import SectionHeader from "../components/SectionHeader";
import classes from "./ProjectsSection.module.css";

interface ProjectProps {
  name: string;
  year: string;
  description: any;
  embedUrl?: string;
  aspectRatio?: number;
}

function Project({
  name,
  year,
  embedUrl,
  description,
  aspectRatio,
}: ProjectProps) {
  const videoWidthPercent = 45;
  const gap = 4;
  const embedWidth = `${videoWidthPercent}%`;
  const textWidth = `${100 - videoWidthPercent - gap}%`;

  // default aspect ratio 16:9
  if (!aspectRatio) aspectRatio = 16 / 9;

  return (
    <Group justify="space-between" className={classes.project} my="xl">
      <AspectRatio ratio={aspectRatio} w={embedWidth}>
        <iframe
          src={embedUrl}
          title={`${name}-videoplayer`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen={true}
        ></iframe>
      </AspectRatio>
      <Box w={textWidth}>{ProjectText({ name, year, description })}</Box>
    </Group>
  );
}

function ProjectText({ name, year, description }: ProjectProps) {
  return (
    <Stack>
      <Title className={classes.projectTitle}>
        {name} | {year}
      </Title>
      {description}
    </Stack>
  );
}

export default function ProjectsSection() {
  return (
    <Stack
      justify="center"
      align="start"
      gap="xl"
      mih="100vh"
      pt="4rem"
      id="projects-section"
    >
      <SectionHeader number="3" text="Projects" />
      <Project
        name="TUI Finance Tracker"
        year="2025"
        embedUrl="https://www.youtube.com/embed/k_4rm1xgY7Y?si=4ikpg4Zwik5Wk0Fn"
        description={
          <Text>
            This finance tracker is unique as it runs in the terminal with a
            terminal user interface (TUI). It was made using{" "}
            <strong>Golang</strong> and the{" "}
            <Anchor underline="not-hover" href="https://github.com/rivo/tview/">
              tview
            </Anchor>{" "}
            package, with a <strong>sqlite database</strong> backend. Features
            include recording income, expenditure and investments, custom
            categories, displaying investment returns by pulling data from Yahoo
            Finance, and dashboard summaries. All CRUD database operations are
            supported, and it is navigable using Vim keybindings.
          </Text>
        }
      />
      <Project
        name="KitKat Language"
        year="2024"
        embedUrl="https://www.youtube.com/embed/Wib5VxiJf9Y?si=bPnEf_tJ4oiLJxiQ"
        description={
          <Text>
            I created my own high-level, statically and strongly typed, compiled
            programming language using <strong>Haskell</strong>. It compiles to{" "}
            <strong>LLVM IR</strong> (a processor-independent intermediate
            representation), then uses <code>llc</code> and <code>gcc</code> to
            link to the standard C libraries and generate machine code.
            Functionality includes integers/strings/booleans, conditionals
            (if/else if/else, while loops), boolean logic and integer
            arithmetic, print statements, and variables for all data types.
          </Text>
        }
      />
      <Project
        name="Waypoint"
        year="2024"
        embedUrl="https://www.youtube.com/embed/8KbLRf_oH9I?si=rSikTsuopVh9cWog"
        description={
          <Text>
            Waypoint is a project management tool for teams following the Scrum
            methodology, created with <strong>ReactTS</strong> and{" "}
            <strong>MongoDB</strong>, and containerised with{" "}
            <strong>Docker</strong>. Features include admin and developer
            accounts with JTW authentication, the ability to manage users, the
            product backlog, and multiple sprints, as well as a kanban and list
            view for each sprint the current developer is assigned to.
          </Text>
        }
      />
      <Project
        name="Hia's Up"
        year="2023"
        embedUrl="https://youtube.com/embed/hdXAF2hohBY"
        description={
          <Text>
            Inspired by the game{" "}
            <Anchor
              underline="not-hover"
              href="https://play.google.com/store/apps/details?id=com.wb.headsup&hl=en_AU&gl=US"
            >
              Head's Up!
            </Anchor>
            , I created <i>Hia's Up!</i> as a game that we could play at family
            gatherings. The game is like celebrity heads, where the player has
            to guess what is on the screen by asking everyone else questions. If
            they guess it right, they tilt the phone up, and to skip, they tilt
            the phone down. It was made using <strong>Flutter and Dart</strong>{" "}
            (source code available on{" "}
            <Anchor
              underline="not-hover"
              href="https://github.com/shen-kit/heads-up-game"
            >
              github
            </Anchor>
            ).
          </Text>
        }
      />

      <ProjectText
        name="CLI Password Manager"
        year="2023"
        description={
          <Text>
            I've made several password managers over the years, the most recent
            one in 2023 in <strong>Python</strong> using the Cryptography
            library for security. I decided to make it to learn the{" "}
            <strong>basics of cryptography</strong> and to refresh my knowledge
            of databases (I used <strong>sqlite</strong>). Additionally, I enjoy
            working in the terminal so didn't want a GUI password manager.
            Functionality includes setting a master password which is then
            encrypted, adding/editing/deleting new services, listing all stored
            services, and resetting the database. While this wasn't very
            challenging to build, it is the project which I use the most in my
            daily life.
          </Text>
        }
      />

      <ProjectText
        name="Personal Website"
        year="2022 - 2025"
        description={
          <Text>
            Having never created a website before, I decided to make this one as
            a way to teach myself the basics of <strong>ReactJS</strong> and how
            to deploy a website online. No templates were used, and all of the
            code for this website was written myself. In 2025, I redid my
            website to use <strong>ReactTS</strong> and the{" "}
            <strong>Mantine UI</strong> component library. The source code can
            be found on{" "}
            <Anchor
              underline="not-hover"
              href="https://github.com/shen-kit/personal-website"
            >
              github
            </Anchor>
            .
          </Text>
        }
      />
      <Project
        name="Bujo App"
        year="2021"
        embedUrl="https://www.youtube.com/embed/vpSjNAjYRa4?controls=1&amp;start=39"
        description={
          <Text>
            This was my final project for the CS50 Introduction to Computer
            Science course, written in <strong>HTML, CSS and Javascript</strong>
            , and using the <strong>Electron</strong> framework. Features
            include a daily planner with tasks and events, a monthly calendar,
            and a habit tracker which integrates with the calendar. This project
            taught me web-development skills, how to use npm, how to write
            responsive apps, and the importance of creating a thorough plan
            before starting to code. The source code is available on{" "}
            <Anchor
              underline="not-hover"
              href="https://github.com/shen-kit/bujoApp"
            >
              github
            </Anchor>
            .
          </Text>
        }
      />
      <Project
        name="Life is Short"
        year="2020"
        embedUrl="https://www.youtube.com/embed/k9yz5tZ35-k"
        description={
          <Text>
            In 2020 I challenged myself to make and release a game to the public
            in only 4 weeks. This survival game was the result — it was made in{" "}
            <strong>Unity3D using C#</strong> and features a flexible weapon
            system and various enemies, as well as some unique mechanics. While
            it is far from polished, I was extremely happy what I accomplished
            in 4 weeks, and this video documents the process of making the game.
            It has over 150 downloads, and can be found{" "}
            <Anchor
              underline="not-hover"
              href="https://sk-studios.itch.io/life-is-short"
            >
              here
            </Anchor>
            .
          </Text>
        }
      />
      <Project
        name="Stealth"
        year="2020"
        embedUrl="https://itch.io/embed/600889?bg_color=252525&amp;fg_color=ffffff&amp;border_color=111111"
        aspectRatio={3.4}
        description={
          <Text>
            From 2017-2020, I made many games. This game is relatively simple
            compared to <i>Life is Short</i> (above), but is my most popular
            one, with over 3000 plays online (across multiple websites) and 100+
            downloads. It was made in <strong>Unity3D</strong> using{" "}
            <strong>C#</strong>.
          </Text>
        }
      />
    </Stack>
  );
}
