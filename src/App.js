import './App.css';
import {connect} from 'react-redux'
import {Inc,Dec} from './js/action'

function App({counter,inrement,decrement}) {
  return (
    <div className="App">
     <button onClick={ counter >0 ? decrement:undefined}>-</button>
     <span>{counter}</span>
     <button onClick={ inrement}>+</button>
    </div>
  );
}
const mapStateToProps=(state)=>{
  return{
    counter:state.count
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
    inrement:() => dispatch(Inc()),
    decrement:() => dispatch(Dec())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
