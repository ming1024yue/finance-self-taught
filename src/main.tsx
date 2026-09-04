import{createRoot}from"react-dom/client";import Home from"./Home";import TopicPage from"./TopicPage";import"./styles.css";import"./tools.css";
const base=import.meta.env.BASE_URL.replace(/\/$/,"");const path=location.pathname.replace(base,"");const m=path.match(/^\/topics\/([^/]+)/);createRoot(document.getElementById("root")!).render(m?<TopicPage slug={m[1]}/>:<Home/>);
