import React from 'react'
import { IconProps } from './types'

const IconSymptomsRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M760-80q-67 0-113.5-47T599-241q0-33 14-63t38-53l54-51q23-22 55-22t55 22l53 51q24 23 37.5 52.5T920-242q0 68-47 115T760-80ZM480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608ZM300-500q0 75 52.5 127.5T480-320q15 0 29-2t28-7q-9 23-13.5 46.5T520-234q1 14-7.5 24T490-200q-63 0-121-14t-111-42q-60-32-109-79.5T65-446q-7-13-10-26.5T52-500q0-14 3-27.5T65-554q63-113 173.5-179.5T480-800q131 0 241.5 66.5T895-554q6 12 9 26t3 28q0 15-3.5 29T893-444l-50-47q-17-17-37.5-25t-43.5-8q-23 0-44.5 7.5T679-493l-21 20q1-7 1.5-13.5t.5-13.5q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500Z" />
  </svg>
)

export { IconSymptomsRoundedFilled as default }
