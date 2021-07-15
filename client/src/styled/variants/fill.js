import { white, black } from '@styled/colors'
import { readableColor } from 'polished'

const $bgFill = props => {
	if (props) {
		return `
            color: ${readableColor(props, white, black, true)};
            background-color: ${props};
        `
	}
}

const $fill = props => {
	if (props.fill) return $bgFill(props.fill)
}
export default $fill
