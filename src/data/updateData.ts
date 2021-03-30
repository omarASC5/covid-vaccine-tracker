import getData from './getData';
import { DataPointObject } from '../data/DataPointObjectInterface';

export const updateData = async (
    whenInMs: number,
    setData: React.Dispatch<React.SetStateAction<DataPointObject[]>>,
    vaccineData: DataPointObject[]) => {
    setInterval(() => {
      getData()
        .then(data => {
          setData([...vaccineData])
        })
        .catch(err => console.error(err));
    }, whenInMs);
  };
  
