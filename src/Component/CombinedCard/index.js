import React from 'react'
import Card1 from '../Card1'
import Card2 from '../Card2'
import Card3 from '../Card3'

function CombinedCards() {
  return (
    <>
    <div style={{display:"flex", justifyContent:"space-around"}}>
        <Card1 text={"faster candidate submissions"} per={"3X"}/>
        <Card1 text={"more candidate placements"} per={"30%"}/>
        <Card1 text={"client satisfaction"} per={"100%"}/>
    </div>
    <>
    <Card2 flag={true}/>
    <Card2 flag={false}/>
    <Card3/>
    <Card2 flag={true}/>
    <Card3/>
    </>
    </>
  )
}

export default CombinedCards