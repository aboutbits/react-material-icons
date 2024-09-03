import React from 'react'
import { IconProps } from './types'

const IconTextSelectMoveUpRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M800-120H160q-17 0-28.5-11.5T120-160q0-17 11.5-28.5T160-200h640q17 0 28.5 11.5T840-160q0 17-11.5 28.5T800-120ZM440-527l-36 36q-11 11-27.5 11T348-492q-11-11-11-28t11-28l104-104q12-12 28-12t28 12l104 104q11 11 11.5 27.5T612-492q-11 11-28 11t-28-11l-36-35v207q0 17-11.5 28.5T480-280q-17 0-28.5-11.5T440-320v-207Zm360-233H160q-17 0-28.5-11.5T120-800q0-17 11.5-28.5T160-840h640q17 0 28.5 11.5T840-800q0 17-11.5 28.5T800-760Z" />
  </svg>
)

export { IconTextSelectMoveUpRoundedFilled as default }
