/*
  *Student class from which is created student object
*/
class Student {
  constructor(github, mentorGithub, tasks) {
    this.github = github;
    this.githubLink = `https://github.com/${github}`;
    this.mentorGithub = mentorGithub;
    this.tasks = tasks;
  }

  getgithub() {
    return this.name;
  }

  setgithub(name) {
    this.name = name;
  }

  getgithubLink() {
    return this.githubLink;
  }

  setgithubLink(link) {
    this.githubLink = link;
  }

  gettasks() {
    return this.tasks;
  }

  settasks(array) {
    this.tasks = array;
  }

  getmentorGithub() {
    return this.getmentorGithub;
  }

  setmentorGithub(githubLogin) {
    this.mentorGithub = githubLogin;
  }
}

module.exports = Student;
