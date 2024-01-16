/* eslint-disable react/jsx-filename-extension */
import React from "react";
import PropTypes from "prop-types";
import { Container, Selector, Cleaner } from "./styles";

// eslint-disable-next-line react/prop-types
function Filter({ Languages }) {
  // eslint-disable-next-line react/prop-types
  const selectors = Languages.map(({ name, count, color }) => (
    <Selector key={name.toLowerCase()} color={color}>
      <span>{name}</span>
      <span>{count}</span>
    </Selector>
  ));

  return (
    <Container>
      {selectors}
      <Cleaner>Limpar</Cleaner>
    </Container>
  );
}
Filter.prototype = {
  Languages: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired,
      color: PropTypes.string,
    }).isRequired
  ).isRequired,
};

export default Filter;
