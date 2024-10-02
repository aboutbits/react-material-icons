import React from 'react'
import { IconProps } from './types'

export const IconCleanHandsOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-159v-361h64q7 0 14 1.5t14 3.5l277 103q14 5 22.5 18t8.5 27q0 21-14.5 34T632-320H527q-5 0-7.5-.5T513-323l-64-25-13 39 77 27q2 1 6 1.5t7 .5h274q32 0 56 23t24 57L561-80l-281-79ZM40-80v-440h160v440H40Zm560-414-230-86H210q17-51 56.5-88t93.5-48v-84h-60v-80h220q34 0 64 11t55 30l-57 57q-14-8-29.5-13t-32.5-5h-80v84q69 14 114.5 68.5T600-520v26Zm160-66q-33 0-56.5-23.5T680-640q0-23 17-57t63-103q46 69 63 103t17 57q0 33-23.5 56.5T760-560Z" />
  </svg>
)
