import { Flex, Text } from "@mantine/core";
import TaskBlock from "@/components/TaskBlock";

const TaskBoard = () => {
  return (
    <Flex mih={50} gap="md" justify="center" align="center" direction="column">
      <Text c={"white"} align="center" fw={"bold"}>
        每體驗完一個Zone後<br/>
        點擊下方按鈕回答問題，<br/>
        全部答對的同仁可以獲得幸運轉盤機會！
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
