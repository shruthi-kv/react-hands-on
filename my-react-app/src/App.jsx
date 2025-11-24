import Button from './Practice/Button';


const App = () => {
  let buttonProps = {
    isDisabled : false,
  }
  let varient = {
    primary : {
      background: 'blue',
      color:'white'
    },
    secondary : {
      background : 'grey',
      color:'black'
    }
  }
  return (
    <Button buttonProps={buttonProps} varient={varient}/>
  );
};

export default App;




