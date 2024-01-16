/* eslint-disable react/jsx-filename-extension */
import React from "react";

import Profile from "./Profile";
import Filter from "./Filter";
import Repositories from "./Repositories";

import { Container, Sidebar, Main } from "./styles";

const repositoriesPage = () => {
  const user = {
    login: "Jumendess",
    name: "Julio",
    avatar_url: "https://avatars.githubusercontent.com/u/101362282?v=4",
    followers: 1,
    following: 0,
    company: "Adin",
    blog: null,
    location: null,
  };

  // eslint-disable-next-line no-unused-vars
  const repositories = [
    {
      name: "repo 1",
      description: "This is a test repository for the Github Finder app",
      html_url: "#",
      language: "Javascript",
    },
    {
      name: "repo 2",
      description: "repositorio 2",
      html_url: "#",
      language: "Javascript",
    },
    {
      name: "repo 3",
      description: "repositório 3",
      html_url: "#",
      language: "phyton",
    },
    {
      name: "repo 4",
      description: "ferfre 4",
      html_url: "#",
      language: "PHP",
    },
    {
      name: "repo 5",
      description: "pjobibkll",
      html_url: "#",
      language: "Java",
    },
    {
      name: "repo 1",
      description: "njn ijbkjkp",
      html_url: "#",
      language: "Typescript",
    },
  ];

  // Calculo dos filters

  const Languages = [
    { name: "Javascript", count: 20, color: "#f1c40f" },
    { name: "Shel", count: 3, color: "#95a5a6" },
    { name: "PHP", count: 4, color: "#3498DB" },
    { name: "Ruby", count: 5, color: "#e74c3c" },
  ];

  return (
    <Container>
      <Sidebar>
        <Profile user={user} />
        <Filter Languages={Languages} />
      </Sidebar>
      <Main>
        <Repositories />
      </Main>
    </Container>
  );
};

export default repositoriesPage;
