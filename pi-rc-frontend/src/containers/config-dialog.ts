import { connect, ConnectedProps } from "react-redux";
import { setPiUriSuccess } from "../store/config/action";
import { getPiUri } from "../store/config/selector";
import { RootState } from "../store/store";

const mapStateToProps = (state: RootState) => ({
  piUri: getPiUri(state),
});

const mapDispatchToProps = {
  setPiUriSuccess,
};

export const connector = connect(mapStateToProps, mapDispatchToProps);

export type ConfigDialogProps = ConnectedProps<typeof connector>;
