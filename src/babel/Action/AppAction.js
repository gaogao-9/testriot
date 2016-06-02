import RiotControl from "riotcontrol"
import ActionTypes from "Constant/AppActionTypes"

class AppAction{
    incrementCounter(){
        RiotControl.trigger(ActionTypes.incrementCounter, (count)=> count+1);
    }
    decrementCounter(){
        RiotControl.trigger(ActionTypes.decrementCounter, (count)=> {
            if(count) return count - 1;
            throw new Error("負数になっちゃうよ！！！");
        });
    }
    resetCounter(){
        RiotControl.trigger(ActionTypes.resetCounter, (count)=> 0);
    }
}

export default AppAction