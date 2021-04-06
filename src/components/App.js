import React from 'react';
import { connect } from 'react-redux';
import { fetchStates } from '../actions';
import Header from './Header';
import Map from './Map'
import './App.css';


class _App extends React.Component {

  componentDidMount() {
    this.props.fetchStates(250);
  }
  handleSelectChange = (event) => {
    console.log(event.target.value);
    this.props.fetchStates(event.target.value);
  }

  render() {
    console.log(this.props.usStates,'states')
    return (
      <div className="App">
        <Header />
        <Map handleSelectChange={this.handleSelectChange} usStates={this.props.usStates} />
      </div>
    )
  }
}

const mapStateToProps = state => {

  return {
    usStates: state.usStates
  }
}

export const App = connect(
  mapStateToProps,
  { fetchStates }
)(_App);
