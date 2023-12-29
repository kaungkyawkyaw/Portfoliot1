import React from 'react'
import { Button, Group, Collapse, Box } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
const Backenddev = () => {
    const [opened, { toggle }] = useDisclosure(false);
  return (

<Box maw={400} mx="auto">
<Group justify="start" mb={5}>
  <Button size='md' color='violet' onClick={toggle}>BackEnd</Button>
</Group>

<Collapse in={opened} transitionDuration={1000} transitionTimingFunction="linear">
    <ul>
     <li>Php</li>
     <li>Laravel</li>
     
   </ul>
</Collapse>
</Box>
  )
}

export default Backenddev