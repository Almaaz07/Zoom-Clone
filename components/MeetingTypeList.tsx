'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import HomeCard from './HomeCard'
import { useRouter } from 'next/navigation'
import MeetingModal from './MeetingModal'
import { useUser } from '@clerk/nextjs'
import { Call, useStreamVideoClient } from '@stream-io/video-react-sdk'
import { useToast } from "@/components/ui/use-toast"


const MeetingTypeList = () => {
  const { toast } = useToast()

  const [values , setValues] = useState({
    dateTime:new Date(),
    description:"",
    link:""
  })

const [callDetail , setCallDetails] = useState<Call>()

  const router = useRouter();

  const [meetingState , setmeetingState] = useState<'isScheduleMeeting' | 'isJoiningMeeting' | 'isInstatntMeeting' |undefined>()
  const { user } =useUser()
  const client = useStreamVideoClient()
const createMeeting = async()=>{
if(!client || !user) return

try {
  if(!values.dateTime){
    toast({
      title: "please select a date and time",
      // description: "Friday, February 10, 2023 at 5:57 PM",
    })
  }
  const id = crypto.randomUUID()
  const call = client.call('default' , id);

  if(!call) throw new Error("failed to create call");

  const StartsAt = values.dateTime.toISOString() || new Date(Date.now()).toISOString()
  const description = values.description || "Instant meeting";
  console.log("object")
  await call.getOrCreate({
    data:{
      starts_at:StartsAt,
      custom:{
        description
      }
    }
  })

  setCallDetails(call)
if(!values.description){
  router.push(`/meeting/${call.id}`)
}

toast({title:"Meeting Created"})

} catch (error) {
  console.log(error)
  toast({
    title: "FAiled to create Meeting",
    // description: "Friday, February 10, 2023 at 5:57 PM",
  })

}

}



  return (
    <section className='grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4'>
        
<HomeCard 
img ="/icons/add-meeting.svg"
title= "New Meeting"
description = "Start an instant meeting"
handleClick={()=> setmeetingState('isInstatntMeeting')}
className="bg-[#f05d0e]"
/>

{/* 2 */}

<HomeCard 
img ="/icons/schedule.svg"
title= "Schedule Meeting"
description = "Plan your meeting"
handleClick={()=> setmeetingState('isScheduleMeeting')}
className="bg-blue-700"
/>

{/* 3 */}
<HomeCard 
img ="/icons/recordings.svg"
title= "view recordings"
description = "Checkout your meetings"
handleClick={()=> setmeetingState('isJoiningMeeting')}
className="bg-purple-700"
/>

{/* 4 */}
<HomeCard 
img ="/icons/join-meeting.svg"
title= "join Meeting"
description = "Via invitation link"
handleClick={()=> setmeetingState('isJoiningMeeting')}
className="bg-gray-600"
/>

<MeetingModal
isOpen={meetingState === 'isInstatntMeeting' }
onClose={()=> setmeetingState(undefined)}
title='start an Instant meeting'
className="text-center"
buttonText='start meeting'
handleClick={createMeeting}
/>

    </section>
  )
}

export default MeetingTypeList
