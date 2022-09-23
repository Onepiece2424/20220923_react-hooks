const React = require('react')

const IncrementButton = React.memo(props => {
  console.log("IncrementButtonのコンソール")
  return <button onClick={props.handleClick}>IncrementButton</button>;
});

export default IncrementButton
