import React from 'react'
import { IconProps } from './types'

const IconOutpatientMedRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-760q-17 0-28.5-11.5T80-800q0-17 11.5-28.5T120-840h400q17 0 28.5 11.5T560-800q0 17-11.5 28.5T520-760H120Zm200 500q25 0 42.5-17.5T380-320v-40h40q25 0 42.5-17.5T480-420q0-25-17.5-42.5T420-480h-40v-40q0-25-17.5-42.5T320-580q-25 0-42.5 17.5T260-520v40h-40q-25 0-42.5 17.5T160-420q0 25 17.5 42.5T220-360h40v40q0 25 17.5 42.5T320-260ZM120-120q-33 0-56.5-23.5T40-200v-440q0-33 23.5-56.5T120-720h400q33 0 56.5 23.5T600-640v440q0 33-23.5 56.5T520-120H120Zm0-80h400v-440H120v440Zm631-168q-12-12-12-28.5t12-28.5l15-15h-86q-17 0-28.5-11.5T640-480q0-17 11.5-28.5T680-520h86l-15-15q-12-12-11.5-28.5T752-592q12-12 28.5-12t28.5 12l83 84q12 12 12 28t-12 28l-84 84q-12 12-28.5 12T751-368Zm-431-52Z" />
  </svg>
)

export { IconOutpatientMedRounded as default }
