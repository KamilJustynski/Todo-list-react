import "./style.css";

const Tasks = ({ tasks }) => (
  <ul className="list">
    {tasks.map((task) => (
      <li className="list__item">
        <button className="list__button list__button--done">
          {task.done ? "✔" : ""}
        </button>
        <span className={`${task.done ? "list__content--done" : ""}`}>
          {task.content}
        </span>
        <button className="list__button list__button--remove">🗑</button>
      </li>
    ))}
  </ul>
);

export default Tasks;
