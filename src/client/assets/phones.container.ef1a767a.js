import{a as e,P as l,j as o,B as d,e as u,f as g,g as h,u as f,h as p}from"./index.716acec3.js";import{u as m,r as E,P as U,a as v}from"./product-filter.container.7459fd48.js";const X="_phones_1wopx_14",C={phones:X},y="_list_1ndtg_1",S={list:y},b="_phone_1ubvu_1",N="_monitor_1ubvu_7",L="_storage_1ubvu_16",M="_price_1ubvu_28",w="_reviews_1ubvu_33",O="_quantity_1ubvu_44",i={phone:b,monitor:N,storage:L,price:M,reviews:w,"configuration-list":"_configuration-list_1ubvu_37",quantity:O},P=({phone:r})=>{const{currentProduct:t,changeCurrentStorage:c}=m(r,"phone"),n=t;return e(l,{category:t.category,slug:t.slug,title:t.title,imgCover:t.imgCover,children:o("div",{className:i.phone,children:[o("div",{className:`${i.monitor} flex`,children:[o("div",{className:i.inch,children:[n.configuration.monitor.broadScreen,'"']}),e("div",{className:"styles technology",children:n.configuration.monitor.technology})]}),e("div",{className:`${i.storage} flex`,children:n.storage.map((a,s)=>e(d,{configuration:t.configuration,changeCurrentStorage:c,url:t.otherVersions[s],value:a,className:`${t.configuration.internalMemory===+a?i.active:""}`},a))}),e(u,{price:n.price}),o("div",{className:"flex-vt-ct",children:[e(g,{ratingAverage:n.ratingAverage,ratingQuantity:n.ratingQuantity,className:i.reviews}),e("span",{className:i.quantity,children:n.ratingQuantity})]}),o("ul",{className:i["configuration-list"],children:[o("li",{children:["Chip ",n.configuration.chip.type,n.configuration.chip.number,n.configuration.chip.technology]}),o("li",{children:["Ram ",n.configuration.ram,"GB, ROM"," ",n.configuration.internalMemory,"GB,"]}),o("li",{children:["Camera sau: ",n.configuration.rearCam.quantity," camera"," ",n.configuration.rearCam.quality,"MP"]}),o("li",{children:["Camera tr\u01B0\u1EDBc: ",n.configuration.frontCam.quality,"MP"]}),o("li",{children:["Pin ",n.configuration.battery.capacity," mAh,S\u1EA1c"," ",n.configuration.battery.charge,"W"]})]})]})})},G=({phones:r})=>e(h,{className:S.list,children:r.map(t=>e(P,{phone:t},t._id))}),R="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANwAAAAwCAIAAAD1voMvAAAACXBIWXMAAAsSAAALEgHS3X78AAAFM0lEQVR4nO2c3XGzOhCG9ztz7qED6ECkAnAFkArAFdipwHYFtisAKrBcAbgC5AoMFRhXwLnYGQ0DGEjmyyA4+1w5QogVerX6W/KnqiogCJX4Z2oDCKIJiZJQDhIloRwkSkI5SJSEcpAoCeUgURLKQaIklINESSjHv1MbsBzSNAUA0zRN05zYlJlDnvKvsVqtVqtVFEVTGzJ7SJSEcpAoCeUgURLKQaIklINESSjH8reE8jzP8xwALMvSdX1qc36RsiyFELCAmlYzYbPZ2L2EYVjPnySJ7/uaptUraxjGbrd7Pp/9z3o+n8fj0bbtxr2+72dZVlVVGIb40PpdmG2328mUerbH49Gwp21MlmWDedq0S8YbN5vN4/EY825VYzaibEikjVTD8/l0Xbcnp6Zpl8vl3YMul0ujgRtsNpvNZoO/6ze2Rbnb7TAxy7J3ZTLGUHMycxvDMLAztJGWvKtpo6/OgpkN34ZhBEHQeclxHAAoy9JxnPv9jom2bXueZ1lWWZZpmnLOi6J4vV6fn59hGLaLiqJovV7LPxljjuPoui6ESNP09XoBwPl8/q7ZjuO8Xi9N09AYABBCxHEMAPf73XGcIAgOhwMAaJoWBAGeCck8RVF4nieEqA/KjZoyxjzPw5eQpmkURVhTrM67l6YoU/eKsaCnbIyY77IBAGMsSZJ2hrpDaoxul8tFXnJdtz32hWHYcHj1q5jS6Smh5hElbffp+35PnnrJVVX5vo/pmqZ11vR4PMqSOzMoy6JEGYbhOwXUka3luq5MfD6fsvl93393b0NJ9Us9ojQMo9OeejdgjHU+MUkSWUg7UdO0nprKFzLYmZViUaJkjGEbvJuBNUqrO8tOpXYiBTFelD0TO8MwBvPIeklr5aR50AVKhzr4TtRhOfuUQgicYPm+j/O2HrbbLf7A0B4AkIEUp9Op/17HcaRKRoJTvf5LPbFFnufhD9zbKsvyer0CgG3bPSUjsqac85HWTs7MFjo94BYdAJimKaU2CDYzAKCgbdseE3gWBMHX19d423rKlJcGO5LkZzUdn3NyliNKKa/D4YAr2TFgU8kGG3Q8yHgBjWf8drcUZRzHuDxfGMsZvv8/lGU5tQm/y3I8pSTLst/wZAqSJMlI1z4vluMp5fAnx/HxSBHLkbGfHzziLyKFONLa2bEcUcqm+sEyU9d13Jq5Xq9jBsdpV7KyC81oQf0tliNKy7JQWHEcD3qyKIq2221df3LbZb/f998rhMAdmanQdR33WW+32+CamnMeBMG8pqHLESXU9OR5Xk8zCCG22+35fMYzcUyU+3nn87nn46+yLFU4R5bW9gtOCBEEQRzHpmlOO+X4FosSZRAEuK2NUQ6dUy7OOYZHAAAGW2C6aZryAGa9Xnf6yzRN6zEQE+J5HjrLoigsy+r0l2gt1tSyrBl9+Lu01Tfn3LKs1+t1v98/Pj5c1/U8TwbdcM5vtxvmZIw1Dm/2+32e57jzdzgcTqcTBuzoup7nOedcBTlKsHfd7/eiKFarlYyHgq6azmz2OfU551hGRglVVfV4PAaDL9vxOJKeuEaEMSaPnus3Ykrn2XePtd/K0zjpHowcBQDXdQeDmlVjUcM3godvYRi2G0zTNN/3kySJoujdCcp+v++M5QYAxlgYhkIIRfZBdV3nnCdJ0ilN13WTJOGcz+7TiD/V0v8Rv5xv/eAfqggh5DJC/Q9fpLW6rivSbX7G8kVJzI4FDt/E3CFREspBoiSUg0RJKAeJklAOEiWhHCRKQjlIlIRykCgJ5fgPdwXR/82M3UAAAAAASUVORK5CYII=",j="data:image/png;base64,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",Q="data:image/png;base64,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",H="/assets/slider1.31308ed1.png",B="/assets/slider3.bc563642.png",k="/assets/slider6.f2b5697a.png",Y="/assets/slider1-l.6beae738.png",Z="/assets/slider3-l.220a1a0f.png",T="/assets/slider6-l.fa7eba69.png",x=()=>{const r=[{id:1,path:"POCO-C40-64GB",slide:[k,T]},{id:2,path:"#",slide:[B,Z]},{id:3,path:"#",slide:[H,Y]}],a=[{id:1,title:"H\xE3ng",content:[{id:1,"data-firm":"Apple",content:e("img",{src:j,alt:"IphoneLOGo"})},{id:2,"data-firm":"Samsung",content:e("img",{src:Q,alt:"SamsungLogo"})},{id:3,"data-firm":"Realme",content:e("img",{src:R,alt:"RealmeLogo"})}]},{id:2,title:"Gi\xE1",content:[{id:1,"data-lt":5e6,content:e("p",{children:"D\u01B0\u1EDBi 5 tri\u1EC7u"})},{id:2,"data-lt":2e7,"data-gt":13e6,content:e("p",{children:"T\u1EEB 13 \u0111\u1EBFn 20 tri\u1EC7u"})},{id:3,"data-gt":2e7,content:e("p",{children:"Tr\xEAn 20 tri\u1EC7u"})}]},{id:3,title:"Lo\u1EA1i \u0111i\u1EC7n tho\u1EA1i",content:[{id:1,"data-operating-system":"Android",content:e("p",{children:"Android"})},{id:2,"data-operating-system":"IOS",content:e("p",{children:"Iphone (IOS)"})}]}],{pathname:s}=f(),A=s.slice(1).toLowerCase();return{headerLinks:r,filterList:a,resource:A}},I=()=>{const r=p(),{headerLinks:t,filterList:c,resource:n}=x();return e(E,{title:"Phones-TGDD",children:o("section",{className:C.phones,children:[e(U,{links:t}),e(v,{resource:n,filterList:c}),e(G,{phones:r})]})})};export{I as default};
