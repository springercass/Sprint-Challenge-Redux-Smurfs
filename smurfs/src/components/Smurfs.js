import React from "react";
import { connect } from "react-redux";
import { getSmurf, addSmurf } from "../actions";
import Smurf from "./Smurf";
import AddSmurf from "./AddSmurf";

class Smurfs extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      age: "",
      height: ""
    };
  }

  componentDidMount() {
    this.props.getSmurf();
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const newSmurf = {
      name: this.state.name,
      age: parseInt(this.state.age),
      height: this.state.height
    };
    return (
      <div>
        <div>
          {this.props.smurfs.map(smurf => (
            <Smurf key={smurf.id} {...smurf} />
          ))}
        </div>
        <AddSmurf
          {...this.state}
          handleChange={this.handleChange}
          addSmurf={this.props.addSmurf}
          newSmurf={newSmurf}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs
});

export default connect(
  mapStateToProps,
  { getSmurf, addSmurf }
)(Smurfs);
