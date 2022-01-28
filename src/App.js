import './App.css';
import { useState, useEffect } from "react";
import Button from './components/Button/Button';
import RedAdvice from './components/RedAdvice/RedAdvice';
import MainHeader from "./components/MainHeader/MainHeader";
import CardCoursera from "./components/CardCoursera/CardCoursera";

function Welcome(props) {
  return <h1 className='text-3xl'>Hello, {props.name}</h1>;
}

function App(props) {
  const [count, setCount] = useState(0);
  const [result, setResult] = useState(false);
  const handlerNumber = () => {
    setCount(count + 1);
    count > 5 && setResult(true);
  };

  useEffect(() => {
    document.title = `You cklicked ${count} times!`;
  });

  return (
    <div className="App">

      <MainHeader />

      <Welcome name="Alejandro" />
      <Welcome name="Andres" />
      <Welcome name="Alexandra" />

      <div>
        <p>You clicked {count} times!</p>
        <button onClick={handlerNumber}>De a uno!</button>
      </div>

      <Button setCount={setCount} count={count} />

      {result && <RedAdvice />}

      <hr />

      <div className='cards-coursera-container'>
        <CardCoursera imgUrl="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/browse/domains/physical_science_and_engineering.png"
          title="Ciencias Físicas e Ingeniería"
          span="413 cursos" />
        <CardCoursera imgUrl="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/browse/domains/physical_science_and_engineering.png"
          title="Ciencias Físicas e Ingeniería"
          span="413 cursos" />
        <CardCoursera imgUrl="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/browse/domains/physical_science_and_engineering.png"
          title="Ciencias Físicas e Ingeniería"
          span="413 cursos" />
        <CardCoursera imgUrl="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/browse/domains/physical_science_and_engineering.png"
          title="Ciencias Físicas e Ingeniería"
          span="413 cursos" />
        <CardCoursera imgUrl="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/browse/domains/physical_science_and_engineering.png"
          title="Ciencias Físicas e Ingeniería"
          span="413 cursos" />
        <CardCoursera imgUrl="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/browse/domains/physical_science_and_engineering.png"
          title="Ciencias Físicas e Ingeniería"
          span="413 cursos" />
        <CardCoursera imgUrl="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/browse/domains/physical_science_and_engineering.png"
          title="Ciencias Físicas e Ingeniería"
          span="413 cursos" />
      </div>

    </div>
  );
}



export default App;
