module.exports = `import React from "react";
import "./placeholder.css";
import { connect } from "react-redux";
import { AppState } from "Store";
import {
  WithStyles,
  Theme,
  StyleRules,
  createStyles,
  withStyles
} from "@material-ui/core";

interface Props extends WithStyles<typeof styles> {
}

interface State {}

const styles = (theme: Theme): StyleRules => createStyles({});

class placeholder extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}
  public render() {
    return <div className="">UI code goes here!</div>;
  }
}
const mapStateToProps = (state: AppState) => ({});
const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(placeholder));
`
