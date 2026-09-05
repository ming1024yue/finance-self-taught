import {useLayoutEffect,useRef} from "react";
import KnowledgeGraph from "./KnowledgeGraph";

export default function KnowledgeGraphPlacement(){
  const container=useRef<HTMLDivElement>(null);
  useLayoutEffect(()=>{
    const subjects=document.getElementById("subjects");
    if(subjects&&container.current) subjects.before(container.current);
  },[]);
  return <div className="knowledge-placement" ref={container}><KnowledgeGraph/></div>;
}
