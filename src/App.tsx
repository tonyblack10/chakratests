import { useState } from 'react'
import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import { Header } from './components/Header'
import { SideBar } from './components/Sidebar'
import SidebarWithHeader from './components/SidebarWithHeader'
import { Input } from './components/Input'
import { UsersList } from './components/UsersList'

export function App() {
  return (
    <SidebarWithHeader>
      <UsersList />
    </SidebarWithHeader>
  )
}
