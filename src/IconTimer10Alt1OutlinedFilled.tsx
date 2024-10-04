import React from 'react'
import { IconProps } from './types.js'

export const IconTimer10Alt1OutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M330-270h80v-340H290v80h40v260Zm200 0h60q33 0 56.5-23.5T670-350v-180q0-33-23.5-56.5T590-610h-60q-33 0-56.5 23.5T450-530v180q0 33 23.5 56.5T530-270Zm0-80v-180h60v180h-60ZM360-840v-80h240v80H360ZM480-80q-74 0-139.5-28.5T226-186q-49-49-77.5-114.5T120-440q0-74 28.5-139.5T226-694q49-49 114.5-77.5T480-800q62 0 119 20t107 58l56-56 56 56-56 56q38 50 58 107t20 119q0 74-28.5 139.5T734-186q-49 49-114.5 77.5T480-80Z" />
  </svg>
)