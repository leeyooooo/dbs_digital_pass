import { Flex, Text, Image, BackgroundImage } from "@mantine/core";
import LoseBackground from "@/assets/LoseBackground.png";
import LoseIcon from "@/assets/LoseIcon.png";

const Fail = () => {
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
      </BackgroundImage>
      <Image
        src={LoseIcon.src}
        pos={"absolute"}
        w={"60px"}
        top={"200px"}
        right={"20px"}
      />
    </Flex>
  );
};

export default Fail;
