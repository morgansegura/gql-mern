import * as s from './Container.styled'

const Container = ({ children, as = 'div', auto = true, ...props }) => {
	// sm:default, md, lg, xl
	return (
		<s.Container as={as} auto={auto} {...props}>
			{children}
		</s.Container>
	)
}

export default Container
