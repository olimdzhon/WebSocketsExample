import React, {useEffect, useState} from 'react';

export const useWebSocket = () => {
  const ws = React.useRef(new WebSocket('ws://localhost:3030')).current;

  const [messages, setMessages] = useState<any[]>([]);

  useEffect(() => {
    ws.onopen = () => console.log('ws opened');
    ws.onclose = () => console.log('ws closed');
    ws.onmessage = event => {
      console.log('WEBSOCKET MESSAGE', event.data);
      setMessages(prev => [...prev, JSON.parse(event.data)]);
    };
  }, []);

  console.log('MESSAGE', messages);

  return {messages};
};
