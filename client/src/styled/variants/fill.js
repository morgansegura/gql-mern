import { white, black } from 'styled/colors'
import { lighten, readableColor } from 'polished'

const $bgFill = props => {
	if (props) {
		return `
            color: ${readableColor(props, white, black, true)};
            background-color: ${props};

            &:hover {
                color: ${lighten(
					0.2,
					readableColor(props, white, black, true)
				)};
                background-color: ${lighten(0.1, props)};
            }
        `
	}
}

const $fill = props => {
	if (props.fill) return $bgFill(props.fill)
}
export default $fill
