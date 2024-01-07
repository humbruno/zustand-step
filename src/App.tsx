import { useStore } from 'zustand';
import './App.css';
import { StepsObj, stepStore } from './store';

function App() {
  // const {
  //   currentStep,
  //   maxStep,
  //   canGoToNextStep,
  //   canGoToPrevStep,
  //   goToNextStep,
  //   goToPrevStep,
  //   setStep,
  //   reset,
  // } = useStepStore();

  const store = useStore(stepStore);
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <p>current step: {store.currentStep}</p>
        <p>max step: {store.maxStep}</p>
        <p>Can go to next step? {store.canGoToNextStep().toString()}</p>
        <p>Can go to prev step? {store.canGoToPrevStep().toString()}</p>
        <button onClick={() => store.goToNextStep()}>Go next step</button>
        <button onClick={() => store.goToPrevStep()}>Go prev step</button>
        <button onClick={() => store.setStep(3)}>Go step 3</button>
        <button onClick={() => store.reset()}>Reset</button>
        {StepsObj[store.currentStep]}
      </div>
    </>
  );
}

export default App;
