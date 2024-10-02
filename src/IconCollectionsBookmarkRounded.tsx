import React from 'react'
import { IconProps } from './types'

export const IconCollectionsBookmarkRounded: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M320-320h480v-480h-80v245q0 12-10 18t-20-1l-49-29q-10-6-21.5-6t-20.5 6l-49 29q-11 7-20.5 1t-9.5-18v-245H320v480Zm0 80q-33 0-56.5-23.5T240-320v-480q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H320ZM160-80q-33 0-56.5-23.5T80-160v-520q0-17 11.5-28.5T120-720q17 0 28.5 11.5T160-680v520h520q17 0 28.5 11.5T720-120q0 17-11.5 28.5T680-80H160Zm160-720v480-480Zm200 245q0 12 9.5 18t20.5-1l49-29q9-6 20.5-6t21.5 6l49 29q10 7 20 1t10-18q0 12-10 18t-20-1l-49-29q-10-6-21.5-6t-20.5 6l-49 29q-11 7-20.5 1t-9.5-18Z" />
  </svg>
)
