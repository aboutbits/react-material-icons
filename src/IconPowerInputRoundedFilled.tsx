import React from 'react'
import { IconProps } from './types'

const IconPowerInputRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-360q-17 0-28.5-11.5T80-400q0-17 11.5-28.5T120-440h120q17 0 28.5 11.5T280-400q0 17-11.5 28.5T240-360H120Zm280 0q-17 0-28.5-11.5T360-400q0-17 11.5-28.5T400-440h120q17 0 28.5 11.5T560-400q0 17-11.5 28.5T520-360H400Zm280 0q-17 0-28.5-11.5T640-400q0-17 11.5-28.5T680-440h120q17 0 28.5 11.5T840-400q0 17-11.5 28.5T800-360H680ZM120-520q-17 0-28.5-11.5T80-560q0-17 11.5-28.5T120-600h680q17 0 28.5 11.5T840-560q0 17-11.5 28.5T800-520H120Z" />
  </svg>
)

export { IconPowerInputRoundedFilled as default }
