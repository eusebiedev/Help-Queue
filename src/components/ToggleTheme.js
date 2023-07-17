import React from "react";
import PropTypes from "prop-types";

function ToggleTheme(props) {
  const { theme, toggleTheme } = props;

  const styles = {
    backgroundColor: theme.buttonBackground,
    color: theme.textColor
  }
  
  return (
    <React.Fragment>
        <hr />
      <button style={styles} onClick={toggleTheme}>
        {theme.textColor === "AntiqueWhite" ? "toggle light theme" : "toggle dark theme"}
      </button>

    </React.Fragment>
  );
}

ToggleTheme.propTypes = {
  toggleTheme: PropTypes.func,
  theme: PropTypes.object
}

export default ToggleTheme;