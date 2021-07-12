import { css } from 'styled-components'
import { minwidth, maxwidth } from '@styled/widths'
import { stripUnit, em, rem } from 'polished'

export const below = Object.keys(maxwidth).reduce((accumulator, label) => {
	const width = `${stripUnit(maxwidth[label]) / 16}em`
	accumulator[label] = (...args) => css`
		@media (max-width: ${width}) {
			${css(...args)};
		}
	`
	return accumulator
}, {})

export const above = Object.keys(minwidth).reduce((accumulator, label) => {
	const width = `${stripUnit(minwidth[label]) / 16}em`
	accumulator[label] = (...args) => css`
		@media (min-width: ${width}) {
			${css(...args)};
		}
	`
	return accumulator
}, {})

// export const below = props => {
// 	const width = (props - 1) / 16
// 	return style => css`
// 		@media (max-width: ${width}em) {
// 			${style};
// 		}
// 	`
// }

// export const above = props => {
// 	const width = props / 16
// 	return style => css`
// 		@media (min-width: ${width}em) {
// 			${style};
// 		}
// 	`
// }

export const fontSizing = (size, lineheight) => {
	return css`
		font-size: ${rem(size)};
		line-height: ${em(lineheight)};
	`
}

export const forLoop = (start, end) => {
	const arr = []
	for (let i = start; i <= end; i++) {
		arr.push({ i: rem(`${i}px`) })
	}

	return arr
}
