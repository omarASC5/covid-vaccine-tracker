import React from 'react';
import { updateData } from '../../data/updateData';

const App = () => {
  return (
    <div className="App">
      {/* TODO: implement <World /> component */}
    </div>
  );
}

// TODO: Add this to a React Hook (useState()/effect) storing it in <World />
  // Propogate the state as props to each country component
const updateTwiceDaily = Math.floor(86400 / 2);
updateData(updateTwiceDaily);

export default App;
