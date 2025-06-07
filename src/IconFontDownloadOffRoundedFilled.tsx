import React from 'react'
import { IconProps } from './types.js'

export const IconFontDownloadOffRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M791-57 485-362l78-36 275 275q-10 20-29 31.5T767-80H160q-33 0-56.5-23.5T80-160v-607l-25-25q-12-12-12-28.5T55-849q12-12 28.5-12t28.5 12l736 736q12 12 12 28t-12 28q-12 12-28.5 12T791-57Zm89-743v508q0 14-7 23t-18 14q-11 5-22 3.5T812-263L624-451l-92-244q-5-11-15-18t-22-7h-30q-12 0-22 7t-15 18l-13 35-152-152q-10-10-11.5-21t3.5-22q5-11 14-18t23-7h508q33 0 56.5 23.5T880-800ZM384-362h101l-74-74-59-59-76 202q-8 19 4 36t32 17q13 0 22.5-7t14.5-19l35-96Zm94-268h4l20 57-33-33 9-24Zm85 232 48 133q4 11 14 18t22 7q16 0 26.5-10.5T686-275L563-398Z" />
  </svg>
)
