import Container from "./Container";
import {WelcomeComp} from "./Higher";
import {EnhancedComponent} from './Logger'

export default function App() {
  return (
    <>
      <Container />
      {/* <WelcomeComp name="Shruti" /> */}
      <EnhancedComponent name="Hello"/>
    </>
  );
}
