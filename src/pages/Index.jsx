import { Box, Flex, Heading, Text, Button, Input, Textarea, VStack } from '@chakra-ui/react';
import { FaCheckCircle, FaUsers } from 'react-icons/fa';

const Index = () => {
  return (
    <Box>
      <Flex direction="column" align="center" justify="center" p={10}>
        <Heading mb={4}>Welcome to GPT Engineer</Heading>
        <Text fontSize="lg" mb={6}>Revolutionizing web development with AI.</Text>
        <Button colorScheme="blue">Get Started</Button>
      </Flex>
      <Box bg="gray.100" p={10}>
        <Heading size="lg" textAlign="center" mb={4}>Features</Heading>
        <VStack spacing={5}>
          <Flex align="center">
            <FaCheckCircle size="24px" />
            <Text ml={2}>Feature 1: AI-driven development</Text>
          </Flex>
          <Flex align="center">
            <FaCheckCircle size="24px" />
            <Text ml={2}>Feature 2: Real-time collaboration</Text>
          </Flex>
          <Flex align="center">
            <FaCheckCircle size="24px" />
            <Text ml={2}>Feature 3: Scalable solutions</Text>
          </Flex>
        </VStack>
      </Box>
      <Box p={10}>
        <Heading size="lg" textAlign="center" mb={4}>Testimonials</Heading>
        <Flex direction="column" align="center" justify="center">
          <Text fontStyle="italic">"Using GPT Engineer has transformed our development process!" - Jane Doe</Text>
          <Text fontStyle="italic" mt={4}>"Absolutely essential for any tech company." - John Smith</Text>
        </Flex>
      </Box>
      <Box bg="gray.100" p={10}>
        <Heading size="lg" textAlign="center" mb={4}>Contact Us</Heading>
        <Flex direction="column" align="center" justify="center">
          <Input placeholder="Your Name" mb={3} />
          <Input placeholder="Your Email" mb={3} />
          <Textarea placeholder="Your Message" mb={3} />
          <Button colorScheme="blue">Send Message</Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default Index;