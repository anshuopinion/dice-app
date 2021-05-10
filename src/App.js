import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import {
  Box,
  Flex,
  Heading,
  List,
  ListItem,
  Stack,
  Text,
} from "@chakra-ui/layout";
import { useState } from "react";

function App() {
  const [gameStarted, setGameStarted] = useState(false);

  const numbers = [1, 2, 3, 4, 5, 6];
  const dices = [
    { diceImage: "/dice/dice1.png", value: 1 },
    { diceImage: "/dice/dice2.png", value: 2 },
    { diceImage: "/dice/dice3.png", value: 3 },
    { diceImage: "/dice/dice4.png", value: 4 },
    { diceImage: "/dice/dice5.png", value: 5 },
    { diceImage: "/dice/dice6.png", value: 6 },
  ];

  return (
    <>
      {gameStarted ? (
        <>
          <Stack
            align="center"
            maxW="1100px"
            mx="auto"
            h="100vh"
            justify="center"
          >
            <Heading mb="8">Select Number</Heading>

            <Flex justify="space-between" w="600px">
              {numbers.map((number, i) => (
                <Flex
                  width="50px"
                  height="50px"
                  bg="black"
                  color="white"
                  justify="center"
                  align="center"
                  fontSize="3xl"
                  borderRadius="md"
                  key={i}
                >
                  {number}
                </Flex>
              ))}
            </Flex>

            <Stack pt="16">
              <Box>
                <Image src={dices[0].diceImage} />
              </Box>
              <Text textAlign="center" fontSize="xl">
                Click on dice to roll
              </Text>
            </Stack>
            <Stack>
              <Text textAlign="center" fontSize="8xl" fontWeight="bold">
                0
              </Text>
              <Text textAlign="center" fontSize="5xl" fontWeight="bold">
                Total Score
              </Text>
            </Stack>
          </Stack>
          <Stack maxW="1100px" mx="auto" p="8">
            <Heading>Game Rules:-</Heading>
            <List listStyleType="disc">
              <ListItem>Your will get 5 Chance Only</ListItem>
              <ListItem>Select Number any number</ListItem>
              <ListItem>Click on dice image to roll it</ListItem>
              <ListItem>
                Select number is equal to obtained dice result then you will get
                same point of dice
              </ListItem>
              <ListItem>
                if You are Wrong Score will be deducted by 2 points
              </ListItem>
            </List>
          </Stack>
        </>
      ) : (
        <Flex maxW="1100px" justify="center" align="center" mx="auto" h="100vh">
          <Image src="/dices.png" width="50%" />
          <Stack>
            <Heading fontSize="6xl">The Dice Game</Heading>
            <Button
              color="white"
              bg="black"
              alignSelf="flex-end"
              _hover={{ bg: "grey" }}
              onClick={() => setGameStarted(true)}
            >
              Play Now
            </Button>
          </Stack>
        </Flex>
      )}
    </>
  );
}

export default App;
