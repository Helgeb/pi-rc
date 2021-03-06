import React, { useState } from "react";
import { connector, PIRCProps } from "./../containers/pi-rc";
import { getHelloWorld } from "./../service/api";

const PIRC = (props: PIRCProps) => {
  const { piUri } = props;

  const [data, setData] = useState("");

  return (
    <div>
      <p> {data}</p>
      <button
        className="bg-green-400 rounded-full"
        onClick={async () => setData(await getHelloWorld(piUri))}
      >
        Fetch data
      </button>
    </div>
  );
};

export default connector(PIRC);
