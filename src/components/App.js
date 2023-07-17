import React from "react";
import Header from "./Header";
import TicketControl from "./TicketControl";

function App(){
  return ( 
    <React.Fragment>
      <Header />
      <TicketControl />
    </React.Fragment>
  );
}

export default App;

// to remove babel warning on npm start, run this command:
// npm install --save-dev @babel/plugin-proposal-private-property-in-object