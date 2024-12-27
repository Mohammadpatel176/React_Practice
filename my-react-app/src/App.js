
import './App.css';
import './Counter'
import PropExample from './PropsExample';
import DatapropEx from './DataPropExample';
import data from './data.json'
import ReactClassEx from './ReactClass';
function App() {
  var datastring=data[0];
  return (
    <>
          
          <PropExample name='mohammad' />
          {data.map((person,index)=>(
            <DatapropEx key={index} data={person} />
          ))}
          {data.map((person,index)=>(
            <ReactClassEx key={index} data={person} />
          ))}
          <hr/>
          
    </>
  );
}

export default App;
