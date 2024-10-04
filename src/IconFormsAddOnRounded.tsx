import React from 'react'
import { IconProps } from './types'

const IconFormsAddOnRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M680-121q-17 0-28.5-11.5T640-161v-80h-80q-17 0-28.5-11.5T520-281q0-17 11.5-28.5T560-321h80v-80q0-17 11.5-28.5T680-441q17 0 28.5 11.5T720-401v80h80q17 0 28.5 11.5T840-281q0 17-11.5 28.5T800-241h-80v80q0 17-11.5 28.5T680-121ZM320-240q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320h100q17 0 28.5 11.5T460-280q0 17-11.5 28.5T420-240H320Zm0-160q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480h100q17 0 28.5 11.5T460-440q0 17-11.5 28.5T420-400H320Zm0-160q-17 0-28.5-11.5T280-600q0-17 11.5-28.5T320-640h400q17 0 28.5 11.5T760-600q0 17-11.5 28.5T720-560H320Zm0-160q-17 0-28.5-11.5T280-760q0-17 11.5-28.5T320-800h400q17 0 28.5 11.5T760-760q0 17-11.5 28.5T720-720H320Zm-160 0q-17 0-28.5-11.5T120-760q0-17 11.5-28.5T160-800q17 0 28.5 11.5T200-760q0 17-11.5 28.5T160-720Zm0 160q-17 0-28.5-11.5T120-600q0-17 11.5-28.5T160-640q17 0 28.5 11.5T200-600q0 17-11.5 28.5T160-560Zm0 160q-17 0-28.5-11.5T120-440q0-17 11.5-28.5T160-480q17 0 28.5 11.5T200-440q0 17-11.5 28.5T160-400Zm0 160q-17 0-28.5-11.5T120-280q0-17 11.5-28.5T160-320q17 0 28.5 11.5T200-280q0 17-11.5 28.5T160-240Z" />
  </svg>
)

export { IconFormsAddOnRounded as default }
