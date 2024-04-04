import { Button, Flex, Text, Paper } from "@mantine/core";
import TaskBlock from "@/components/TaskBlock";

const TaskBoard = () => {
  return (
    <Flex mih={50} gap="md" justify="center" align="center" direction="column">
      <Paper shadow="xs" withBorder p="xl">
        <Text>Paper is the most basic ui component</Text>
        <Text>
          Use it to create cards, dropdowns, modals and other components that
          require background with shadow
        </Text>
      </Paper>
      <Paper shadow="xs" withBorder p="xl">
        <Text>Paper is the most basic ui component sadasdsa</Text>
      </Paper>
      <Flex
        mih={50}
        gap="md"
        justify="center"
        align="center"
        direction="column"
      >
        <TaskBlock />
      </Flex>
    </Flex>
  );
};

export default TaskBoard;
