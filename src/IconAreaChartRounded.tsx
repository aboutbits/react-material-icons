import React from 'react'
import { IconProps } from './types.js'

export const IconAreaChartRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m546-787 134 107h80q33 0 56.5 23.5T840-600v440H120v-440q0-25 22-36t42 4l96 72 151-211q20-28 54-33t61 17ZM200-520v144l120 96 160-220 280 218v-318H652L496-725 298-447l-98-73Z" />
  </svg>
)
