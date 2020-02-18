import React from "react";
import "./Tablemierda.css";

const FilterableTable = require("react-filterable-table");

export const Tablemierda = (props) => {
  let data = [
    {
      "_id": "5e30a8fb53530e712391bd80",
      "nombre": "Guillermo",
      "apellido": "Juancho",
      "puesto": "Esclavo",
      "estado": false
    },
    {
      "_id": "5e30a8fb470a80dfe51fa64d",
      "nombre": "Pedro",
      "apellido": "Juancho",
      "puesto": "Rey",
      "estado": true
    },
    {
      "_id": "5e30a8fbe05136f9d36a6cb4",
      "nombre": "Juancho",
      "apellido": "Guillermo",
      "puesto": "Esclavo",
      "estado": true
    },
    {
      "_id": "5e30a8fb8aaac2ec3870ace4",
      "nombre": "Juancho",
      "apellido": "Juancho",
      "puesto": "Peón",
      "estado": true
    },
    {
      "_id": "5e30a8fba9578b8e4b625132",
      "nombre": "Pedro",
      "apellido": "Pedro",
      "puesto": "Esclavo",
      "estado": true
    },
    {
      "_id": "5e30a8fb17c1403541bf3c1c",
      "nombre": "Guillermo",
      "apellido": "Pedro",
      "puesto": "Peón",
      "estado": false
    },
    {
      "_id": "5e30a8fba6fb874d1d7f23fd",
      "nombre": "Guillermo",
      "apellido": "Pedro",
      "puesto": "Peón",
      "estado": true
    },
    {
      "_id": "5e30a8fba5d88b9168dc98a9",
      "nombre": "Pedro",
      "apellido": "Guillermo",
      "puesto": "Esclavo",
      "estado": true
    },
    {
      "_id": "5e30a8fb92058d28104ed95d",
      "nombre": "Guillermo",
      "apellido": "Guillermo",
      "puesto": "Peón",
      "estado": false
    },
    {
      "_id": "5e30a8fbe2047009624b281e",
      "nombre": "Pedro",
      "apellido": "Juancho",
      "puesto": "Peón",
      "estado": true
    },
    {
      "_id": "5e30a8fbd368ae0c590491d6",
      "nombre": "Juancho",
      "apellido": "Pedro",
      "puesto": "Rey",
      "estado": false
    },
    {
      "_id": "5e30a8fbe1e49550864f1949",
      "nombre": "Guillermo",
      "apellido": "Guillermo",
      "puesto": "Esclavo",
      "estado": true
    },
    {
      "_id": "5e30a8fbc14ac4005725719a",
      "nombre": "Juancho",
      "apellido": "Juancho",
      "puesto": "Rey",
      "estado": false
    },
    {
      "_id": "5e30a8fb29ab697ed6497b49",
      "nombre": "Guillermo",
      "apellido": "Pedro",
      "puesto": "Peón",
      "estado": false
    },
    {
      "_id": "5e30a8fb2adba063979014a7",
      "nombre": "Guillermo",
      "apellido": "Guillermo",
      "puesto": "Peón",
      "estado": false
    },
    {
      "_id": "5e30a8fb1cae0038879c91ee",
      "nombre": "Guillermo",
      "apellido": "Pedro",
      "puesto": "Esclavo",
      "estado": false
    },
    {
      "_id": "5e30a8fb1c93a0a67092706d",
      "nombre": "Guillermo",
      "apellido": "Juancho",
      "puesto": "Rey",
      "estado": true
    },
    {
      "_id": "5e30a8fb72824cdd9dceb9e2",
      "nombre": "Pedro",
      "apellido": "Pedro",
      "puesto": "Rey",
      "estado": true
    },
    {
      "_id": "5e30a8fbd029101020762810",
      "nombre": "Pedro",
      "apellido": "Juancho",
      "puesto": "Rey",
      "estado": true
    },
    {
      "_id": "5e30a8fb4aac50179c796fac",
      "nombre": "Juancho",
      "apellido": "Guillermo",
      "puesto": "Esclavo",
      "estado": true
    },
    {
      "_id": "5e30a8fb371eb858cda678ea",
      "nombre": "Pedro",
      "apellido": "Guillermo",
      "puesto": "Esclavo",
      "estado": true
    },
    {
      "_id": "5e30a8fb7f1eb7eec796fae2",
      "nombre": "Pedro",
      "apellido": "Guillermo",
      "puesto": "Peón",
      "estado": true
    },
    {
      "_id": "5e30a8fb951e0773ff994b87",
      "nombre": "Guillermo",
      "apellido": "Guillermo",
      "puesto": "Peón",
      "estado": false
    },
    {
      "_id": "5e30a8fbfc7fb97215f5ef06",
      "nombre": "Guillermo",
      "apellido": "Juancho",
      "puesto": "Rey",
      "estado": false
    },
    {
      "_id": "5e30a8fbf15191eb4f0ca4bb",
      "nombre": "Pedro",
      "apellido": "Guillermo",
      "puesto": "Rey",
      "estado": true
    },
    {
      "_id": "5e30a8fb1c91725d7a5f8167",
      "nombre": "Guillermo",
      "apellido": "Guillermo",
      "puesto": "Rey",
      "estado": false
    },
    {
      "_id": "5e30a8fb2278fd50e625a35c",
      "nombre": "Pedro",
      "apellido": "Pedro",
      "puesto": "Peón",
      "estado": false
    },
    {
      "_id": "5e30a8fbc4b112e65d4d478e",
      "nombre": "Juancho",
      "apellido": "Juancho",
      "puesto": "Rey",
      "estado": false
    },
    {
      "_id": "5e30a8fb4bf391801a008870",
      "nombre": "Pedro",
      "apellido": "Pedro",
      "puesto": "Rey",
      "estado": false
    },
    {
      "_id": "5e30a8fb87cc0ff098ade4ca",
      "nombre": "Pedro",
      "apellido": "Juancho",
      "puesto": "Rey",
      "estado": false
    },
    {
      "_id": "5e30a8fba2b863a626d2f643",
      "nombre": "Juancho",
      "apellido": "Guillermo",
      "puesto": "Peón",
      "estado": false
    },
    {
      "_id": "5e30a8fbf795250edb831a3c",
      "nombre": "Juancho",
      "apellido": "Guillermo",
      "puesto": "Esclavo",
      "estado": false
    },
    {
      "_id": "5e30a8fb10ac1663c31483ac",
      "nombre": "Guillermo",
      "apellido": "Guillermo",
      "puesto": "Esclavo",
      "estado": true
    },
    {
      "_id": "5e30a8fb1400bfe2800f0cb8",
      "nombre": "Pedro",
      "apellido": "Pedro",
      "puesto": "Peón",
      "estado": true
    },
    {
      "_id": "5e30a8fb3f690b3e5639f70c",
      "nombre": "Pedro",
      "apellido": "Guillermo",
      "puesto": "Rey",
      "estado": true
    },
    {
      "_id": "5e30a8fbb3ed8a638863d29b",
      "nombre": "Pedro",
      "apellido": "Guillermo",
      "puesto": "Esclavo",
      "estado": false
    },
    {
      "_id": "5e30a8fbd7184999a1e9b28b",
      "nombre": "Pedro",
      "apellido": "Juancho",
      "puesto": "Rey",
      "estado": true
    },
    {
      "_id": "5e30a8fbbc7f4c2500bd198f",
      "nombre": "Juancho",
      "apellido": "Pedro",
      "puesto": "Esclavo",
      "estado": false
    },
    {
      "_id": "5e30a8fb9cf6c6cbbad07892",
      "nombre": "Juancho",
      "apellido": "Juancho",
      "puesto": "Esclavo",
      "estado": false
    },
    {
      "_id": "5e30a8fb1a1bb0590cf0ca81",
      "nombre": "Guillermo",
      "apellido": "Pedro",
      "puesto": "Esclavo",
      "estado": false
    },
    {
      "_id": "5e30a8fbb0ecbca2de5f6554",
      "nombre": "Juancho",
      "apellido": "Guillermo",
      "puesto": "Esclavo",
      "estado": true
    },
    {
      "_id": "5e30a8fb2d47c49254dbd06b",
      "nombre": "Pedro",
      "apellido": "Guillermo",
      "puesto": "Peón",
      "estado": false
    },
    {
      "_id": "5e30a8fb9bef23ed43caad8b",
      "nombre": "Juancho",
      "apellido": "Juancho",
      "puesto": "Peón",
      "estado": true
    },
    {
      "_id": "5e30a8fb4b569c4dd83cf3ba",
      "nombre": "Guillermo",
      "apellido": "Juancho",
      "puesto": "Peón",
      "estado": true
    },
    {
      "_id": "5e30a8fbb661f696023e6a45",
      "nombre": "Juancho",
      "apellido": "Juancho",
      "puesto": "Esclavo",
      "estado": false
    },
    {
      "_id": "5e30a8fb8d698f6993b52ce1",
      "nombre": "Pedro",
      "apellido": "Juancho",
      "puesto": "Peón",
      "estado": true
    },
    {
      "_id": "5e30a8fbc4e8c4de46471880",
      "nombre": "Guillermo",
      "apellido": "Juancho",
      "puesto": "Rey",
      "estado": true
    },
    {
      "_id": "5e30a8fb3aeeab3a85bde96f",
      "nombre": "Juancho",
      "apellido": "Pedro",
      "puesto": "Peón",
      "estado": true
    },
    {
      "_id": "5e30a8fbc6ee870538591ef5",
      "nombre": "Guillermo",
      "apellido": "Juancho",
      "puesto": "Rey",
      "estado": true
    },
    {
      "_id": "5e30a8fb7b93510d7e85ca5a",
      "nombre": "Guillermo",
      "apellido": "Pedro",
      "puesto": "Esclavo",
      "estado": true
    },
    {
      "_id": "5e30a8fbb6e7ad3ab7a02cee",
      "nombre": "Guillermo",
      "apellido": "Juancho",
      "puesto": "Peón",
      "estado": true
    },
    {
      "_id": "5e30a8fbda6f33cd97f5d7dd",
      "nombre": "Juancho",
      "apellido": "Pedro",
      "puesto": "Esclavo",
      "estado": false
    },
    {
      "_id": "5e30a8fb672725dc84e77119",
      "nombre": "Guillermo",
      "apellido": "Juancho",
      "puesto": "Esclavo",
      "estado": false
    },
    {
      "_id": "5e30a8fb9117328676434bc0",
      "nombre": "Guillermo",
      "apellido": "Pedro",
      "puesto": "Esclavo",
      "estado": false
    },
    {
      "_id": "5e30a8fbbe8a08377950419a",
      "nombre": "Guillermo",
      "apellido": "Juancho",
      "puesto": "Esclavo",
      "estado": false
    },
    {
      "_id": "5e30a8fb76891f7cf69716d5",
      "nombre": "Juancho",
      "apellido": "Pedro",
      "puesto": "Rey",
      "estado": true
    },
    {
      "_id": "5e30a8fb3df9b43521c49351",
      "nombre": "Guillermo",
      "apellido": "Juancho",
      "puesto": "Esclavo",
      "estado": false
    },
    {
      "_id": "5e30a8fb3901b637b8d7ccef",
      "nombre": "Pedro",
      "apellido": "Guillermo",
      "puesto": "Esclavo",
      "estado": false
    },
    {
      "_id": "5e30a8fb357c87451720f163",
      "nombre": "Pedro",
      "apellido": "Juancho",
      "puesto": "Peón",
      "estado": false
    },
    {
      "_id": "5e30a8fbc45527fe5f185428",
      "nombre": "Juancho",
      "apellido": "Pedro",
      "puesto": "Esclavo",
      "estado": false
    },
    {
      "_id": "5e30a8fbb07d3a0ff8e0ab3a",
      "nombre": "Juancho",
      "apellido": "Juancho",
      "puesto": "Peón",
      "estado": false
    },
    {
      "_id": "5e30a8fb0dfbba2ef3ce36c1",
      "nombre": "Guillermo",
      "apellido": "Guillermo",
      "puesto": "Esclavo",
      "estado": false
    },
    {
      "_id": "5e30a8fb1b044057840e2eb2",
      "nombre": "Guillermo",
      "apellido": "Juancho",
      "puesto": "Esclavo",
      "estado": true
    },
    {
      "_id": "5e30a8fb757a41d25978314d",
      "nombre": "Guillermo",
      "apellido": "Juancho",
      "puesto": "Rey",
      "estado": true
    },
    {
      "_id": "5e30a8fb9026e8bdb76be376",
      "nombre": "Juancho",
      "apellido": "Pedro",
      "puesto": "Peón",
      "estado": true
    },
    {
      "_id": "5e30a8fbce2f3aad2b1b87cf",
      "nombre": "Guillermo",
      "apellido": "Pedro",
      "puesto": "Rey",
      "estado": true
    },
    {
      "_id": "5e30a8fb5d86aa0b24a50b08",
      "nombre": "Pedro",
      "apellido": "Juancho",
      "puesto": "Rey",
      "estado": true
    },
    {
      "_id": "5e30a8fbd5a3da84467bc1aa",
      "nombre": "Juancho",
      "apellido": "Pedro",
      "puesto": "Rey",
      "estado": false
    },
    {
      "_id": "5e30a8fbee1fbd2d404a0b5b",
      "nombre": "Guillermo",
      "apellido": "Juancho",
      "puesto": "Peón",
      "estado": false
    },
    {
      "_id": "5e30a8fbf1a5c63c0a6dece2",
      "nombre": "Juancho",
      "apellido": "Pedro",
      "puesto": "Rey",
      "estado": false
    },
    {
      "_id": "5e30a8fbe90514ae5a5f40f1",
      "nombre": "Pedro",
      "apellido": "Pedro",
      "puesto": "Rey",
      "estado": false
    },
    {
      "_id": "5e30a8fbfb5bd100b6ed497e",
      "nombre": "Juancho",
      "apellido": "Pedro",
      "puesto": "Peón",
      "estado": false
    },
    {
      "_id": "5e30a8fbc95168bfe2298fb0",
      "nombre": "Pedro",
      "apellido": "Pedro",
      "puesto": "Rey",
      "estado": false
    },
    {
      "_id": "5e30a8fb38506f535e65021b",
      "nombre": "Pedro",
      "apellido": "Juancho",
      "puesto": "Peón",
      "estado": true
    },
    {
      "_id": "5e30a8fbfce10605613f714b",
      "nombre": "Guillermo",
      "apellido": "Guillermo",
      "puesto": "Peón",
      "estado": false
    },
    {
      "_id": "5e30a8fb39b5bc92ede2efde",
      "nombre": "Juancho",
      "apellido": "Pedro",
      "puesto": "Esclavo",
      "estado": false
    },
    {
      "_id": "5e30a8fb7241a7fab58da010",
      "nombre": "Juancho",
      "apellido": "Guillermo",
      "puesto": "Rey",
      "estado": true
    },
    {
      "_id": "5e30a8fbe8b1dad132342f81",
      "nombre": "Guillermo",
      "apellido": "Guillermo",
      "puesto": "Peón",
      "estado": true
    },
    {
      "_id": "5e30a8fbc5e241db6cf956af",
      "nombre": "Guillermo",
      "apellido": "Pedro",
      "puesto": "Esclavo",
      "estado": false
    },
    {
      "_id": "5e30a8fb66748f7b72d1b0d7",
      "nombre": "Juancho",
      "apellido": "Guillermo",
      "puesto": "Peón",
      "estado": true
    },
    {
      "_id": "5e30a8fb0b6c766524396b75",
      "nombre": "Juancho",
      "apellido": "Guillermo",
      "puesto": "Esclavo",
      "estado": true
    },
    {
      "_id": "5e30a8fb0de6f600c2073bbd",
      "nombre": "Guillermo",
      "apellido": "Guillermo",
      "puesto": "Peón",
      "estado": true
    },
    {
      "_id": "5e30a8fb4049912811f27baa",
      "nombre": "Juancho",
      "apellido": "Guillermo",
      "puesto": "Peón",
      "estado": true
    },
    {
      "_id": "5e30a8fb07e46aa74a6d8ee4",
      "nombre": "Juancho",
      "apellido": "Juancho",
      "puesto": "Peón",
      "estado": false
    },
    {
      "_id": "5e30a8fbe0b1234f95fc3e12",
      "nombre": "Juancho",
      "apellido": "Guillermo",
      "puesto": "Rey",
      "estado": true
    },
    {
      "_id": "5e30a8fb4a43694945b58a61",
      "nombre": "Guillermo",
      "apellido": "Pedro",
      "puesto": "Esclavo",
      "estado": true
    },
    {
      "_id": "5e30a8fbe83d270989cb6b62",
      "nombre": "Pedro",
      "apellido": "Pedro",
      "puesto": "Peón",
      "estado": true
    },
    {
      "_id": "5e30a8fbe4f27bf3a32f1cd0",
      "nombre": "Juancho",
      "apellido": "Guillermo",
      "puesto": "Peón",
      "estado": false
    },
    {
      "_id": "5e30a8fb19a54e9cbd940457",
      "nombre": "Juancho",
      "apellido": "Juancho",
      "puesto": "Rey",
      "estado": false
    },
    {
      "_id": "5e30a8fbe94843fe3d29941c",
      "nombre": "Pedro",
      "apellido": "Pedro",
      "puesto": "Esclavo",
      "estado": true
    },
    {
      "_id": "5e30a8fb6f9c70511bc26d70",
      "nombre": "Pedro",
      "apellido": "Pedro",
      "puesto": "Peón",
      "estado": true
    },
    {
      "_id": "5e30a8fb9590325390191597",
      "nombre": "Pedro",
      "apellido": "Guillermo",
      "puesto": "Rey",
      "estado": false
    },
    {
      "_id": "5e30a8fb88f67ef359ebbad8",
      "nombre": "Pedro",
      "apellido": "Pedro",
      "puesto": "Esclavo",
      "estado": true
    },
    {
      "_id": "5e30a8fbc605e016da32fb19",
      "nombre": "Juancho",
      "apellido": "Guillermo",
      "puesto": "Peón",
      "estado": false
    },
    {
      "_id": "5e30a8fb8d7151b3ba35c39b",
      "nombre": "Pedro",
      "apellido": "Guillermo",
      "puesto": "Esclavo",
      "estado": true
    },
    {
      "_id": "5e30a8fbe999ea8c508e0b6d",
      "nombre": "Guillermo",
      "apellido": "Pedro",
      "puesto": "Rey",
      "estado": false
    },
    {
      "_id": "5e30a8fbe535761735de09bd",
      "nombre": "Pedro",
      "apellido": "Guillermo",
      "puesto": "Rey",
      "estado": true
    },
    {
      "_id": "5e30a8fb2e48b13c8ca23e92",
      "nombre": "Pedro",
      "apellido": "Pedro",
      "puesto": "Esclavo",
      "estado": true
    },
    {
      "_id": "5e30a8fbb8f8e9262f4c04ec",
      "nombre": "Juancho",
      "apellido": "Juancho",
      "puesto": "Rey",
      "estado": true
    },
    {
      "_id": "5e30a8fb8df040c4c0b9fa62",
      "nombre": "Juancho",
      "apellido": "Pedro",
      "puesto": "Esclavo",
      "estado": true
    },
    {
      "_id": "5e30a8fb65c17a76607f9cde",
      "nombre": "Guillermo",
      "apellido": "Guillermo",
      "puesto": "Peón",
      "estado": true
    },
    {
      "_id": "5e30a8fbfc33e53292572518",
      "nombre": "Juancho",
      "apellido": "Guillermo",
      "puesto": "Rey",
      "estado": true
    },
    {
      "_id": "5e30a8fbdd179c5879fc23e5",
      "nombre": "Pedro",
      "apellido": "Pedro",
      "puesto": "Rey",
      "estado": true
    },
    {
      "_id": "5e30a8fb59e542fe423d5143",
      "nombre": "Pedro",
      "apellido": "Juancho",
      "puesto": "Esclavo",
      "estado": true
    },
    {
      "_id": "5e30a8fb8ac56977d3aca448",
      "nombre": "Juancho",
      "apellido": "Guillermo",
      "puesto": "Rey",
      "estado": false
    },
    {
      "_id": "5e30a8fbd9af00c369510112",
      "nombre": "Pedro",
      "apellido": "Guillermo",
      "puesto": "Peón",
      "estado": false
    },
    {
      "_id": "5e30a8fbc6d75c70bfa0a3e2",
      "nombre": "Pedro",
      "apellido": "Pedro",
      "puesto": "Esclavo",
      "estado": false
    },
    {
      "_id": "5e30a8fb05fe772cfae3fc37",
      "nombre": "Juancho",
      "apellido": "Guillermo",
      "puesto": "Rey",
      "estado": true
    },
    {
      "_id": "5e30a8fbd3913c7a9cdaffdd",
      "nombre": "Pedro",
      "apellido": "Pedro",
      "puesto": "Esclavo",
      "estado": true
    },
    {
      "_id": "5e30a8fb542b8e97dfe46580",
      "nombre": "Pedro",
      "apellido": "Pedro",
      "puesto": "Rey",
      "estado": false
    },
    {
      "_id": "5e30a8fba8a22a254b2cb5a2",
      "nombre": "Juancho",
      "apellido": "Guillermo",
      "puesto": "Esclavo",
      "estado": true
    },
    {
      "_id": "5e30a8fbd78069fd417e4a2e",
      "nombre": "Juancho",
      "apellido": "Juancho",
      "puesto": "Peón",
      "estado": false
    },
    {
      "_id": "5e30a8fba9439d3d7ffadc2f",
      "nombre": "Juancho",
      "apellido": "Pedro",
      "puesto": "Esclavo",
      "estado": false
    },
    {
      "_id": "5e30a8fb5c80deb063948fd1",
      "nombre": "Guillermo",
      "apellido": "Juancho",
      "puesto": "Peón",
      "estado": true
    },
    {
      "_id": "5e30a8fbecffb8e4b4e883b1",
      "nombre": "Guillermo",
      "apellido": "Guillermo",
      "puesto": "Peón",
      "estado": false
    },
    {
      "_id": "5e30a8fb612a62edd2461c71",
      "nombre": "Pedro",
      "apellido": "Pedro",
      "puesto": "Peón",
      "estado": false
    },
    {
      "_id": "5e30a8fbad7c58a03d6e3d47",
      "nombre": "Juancho",
      "apellido": "Pedro",
      "puesto": "Esclavo",
      "estado": false
    },
    {
      "_id": "5e30a8fb847160a29b8f5181",
      "nombre": "Pedro",
      "apellido": "Guillermo",
      "puesto": "Rey",
      "estado": false
    },
    {
      "_id": "5e30a8fb332b96e41e252372",
      "nombre": "Pedro",
      "apellido": "Guillermo",
      "puesto": "Rey",
      "estado": false
    },
    {
      "_id": "5e30a8fb209168f57d88ce56",
      "nombre": "Pedro",
      "apellido": "Juancho",
      "puesto": "Rey",
      "estado": true
    },
    {
      "_id": "5e30a8fbede166bf86cbca95",
      "nombre": "Pedro",
      "apellido": "Pedro",
      "puesto": "Peón",
      "estado": true
    },
    {
      "_id": "5e30a8fbb3504aa33e40781a",
      "nombre": "Guillermo",
      "apellido": "Juancho",
      "puesto": "Rey",
      "estado": false
    },
    {
      "_id": "5e30a8fbef44de90d7318f55",
      "nombre": "Juancho",
      "apellido": "Pedro",
      "puesto": "Esclavo",
      "estado": false
    },
    {
      "_id": "5e30a8fb9998daae04fce814",
      "nombre": "Pedro",
      "apellido": "Pedro",
      "puesto": "Rey",
      "estado": true
    },
    {
      "_id": "5e30a8fbfc430860a20fcd6e",
      "nombre": "Pedro",
      "apellido": "Guillermo",
      "puesto": "Peón",
      "estado": false
    },
    {
      "_id": "5e30a8fb6d6af67d253bc07d",
      "nombre": "Guillermo",
      "apellido": "Juancho",
      "puesto": "Esclavo",
      "estado": false
    },
    {
      "_id": "5e30a8fb5715f2bbaec0a7f5",
      "nombre": "Pedro",
      "apellido": "Juancho",
      "puesto": "Esclavo",
      "estado": false
    }
  ]

  let fields = [
    {
      name: "nombre",
      displayName: "Nombre",
      inputFilterable: true,
      sortable: true
    },
    {
      name: "apellido",
      displayName: "Apellido",
      inputFilterable: true,
      exactFilterable: true,
      sortable: true
    },
    {
      name: "puesto",
      displayName: "Puesto",
      inputFilterable: true,
      exactFilterable: true,
      sortable: true
    },
    {
        name: "estado",
        displayName: "Estado",
        inputFilterable: true,
        exactFilterable: true,
        sortable: true
      }
  ];

  return (
    <FilterableTable
      namespace="People"
      initialSort="name"
      data={data}
      fields={fields}
      roRecordsMessage="No hay resultados"
      noFilteredRecordsMessage="No hay resultados"
    />
  );
};
