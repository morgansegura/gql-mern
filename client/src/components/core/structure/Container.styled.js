import styled from 'styled-components'
import { $maxWidth } from '@styled/variants/width'
import { $p, $px, $py, $pt, $pr, $pb, $pl } from '@styled/variants/padding'
import { $m, $mx, $my, $mt, $mr, $mb, $ml } from '@styled/variants/margin'

export const Container = styled(props => props.as)`
	${({ maxWidth }) => {
		if (maxWidth) return $maxWidth(maxWidth)
	}}

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


	${({ auto }) => {
		if (auto) {
			return `
                margin-left: auto;
                margin-right: auto;
            `
		}
	}}
`
