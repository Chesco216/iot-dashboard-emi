import React, { useState, useEffect } from 'react';
import mqtt from 'mqtt';

// Define el hook personalizado
const useMqtt = (brokerUrl, topic) => {
  const [client, setClient] = useState(null);
  const [message, setMessage] = useState('Esperando datos...');
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    // 1. Conectar al broker (usando WebSockets: 'ws://' o 'wss://')
    const mqttClient = mqtt.connect(brokerUrl); 
    setClient(mqttClient);

    mqttClient.on('connect', () => {
      console.log('Conectado al broker MQTT ✅');
      setIsConnected(true);
      
      // 2. Suscribirse al tópico
      mqttClient.subscribe(topic, (err) => {
        if (!err) {
          console.log(`Suscrito al tópico: ${topic}`);
        }
      });
    });

    // 3. Manejar mensajes entrantes
    mqttClient.on('message', (receivedTopic, receivedMessage) => {
      // Solo actualiza si el mensaje es del tópico que nos interesa
      if (receivedTopic === topic) {
        // Convierte el Buffer a String, y puedes parsear JSON si es el formato de tus datos
        const payload = receivedMessage.toString(); 
        setMessage(payload); 
        console.log(`Mensaje recibido en ${receivedTopic}: ${payload}`);
      }
    });

    mqttClient.on('error', (err) => {
      console.error('Error de conexión:', err);
      mqttClient.end();
      setIsConnected(false);
    });

    mqttClient.on('close', () => {
      console.log('Conexión MQTT cerrada ❌');
      setIsConnected(false);
    });

    // 4. Limpieza: Desconectar al desmontar el componente
    return () => {
      if (mqttClient) {
        mqttClient.unsubscribe(topic); // Opcional: Desuscribirse
        mqttClient.end(); // Cerrar la conexión
      }
    };
  }, [brokerUrl, topic]); // El efecto se ejecuta al montar y si cambian estas dependencias

  return { message, isConnected, client };
};

export default useMqtt;
