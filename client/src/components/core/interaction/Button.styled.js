import styled, { css } from 'styled-components'
import { sp } from 'styled/spacing'
import { f0, f100, f200, family } from 'styled/fonts'
import * as color from 'styled/colors'

import { $p, $px, $py, $pt, $pr, $pb, $pl } from '@styled/variants/padding'
import { $m, $mx, $my, $mt, $mr, $mb, $ml } from '@styled/variants/margin'
import {
	$radius,
	$radiusT,
	$radiusR,
	$radiusB,
	$radiusL
} from 'styled/variants/radius'
import {
	$border,
	$borderT,
	$borderR,
	$borderB,
	$borderL
} from 'styled/variants/border'
import { $shadow } from 'styled/variants/shadow'
import { $borderfill, $fill } from 'styled/variants/fill'

import { lighten, rgba, readableColor } from 'polished'

const btnBase = css`
	font-family: ${family['default']};
	position: relative;
	z-index: 1;
	cursor: pointer;
	text-transform: uppercase;
	font-weight: 500;
	letter-spacing: 0.02857em;
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
				${f0};
				padding-top: ${sp[4]};
				padding-left: ${sp[8]};
				padding-right: ${sp[8]};
				`
		} else if (size === 'md') {
			return `
				${f100};
				padding: ${sp[6]} ${sp[10]};
			`
		} else if (size === 'lg') {
			return `
				${f200};
				padding: ${sp[8]} ${sp[16]};
			`
		} else {
			return `
				${f100};
				padding: ${sp[6]} ${sp[12]};
			`
		}
	}}
`

const btnColor = css`
	${({
		primary,
		secondary,
		light,
		dark,
		success,
		warning,
		danger,
		outline,
		fill
	}) => {
		if (primary) {
			if (outline) {
				return `
					background-color: transparent;
					color: ${color.primary[400]};
					border: 2px solid ${color.primary[400]};

					div span {
						background-color: ${rgba(color.primary[200], 0.5)};
					}

					&:hover {
						color: ${color.primary[200]};
						border-color: ${color.primary[200]};
					}
				`
			} else {
				console.log(color.primary[400])
				return `
					background-color: ${color.primary[400]};
					color: ${readableColor(color.primary[400], color.white, color.black)};

					div span {
						background-color: ${rgba(color.white, 0.75)};
					}

					&:hover {
						color: ${readableColor(color.primary[600], color.white, color.black)};
						background-color: ${color.primary[200]};
					}
				`
			}
		} else if (secondary) {
			if (outline) {
				return `
					background-color: transparent;
					color: ${color.secondary[600]};
					border: 2px solid ${color.secondary[600]};

					div span {
						background-color: ${color.secondary[200]};
					}

					&:hover {
						color: ${color.secondary[400]};
						border-color: ${color.secondary[400]};
					}
				`
			} else {
				return `
					background-color: ${color.secondary[600]};
					color: ${readableColor(color.secondary[600], color.white, color.black)};

					div span {
						background-color: ${color.secondary[200]};
					}

					&:hover {
						color: ${readableColor(color.secondary[400], color.white, color.black)};
						background-color: ${color.secondary[400]};
					}
				`
			}
		} else if (light) {
			if (outline) {
				return `
					background-color: ${color.white};
					color: ${color.black};
					border: 2px solid ${color.black};

					div span {
						background-color: ${color.grey[300]};
					}

					&:hover {
						color: ${rgba(color.black, 0.5)});
						border-color: ${rgba(color.black, 0.5)};
					}
				`
			} else {
				return `
					background-color: ${color.white};
					color: ${color.black};

					div span {
						background-color: ${color.grey700};
					}

					&:hover {
						color: ${rgba(color.black, 0.75)};
					}
				`
			}
		} else if (dark) {
			if (outline) {
				return `
					background-color: transparent;
					border: 2px solid ${color.black};
				`
			} else {
				return `
					background-color: ${color.black};
				`
			}
		} else if (danger) {
			if (outline) {
				return `
					background-color: transparent;
					border: 2px solid ${primary[400]};
				`
			} else {
				return `

				`
			}
		} else if (warning) {
			if (outline) {
				return `
					background-color: transparent;
					border: 2px solid ${primary[400]};
				`
			} else {
				return `

				`
			}
		} else if (success) {
			if (outline) {
				return `
					background-color: transparent;
					border: 2px solid ${primary[400]};
				`
			} else {
				return `

				`
			}
		} else if (fill) {
			if (outline) {
				return `
					background-color: transparent;
					border: 2px solid ${fill};
					color: ${fill};

					div span {
						background-color: ${rgba(fill, 0.25)};
					}

					&:hover {
						border-color: ${rgba(fill)};
						color: ${rgba(fill)};
					}
				`
			} else {
				return `
					color: ${readableColor(fill, color.white, color.black, true)};
					background-color: ${fill};

					div span {
						background-color: ${rgba(readableColor(fill), 0.75)};
					}

					&:hover {
						color: ${lighten(0.2, readableColor(fill, color.white, color.black, true))};
						background-color: ${lighten(0.1, fill)};
					}
				`
			}
		} else {
			if (outline) {
				return `
					background-color: transparent;
					border: 2px solid ${color.grey[300]};

					div span {
						background-color: ${color.grey[300]};
					}

					&:hover {
						border-color: ${rgba(color.black, 0.2)};
					}
				`
			} else {
				return `
					background-color: ${color.grey[200]};
					border: 2px solid transparent;

					div span {
						background-color: ${rgba(color.white, 0.75)};
					}

					&:hover {
						background-color: ${rgba(color.black, 0.1)};
					}
				`
			}
		}
	}}
