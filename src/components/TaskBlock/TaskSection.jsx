import { Flex, Title, Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
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
      <Button
        w={"200px"}
        onClick={open}
        variant={"filled"}
        color={isSubmit? "cyan" :"grey"}
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
