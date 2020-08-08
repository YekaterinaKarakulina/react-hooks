import React, { useContext } from 'react';
import ReactDOM from 'react-dom';

const MyContext = React.createContext();

const App = () => {
  return (
    <MyContext.Provider value="Hello World">
      <Child />
    </MyContext.Provider>
  )
}

const Child = () => {
  // with hook
  const value = useContext(MyContext);
  return <p>{value}</p>

  // without hook
  /* return (
    <MyContext.Consumer>
      {(value) => {
        return (
          <p>{value}</p>
        )
      }
      }
    </MyContext.Consumer>
  ) */
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
