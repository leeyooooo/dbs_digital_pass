import { Button, Flex, Paper } from "@mantine/core";
import React, { useState } from "react";
import TaskSection from "@/components/TaskBlock/TaskSection";
const TaskBlock = () => {
  const mockAns = ["C", "A", "B", "C", "C", "D"];
  const optionArr = [1, 2, 3, 4, 5, 6];
  const [isComplete, setIsComplete] = useState(false);
	const [isPass, setIsPass] = useState(true)
  const [ansArr, setAnsArr] = useState({});
  const [matchResults, setMatchResults] = useState({});

  const handleAns = (preAns) => setAnsArr({ ...ansArr, ...preAns });
  const handleComplete = () => {
    const results = {};
    optionArr.forEach((opt) => {
      const answer = ansArr[opt];
      if (answer === mockAns[opt - 1]) {
        results[opt] = true; // 答案匹配
      } else {
        results[opt] = false; // 答案不匹配
      }
    });
    setIsComplete(true);
    setMatchResults(results);
  };
  return (
    <Paper shadow="xs" withBorder p="xl">
      <Flex justify="center" align="center" direction="column" gap="xs">
        {optionArr.map((opt) => (
          <TaskSection
            key={opt}
            order={opt}
            handleAns={handleAns}
            matchResult={matchResults[opt]}
            isComplete={isComplete}
          />
        ))}
        <Button
          w={"200px"}
          radius={"xl"}
          color="violet"
          mt={"sm"}
          onClick={handleComplete}
        >
          submit
        </Button>
      </Flex>
    </Paper>
  );
};

export default TaskBlock;
