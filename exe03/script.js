function temHabilidade(skill) {
  console.log((skills.indexOf(skill)) != -1 ? true : false);
}

var skills = ["Javascript", "ReactJS", "React Native"];

temHabilidade("React Native"); // true ou false
