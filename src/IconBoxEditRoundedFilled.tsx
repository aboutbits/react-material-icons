import React from 'react'
import { IconProps } from './types'

const IconBoxEditRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-120q-33 0-56.5-23.5T120-200v-499q0-14 4.5-27t13.5-24l50-61q11-14 27.5-21.5T250-840h460q18 0 34.5 7.5T772-811l50 61q9 11 13.5 24t4.5 27v111q0 12-8.5 20t-20.5 9q-25 2-46.5 11T725-520l-85 85v-205H320v255q0 23 19 34.5t39 1.5l102-51 83 42-59 58q-11 11-17.5 26t-6.5 31v83q0 17-11.5 28.5T440-120H200Zm360-40v-66q0-8 3-15.5t9-13.5l209-208q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T903-340L695-132q-6 6-13.5 9t-15.5 3h-66q-17 0-28.5-11.5T560-160Zm263-184 37-39-37-37-38 38 38 38ZM216-720h528l-34-40H250l-34 40Z" />
  </svg>
)

export { IconBoxEditRoundedFilled as default }
