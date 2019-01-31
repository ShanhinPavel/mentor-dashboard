const getGithubLogin = require('../utils/getGithubLogin');
const Mentor = require('../classes/Mentor');
/*
  *This function takes mentor's sheet and create mentor's collection
*/
function getMentors(sheetOfMentors) {
  const objectOfMentors = {};

  sheetOfMentors.forEach((mentorElement) => {
    const fullMentorName = `${mentorElement.Name} ${mentorElement.Surname}`;
    const githubLink = mentorElement.GitHub;
    const github = getGithubLogin(githubLink).toLowerCase();

    // Create mentor object and add it to collection of mentors
    const mentor = new Mentor(fullMentorName, github, githubLink);
    objectOfMentors[github] = mentor;
  });

  // Additional mentors which is not mentor excel
  const additionalMentor1 = new Mentor('Sergey Ovsyanik', 'naaruson', 'https://github.com/NaaruSon');
  objectOfMentors.naaruson = additionalMentor1;
  const additionalMentor2 = new Mentor('Denis', 'bloodofden', 'https://github.com/BloodofDen');
  objectOfMentors.bloodofden = additionalMentor2;
  const additionalMentor3 = new Mentor('Dzmitry Varabei', 'dzmitry-varabei', 'https://github.com/dzmitry-varabei');
  objectOfMentors['dzmitry-varabei'] = additionalMentor3;
  const additionalMentor4 = new Mentor('Varvara Turovetc', 'turovets', 'https://github.com/turovets');
  objectOfMentors.turovets = additionalMentor4;

  return objectOfMentors;
}
module.exports = getMentors;
