import { Flex, Text, Button, BackgroundImage } from "@mantine/core";
import LoseBackground from "@/assets/LoseBackground.png";
import { useRouter } from "next/router";

const Fail = () => {
  const router = useRouter();
  const { isFail } = router.query;

  if (!isFail) {
    return (
      <Text c={"white"} p={"lg"} fz={"25px"} align="center">
        歡迎回首頁遊玩喔 ：）
      </Text>
    );
  }

  return (
    <Flex
      mih={50}
      justify="center"
      align="center"
      direction="column"
      mt={"100px"}
    >
      <BackgroundImage
        src={LoseBackground.src}
        bgsz={"cover"}
        w={"fit-content"}
      >
        <Text c={"white"} p={"lg"} fz={"25px"} align="center">
          可惡阿！！ <br />
          就差一點點！！
          <br /> 下次一定要全對！！
          <br />
          <br />
          <br />
        </Text>
        <Text c={"white"} fz={"25px"} align="center">
          感謝你的熱情參與
        </Text>
        <Button
          onClick={() =>
            router.push(
              {
                pathname: "/AnsDetail",
                query: { seeAns: "yes" },
              },
              "/AnsDetail"
            )
          }
          variant="default"
          color="rgba(207, 160, 219, 1)"
          size="md"
          radius="xl"
          w={"250px"}
          mt={"xl"}
        >
          點我看解答
        </Button>
      </BackgroundImage>
    </Flex>
  );
};

export default Fail;
