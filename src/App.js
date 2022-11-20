import "./App.css";

function WhoAmI({name, surname, link}) {
  return (
    <div>
      <h1>
        My name is {name()} , surname - {surname}
      </h1>
      <a href={link}>My profile</a>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <WhoAmI
        name={() => {return 'Джеймс'}}
        surname="Гетфілд"
        link="https://uk.wikipedia.org/wiki/%D0%94%D0%B6%D0%B5%D0%B9%D0%BC%D1%81_%D0%93%D0%B5%D1%82%D1%84%D1%96%D0%BB%D0%B4"
      />
      <WhoAmI
        name={() => {return 'Ларс'}}
        surname="Ульріх"
        link="https://uk.wikipedia.org/wiki/%D0%9B%D0%B0%D1%80%D1%81_%D0%A3%D0%BB%D1%8C%D1%80%D1%96%D1%85"
      />
    </div>
  );
}

export default App;