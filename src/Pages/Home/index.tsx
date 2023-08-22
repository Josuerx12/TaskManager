import { Container } from "react-bootstrap";
import CarouselPhoto from "../../components/Carrousel";

const index = () => {
  return (
    <Container>
      <h3 style={{ textAlign: "center", padding: "2rem 0" }}>
        Bem vindo ao TaskManager
      </h3>

      <CarouselPhoto
        images={[
          {
            img: "https://blog.portalpos.com.br/app/uploads/2021/10/como-ter-mais-organizacao-no-trabalho-768x512.jpg",
            alt: "Imagem 1",
            title: "Task Manager - Apresentacão",
            desc: "Optimize suas tarefas com o task manager em até 100%.",
          },
          {
            img: "https://blog.portalpos.com.br/app/uploads/2021/10/como-ter-mais-organizacao-no-trabalho-768x512.jpg",
            alt: "Imagem 1",
            title: "Task Manager - Apresentacão",
            desc: "Optimize suas tarefas com o task manager em até 100%.",
          },
          {
            img: "https://blog.portalpos.com.br/app/uploads/2021/10/como-ter-mais-organizacao-no-trabalho-768x512.jpg",
            alt: "Imagem 1",
            title: "Task Manager - Apresentacão",
            desc: "Optimize suas tarefas com o task manager em até 100%.",
          },
        ]}
      />
    </Container>
  );
};

export default index;
