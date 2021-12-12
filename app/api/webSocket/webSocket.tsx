import { store } from "../../../store";
import { UPDATE_CURRENCY_RATE } from "../../models/currencies/actions";

export class WebSocketClient {
    private static instance: WebSocketClient;
    private socket!: WebSocket;

    constructor(){
        if(WebSocketClient.instance){
            return WebSocketClient.instance;
        }
        WebSocketClient.instance = this;
    }

    initSocket = (url: string) => {
        this.socket = new WebSocket(url);
        this.getInfo();
    }

    getInfo(){
        if(this.socket){
            this.socket.onmessage = function (event: WebSocketMessageEvent) {
                store.dispatch({type: UPDATE_CURRENCY_RATE, payload: JSON.parse(event?.data)})
            }
        }
    }

    getCurrencyRate(id: string){
        if(this.socket){
            this.socket.onmessage = function (event: any) {
                let data = JSON.parse(event.data)
                if(data[id]){
                    // store.dispatch({type: SET_CURRENCY_RATE, payload: JSON.parse( data[id])})
                }
            }
        }
    }

    close(){
        if(this.socket){
            this.socket.close();
        }
    }
}