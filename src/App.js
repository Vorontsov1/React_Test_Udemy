import { Component } from "react";

import "./App.css";

class WhoAmI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      years: 27,
      position: "",
    };
  }

  nextYear = () => {
    this.setState((state) => ({
      years: state.years + 1,
    }));
  };

  commitInputChenges = (e, color) => {
    console.log(color);
    this.setState({
      position: e.target.value,
    });
  };
  render() {
    const { name, surname, link } = this.props;
    const { position, years } = this.state;

    return (
      <div>
        <button onClick={this.nextYear}> {this.state.text}+++</button>
        <h1>
          Myname is {name}, surname - {surname}, age - {years}, position -{" "}
          {position}
        </h1>
        <a href={link}>My profile</a>
        <form>
          <span>Введіть посаду</span>
          <input type="text" onChange={(e) =>this.commitInputChenges(e, 'some color')} />
        </form>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <WhoAmI
        name="Джеймс"
        surname="Гетфілд"
        link="https://uk.wikipedia.org/wiki/%D0%94%D0%B6%D0%B5%D0%B9%D0%BC%D1%81_%D0%93%D0%B5%D1%82%D1%84%D1%96%D0%BB%D0%B4"
      />
      <WhoAmI
        name="Ларс"
        surname="Ульріх"
        link="https://uk.wikipedia.org/wiki/%D0%9B%D0%B0%D1%80%D1%81_%D0%A3%D0%BB%D1%8C%D1%80%D1%96%D1%85"
      />
    </div>
  );
}

export default App;
