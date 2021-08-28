import React from "react";
// import Button from './Button';
import Counter from './components/Counter';

const App = () => {
  return (
    <div className='ui container' style={{marginTop: '20px'}}>
  
    {/* <Button title='post'/>
    <Button title='edit'/>
    <Button title='delete'/>
    <Button title='submit'/> */}
    <Counter />

    </div>
  );
};

export default App;