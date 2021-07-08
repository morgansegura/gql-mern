import { useRef } from 'react'
import { CSSTransition } from 'react-transition-group'

// Styled
import * as s from './AnimateFadeToggle.styled'

const AnimateFadeToggle = ({
	in: inProp,
	children,
	className: givenClassName,
	timeout = { appear: 0, enter: 0, exit: 300 }
}) => {
	const ref = useRef()
	const classes = givenClassName
		? `slideToggle ${givenClassName}`
		: 'slideToggle'

	return (
		<s.FadeToggle className={classes}>
			<CSSTransition
				unmountOnExit
				in={inProp}
				timeout={timeout}
				classNames="fadetoggle"
				appear
				nodeRef={ref}>
				{children}
			</CSSTransition>
		</s.FadeToggle>
	)
}

export default AnimateFadeToggle
