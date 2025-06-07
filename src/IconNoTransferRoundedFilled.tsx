import React from 'react'
import { IconProps } from './types.js'

export const IconNoTransferRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M320-200v20q0 25-17.5 42.5T260-120q-25 0-42.5-17.5T200-180v-62q-18-20-29-44.5T160-340v-347l-76-76q-12-12-12-28.5T84-820q12-12 28.5-12t28.5 12l680 680q12 12 12 28t-12 28q-12 12-28.5 12T764-84L652-195h114v12q0 26-18.5 44.5T703-120q-26 0-44.5-18.5T640-183v-17H320Zm429-126L566-509q-14-14-6.5-32.5T587-560h133v-120H428q-16 0-30.5-6T372-703l-96-96q-15-15-10.5-35.5T290-861q36-11 83.5-15t106.5-4q172 0 246 37t74 123v373q0 20-18.5 27.5T749-326Zm-409 6q25 0 42.5-17.5T400-380q0-25-17.5-42.5T340-440q-25 0-42.5 17.5T280-380q0 25 17.5 42.5T340-320ZM240-560h47l-47-47v47Z" />
  </svg>
)
