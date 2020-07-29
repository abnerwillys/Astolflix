import React       from 'react'
import { Link } from 'react-router-dom'
import PageDefault from '../../components/PageDefault'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

function Page404() {
    return (
        <PageDefault>
            <Container>
                <Link to='/'>
                    <h3>Error 404 - Vá para Home ou divirta-se com o FlappyBird</h3>
                </Link>
            
                <div>
                    <iframe
                        src="https://mariosouto.com/flappy-bird-devsoutinho/"
                        title="flappyGame"
                        scrolling="no"
                        style={{
                            width: 340,
                            height: 540,
                            borderWidth: 0,
                        }} 
                    />
                </div>
            </Container>            
        </PageDefault>
    )
}

export default Page404