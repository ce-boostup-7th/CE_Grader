import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

import { Progress, themes, WindowContent } from 'react95'

import {
    Div,
    ResetStyles,
    WindowHeaderStyled,
    WindowStyled,
} from './LoginStyle'

const WindowContentStyled = styled(WindowContent)`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`

const Modal = ({ progress }) => {
    return (
        <Div style={{ zIndex: 3 }}>
            <ResetStyles />
            <ThemeProvider theme={themes.default}>
                <WindowStyled>
                    <WindowHeaderStyled>
                        <span>
                            In process.
						</span>
                    </WindowHeaderStyled>
                    <WindowContentStyled>
                            <Progress percent={progress} shadow width={350} />
                    </WindowContentStyled>
                </WindowStyled>
            </ThemeProvider>
        </Div>
    )
}

export default Modal