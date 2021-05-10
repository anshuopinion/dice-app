import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Flex, Heading, Stack } from "@chakra-ui/layout";

function App() {
  return (
    <Flex maxW="1100px" justify="center" align="center" mx="auto" h="100vh">
      <Image src="/dices.png" width="50%" />
      <Stack>
        <Heading fontSize="6xl">The Dice Game</Heading>
        <Button
          color="white"
          bg="black"
          alignSelf="flex-end"
          _hover={{ bg: "grey" }}
        >
          Play Now
        </Button>
      </Stack>
    </Flex>
  );
}

export default App;
