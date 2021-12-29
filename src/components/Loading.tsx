import React, { FunctionComponent } from "react";

interface ILoadingProps {
  isLoading: boolean;
}

const Loading: FunctionComponent<ILoadingProps> = (props) => {
  const { isLoading } = props;

  if (isLoading) {
    return (
      <div className="loading">
        <img
          src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif"
          width={50}
          alt="Loading"
        />
      </div>
    );
  }
  return <>{props.children}</>;
};

export default Loading;
