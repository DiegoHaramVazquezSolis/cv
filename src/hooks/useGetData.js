import { useState, useEffect } from 'react';

const useGetData = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://us-central1-gndx-cv.cloudfunctions.net/me')
        .then(response => response.json())
        .then(data => setData(data))
    }, []);
    return data;
}

export default useGetData;