import React from 'react'
import { IconProps } from './types'

const IconBoxEditOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-120q-33 0-56.5-23.5T120-200v-499q0-14 4.5-27t13.5-24l50-61q11-14 27.5-21.5T250-840h460q18 0 34.5 7.5T772-811l50 61q9 11 13.5 24t4.5 27v139q-33 0-62.5 8T725-520l-85 85v-205H320v320l160-80 83 42-83 82v156H200Zm360 0v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T903-340L683-120H560Zm263-224 37-39-37-37-38 38 38 38ZM216-720h528l-34-40H250l-34 40Z" />
  </svg>
)

export { IconBoxEditOutlinedFilled as default }
