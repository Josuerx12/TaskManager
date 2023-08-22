import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Data } from "../../context/DataContext";
import { useState } from "react";
const ModalEditTask = ({
  isOpen,
  hidden,
  id,
  taskDesc,
}: {
  isOpen: boolean;
  hidden: () => void;
  id: string;
  taskDesc: string;
}) => {
  const [task, setTask] = useState(taskDesc);
  const { editTask } = Data();

  const handleEdit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await editTask(id, { task: task, doing: false, done: false });
      alert(`Tarefa editada com sucesso! ${id}`);
      hidden();
      return;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal show={isOpen} onHide={hidden} animation={false}>
      <Modal.Dialog>
        <Modal.Header closeButton onClick={hidden}>
          <Modal.Title>Editando tarefa</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={handleEdit}>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Nova descricão para a tarefa:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Fazer café mais tarde...!"
                required
                value={task}
                onChange={(e) => setTask(e.target.value)}
              />
              <Form.Text className="text-muted">
                Adicione uma nova descricão para editar.
              </Form.Text>
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={hidden}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={handleEdit}>
            Salvar alteracões
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>
  );
};

export default ModalEditTask;
