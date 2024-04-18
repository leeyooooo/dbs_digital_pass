import {
  Button,
  Flex,
  Box,
  Text,
  BackgroundImage,
  Title,
  Center,
} from "@mantine/core";
import { useRouter } from "next/router";
import Border from "@/assets/Border.png";
export default function Home() {
  const router = useRouter();

  return (
    <Box maw={300} mx="auto">
      <Flex
        mih={50}
        gap="md"
        justify="center"
        align="center"
        direction="column"
      >
        <Title order={1} c={"white"}>
          Digital Passport
        </Title>
        <BackgroundImage p={"lg"} h={"190px"} src={Border.src}>
          <Text c={"white"} align="center" fz={"xl"} h={"100%"} mt={"lg"}>
            歡迎踏上FOF的旅程，試著完成現場答題闖關活動，爭取獲得獲得幸運轉盤資格贏得大獎​
          </Text>
        </BackgroundImage>
        <Button
          onClick={() => router.push("/TaskBoard")}
          variant="default"
          color="rgba(207, 160, 219, 1)"
          size="md"
          radius="xl"
          w={"250px"}
          mt={"xl"}
        >
          開始
        </Button>
      </Flex>
    </Box>
  );
}
