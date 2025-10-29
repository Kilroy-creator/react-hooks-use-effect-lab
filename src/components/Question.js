import React, { useEffect, useState } from "react";

function Question({ question, onAnswered }) {
  const [secondsRemaining, setSecondsRemaining] = useState(10);

  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setSecondsRemaining((prev) => prev - 1);
    }, 1000);

    
    return () => clearTimeout(timeout);
  }, [secondsRemaining]);

  
  useEffect(() => {
    if (secondsRemaining === 0) {
      onAnswered(false);
    }
  }, [secondsRemaining, onAnswered]);

  return (
    <div>
      <h2>{question.prompt}</h2>
      <p>{secondsRemaining} seconds remaining</p>
    </div>
  );
}

export default Question;
