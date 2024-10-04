import React from 'react'
import { IconProps } from './types'

const IconOnsenSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M270-440q5-15 7.5-28.5T280-498q0-30-15-52t-34-47q-19-25-34-55.5T182-731q0-15 1.5-32t5.5-37h81q-5 23-6.5 38t-1.5 28q0 37 15.5 61.5T311-624q18 24 33.5 53t15.5 75q0 14-2 28t-6 28h-82Zm160 0q5-15 7.5-28.5T440-498q0-30-15-52t-34-47q-19-25-34-55.5T342-731q0-15 1.5-32t5.5-37h81q-5 23-7 38t-2 28q0 37 15.5 61.5T470-624q18 24 33.5 53t15.5 75q0 14-1.5 28t-5.5 28h-82Zm160 0q5-15 7.5-28.5T600-498q0-30-15-52t-34-47q-19-25-34-55.5T502-731q0-15 1.5-32t5.5-37h81q-5 23-7 38t-2 28q0 37 15.5 61.5T630-624q18 24 33.5 53t15.5 75q0 14-1.5 28t-5.5 28h-82ZM480-160q-149 0-254.5-58.5T120-360q0-43 31-81.5t89-67.5v93q-20 14-30 28.5T200-360q0 45 87 82.5T480-240q106 0 193-37.5t87-82.5q0-13-10-27.5T720-416v-93q58 29 89 67.5t31 81.5q0 83-105 141.5T480-160Z" />
  </svg>
)

export { IconOnsenSharpFilled as default }
