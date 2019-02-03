/* eslint-disable no-undef */
function getMentorFromLocalstorage() {
  let value = localStorage.getItem('mentor-dashboard');
  if (value) {
    value = JSON.parse(value);
    return value.mentorGithub;
  }
  return '';
}

module.exports = getMentorFromLocalstorage;
