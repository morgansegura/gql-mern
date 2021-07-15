import styled from 'styled-components'
import { grey, white } from '@styled/colors'

export const ScrollArea = styled.div`
	position: relative;
	overflow-x: auto;
	width: 100%;

	&::-webkit-scrollbar {
		border-radius: 9999px;
		height: 6px;
		/* width: auto; */
		background-color: ${grey[300]};
	}

	&::-webkit-scrollbar-track {
		border-radius: 9999px;
		background-color: ${grey[100]};
		box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
	}

	&::-webkit-scrollbar-thumb:horizontal {
		border-radius: 9999px;
		background-color: ${white};
		border: 1px solid ${grey[300]};
		outline: none;
	}
`
export const ScrollAreaInner = styled.div``
