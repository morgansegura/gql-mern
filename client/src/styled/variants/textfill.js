const $fill = props => {
	if (props) {
		console.log(props)
		return `
            color: ${props};
        `
	}
}

const $textfill = props => {
	if (props.color) return $fill(props.color)
}
export default $textfill
