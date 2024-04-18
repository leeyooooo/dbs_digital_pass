import { Flex, Text } from "@mantine/core";
import TaskBlock from "@/components/TaskBlock";

const TaskBoard = () => {
  return (
    <Flex mih={50} gap="md" justify="center" align="center" direction="column">
      <Text c={"white"} align="center" fw={"bold"}>
        答案都藏在每個zone的攤位中，一定要仔細體驗喔！全部答對的同仁可以獲得幸運轉盤機會！​​
      </Text>
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
