import React, { useEffect, useState } from 'react'

export default function TeaPage() {
    const [tea, setTea] = useState([]);

    useEffect(() => {
        fetch('/user')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setTea(data);
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    }, []);
  return (
    
    <div>TeaPage</div>
  )
}
