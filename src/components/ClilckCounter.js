import withCounter from "./Hoc/withCounter";

const ClilckCounter = (props) => {
  const { count ,incrementCount} = props;
  return (
    <div>
      <button onClick={incrementCount}>Click {count} Times</button>
    </div>
  );
};

export default withCounter(ClilckCounter);
