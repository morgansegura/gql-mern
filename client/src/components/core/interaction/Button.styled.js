import styled, { css } from 'styled-components'
import { lighten, rgba, readableColor } from 'polished'
import { sp } from '@styled/spacing'
import { fontSizing } from '@styled/utils'

import {
	primary,
	secondary,
	success,
	warning,
	danger,
	grey,
	white,
	black
} from '@styled/colors'

import {
	$padding,
	$margin,
	$corners,
	$borders,
	$shadow,
	$fill,
	$borderfill
} from '@styled/variants'

const btnBase = css`
	position: relative;
	z-index: 1;
	cursor: pointer;
	text-transform: uppercase;
	font-weight: 500;
	overflow: hidden;
	transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
		color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
		box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
		border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

	div::first-child {
		position: relative;
		z-index: 1;
	}
`

const btnSize = css`
	${({ size }) => {
		if (size === 'sm') {
			return `
				${fontSizing('16px', '20px')}
				padding-top: ${sp[4]};
				padding-left: ${sp[8]};
				padding-right: ${sp[8]};
				`
		} else if (size === 'md') {
			return `
				${fontSizing('14px', '20px')}
				padding: ${sp[6]} ${sp[10]};
			`
		} else if (size === 'lg') {
			return `
				${fontSizing('16px', '20px')}
				padding: ${sp[12]} ${sp[24]};
			`
		} else {
			return `
				${fontSizing('13px', '20px')}
				${'' /* padding: ${sp[8]} ${sp[12]}; */}
			`
		}
	}}
`

const btnColor = css`
	${props => {
		if (props.primary) {
			if (props.outline) {
				return `
					background-color: transparent;
					color: ${primary[400]};
					border: 2px solid ${primary[400]};

					div span {
						background-color: ${rgba(primary[200], 0.5)};
					}

					&:hover {
						color: ${primary[200]};
						border-color: ${primary[200]};
					}
				`
			} else {
				return `
					background-color: ${primary[400]};
					color: ${readableColor(primary[400], white, black)};

					div span {
						background-color: ${rgba(white, 0.75)};
					}

					&:hover {
						color: ${readableColor(primary[600], white, black)};
						background-color: ${primary[200]};
					}
				`
			}
		} else if (props.secondary) {
			if (props.outline) {
				return `
					background-color: transparent;
					color: ${secondary[600]};
					border: 2px solid ${secondary[600]};

					div span {
						background-color: ${secondary[200]};
					}

					&:hover {
						color: ${secondary[400]};
						border-color: ${secondary[400]};
					}
				`
			} else {
				return `
					background-color: ${secondary[600]};
					color: ${readableColor(secondary[600], white, black)};

					div span {
						background-color: ${secondary[200]};
					}

					&:hover {
						color: ${readableColor(secondary[400], white, black)};
						background-color: ${secondary[400]};
					}
				`
			}
		} else if (props.light) {
			if (props.outline) {
				return `
					background-color: ${white};
					color: ${black};
					border: 2px solid ${black};

					div span {
						background-color: ${grey[300]};
					}

					&:hover {
						color: ${rgba(black, 0.5)});
						border-color: ${rgba(black, 0.5)};
					}
				`
			} else {
				return `
					background-color: ${white};
					color: ${black};

					div span {
						background-color: ${grey[700]};
					}

					&:hover {
						color: ${rgba(black, 0.75)};
					}
				`
			}
		} else if (props.dark) {
			if (props.outline) {
				return `
					background-color: transparent;
					border: 2px solid ${black};

					div span {
						background-color: ${grey['50']};
					}

					&:hover {
						${'' /* color: ${rgba(black, 0.95)}; */}
						border-color: ${rgba(black, 0.9)};
					}
				`
			} else {
				return `
					background-color: ${black};
					color: ${white};

					div span {
						background-color: ${rgba(white, 0.5)};
					}

					&:hover {
						${'' /* color: ${rgba(white, 0.95)}; */}
						background-color: ${rgba(black, 0.9)};
					}
				`
			}
		} else if (props.success) {
			if (props.outline) {
				return `
					background-color: transparent;
					color: ${success[600]};
					border: 2px solid ${success[600]};

					div span {
						background-color: ${success[200]};
					}

					&:hover {
						color: ${success[400]};
						border-color: ${success[400]};
					}
				`
			} else {
				return `
					background-color: ${success[600]};
					color: ${readableColor(success[600], white, success[400])};

					div span {
						background-color: ${success[200]};
					}

					&:hover {
						color: ${readableColor(success[400], white, success[400])};
						background-color: ${success[400]};
					}
				`
			}
		} else if (props.danger) {
			if (props.outline) {
				return `
					background-color: transparent;
					color: ${danger[600]};
					border: 2px solid ${danger[600]};

					div span {
						background-color: ${danger[200]};
					}

					&:hover {
						color: ${danger[400]};
						border-color: ${danger[400]};
					}
				`
			} else {
				return `
					background-color: ${danger[600]};
					color: ${readableColor(danger[600], white, danger[600])};

					div span {
						background-color: ${danger[200]};
					}

					&:hover {
						color: ${readableColor(danger[400], white, danger[400])};
						background-color: ${danger[400]};
					}
				`
			}
		} else if (props.warning) {
			if (props.outline) {
				return `
					background-color: transparent;
					color: ${warning[600]};
					border: 2px solid ${warning[600]};

					div span {
						background-color: ${warning[200]};
					}

					&:hover {
						color: ${warning[400]};
						border-color: ${warning[400]};
					}
				`
			} else {
				return `
					background-color: ${warning[600]};
					color: ${readableColor(warning[600], white, black)};

					div span {
						background-color: ${warning[200]};
					}

					&:hover {
						color: ${readableColor(warning[400], white, black)};
						background-color: ${warning[400]};
					}
				`
			}
		} else if (props.fill) {
			if (props.outline) {
				return `
					background-color: transparent;
					border: 2px solid ${props.fill};
					color: ${props.fill};

					div span {
						background-color: ${rgba(props.fill, 0.25)};
					}

					&:hover {
						border-color: ${rgba(props.fill)};
						color: ${rgba(props.fill)};
					}
				`
			} else {
				return `
					color: ${readableColor(props.fill, white, black, true)};
					background-color: ${props.fill};

					div span {
						background-color: ${rgba(readableColor(props.fill), 0.75)};
					}

					&:hover {
						color: ${lighten(0.2, readableColor(props.fill, white, black, true))};
						background-color: ${lighten(0.1, props.fill)};
					}
				`
			}
		} else {
			if (props.outline) {
				return `
					background-color: transparent;
					border: 2px solid ${grey[300]};

					div span {
						background-color: ${grey[300]};
					}

					&:hover {
						border-color: ${rgba(black, 0.2)};
					}
				`
			} else {
				return `


					div span {
						background-color: ${rgba(white, 0.75)};
					}

					&:hover {

					}
				`
			}
		}
	}}
`

export const Button = styled(props => props.as)`
	${props => {
		return $padding(props)
	}}

	${props => {
		return $margin(props)
	}}

	${props => {
		return $corners(props)
	}}

	${props => {
		return $shadow(props)
	}}

	${props => {
		return $fill(props)
	}}

	${props => {
		return $borderfill(props)
	}}

	${props => {
		return $borders(props)
	}}


	${btnBase};
	${btnSize};
	${btnColor};
`
