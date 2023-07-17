import React, { useState } from "react";
import Header from "./Header";
import TicketControl from "./TicketControl";
import ToggleTheme from "./ToggleTheme";
import { ThemeContext, themes } from "../context/theme-context";

function App(){
  const [theme, setTheme] = useState(themes.light);

  document.body.style.backgroundColor = theme.backgroundColor;
  document.body.style.color = theme.textColor;

  function toggleTheme() {
    setTheme(theme =>
      theme.textColor === "AntiqueWhite" ? themes.light : themes.dark
      );
  }

  return ( 
    <ThemeContext.Provider value={theme}>
      <Header />
      <TicketControl />
      <ThemeContext.Consumer> 
        {contextTheme => <ToggleTheme theme={contextTheme} toggleTheme={toggleTheme}/>}
      </ThemeContext.Consumer> 
    </ThemeContext.Provider>
  );
}

export default App;

// to remove babel warning on npm start, run this command:
// npm install --save-dev @babel/plugin-proposal-private-property-in-object