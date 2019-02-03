const React = require('react');
const PropTypes = require('react-prop-types');
const Controller = require('./Controller');

class Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: props.name };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(newName) {
    this.setState({ name: newName });
  }

  render() {
    const { name } = this.state;
    const { data } = this.props;
    return (
      <Controller onChange={this.handleChange} selected={name} collection={data} />
    );
  }
}

Select.propTypes = {
  data: PropTypes.string,
  name: PropTypes.string,
};

module.exports = Select;
