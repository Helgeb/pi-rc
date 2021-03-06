import { connect, ConnectedProps } from "react-redux";
import { getPiUri } from "../store/config/selector";
import { RootState } from "../store/store";

const mapStateToProps = (state: RootState) => ({
  piUri: getPiUri(state),
});

const mapDispatchToProps = {};

export const connector = connect(mapStateToProps, mapDispatchToProps);

export type PIRCProps = ConnectedProps<typeof connector>;
