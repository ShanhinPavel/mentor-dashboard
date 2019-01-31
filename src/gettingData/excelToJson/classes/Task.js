/*
  *Task class from which is created mentor object
*/
class Task {
  constructor(title, mark, link, status, linkPullRequest) {
    this.linkPull = linkPullRequest;
    this.title = title;
    this.mark = mark;
    this.link = link;
    this.status = status;
  }

  gettitle() {
    return this.title;
  }

  settitle(title) {
    this.title = title;
  }

  getlink() {
    return this.link;
  }

  setlink(link) {
    this.link = link;
  }

  getmark() {
    return this.mark;
  }

  setmark(mark) {
    this.mark = mark;
  }

  getstatus() {
    return this.status;
  }

  setstatus(newStatus) {
    this.status = newStatus;
  }

  getlinkPull() {
    return this.linkPull;
  }

  setlinkPull(link) {
    this.linkPull = link;
  }
}

module.exports = Task;
