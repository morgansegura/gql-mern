import { borderwidth } from '@styled/spacing'

const borderArr = ['0', '2', '4', '8', 'base']

const $border = props => {
	if (props === true) {
		return `
			border: ${borderwidth['base']} solid;
		`
	} else if (borderArr.includes(props)) {
		return `
			border: ${borderwidth[props]} solid;
		`
	}
}

const $borderT = props => {
	if (props === true) {
		return `
			border-top: ${borderwidth['base']} solid;
		`
	} else if (borderArr.includes(props)) {
		return `
			border-top: ${borderwidth[props]} solid;
		`
	}
}

const $borderR = props => {
	if (props === true) {
		return `
			border-right: ${borderwidth['base']} solid;
		`
	} else if (borderArr.includes(props)) {
		return `
			border-right: ${borderwidth[props]} solid;
		`
	}
}

const $borderB = props => {
	if (props === true) {
		return `
			border-bottom: ${borderwidth['base']} solid;
		`
	} else if (borderArr.includes(props)) {
		return `
			border-bottom: ${borderwidth[props]} solid;
		`
	}
}

const $borderL = props => {
	if (props === true) {
		return `
			border-left: ${borderwidth['base']} solid;
		`
	} else if (borderArr.includes(props)) {
		return `
			border-left: ${borderwidth[props]} solid;
		`
	}
}

const $borders = props => {
	const notInB = !props.border
	let border = ``

	if (props.border) border += $border(props.border)
	if (props.borderT && notInB) border += $borderT(props.borderT)
	if (props.borderR && notInB) border += $borderR(props.borderR)
	if (props.borderB && notInB) border += $borderB(props.borderB)
	if (props.borderL && notInB) border += $borderL(props.borderL)

	return border
}

export default $borders
