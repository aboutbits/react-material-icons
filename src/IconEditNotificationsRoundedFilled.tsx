import React from 'react'
import { IconProps } from './types'

export const IconEditNotificationsRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-80q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80Zm280-120H200q-17 0-28.5-11.5T160-240q0-17 11.5-28.5T200-280h40v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q15 5 16.5 22T545-740L424-620q-11 11-17.5 26t-6.5 31v123q0 33 23.5 56.5T480-360h123q16 0 31-6t26-17l9-9q14-14 32.5-6.5T720-371v91h40q17 0 28.5 11.5T800-240q0 17-11.5 28.5T760-200ZM480-480v-66q0-8 3-16t9-13l209-208q8-8 19-12.5t23-4.5q12 0 23.5 5t19.5 13l37 37q8 9 12.5 19.5T840-703q0 12-4.5 23.5T823-660L615-452q-6 6-13.5 9t-15.5 3h-66q-17 0-28.5-11.5T480-480Zm263-184 37-39-37-37-38 38 38 38Z" />
  </svg>
)
