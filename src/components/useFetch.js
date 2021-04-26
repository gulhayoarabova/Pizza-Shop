import { useState, useEffect } from "react";
export const UseFetch = (url,initialState) => {
    const [respData, setRespData] = useState([]);
    useEffect(() => {
     fetch (url)
    .then((resp) => resp.json())
    .then((data) => setRespData(data));
    }, [url])
    return respData;
}