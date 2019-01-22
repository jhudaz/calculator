import React,{Component} from 'react';

class Calculator extends Component{
    render(){
        return(
            <div>
                <div>
                    <label>Sumar</label>
                    <br/>
                    <input type ="number"/>
                    <input type ="number"/>
                    <br/>
                    <button>Sumar</button>
                </div>
                <div>
                    <label>Restar</label>
                    <br/>
                    <input type ="number"/>
                    <input type ="number"/>
                    <br/>
                    <button>Restar</button>
                </div>
            </div>
        );
    }
}

export default Calculator;