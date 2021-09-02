import withCounter from "./Hoc/withCounter";

const ClilckCounter = (props) => {
  const { count, incrementCount } = props;
  return (
    <div>
      <button
        onClick={incrementCount}
        style={{
          backgroundColor: "red",
          width: "200px",
          color: "white",
          border: "none",
        }}
      >
        Click {count} Times
      </button>
    </div>
  );
};

export default withCounter(ClilckCounter);
