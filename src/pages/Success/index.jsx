import { Flex, Text, Image, BackgroundImage, Box } from "@mantine/core";
import { useRouter } from "next/router";
import PassBackground from "@/assets/PassBackground.png";
import PassIcon from "@/assets/PassIcon.png";
import Map from "@/assets/Map.png";

const Success = () => {
  const router = useRouter();
  const { isCorrect } = router.query;

  if (!isCorrect) {
    return (
      <Text c={"white"} p={"lg"} fz={"25px"} align="center">
        歡迎回首頁遊玩喔 ：）
      </Text>
    );
  }

  return (
    <Flex mih={50} justify="center" align="center" direction="column">
      <BackgroundImage
        src={PassBackground.src}
        bgsz={"cover"}
        w={"fit-content"}
      >
        <Text c={"white"} p={"lg"} fz={"25px"} align="center">
          挖烏太厲害啦！
          <br /> 快來幸運輪盤
          <br /> 找我們抽獎！
        </Text>
      </BackgroundImage>
      <Box mt={"xl"}>
        <Text c={"white"}>我們在這</Text>
        <Image src={Map.src} />
      </Box>
      <Image
        src={PassIcon.src}
        pos={"absolute"}
        w={"60px"}
        top={"200px"}
        right={"0"}
      />
    </Flex>
  );
};

export default Success;
