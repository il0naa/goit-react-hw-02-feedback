const FeedbackOptions = ({ options, onLeaveFeedback }) => (
    <div>
      {Object.keys(options).map(option => (
        <button key={option} onClick={() => onLeaveFeedback(option)}>
          {options[option]}
        </button>
      ))}
    </div>
  );

export default FeedbackOptions;