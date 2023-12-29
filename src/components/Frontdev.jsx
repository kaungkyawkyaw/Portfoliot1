import React from 'react'
import { Button, Group, Collapse, Box } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
const Frontdev = () => {
    const [opened, { toggle }] = useDisclosure(false);
  return (

<Box maw={400} mx="auto">
<Group justify="start" mb={5}>
  <Button  size='md' color='violet' onClick={toggle}>FrontEnd</Button>
</Group>

<Collapse in={opened} transitionDuration={1000} transitionTimingFunction="linear">
    <ul>
     <li>Html</li>
     <li>Css</li>
     <li>Bootstrap</li>
     <li>Tailwind</li>
     <li>JavaScript</li>
     <li>React</li>
   </ul>
</Collapse>
</Box>
  )
}

export default Frontdev