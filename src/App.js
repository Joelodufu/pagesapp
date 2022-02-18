import styled from 'styled-components'
import Nav from './Navbar/Nav'
const Container = styled.div`
 background-color:#e7ecff;
 height:100vh;
 width:100vw;

`
const App = () => {
  return (
	<Container>
		<Nav/>
	</Container>
  )
}

export default App