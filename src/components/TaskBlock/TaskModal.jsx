import React, { useState } from "react";
import { Modal, Title, Text, Button, Flex } from "@mantine/core";

const TaskModal = ({ opened, close, order, onSubmit }) => {
  const ansOption = ["A", "B", "C", "D"];
  const [isSubmit, setIsSubmit] = useState(false);
  const [isSelect, setIsSelect] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const handleOptionClick = (option) => {
    setIsSelect(true);
    setSelectedOption(option);
  };

  return (
    <Modal
      opened={opened}
      onClose={close}
      title={`Zone ${order} Quiz`}
      centered
    >
      <Title order={3}>Quiz Description</Title>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti odio
        natus suscipit sequi quo fugit accusamus facere. Aperiam, a eveniet.
      </Text>
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
        <Flex justify={"space-between"} w={"100%"} px={"lg"}>
          <Button
            radius={"xl"}
            variant="outline"
            color="violet"
            disabled={isSubmit || !isSelect}
            onClick={() => {
              onSubmit(selectedOption);
              setIsSubmit(true);
              close();
            }}
          >
            Submit
          </Button>
          <Button
            radius={"xl"}
            variant="outline"
            color="violet"
            disabled={isSubmit}
            onClick={() => close()}
          >
            Not Sure
          </Button>
        </Flex>
      </Flex>
    </Modal>
  );
};

export default TaskModal;
