import type { IconProps } from './types.js'
import type { FC } from 'react'

export const IconLineEndSquareOutlinedFilled: FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M440-260v-180H80v-80h360v-180h440v440H440Z" />
  </svg>
)
