import { useState } from 'react';
import StepIndicators from './StepIndicators';
import StepMessage from './StepMessage';
import StepActions from './StepActions';
import { messages } from './stepData';

const App = () => {
 const steps = messages.length;
 const [stepCounter, setStepCounter] = useState(1);

 const next = () => {
  if (stepCounter === steps) return;
  setStepCounter((prev) => ++prev);
 };
 const prev = () => {
  if (stepCounter === 1) return;
  setStepCounter((prev) => --prev);
 };

 return (
  <>
   <div class='steps'>
    <StepIndicators steps={steps} counter={stepCounter} />
    <StepMessage message={messages[stepCounter - 1]} />
    <StepActions next={next} prev={prev} />
   </div>
  </>
 );
};

export default App;
