import { css } from 'styled-components'

export const sp = {
	0: `0`,
	2: `${2 / 16}rem`,
	4: `${4 / 16}rem`,
	6: `${6 / 16}rem`,
	8: `${8 / 16}rem`,
	10: `${10 / 16}rem`,
	12: `${12 / 16}rem`,
	14: `${14 / 16}rem`,
	16: `${16 / 16}rem`,
	20: `${20 / 16}rem`,
	24: `${24 / 16}rem`,
	28: `${28 / 16}rem`,
	32: `${32 / 16}rem`,
	36: `${36 / 16}rem`,
	40: `${40 / 16}rem`,
	44: `${44 / 16}rem`,
	48: `${48 / 16}rem`,
	56: `${56 / 16}rem`,
	64: `${64 / 16}rem`,
	80: `${80 / 16}rem`,
	96: `${96 / 16}rem`,
	112: `${112 / 16}rem`,
	128: `${128 / 16}rem`,
	144: `${144 / 16}rem`,
	160: `${160 / 16}rem`,
	176: `${176 / 16}rem`,
	192: `${192 / 16}rem`,
	208: `${208 / 16}rem`,
	224: `${224 / 16}rem`,
	240: `${240 / 16}rem`,
	256: `${256 / 16}rem`,
	288: `${288 / 16}rem`,
	320: `${320 / 16}rem`,
	384: `${384 / 16}rem`
}

export const gutter = {
	sm: sp[20],
	md: sp[40],
	lg: sp[60],
	xl: sp[80]
}

export const radius = {
	none: '0px',
	sm: `${2 / 16}em`,
	base: `${4 / 16}em`,
	md: `${6 / 16}em`,
	lg: `${8 / 16}em`,
	xl: `${12 / 16}em`,
	'2xl': `${16 / 16}em`,
	'3xl': `${24 / 16}em`,
	full: '9999px'
}

export const borderwidth = {
	0: `0px`,
	2: `2px`,
	4: `4px`,
	8: `8px`,
	base: `1px`
}

export const boxshadow = {
	sm: `0 1px 2px 0 rgba(0, 0, 0, 0.05)`,
	base: `0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)`,
	md: `0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)`,
	lg: `0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)`,
	xl: `0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)`,
	'2xl': `0 25px 50px -12px rgba(0, 0, 0, 0.25)`,
	'3xl': `0 35px 60px -15px rgba(0, 0, 0, 0.3)`,
	inner: `inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)`,
	none: 'none'
}

export const gridCols = {
	1: 'grid-template-columns: repeat(1, minmax(0, 1fr))',
	2: 'grid-template-columns: repeat(2, minmax(0, 1fr))',
	3: 'grid-template-columns: repeat(3, minmax(0, 1fr))',
	4: 'grid-template-columns: repeat(4, minmax(0, 1fr))',
	5: 'grid-template-columns: repeat(5, minmax(0, 1fr))',
	6: 'grid-template-columns: repeat(6, minmax(0, 1fr))',
	7: 'grid-template-columns: repeat(7, minmax(0, 1fr))',
	8: 'grid-template-columns: repeat(8, minmax(0, 1fr))',
	9: 'grid-template-columns: repeat(9, minmax(0, 1fr))',
	10: 'grid-template-columns: repeat(10, minmax(0, 1fr))',
	11: 'grid-template-columns: repeat(11, minmax(0, 1fr))',
	12: 'grid-template-columns: repeat(12, minmax(0, 1fr))',
	none: 'grid-template-columns: none'
}

export const gridRows = {
	1: 'grid-template-rows: repeat(1, minmax(0, 1fr))',
	2: 'grid-template-rows: repeat(2, minmax(0, 1fr))',
	3: 'grid-template-rows: repeat(3, minmax(0, 1fr))',
	4: 'grid-template-rows: repeat(4, minmax(0, 1fr))',
	5: 'grid-template-rows: repeat(5, minmax(0, 1fr))',
	6: 'grid-template-rows: repeat(6, minmax(0, 1fr))',
	none: 'grid-template-rows: none'
}

