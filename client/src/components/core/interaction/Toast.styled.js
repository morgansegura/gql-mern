import styled from 'styled-components'
import { rgba } from 'polished'
import { black, white, danger, success, warning } from 'styled/colors'
import { f200 } from 'styled/fonts'
import { boxshadow } from 'styled/spacing'

export const Toast = styled.div`
	.slidetoggle {
		top: 1rem;
		right: 1rem;

		.toast {
			display: flex;
			flex-direction: column;
			align-items: center;
			min-width: 200px;
			${f200};
			padding: 0.25rem 0.75rem;
			border-radius: 8px;
			font-weight: 600;
			box-shadow: ${boxshadow['lg']};

			&-error {
				background-color: ${danger[600]};
				border: 1px solid ${rgba(black, 0.1)};
				color: ${white};
			}

			&-success {
				background-color: ${success[600]};
				border: 1px solid ${rgba(black, 0.1)};
				color: ${white};
			}

			&-warning {
				background-color: ${warning[600]};
				border: 1px solid ${rgba(black, 0.1)};
				color: ${white};
			}
		}
	}
`
