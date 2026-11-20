import type { IconProps } from './types.js'
import type { FC } from 'react'

export const IconTableRowsNarrowOutlinedFilled: FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-340v-100h720v100H120Zm0-180v-100h720v100H120Zm0-180v-100h720v100H120Zm0 540v-100h720v100H120Z" />
  </svg>
)
