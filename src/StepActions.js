const StepActions = ({ next, prev }) => {
 return (
  <div className='buttons'>
   <button className='next' onClick={prev}>
    Previous
   </button>
   <button className='previous' onClick={next}>
    Next
   </button>
  </div>
 );
};

export default StepActions;
