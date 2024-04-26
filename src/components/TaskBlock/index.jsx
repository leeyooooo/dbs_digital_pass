import { Button, Flex, Box } from "@mantine/core";
import React, { useState, useEffect } from "react";
import TaskSection from "@/components/TaskBlock/TaskSection";
import { compareArr } from "@/utils";
import { useRouter } from "next/router";
import { mockAns, optionArr } from "@/constants";

const TaskBlock = () => {
  const router = useRouter();
  const [disabledBtn, setDisabledBtn] = useState(true);
  const [isComplete, setIsComplete] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [ansObj, setAnsObj] = useState({});
  const [matchResults, setMatchResults] = useState({});

  useEffect(() => {
    if (Object.keys(ansObj).length === 6) {
      setDisabledBtn(false);
      setIsCorrect(compareArr(Object.values(ansObj), mockAns));
    }
  }, [ansObj]);

  const handleAns = (preAns) => setAnsObj({ ...ansObj, ...preAns });
  const handleComplete = () => {
    const results = {};
    optionArr.forEach((opt) => {
      const answer = ansObj[opt];
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
    <Box
      shadow="xs"
      withBorder
      p="xl"
      style={{ backgroundColor: "rgba(234, 184, 255, 0.3)" }}
    >
      <Flex
        justify="center"
        align="center"
        direction="column"
        gap="xs"
        w={"292px"}
      >
        {optionArr.map((opt) => (
          <TaskSection
            key={opt}
            order={opt}
            handleAns={handleAns}
            matchResult={matchResults[opt]}
            isComplete={isComplete}
          />
        ))}
        {isComplete ? (
          isCorrect ? (
            <Button
              w={"200px"}
              radius={"xl"}
              color="violet"
              mt={"sm"}
              onClick={() =>
                router.push(
                  {
                    pathname: "/Success",
                    query: { isCorrect: isCorrect },
                  },
                  "/Success"
                )
              }
            >
              領獎去
            </Button>
          ) : (
            <Button
              w={"200px"}
              radius={"xl"}
              color="violet"
              mt={"sm"}
              onClick={() => router.push(
                {
                  pathname: "/Fail",
                  query: { isFail: !isCorrect },
                },
                "/Fail"
              )}
            >
              下一步
            </Button>
          )
        ) : (
          <Button
            w={"200px"}
            radius={"xl"}
            color="violet"
            variant="filled"
            mt={"sm"}
            onClick={handleComplete}
            disabled={disabledBtn}
          >
            提交
          </Button>
        )}
      </Flex>
    </Box>
  );
};

export default TaskBlock;
