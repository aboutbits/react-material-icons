import React from 'react'
import { IconProps } from './types'

const IconFormatTextdirectionLToRRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M440-800v400q0 17-11.5 28.5T400-360q-17 0-28.5-11.5T360-400v-160q-66 0-113-47t-47-113q0-66 47-113t113-47h280q17 0 28.5 11.5T680-840q0 17-11.5 28.5T640-800h-40v400q0 17-11.5 28.5T560-360q-17 0-28.5-11.5T520-400v-400h-80Zm248 600H160q-17 0-28.5-11.5T120-240q0-17 11.5-28.5T160-280h528l-36-36q-11-11-11-28t11-28q11-11 28-11t28 11l104 104q12 12 12 28t-12 28L708-108q-11 11-28 11t-28-11q-11-11-11-28t11-28l36-36Z" />
  </svg>
)

export { IconFormatTextdirectionLToRRoundedFilled as default }
