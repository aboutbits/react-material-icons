import React from 'react'
import { IconProps } from './types'

const IconSwipeVerticalSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-80v-60h81q-59-72-90-159T40-480q0-94 31-181t90-159H80v-60h200v200h-60v-116q-58 66-89 147t-31 169q0 88 31 169t89 147v-116h60v200H80Zm531-30L304-253l38-83 116-9-126-344 75-28 110 301 38-14-55-149 75-29 55 151 37-14-41-112 75-28 41 113 38-14-14-37 75-28 125 338-355 129Z" />
  </svg>
)

export { IconSwipeVerticalSharpFilled as default }
