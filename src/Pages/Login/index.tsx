import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { Auth } from "../../context/AuthContext";
import ErroMessage from "../../components/ErroMessage";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login, loading, erro } = Auth();
  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    const data = { email, password };
    await login(data);
  }
  function handleLink(e: React.FormEvent, path: string) {
    e.preventDefault();
    navigate(path);
  }
  return (
    <Container style={{ maxWidth: "700px", paddingTop: "2rem" }}>
      <h3 style={{ textAlign: "center", marginBottom: "2rem" }}>
        Entrar para usar o Task Manager
      </h3>
      <Form onSubmit={(e) => handleLogin(e)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Endereco de e-mail</Form.Label>
          <Form.Control
            type="email"
            placeholder="seuemail@email.com"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <Form.Text className="text-muted">
            O email deve ser um email valido.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control
            type="password"
            aria-describedby="passwordHelpBlock"
            placeholder="Sen*****"
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <Form.Text className="text-muted">
            Sua senha deve conter 8 caracteres com 1 caractere especial e 1
            letra maiúscula.
          </Form.Text>
        </Form.Group>
        <p>Ainda não possui uma conta?</p>
        <p>
          <Button
            onClick={(e) => handleLink(e, "/registrar-se")}
            style={{ padding: "0" }}
            variant="link"
          >
            Clique aqui
          </Button>
          para criar uma conta para usar o Task Manager.
        </p>
        {erro?.length > 0 && <ErroMessage message={erro} />}
        {loading && (
          <Button
            variant="primary"
            type="submit"
            size={"lg"}
            style={{ width: "100%" }}
            disabled
          >
            Entrar
          </Button>
        )}
        {!loading && (
          <Button
            variant="primary"
            type="submit"
            size={"lg"}
            style={{ width: "100%" }}
          >
            Entrar
          </Button>
        )}
      </Form>
    </Container>
  );
};

export default Login;
