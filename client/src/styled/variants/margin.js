import { sp } from 'styled/spacing'

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

export const $m = props => {
	if (props === true) {
		return `
			margin: ${sp[40]};
		`
	} else if (spaceArr.includes(props)) {
		return `
			margin: ${sp[props]};
		`
	}
}

export const $mx = props => {
	if (props === true) {
		return `
			margin-right: ${sp[40]};
			margin-left: ${sp[40]};
		`
	} else if (spaceArr.includes(props)) {
		return `
			margin-right: ${sp[props]};
			margin-left: ${sp[props]};
		`
	}
}

export const $my = props => {
	if (props === true) {
		return `
			margin-top: ${sp[40]};
			margin-bottom: ${sp[40]};
		`
	} else if (spaceArr.includes(props)) {
		return `
			margin-top: ${sp[props]};
			margin-bottom: ${sp[props]};
		`
	}
}

export const $mt = props => {
	if (props === true) {
		return `
			margin-top: ${sp[40]};
		`
	} else if (spaceArr.includes(props)) {
		return `
			margin-top: ${sp[props]};
		`
	}
}

export const $mr = props => {
	if (props === true) {
		return `
			margin-right: ${sp[40]};
		`
	} else if (spaceArr.includes(props)) {
		return `
			margin-right: ${sp[props]};
		`
	}
}

export const $mb = props => {
	if (props === true) {
		return `
			margin-bottom: ${sp[40]};
		`
	} else if (spaceArr.includes(props)) {
		return `
			margin-bottom: ${sp[props]};
		`
	}
}

export const $ml = props => {
	if (props === true) {
		return `
			margin-left: ${sp[40]};
		`
	} else if (spaceArr.includes(props)) {
		return `
			margin-left: ${sp[props]};
		`
	}
}
