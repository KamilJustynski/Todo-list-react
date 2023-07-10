import "./style.css";

const Buttons = ({ tasks, hideDoneTasks }) => (
  <div className="container">
    {tasks.length > 0 && (
      <>
        <button className="container__button">
          {hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
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
