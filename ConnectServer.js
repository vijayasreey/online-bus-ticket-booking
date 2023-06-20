import React, { useEffect, useState } from 'react';

const ExampleComponent = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/hello');
        const data = await response.text();
        setMessage(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Example Component</h1>
      <p>Message from the server: {message}</p>
    </div>
  );
};

export default ExampleComponent;