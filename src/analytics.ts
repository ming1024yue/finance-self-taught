type AnalyticsWindow=Window&{
 dataLayer:unknown[][];
 gtag:(...args:unknown[])=>void;
};

export function enableAnalytics(){
 const measurementId=import.meta.env.VITE_GA_MEASUREMENT_ID?.trim();
 if(!import.meta.env.PROD||!measurementId||!/^G-[A-Z0-9]+$/i.test(measurementId))return;
 const analyticsWindow=window as AnalyticsWindow;
 analyticsWindow.dataLayer=analyticsWindow.dataLayer||[];
 analyticsWindow.gtag=(...args:unknown[])=>{analyticsWindow.dataLayer.push(args)};
 analyticsWindow.gtag("js",new Date());
 analyticsWindow.gtag("config",measurementId);
 const script=document.createElement("script");
 script.async=true;
 script.src=`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
 document.head.append(script);
}
