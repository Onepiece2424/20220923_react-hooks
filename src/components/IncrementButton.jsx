const React = require('react')

const IncrementButton = props => {
  console.log("render IncrementButton")
  return <button onClick={props.handleClick}>IncrementButton</button>;
};

export default IncrementButton
