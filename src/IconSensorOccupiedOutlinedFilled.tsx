import React from 'react'
import { IconProps } from './types'

const IconSensorOccupiedOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-520q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM240-280v-76q0-21 10.5-39.5T279-425q45-26 95-40.5T480-480q56 0 106 14.5t95 40.5q18 11 28.5 29.5T720-356v76H240Zm609-354q-31-73-86.5-128.5T634-849l31-74q88 36 154.5 103T923-665l-74 31Zm-738 0-74-31q37-88 103.5-154.5T295-923l31 74q-73 31-128.5 86.5T111-634ZM295-37q-88-36-154.5-103T37-295l74-31q31 73 86.5 128.5T326-111l-31 74Zm370 0-31-74q73-31 128.5-86.5T849-326l74 31q-36 88-103 154.5T665-37Z" />
  </svg>
)

export { IconSensorOccupiedOutlinedFilled as default }
