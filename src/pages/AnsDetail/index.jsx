import { Flex, Text, Image, BackgroundImage, Box } from "@mantine/core";
import { useRouter } from "next/router";
import AnsDetailImg from "@/assets/AnsDetail.png";

const AnsDetail = () => {
  const router = useRouter();
  const { seeAns } = router.query;

  if (!seeAns) {
    return (
      <Text c={"white"} p={"lg"} fz={"25px"} align="center">
        歡迎回首頁遊玩喔 ：）
      </Text>
    );
  }

  return (
    <Flex mih={50} justify="center" align="center" direction="column">
      <Image src={AnsDetailImg.src} />
    </Flex>
  );
};

export default AnsDetail;
