import { store } from "../../store";
import { UPDATE_ALL_RATES } from "../models/rates/actions";

export class WebSocketClient {
    constructor(){
        this.initSocket();
    }

    socket: any
    initSocket(){
        if(!this.socket){
            this.socket = new WebSocket('wss://ws.coincap.io/prices?assets=ALL')
        }
    }

    getInfo(){
        if(this.socket){
            this.socket.onmessage = function (event: any) {
                store.dispatch({type: UPDATE_ALL_RATES, payload: JSON.parse(event.data)})
            }
        }
    }
}