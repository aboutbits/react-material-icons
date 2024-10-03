import React from 'react'
import { IconProps } from './types.js'

export const IconPhoneBluetoothSpeakerOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M680-480v-152l-92 92-28-28 112-112-112-112 28-28 92 92v-152h20l114 116-86 84 86 86-114 114h-20Zm40-76 38-38-38-38v76Zm0-172 38-36-38-38v74Zm78 608q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12Z" />
  </svg>
)
