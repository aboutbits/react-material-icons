import type { IconProps } from './types.js'
import type { FC } from 'react'

export const IconDesktopPortraitSharpFilled: FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M440-240h200v-360H440v360ZM320-360h60v-300h140v-60H320v360ZM800-80H160v-800h640v800Z" />
  </svg>
)
