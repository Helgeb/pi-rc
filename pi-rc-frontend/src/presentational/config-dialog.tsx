import React, { useState } from "react";
import { ConfigDialogProps, connector } from "./../containers/config-dialog";

const ConfigDialog = (props: ConfigDialogProps) => {
  const { piUri, setPiUriSuccess } = props;

  const [currentPiUri, setCurrentPiUri] = useState(piUri);

  return (
    <div>
      <input
        onChange={(event) => setCurrentPiUri(event.target.value)}
        type="text"
        name="piUriInput"
        value={currentPiUri}
      />
      <button
        className="bg-pink-600"
        onClick={() => setPiUriSuccess(currentPiUri)}
      >
        Save
      </button>
    </div>
  );
};

export default connector(ConfigDialog);
