import React from "react";

import { Container, Name, Description, Footer, Lang, Link } from "./styles";

function Repository() {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <Container color="#f37272">
      <Name>Repositório Name</Name>
      <Description>repositório description</Description>
      <Footer color="#f37272">
        <Lang>Language: JavaScript</Lang>
        <Link href="www.google.com" target="_blank">
          Ver
        </Link>
      </Footer>
    </Container>
  );
}

export default Repository;
