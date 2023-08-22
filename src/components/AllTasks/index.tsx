import { task } from "../../interfaces/Data";
import Card from "../../components/Card";

const index = ({ allTasks }: { allTasks: Array<task> | null }) => {
  const tasks = allTasks;
  return (
    <div
      style={{
        background: "#444",
        padding: "1rem",
        margin: "2rem 0",
        borderRadius: ".6rem",
      }}
    >
      <h4 style={{ color: "#fff", textAlign: "center" }}>
        Tarefas ainda sem comecar:
      </h4>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "center",
          gap: ".625rem",
        }}
      >
        {tasks && tasks.map((task) => <Card key={task._id} data={task} />)}
        {(tasks === null || !tasks) && (
          <p style={{ color: "#fff" }}>
            Todas as tarefas já foram iniciadas, ou nenhuma tarefa cadastrada.
          </p>
        )}
      </div>
    </div>
  );
};

export default index;
