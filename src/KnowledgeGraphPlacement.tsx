import {useLayoutEffect,useRef} from "react";
import KnowledgeGraph from "./KnowledgeGraph";

export default function KnowledgeGraphPlacement(){
  const container=useRef<HTMLDivElement>(null);
  useLayoutEffect(()=>{
    const about=document.getElementById("about");
    if(about&&container.current) about.before(container.current);
  },[]);
  return <div className="knowledge-placement" ref={container}><KnowledgeGraph/></div>;
}
