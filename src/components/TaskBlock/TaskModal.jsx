import React, { useState } from "react";
import { Modal, Title, Button, Flex, UnstyledButton } from "@mantine/core";
import { ansOption, questions, answers } from "@/constants";

const List = () => {
  return (
    <ol type="a" style={{ textAlign: "start", margin:0 }}>
      <li>Digify: GenAI: An overview</li>
      <li>
        Digify: Navigation the GenAI landscape - A Guide for Business
        Applications
      </li>
      <li>Digify: DBS GPT</li>
      <li>Digify: Promt Techiques</li>
      <li>Digify: GenAI Governance</li>
    </ol>
  );
};

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
      overlayProps={{ backgroundColor: "blue" }}
      style={{ backgroundColor: "blue" }}
      centered
    >
      <Title order={3}>
        {questions[order - 1]}
      </Title>
      {order === 5 ? <List /> : <></>}
      <Flex
        gap="md"
        justify="center"
        align="center"
        direction="column"
        mt={"sm"}
      >
        {ansOption.map((opt) => {
          if (!answers[order - 1][opt]) return;
          return (
            <Button
              key={opt}
              w={"300px"}
              variant={selectedOption === opt ? "filled" : "outline"}
              color="violet"
              onClick={() => handleOptionClick(opt)}
            >
              <span style={{ whiteSpace: "normal" }}>{`${
                answers[order - 1][opt]
              }`}</span>
            </Button>
          );
        })}
        <Flex justify={"space-between"} w={"100%"} px={"lg"} pt={"xs"}>
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
