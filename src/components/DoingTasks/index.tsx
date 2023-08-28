import { task } from "../../interfaces/Data";
import Card from "../../components/Card";
const DoingTasks = ({
  doingTasks,
}: {
  doingTasks: Array<task> | undefined;
}) => {
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
        Tarefas sendo realizadas:
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
        {doingTasks &&
          doingTasks.map((task) => <Card key={task._id} data={task} />)}
        {(doingTasks === null || !doingTasks || doingTasks.length <= 0) && (
          <p style={{ color: "#fff" }}>
            Todas as tarefas já foram concluidas, ou nenhuma tarefa foi
            iniciada.
          </p>
        )}
      </div>
    </div>
  );
};

export default DoingTasks;
