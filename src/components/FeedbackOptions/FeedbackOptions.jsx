export const FeedbackOptions = ({ options }) => {
  return (
    <div>
      <button
        type="button"
        onClick={e => {
          options(e.target.name);
        }}
        name="good"
      >
        Good
      </button>
      <button
        type="button"
        name="neutral"
        onClick={e => {
          options(e.target.name);
        }}
      >
        Neutral
      </button>
      <button
        type="button"
        name="bad"
        onClick={e => {
          options(e.target.name);
        }}
      >
        Bad
      </button>
    </div>
  );
};
