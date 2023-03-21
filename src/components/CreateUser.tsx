import { useState } from 'react'
import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import { Input } from './Input'
import { useForm } from 'react-hook-form'

export function CreateUser() {
  const { register, handleSubmit } = useForm()
  
  function handleCreateUser() {

  }

  return (
    <Box flex="1" borderRadius={8} bg="white" p="8" as="form" onSubmit={handleSubmit(handleCreateUser)}>
      <Heading size="lg" fontWeight="normal">Usuário</Heading>
      
      <Divider my="6" borderColor="gray.400" />

      <VStack spacing="8">
        <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
          <Input label="Nome" {...register('name')} />
          <Input label="E-mail" {...register('email')} />
        </SimpleGrid>
      </VStack>

      <Flex mt="8" justify="flex-end">
        <HStack spacing="4">
          <Button colorScheme="gray">Cancelar</Button>
          <Button colorScheme="blue">Confirmar</Button>
        </HStack>
      </Flex>
    </Box>
  )
}