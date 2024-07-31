import React, { useState, useEffect } from "react";

function Clock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    // Clean up the interval on unmount
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="p-0   d-flex justify-content-center align-items-center">
      {/* <h2>Current Date and Time</h2> */}
      <p className="">{date.toLocaleString()}</p>
    </div>
  );
}

export default Clock;
