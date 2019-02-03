const React = require('react');
const PropTypes = require('react-prop-types');
// const mentorStudent = require('./mentor-student');

const compare = (a, b) => {
  if (a < b) {
    return -1;
  } if (a > b) return 1;
  return 0;
};

class Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const github = e.target.value;
    const { onChange } = this.props;
    onChange(github);
    console.log(github);
  }

  render() {
    let id = 0;
    const { data } = this.props;
    const allMentorsNames = data.allMentorsNames
      .slice()
      .sort(compare);

    const options = allMentorsNames.map((element) => {
      id += 1;
      return <option value={element} key={id}>{element}</option>;
    });

    return (
      <div>
        <select id="great-names" onChange={this.handleChange}>
          <option>
            Choose mentor
          </option>
          {options}
        </select>
      </div>
    );
  }
}

Select.propTypes = {
  onChange: PropTypes.func,
  data: PropTypes.string,
};


module.exports = Select;
