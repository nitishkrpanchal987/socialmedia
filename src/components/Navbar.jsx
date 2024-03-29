import React from 'react'
import { Button, Flex } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { DASHBOARD } from '../lib/router'
import { Link } from '@chakra-ui/react'
import { useLogout } from '../hooks/auth'

const Navbar = () => {
    const {logout, isLoading} = useLogout();
  return (
    <Flex
      shadow="sm"
      pos="fixed"
      width="full"
      borderTop="6px solid"
      borderTopColor="teal.400"
      height="16"
      zIndex="3"
      justify="center"
    //   bg="purple"
    >
    <Flex px="4" w="full" align="center" maxW="1200px" >
        <Link color='teal' as={RouterLink} to={DASHBOARD} fontweight='bold'>Home</Link>
    <Button ml='auto' colorScheme='teal' size='sm' onClick={logout}>Logout</Button>
    </Flex>
    </Flex>
  )
}

export default Navbar