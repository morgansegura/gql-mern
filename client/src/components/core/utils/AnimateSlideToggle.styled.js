import styled from 'styled-components'

export const SlideToggle = styled.div`
	&.slidetoggle {
		position: fixed;

		&-enter {
			${({ direction }) => {
				if (direction === 'top') {
					return `
					top: 0;
					transform: translateY(-100%);
					`
				}
				if (direction === 'right') {
					return `
					right: 0;
					transform: translateX(100%);
					`
				}
				if (direction === 'bottom') {
					return `
					bottom: 0;
					transform: translateY(100%);
					`
				}
				if (direction === 'left') {
					return `
					left: 0;
					transform: translateX(-100%);
					`
				}
			}}
			transition: all 0.3s ease-in;

			&-active {
			}

			&-done {
				${({ direction }) => {
					if (direction === 'top') {
						return `
						top: 0;
						transform: translateY(0);
					`
					}
					if (direction === 'right') {
						return `
						right: 0;
						transform: translateX(0);
					`
					}
					if (direction === 'bottom') {
						return `
						bottom: 0;
						transform: translateY(0);
					`
					}
					if (direction === 'left') {
						return `
						left: 0;
						transform: translateX(0);
					`
					}
				}}
				transition: all 0.3s ease-in;
			}
		}

		&-exit {
			${({ direction }) => {
				if (direction === 'top') {
					return `
						top: 0;
						transform: translateY(-100%);
					`
				}
				if (direction === 'right') {
					return `
						right: 0;
						transform: translateX(100%);
					`
				}
				if (direction === 'bottom') {
					return `
						bottom: 0;
						transform: translateY(100%);
					`
				}
				if (direction === 'left') {
					return `
						left: 0;
						transform: translateX(-100%);
					`
				}
			}}
			transition: all 0.3s ease-in-out;

			&-active {
			}

			&-done {
				${({ direction }) => {
					console.log(direction)
					if (direction === 'top') {
						return `
						top: 0;
						transform: translateY(-100%);
					`
					}
					if (direction === 'right') {
						return `
						right: 0;
						transform: translateX(100%);
					`
					}
					if (direction === 'bottom') {
						return `
						bottom: 0;
						transform: translateY(100%);
					`
					}
					if (direction === 'left') {
						return `
						left: 0;
						transform: translateX(-100%);
					`
					}
				}}
				transition: all 0.3s ease-in-out;
			}
		}
	}
`
