import React from 'react'
import { IconProps } from './types'

const IconSurgicalSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M496-346 346-496l361-361 150 150-361 361Zm-56 226 80-80h360v80H440Zm-237 0q-46 0-88.5-18T40-188l265-264 175 174-90 90q-32 32-74.5 50T227-120h-24Z" />
  </svg>
)

export { IconSurgicalSharpFilled as default }
