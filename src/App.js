import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Link } from "@chakra-ui/layout";
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
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [dice, setDice] = useState(0);
  const [score, setScore] = useState(0);
  const [error, setError] = useState();
  const numbers = [1, 2, 3, 4, 5, 6];
  const dices = [
    { diceImage: "/dice/dice1.png", value: 1 },
    { diceImage: "/dice/dice2.png", value: 2 },
    { diceImage: "/dice/dice3.png", value: 3 },
    { diceImage: "/dice/dice4.png", value: 4 },
    { diceImage: "/dice/dice5.png", value: 5 },
    { diceImage: "/dice/dice6.png", value: 6 },
  ];

  const generateRandomDiceNumber = () => {
    if (selectedNumber) {
      let genNumber = Math.ceil(Math.random() * 5) + 1;
      setDice(genNumber - 1);
      if (genNumber === selectedNumber) {
        setScore((prev) => prev + genNumber);
        setSelectedNumber(null);
      } else {
        setScore((prev) => prev - 2);
        setSelectedNumber(null);
      }
    } else {
      setError("Number not Selected ");
    }
  };

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
            <Heading mb="8" color={error ? "red" : "black"}>
              {" "}
              {error ? error : "Select Number"}
            </Heading>

            <Flex justify="space-between" w="600px">
              {numbers.map((number, i) => (
                <Flex
                  width="50px"
                  height="50px"
                  bg={selectedNumber === number ? "gray" : "black"}
                  color="white"
                  justify="center"
                  align="center"
                  fontSize="3xl"
                  borderRadius="md"
                  key={i}
                  onClick={() => {
                    setSelectedNumber(number);
                    setError(null);
                  }}
                >
                  {number}
                </Flex>
              ))}
            </Flex>

            <Stack pt="16" align="center">
              <Box h="150px" width="150px" onClick={generateRandomDiceNumber}>
                <Image src={dices[dice].diceImage} />
              </Box>
              <Text textAlign="center" fontSize="xl">
                Click on dice to roll
              </Text>
            </Stack>
            <Stack>
              <Text
                textAlign="center"
                color={score < 0 ? "red" : "green"}
                fontSize="8xl"
                fontWeight="bold"
              >
                {score}
              </Text>
              <Text textAlign="center" fontSize="5xl" fontWeight="bold">
                Total Score
              </Text>
              <Button onClick={() => setScore(0)}>Reset Score</Button>
            </Stack>
          </Stack>
          <Stack maxW="1100px" mx="auto" p="8">
            <Heading>Game Rules:-</Heading>
            <List listStyleType="disc">
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
            <Box>
              <Link href="https://youtube.com/dosomecoding">
                {" "}
                Join Channel{" "}
              </Link>
            </Box>
          </Stack>
        </>
      ) : (
        <>
          <Flex
            maxW="1100px"
            justify="center"
            align="center"
            mx="auto"
            h="100vh"
          >
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
        </>
      )}
    </>
  );
}

export default App;
