import React from 'react'
import { IconProps } from './types'

export const IconCheckbookRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-360h223q20 0 30-12.5t10-27.5q0-15-10-27.5T503-440H280q-17 0-28.5 11.5T240-400q0 17 11.5 28.5T280-360Zm0-160h160q17 0 28.5-11.5T480-560q0-17-11.5-28.5T440-600H280q-17 0-28.5 11.5T240-560q0 17 11.5 28.5T280-520ZM160-200q-33 0-56.5-23.5T80-280v-400q0-33 23.5-56.5T160-760h640q33 0 56.5 23.5T880-680v60q0 17-11.5 28.5T840-580q-17 0-28.5-11.5T800-620v-60H160v400h240q17 0 28.5 11.5T440-240q0 17-11.5 28.5T400-200H160Zm756-268q5 5 5 11t-5 11l-36 36-70-70 36-36q5-5 11-5t11 5l48 48Zm-60 82L602-132q-6 6-13.5 9t-15.5 3h-33q-8 0-14-6t-6-14v-33q0-8 3-15.5t9-13.5l254-254 70 70ZM160-680v400-400Z" />
  </svg>
)
