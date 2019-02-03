const React = require('react');
const ReactDOM = require('react-dom');
// const Select = require('./Select');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: null };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(newName) {
    this.setState({ name: newName });
  }

  render() {
    const { name } = this.state;
    return (
      <div>
        <h1>
          Hello my name is
          {' '}
          { name }
          !
        </h1>
        <Select onChange={this.handleChange} />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('root'));

module.exports = App;
