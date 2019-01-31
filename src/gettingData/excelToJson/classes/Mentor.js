/*
  *Mentor class from which is created mentor object
*/
class Mentor {
  constructor(fullName, github, githubLink) {
    this.fullName = fullName;
    this.githubLink = githubLink;
    this.github = github;
    this.listOfStudents = [];
    this.students = {};
  }

  getfullName() {
    return this.fullName;
  }

  setfullName(name) {
    this.fullName = name;
  }

  getlistOfStudents() {
    return this.listOfStudents;
  }

  setlistOfStudents(list) {
    this.listOfStudents = list;
  }

  getgithubLink() {
    return this.getgithubLink;
  }

  setgithubLink(link) {
    this.githubLink = link;
  }

  getgithub() {
    return this.github;
  }
}

module.exports = Mentor;
