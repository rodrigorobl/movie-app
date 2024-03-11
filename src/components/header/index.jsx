import { Container } from "./style";
import logoimage from '../../assets/logo.svg';

export const Header = () => {
    return(
        <Container>
            <img src={logoimage} alt="logo"/>

            <nav>
                <a href="#movies">Movies</a>
                <a href="#tvShows">Tv Shows</a>
                <a href="#All">All</a>


            </nav>

        </Container>
    )
}