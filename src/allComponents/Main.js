const React = require('react');
const ReactDOM = require('react-dom');
const View = require('./Select/View');
const Controller = require('./Select/Controller');
const mentorStudent = require('../mentor-student.json');

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
    };
  }

  handleChange(newName) {
    this.setState({ name: newName });
  }

  render() {
    const { name } = this.state;
    return (
      <div>
        <Controller onChange={this.handleChange} />
        <View name={name} />
      </div>
    );
  }
}

ReactDOM.render(<Main data={mentorStudent} />, document.getElementById('root'));
