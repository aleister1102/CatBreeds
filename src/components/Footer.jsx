import { BsFillArrowUpCircleFill } from 'react-icons/bs'

function Footer() {
    return (
        <footer>
            <p>Copyright©2020 30 Days Of React</p>
            <p>
                Designed:
                <a href="https://www.linkedin.com/in/asabeneh/" target="blank">
                    Asabeneh Yetayeh
                </a>
            </p>
            <p>
                Built:
                <a href="https://github.com/marucube35" target="blank">
                    Lê Minh Quân
                </a>
            </p>
            <div>
                <a href="#root">
                    <BsFillArrowUpCircleFill />
                </a>
            </div>
        </footer>
    )
}

export default Footer
