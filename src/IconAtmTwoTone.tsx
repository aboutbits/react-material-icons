import React from 'react'
import { IconProps } from './types'

const IconAtmTwoTone: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M3.5 13.5h2V15H7v-5c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v5h1.5v-1.5zm0-3h2V12h-2v-1.5zm13.5 0h1V14h1.5v-3.51h1V15H22v-5c0-.55-.45-1-1-1h-4.5c-.55 0-1 .45-1 1v5H17v-4.5zM10.25 15h1.5v-4.5H14V9H8v1.5h2.25z" />
  </svg>
)

export { IconAtmTwoTone as default }
