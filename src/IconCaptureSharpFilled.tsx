import type { IconProps } from './types.js'
import type { FC } from 'react'

export const IconCaptureSharpFilled: FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-320h480v-320H240v320ZM80-160v-640h800v640H80Z" />
  </svg>
)
