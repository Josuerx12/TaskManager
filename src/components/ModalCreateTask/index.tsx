import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Data } from "../../context/DataContext";
import { useState } from "react";

const ModalCreateTask = ({
  isOpen,
  hidden,
}: {
  isOpen: boolean;
  hidden: () => void;
}) => {
  const [task, setTask] = useState("");
  const { createTask } = Data();
  const handleCreateTask = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createTask(task);
      alert("Tarefa criada com sucesso.");
    } catch (error) {
      return alert("Não é possivel criar uma tarefa sem descricão.");
    }
    setTask("");
    hidden();
  };
  return (
    <Modal show={isOpen} onHide={hidden} animation={false}>
      <Modal.Dialog>
        <Modal.Header closeButton onClick={hidden}>
          <Modal.Title>Adicionar tarefa</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <form onSubmit={handleCreateTask}>
            <input
              type="text"
              value={task}
              required
              onChange={(e) => setTask(e.target.value)}
              placeholder="Adicione uma tarefa..."
            />
          </form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={hidden}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCreateTask}>
            Adicionar tarefa
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>
  );
};

export default ModalCreateTask;
