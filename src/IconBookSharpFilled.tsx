import type { IconProps } from './types.js'
import type { FC } from 'react'

export const IconBookSharpFilled: FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-80v-800h640v800H160Zm280-440 100-60 100 60v-280H440v280Z" />
  </svg>
)
