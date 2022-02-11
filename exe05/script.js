var usuarios = [
  {
    nome: "Diego",
    habilidades: ["Javascript", "ReactJS", "Redux"]
  },
  {
    nome: "Gabriel",
    habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
  }
];


function teste (usuario) {

    for (let i = 0; i < usuario.length; i++) {
      console.log("O "+usuario[i].nome+" possui as habilidades: "+usuario[i].habilidades.join(', '));
    }
}

teste(usuarios);