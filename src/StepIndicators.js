const StepIndicators = ({ counter, steps }) => {
 return (
  <div className='numbers'>
   {new Array(steps)
    .fill(undefined)
    .map((item, index) => index + 1)
    .map((step, index) => {
     return (
      <div key={index} className={`${counter - 1 >= index ? 'active' : ''}`}>
       {step}
      </div>
     );
    })}
  </div>
 );
};

export default StepIndicators;
