
import { Grid, GridItem, Show } from '@chakra-ui/react'
import './App.css'
import NavBar from './components/NavBar'

function App() {

  return (
    <>
      <Grid templateAreas={{
        base:`"nav" "main"`,
        lg: `"nav nav" "aside main"`
      }}>
        <GridItem area='nav'>
          <NavBar />
        </GridItem>
        <Show above='lg'>
          <GridItem area='aside' background='blue.300'>Aside</GridItem>
        </Show>
        <GridItem area='main' background='red.300'>Main</GridItem>
      </Grid>
    </>
  )
}

export default App
