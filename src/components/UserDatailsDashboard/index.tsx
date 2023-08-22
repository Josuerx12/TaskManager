import { localUser } from "../../interfaces/User";
import Button from "react-bootstrap/Button";
import { BsPlusLg } from "react-icons/bs";

const index = ({
  user,
  openModal,
}: {
  user: localUser;
  openModal: () => void;
}) => {
  return (
    <>
      <h2 style={{ textAlign: "center", padding: "2rem 0" }}>
        Dashboard - Task Manager
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: ".6rem",
        }}
      >
        <p
          style={{
            background: "#444",
            color: "#fff",
            width: "fit-content",
            height: "fit-content",
            padding: ".6rem 1rem",
            borderRadius: ".3rem",
          }}
        >
          <b>Usuário:</b> {user.user} | <b>E-mail:</b> {user.email}
        </p>
        <Button
          onClick={openModal}
          variant="primary"
          style={{ height: "fit-content" }}
        >
          Nova tarefa <BsPlusLg />
        </Button>
      </div>
    </>
  );
};

export default index;
