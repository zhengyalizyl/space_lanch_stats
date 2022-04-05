import React from 'react'
import { GET_LANUCHES_QUERY  } from "../schema";
import { useQuery } from "@apollo/client";
import LaunchItem from "./LaunchItem";
import MissionKey from "./MissionKey";

export default function Launches() {
const {data,loading,error}=useQuery(GET_LANUCHES_QUERY);
  if(error) return <div>get lanuches error</div>
  if(loading) return <div>get lanuches loading</div>
  return (
   <>
     <h1>Launches</h1>
     <MissionKey/>
   {data.lanuches.map(lanuch=>(<LaunchItem key={lanuch.flight_number} lanuch={lanuch}></LaunchItem>))}
   </>
  )
}
