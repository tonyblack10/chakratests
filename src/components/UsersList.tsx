import { Box, Button, Divider, Flex, Heading, Icon, Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import { RiAddLine } from "react-icons/ri";

export function UsersList() {
  return (
    <Box flex="1" borderRadius={8} bg="white" p="8">
      <Flex mb="8" justify="space-between" align="center">
        <Heading size="lg" fontWeight="normal">Buscar Usuário</Heading>

        <Button
          cursor="pointer"
          as="a"
          size="sm"
          fontSize="sm"
          colorScheme="blue"
          leftIcon={<Icon as={RiAddLine} />}
        >
          Criar Usuário
        </Button>
      </Flex>
      
      <Divider my="6" borderColor="gray.400" />
    
      <Table>
        <Thead>
          <Tr>
            <Th>Usuário</Th>
            <Th>E-mail</Th>
            <Th>Data Cadastro</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>
              <Box>
                <Text fontWeight="bold">ANTONIO CARLOS DOS SANTOS COSTA</Text>
                <Text fontSize="sm" color="gray.800">1234567890</Text>
              </Box>
            </Td>
            <Td>tonyblack10@gmail.com</Td>
            <Td>25 de abril de 2023</Td>
          </Tr>
        </Tbody>
      </Table>
    </Box>
  )
}