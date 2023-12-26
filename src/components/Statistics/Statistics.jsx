import css from './Statistics.module.css'

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
    <div>
      <p className={`${css.text}`}>Good: {good}</p>
      <p className={`${css.text}`}>Neutral: {neutral}</p>
      <p className={`${css.text}`}>Bad: {bad}</p>
      <p className={`${css.text}`}>Total: {total}</p>
      <p className={`${css.text}`}>Positive Feedback: {positivePercentage}%</p>
    </div>
  );
