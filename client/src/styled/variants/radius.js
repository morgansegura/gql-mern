import { radius } from '@styled/spacing'

const radiusArr = ['none', 'sm', 'base', 'md', 'lg', 'xl', '2xl', '3xl']

const $radius = props => {
	if (props === true) {
		return `
			border-radius: ${radius['base']};
		`
	} else if (radiusArr.includes(props)) {
		return `
			border-radius: ${radius[props]};
		`
	}
}

const $radiusT = props => {
	if (props === true) {
		return `
			border-top-left-radius: ${radius['base']};
			border-top-right-radius: ${radius['base']};
		`
	} else if (radiusArr.includes(props)) {
		return `
			border-top-left-radius: ${radius[props]};
			border-top-right-radius: ${radius[props]};
		`
	}
}

const $radiusR = props => {
	if (props === true) {
		return `
			border-top-right-radius: ${radius['base']};
			border-bottom-right-radius: ${radius['base']};
		`
	} else if (radiusArr.includes(props)) {
		return `
			border-top-right-radius: ${radius[props]};
			border-bottom-right-radius: ${radius[props]};
		`
	}
}

const $radiusB = props => {
	if (props === true) {
		return `
			border-bottom-right-radius: ${radius['base']};
			border-bottom-left-radius: ${radius['base']};
		`
	} else if (radiusArr.includes(props)) {
		return `
			border-bottom-right-radius: ${radius[props]};
			border-bottom-left-radius: ${radius[props]};
		`
	}
}

const $radiusL = props => {
	if (props === true) {
		return `
			border-top-left-radius: ${radius['base']};
			border-bottom-left-radius: ${radius['base']};
		`
	} else if (radiusArr.includes(props)) {
		return `
			border-top-left-radius: ${radius[props]};
			border-bottom-left-radius: ${radius[props]};
		`
	}
}

const $corners = props => {
	const notInR = !props.radius
	let radius = ``

	if (props.radius) radius += $radius(props.radius)
	if (props.radiusT && !notInR) radius += $radiusT(props.radiusT)
	if (props.radiusR && !notInR) radius += $radiusR(props.radiusR)
	if (props.radiusB && !notInR) radius += $radiusB(props.radiusB)
	if (props.radiusL && !notInR) radius += $radiusL(props.radiusL)

	return radius
}
export default $corners
