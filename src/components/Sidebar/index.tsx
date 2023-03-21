import { Box, Link, Stack, Text, Icon } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine } from "react-icons/ri"

export function SideBar() {
  return (
    <Box
      as="aside"
      w="64"
      mr="8"
    >
      <Stack spacing="12" align="flex-start">
        <Box>
          <Text fontWeight="bold" fontSize="small">GERAL</Text>
          <Stack spacing="4" mt="8" align="stretch">
            <Link display="flex" alignContent="center">
              <Icon as={RiDashboardLine} fontSize="20" />
              <Text ml="4" fontWeight="medium">Dashboard</Text>
            </Link>
          </Stack>
          <Stack spacing="4" mt="8" align="stretch">
            <Link display="flex" alignContent="center">
              <Icon as={RiContactsLine} fontSize="20" />
              <Text ml="4" fontWeight="medium">Usuários</Text>
            </Link>
          </Stack>
        </Box>
      </Stack>
    </Box>
  )
}