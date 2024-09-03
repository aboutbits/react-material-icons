import React from 'react'
import { IconProps } from './types'

const IconStackedLineChartRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m110-190 213-213q23-23 57-23t57 23l103 103 256-289q11-13 28.5-13t29.5 12q11 11 11.5 26.5T855-536L596-244q-23 26-57 27.5T480-240L380-340 170-130q-13 13-30 13t-30-13q-13-13-13-30t13-30Zm0-240 213-213q23-23 57-23t57 23l103 103 256-289q11-13 28.5-13t29.5 12q11 11 11.5 26.5T855-776L596-484q-23 26-57 27.5T480-480L380-580 170-370q-13 13-30 13t-30-13q-13-13-13-30t13-30Z" />
  </svg>
)

export { IconStackedLineChartRounded as default }
