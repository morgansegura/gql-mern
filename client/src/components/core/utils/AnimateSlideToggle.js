import { useRef } from 'react'
import { CSSTransition } from 'react-transition-group'

// Styled
import * as s from './AnimateSlideToggle.styled'

const AnimateSlideToggle = ({
	in: inProp,
	className: givenClassName,
	children,
	timeout = { appear: 0, enter: 0, exit: 300 },
	...props
}) => {
	const ref = useRef()
	const classes = givenClassName
		? `slidetoggle ${givenClassName}`
		: 'slidetoggle'
	return (
		<CSSTransition
			unmountOnExit
			in={inProp}
			timeout={timeout}
			classNames="slidetoggle"
			appear
			nodeRef={ref}>
			<s.SlideToggle className={classes} ref={ref} {...props}>
				{children}
			</s.SlideToggle>
		</CSSTransition>
	)
}

export default AnimateSlideToggle
