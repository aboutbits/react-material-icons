import React from 'react'
import { IconProps } from './types'

const IconShareOffRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M680-640q-24 0-45-8.5T598-672L330-516q-6 3-12.5 4t-13.5-1q-16-4-31.5-5.5T240-520q-32 0-63.5 7.5T116-491q-6 3-12.5 2T92-495q-5-5-6.5-11.5T87-521q13-36 45-57.5t68-21.5q24 0 45 8.5t37 23.5l281-164q-2-7-2.5-13.5T560-760q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm0 560q-50 0-85-35t-35-85q0-6 3-28l-30-18q-12-8-16.5-21.5T520-293q8-12 21.5-16.5T567-306l31 18q16-15 37-23.5t45-8.5q50 0 85 35t35 85q0 50-35 85t-85 35ZM240-40q-83 0-141.5-58.5T40-240q0-83 58.5-141.5T240-440q83 0 141.5 58.5T440-240q0 83-58.5 141.5T240-40Zm0-172 56 57q6 6 14 6t14-6q6-6 6-14.5t-6-14.5l-56-56 57-57q6-6 6-14t-6-14q-6-6-14-6t-14 6l-57 57-57-57q-6-6-14-6t-14 6q-6 6-6 14t6 14l57 57-57 57q-6 6-6 14t6 14q6 6 14 6t14-6l57-57Z" />
  </svg>
)

export { IconShareOffRoundedFilled as default }
