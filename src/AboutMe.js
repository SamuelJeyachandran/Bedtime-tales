import { Container } from "@mui/material"
import samuel from './assets/samuel.jpg'
import Donut from './Donut';

const AboutMe = () => {
    return (
        <Container maxWidth='sm'>
            <h1>About Me</h1>
            <p>I am Samuel a 13 year old boy who loves to code as well as to play soccer. </p>
            <img src={samuel} />
            <p>If you want to help me out you can buy me a <b>Donut</b>!!!</p>
            <Donut/>
        </Container>
    )
}

export default AboutMe