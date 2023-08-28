const ErroMessage = ({ message }: { message: string | null }) => {
  return (
    <div
      style={{
        backgroundColor: "#ff75757d",
        padding: ".4rem",
        borderRadius: ".6rem",
        margin: "1rem 0",
      }}
    >
      <h5>Corrija o erro abaixo para continuar.</h5>
      <p>{message}</p>
    </div>
  );
};

export default ErroMessage;
