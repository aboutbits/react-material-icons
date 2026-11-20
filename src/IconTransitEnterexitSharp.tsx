import type { IconProps } from './types.js'
import type { FC } from 'react'

export const IconTransitEnterexitSharp: FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-240v-400h120v190l272-272 88 88-274 274h194v120H240Z" />
  </svg>
)
