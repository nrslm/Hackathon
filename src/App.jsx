import './App.css'
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './actions/actions';
import Spiner from './components/Spiner'

function App() {

  const dispatch = useDispatch();
  const data = useSelector((state) => state.test.items);
  const loading = useSelector((state) => state.test.loading);
  const error = useSelector((state) => state.test.error);
  console.log(data)
  useEffect(() => {
    dispatch(fetchData('https://back.lidercargo.net/api/v1/cities'));
  }, [dispatch]);

  return (
    <div className="App">

      {loading && <Spiner />}
      {error && <p>Error: {data.error}</p>}
      {data && (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
