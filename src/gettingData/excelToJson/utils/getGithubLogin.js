/*
  *This function returns github login of student.
  *It takes github link and splits a string to array,
  then we take from array the last element and return it.
  If github link ended with '/' we take the second element from end.
*/
function getGithubLogin(githubLink) {
  const array = githubLink.split('/');
  const length = array.length;
  let githubLogin = null;

  if (array[length - 1] === '') {
    githubLogin = array[length - 2];
  } else {
    githubLogin = array[array.length - 1];
  }
  return githubLogin;
}

module.exports = getGithubLogin;