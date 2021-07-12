import { boxshadow } from '@styled/spacing'

const shadowArr = [
	'sm',
	'base',
	'md',
	'lg',
	'xl',
	'2xl',
	'3xl',
	'inner',
	'none'
]

const $boxShadow = props => {
	if (props === true) {
		return `
			box-shadow: ${boxshadow['base']};
		`
	} else if (shadowArr.includes(props)) {
		return `
			box-shadow: ${boxshadow[props]};
		`
	}
}

const $shadow = props => {
	if (props.shadow) return $boxShadow(props.shadow)
}
export default $shadow
