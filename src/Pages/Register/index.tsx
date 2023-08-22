import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { Auth } from "../../context/AuthContext";

const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const { register } = Auth();
  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();
    if (password.length < 8) {
      return alert(
        "A senha precisa conter 8 ou mais caracteres 1 caractere especial e 1 letra maiúscula."
      );
    }
    const data = { name, email, password, confirmPassword };
    await register(data);
    navigate("/entrar");
  }
  function handleLink(e: React.FormEvent, path: string) {
    e.preventDefault();
    navigate(path);
  }
  return (
    <Container style={{ maxWidth: "700px", paddingTop: "2rem" }}>
      <h3 style={{ textAlign: "center", marginBottom: "2rem" }}>
        Cadastre-se para usar o Task Manager
      </h3>
      <Form onSubmit={(e) => handleRegister(e)}>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            type="text"
            placeholder="John Doe"
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <Form.Text className="text-muted">
            O nome deve conter 5 caracteres para ser válido.
          </Form.Text>
        </Form.Group>
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
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirme sua senha</Form.Label>
          <Form.Control
            type="password"
            aria-describedby="passwordHelpBlock"
            placeholder="Confirme a senha ***"
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
          />
          <Form.Text className="text-muted">
            {password !== confirmPassword
              ? "As senhas não estão identicas"
              : "Senhas confirmadas."}
          </Form.Text>
        </Form.Group>
        <p>Já possui uma conta?</p>
        <p>
          <Button
            onClick={(e) => handleLink(e, "/entrar")}
            style={{ padding: "0" }}
            variant="link"
          >
            Clique aqui
          </Button>
          para entrar na sua conta.
        </p>
        <Button
          variant="primary"
          type="submit"
          size={"lg"}
          style={{ width: "100%" }}
        >
          Cadastrar
        </Button>
      </Form>
    </Container>
  );
};

export default Register;
