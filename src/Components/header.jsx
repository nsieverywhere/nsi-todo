import Styled from 'styled-components';
import {Title} from 'Components/title';

const Head = Styled.div`
background-color: #082032;
height: 5rem;
display: flex;
justify-content: center;
margin-bottom: 1rem;
`

function Header() {
    return (
        <Head>
            <Title color={"white"}>Nsi Note App</Title>
        </Head>
    )
}

export default Header