export const gridColSpan = {
	auto: 'grid-column: auto',
	'span-1': 'grid-column: span 1 / span 1',
	'span-2': 'grid-column: span 2 / span 2',
	'span-3': 'grid-column: span 3 / span 3',
	'span-4': 'grid-column: span 4 / span 4',
	'span-5': 'grid-column: span 5 / span 5',
	'span-6': 'grid-column: span 6 / span 6',
	'span-7': 'grid-column: span 7 / span 7',
	'span-8': 'grid-column: span 8 / span 8',
	'span-9': 'grid-column: span 9 / span 9',
	'span-10': 'grid-column: span 10 / span 10',
	'span-11': 'grid-column: span 11 / span 11',
	'span-12': 'grid-column: span 12 / span 12',
	'span-full': 'grid-column: 1 / -1',
	'start-1': 'grid-column-start: 1',
	'start-2': 'grid-column-start: 2',
	'start-3': 'grid-column-start: 3',
	'start-4': 'grid-column-start: 4',
	'start-5': 'grid-column-start: 5',
	'start-6': 'grid-column-start: 6',
	'start-7': 'grid-column-start: 7',
	'start-8': 'grid-column-start: 8',
	'start-9': 'grid-column-start: 9',
	'start-10': 'grid-column-start: 10',
	'start-11': 'grid-column-start: 11',
	'start-12': 'grid-column-start: 12',
	'start-13': 'grid-column-start: 13',
	'start-auto': 'grid-column-start: auto',
	'end-1': 'grid-column-end: 1',
	'end-2': 'grid-column-end: 2',
	'end-3': 'grid-column-end: 3',
	'end-4': 'grid-column-end: 4',
	'end-5': 'grid-column-end: 5',
	'end-6': 'grid-column-end: 6',
	'end-7': 'grid-column-end: 7',
	'end-8': 'grid-column-end: 8',
	'end-9': 'grid-column-end: 9',
	'end-10': 'grid-column-end: 10',
	'end-11': 'grid-column-end: 11',
	'end-12': 'grid-column-end: 12',
	'end-13': 'grid-column-end: 13',
	'end-auto': 'grid-column-end: auto'
}

export const gridRowSpan = {
	auto: 'grid-row: auto',
	'span-1': 'grid-row: span 1 / span 1',
	'span-2': 'grid-row: span 2 / span 2',
	'span-3': 'grid-row: span 3 / span 3',
	'span-4': 'grid-row: span 4 / span 4',
	'span-5': 'grid-row: span 5 / span 5',
	'span-6': 'grid-row: span 6 / span 6',
	'span-full': 'grid-row: 1 / -1',
	'start-1': 'grid-row-start: 1',
	'start-2': 'grid-row-start: 2',
	'start-3': 'grid-row-start: 3',
	'start-4': 'grid-row-start: 4',
	'start-5': 'grid-row-start: 5',
	'start-6': 'grid-row-start: 6',
	'start-7': 'grid-row-start: 7',
	'start-auto': 'grid-row-start: auto',
	'end-1': 'grid-row-end: 1',
	'end-2': 'grid-row-end: 2',
	'end-3': 'grid-row-end: 3',
	'end-4': 'grid-row-end: 4',
	'end-5': 'grid-row-end: 5',
	'end-6': 'grid-row-end: 6',
	'end-7': 'grid-row-end: 7',
	'end-auto': 'grid-row-end: auto'
}

export const gridFlow = {
	row: 'grid-auto-flow: row',
	col: 'grid-auto-flow: column',
	'row-dense': 'grid-auto-flow: row dense',
	'col-dense': 'grid-auto-flow: column dense'
}

export const gridAutoCols = {
	auto: 'grid-auto-columns: auto',
	min: 'grid-auto-columns: min-content',
	max: 'grid-auto-columns: max-content',
	fr: 'grid-auto-columns: minmax(0, 1fr)'
}

export const gridAutoRows = {
	auto: 'grid-auto-rows: auto',
	min: 'grid-auto-rows: min-content',
	max: 'grid-auto-rows: max-content',
	fr: 'grid-auto-rows: minmax(0, 1fr)'
}

export const gap = {
	0: '0px',
	1: '1px',
	2: `${2 / 16}rem`,
	4: `${4 / 16}rem`,
	6: `${6 / 16}rem`,
	8: `${8 / 16}rem`,
	10: `${10 / 16}rem`,
	16: `${16 / 16}rem`,
	24: `${24 / 16}rem`,
	32: `${32 / 16}rem`,
	48: `${48 / 16}rem`,
	56: `${56 / 16}rem`,
	64: `${64 / 16}rem`,
	72: `${72 / 16}rem`,
	88: `${88 / 16}rem`,
	96: `${96 / 16}rem`
}

// export const fill = css`
// 	position: absolute;
// 	top: 0;
// 	right: 0;
// 	bottom: 0;
// 	left: 0;
// `

export const cover = css`
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
`
