import getData from './getData';

export const updateData = async (whenInMs: number) => {
    setInterval(() => {
      getData()
        .then(data => console.log(data))
        .catch(err => console.error(err));
    }, whenInMs);
  };