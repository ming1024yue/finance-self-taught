const initialized=new WeakSet<Element>();
export function enableThemeInteraction(){
 const reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;
 const observer=reduce?null:new IntersectionObserver(entries=>{for(const entry of entries)if(entry.isIntersecting){entry.target.classList.add("is-visible");observer?.unobserve(entry.target)}},{threshold:.08,rootMargin:"0px 0px -35px"});
 const enhance=()=>{document.querySelectorAll("main>section,.knowledge-section,.subject-card,.card,.library-list article,.course-portals article").forEach((element,index)=>{if(initialized.has(element))return;initialized.add(element);element.classList.add("reveal-item");if(reduce)element.classList.add("is-visible");else{(element as HTMLElement).style.transitionDelay=`${Math.min(index%4,3)*55}ms`;observer?.observe(element)}})};
 enhance();new MutationObserver(enhance).observe(document.body,{childList:true,subtree:true});
}
