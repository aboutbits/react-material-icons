import React from 'react'
import { IconProps } from './types'

const IconBubbleRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-120q-20 0-38.5-2t-36.5-6q-17-4-26-17t-5-30q4-17 17-26t30-5q14 3 29 4.5t30 1.5q116 0 198-82t82-198q0-116-82-198t-198-82q-116 0-198 82t-82 198q0 15 1.5 29.5T206-422q4 17-5 30t-26 17q-17 4-30-5t-17-26q-4-18-6-36.5t-2-37.5q0-74 28.5-139.5T226-734q49-49 114.5-77.5T480-840q74 0 139.5 28.5T734-734q49 49 77.5 114.5T840-480q0 74-28.5 139.5T734-226q-49 49-114.5 77.5T480-120Zm-332-28q-11-11-11-28t11-28l316-316H360q-17 0-28.5-11.5T320-560q0-17 11.5-28.5T360-600h200q17 0 28.5 11.5T600-560v200q0 17-11.5 28.5T560-320q-17 0-28.5-11.5T520-360v-104L204-148q-11 11-28 11t-28-11Z" />
  </svg>
)

export { IconBubbleRoundedFilled as default }
