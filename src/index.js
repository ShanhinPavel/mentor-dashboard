const React = require('react');
const ReactDOM = require('react-dom');
const PropTypes = require('react-prop-types');
const mentorStudent = require('./mentor-student.json');
const Select = require('./allComponents/Select/Select');
const getMentorFromLocalstorage = require('./allComponents/Utils/getMentorFromLocalstorage');

const { allMentorsNames, tasks, mentor } = mentorStudent;
const mentorGithub = getMentorFromLocalstorage();

function App(props) {
  const { data, name } = props;
  return (
    <div>
      <Select data={data} name={name} />
    </div>
  );
}

App.propTypes = {
  data: PropTypes.array,
  name: PropTypes.string,
};

ReactDOM.render(<App data={allMentorsNames} name={mentorGithub} />, document.getElementById('root'));
