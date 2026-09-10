type AnalyticsWindow=Window&{
 dataLayer:unknown[];
 gtag:(...args:unknown[])=>void;
};

export function enableAnalytics(){
 const measurementId=import.meta.env.VITE_GA_MEASUREMENT_ID?.trim()||"G-PTD12HXEYQ";
 if(!import.meta.env.PROD||!measurementId||!/^G-[A-Z0-9]+$/i.test(measurementId))return;
 const analyticsWindow=window as unknown as AnalyticsWindow;
 analyticsWindow.dataLayer=analyticsWindow.dataLayer||[];
 // Google tag expects an Arguments object here, matching its official snippet.
 // eslint-disable-next-line prefer-rest-params
 analyticsWindow.gtag=function gtag(){analyticsWindow.dataLayer.push(arguments)};
 analyticsWindow.gtag("js",new Date());
 analyticsWindow.gtag("config",measurementId);
 const script=document.createElement("script");
 script.async=true;
 script.src=`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
 document.head.append(script);
}
