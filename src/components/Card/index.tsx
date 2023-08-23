import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { task } from "../../interfaces/Data";
import { useState } from "react";
import ModalEditTask from "../ModalEditTask";
import { Data } from "../../context/DataContext";

const CardTask = ({ data }: { data: task }) => {
  const [show, setShow] = useState(false);
  const handleModal = () => {
    setShow(!show);
  };
  const { deleteTask, getTasks, editTask } = Data();

  const handleDeleteTask = async () => {
    try {
      await deleteTask(data._id);
      alert(`Tarefa: ${data.task}, deletada com sucesso.`);
      getTasks();
      return;
    } catch (error) {
      console.log(error);
    }
  };

  const handleStartTask = async () => {
    try {
      await editTask(data._id, {
        task: data.task,
        doing: true,
        done: false,
      });
      alert(`Tarefa: ${data.task}, iniciada.`);
      getTasks();
      return;
    } catch (error) {
      console.log(error);
    }
  };
  const handleReStartTask = async () => {
    try {
      await editTask(data._id, {
        task: data.task,
        doing: true,
        done: false,
      });
      alert(`Tarefa: ${data.task}, recomecada.`);
      getTasks();
      return;
    } catch (error) {
      console.log(error);
    }
  };
  const handleDoneTask = async () => {
    try {
      await editTask(data._id, {
        task: data.task,
        doing: false,
        done: true,
      });
      alert(`Tarefa: ${data.task}, Concluida.`);
      getTasks();
      return;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card style={{ width: "18rem" }}>
      <ModalEditTask
        isOpen={show}
        hidden={handleModal}
        id={data._id}
        taskDesc={data.task}
      />
      <Card.Body>
        <Card.Title>{data.task}</Card.Title>
        <Card.Text>{data.createdAt}</Card.Text>
        <div
          style={{ display: "flex", flexDirection: "column", gap: ".625rem" }}
        >
          {!data.done && (
            <Button variant="primary" onClick={handleModal}>
              Editar Tarefa
            </Button>
          )}
          {data.done && (
            <Button variant="primary" onClick={handleReStartTask}>
              Recomecar
            </Button>
          )}
          {!data.doing && !data.done && (
            <Button variant="success" onClick={handleStartTask}>
              Comecar Tarefa
            </Button>
          )}
          {data.doing && (
            <Button variant="warning" onClick={handleDoneTask}>
              Terminar Tarefa
            </Button>
          )}
          <Button variant="danger" onClick={handleDeleteTask}>
            Deletar Tarefa
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardTask;
