import RiotControl        from "riotcontrol"
import ErrorMessageAction from "Action/ErrorMessageAction"
import CounterStore       from "Store/CounterStore"

<error-message>
    <p if={ error }>エラー発生:&nbsp;{ error.message }</p>
    <style type="scss">
        error-message {
            width: 100vw;
            
            p {
                margin: 0;
                padding: 2px;
                box-sizing: border-box;
                
                color: white;
                background-color: #c22;
            }
        }
    </style>
    <script>
        this.on("mount", ()=>{
            const action = new ErrorMessageAction();
            
            RiotControl.on(CounterStore.ActionTypes.changed, ()=>{
                this.error = CounterStore.error;
                this.update();
                
                if(CounterStore.error) action.hideError({ delay: 5000 });
            });
        });
    </script>
</error-message>