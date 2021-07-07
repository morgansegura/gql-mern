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

export const $p = props => {
	if (props === true) {
		return `
			padding: ${sp[40]};
		`
	} else if (spaceArr.includes(props)) {
		return `
			padding: ${sp[props]};
		`
	}
}

export const $px = props => {
	if (props === true) {
		return `
			padding-right: ${sp[40]};
			padding-left: ${sp[40]};
		`
	} else if (spaceArr.includes(props)) {
		return `
			padding-right: ${sp[props]};
			padding-left: ${sp[props]};
		`
	}
}

export const $py = props => {
	if (props === true) {
		return `
			padding-top: ${sp[40]};
			padding-bottom: ${sp[40]};
		`
	} else if (spaceArr.includes(props)) {
		return `
			padding-top: ${sp[props]};
			padding-bottom: ${sp[props]};
		`
	}
}

export const $pt = props => {
	if (props === true) {
		return `
			padding-top: ${sp[40]};
		`
	} else if (spaceArr.includes(props)) {
		return `
			padding-top: ${sp[props]};
		`
	}
}

export const $pr = props => {
	if (props === true) {
		return `
			padding-right: ${sp[40]};
		`
	} else if (spaceArr.includes(props)) {
		return `
			padding-right: ${sp[props]};
		`
	}
}

export const $pb = props => {
	if (props === true) {
		return `
			padding-bottom: ${sp[40]};
		`
	} else if (spaceArr.includes(props)) {
		return `
			padding-bottom: ${sp[props]};
		`
	}
}

export const $pl = props => {
	if (props === true) {
		return `
			padding-left: ${sp[40]};
		`
	} else if (spaceArr.includes(props)) {
		return `
			padding-left: ${sp[props]};
		`
	}
}
