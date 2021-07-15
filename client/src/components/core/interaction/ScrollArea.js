import * as s from './ScrollArea.styled'

const ScrollArea = ({ scroll = 'x', children, ...props }) => {
	return (
		<s.ScrollArea {...props}>
			<s.ScrollAreaInner>{children}</s.ScrollAreaInner>
		</s.ScrollArea>
	)
}

export default ScrollArea
