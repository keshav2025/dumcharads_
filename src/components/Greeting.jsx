import React from 'react';
import PropTypes from 'prop-types'; 

const styles = {
  header: {
    backgroundColor: '#282c34',
    minHeight: '60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: '40px',
  },
};

export default function Greeting({ username }) {
  return (
    <header style={styles.header}>
      <h1>
        Welcome {username ? ` , ${username}` : ' Guest'} !
      </h1>
    </header>
  );
}


Greeting.propTypes = {
  username: PropTypes.string,
};


Greeting.defaultProps = {
  username: '',
};
