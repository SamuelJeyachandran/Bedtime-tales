import { Container } from "@mui/material"
import samuel from './assets/samuel.jpg'
import Donut from './Donut';

const AboutMe = () => {
    return (
        <Container maxWidth='sm'>
            <h1>About Me</h1>
            <p>Hi there! I’m Samuel, a 13-year-old coding enthusiast and soccer player from Sydney, Australia. Here’s a little bit about me: <br/><br/> Besides coding and soccer, I love playing Minecraft. My favourite subjects at school are Maths and History. <br/><br/> <strong>My Coding Journey:</strong> <br/><br/> I started coding because of my Dad - he’s a software engineer. So far, I’ve worked on projects like CodingNeverEnds.com that has some cool CSS animations and a game. My favourite programming language is Javascript. I sometimes solve problems on Leet code. <br/><br/> <strong>Fun Facts:</strong> <br/><br/> My friends would describe me as optimistic, logical and kind. One surprising fact about me is that I’ve lived most of my life in Perú. <br/><br/> <strong>Future Goals:</strong> <br/><br/> In the future, I dream of getting better at coding. Whether it’s becoming an Engineer or continuing to innovate in coding, I’m excited about what’s to come!</p>
            <br/>
            <img src={samuel} />
            <br/>
            <p>Thanks for stopping by my page. If you enjoy my website and the stories it creates, you could consider buying me a donut! 🍩. Your support helps fuel my coding adventures and keeps me energised for soccer matches. But no worries, I don’t need the donuts too much – feel free to enjoy the site and have fun!</p>
            <Donut/>
        </Container>
    )
}

export default AboutMe