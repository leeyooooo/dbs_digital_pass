import React, { useState } from "react";
import { Modal, Title, Text, Button, Flex } from "@mantine/core";
import { ansOption } from "@/constants";

const TaskModal = ({ opened, close, order, onSubmit }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <Modal
      opened={opened}
      onClose={close}
      title={`Zone ${order} 測驗`}
      align={"center"}
      overlayProps={{backgroundColor: 'blue'}}
      style={{backgroundColor: 'blue'}}
      centered
    >
      <Title order={3} pb={"xl"}>Quiz Description</Title>
      <Flex
        gap="md"
        justify="center"
        align="center"
        direction="column"
        mt={"sm"}
      >
        {ansOption.map((opt) => (
          <Button
            key={opt}
            w={"300px"}
            variant={selectedOption === opt ? "filled" : "outline"}
            color="violet"
            onClick={() => handleOptionClick(opt)}
          >
            {opt}
          </Button>
        ))}
        <Flex justify={"space-between"} w={"100%"} px={"lg"} pt={"xl"}>
          <Button
            radius={"xl"}
            variant="outline"
            color="violet"
            onClick={() => {
              onSubmit(selectedOption);
              close();
            }}
            disabled={!selectedOption}
          >
            送出
          </Button>
          <Button
            radius={"xl"}
            variant="outline"
            color="violet"
            onClick={() => close()}
          >
            返回
          </Button>
        </Flex>
      </Flex>
    </Modal>
  );
};

export default TaskModal;
