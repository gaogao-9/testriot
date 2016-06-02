import RiotControl             from "riotcontrol"
import AppActionTypes          from "Constant/AppActionTypes"
import ErrorMessageActionTypes from "Constant/ErrorMessageActionTypes"

const store = new class CounterStore{
    get count(){ return this._count; }
    get error(){ return this._error }
    
    constructor(){
        riot.observable(this);
        
        this._count = 0;
        
        this.on(AppActionTypes.resetCounter, this._setCount.bind(this));
        this.on(AppActionTypes.incrementCounter, this._setCount.bind(this));
        this.on(AppActionTypes.decrementCounter, this._setCount.bind(this));
        
        this.on(ErrorMessageActionTypes.removeError, this._setError.bind(this));
    }
    
    _setCount(counterAction){
        try{
            this._error = null;
            this._count = counterAction(this._count);
        }
        catch(err){
            this._error = err;
        }
        
        RiotControl.trigger(this.ActionTypes.changed);
    }
    
    _setError(errorAction){
        try{
            this._error = errorAction(this._error);
        }
        catch(err){
            this._error = err;
        }
        
        RiotControl.trigger(this.ActionTypes.changed);
    }
}();

store.ActionTypes = { changed: "counter_store_changed" };

RiotControl.addStore(store);

export default store
