import React from 'react'
import { IconProps } from './types'

const IconPlayDisabledRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m658-416-56-58-38-36-230-230q10-8 23-9.5t25 6.5l325 229q19 12 18.5 34T706-446l-48 30ZM762-84 520-328l-138 89q-20 13-41 1.5T320-273v-255L84-764q-11-11-11-28t11-28q11-11 28-11t28 11l679 679q12 12 12 28.5T819-84q-12 11-28.5 11.5T762-84ZM400-448Zm0 102 62-40-62-62v102Zm202-128Z" />
  </svg>
)

export { IconPlayDisabledRounded as default }
