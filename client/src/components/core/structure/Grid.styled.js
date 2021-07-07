import styled from 'styled-components'
import {
	$gap,
	$gridCols,
	$gridRows,
	$gridColSpan,
	$gridRowSpan,
	$gridFlow,
	$gridAutoCols,
	$gridAutoRows,
} from '@styled/variants/grid'

export const Grid = styled(props => props.as)`
	display: grid;

	${({ gridCols }) => {
		if (gridCols) return $gridCols(gridCols)
	}}
	${({ gridRows }) => {
		if (gridRows) return $gridRows(gridRows)
	}}
	${({ gridColSpan }) => {
		if (gridColSpan) return $gridColSpan(gridColSpan)
	}}
	${({ gridRowSpan }) => {
		if (gridRowSpan) return $gridRowSpan(gridRowSpan)
	}}
	${({ gridFlow }) => {
		if (gridFlow) return $gridFlow(gridFlow)
	}}
	${({ gridAutoCols }) => {
		if (gridAutoCols) return $gridAutoCols(gridAutoCols)
	}}
	${({ gridAutoRows }) => {
		if (gridAutoRows) return $gridAutoRows(gridAutoRows)
	}}
	${({ gap }) => {
		if (gap) return $gap(gap)
	}}
`
