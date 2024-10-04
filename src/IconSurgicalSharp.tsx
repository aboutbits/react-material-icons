import React from 'react'
import { IconProps } from './types'

const IconSurgicalSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M496-346 346-496l361-361 150 150-361 361Zm0-114 248-247-37-37-247 248 36 36Zm-56 340 80-80h360v80H440Zm-237 0q-46 0-88.5-18T40-188l265-264 175 174-90 90q-32 32-74.5 50T227-120h-24Zm0-80h24q30 0 58-11.5t49-32.5l33-33-62-62-136 135q8 2 17 3t17 1Zm541-507-37-37 37 37ZM305-339Z" />
  </svg>
)

export { IconSurgicalSharp as default }
