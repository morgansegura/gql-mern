import { css } from 'styled-components'
import { rem } from 'polished'

export const sp = {
	0: `0`,
	2: rem('2px'),
	4: rem('4px'),
	6: rem('6px'),
	8: rem('8px'),
	10: rem('10px'),
	12: rem('12px'),
	14: rem('14px'),
	16: rem('16px'),
	20: rem('20px'),
	24: rem('24px'),
	28: rem('28px'),
	32: rem('32px'),
	36: rem('36px'),
	40: rem('40px'),
	44: rem('44px'),
	48: rem('48px'),
	56: rem('56px'),
	64: rem('64px'),
	80: rem('80px'),
	96: rem('96px'),
	112: rem('112px'),
	128: rem('128px'),
	144: rem('144px'),
	160: rem('160px'),
	176: rem('176px'),
	192: rem('192px'),
	208: rem('208px'),
	224: rem('224px'),
	240: rem('240px'),
	256: rem('256px'),
	288: rem('288px'),
	320: rem('320px'),
	384: rem('384px')
}

export const gutter = {
	sm: sp[20],
	md: sp[40],
	lg: sp[60],
	xl: sp[80]
}

export const radius = {
	none: '0px',
	sm: rem(2),
	base: rem(4),
	md: rem(6),
	lg: rem(8),
	xl: rem(12),
	'2xl': rem(16),
	'3xl': rem(24),
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
	2: rem(2),
	4: rem(4),
	6: rem(6),
	8: rem(8),
	10: rem(10),
	16: rem(16),
	24: rem(24),
	32: rem(32),
	48: rem(48),
	56: rem(56),
	64: rem(64),
	72: rem(72),
	88: rem(88),
	96: rem(96)
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