`

export const Button = styled(props => props.as)`
	${({ p }) => {
		if (p) return $p(p)
	}}

	${({ px }) => {
		if (px) return $px(px)
	}}

	${({ py }) => {
		if (py) return $py(py)
	}}

	${({ pt }) => {
		if (pt) return $pt(pt)
	}}

	${({ pr }) => {
		if (pr) return $pr(pr)
	}}

	${({ pb }) => {
		if (pb) return $pb(pb)
	}}

	${({ pl }) => {
		if (pl) return $pl(pl)
	}}

    ${({ m }) => {
		if (m) return $m(m)
	}}

    ${({ mx }) => {
		if (mx) return $mx(mx)
	}}

    ${({ my }) => {
		if (my) return $my(my)
	}}

    ${({ mt }) => {
		if (mt) return $mt(mt)
	}}

    ${({ mr }) => {
		if (mr) return $mr(mr)
	}}

    ${({ mb }) => {
		if (mb) return $mb(mb)
	}}

    ${({ ml }) => {
		if (ml) return $ml(ml)
	}}

    ${({ shadow }) => {
		if (shadow) return $shadow(shadow)
	}}

    ${({ fill }) => {
		if (fill) return $fill(fill)
	}}

    ${({ border }) => {
		if (border) return $border(border)
	}}

    ${({ borderT }) => {
		if (borderT) return $borderT(borderT)
	}}

    ${({ borderR }) => {
		if (borderR) return $borderR(borderR)
	}}

    ${({ borderB }) => {
		if (borderB) return $borderB(borderB)
	}}

    ${({ borderL }) => {
		if (borderL) return $borderL(borderL)
	}}

    ${({ borderfill }) => {
		if (borderfill) return $borderfill(borderfill)
	}}

    ${({ radius }) => {
		if (radius) return $radius(radius)
	}}

    ${({ radiusT }) => {
		if (radiusT) return $radiusT(radiusT)
	}}

    ${({ radiusR }) => {
		if (radiusR) return $radiusR(radiusR)
	}}

    ${({ radiusB }) => {
		if (radiusB) return $radiusB(radiusB)
	}}

    ${({ radiusL }) => {
		if (radiusL) return $radiusL(radiusL)
	}}
	${btnBase};
	${btnSize};
	${btnColor};
`
