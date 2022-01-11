import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { Page1 } from "./Pages/Page1";
import { Page2 } from "./Pages/Page2";
import { Page3 } from "./Pages/Page3";
import { Page4 } from "./Pages/Page4";

function App() {
  return (
    <div >
     <BrowserRouter>
        <Switch>
        <Route path="/SplitPage">
          <Page3/>
       </Route>
       <Route path="/addNewFriend">
          <Page4/>
       </Route>
         <Route path="/Dasboard">
            <Page2/>
          </Route>
          <Route path="/">
           <Page1/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
