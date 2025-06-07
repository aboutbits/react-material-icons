import React from 'react'
import { IconProps } from './types.js'

export const IconPhotoAutoMergeOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M224-81q-33 4-59-16t-30-53L80-587q-5-32 15.5-58t54.5-31l50-6v362q0 51 34.5 85.5T320-200h410q0 27-21 44t-48 21L224-81Zm136-199q-34 0-57-23t-23-57v-440q0-33 23-56.5t57-23.5h235q-8 20-11.5 40t-3.5 41q0 15 1.5 30t6.5 29h-8q-46 0-78 32.5T470-630q0 46 32 78t78 32q40 0 70-25t38-65q26 15 54 23t57 8q20 0 40.5-4t40.5-12v235q0 34-23.5 57T800-280H360Zm0-80h440v-32q-45-42-102-65t-118-23q-62 0-118.5 23T360-392v32Zm347-340 71-200h44l72 200h-43l-15-44h-72l-15 44h-42Zm67-74h52l-26-82-26 82Z" />
  </svg>
)
