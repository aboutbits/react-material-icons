import type { IconProps } from './types.js'
import type { FC } from 'react'

export const IconNorthSharp: FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M440-80v-647L256-544l-56-56 280-280 280 280-56 57-184-184v647h-80Z" />
  </svg>
)
