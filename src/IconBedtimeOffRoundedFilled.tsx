import React from 'react'
import { IconProps } from './types'

const IconBedtimeOffRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M523-524q60 60 137 90t162 27q23-1 37.5 15.5T867-355q-11 33-28 64t-39 59q-13 16-33.5 16.5T731-230L230-731q-14-14-14-34t16-34q25-22 53.5-38t61.5-28q22-8 40.5 5.5T405-823q-3 85 27.5 162T523-524ZM708-26l-81-80q-35 13-70.5 19.5T484-80q-84 0-157.5-32t-128-86.5Q144-253 112-326.5T80-484q0-37 6.5-72.5T106-627l-78-78q-12-12-12-29t12-29q12-12 29-12t29 12L764-83q11 12 11 28.5T764-27q-11 11-28 11.5T708-26Z" />
  </svg>
)

export { IconBedtimeOffRoundedFilled as default }
