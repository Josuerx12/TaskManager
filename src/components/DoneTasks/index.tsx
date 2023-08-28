import { task } from "../../interfaces/Data";
import Card from "../../components/Card";
const DoneTasks = ({ doneTasks }: { doneTasks: Array<task> | undefined }) => {
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
        {doneTasks &&
          doneTasks.map((task) => <Card key={task._id} data={task} />)}
        {(doneTasks === null || !doneTasks || doneTasks.length <= 0) && (
          <p style={{ color: "#fff" }}>
            Todas as tarefas já foram concluidas, ou nenhuma tarefa foi
            iniciada.
          </p>
        )}
      </div>
    </div>
  );
};

export default DoneTasks;
