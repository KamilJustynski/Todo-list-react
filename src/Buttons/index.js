import "./style.css";

const Buttons = ({ tasks, hideDone }) => (
  <div className="container">
    {tasks.length > 0 && (
      <>
        <button className="container__button">
          {hideDone ? "Pokaż" : "Ukryj"} ukończone
        </button>
        <button
          className="container__button"
          disabled={tasks.every(({ done }) => done)}
        >
          Ukończ wszystkie
        </button>
      </>
    )}
  </div>
);

export default Buttons;
