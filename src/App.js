import React from "react";
import "./index.css";
import Form from "./components/Form";
import ItemList from "./components/ItemList";
import Header from "./components/Header";
import Footer from "./components/Footer";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Form />
        <ItemList/>
        <Footer />
      </div>
    )
  }
}
export default App;
