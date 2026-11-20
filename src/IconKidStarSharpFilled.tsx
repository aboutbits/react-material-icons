import type { IconProps } from './types.js'
import type { FC } from 'react'

export const IconKidStarSharpFilled: FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m305-704 175-227 175 227 274 92-173 245 7 273-283-79-283 79 7-274L32-612l273-92Z" />
  </svg>
)
