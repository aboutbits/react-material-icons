import React from 'react'
import { IconProps } from './types'

const IconSoundDetectionGlassBreakOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-320v-520h720v82L540-421 380-581 120-320Zm0 200v-80l260-261 160 160 300-337v518H120Z" />
  </svg>
)

export { IconSoundDetectionGlassBreakOutlinedFilled as default }
