import React, {useEffect, useState} from 'react';
import './App.css';

export default () => {
  const [user, setUser] = useState([]);
  async function callExpress(name: string) {
    const response = await fetch(`/api/say-hello/${name}`);
      try {
        response.json().then(res => setUser(res.message));
      } catch(err) {
        throw err;
      }
  }
  useEffect(() => {
    callExpress('Gmoney');
  }, [user])
  return (
    <div>
      {user}
    </div>
  );
}
