import React from 'react'
import { IconProps } from './types.js'

export const IconFitnessCenterRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M282-622 168-508q-11 11-27.5 11.5T112-508q-11-11-11.5-27.5T111-564l29-30-28-28q-12-12-12-28t12-28l56-56-29-30q-11-11-11-27.5t12-28.5q11-11 27.5-11.5T196-821l30 29 56-56q12-12 28-12t28 12l28 28 30-29q11-11 27.5-11t28.5 12q11 11 11 28t-11 28L338-678l340 340 114-114q11-11 27.5-11.5T848-452q11 11 11.5 27.5T849-396l-29 30 28 28q12 12 12 28t-12 28l-56 56 29 30q11 11 11 27.5T820-140q-11 11-27.5 11.5T764-139l-30-29-56 56q-12 12-28 12t-28-12l-28-28-30 29q-11 11-27.5 11T508-112q-11-11-11-28t11-28l114-114-340-340Z" />
  </svg>
)