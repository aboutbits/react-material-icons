import React from 'react'
import { IconProps } from './types'

export const IconViewComfyRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-520q-17 0-28.5-11.5T80-560v-200q0-17 11.5-28.5T120-800h720q17 0 28.5 11.5T880-760v200q0 17-11.5 28.5T840-520H120Zm320 360q-17 0-28.5-11.5T400-200v-200q0-17 11.5-28.5T440-440h400q17 0 28.5 11.5T880-400v200q0 17-11.5 28.5T840-160H440Zm-320 0q-17 0-28.5-11.5T80-200v-200q0-17 11.5-28.5T120-440h160q17 0 28.5 11.5T320-400v200q0 17-11.5 28.5T280-160H120Z" />
  </svg>
)
