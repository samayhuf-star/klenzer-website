// Illustrated iPhone step screens (code-drawn SVG, NOT real screenshots). Tagged "Illustration" on the page.
const esc=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;')
const ACC='#2f7d5b', INK='#1c1c1e', MUT='#8a8a8e', BG='#f2f2f7'
function phone(sc,n){
 const W=220,H=440,x0=14,rowH=38; let y=92, out=''
 out+=`<rect x="1" y="1" width="${W-2}" height="${H-2}" rx="34" fill="#111" stroke="#3a3a3c" stroke-width="2"/>`
 out+=`<rect x="10" y="10" width="${W-20}" height="${H-20}" rx="26" fill="${BG}"/>`
 out+=`<rect x="${W/2-30}" y="16" width="60" height="16" rx="8" fill="#111"/>`
 out+=`<text x="28" y="30" font-size="10" font-weight="600" fill="${INK}">9:41</text>`
 out+=`<rect x="${W-52}" y="22" width="22" height="9" rx="2.5" fill="none" stroke="${INK}" stroke-width="1"/><rect x="${W-50}" y="24" width="14" height="5" rx="1" fill="${INK}"/>`
 out+=`<text x="${W/2}" y="64" text-anchor="middle" font-size="13" font-weight="700" fill="${INK}">${esc(sc.title)}</text>`
 if(sc.back) out+=`<text x="24" y="65" font-size="18" fill="${ACC}">‹</text>`
 if(sc.alert){
  out+=`<rect x="34" y="150" width="152" height="130" rx="16" fill="#fff" stroke="#d1d1d6"/>`
  out+=`<text x="110" y="180" text-anchor="middle" font-size="11" font-weight="700" fill="${INK}">${esc(sc.alert[0])}</text>`
  sc.alert.slice(1,3).forEach((l,i)=>out+=`<text x="110" y="${200+i*14}" text-anchor="middle" font-size="9" fill="${MUT}">${esc(l)}</text>`)
  out+=`<line x1="34" y1="238" x2="186" y2="238" stroke="#e5e5ea"/><text x="110" y="263" text-anchor="middle" font-size="11" font-weight="600" fill="${ACC}">${esc(sc.alert[3]||'OK')}</text>`
  y=300
 }
 if(sc.bar){
  out+=`<text x="${x0+10}" y="${y+4}" font-size="9" fill="${MUT}">${esc(sc.bar.label)}</text>`
  let bx=x0+10; const bw=W-2*(x0+10)
  sc.bar.parts.forEach(([w,c])=>{out+=`<rect x="${bx}" y="${y+12}" width="${bw*w}" height="9" fill="${c}"/>`;bx+=bw*w})
  out+=`<rect x="${x0+10}" y="${y+12}" width="${bw}" height="9" rx="4.5" fill="none" stroke="${BG}" stroke-width="2"/>`
  y+=38
 }
 if(sc.rows){
  const h=sc.rows.length*rowH
  out+=`<rect x="${x0}" y="${y}" width="${W-2*x0}" height="${h}" rx="12" fill="#fff"/>`
  sc.rows.forEach((r,i)=>{
   const ry=y+i*rowH, cy=ry+rowH/2+4
   if(i>0) out+=`<line x1="${x0+12}" y1="${ry}" x2="${W-x0}" y2="${ry}" stroke="#e5e5ea"/>`
   const on=sc.hi===i
   if(on) out+=`<rect x="${x0+1.5}" y="${ry+1.5}" width="${W-2*x0-3}" height="${rowH-3}" rx="10" fill="#e9f4ee" stroke="${ACC}" stroke-width="2"/>`
   out+=`<rect x="${x0+10}" y="${ry+9}" width="20" height="20" rx="5" fill="${r.c||'#c7c7cc'}"/>`
   out+=`<text x="${x0+38}" y="${cy}" font-size="11" fill="${r.red?'#d14343':INK}" font-weight="${on?'700':'400'}">${esc(r.t)}</text>`
   if(r.v) out+=`<text x="${W-x0-24}" y="${cy}" text-anchor="end" font-size="10" fill="${MUT}">${esc(r.v)}</text>`
   if(r.chev!==false&&!r.tog&&!r.check) out+=`<text x="${W-x0-10}" y="${cy}" text-anchor="end" font-size="12" fill="#c7c7cc">›</text>`
   if(r.tog) out+=`<rect x="${W-x0-44}" y="${ry+9}" width="34" height="20" rx="10" fill="${r.tog==='on'?'#34c759':'#d1d1d6'}"/><circle cx="${r.tog==='on'?W-x0-20:W-x0-34}" cy="${ry+19}" r="8" fill="#fff"/>`
   if(r.check) out+=`<text x="${W-x0-12}" y="${cy}" text-anchor="end" font-size="13" fill="${ACC}" font-weight="700">✓</text>`
  })
  y+=h
 }
 out+=`<rect x="${W/2-40}" y="${H-24}" width="80" height="4" rx="2" fill="#111"/>`
 out+=`<circle cx="22" cy="20" r="0"/>`
 out+=`<circle cx="${W-18}" cy="60" r="0"/>`
 return `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${esc(sc.alt||sc.title)}" font-family="-apple-system,'SF Pro Text',Helvetica,Arial,sans-serif">${out}<circle cx="24" cy="${H-44}" r="0"/></svg>`
}
const G='#8e8e93',B='#4a90e2',R='#e5604f',O='#f0a23c',P='#9b6fd6',GR='#34c759'
export const SHOTS={
 storage:{caption:'Open Settings, then General, then iPhone Storage',screens:[
  {title:'Settings',rows:[{t:'Wi-Fi',c:B},{t:'Battery',c:GR},{t:'General',c:G},{t:'Display',c:B},{t:'Privacy',c:B}],hi:2},
  {title:'General',back:'Settings',rows:[{t:'About',c:G},{t:'Software Update',c:G},{t:'iPhone Storage',c:G},{t:'AirDrop',c:B}],hi:2},
  {title:'iPhone Storage',back:'General',bar:{label:'42 GB of 64 GB used',parts:[[.28,B],[.2,O],[.1,P],[.08,'#bbb']]},rows:[{t:'Photos',v:'14 GB',c:O},{t:'WhatsApp',v:'6 GB',c:GR},{t:'Messages',v:'3 GB',c:B},{t:'System Data',v:'9 GB',c:G}],hi:0}]},
 offload:{caption:'Tap an app in iPhone Storage, then Offload App',screens:[
  {title:'iPhone Storage',back:'General',rows:[{t:'Photos',v:'14 GB',c:O},{t:'Big Game',v:'5 GB',c:R},{t:'Messages',v:'3 GB',c:B},{t:'Music',v:'2 GB',c:P}],hi:1},
  {title:'Big Game',back:'Storage',rows:[{t:'App Size',v:'5 GB',chev:false,c:'#fff'},{t:'Documents',v:'200 MB',chev:false,c:'#fff'},{t:'Offload App',c:B},{t:'Delete App',red:true,c:R}],hi:2}]},
 recentlydeleted:{caption:'Photos › Albums › Utilities › Recently Deleted, then Delete All',screens:[
  {title:'Albums',rows:[{t:'Recents',v:'8,214',c:O},{t:'Favorites',v:'312',c:R},{t:'Videos',v:'96',c:B},{t:'Utilities',c:G}],hi:3},
  {title:'Utilities',back:'Albums',rows:[{t:'Imports',c:G},{t:'Duplicates',c:G},{t:'Hidden',c:G},{t:'Recently Deleted',c:R}],hi:3},
  {title:'Recently Deleted',back:'Utilities',rows:[{t:'Select',c:B},{t:'Delete All',red:true,c:R},{t:'Recover All',c:GR}],hi:1}]},
 icloud:{caption:'Settings › Photos: turn on iCloud Photos and choose Optimize iPhone Storage',screens:[
  {title:'Photos',back:'Settings',rows:[{t:'iCloud Photos',tog:'on',c:B},{t:'Optimize iPhone Storage',check:true,c:G},{t:'Download and Keep Originals',c:G}],hi:1}]},
 messages:{caption:'iPhone Storage › Messages › Review Large Attachments',screens:[
  {title:'iPhone Storage',back:'General',rows:[{t:'Photos',v:'14 GB',c:O},{t:'Messages',v:'3 GB',c:B},{t:'Music',v:'2 GB',c:P}],hi:1},
  {title:'Messages',back:'Storage',rows:[{t:'Review Large Attachments',c:B},{t:'Photos',v:'1.4 GB',c:O},{t:'Videos',v:'0.9 GB',c:R}],hi:0}]},
 whatsapp:{caption:'WhatsApp › Settings › Storage and Data › Manage Storage',screens:[
  {title:'Settings',rows:[{t:'Account',c:GR},{t:'Chats',c:GR},{t:'Notifications',c:R},{t:'Storage and Data',c:GR}],hi:3},
  {title:'Storage and Data',back:'Settings',rows:[{t:'Manage Storage',v:'6 GB',c:GR},{t:'Network Usage',c:GR},{t:'Media Auto-Download',c:GR}],hi:0}]},
 record:{caption:'Settings › Camera › Record Video shows approximate size per minute on your phone',screens:[
  {title:'Camera',back:'Settings',rows:[{t:'Formats',c:G},{t:'Record Video',v:'1080p',c:G},{t:'Record Slo-mo',c:G},{t:'Preserve Settings',c:G}],hi:1},
  {title:'Record Video',back:'Camera',rows:[{t:'720p HD at 30 fps',check:false,c:'#fff'},{t:'1080p HD at 30 fps',check:true,c:'#fff'},{t:'4K at 60 fps',c:'#fff'}],hi:1}]},
 about:{caption:'Settings › General › About shows your phone’s capacity',screens:[
  {title:'General',back:'Settings',rows:[{t:'About',c:G},{t:'Software Update',c:G},{t:'iPhone Storage',c:G}],hi:0},
  {title:'About',back:'General',rows:[{t:'Model Name',v:'iPhone',chev:false,c:'#fff'},{t:'Capacity',v:'64 GB',chev:false,c:'#fff'},{t:'Available',v:'18 GB',chev:false,c:'#fff'}],hi:1}]},
 safari:{caption:'Settings › Safari › Clear History and Website Data',screens:[
  {title:'Safari',back:'Settings',rows:[{t:'Search Engine',c:B},{t:'AutoFill',c:B},{t:'Clear History and Website Data',red:true,c:R},{t:'Advanced',c:G}],hi:2}]},
 fullalert:{caption:'A full iPhone shows storage warnings and can stop saving new photos',screens:[
  {title:'Camera',alert:['iPhone Storage Full','You can manage your storage in','Settings.','Settings']},
  {title:'iPhone Storage',back:'General',bar:{label:'63.9 GB of 64 GB used',parts:[[.5,B],[.3,O],[.19,P]]},rows:[{t:'Photos',v:'22 GB',c:O},{t:'System Data',v:'12 GB',c:G}],hi:0}]}
}
const CSS_TAG='Illustration'
export function figure(id,i){
 const s=SHOTS[id]; if(!s) throw new Error('unknown shot '+id)
 const phones=s.screens.map((sc,k)=>`<div class="sph"><span class="stepn">${k+1}</span>${phone({...sc,alt:`Illustrated iPhone screen ${k+1}: ${sc.title}`})}</div>`).join('')
 return `<figure class="shots"><div class="shotrow">${phones}</div><figcaption><span class="tag">${CSS_TAG}</span> ${esc(s.caption)}. Drawn illustration, not a real screenshot; labels and numbers differ by iOS version and phone.</figcaption></figure>`
}
export const PLAN={
 'iphone-storage-full':[[0,'storage'],[2,'offload'],[3,'icloud']],
 'iphone-system-data-storage':[[0,'storage'],[2,'safari']],
 'iphone-storage-full-after-deleting':[[0,'recentlydeleted'],[3,'icloud']],
 'whatsapp-storage-iphone':[[0,'storage'],[1,'whatsapp']],
 'iphone-storage-full-with-icloud':[[0,'storage'],[1,'icloud']],
 'is-64gb-enough-for-iphone':[[0,'about'],[1,'record']],
 'what-happens-when-iphone-storage-is-full':[[0,'fullalert'],[3,'icloud']],
 'cant-delete-photos-iphone-storage-full':[[1,'offload'],[3,'recentlydeleted']],
 'how-to-free-up-space-on-iphone':[[0,'storage'],[1,'messages']],
 'how-to-clear-storage-on-iphone':[[0,'offload'],[2,'messages'],[3,'safari']],
 'how-many-photos-fit-on-64gb-128gb-256gb-iphone':[[1,'record'],[2,'storage']],
 'how-much-storage-do-i-need-on-iphone':[[0,'about'],[3,'icloud']]
}
