const $borderFill = props => {
	if (props) {
		return `
            border-color: ${props};
        `
	}
}

const $borderfill = props => {
	if (props.borderfill) return $borderFill(props.borderfill)
}
export default $borderfill
