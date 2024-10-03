import React from 'react'
import { IconProps } from './types.js'

export const IconVideogameAssetOffRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-240q-33 0-56.5-23.5T80-320v-320q0-34 24-57.5t58-23.5h77l361 361H486L83-763q-12-12-12-28.5T83-820q12-12 28.5-12t28.5 12l680 680q12 12 12 28t-12 28q-12 12-28.5 12T763-84L606-240H160Zm689-30q-13 6-28 4t-26-13L422-652q-10-10-11.5-21t3.5-22q5-11 14-18t23-7h349q33 0 56.5 23.5T880-640v320q0 18-9 31t-22 19ZM700-600q-25 0-42.5 17.5T640-540q0 25 17.5 42.5T700-480q25 0 42.5-17.5T760-540q0-25-17.5-42.5T700-600ZM280-440v40q0 17 11.5 28.5T320-360q17 0 28.5-11.5T360-400v-40h40q17 0 28.5-11.5T440-480q0-17-11.5-28.5T400-520h-40v-40q0-17-11.5-28.5T320-600q-17 0-28.5 11.5T280-560v40h-40q-17 0-28.5 11.5T200-480q0 17 11.5 28.5T240-440h40Z" />
  </svg>
)
