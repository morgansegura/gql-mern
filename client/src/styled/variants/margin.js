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

const $m = props => {
	if (spaceArr.includes(props)) {
		return `
			margin: ${sp[props]};
		`
	}
}

const $mx = props => {
	if (spaceArr.includes(props)) {
		return `
			margin-right: ${sp[props]};
			margin-left: ${sp[props]};
		`
	}
}

const $my = props => {
	if (spaceArr.includes(props)) {
		return `
			margin-top: ${sp[props]};
			margin-bottom: ${sp[props]};
		`
	}
}

const $mt = props => {
	if (spaceArr.includes(props)) {
		return `
			margin-top: ${sp[props]};
		`
	}
}

const $mr = props => {
	if (spaceArr.includes(props)) {
		return `
			margin-right: ${sp[props]};
		`
	}
}

const $mb = props => {
	if (spaceArr.includes(props)) {
		return `
			margin-bottom: ${sp[props]};
		`
	}
}

const $ml = props => {
	if (spaceArr.includes(props)) {
		return `
			margin-left: ${sp[props]};
		`
	}
}

const $margin = props => {
	const notInM = !props.m
	const notInMX = !props.mx && notInM
	const notInMY = !props.my && notInM
	let margin = ``

	if (props.m) margin += $m(props.m)
	if (props.mx && notInM) margin += $mx(props.mx)
	if (props.my && notInM) margin += $my(props.my)
	if (props.mt && notInMY) margin += $mt(props.mt)
	if (props.mr && notInMX) margin += $mr(props.mr)
	if (props.mb && notInMY) margin += $mb(props.mb)
	if (props.ml && notInMX) margin += $ml(props.ml)

	return margin
}
export default $margin
