import React from 'react'
import { IconProps } from './types'

const IconCarryOnBagCheckedRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m692-210-41-41q-6-6-15-6t-15 6q-6 6-6 15t6 15l43 43q12 12 28 12t28-12l99-99q6-6 6-15t-6-15q-6-6-15-6t-15 6l-97 97Zm28 170q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40Zm-300-80v-560h140v-120h-40q-17 0-28.5-11.5T480-840q0-17 11.5-28.5T520-880h80q17 0 28.5 11.5T640-840v291q0 19-11 34t-28 23q-32 15-58.5 37T496-406q-26 35-41 77t-15 89q0 20 3 38.5t8 36.5q5 17-4.5 31T420-120Zm-100 0q-33 0-56.5-23.5T240-200v-400q0-33 23.5-56.5T320-680h40v560h-40Z" />
  </svg>
)

export { IconCarryOnBagCheckedRoundedFilled as default }
