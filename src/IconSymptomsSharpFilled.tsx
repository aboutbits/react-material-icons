import React from 'react'
import { IconProps } from './types'

const IconSymptomsSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M760-80q-67 0-113.5-47T599-241q0-33 14-63t38-53l109-103 108 103q24 23 37.5 52.5T920-242q0 68-47 115T760-80ZM480-392q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-6 15-12.5 29T893-444L762-569l-104 96q1-7 1.5-13.5t.5-13.5q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320q15 0 29-2t28-7q-12 30-16 62.5t2 65.5q-11 1-21.5 1H480Z" />
  </svg>
)

export { IconSymptomsSharpFilled as default }
