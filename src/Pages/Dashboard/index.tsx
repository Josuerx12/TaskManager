import { useState } from "react";

import Container from "react-bootstrap/Container";
import { Auth } from "../../context/AuthContext";
import ModalCreateTask from "../../components/ModalCreateTask";
import { Data } from "../../context/DataContext";
import AllTasks from "../../components/AllTasks";
import UserDetailDashboard from "../../components/UserDatailsDashboard/";
import { useFilterTasks } from "../../hooks/useFilterTasks";
import DoingTasks from "../../components/DoingTasks";
import DoneTasks from "../../components/DoneTasks";

const Dashboard = () => {
  const { user } = Auth();
  const { tasks } = Data();
  const { allTasks, allDoneTasks, allDoingTasks } = useFilterTasks(tasks);
  const [show, setShow] = useState(false);
  const handleCloseModal = () => {
    setShow(!show);
  };

  return (
    <Container>
      <ModalCreateTask hidden={handleCloseModal} isOpen={show} />
      <UserDetailDashboard user={user} openModal={handleCloseModal} />
      <AllTasks allTasks={allTasks} />
      <DoingTasks doingTasks={allDoingTasks} />
      <DoneTasks doneTasks={allDoneTasks} />
    </Container>
  );
};

export default Dashboard;
