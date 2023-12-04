import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react'

const ColorModeSwitch = () => {
    const { colorMode, toggleColorMode } = useColorMode()
  return (
    <HStack>
        <Switch onChange={toggleColorMode} colorScheme='green' isChecked={colorMode === 'dark'}/>
        <Text>Dark Mode</Text>
    </HStack>
  )
}

export default ColorModeSwitch
