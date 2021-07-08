import styled from 'styled-components'

export const FadeToggle = styled.div`
	.fadetoggle {
		&-appear {
			/* opacity: 0;
			transition: all 0.3s ease-in; */

			&-active {
				/* opacity: 0;
				transition: all 0.3s ease-in; */
			}

			&-done {
				/* opacity: 0;
				transition: all 0.3s ease-in; */
			}
		}

		&-enter {
			opacity: 0;
			transition: all 0.3s ease-in;

			&-active {
				/* opacity: 0;
				transition: all 0.3s ease-in; */
			}
			&-done {
				opacity: 1;
				transition: all 0.3s ease-in;
			}
		}

		&-exit {
			opacity: 0;
			transition: all 0.3s ease-out;

			&-active {
				/* opacity: 0;
				transition: all 0.3s ease-out; */
			}

			&-done {
				opacity: 0;
				transition: all 0.3s ease-out;
			}
		}
	}
`
