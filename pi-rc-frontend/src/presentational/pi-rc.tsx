import React, { useState } from "react";
import { connector, PIRCProps } from "./../containers/pi-rc";
import { getHelloWorld } from "./../service/api";

const PIRC = (props: PIRCProps) => {
  const { piUri } = props;

  const [data, setData] = useState("");

  const onClick = async () => {
    await getHelloWorld(piUri);
  };

  return (
    <div>
      {/* <p> {data}</p> */}
      <img
        src={`http://${piUri}:8001/`}
        width="640"
        height="480"
        alt="no stream"
      />
      <button className="bg-green-400 rounded-full" onClick={onClick}>
        Fetch data
      </button>
    </div>
  );
};

export default connector(PIRC);
