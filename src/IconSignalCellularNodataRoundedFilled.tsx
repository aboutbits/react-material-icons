import React from 'react'
import { IconProps } from './types'

const IconSignalCellularNodataRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M704-128q-11 11-27.5 11.5T648-128q-11-11-11-28t11-28l56-56-56-56q-11-11-11-28t11-28q11-11 28-11t28 11l56 56 56-56q11-11 27.5-11.5T872-352q11 11 11 28t-11 28l-55 56 55 56q11 11 11.5 27.5T872-128q-11 11-28 11t-28-11l-56-55-56 55ZM177-80q-18 0-29.5-12T136-120q0-8 3-15t9-13l663-663q6-6 13-9t15-3q16 0 28 11.5t12 29.5v276q0 18-15.5 27.5T831-475q-17-5-35-7.5t-36-2.5q-102 0-173.5 71.5T515-240q0 31 6.5 58.5T542-128q9 17 .5 32.5T517-80H177Z" />
  </svg>
)

export { IconSignalCellularNodataRoundedFilled as default }
