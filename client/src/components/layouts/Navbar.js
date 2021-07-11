import * as s from './Navbar.styled'

const Navbar = ({ children, ...props }) => {
	return <s.Navbar {...props}>{children}</s.Navbar>
}

export default Navbar
