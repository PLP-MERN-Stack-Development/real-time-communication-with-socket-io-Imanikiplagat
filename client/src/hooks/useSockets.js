// src/hooks/useSocket.js
import { useEffect, useState } from "react";
import { io } from "socket.io-client";

export const useSocket = (serverUrl) => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io(serverUrl, { transports: ["websocket"] });
    setSocket(newSocket);

    // cleanup on unmount
    return () => {
      newSocket.disconnect();
    };
  }, [serverUrl]);

  return socket;
};
