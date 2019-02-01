const React = require('react');
const ReactDOM = require('react-dom');
const mentorStudent = require('./mentor-student');

function WriteJson(props) {
  const { json } = props;
  return (
    <div>{json.tasks.listOfTasks}</div>
  );
}
ReactDOM.render(<WriteJson json={mentorStudent} />, document.getElementById('root'));

