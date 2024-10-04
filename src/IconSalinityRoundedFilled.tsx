import React from 'react'
import { IconProps } from './types'

const IconSalinityRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-480q-17 0-28.5-11.5T160-520q0-17 11.5-28.5T200-560q17 0 28.5 11.5T240-520q0 17-11.5 28.5T200-480Zm180 0q-17 0-28.5-11.5T340-520q0-17 11.5-28.5T380-560q17 0 28.5 11.5T420-520q0 17-11.5 28.5T380-480Zm200 0q-17 0-28.5-11.5T540-520q0-17 11.5-28.5T580-560q17 0 28.5 11.5T620-520q0 17-11.5 28.5T580-480Zm180 0q-17 0-28.5-11.5T720-520q0-17 11.5-28.5T760-560q17 0 28.5 11.5T800-520q0 17-11.5 28.5T760-480ZM290-590q-17 0-28.5-11.5T250-630q0-17 11.5-28.5T290-670q17 0 28.5 11.5T330-630q0 17-11.5 28.5T290-590Zm380 0q-17 0-28.5-11.5T630-630q0-17 11.5-28.5T670-670q17 0 28.5 11.5T710-630q0 17-11.5 28.5T670-590Zm-190-10q-17 0-28.5-11.5T440-640q0-17 11.5-28.5T480-680q17 0 28.5 11.5T520-640q0 17-11.5 28.5T480-600ZM380-700q-17 0-28.5-11.5T340-740q0-17 11.5-28.5T380-780q17 0 28.5 11.5T420-740q0 17-11.5 28.5T380-700Zm200 0q-17 0-28.5-11.5T540-740q0-17 11.5-28.5T580-780q17 0 28.5 11.5T620-740q0 17-11.5 28.5T580-700ZM480-800q-17 0-28.5-11.5T440-840q0-17 11.5-28.5T480-880q17 0 28.5 11.5T520-840q0 17-11.5 28.5T480-800Zm0 720q-126 0-214-80T163-364q-2-18 10-31t31-13h552q18 0 30.5 13t10.5 31q-14 124-102.5 204T480-80Z" />
  </svg>
)

export { IconSalinityRoundedFilled as default }
