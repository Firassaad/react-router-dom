import React from "react";

interface ChildComponentProps {
  inputValue: string;
}
const ChildComponent: React.FC<ChildComponentProps> = ({ inputValue }) => {
  return (
    <div>
      <h2>Received Value:</h2>
      <p>{inputValue}</p>
      {/* You can use the inputValue prop as needed in this component */}
    </div>
  );
};

export default ChildComponent;
