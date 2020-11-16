import {useEffect, useState} from 'react';
import API from '../util/API';
import Calendar from '../pages/Calendar';

function HomePage() {
  const [data, setData] = useState(null);
  useEffect(() => {
    API.getPublicExample().then((response) => {
      setData(response.data);
    });
  }, []);
  return (
    <div>
      <h1>Public Page</h1>
      <h3>Public API Data</h3>
      <p>{data && data.message}</p>
      <Calendar />
    </div>
  );
}
export default HomePage;
