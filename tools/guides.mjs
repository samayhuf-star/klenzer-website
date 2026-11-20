// Builds /guides/ pages from tools/guides-data.mjs. Usage: node tools/guides.mjs .
import {mkdirSync,writeFileSync} from 'node:fs'
import {join} from 'node:path'
import {CO,SUPPORT_EMAIL} from './apps.mjs'
import {GUIDES,UPDATED} from './guides-data.mjs'
const OUT=process.argv[2]
const SITE='https://klenzer.online'
const esc=s=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')
const strip=h=>h.replace(/<[^>]*>/g,'').replace(/&amp;/g,'&')
const w=(p,h)=>{const f=join(OUT,p);mkdirSync(join(f,'..'),{recursive:true});writeFileSync(f,h)}
const ld=o=>`<script type="application/ld+json">${JSON.stringify(o).replace(/</g,'\\u003c')}</script>`
const head=(title,desc,path,extra='')=>`<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(title)}</title><meta name="description" content="${esc(desc)}"><link rel="canonical" href="${SITE}${path}"><meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(desc)}"><meta property="og:type" content="article"><meta property="og:url" content="${SITE}${path}"><meta property="og:site_name" content="Apps by Krosz Inc."><meta name="twitter:card" content="summary"><link rel="stylesheet" href="/s/apps.css">${extra}</head><body><a class="skip" href="#main">Skip to content</a>`
const ORG={'@type':'Organization','@id':SITE+'/#org','name':'Krosz Inc.','url':SITE+'/'}
const nav=`<header class="top"><div class="wrap bar"><a class="brand" href="/"><span class="dot"></span>Apps</a><nav><a href="/#apps">All apps</a><a href="/guides/">Guides</a><a href="/about/">About</a><a href="/legal/support/">Support</a><a href="/legal/privacy/">Privacy</a></nav></div></header>`
const foot=`<footer><div class="wrap"><div class="fgrid"><div><a class="brand" href="/"><span class="dot"></span>Apps</a><p class="muted">Simple, honest apps for iPhone and Android.</p></div><div><b>Company</b><p class="muted">${CO.name}<br>${CO.addr}<br>${CO.phone}</p></div><div><b>Help</b><p><a href="/guides/">Guides</a><br><a href="/about/">About</a><br><a href="/legal/support/">Support</a><br><a href="mailto:${SUPPORT_EMAIL}">${SUPPORT_EMAIL}</a><br><a href="/legal/privacy/">Privacy Policy</a><br><a href="/legal/terms/">Terms of Use</a></p></div></div><p class="copy muted">© ${new Date().getFullYear()} ${CO.name} All rights reserved. Apple, iPhone, iCloud and App Store are trademarks of Apple Inc. WhatsApp is a trademark of Meta Platforms, Inc. These guides are independent and not endorsed by Apple or Meta.</p></div></footer></body></html>`
const by=Object.fromEntries(GUIDES.map(g=>[g.slug,g]))
const crumb=items=>({'@type':'BreadcrumbList','itemListElement':items.map(([n,u],i)=>({'@type':'ListItem','position':i+1,'name':n,'item':SITE+u}))})
const seen=new Set()
for(const g of GUIDES){
 if(seen.has(g.slug)) throw new Error('duplicate slug '+g.slug); seen.add(g.slug)
 for(const r of g.related) if(!by[r]) throw new Error(`${g.slug}: unknown related ${r}`)
 const path=`/guides/${g.slug}/`
 const article={'@type':'Article','headline':g.h1,'description':g.desc,'url':SITE+path,'mainEntityOfPage':SITE+path,'datePublished':UPDATED,'dateModified':UPDATED,'author':{'@id':SITE+'/#org'},'publisher':{'@id':SITE+'/#org'}}
 const faq={'@type':'FAQPage','mainEntity':g.faq.map(([q,a])=>({'@type':'Question','name':q,'acceptedAnswer':{'@type':'Answer','text':strip(a)}}))}
 const data=ld({'@context':'https://schema.org','@graph':[ORG,article,crumb([['Apps','/'],['Guides','/guides/'],[g.h1,path]]),faq]})
 const body=g.sections.map(s=>`<h2>${s.h}</h2>${s.html}`).join('')
 const rel=g.related.map(r=>`<li><a href="/guides/${r}/">${esc(by[r].h1)}</a></li>`).join('')
 w(`guides/${g.slug}/index.html`,head(g.title,g.desc,path,data)+nav+`<main id="main" class="wrap prose guide"><div class="crumbs" role="navigation" aria-label="Breadcrumb"><a href="/">Apps</a> › <a href="/guides/">Guides</a> › <span>${esc(g.h1)}</span></div><h1>${esc(g.h1)}</h1><p class="muted upd">Updated ${UPDATED}. By ${CO.name} Menu names can differ slightly between iOS versions.</p><div class="tldr"><p><strong>Short answer:</strong> ${g.tldr}</p></div>${body}<aside class="tool card"><div class="cb"><h2>A shortcut for photo clutter</h2><p><a href="/klenzer-app/">Klenzer</a> for iPhone scans your library for duplicates, screenshots and large videos, and you decide what to remove. Pricing and limits are on the <a href="/klenzer-app/">Klenzer page</a>.</p></div></aside><h2>Common questions</h2>${g.faq.map(([q,a])=>`<details><summary>${q}</summary><p>${a}</p></details>`).join('')}<h2>Related guides</h2><ul>${rel}</ul></main>`+foot)
}
const cards=GUIDES.map(g=>`<a class="card" href="/guides/${g.slug}/"><div class="cb"><h3>${esc(g.h1)}</h3><p>${esc(g.desc)}</p></div></a>`).join('')
w('guides/index.html',head('iPhone Storage Guides | Apps by Krosz Inc.','Plain guides to iPhone storage: what to do when it is full, what System Data is, iCloud, WhatsApp, and how big storage should be.','/guides/',ld({'@context':'https://schema.org','@graph':[ORG,{'@type':'CollectionPage','url':SITE+'/guides/','name':'iPhone storage guides','publisher':{'@id':SITE+'/#org'}},crumb([['Apps','/'],['Guides','/guides/']]),{'@type':'ItemList','itemListElement':GUIDES.map((g,i)=>({'@type':'ListItem','position':i+1,'url':`${SITE}/guides/${g.slug}/`,'name':g.h1}))}]}))+nav+`<main id="main" class="wrap prose guide"><div class="crumbs" role="navigation" aria-label="Breadcrumb"><a href="/">Apps</a> › <span>Guides</span></div><h1>iPhone storage guides</h1><p class="lede">Plain, step-by-step answers for when your iPhone is full, from what System Data means to how iCloud and WhatsApp use space.</p><div class="grid">${cards}</div></main>`+foot)
console.log('guides',GUIDES.length+1)
