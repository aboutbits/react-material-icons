import React from 'react'
import { IconProps } from './types'

const IconPhotoAutoMergeRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m764-744-11 31q-2 6-7 9.5t-11 3.5q-11 0-17-8t-2-18l57-160q2-6 7.5-10t12.5-4h14q7 0 12.5 4t7.5 10l57 159q4 10-1.5 18.5T866-700q-7 0-12.5-4t-7.5-10l-10-30h-72ZM224-81q-33 4-59-16t-30-53L80-587q-5-32 15.5-58t54.5-31l50-6v362q0 51 34.5 85.5T320-200h410q0 27-21 44t-48 21L224-81Zm136-199q-34 0-57-23t-23-57v-440q0-33 23-56.5t57-23.5h193q16 0 25.5 12.5T584-839q-5 25-4.5 50.5T588-740h-8q-46 0-78 32.5T470-630q0 46 32 78t78 32q40 0 70-25t38-65q35 21 75.5 28t80.5-2q14-3 25 4.5t11 21.5v198q0 34-23.5 57T800-280H360Zm0-80h440v-32q-45-42-102-65t-118-23q-62 0-118.5 23T360-392v32Zm414-414h52l-26-82-26 82Z" />
  </svg>
)

export { IconPhotoAutoMergeRoundedFilled as default }
