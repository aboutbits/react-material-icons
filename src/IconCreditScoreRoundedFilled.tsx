import React from 'react'
import { IconProps } from './types'

const IconCreditScoreRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v207q0 14-9.5 23.5T847-480q-30 0-59 5.5T738-448L598-307l-30-29q-35-35-84-34.5T400-335q-32 32-35.5 69.5T380-193q6 11 .5 22T364-160H160Zm0-480v160h640v-160H160Zm438 446 197-197q12-12 28.5-11.5T852-390q11 12 11.5 28T852-334L626-108q-6 6-13 9t-15 3q-8 0-15-3t-13-9L456-222q-11-11-11.5-27.5T456-278q11-11 27.5-11t28.5 11l86 84Z" />
  </svg>
)

export { IconCreditScoreRoundedFilled as default }
