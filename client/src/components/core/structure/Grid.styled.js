import styled from 'styled-components'
import {
	$gap,
	$gridCols,
	$gridRows,
	$gridColSpan,
	$gridRowSpan,
	$gridFlow,
	$gridAutoCols,
	$gridAutoRows
} from 'styled/variants/grid'

export const Grid = styled(props => props.as)`
	display: grid;

	${({ cols }) => {
		if (cols) return $gridCols(cols)
	}}
	${({ rows }) => {
		if (rows) return $gridRows(rows)
	}}
	${({ colSpan }) => {
		if (colSpan) return $gridColSpan(colSpan)
	}}
	${({ rowSpan }) => {
		if (rowSpan) return $gridRowSpan(rowSpan)
	}}
	${({ flow }) => {
		if (flow) return $gridFlow(flow)
	}}
	${({ autoCols }) => {
		if (autoCols) return $gridAutoCols(autoCols)
	}}
	${({ autoRows }) => {
		if (autoRows) return $gridAutoRows(autoRows)
	}}
	${({ gap }) => {
		if (gap) return $gap(gap)
	}}
`
