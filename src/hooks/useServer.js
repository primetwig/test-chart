import { useEffect, useMemo, useState } from "react";

// const temp = [
//     {
//         id: 1, timestamp: 123, temperature: 20, data: 80
//     },
//     {
//         id: 2, timestamp: 123, temperature: 30, data: 70
//     },
// ]

const wsServerAddress = 'ws://localhost:8999'

export function useServer() {
    const [data, setData] = useState([]);

    const ws = useMemo(() => {
        const socket = new WebSocket(wsServerAddress);

        socket.onopen = function() {
            alert("Соединение установлено.");
        };

        socket.onclose = function(event) {
            if (!event.wasClean) {
                // show warning error
            }
        };

        socket.onmessage = function(event) {
            setData(data => [...data, event.data])
        };

        return socket;
    }, []);

    useEffect(() => {
        return () => ws && ws.close();
        // on mount/unmount
        // eslint-disable-next-line
    }, []);

    return data
}
