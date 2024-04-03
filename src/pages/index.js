import { AppShell, Button, Flex, Text, Paper } from "@mantine/core";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Flex
        mih={50}
        gap="md"
        justify="center"
        align="center"
        direction="column"
      >
        <Paper shadow="xs" withBorder p="xl">
          <Text>Paper is the most basic ui component</Text>
          <Text>
            Use it to create cards, dropdowns, modals and other components that
            require background with shadow
          </Text>
        </Paper>
        <Paper shadow="xs" withBorder p="xl">
          <Text>Paper is the most basic ui component</Text>
          <Text>
            Use it to create cards, dropdowns, modals and other components that
            require background with shadow
          </Text>
        </Paper>
        <Paper shadow="xs" withBorder p="xl">
          <Text>Paper is the most basic ui component</Text>
          <Text>
            Use it to create cards, dropdowns, modals and other components that
            require background with shadow
          </Text>
        </Paper>
        <Button
          onClick={() => router.push("/TaskBoard")}
          variant="outline"
          size="md"
          radius="xl"
        >
          Activate
        </Button>
      </Flex>
    </>
  );
}
