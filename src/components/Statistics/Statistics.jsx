// @flow
import React from "react";
import Wrapper from "./Styles";
import mostCoincidence from "./../../tools/mostCoincidence";
import { Props } from "./../../../flow-typed/types";

const Statistics = ({ selectedOptions, randomOption }: Props) => {
  const coincidence = mostCoincidence(selectedOptions);

  return (
    <Wrapper>
      <div>
        <h4>Most Concurrented:</h4>
        <p>{coincidence ? coincidence.option : `------`}</p>
      </div>
      <div>
        <h4>Option:</h4>
        <p>
          {/* If randomOption is empty then return ------ if not return the option */}
          {Object.keys(randomOption).length === 0
            ? `------`
            : randomOption.option}
        </p>
      </div>
    </Wrapper>
  );
};

export default Statistics;
