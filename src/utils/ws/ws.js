export const WebSocketEvents = {
  UPDATE_TASK: 'UPDATE_TASK',
}

class WS {
  #webSocket

  #subscribers = {
    [WebSocketEvents.UPDATE_TASK]: [],
  }

  async connect() {
    return new Promise((resolve, reject) => {
      resolve()
      this.#webSocket = new WebSocket('ws://localhost:17142/ws')

      this.#webSocket.onopen = () => {
        resolve()
        console.info('Successful connection to web sockets')
      }

      this.#webSocket.onerror = (e) => {
        reject()
        console.log(e)
      }

      this.#webSocket.onmessage = (e) => {
        const data = JSON.parse(e.data)
        const subscribers = this.#subscribers[data.eventType]

        if (subscribers) {
          subscribers.forEach((subscriber) => {
            subscriber(data.data)
          })
        }
      }
    })
  }

  disconnect() {
    this.#webSocket.close()
  }

  subscribe(event, subscriber) {
    this.#subscribers[event].push(subscriber)
  }

  unsubscribe(event, subscriber) {
    this.#subscribers[event] = this.#subscribers[event].filter(
      (s) => s !== subscriber
    )
  }
}

export default function useWS() {
  return new WS()
}
