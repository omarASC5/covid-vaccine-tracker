import React, { useEffect, useState } from 'react';
import { updateData } from '../../data/updateData';
import getData from '../../data/getData';
import World from '../World/World';
import { DataPointObject } from '../../data/DataPointObjectInterface';

const App = () => {
  // store all the data here,
  const [vaccineData, setVaccineData] = useState<DataPointObject[]>([]);
  const [firstTime, setFirstTime] = useState(true);

  useEffect(() => {
    // 86400 / 2
    if (firstTime) {
      getData()
        .then(data => {
          setVaccineData([...data])
          setFirstTime(false);
          console.log('YER', vaccineData)
        })
        .catch(err => console.error(err));
    } else {
      const updateTwiceDaily = 100000;
      const interval = setInterval(() => {
        getData()
          .then(data => {
            setVaccineData([...data])
            console.log('YER', vaccineData)
          })
          .catch(err => console.error(err));
      }, updateTwiceDaily);
      return () => clearInterval(interval);
    }
  }, []);

  return (
    <div className="App">
      {/* TODO: implement <World /> component */}
      <World data={vaccineData} />
    </div>
  );
}

// TODO: Add this to a React Hook (useState()/effect) storing it in <World />
  // Propogate the state as props to each country component

export interface Props {
  data: DataPointObject[];
}
export default App;
