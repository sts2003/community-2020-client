import React from "react";
import MM00_V from "../Components/screens/MM00_V";
import { Route } from "react-router-dom";
import FreeBoard from "./screens/FreeBoard";
import DocsBoard from "./screens/DocsBoard";
import GalleryBoard from "./screens/GalleryBoard";
import Header from "./screens/Header";
import Write from "./screens/Write";
import Detail from "./screens/Detail";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Route path="/" component={Header} />
        <Route exact path="/" component={MM00_V} />
        <Route exact path="/freeBoard" component={FreeBoard} />
        <Route exact path="/docsBoard" component={DocsBoard} />
        <Route exact path="/galleryBoard" component={GalleryBoard} />
        <Route exact path="/write/:boardType" component={Write} />
        <Route exact path="/detail/:id" component={Detail} />
      </div>
    );
  }
}

export default App;
