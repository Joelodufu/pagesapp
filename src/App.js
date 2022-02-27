import styled from 'styled-components'
import Nav from './Navbar/Nav'
import Questions from './pages/Questions'
const Container = styled.div`
 background-color:#e7ecff;
 height:100vh;
 width:100vw;

`
const App = () => {
  return (
	  
	<Container>
		<Questions/>
	</Container>
  )
}

export default App