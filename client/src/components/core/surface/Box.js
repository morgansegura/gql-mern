// Styles
import * as s from './Box.styled'

const Box = ({ children, as = 'div', ...props }) => {
	return (
		<s.Box as={as} {...props}>
			{children}
		</s.Box>
	)
}

export default Box
