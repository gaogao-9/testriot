import RiotControl from "riotcontrol"
import ActionTypes from "Constant/ErrorMessageActionTypes"

class ErrorMessageAction{
    constructor(){
        this.delayTimerId = null;
    }
    
    async hideError({ delay }){
        if(!delay) return RiotControl.trigger(ActionTypes.removeError, (err)=> null);
        
        await new Promise(resolve=>{
            clearTimeout(this.delayTimerId);
            this.delayTimerId = setTimeout(resolve, delay);
        });
        
        RiotControl.trigger(ActionTypes.removeError, (err)=> null);
    }
}

export default ErrorMessageAction