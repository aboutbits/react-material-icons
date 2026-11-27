import type { IconProps } from './types.js'
import type { FC } from 'react'

export const IconMetroOutlinedFilled: FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-120v-720h162l198 522 196-522h164v720H720v-490L531-120H429L240-607v487H120Z" />
  </svg>
)
