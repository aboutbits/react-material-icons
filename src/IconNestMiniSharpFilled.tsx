import React from 'react'
import { IconProps } from './types'

const IconNestMiniSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M300-400q17 0 28.5-11.5T340-440q0-17-11.5-28.5T300-480q-17 0-28.5 11.5T260-440q0 17 11.5 28.5T300-400Zm120 0q17 0 28.5-11.5T460-440q0-17-11.5-28.5T420-480q-17 0-28.5 11.5T380-440q0 17 11.5 28.5T420-400Zm120 0q17 0 28.5-11.5T580-440q0-17-11.5-28.5T540-480q-17 0-28.5 11.5T500-440q0 17 11.5 28.5T540-400Zm120 0q17 0 28.5-11.5T700-440q0-17-11.5-28.5T660-480q-17 0-28.5 11.5T620-440q0 17 11.5 28.5T660-400ZM480-80q-75 0-140.5-28.5t-114-77q-48.5-48.5-77-114T120-440q0-138 91.5-240.5T440-798v-122q0-17 11.5-28.5T480-960q17 0 28.5 11.5T520-920v122q137 15 228.5 117.5T840-440q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T480-80Z" />
  </svg>
)

export { IconNestMiniSharpFilled as default }
