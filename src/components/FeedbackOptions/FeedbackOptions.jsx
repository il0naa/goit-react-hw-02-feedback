import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className={`${css.container}`}>
  {options.map((option) => (
    <button key={option} onClick={() => onLeaveFeedback(option)} className={`${css.button}`}>
      {option}
    </button>
  ))}
</div>
  );