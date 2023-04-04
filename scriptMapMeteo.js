const APIKEY = "ac5aa62d92201ef44d930ee9d9e75c68";
let url =
  "https://api.openweathermap.org/data/2.5/weather?lat={45.4334}&lon={4.4}&appid={ac5aa62d92201ef44d930ee9d9e75c68}";
fetch(url).then((response) =>
  response.json().then((data) => console.log(data))
);
