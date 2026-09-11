export type Resource={name:string;url:string;level:"入门"|"进阶"|"高级";kind:"公开课"|"开放教材"|"公开讲义"|"项目平台";pre:string;description:string};
export type CurriculumStage={title:string;courses:string;practice:string};
export type Curriculum={basis:string;reference:readonly [string,string];stages:readonly CurriculumStage[]};
export type Topic={title:string;intro:string;resources:Resource[];curriculum?:Curriculum};
export type Phase={time:string;title:string;goal:string;learn:string;done:string;link:string;mode?:"core"|"parallel"|"choice"|"ongoing"};
export type SubjectConfig={slug:string;name:string;en:string;intro:string;caution:string;groups:readonly (readonly [string,readonly (readonly [string,string])[]])[];topics:Record<string,Topic>;phases:Phase[];tools:readonly (readonly [string,readonly (readonly [string,string,string])[]])[];books:readonly (readonly [string,string,string,string])[];portals:readonly (readonly [string,string,string,string])[]};
export const r=(name:string,url:string,level:Resource["level"],kind:Resource["kind"],pre:string,description:string):Resource=>({name,url,level,kind,pre,description});
