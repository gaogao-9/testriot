import RiotControl  from "riotcontrol"
import AppAction    from "Action/AppAction"
import CounterStore from "Store/CounterStore"

<app>
    <p>カウント数:&nbsp;{ count }</p>
    <ul class="command">
        <li><input type="button" onclick={ incrementCounter } value="+1"></li>
        <li><input type="button" onclick={ decrementCounter } value="-1"></li>
        <li><input type="button" onclick={ resetCounter } value="リセット"></li>
    </ul>
    <style type="scss">
        app {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            
            .command {
                display: flex;
                justify-content: center;
                
                list-style: none;
                padding: 0;
            }
        }
    </style>
    <script>
        this.on("mount", ()=>{
            const appAction = new AppAction();
            
            RiotControl.on(CounterStore.ActionTypes.changed, ()=>{
                this.count = CounterStore.count;
                this.update();
            });
            
            this.incrementCounter = (eve)=> {
                appAction.incrementCounter();
            }
            this.decrementCounter = (eve)=> {
                appAction.decrementCounter();
            }
            this.resetCounter = (eve)=> {
                appAction.resetCounter();
            }
            
            appAction.resetCounter();
        });
    </script>
</app>