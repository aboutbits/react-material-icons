import React from 'react'
import { IconProps } from './types'

export const IconDownloadDoneRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m382-434 338-338q12-12 28.5-12t28.5 12q12 12 12 28.5T777-715L410-348q-12 12-28 12t-28-12L183-519q-12-12-11.5-28.5T184-576q12-12 28.5-12t28.5 12l141 142ZM240-160q-17 0-28.5-11.5T200-200q0-17 11.5-28.5T240-240h480q17 0 28.5 11.5T760-200q0 17-11.5 28.5T720-160H240Z" />
  </svg>
)
