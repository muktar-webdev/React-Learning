import React from "react";

const ShowCount = (props) => {
  const { count, title } = props;
  console.log(`Rendering ${title}..`);
  return <div>
      <p>
          {title} is {count}
      </p>
  </div>;
};

export default React.memo(ShowCount);
