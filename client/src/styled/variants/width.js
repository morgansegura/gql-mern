import { minWidth, maxWidth } from '@styled/variants/widths'

const minArr = ['sm', 'md', 'lg', 'xl', '2xl', '3xl']
const maxArr = ['xs', 'sm', 'md', 'lg', 'xl', '2xl']

export const $minWidth = props => {
	if (minArr.includes(props)) {
		return `
			min-width: ${minWidth[props]};
		`
	}
}

export const $maxWidth = props => {
	if (maxArr.includes(props)) {
		return `
			max-width: ${maxWidth[props]};
		`
	}
}
