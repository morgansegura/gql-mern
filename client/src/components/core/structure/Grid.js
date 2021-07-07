import * as s from './Grid.styled'

const Grid = ({ children, as = 'div', ...props }) => {
	return (
		<s.Grid as={as} {...props}>
			{children}
		</s.Grid>
	)
}

export default Grid
