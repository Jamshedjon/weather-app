const KEY = "467143a2e9e1de3de89328bf80dd0625"; //API
//request get date
const getDate = async (city) => {
  const base = "https://api.openweathermap.org/data/2.5/weather";
  const query = `?q=${city}&units=metric&appid=${KEY}`;
  loader(true);
  const req = await fetch(base + query);
  const date = await req.json();
  loader(false);
  return date;
};
