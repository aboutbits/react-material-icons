import React from 'react'
import { IconProps } from './types'

const IconToysAndGamesSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M840-312v232H120v-230h58q11 14 27.5 22t34.5 8q33 0 56.5-23.5T320-360q0-33-23.5-56.5T240-440q-18 0-34.5 8T178-410h-58v-230h190q-5-15-7.5-30t-2.5-30q0-75 52.5-127.5T480-880q75 0 127.5 52.5T660-700q0 15-2.5 30t-7.5 30h190v232h-56q-11-15-28-23.5t-36-8.5q-33 0-56.5 23.5T640-360q0 33 23.5 56.5T720-280q19 0 36-8.5t28-23.5h56Z" />
  </svg>
)

export { IconToysAndGamesSharpFilled as default }
