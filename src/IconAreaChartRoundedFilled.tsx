import React from 'react'
import { IconProps } from './types'

const IconAreaChartRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M840-320 529-563q-27-21-60.5-16.5T415-547l-86 118q-10 14-26.5 16.5T272-421L120-540v-60q0-25 22-36t42 4l96 72 151-211q20-28 54-33t61 17l134 107h80q33 0 56.5 23.5T840-600v280ZM120-160v-280l135 108q27 22 60.5 17t53.5-33l87-119q10-14 26.5-16.5T513-475l327 256v59H120Z" />
  </svg>
)

export { IconAreaChartRoundedFilled as default }
