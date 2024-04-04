import { Flex, Title, Button, Paper, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";
import TaskModal from "@/components/TaskBlock/TaskModal";
import { useState } from "react";
const TaskSection = ({ order, handleAns, isComplete, matchResult }) => {
  const [opened, { open, close }] = useDisclosure(false);
  const [isSubmit, setIsSubmit] = useState(false);
  return (
    <Flex justify="center" align="center">
      <TaskModal
        opened={opened}
        close={close}
        order={order}
        onSubmit={(ans) => {
          setIsSubmit(true);
          handleAns({ [order]: ans });
        }}
      />
      <Title order={2} pr={"xs"}>
        0{order}
      </Title>
      <Button
        w={"220px"}
        onClick={open}
        variant={isSubmit ? "filled" : "outline"}
        color="grey"
      >
        Zone {order}
      </Button>
      {matchResult ? (
        <FaCheckCircle color="green" size={"30px"} />
      ) : isComplete ? (
        <FaTimesCircle color="red" size={"30px"} />
      ) : (
        ""
      )}
    </Flex>
  );
};
export default TaskSection;
