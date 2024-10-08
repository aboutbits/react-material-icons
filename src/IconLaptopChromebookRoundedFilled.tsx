import React from 'react'
import { IconProps } from './types'

const IconLaptopChromebookRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-240v-520q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v520h40q17 0 28.5 11.5T960-200q0 17-11.5 28.5T920-160H40q-17 0-28.5-11.5T0-200q0-17 11.5-28.5T40-240h40Zm340 0h120q8 0 14-6t6-14q0-8-6-14t-14-6H420q-8 0-14 6t-6 14q0 8 6 14t14 6Z" />
  </svg>
)

export { IconLaptopChromebookRoundedFilled as default }
