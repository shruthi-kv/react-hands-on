import Form from "./Portals/Form";
import EventBubble from './EventBubbling/EventBubble';
import EventCapture from './EventBubbling/EventCapture';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import Parent from './Hooks/Parent'
import Counter from './Hooks/Reducer';

const App = () => {
  return (
    <Counter/>
  );
};

export default App;
