import { sp } from '@styled/spacing'

const spaceArr = [
	'0',
	'2',
	'4',
	'6',
	'8',
	'10',
	'12',
	'14',
	'16',
	'20',
	'24',
	'28',
	'32',
	'36',
	'40',
	'44',
	'48',
	'56',
	'64',
	'80',
	'96',
	'112',
	'128',
	'144',
	'160',
	'176',
	'192',
	'208',
	'224',
	'240',
	'256',
	'288',
	'320',
	'384'
]

const $p = props => {
	if (spaceArr.includes(props)) {
		return `
			padding: ${sp[props]};
		`
	}
}

const $px = props => {
	if (spaceArr.includes(props)) {
		return `
			padding-right: ${sp[props]};
			padding-left: ${sp[props]};
		`
	}
}

const $py = props => {
	if (spaceArr.includes(props)) {
		return `
			padding-top: ${sp[props]};
			padding-bottom: ${sp[props]};
		`
	}
}

const $pt = props => {
	if (spaceArr.includes(props)) {
		return `
			padding-top: ${sp[props]};
		`
	}
}

const $pr = props => {
	if (spaceArr.includes(props)) {
		return `
			padding-right: ${sp[props]};
		`
	}
}

const $pb = props => {
	if (spaceArr.includes(props)) {
		return `
			padding-bottom: ${sp[props]};
		`
	}
}

const $pl = props => {
	if (spaceArr.includes(props)) {
		return `
			padding-left: ${sp[props]};
		`
	}
}

const $padding = props => {
	const notInP = !props.p
	const notInPX = !props.px && notInP
	const notInPY = !props.py && notInP
	let padding = ``

	if (props.p) padding += $p(props.p)
	if (props.pt && notInPY) padding += $pt(props.pt)
	if (props.pr && notInPX) padding += $pr(props.pr)
	if (props.pb && notInPY) padding += $pb(props.pb)
	if (props.pl && notInPX) padding += $pl(props.pl)
	if (props.px && notInP) padding += $px(props.px)
	if (props.py && notInP) padding += $py(props.py)

	return padding
}

export default $padding
