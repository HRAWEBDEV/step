const StepActions = ({ next, prev }) => {
 return (
  <div class='buttons'>
   <button class='next' onClick={prev}>
    Previous
   </button>
   <button class='previous' onClick={next}>
    Next
   </button>
  </div>
 );
};

export default StepActions;
