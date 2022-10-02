import { AddCity } from "./components/AddCity";

export const WeatherApp = () => {

const [city, setCity] = useState("Lima")
  
  const onAddCity = (newCity) => {
  }


  return (
    <>
      <h1>WeatherApp React App</h1>
      <AddCity onNewCity={(event)=> onAddCity(event)}/>

    </>
  );
};
