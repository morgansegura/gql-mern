import { css } from 'styled-components'
import { minWidth } from 'styled/spacing'

export const below = Object.keys(minWidth).reduce((accumulator, label) => {
	accumulator[label] = (...args) => css`
		@media (max-width: ${minWidth[label]}) {
			${css(...args)};
		}
	`
	return accumulator
}, {})

export const above = Object.keys(minWidth).reduce((accumulator, label) => {
	accumulator[label] = (...args) => css`
		@media (min-width: ${minWidth[label]}) {
			${css(...args)};
		}
	`
	return accumulator
}, {})
