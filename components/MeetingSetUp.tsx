"use client"
import { DeviceSettings, useCall, VideoPreview } from '@stream-io/video-react-sdk'
import React, { useEffect, useState } from 'react'

const MeetingSetUp = () => {
const [isMicCamToggledOn , setIsMicCamToggledOn] = useState(false);

const call = useCall()
if(!call) throw new Error("must be use in stream call components")
useEffect(()=>{
if(isMicCamToggledOn){
   call?.camera.disable();
   call?.microphone.disable();


}
else{
  call?.camera.enable();
  call?.microphone.enable()
}


} , [isMicCamToggledOn, call?.camera, call?.microphone])
  return (
    <div className='flex h-screen w-full items-center justify-center gap-3 flex-col text-white'>
     <h1 className='text-2xl font-bold'>SetUp</h1>
     <VideoPreview/>
     <div className='flex h-16 items-center justify-center gap-3'>
      <label className='flex items-center justify-center gap-2 font-mediun'>
        <input type="checkbox" name=""  checked={isMicCamToggledOn} onChange={(e)=>setIsMicCamToggledOn(e.target.checked)} id="" />
        join without Mic and Camera
      </label>
<DeviceSettings/>


     </div>
    </div>
  )
}

export default MeetingSetUp
