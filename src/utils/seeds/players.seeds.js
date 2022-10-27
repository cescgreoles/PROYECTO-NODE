const { mongoose } = require("mongoose");
const Player = require("../../api/players/players.model");
const { DB_URL } = require("../database/db");

const players = [
  {
    nombre: "Unai Simón",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Unai_Sim%C3%B3n_Mendibil.jpg/490px-Unai_Sim%C3%B3n_Mendibil.jpg",
    Equipo: "Athletic Club de Bilbao",
    age: 25,
    Dorsal: 23,
    Position: "Portero",
  },
  {
    nombre: "David Raya",
    img: "https://upload.wikimedia.org/wikipedia/commons/0/0c/David_Raya%2C_Brentford_F.C._footballer%2C_July_2021.jpg",
    Equipo: "Brendford F.C",
    age: 27,
    Dorsal: 13,
    Position: "Portero",
  },
  {
    nombre: "Robert Sanchez",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Robert_Sanchez_2022.jpg/440px-Robert_Sanchez_2022.jpg",
    Equipo: "Brighton C.F",
    age: 24,
    Dorsal: 1,
    Position: "Portero",
  },
  {
    nombre: "César Azpiliqueta",
    img: "https://upload.wikimedia.org/wikipedia/commons/0/0b/C%C3%A9sar_Azpilicueta_-_%D0%A1%D0%B5%D1%81%D0%B0%D1%80_%D0%90%D1%81%D0%BF%D0%B8%D0%BB%D0%B8%D0%BA%D1%83%D1%8D%D1%82%D0%B0_%2822362918831%29.jpg",
    Equipo: "Chelsea F.C",
    age: 33,
    Dorsal: 2,
    Position: "Defensa",
  },
  {
    nombre: "Eric Garcia",
    img: "https://upload.wikimedia.org/wikipedia/commons/6/60/BenficaBarcelona20210928-002_%28cropped%29.jpg",
    Equipo: "F.C Barcelona",
    age: 21,
    Dorsal: 3,
    Position: "Defensa",
  },
  {
    nombre: "Pau Torres",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Manchester_United_v_Villarreal_CF%2C_29_September_2021_%2822%29_%28cropped%29.jpg/490px-Manchester_United_v_Villarreal_CF%2C_29_September_2021_%2822%29_%28cropped%29.jpg",
    Equipo: "Villarreal F.C",
    age: 25,
    Dorsal: 4,
    Position: "Defensa",
  },
  {
    nombre: "Hugo Guillamón",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Hugo_Guillam%C3%B3n_2020.png/490px-Hugo_Guillam%C3%B3n_2020.png",
    Equipo: "Valencia F.C",
    age: 22,
    Dorsal: 12,
    Position: "Defensa",
  },
  {
    nombre: "Jose Luís Gaya",
    img: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Jose_Gaya_2015_%28cropped%29.jpg",
    Equipo: "Valencia F.C",
    age: 27,
    Dorsal: 14,
    Position: "Defensa",
  },
  {
    nombre: "Jordi Alba",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Russia-Spain_2017_%2811%29.jpg/490px-Russia-Spain_2017_%2811%29.jpg",
    Equipo: "F.C Barcelona",
    age: 33,
    Dorsal: 18,
    Position: "Defensa",
  },
  {
    nombre: "Diego Llorente",
    img: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Real_Sociedad_-_Red_Bull_Salzburgo_62_%2826433581918%29_%28cropped%29.jpg",
    Equipo: "Leeds United F.C",
    age: 29,
    Dorsal: 17,
    Position: "Defensa",
  },
  {
    nombre: "Dani Carvajal",
    img: "https://upload.wikimedia.org/wikipedia/commons/4/40/Daniel_Carvajal_2015.jpg",
    Equipo: "Real Madrid C.F",
    age: 30,
    Dorsal: 20,
    Position: "Defensa",
  },
  {
    nombre: "Sergio Busquets",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Sergio_Busquets_2018.jpg/490px-Sergio_Busquets_2018.jpg",
    Equipo: "F.C.Barcelona",
    age: 34,
    Dorsal: 5,
    Position: "Mediocentro",
  },
  {
    nombre: "Marcos Llorente",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Marcos_Llorente_2019.jpg/450px-Marcos_Llorente_2019.jpg",
    Equipo: "Atletico de Madrid",
    age: 27,
    Dorsal: 6,
    Position: "Mediocentro",
  },
  {
    nombre: "Koke Resurreccion",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Koke_2019.jpg/540px-Koke_2019.jpg",
    Equipo: "Atletico de Madrid",
    age: 30,
    Dorsal: 8,
    Position: "Mediocentro",
  },
  {
    nombre: "Gavi Páez",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Gavi_%28footballer%29.jpg/490px-Gavi_%28footballer%29.jpg",
    Equipo: "F.C.Barcelona",
    age: 18,
    Dorsal: 9,
    Position: "Mediocentro",
  },
  {
    nombre: "Marco Asensio",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Marco_Asensio_2018.jpg/500px-Marco_Asensio_2018.jpg",
    Equipo: "Madrid F.C",
    age: 26,
    Dorsal: 10,
    Position: "Mediocentro",
  },
  {
    nombre: "Rodri Hernández",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/UEFA_EURO_qualifiers_Sweden_vs_Spain_20191015_123_%28cropped%29.jpg/490px-UEFA_EURO_qualifiers_Sweden_vs_Spain_20191015_123_%28cropped%29.jpg",
    Equipo: "Manchester City",
    age: 26,
    Dorsal: 16,
    Position: "Mediocentro",
  },
  {
    nombre: "Carlos Soler",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Carlos_Soler_2020.png/490px-Carlos_Soler_2020.png",
    Equipo: "València F.C",
    age: 25,
    Dorsal: 19,
    Position: "Mediocentro",
  },
  {
    nombre: "Pedri González",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Pedri.png/490px-Pedri.png",
    Equipo: "F.C.Barcelona",
    age: 19,
    Dorsal: 21,
    Position: "Mediocentro",
  },
  {
    nombre: "Nico Williams",
    img: "https://img.a.transfermarkt.technology/portrait/big/709187-1644238283.jpg?lm=1",
    Equipo: "Atheltic Club de Bilbao",
    age: 20,
    Dorsal: 2,
    Position: "Delantero",
  },
  {
    nombre: "Borja Iglesias",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Borja_iglesias_2019001.jpg/490px-Borja_iglesias_2019001.jpg",
    Equipo: "Real Betis Balompié",
    age: 29,
    Dorsal: 3,
    Position: "Delantero",
  },
  {
    nombre: "Alvaro Morata",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/%C3%81lvaro_Morata.jpg/440px-%C3%81lvaro_Morata.jpg",
    Equipo: "Atletico de Madrid",
    age: 30,
    Dorsal: 7,
    Position: "Delantero",
  },
  {
    nombre: "Ferran Torres",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Ferran_Torres_2019.png/490px-Ferran_Torres_2019.png",
    Equipo: "F.C.Barcelona",
    age: 22,
    Dorsal: 11,
    Position: "Delantero",
  },
  {
    nombre: "Yeremi Pino",
    img: "https://upload.wikimedia.org/wikipedia/commons/8/80/Manchester_United_v_Villarreal_CF%2C_29_September_2021_%2807%29_%28cropped%29.jpg",
    Equipo: "Villarreal F.C",
    age: 20,
    Dorsal: 15,
    Position: "Delantero",
  },
  {
    nombre: "Pablo Sarabia",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/2019-07-17_SG_Dynamo_Dresden_vs._Paris_Saint-Germain_by_Sandro_Halank%E2%80%93017_%28cropped%29.jpg/500px-2019-07-17_SG_Dynamo_Dresden_vs._Paris_Saint-Germain_by_Sandro_Halank%E2%80%93017_%28cropped%29.jpg",
    Equipo: "Paris Saint Germain",
    age: 30,
    Dorsal: 22,
    Position: "Delantero",
  },
];

mongoose
  .connect(DB_URL)
  .then(async () => {
    const allPlayers = await Player.find().lean();

    if (!allPlayers.length) {
      console.log("[seed]: No se encuentran personajes, continuo...");
    } else {
      console.log(`[seed]: Encontrados los ${allPlayers.length} jugadores.`);
      await Player.collection.drop();
      console.log("[seed]: Los jugadores han sido eliminados correctamente");
    }
  })
  .catch((error) =>
    console.log("[seed]: Error eliminando la colección -->", error)
  )
  .then(async () => {
    await Player.insertMany(players);
    console.log("[seed]: Nuevos jugadores añadidos con éxito");
  })
  .catch((error) => console.log("[seed]: Error añadiendo las peliculas", error))
  .finally(() => mongoose.disconnect());
