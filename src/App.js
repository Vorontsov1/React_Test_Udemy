import { Component } from "react";

import "./App.css";

class WhoAmI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      years: 27,
      text: '+++'
    }
  }
   
  nextYear = () => {
    this.setState(state => (
      {
        years:  state.years +1
      }
    ))
  }

  render() {
    const {name, surname, link} = this.props;
    return(
      <div>
        <button onClick={this.nextYear}> {this.state.text}+++</button>
        <h1>Myname is {name}, surname - {surname}, age - {this.state.years}</h1>
        <a href={link}>My profile</a>
      </div>
    )
  }
}
       

function App() {
  return (
    <div className="App">
      <WhoAmI
        name='Джеймс'
        surname="Гетфілд"
        link="https://uk.wikipedia.org/wiki/%D0%94%D0%B6%D0%B5%D0%B9%D0%BC%D1%81_%D0%93%D0%B5%D1%82%D1%84%D1%96%D0%BB%D0%B4"
      />
      <WhoAmI
        name='Ларс'
        surname="Ульріх"
        link="https://uk.wikipedia.org/wiki/%D0%9B%D0%B0%D1%80%D1%81_%D0%A3%D0%BB%D1%8C%D1%80%D1%96%D1%85"
      />
    </div>
  );
}

export default App;
