import {
	gap,
	gridCols,
	gridRows,
	gridColSpan,
	gridRowSpan,
	gridFlow,
	gridAutoCols,
	gridAutoRows
} from '@styled/spacing'

const gapArr = [
	'0',
	'1',
	'2',
	'4',
	'6',
	'8',
	'10',
	'16',
	'24',
	'32',
	'48',
	'56',
	'64',
	'72',
	'88',
	'96'
]
const gridColsArr = [
	'1',
	'2',
	'3',
	'4',
	'5',
	'6',
	'7',
	'8',
	'9',
	'10',
	'11',
	'12',
	'none'
]
const gridRowsArr = ['1', '2', '3', '4', '5', '6', 'none']

const gridColSpanArr = [
	'auto',
	'span-1',
	'span-2',
	'span-3',
	'span-4',
	'span-5',
	'span-6',
	'span-7',
	'span-8',
	'span-9',
	'span-10',
	'span-11',
	'span-12',
	'span-full',
	'start-1',
	'start-2',
	'start-3',
	'start-4',
	'start-5',
	'start-6',
	'start-7',
	'start-8',
	'start-9',
	'start-10',
	'start-11',
	'start-12',
	'start-13',
	'start-auto',
	'end-1',
	'end-2',
	'end-3',
	'end-4',
	'end-5',
	'end-6',
	'end-7',
	'end-8',
	'end-9',
	'end-10',
	'end-11',
	'end-12',
	'end-13',
	'end-auto'
]
const gridRowSpanArr = [
	'auto',
	'span-1',
	'span-2',
	'span-3',
	'span-4',
	'span-5',
	'span-6',
	'span-full',
	'start-1',
	'start-2',
	'start-3',
	'start-4',
	'start-5',
	'start-6',
	'start-7',
	'start-auto',
	'end-1',
	'end-2',
	'end-3',
	'end-4',
	'end-5',
	'end-6',
	'end-7',
	'end-auto'
]
const gridFlowArr = ['row', 'col', 'row-dense', 'col-dense']
const gridAutoColsArr = ['auto', 'min', 'max', 'fr']
const gridAutoRowsArr = ['auto', 'min', 'max', 'fr']

export const $gridCols = props => {
	if (gridColsArr.includes(props)) {
		return `
			${gridCols[props]};
		`
	}
}

export const $gridRows = props => {
	if (gridRowsArr.includes(props)) {
		return `
			${gridRows[props]};
		`
	}
}

export const $gridColSpan = props => {
	if (gridColSpanArr.includes(props)) {
		return `
			${gridColSpan[props]};
		`
	}
}

export const $gridRowSpan = props => {
	if (gridRowSpanArr.includes(props)) {
		return `
			${gridRowSpan[props]};
		`
	}
}

export const $gridFlow = props => {
	if (gridFlowArr.includes(props)) {
		return `
			${gridFlow[props]};
		`
	}
}

export const $gridAutoCols = props => {
	if (gridAutoColsArr.includes(props)) {
		return `
			${gridAutoCols[props]};
		`
	}
}

export const $gridAutoRows = props => {
	if (gridAutoRowsArr.includes(props)) {
		return `
			${gridAutoRows[props]};
		`
	}
}

export const $gap = props => {
	if (gapArr.includes(props)) {
		return `
			gap: ${gap[props]};
		`
	}
}
