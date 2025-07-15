import { useEffect, useRef, useState } from "react"

interface WebSocketMessage {
  type: string
  [key: string]: any
}

const useWebSocket = (
  url: string,
  onMessage: (data: WebSocketMessage) => void,
) => {
  const [isConnected, setIsConnected] = useState(false)
  const wsRef = useRef<WebSocket | null>(null)

  useEffect(() => {
    const socket = new WebSocket(url)
    wsRef.current = socket

    socket.onopen = () => {
      console.log("Connected to WebSocket server")
      setIsConnected(true)
    }

    socket.onmessage = event => {
      const data: WebSocketMessage = JSON.parse(event.data)
      console.log("Received message:", data)
      onMessage(data)
    }

    socket.onclose = () => {
      console.log("WebSocket connection closed")
      setIsConnected(false)
    }

    return () => {
      socket.close()
    }
  }, [url])

  const sendMessage = (message: WebSocketMessage) => {
    if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
      wsRef.current.send(JSON.stringify(message))
    }
  }

  return { sendMessage, isConnected }
}

export default useWebSocket
