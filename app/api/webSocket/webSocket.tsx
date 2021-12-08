import { store } from "../../../store";
import { SET_CURRENCY_RATE } from "../../models/currencyRate/actions";
import { UPDATE_ALL_RATES } from "../../models/rates/actions";


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
    }

    getInfo(isFocused: boolean){
        console.log('isFocused', isFocused)
        if(this.socket){
            this.socket.onmessage = function (event: any) {
                if(isFocused){
                    store.dispatch({type: UPDATE_ALL_RATES, payload: JSON.parse(event.data)})
                }
            }
        }
    }

    getCurrencyRate(id: string){
        if(this.socket){
            this.socket.onmessage = function (event: any) {
                let data = JSON.parse(event.data)
                if(data[id]){
                    store.dispatch({type: SET_CURRENCY_RATE, payload: JSON.parse( data[id])})
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