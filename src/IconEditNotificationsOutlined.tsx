import React from 'react'
import { IconProps } from './types.js'

export const IconEditNotificationsOutlined: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-80q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q11 3 21.5 6.5T582-777l-63 62q-10-2-19-3.5t-20-1.5q-66 0-113 47t-47 113v280h320v-84l80-80v164h80v80H160Zm320-240Zm0 0v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T823-660L603-440H480Zm300-263-37-37 37 37ZM540-500h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19Z" />
  </svg>
)
