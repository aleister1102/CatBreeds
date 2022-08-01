import { IoLogoOctocat } from 'react-icons/io5'

function Header(props) {
    return (
        <header>
            <IoLogoOctocat />
            <h1>Cats Paradise</h1>
            <p>There are 67 cat breeds </p>
            <small>
                On average a cat can weight about <strong>4.71</strong> Kg and
                lives <strong>13.75</strong> years.
            </small>
        </header>
    )
}

export default Header
