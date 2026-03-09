var Ns=a=>{throw TypeError(a)};var Os=(a,e,t)=>e.has(a)||Ns("Cannot "+t);var $e=(a,e,t)=>(Os(a,e,"read from private field"),t?t.call(a):e.get(a)),Bs=(a,e,t)=>e.has(a)?Ns("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(a):e.set(a,t),Vs=(a,e,t,n)=>(Os(a,e,"write to private field"),n?n.call(a,t):e.set(a,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();var Ye;const Nt=class Nt{constructor(e){Bs(this,Ye);this.data=e,Vs(this,Ye,new DataView(e.buffer,e.byteOffset,e.byteLength)),this.pos=0,this.bitPos=0}get available(){return this.data.length-this.pos}get length(){return this.data.length}p1(e){$e(this,Ye).setUint8(this.pos++,e)}p2(e){$e(this,Ye).setUint16(this.pos,e),this.pos+=2}ip2(e){$e(this,Ye).setUint16(this.pos,e,!0),this.pos+=2}p3(e){$e(this,Ye).setUint8(this.pos++,e>>16),$e(this,Ye).setUint16(this.pos,e),this.pos+=2}p4(e){$e(this,Ye).setInt32(this.pos,e),this.pos+=4}ip4(e){$e(this,Ye).setInt32(this.pos,e,!0),this.pos+=4}p8(e){$e(this,Ye).setBigInt64(this.pos,e),this.pos+=8}pbool(e){this.p1(e?1:0)}pjstr(e,t=10){const n=e.length;for(let i=0;i<n;i++)$e(this,Ye).setUint8(this.pos++,e.charCodeAt(i));$e(this,Ye).setUint8(this.pos++,t)}pdata(e,t,n){this.data.set(e.subarray(t,t+n),this.pos),this.pos+=n-t}psize4(e){$e(this,Ye).setUint32(this.pos-e-4,e)}psize2(e){$e(this,Ye).setUint16(this.pos-e-2,e)}psize1(e){$e(this,Ye).setUint8(this.pos-e-1,e)}psmarts(e){if(e<64&&e>=-64)this.p1(e+64);else if(e<16384&&e>=-16384)this.p2(e+49152);else throw new Error("Error psmarts out of range: "+e)}psmart(e){if(e>=0&&e<128)this.p1(e);else if(e>=0&&e<32768)this.p2(e+32768);else throw new Error("Error psmart out of range: "+e)}g1(){return $e(this,Ye).getUint8(this.pos++)}g1b(){return $e(this,Ye).getInt8(this.pos++)}g2(){return this.pos+=2,$e(this,Ye).getUint16(this.pos-2)}g2s(){return this.pos+=2,$e(this,Ye).getInt16(this.pos-2)}ig2(){return this.pos+=2,$e(this,Ye).getUint16(this.pos-2,!0)}g3(){const e=$e(this,Ye).getUint8(this.pos++)<<16|$e(this,Ye).getUint16(this.pos);return this.pos+=2,e}g4(){return this.pos+=4,$e(this,Ye).getInt32(this.pos-4)}ig4(){return this.pos+=4,$e(this,Ye).getInt32(this.pos-4,!0)}g8(){return this.pos+=8,$e(this,Ye).getBigInt64(this.pos-8)}gbool(){return this.g1()===1}gjstr(e=10){const t=this.data.length;let n="",i;for(;(i=$e(this,Ye).getUint8(this.pos++))!==e&&this.pos<t;)n+=String.fromCharCode(i);return n}gdata(e,t,n){e.set(this.data.subarray(this.pos,this.pos+n),t),this.pos+=n}gsmarts(){return $e(this,Ye).getUint8(this.pos)<128?this.g1()-64:this.g2()-49152}gsmart(){return $e(this,Ye).getUint8(this.pos)<128?this.g1():this.g2()-32768}bits(){this.bitPos=this.pos<<3}bytes(){this.pos=this.bitPos+7>>>3}gBit(e){let t=this.bitPos>>>3,n=8-(this.bitPos&7),i=0;for(this.bitPos+=e;e>n;n=8)i+=($e(this,Ye).getUint8(t++)&Nt.bitmask[n])<<e-n,e-=n;return e==n?i+=$e(this,Ye).getUint8(t)&Nt.bitmask[n]:i+=$e(this,Ye).getUint8(t)>>>n-e&Nt.bitmask[e],i}pBit(e,t){const n=this.bitPos;this.bitPos+=e;let i=n>>>3,r=8-(n&7);const o=$e(this,Ye);for(;e>r;r=8){const h=(1<<r)-1,f=o.getUint8(i);o.setUint8(i++,f&~h|t>>>e-r&h),e-=r}const s=r-e,l=(1<<e)-1,c=o.getUint8(i);o.setUint8(i,c&~l<<s|(t&l)<<s)}};Ye=new WeakMap,Nt.crctable=new Int32Array(256),Nt.bitmask=new Uint32Array(33),Nt.crc32b=3988292384,(()=>{for(let e=0;e<32;e++)Nt.bitmask[e]=(1<<e)-1;Nt.bitmask[32]=4294967295;for(let e=0;e<256;e++){let t=e;for(let n=0;n<8;n++)(t&1)==1?t=t>>>1^Nt.crc32b:t>>>=1;Nt.crctable[e]=t}})();let ce=Nt;class Qt extends Array{constructor(e,t){super(e);for(let n=0;n<e;n++)this[n]=t}}class mr extends Array{constructor(e,t){super(e);for(let n=0;n<e;n++)this[n]=new Int32Array(t)}}class Jo extends Array{constructor(e,t){super(e);for(let n=0;n<e;n++)this[n]=new Float32Array(t)}}const hn=class hn{constructor(){this.animLength=0,this.animTypes=null,this.animLabels=null,this.id=0}static isIdTaken(e){return!!this.instances[e]}static getNextAvailableId(){const e=Object.keys(this.instances).map(Number);return e.length===0?0:Math.max(...e)+1}static convertFromData(e,t){t.pos=t.data.length-4;const n=t.g2(),i=t.g2();t.pos=0;const r=new Uint8Array(n);t.gdata(r,0,n);const o=new Uint8Array(i);t.gdata(o,0,i);const s=new ce(r),l=new ce(o),c=new hn;c.animLength=n;const h=new Uint8Array(c.animLength),f=new Qt(c.animLength,null);for(let g=0;g<c.animLength;g++){h[g]=s.g1();const m=l.g1(),p=new Uint8Array(m);for(let x=0;x<m;x++)p[x]=l.g1();f[g]=p}return c.animTypes=h,c.animLabels=f,hn.instances[e]=c,c}static convertFromData377(e,t){const n=new hn;n.id=e;const i=t.g1();n.animLength=i;const r=new Uint8Array(i),o=new Array(i);for(let s=0;s<i;s++)r[s]=t.g1();for(let s=0;s<i;s++){const l=t.g1(),c=new Uint8Array(l);for(let h=0;h<l;h++)c[h]=t.g1();o[s]=c}return n.animTypes=r,n.animLabels=o,hn.instances[e]=n,n}static convertFromDataDat2(e,t){const n=new hn;n.id=e;const i=t.g1();n.animLength=i;const r=new Uint8Array(i);for(let l=0;l<i;l++)r[l]=t.g1();const o=new Int32Array(i);for(let l=0;l<i;l++)o[l]=t.g1();const s=new Array(i);for(let l=0;l<i;l++){const c=new Uint8Array(o[l]);for(let h=0;h<o[l];h++)c[h]=t.g1();s[l]=c}return n.animTypes=r,n.animLabels=s,hn.instances[e]=n,n}};hn.instances=[];let Ot=hn;const On=class On{constructor(){this.id=0,this.frameDelay=0,this.base=null,this.frameLength=0,this.bases=null,this.x=null,this.y=null,this.z=null,this.originalGroupCount=null,this.isModified=!1}static isIdTaken(e){return!!this.instances[e]}static getNextAvailableId(){const e=Object.keys(this.instances).map(Number);return e.length===0?0:Math.max(...e)+1}static getFramesByBaseId(e){return Object.values(this.instances).filter(t=>t.base&&t.base.id===e)}static convertFromData(e,t){t.pos=t.data.length-8;const n=t.g2(),i=t.g2(),r=t.g2(),o=t.g2();t.pos=0;const s=new Uint8Array(n);t.gdata(s,0,n);const l=new ce(s),c=new Uint8Array(i);t.gdata(c,0,i);const h=new ce(c),f=new Uint8Array(r);t.gdata(f,0,r);const g=new ce(f),m=new Uint8Array(o);t.gdata(m,0,o);const p=new ce(m),x=new On;x.isModified=!1,l.g2(),On.instances[e]=x,x.id=e,x.frameDelay=p.g1();const u=l.g2(),d=Ot.instances[u];if(d.id=u,!d)throw console.error(`AnimFrame ${e}: Missing AnimBase with id ${u}`),new Error(`AnimFrame ${e}: Missing AnimBase with id ${u}`);if(!d.animTypes)throw console.error(`AnimFrame ${e}: AnimBase ${u} has no animTypes`),new Error(`AnimFrame ${e}: AnimBase ${u} has no animTypes`);const y=l.g1();x.originalGroupCount=y;const v=y*2,M=new Int32Array(v),S=new Int32Array(v),T=new Int32Array(v),b=new Int32Array(v);let P=-1,_=0;for(let A=0;A<y;A++){const N=h.g1();if(N>0){if(A<d.animTypes.length&&d.animTypes[A]!==0){for(let D=A-1;D>P;D--)if(D<d.animTypes.length&&d.animTypes[D]===0){if(_>=v)throw new Error(`AnimFrame ${e}: Exceeded temp array capacity for type 0 group insert.`);M[_]=D,S[_]=0,T[_]=0,b[_]=0,_++;break}}if(_>=v)throw new Error(`AnimFrame ${e}: Exceeded temp array capacity for main group.`);M[_]=A;let F=0;A<d.animTypes.length&&d.animTypes[A]===3&&(F=128),N&1?S[_]=g.gsmarts():S[_]=F,N&2?T[_]=g.gsmarts():T[_]=F,N&4?b[_]=g.gsmarts():b[_]=F,P=A,_++}}if(x.base=d,x.frameLength=_,_>0){x.bases=new Int32Array(_),x.x=new Int32Array(_),x.y=new Int32Array(_),x.z=new Int32Array(_);for(let A=0;A<_;A++)x.bases[A]=M[A],x.x[A]=S[A],x.y[A]=T[A],x.z[A]=b[A]}else x.bases=null,x.x=null,x.y=null,x.z=null;return x}static convertFromDataDat2(e,t){const n=new ce(t),i=new ce(t),r=n.g2(),o=Ot.instances[r];if(!o)throw new Error(`AnimFrame ${e}: AnimBase ${r} not loaded yet.`);const s=n.g1();i.pos=n.pos+s;const l=new On;l.id=e,l.base=o;const c=new Int32Array(500),h=new Int32Array(500),f=new Int32Array(500),g=new Int32Array(500);let m=-1,p=0;for(let x=0;x<s;x++){const u=n.g1();if(u===0)continue;const d=o.animTypes[x];if(d!==0){for(let v=x-1;v>m;v--)if(o.animTypes[v]===0){c[p]=v,h[p]=0,f[p]=0,g[p]=0,p++;break}}c[p]=x;let y=d===3?128:0;h[p]=u&1?i.gsmarts():y,f[p]=u&2?i.gsmarts():y,g[p]=u&4?i.gsmarts():y,m=x,p++}l.frameLength=p,l.bases=new Int32Array(p),l.x=new Int32Array(p),l.y=new Int32Array(p),l.z=new Int32Array(p);for(let x=0;x<p;x++)l.bases[x]=c[x],l.x[x]=h[x],l.y[x]=f[x],l.z[x]=g[x];return On.instances[e]=l,l}exportToFrame(){if(!this.base||!this.base.animTypes)return console.error(`AnimFrame ${this.id}: Cannot export, AnimBase or its animTypes are missing.`),null;const e=[];let t;!this.isModified&&this.originalGroupCount!==null?t=this.originalGroupCount:t=this.base.animTypes.length;const n=new ce(new Uint8Array(5));n.p2(this.id),n.p2(this.base.id),n.p1(t);const i=n.data.slice(0,n.pos),r=i.length;e.push(i);const o=(this.frameLength>0?this.frameLength:1)*3*5,s=new ce(new Uint8Array(t)),l=new ce(new Uint8Array(o));for(let S=0;S<t;S++){let T=0;const b=this.bases&&this.frameLength>0?this.bases.indexOf(S):-1;if(b!==-1&&this.x&&this.y&&this.z){const P=this.x[b],_=this.y[b],A=this.z[b];let N=0;S<this.base.animTypes.length&&(N=this.base.animTypes[S]);const F=N===3?128:0;P!==F&&(T|=1,l.psmarts(P)),_!==F&&(T|=2,l.psmarts(_)),A!==F&&(T|=4,l.psmarts(A))}s.p1(T)}const c=s.data.slice(0,s.pos),h=c.length;e.push(c);const f=l.data.slice(0,l.pos),g=f.length;e.push(f);const m=new ce(new Uint8Array(1));m.p1(this.frameDelay);const p=m.data.slice(0,m.pos),x=p.length;e.push(p);let u=0;for(const S of e)u+=S.length;const d=new ce(new Uint8Array(8));d.p2(r),d.p2(h),d.p2(g),d.p2(x);const y=d.data.slice(0,d.pos),v=new Uint8Array(u+y.length);let M=0;for(const S of e)v.set(S,M),M+=S.length;return v.set(y,M),v}addTransform(e,t,n,i){const r=this.frameLength+1,o=new Int32Array(r),s=new Int32Array(r),l=new Int32Array(r),c=new Int32Array(r);if(this.frameLength>0&&this.bases&&this.x&&this.y&&this.z)for(let h=0;h<this.frameLength;h++)o[h]=this.bases[h],s[h]=this.x[h],l[h]=this.y[h],c[h]=this.z[h];o[this.frameLength]=e,s[this.frameLength]=t,l[this.frameLength]=n,c[this.frameLength]=i,this.bases=o,this.x=s,this.y=l,this.z=c,this.frameLength=r,this.isModified=!0}deleteTransform(e){if(e<0||e>=this.frameLength)return console.error(`AnimFrame ${this.id}.deleteTransform: Invalid transformIndex ${e}. frameLength is ${this.frameLength}.`),!1;const t=this.frameLength-1;if(t===0)this.bases=null,this.x=null,this.y=null,this.z=null;else{const n=new Int32Array(t),i=new Int32Array(t),r=new Int32Array(t),o=new Int32Array(t);let s=0;for(let l=0;l<this.frameLength;l++)l!==e&&(n[s]=this.bases[l],i[s]=this.x[l],r[s]=this.y[l],o[s]=this.z[l],s++);this.bases=n,this.x=i,this.y=r,this.z=o}return this.frameLength=t,this.isModified=!0,!0}};On.instances=[];let Ke=On;const zs=[{name:"base",revisions:{254:0,274:0,377:0}},{name:"head",revisions:{254:35,274:16,377:1}},{name:"top neck",revisions:{254:36,274:17,377:3}},{name:"bot neck",revisions:{254:1,274:18,377:[2,49]}},{name:"chest",revisions:{254:2,274:33,377:8}},{name:"midriff",revisions:{254:37,274:30,377:4}},{name:"weapon",revisions:{254:66,274:1,377:50}},{name:"weapon 51",revisions:{254:101,274:101,377:51}},{name:"weapon 53",revisions:{254:102,274:102,377:53}},{name:"weapon 54",revisions:{254:103,274:103,377:54}},{name:"weapon 55",revisions:{254:104,274:104,377:55}},{name:"weapon 61",revisions:{254:105,274:105,377:61}},{name:"weapon 62",revisions:{254:106,274:106,377:62}},{name:"weapon 63",revisions:{254:107,274:107,377:63}},{name:"weapon 64",revisions:{254:108,274:108,377:64}},{name:"left upper arm",revisions:{254:15,274:7,377:[18,20,21]}},{name:"left elbow",revisions:{254:11,274:3,377:17}},{name:"left forearm",revisions:{254:10,274:2,377:19}},{name:"left fist",revisions:{254:17,274:15,377:27}},{name:"right upper arm",revisions:{254:12,274:4,377:[24,25,26]}},{name:"right elbow",revisions:{254:13,274:5,377:23}},{name:"right forearm",revisions:{254:14,274:6,377:22}},{name:"right fist",revisions:{254:16,274:14,377:28}},{name:"front hip",revisions:{254:18,274:19,377:30}},{name:"full hip",revisions:{254:19,274:20,377:29}},{name:"back hip",revisions:{254:20,274:21,377:5}},{name:"right hip",revisions:{254:[23,45,47],274:[24,62,64],377:40}},{name:"left hip",revisions:{254:[24,48,61],274:[25,65,78],377:42}},{name:"butt",revisions:{254:21,274:22,377:41}},{name:"groin",revisions:{254:22,274:23,377:39}},{name:"right thigh",revisions:{254:44,274:61,377:43}},{name:"left thigh",revisions:{254:46,274:63,377:44}},{name:"top right knee",revisions:{254:27,274:27,377:35}},{name:"bot right knee",revisions:{254:25,274:26,377:37}},{name:"right knee pad",revisions:{254:42,274:59,377:36}},{name:"top left knee",revisions:{254:30,274:29,377:34}},{name:"bot left knee",revisions:{254:28,274:28,377:31}},{name:"left knee pad",revisions:{254:43,274:60,377:33}},{name:"top right foot",revisions:{254:26,274:12,377:38}},{name:"right foot",revisions:{254:32,274:9,377:46}},{name:"right heel",revisions:{254:31,274:8,377:47}},{name:"top left foot",revisions:{254:29,274:13,377:32}},{name:"left foot",revisions:{254:34,274:11,377:45}},{name:"left heel",revisions:{254:33,274:10,377:48}},{name:"female hair",revisions:{254:[40,62],274:[58,79],377:94}},{name:"apron chest",revisions:{254:38,274:31,377:6}},{name:"apron bottom",revisions:{254:39,274:32,377:7}},{name:"skirt upper front+back center",revisions:{254:[49,50],274:[66,67],377:79}},{name:"skirt middle",revisions:{254:[53,54,56],274:[70,71,73],377:[34,35,80,81]}},{name:"skirt lower",revisions:{254:[52,55,57],274:[69,72,74],377:[31,37,82,83]}},{name:"skirt bottom",revisions:{254:[51,58,59],274:[68,75,76],377:[76,77]}},{name:"skirt short bottom",revisions:{254:60,274:77,377:57}},{name:"cape top",revisions:{254:3,274:34,377:[10,11]}},{name:"cape upper",revisions:{254:4,274:35,377:9}},{name:"cape middle",revisions:{254:7,274:36,377:14}},{name:"cape lower",revisions:{254:6,274:37,377:13}},{name:"cape bot",revisions:{254:5,274:38,377:12}},{name:"extra cape 1",revisions:{254:8,274:56,377:15}},{name:"extra cape 2",revisions:{254:9,274:57,377:16}},{name:"misc",revisions:{254:255,274:255,377:255}},{name:"377 unknown or added 2",revisions:{254:109,274:109,377:52}},{name:"377 unknown or added 6",revisions:{254:110,274:110,377:56}},{name:"377 unknown or added 7",revisions:{254:111,274:111,377:58}},{name:"377 unknown or added 8",revisions:{254:112,274:112,377:59}},{name:"377 unknown or added 9",revisions:{254:113,274:113,377:60}},{name:"377 unknown or added 14",revisions:{254:114,274:114,377:65}},{name:"377 unknown or added 15",revisions:{254:115,274:115,377:66}},{name:"377 unknown or added 16",revisions:{254:116,274:116,377:67}},{name:"377 unknown or added 17",revisions:{254:117,274:117,377:68}},{name:"377 unknown or added 18",revisions:{254:118,274:118,377:69}},{name:"377 unknown or added 19",revisions:{254:119,274:119,377:70}},{name:"377 unknown or added 20",revisions:{254:120,274:120,377:71}},{name:"377 unknown or added 21",revisions:{254:121,274:121,377:72}},{name:"377 unknown or added 22",revisions:{254:122,274:122,377:73}},{name:"377 unknown or added 23",revisions:{254:123,274:123,377:74}},{name:"377 unknown or added 24",revisions:{254:124,274:124,377:75}},{name:"377 unknown or added 25",revisions:{254:125,274:125,377:78}},{name:"377 unknown or added 26",revisions:{254:126,274:126,377:84}},{name:"377 unknown or added 27",revisions:{254:127,274:127,377:85}},{name:"377 unknown or added 28",revisions:{254:128,274:128,377:86}},{name:"377 unknown or added 29",revisions:{254:129,274:129,377:87}},{name:"377 unknown or added 30",revisions:{254:130,274:130,377:88}},{name:"377 unknown or added 31",revisions:{254:131,274:131,377:89}},{name:"377 unknown or added 32",revisions:{254:132,274:132,377:90}},{name:"377 unknown or added 33",revisions:{254:133,274:133,377:91}},{name:"377 unknown or added 34",revisions:{254:134,274:134,377:92}},{name:"377 unknown or added 35",revisions:{254:135,274:135,377:93}}];function Hi(a,e){const t=a.revisions[e];return t===void 0?[]:Array.isArray(t)?t:[t]}class Jt{static parseRevisionDir(e){const t=e.match(/^(\d+)to(\d+)$/);if(!t)throw new Error(`Invalid revisionDir format: "${e}". Expected e.g. "377to274".`);const n=parseInt(t[1]),i=parseInt(t[2]),r=[254,274,377];if(!r.includes(n))throw new Error(`Unsupported source revision: ${n}`);if(!r.includes(i))throw new Error(`Unsupported target revision: ${i}`);return{from:n,to:i}}static buildSingleMap(e,t){const n=new Map;for(const i of zs){const r=Hi(i,e),o=Hi(i,t);if(r.length===0||o.length===0)continue;const s=o[0];for(const l of r)n.set(l,s)}return n}static buildLabelMap(e,t){const n=new Map;for(const i of zs){const r=Hi(i,e),o=Hi(i,t);if(!(r.length===0||o.length===0))for(const s of r){const l=n.get(s);if(l)for(const c of o)l.includes(c)||l.push(c);else n.set(s,[...o])}}return n}static applyModelRelabel(e,t,n){const i=this.buildSingleMap(t,n),r=o=>{if(!o)return null;const s=new Array(256).fill(null),l=new Map;for(let c=0;c<o.length;c++){const h=o[c];if(!h)continue;const f=i.has(c)?i.get(c):c;l.has(f)||l.set(f,[]),l.get(f).push(...Array.from(h))}return l.forEach((c,h)=>{s[h]=new Int32Array(c)}),s};e.labelVertices&&(e.labelVertices=r(e.labelVertices),e.hadOriginalVertexLabels=!0)}static remapBaseLabels(e,t,n){const i=Ot.instances[e];if(!i||!i.animTypes||!i.animLabels)return console.error(`remapLabels: no valid AnimBase at id ${e}`),null;const r=this.buildLabelMap(t,n),o=new Array(i.animLength).fill(null);for(let s=0;s<i.animLength;s++){const l=i.animLabels[s];if(!l||l.length===0){o[s]=new Uint8Array(0);continue}const c=[],h=new Set;for(const f of l){const g=r.get(f);if(g)for(const m of g)h.has(m)||(h.add(m),c.push(m))}o[s]=new Uint8Array(c)}return i.animLabels=o,e}static remapSeqConfig(e,t){let n=e;const i=Array.from(t.keys()).sort((r,o)=>o-r);for(const r of i){const o=t.get(r),s=new RegExp(`anim_${r}\\b`,"g");n=n.replace(s,`anim_${o}`)}return n}static async importWithConflictCheck(e){const t=new ce(e);t.pos=e.length-8;const n=t.g2(),i=t.g2(),r=t.g2(),o=t.g2();let s=0;const l=new ce(e.subarray(s,s+n+2));s+=n+2;const c=new ce(e.subarray(s,s+i));s+=i;const h=new ce(e.subarray(s,s+r));s+=r;const f=new ce(e.subarray(s,s+o));s+=o;const g=new ce(e.subarray(s,e.length-8)),m=l.g2(),p=Ot.getNextAvailableId();let x=Ke.getNextAvailableId();const u=new Map,d=Ot.convertFromData377(p,g),y=new Array(500),v=new Array(500),M=new Array(500),S=new Array(500);for(let T=0;T<m;T++){const b=l.g2(),P=x++;u.set(b,P);const _=new Ke;_.id=P,_.frameDelay=f.g1(),_.base=d;const A=l.g1();let N=-1,F=0;for(let D=0;D<A;D++){const R=c.g1();if(R>0){if(d.animTypes[D]!==0){for(let H=D-1;H>N;H--)if(d.animTypes[H]===0){y[F]=H,v[F]=0,M[F]=0,S[F]=0,F++;break}}y[F]=D;let L=d.animTypes[D]===3?128:0;v[F]=R&1?h.gsmarts():L,M[F]=R&2?h.gsmarts():L,S[F]=R&4?h.gsmarts():L,N=D,F++}}_.frameLength=F,_.bases=new Int32Array(F),_.x=new Int32Array(F),_.y=new Int32Array(F),_.z=new Int32Array(F);for(let D=0;D<F;D++)_.bases[D]=y[D],_.x[D]=v[D],_.y[D]=M[D],_.z[D]=S[D];Ke.instances[P]=_}return{baseId:p,mapping:u,frameCount:m}}static exportAsLegacyAnim(e){const t=Ot.instances[e],n=Ke.getFramesByBaseId(e).sort((u,d)=>u.id-d.id);if(!t||n.length===0)throw new Error("Base or frames missing for export");const i=new ce(new Uint8Array(2+n.length*3)),r=new ce(new Uint8Array(n.length*t.animLength)),o=new ce(new Uint8Array(n.length*t.animLength*6)),s=new ce(new Uint8Array(n.length));i.p2(n.length);const l={};for(let u=0;u<n.length;u++){const d=n[u],y=u;l[d.id]=y,i.p2(y),i.p1(t.animLength);for(let v=0;v<t.animLength;v++){const M=d.bases?Array.from(d.bases).indexOf(v):-1;let S=0;if(M!==-1){const T=t.animTypes[v]===3?128:0;d.x[M]!==T&&(S|=1,o.psmarts(d.x[M])),d.y[M]!==T&&(S|=2,o.psmarts(d.y[M])),d.z[M]!==T&&(S|=4,o.psmarts(d.z[M]))}r.p1(S)}s.p1(d.frameDelay)}const c=new ce(new Uint8Array(1e6));c.p1(t.animLength);for(let u=0;u<t.animLength;u++)c.p1(t.animTypes[u]);for(let u=0;u<t.animLength;u++){c.p1(t.animLabels[u].length);for(const d of t.animLabels[u])c.p1(d)}(o.pos>65535||r.pos>65535)&&console.warn("WARNING: This animation is too large for the Legacy format. It may corrupt upon import.");const h=i.pos+r.pos+o.pos+s.pos+c.pos+8,f=new ce(new Uint8Array(h)),g=i.pos;f.pdata(i.data,0,i.pos);const m=r.pos;f.pdata(r.data,0,r.pos);const p=o.pos;f.pdata(o.data,0,o.pos);const x=s.pos;return f.pdata(s.data,0,s.pos),f.pdata(c.data,0,c.pos),f.p2(g-2),f.p2(m),f.p2(p),f.p2(x),console.log("Animation remapped for Legacy Export:"),console.table(l),f.data.slice(0,f.pos)}static exportAnimSet(e){const t=Ot.instances[e],n=Ke.getFramesByBaseId(e).sort((p,x)=>p.id-x.id);if(!t||n.length===0)throw new Error("Base or frames missing for export");const i=new ce(new Uint8Array(2+n.length*3)),r=new ce(new Uint8Array(n.length*t.animLength)),o=new ce(new Uint8Array(n.length*t.animLength*6)),s=new ce(new Uint8Array(n.length));i.p2(n.length);for(const p of n){i.p2(p.id),i.p1(t.animLength);for(let x=0;x<t.animLength;x++){const u=p.bases?Array.from(p.bases).indexOf(x):-1;let d=0;if(u!==-1){const y=t.animTypes[x]===3?128:0;p.x[u]!==y&&(d|=1,o.psmarts(p.x[u])),p.y[u]!==y&&(d|=2,o.psmarts(p.y[u])),p.z[u]!==y&&(d|=4,o.psmarts(p.z[u]))}r.p1(d)}s.p1(p.frameDelay)}const l=new ce(new Uint8Array(1e8));l.p1(t.animLength);for(let p=0;p<t.animLength;p++)l.p1(t.animTypes[p]);for(let p=0;p<t.animLength;p++){l.p1(t.animLabels[p].length);for(const x of t.animLabels[p])l.p1(x)}const c=new ce(new Uint8Array(i.pos+r.pos+o.pos+s.pos+l.pos+8)),h=i.pos;c.pdata(i.data,0,i.pos);const f=r.pos;c.pdata(r.data,0,r.pos);const g=o.pos;c.pdata(o.data,0,o.pos);const m=s.pos;return c.pdata(s.data,0,s.pos),c.pdata(l.data,0,l.pos),c.p2(h-2),c.p2(f),c.p2(g),c.p2(m),c.data.slice(0,c.pos)}static convertFromData(e,t){const n=new ce(t);n.pos=t.length-8;const i=n.g2(),r=n.g2(),o=n.g2(),s=n.g2(),l=new ce(t);l.pos=0;const c=l.g2(),h=new ce(t);h.pos=l.pos+i;const f=new ce(t);f.pos=h.pos+r;const g=new ce(t);g.pos=f.pos+o;const m=new ce(t);m.pos=g.pos+s;const p=Ot.convertFromData377(e,m),x=new Array(500),u=new Array(500),d=new Array(500),y=new Array(500);for(let v=0;v<c;v++){const M=l.g2(),S=new Ke;S.id=M,S.frameDelay=g.g1(),S.base=p;const T=l.g1();let b=-1,P=0;for(let _=0;_<T;_++){const A=h.g1();if(A>0){if(p.animTypes[_]!==0){for(let F=_-1;F>b;F--)if(p.animTypes[F]===0){x[P]=F,u[P]=0,d[P]=0,y[P]=0,P++;break}}x[P]=_;let N=0;p.animTypes[x[P]]===3&&(N=128),A&1?u[P]=f.gsmarts():u[P]=N,A&2?d[P]=f.gsmarts():d[P]=N,A&4?y[P]=f.gsmarts():y[P]=N,b=_,P++}}S.frameLength=P,S.bases=new Int32Array(P),S.x=new Int32Array(P),S.y=new Int32Array(P),S.z=new Int32Array(P);for(let _=0;_<P;_++)S.bases[_]=x[_],S.x[_]=u[_],S.y[_]=d[_],S.z[_]=y[_];Ke.instances[M]=S}}}const Qe=class Qe{static init3D(e,t){this.lineOffset=new Int32Array(t);for(let n=0;n<t;n++)this.lineOffset[n]=e*n;this.centerX=e/2|0,this.centerY=t/2|0}static clearTexels(){this.texelPool=null,this.activeTexels.fill(null)}static getAverageTextureRGB(e){if(this.averageTextureRGB[e]!==0)return this.averageTextureRGB[e];const t=this.texPal[e];if(!t)return 0;let n=0,i=0,r=0;const o=t.length;for(let l=0;l<o;l++)n+=t[l]>>16&255,i+=t[l]>>8&255,r+=t[l]&255;let s=((n/o|0)<<16)+((i/o|0)<<8)+(r/o|0);return s=this.setGamma(s,1.4),s===0&&(s=1),this.averageTextureRGB[e]=s,s}static setBrightness(e){const t=e+Math.random()*.03-.015;let n=0;for(let i=0;i<512;i++){const r=(i/8|0)/64+.0078125,o=(i&7)/8+.0625;for(let s=0;s<128;s++){const l=s/128;let c=l,h=l,f=l;if(o!==0){let u;l<.5?u=l*(o+1):u=l+o-l*o;const d=l*2-u;let y=r+.3333333333333333;y>1&&y--;let v=r-.3333333333333333;v<0&&v++,y*6<1?c=d+(u-d)*6*y:y*2<1?c=u:y*3<2?c=d+(u-d)*(.6666666666666666-y)*6:c=d,r*6<1?h=d+(u-d)*6*r:r*2<1?h=u:r*3<2?h=d+(u-d)*(.6666666666666666-r)*6:h=d,v*6<1?f=d+(u-d)*6*v:v*2<1?f=u:v*3<2?f=d+(u-d)*(.6666666666666666-v)*6:f=d}const g=c*256|0,m=h*256|0,p=f*256|0,x=(g<<16)+(m<<8)+p;this.hslPal[n++]=this.setGamma(x,t)}}}static setGamma(e,t){const n=(e>>16)/256,i=(e>>8&255)/256,r=(e&255)/256,o=Math.pow(n,t),s=Math.pow(i,t),l=Math.pow(r,t),c=o*256|0,h=s*256|0,f=l*256|0;return(c<<16)+(h<<8)+f}static initPool(e){this.texelPool||(this.poolSize=e,this.lowMemory?this.texelPool=new mr(e,16384):this.texelPool=new mr(e,65536),this.activeTexels.fill(null))}};Qe.lowMemory=!1,Qe.reciprocal15=new Int32Array(512),Qe.reciprocal16=new Int32Array(2048),Qe.sin=new Int32Array(2048),Qe.cos=new Int32Array(2048),Qe.hslPal=new Int32Array(65536),Qe.textureCount=0,Qe.lineOffset=new Int32Array,Qe.centerX=0,Qe.centerY=0,Qe.jagged=!0,Qe.clipX=!1,Qe.alpha=0,Qe.texelPool=null,Qe.activeTexels=new Qt(50,null),Qe.poolSize=0,Qe.cycle=0,Qe.textureCycle=new Int32Array(50),Qe.texPal=new Qt(50,null),Qe.averageTextureRGB=new Int32Array(50),(()=>{for(let e=1;e<512;e++)Qe.reciprocal15[e]=32768/e|0;for(let e=1;e<2048;e++)Qe.reciprocal16[e]=65536/e|0;for(let e=0;e<2048;e++)Qe.sin[e]=Math.sin(e*.0030679615757712823)*65536|0,Qe.cos[e]=Math.cos(e*.0030679615757712823)*65536|0;Qe.setBrightness(.8)})();let lt=Qe;class bi{constructor(){this.x=0,this.y=0,this.z=0,this.w=0}}const ae=class ae{constructor(e){this.objRaise=0,this.pickable=!1,this.pickedFace=-1,this.pickedFaceDepth=-1,this.originalFaceColor=null,this.hadOriginalFaceLabels=!1,this.hadOriginalVertexLabels=!1,this.hadOriginalFacePriorities=!1,this.hadOriginalFaceAlphas=!1,this.hadOriginalFaceInfos=!1,this.partMapping=null,this.currentScaleX=128,this.currentScaleY=128,this.currentScaleZ=128,this.baseScaleX=128,this.baseScaleY=128,this.baseScaleZ=128,this.vertexCount=e.vertexCount,this.vertexX=e.vertexX,this.vertexY=e.vertexY,this.vertexZ=e.vertexZ,this.faceCount=e.faceCount,this.faceVertexA=e.faceVertexA,this.faceVertexB=e.faceVertexB,this.faceVertexC=e.faceVertexC,this.faceColorA=e.faceColorA,this.faceColorB=e.faceColorB,this.faceColorC=e.faceColorC,this.faceInfo=e.faceInfo,this.facePriority=e.facePriority,this.faceAlpha=e.faceAlpha,this.faceColor=e.faceColor,this.priorityVal=e.priorityVal,this.texturedFaceCount=e.texturedFaceCount,this.texturedVertexA=e.texturedVertexA,this.texturedVertexB=e.texturedVertexB,this.texturedVertexC=e.texturedVertexC,this.minX=e.minX??0,this.maxX=e.maxX??0,this.minZ=e.minZ??0,this.maxZ=e.maxZ??0,this.radius=e.radius??0,this.minY=e.minY??0,this.maxY=e.maxY??0,this.maxDepth=e.maxDepth??0,this.minDepth=e.minDepth??0,this.vertexLabel=e.vertexLabel??null,this.faceLabel=e.faceLabel??null,this.labelVertices=e.labelVertices??null,this.labelFaces=e.labelFaces??null,this.vertexNormal=e.vertexNormal??null,this.vertexNormalOriginal=e.vertexNormalOriginal??null,this.originalVertexX=new Int32Array(this.vertexX),this.originalVertexY=new Int32Array(this.vertexY),this.originalVertexZ=new Int32Array(this.vertexZ),this.faceTextures=new Int32Array(this.faceCount),this.faceTextures.fill(-1),this.textureCoords=new Int32Array(this.faceCount),this.uvCoords=new Jo(this.faceCount,6),this.priorityVal=e.priorityVal,this.currentScaleX=128,this.currentScaleY=128,this.currentScaleZ=128,this.baseScaleX=128,this.baseScaleY=128,this.baseScaleZ=128}static encodeVertices(e,t,n,i){const r=new ce(new Uint8Array(i)),o=new ce(new Uint8Array(i*2)),s=new ce(new Uint8Array(i*2)),l=new ce(new Uint8Array(i*2));let c=0,h=0,f=0;for(let g=0;g<i;g++){const m=e[g],p=t[g],x=n[g],u=m-c,d=p-h,y=x-f;let v=0;u!==0&&(v|=1,o.psmarts(u)),d!==0&&(v|=2,s.psmarts(d)),y!==0&&(v|=4,l.psmarts(y)),r.p1(v),c=m,h=p,f=x}return{flags:r.data,xData:o.data.slice(0,o.pos),yData:s.data.slice(0,s.pos),zData:l.data.slice(0,l.pos)}}static encodeFaces(e,t,n,i){const r=new ce(new Uint8Array(i)),o=new ce(new Uint8Array(i*3*2));let s=0,l=0,c=0,h=0;for(let f=0;f<i;f++){const g=e[f],m=t[f],p=n[f];let x;g===l&&m===s&&p!==h?(x=4,r.p1(x),o.psmarts(p-h)):g===c&&m===l&&p!==h?(x=3,r.p1(x),o.psmarts(p-h)):g===s&&m===c&&p!==h?(x=2,r.p1(x),o.psmarts(p-h)):(x=1,r.p1(x),o.psmarts(g-h),o.psmarts(m-g),o.psmarts(p-m)),h=p,s=g,l=m,c=p}return{orientations:r.data,vertexIndices:o.data.slice(0,o.pos)}}static decodeV3(e){const t=e.data.length-26;e.pos=t;const n=e.g2(),i=e.g2(),r=e.g1(),o=e.g1(),s=e.g1(),l=e.g1(),c=e.g1(),h=e.g1(),f=e.g1();e.g1();const g=e.g2(),m=e.g2(),p=e.g2(),x=e.g2(),u=e.g2();e.g2();let d=0;const y=d;d+=r;const v=d;d+=n;const M=d;o===1&&(d+=i);const S=d;d+=i;const T=d;s===255&&(d+=i);const b=d;c===1&&(d+=i);const P=d;f===1&&(d+=n);const _=d;l===1&&(d+=i);const A=d;d+=x,h===1&&(d+=i*2);const N=d;d+=u;const F=d;d+=i*2;const D=d;d+=g;const R=d;d+=m;const L=d;d+=p;const H=new Int32Array(n),Z=new Int32Array(n),j=new Int32Array(n),G=new ce(e.data.slice(v,v+n)),K=new ce(e.data.slice(D,D+g)),Y=new ce(e.data.slice(R,R+m)),U=new ce(e.data.slice(L,L+p));let k=0,q=0,oe=0;for(let Q=0;Q<n;Q++){const le=G.g1();let ee=0,fe=0,te=0;le&1&&(ee=K.gsmarts()),le&2&&(fe=Y.gsmarts()),le&4&&(te=U.gsmarts()),H[Q]=k+ee,Z[Q]=q+fe,j[Q]=oe+te,k=H[Q],q=Z[Q],oe=j[Q]}const de=new Int32Array(i),se=new Int32Array(i),he=new Int32Array(i),Te=new Int32Array(i),Ee=new ce(e.data.slice(F,F+i*2));for(let Q=0;Q<i;Q++)Te[Q]=Ee.g2();const Fe=new ce(e.data.slice(S,S+i)),z=new ce(e.data.slice(A,A+x));let qe=0,Me=0,Se=0,me=0;for(let Q=0;Q<i;Q++){const le=Fe.g1();if(le===1)qe=z.gsmarts()+me,Me=z.gsmarts()+qe,Se=z.gsmarts()+Me,me=Se;else if(le===2)Me=Se,Se=z.gsmarts()+me,me=Se;else if(le===3)qe=Se,Se=z.gsmarts()+me,me=Se;else if(le===4){const ee=qe;qe=Me,Me=ee,Se=z.gsmarts()+me,me=Se}de[Q]=qe,se[Q]=Me,he[Q]=Se}let Ge=null;if(s===255){Ge=new Int32Array(i);for(let Q=0;Q<i;Q++)Ge[Q]=e.data[T+Q]}let we=null;if(l===1){we=new Int32Array(i);for(let Q=0;Q<i;Q++)we[Q]=e.data[_+Q]}let C=null;if(f===1){C=new Int32Array(n);for(let Q=0;Q<n;Q++)C[Q]=e.data[P+Q]}let E=null;if(c===1){E=new Int32Array(i);for(let Q=0;Q<i;Q++)E[Q]=e.data[b+Q]}let V=null;if(o===1){V=new Int32Array(i);for(let Q=0;Q<i;Q++)V[Q]=e.data[M+Q]}const ne=new Int32Array(r),ie=new Int32Array(r),re=new Int32Array(r);if(r>0){const Q=e.data.slice(y,y+r),le=new ce(e.data.slice(N,N+u));for(let ee=0;ee<r;ee++)Q[ee]===0&&(ne[ee]=le.g2(),ie[ee]=le.g2(),re[ee]=le.g2())}const _e=new ae({vertexCount:n,vertexX:H,vertexY:Z,vertexZ:j,faceCount:i,faceVertexA:de,faceVertexB:se,faceVertexC:he,faceColor:Te,texturedFaceCount:r,texturedVertexA:ne,texturedVertexB:ie,texturedVertexC:re,facePriority:Ge,faceAlpha:we,vertexLabel:C,faceLabel:E,faceInfo:V,priorityVal:s!==255?s:0,faceColorA:null,faceColorB:null,faceColorC:null});return _e.hadOriginalFaceInfos=o===1,_e.hadOriginalFacePriorities=s===255,_e.hadOriginalFaceAlphas=l===1,_e.hadOriginalFaceLabels=c===1,_e.hadOriginalVertexLabels=f===1,_e.originalFaceColor=new Int32Array(Te),_e}static decodeV2(e){const t=e.data.length-23;e.pos=t;const n=e.g2(),i=e.g2(),r=e.g1(),o=e.g1(),s=e.g1(),l=e.g1(),c=e.g1(),h=e.g1();e.g1();const f=e.g2(),g=e.g2(),m=e.g2(),p=e.g2(),x=e.g2();let u=0;const d=u;u+=n;const y=u;u+=i;const v=u;s===255&&(u+=i);const M=u;c===1&&(u+=i);const S=u;o===1&&(u+=i);const T=u;u+=x;const b=u;l===1&&(u+=i);const P=u;u+=p;const _=u;u+=i*2;const A=u;u+=r*6;const N=u;u+=f;const F=u;u+=g;const D=u,R=new Int32Array(n),L=new Int32Array(n),H=new Int32Array(n),Z=new ce(e.data.slice(d,d+n)),j=new ce(e.data.slice(N,N+f)),G=new ce(e.data.slice(F,F+g)),K=new ce(e.data.slice(D,D+m));let Y=0,U=0,k=0;for(let ee=0;ee<n;ee++){const fe=Z.g1();let te=0,Xe=0,De=0;fe&1&&(te=j.gsmarts()),fe&2&&(Xe=G.gsmarts()),fe&4&&(De=K.gsmarts()),R[ee]=Y+te,L[ee]=U+Xe,H[ee]=k+De,Y=R[ee],U=L[ee],k=H[ee]}const q=new Int32Array(i),oe=new ce(e.data.slice(_,_+i*2));for(let ee=0;ee<i;ee++)q[ee]=oe.g2();let de=null,se=!1,he=!1;const Te=new Int32Array(i).fill(-1),Ee=new Int32Array(i).fill(-1);if(o===1){de=new Int32Array(i);for(let ee=0;ee<i;ee++){const fe=e.data[S+ee]&255;(fe&1)===1?(de[ee]=1,se=!0):de[ee]=0,(fe&2)===2&&(Ee[ee]=fe>>2,Te[ee]=q[ee],q[ee]=127,Te[ee]!==-1&&(he=!0))}}let Fe=null;if(s===255){Fe=new Int32Array(i);for(let ee=0;ee<i;ee++)Fe[ee]=e.data[v+ee]}let z=null;if(l===1){z=new Int32Array(i);for(let ee=0;ee<i;ee++)z[ee]=e.data[b+ee]}let qe=null;if(c===1){qe=new Int32Array(i);for(let ee=0;ee<i;ee++)qe[ee]=e.data[M+ee]&255}let Me=null;if(h===1){Me=new Int32Array(n);for(let ee=0;ee<n;ee++)Me[ee]=e.data[T+ee]&255}const Se=new Int32Array(i),me=new Int32Array(i),Ge=new Int32Array(i),we=new ce(e.data.slice(y,y+i)),C=new ce(e.data.slice(P,P+p));let E=0,V=0,ne=0,ie=0;for(let ee=0;ee<i;ee++){const fe=we.g1();if(fe===1)E=C.gsmarts()+ie,V=C.gsmarts()+E,ne=C.gsmarts()+V,ie=ne;else if(fe===2)V=ne,ne=C.gsmarts()+ie,ie=ne;else if(fe===3)E=ne,ne=C.gsmarts()+ie,ie=ne;else if(fe===4){const te=E;E=V,V=te,ne=C.gsmarts()+ie,ie=ne}Se[ee]=E,me[ee]=V,Ge[ee]=ne}const re=new Int32Array(r),_e=new Int32Array(r),Q=new Int32Array(r);if(r>0){const ee=new ce(e.data.slice(A,A+r*6));for(let fe=0;fe<r;fe++)re[fe]=ee.g2(),_e[fe]=ee.g2(),Q[fe]=ee.g2()}if(r>0&&he){let ee=!1;for(let fe=0;fe<i;fe++){const te=Ee[fe]&255;te!==255&&(Se[fe]===(re[te]&65535)&&me[fe]===(_e[te]&65535)&&Ge[fe]===(Q[te]&65535)?Ee[fe]=-1:ee=!0)}ee||(he=!1)}he||(Te.fill(-1),Ee.fill(-1)),se||(de=null);const le=new ae({vertexCount:n,vertexX:R,vertexY:L,vertexZ:H,faceCount:i,faceVertexA:Se,faceVertexB:me,faceVertexC:Ge,faceColor:q,texturedFaceCount:r,texturedVertexA:re,texturedVertexB:_e,texturedVertexC:Q,facePriority:Fe,faceAlpha:z,vertexLabel:Me,faceLabel:qe,faceInfo:de,priorityVal:s!==255?s:0,faceColorA:null,faceColorB:null,faceColorC:null});return le.faceTextures.set(Te),le.textureCoords.set(Ee),le.hadOriginalFaceInfos=o===1,le.hadOriginalFacePriorities=s===255,le.hadOriginalFaceAlphas=l===1,le.hadOriginalFaceLabels=c===1,le.hadOriginalVertexLabels=h===1,le.originalFaceColor=new Int32Array(q),le}static decodeV1(e){const t=e.data.length-23;e.pos=t;const n=e.g2(),i=e.g2(),r=e.g1(),o=e.g1(),s=(o&1)===1,l=(o&8)===8;let c=1;l&&(c=e.data[e.data.length-24]&255);const h=e.g1(),f=e.g1(),g=e.g1(),m=e.g1(),p=e.g1(),x=e.g2(),u=e.g2(),d=e.g2(),y=e.g2(),v=e.g2();let M=0,S=0;for(let J=0;J<r;J++){const ve=e.data[J]&255;ve===0&&M++,ve>=1&&ve<=3&&S++}let T=r+n;const b=T;s&&(T+=i);const P=T;T+=i;const _=T;h===255&&(T+=i);const A=T;g===1&&(T+=i);const N=T;p===1&&(T+=n);const F=T;f===1&&(T+=i);const D=T;T+=y;const R=T;m===1&&(T+=i*2);const L=T;T+=v;const H=T;T+=i*2;const Z=T;T+=x;const j=T;T+=u;const G=T;T+=d;const K=T;T+=M*6,T+=S*6;const Y=new Int32Array(n),U=new Int32Array(n),k=new Int32Array(n),q=new ce(e.data.slice(r,r+n)),oe=new ce(e.data.slice(Z,Z+x)),de=new ce(e.data.slice(j,j+u)),se=new ce(e.data.slice(G,G+d));let he=0,Te=0,Ee=0;for(let J=0;J<n;J++){const ve=q.g1();let Ue=0,Je=0,Oe=0;ve&1&&(Ue=oe.gsmarts()),ve&2&&(Je=de.gsmarts()),ve&4&&(Oe=se.gsmarts()),Y[J]=he+Ue,U[J]=Te+Je,k[J]=Ee+Oe,he=Y[J],Te=U[J],Ee=k[J]}if(c>=13)for(let J=0;J<n;J++)Y[J]>>=2,U[J]>>=2,k[J]>>=2;const Fe=new Int32Array(i),z=new ce(e.data.slice(H,H+i*2));for(let J=0;J<i;J++)Fe[J]=z.g2();let qe=null,Me=!1;if(s){qe=new Int32Array(i),Me=!0;for(let J=0;J<i;J++)qe[J]=e.data[b+J]&255}const Se=new Int32Array(i).fill(-1),me=new Int32Array(i).fill(-1);let Ge=!1;if(m===1&&r>0)for(let J=0;J<i;J++){const ve=e.data[R+J*2]&255,Ue=e.data[R+J*2+1]&255;if(Se[J]=(ve<<8|Ue)-1,Se[J]!==-1){const Je=(e.data[L+J]&255)-1;me[J]=Je,Ge=!0}}let we=null;if(h===255){we=new Int32Array(i);for(let J=0;J<i;J++)we[J]=e.data[_+J]}let C=null;if(f===1){C=new Int32Array(i);for(let J=0;J<i;J++)C[J]=e.data[F+J]}let E=null;if(g===1){E=new Int32Array(i);for(let J=0;J<i;J++)E[J]=e.data[A+J]&255}let V=null;if(p===1){V=new Int32Array(n);for(let J=0;J<n;J++)V[J]=e.data[N+J]&255}const ne=new Int32Array(i),ie=new Int32Array(i),re=new Int32Array(i),_e=new ce(e.data.slice(P,P+i)),Q=new ce(e.data.slice(D,D+y));let le=0,ee=0,fe=0,te=0;for(let J=0;J<i;J++){const ve=_e.g1();if(ve===1)le=Q.gsmarts()+te,ee=Q.gsmarts()+le,fe=Q.gsmarts()+ee,te=fe;else if(ve===2)ee=fe,fe=Q.gsmarts()+te,te=fe;else if(ve===3)le=fe,fe=Q.gsmarts()+te,te=fe;else if(ve===4){const Ue=le;le=ee,ee=Ue,fe=Q.gsmarts()+te,te=fe}ne[J]=le,ie[J]=ee,re[J]=fe}const Xe=new Int32Array(r),De=new Int32Array(r),Re=new Int32Array(r);if(r>0){const J=new ce(e.data.slice(K,K+M*6));for(let ve=0;ve<r;ve++)(e.data[ve]&255)===0&&(Xe[ve]=J.g2(),De[ve]=J.g2(),Re[ve]=J.g2())}if(Ge&&r>0){let J=!1;for(let ve=0;ve<i;ve++){const Ue=me[ve];Ue>=0&&Ue<r&&(ne[ve]===(Xe[Ue]&65535)&&ie[ve]===(De[Ue]&65535)&&re[ve]===(Re[Ue]&65535)?me[ve]=-1:J=!0)}J||(Ge=!1)}Ge||(Se.fill(-1),me.fill(-1)),Me||(qe=null);const be=new ae({vertexCount:n,vertexX:Y,vertexY:U,vertexZ:k,faceCount:i,faceVertexA:ne,faceVertexB:ie,faceVertexC:re,faceColor:Fe,texturedFaceCount:r,texturedVertexA:Xe,texturedVertexB:De,texturedVertexC:Re,facePriority:we,faceAlpha:C,vertexLabel:V,faceLabel:E,faceInfo:qe,priorityVal:h!==255?h:0,faceColorA:null,faceColorB:null,faceColorC:null});return be.faceTextures.set(Se),be.textureCoords.set(me),be.hadOriginalFaceInfos=s,be.hadOriginalFacePriorities=h===255,be.hadOriginalFaceAlphas=f===1,be.hadOriginalFaceLabels=g===1,be.hadOriginalVertexLabels=p===1,be.originalFaceColor=new Int32Array(Fe),be}static convertFromData(e){const t=e.data[e.data.length-1],n=e.data[e.data.length-2];if(t===253&&n===255)return ae.decodeV3(e);if(t===254&&n===255)return ae.decodeV2(e);if(t===255&&n===255)return ae.decodeV1(e);const i=e.data.length-18;e.pos=i;const r=e.g2(),o=e.g2(),s=e.g1(),l=e.g1(),c=e.g1(),h=e.g1(),f=e.g1(),g=e.g1(),m=e.g2(),p=e.g2(),x=e.g2(),u=e.g2();e.pos=0;const d=new Uint8Array(r);e.gdata(d,0,d.length);const y=new Uint8Array(o);e.gdata(y,0,y.length);const v=[],M=[],S=[],T=[],b=[];if(c===255){const se=new Uint8Array(o);e.gdata(se,0,se.length);for(let he=0;he<se.length;he++)v.push(se[he])}if(f===1){const se=new Uint8Array(o);e.gdata(se,0,se.length);for(let he=0;he<se.length;he++)M.push(se[he])}if(l===1){const se=new Uint8Array(o);e.gdata(se,0,se.length);for(let he=0;he<se.length;he++)S.push(se[he])}if(g===1){const se=new Uint8Array(r);e.gdata(se,0,se.length);for(let he=0;he<se.length;he++)T.push(se[he])}if(h===1){const se=new Uint8Array(o);e.gdata(se,0,se.length);for(let he=0;he<se.length;he++)b.push(se[he])}const P=new Uint8Array(u);e.gdata(P,0,P.length);const _=new Uint8Array(o*2);e.gdata(_,0,_.length);const A=new Uint8Array(s*6);e.gdata(A,0,A.length);const N=new Uint8Array(m);e.gdata(N,0,N.length);const F=new Uint8Array(p);e.gdata(F,0,F.length);const D=new Uint8Array(x);e.gdata(D,0,D.length);const R=new Int32Array(r),L=new Int32Array(r),H=new Int32Array(r),Z=new Int32Array(o),j=new Int32Array(o),G=new Int32Array(o),K=new Int32Array(o),Y=new Int32Array(s),U=new Int32Array(s),k=new Int32Array(s);ae.processVertices(R,L,H,r,N,F,D,d),ae.processFaces(Z,j,G,o,P,y),ae.processColors(K,o,_),ae.processTextures(Y,U,k,s,A);let q=0;c!==255&&(q=c);const oe={vertexCount:r,vertexX:R,vertexY:L,vertexZ:H,faceCount:o,faceVertexA:Z,faceVertexB:j,faceVertexC:G,faceColorA:null,faceColorB:null,faceColorC:null,faceInfo:S.length>0?new Int32Array(S):null,facePriority:v.length>0?new Int32Array(v):null,faceAlpha:b.length>0?new Int32Array(b):null,faceColor:K,priorityVal:q,texturedFaceCount:s,texturedVertexA:Y,texturedVertexB:U,texturedVertexC:k,vertexLabel:T.length>0?new Int32Array(T):null,faceLabel:M.length>0?new Int32Array(M):null,labelVertices:null,labelFaces:null,vertexNormal:null,vertexNormalOriginal:null},de=new ae(oe);return de.hadOriginalFaceInfos=l===1,de.hadOriginalFacePriorities=c===255,de.hadOriginalFaceAlphas=h===1,de.hadOriginalFaceLabels=f===1,de.hadOriginalVertexLabels=g===1,de.faceColor&&(de.originalFaceColor=new Int32Array(de.faceColor)),de}exportToOb2(){const e=[],{flags:t,xData:n,yData:i,zData:r}=ae.encodeVertices(this.vertexX,this.vertexY,this.vertexZ,this.vertexCount);e.push(t);const{orientations:o,vertexIndices:s}=ae.encodeFaces(this.faceVertexA,this.faceVertexB,this.faceVertexC,this.faceCount);if(e.push(o),this.hadOriginalFacePriorities){const b=this.facePriority?Uint8Array.from(this.facePriority):new Uint8Array(this.faceCount).fill(0);e.push(b)}if(this.hadOriginalFaceLabels){let b=new Uint8Array(this.faceCount).fill(0);if(this.faceLabelForExport instanceof Int32Array){const P=this.faceLabelForExport;console.log("Using faceLabelForExport in export:",P.slice(0,20));for(let _=0;_<this.faceCount&&_<P.length;_++)b[_]=P[_]}else if(this.labelFaces)for(let P=0;P<this.labelFaces.length;P++){const _=this.labelFaces[P];if(_)for(let A=0;A<_.length;A++)_[A]<this.faceCount&&(b[_[A]]=P)}e.push(b)}if(this.hadOriginalFaceInfos){const b=this.faceInfo?Uint8Array.from(this.faceInfo):new Uint8Array(this.faceCount).fill(0);e.push(b)}if(this.hadOriginalVertexLabels){let b=new Uint8Array(this.vertexCount).fill(0);if(this.vertexLabelForExport instanceof Int32Array){const P=this.vertexLabelForExport;for(let _=0;_<this.vertexCount&&_<P.length;_++)b[_]=P[_]}else if(this.labelVertices)for(let P=0;P<this.labelVertices.length;P++){const _=this.labelVertices[P];if(_)for(let A=0;A<_.length;A++)_[A]<this.vertexCount&&(b[_[A]]=P)}e.push(b)}if(this.hadOriginalFaceAlphas){const b=this.faceAlpha?Uint8Array.from(this.faceAlpha):new Uint8Array(this.faceCount).fill(0);e.push(b)}e.push(s);const l=new ce(new Uint8Array(this.faceCount*2)),c=this.originalFaceColor?this.originalFaceColor:this.faceColor;if(c)for(let b=0;b<this.faceCount;b++)l.p2(c[b]);else for(let b=0;b<this.faceCount;b++)l.p2(0);const h=l.data;e.push(h);const f=new ce(new Uint8Array(this.texturedFaceCount*6));for(let b=0;b<this.texturedFaceCount;b++)f.p2(this.texturedVertexA[b]),f.p2(this.texturedVertexB[b]),f.p2(this.texturedVertexC[b]);const g=f.data;e.push(g),e.push(n),e.push(i),e.push(r);let m=0;for(let b=0;b<e.length;b++)m+=e[b].length;const p=new ce(new Uint8Array(18));p.p2(this.vertexCount),p.p2(this.faceCount),p.p1(this.texturedFaceCount);const x=this.hadOriginalFaceInfos?1:0;p.p1(x);let u;this.hadOriginalFacePriorities?u=255:u=this.priorityVal,p.p1(u);const d=this.hadOriginalFaceAlphas?1:0;p.p1(d);const y=this.hadOriginalFaceLabels?1:0;p.p1(y);const v=this.hadOriginalVertexLabels?1:0;p.p1(v),p.p2(n.length),p.p2(i.length),p.p2(r.length),p.p2(s.length);const M=p.data,S=new Uint8Array(m+M.length);let T=0;for(const b of e)S.set(b,T),T+=b.length;return S.set(M,T),S}saveCurrentVerticesAsOriginal(){if(this.baseScaleX!==128||this.baseScaleY!==128||this.baseScaleZ!==128){this.originalVertexX=new Int32Array(this.vertexCount),this.originalVertexY=new Int32Array(this.vertexCount),this.originalVertexZ=new Int32Array(this.vertexCount);for(let e=0;e<this.vertexCount;e++)this.originalVertexX[e]=this.vertexX[e]*128/this.baseScaleX|0,this.originalVertexY[e]=this.vertexY[e]*128/this.baseScaleY|0,this.originalVertexZ[e]=this.vertexZ[e]*128/this.baseScaleZ|0}else this.originalVertexX=new Int32Array(this.vertexX),this.originalVertexY=new Int32Array(this.vertexY),this.originalVertexZ=new Int32Array(this.vertexZ);this.partMapping&&this.partMapping.isNpcModel&&this.updateAllPartVertices()}resetToOriginal(){if(this.vertexX.set(this.originalVertexX),this.vertexY.set(this.originalVertexY),this.vertexZ.set(this.originalVertexZ),this.currentScaleX=this.baseScaleX,this.currentScaleY=this.baseScaleY,this.currentScaleZ=this.baseScaleZ,this.partMapping&&this.partMapping.isNpcModel)for(const e of this.partMapping.parts)e.originalModel.resetToOriginal()}static processVertices(e,t,n,i,r,o,s,l){const c=new ce(r),h=new ce(o),f=new ce(s);let g=0,m=0,p=0;for(let x=0;x<i;x++){const u=l[x];let d=0;u&1&&(d=c.gsmarts());let y=0;u&2&&(y=h.gsmarts());let v=0;u&4&&(v=f.gsmarts());const M=g+d,S=m+y,T=p+v;g=M,m=S,p=T,e[x]=M,t[x]=S,n[x]=T}}static processFaces(e,t,n,i,r,o){const s=new ce(r),l=new ce(o);let c=0,h=0,f=0,g=0;for(let m=0;m<i;m++){const p=l.g1();if(p===1)c=s.gsmarts()+g,g=c,h=s.gsmarts()+g,g=h,f=s.gsmarts()+g,g=f;else if(p===2)h=f,f=s.gsmarts()+g,g=f;else if(p===3)c=f,f=s.gsmarts()+g,g=f;else if(p===4){const x=c;c=h,h=x,f=s.gsmarts()+g,g=f}e[m]=c,t[m]=h,n[m]=f}}static processColors(e,t,n){const i=new ce(n);for(let r=0;r<t;r++){const o=i.g2();e[r]=o}}static processTextures(e,t,n,i,r){if(i===0)return;const o=new ce(r);for(let s=0;s<i;s++)e[s]=o.g2(),t[s]=o.g2(),n[s]=o.g2()}processTextureCoordinates(){if(this.faceInfo)for(let e=0;e<this.faceCount;e++){const t=this.faceInfo[e]&3;(t===2||t===3)&&this.faceColor&&(this.faceTextures[e]=this.faceColor[e],this.textureCoords[e]=this.faceInfo[e]>>2,this.calculateTextureCoordinates(e))}}calculateTextureCoordinates(e){const t=this.faceVertexA[e],n=this.faceVertexB[e],i=this.faceVertexC[e];let r,o,s;if(this.faceTextures[e]!==-1){const q=this.textureCoords[e];r=this.texturedVertexA[q],o=this.texturedVertexB[q],s=this.texturedVertexC[q]}else r=t,o=n,s=i;const l=this.vertexX[r],c=this.vertexY[r],h=this.vertexZ[r],f=this.vertexX[o]-l,g=this.vertexY[o]-c,m=this.vertexZ[o]-h,p=this.vertexX[s]-l,x=this.vertexY[s]-c,u=this.vertexZ[s]-h,d=this.vertexX[t]-l,y=this.vertexY[t]-c,v=this.vertexZ[t]-h,M=this.vertexX[n]-l,S=this.vertexY[n]-c,T=this.vertexZ[n]-h,b=this.vertexX[i]-l,P=this.vertexY[i]-c,_=this.vertexZ[i]-h,A=g*u-m*x,N=m*p-f*u,F=f*x-g*p;let D=x*F-u*N,R=u*A-p*F,L=p*N-x*A,H=D*f+R*g+L*m,Z=1/H;const j=(D*d+R*y+L*v)*Z,G=(D*M+R*S+L*T)*Z,K=(D*b+R*P+L*_)*Z;D=g*F-m*N,R=m*A-f*F,L=f*N-g*A,H=D*p+R*x+L*u,Z=1/H;const Y=(D*d+R*y+L*v)*Z,U=(D*M+R*S+L*T)*Z,k=(D*b+R*P+L*_)*Z;this.uvCoords[e].set([j,Y,G,U,K,k])}static mulColorLightness(e,t,n){return(n&2)===2?(t<0?t=0:t>127&&(t=127),127-t):(t=t*(e&127)>>7,t<2?t=2:t>126&&(t=126),(e&65408)+t)}static modelCopyFaces(e,t,n){const i=e.vertexCount,r=e.faceCount,o=e.texturedFaceCount;let s;if(t){s=new Int32Array(i);for(let p=0;p<i;p++)s[p]=e.vertexY[p]}else s=e.vertexY;let l,c,h,f,g=null,m=null;if(n){l=new Int32Array(r),c=new Int32Array(r),h=new Int32Array(r);for(let p=0;p<r;p++)e.faceColorA&&(l[p]=e.faceColorA[p]),e.faceColorB&&(c[p]=e.faceColorB[p]),e.faceColorC&&(h[p]=e.faceColorC[p]);if(f=new Int32Array(r),e.faceInfo)for(let p=0;p<r;p++)f[p]=e.faceInfo[p];else for(let p=0;p<r;p++)f[p]=0;g=new Qt(i,null);for(let p=0;p<i;p++){const x=g[p]=new bi;if(e.vertexNormal){const u=e.vertexNormal[p];u&&(x.x=u.x,x.y=u.y,x.z=u.z,x.w=u.w)}}m=e.vertexNormalOriginal}else l=e.faceColorA,c=e.faceColorB,h=e.faceColorC,f=e.faceInfo;return new ae({vertexCount:i,vertexX:e.vertexX,vertexY:s,vertexZ:e.vertexZ,faceCount:r,faceVertexA:e.faceVertexA,faceVertexB:e.faceVertexB,faceVertexC:e.faceVertexC,faceColorA:l,faceColorB:c,faceColorC:h,faceInfo:f,facePriority:e.facePriority,faceAlpha:e.faceAlpha,faceColor:e.faceColor,priorityVal:e.priorityVal,texturedFaceCount:o,texturedVertexA:e.texturedVertexA,texturedVertexB:e.texturedVertexB,texturedVertexC:e.texturedVertexC,minX:e.minX,maxX:e.maxX,minZ:e.minZ,maxZ:e.maxZ,radius:e.radius,minY:e.minY,maxY:e.maxY,maxDepth:e.maxDepth,minDepth:e.minDepth,vertexNormal:g,vertexNormalOriginal:m})}static modelShareColored(e,t,n,i){const r=e.vertexCount,o=e.faceCount,s=e.texturedFaceCount;let l,c,h;if(i)l=e.vertexX,c=e.vertexY,h=e.vertexZ;else{l=new Int32Array(r),c=new Int32Array(r),h=new Int32Array(r);for(let m=0;m<r;m++)l[m]=e.vertexX[m],c[m]=e.vertexY[m],h[m]=e.vertexZ[m]}let f;if(t)f=e.faceColor;else{f=new Int32Array(o);for(let m=0;m<o;m++)e.faceColor&&(f[m]=e.faceColor[m])}let g;if(n)g=e.faceAlpha;else if(g=new Int32Array(o),e.faceAlpha)for(let m=0;m<o;m++)g[m]=e.faceAlpha[m];else for(let m=0;m<o;m++)g[m]=0;return new ae({vertexCount:r,vertexX:l,vertexY:c,vertexZ:h,faceCount:o,faceVertexA:e.faceVertexA,faceVertexB:e.faceVertexB,faceVertexC:e.faceVertexC,faceColorA:null,faceColorB:null,faceColorC:null,faceInfo:e.faceInfo,facePriority:e.facePriority,faceAlpha:g,faceColor:f,priorityVal:e.priorityVal,texturedFaceCount:s,texturedVertexA:e.texturedVertexA,texturedVertexB:e.texturedVertexB,texturedVertexC:e.texturedVertexC,vertexLabel:e.vertexLabel,faceLabel:e.faceLabel})}static modelShareAlpha(e,t){const n=e.vertexCount,i=e.faceCount,r=e.texturedFaceCount,o=new Int32Array(n),s=new Int32Array(n),l=new Int32Array(n);for(let h=0;h<n;h++)o[h]=e.vertexX[h],s[h]=e.vertexY[h],l[h]=e.vertexZ[h];let c;if(t)c=e.faceAlpha;else if(c=new Int32Array(i),e.faceAlpha)for(let h=0;h<i;h++)c[h]=e.faceAlpha[h];else for(let h=0;h<i;h++)c[h]=0;return new ae({vertexCount:n,vertexX:o,vertexY:s,vertexZ:l,faceCount:i,faceVertexA:e.faceVertexA,faceVertexB:e.faceVertexB,faceVertexC:e.faceVertexC,faceColorA:e.faceColorA,faceColorB:e.faceColorB,faceColorC:e.faceColorC,faceInfo:e.faceInfo,facePriority:e.facePriority,faceAlpha:c,faceColor:e.faceColor,priorityVal:e.priorityVal,texturedFaceCount:r,texturedVertexA:e.texturedVertexA,texturedVertexB:e.texturedVertexB,texturedVertexC:e.texturedVertexC,labelVertices:e.labelVertices,labelFaces:e.labelFaces})}static modelFromModelsBounds(e,t){let n=!1,i=!1,r=!1,o=!1,s=0,l=0,c=0,h=-1;for(let F=0;F<t;F++){const D=e[F];D&&(s+=D.vertexCount,l+=D.faceCount,c+=D.texturedFaceCount,n||(n=D.faceInfo!==null),D.facePriority?i=!0:(h===-1&&(h=D.priorityVal),h!==D.priorityVal&&(i=!0)),r||(r=D.faceAlpha!==null),o||(o=D.faceColor!==null))}const f=new Int32Array(s),g=new Int32Array(s),m=new Int32Array(s),p=new Int32Array(l),x=new Int32Array(l),u=new Int32Array(l),d=new Int32Array(l),y=new Int32Array(l),v=new Int32Array(l),M=new Int32Array(c),S=new Int32Array(c),T=new Int32Array(c);let b=null;n&&(b=new Int32Array(l));let P=null;i&&(P=new Int32Array(l));let _=null;r&&(_=new Int32Array(l));let A=null;o&&(A=new Int32Array(l)),s=0,l=0,c=0;for(let F=0;F<t;F++){const D=e[F];if(D){const R=s;for(let L=0;L<D.vertexCount;L++)f[s]=D.vertexX[L],g[s]=D.vertexY[L],m[s]=D.vertexZ[L],s++;for(let L=0;L<D.faceCount;L++)p[l]=D.faceVertexA[L]+R,x[l]=D.faceVertexB[L]+R,u[l]=D.faceVertexC[L]+R,D.faceColorA&&(d[l]=D.faceColorA[L]),D.faceColorB&&(y[l]=D.faceColorB[L]),D.faceColorC&&(v[l]=D.faceColorC[L]),n&&(D.faceInfo?b&&(b[l]=D.faceInfo[L]):b&&(b[l]=0)),i&&(D.facePriority?P&&(P[l]=D.facePriority[L]):P&&(P[l]=D.priorityVal)),r&&(D.faceAlpha?_&&(_[l]=D.faceAlpha[L]):_&&(_[l]=0)),o&&D.faceColor&&A&&(A[l]=D.faceColor[L]),l++;for(let L=0;L<D.texturedFaceCount;L++)M[c]=D.texturedVertexA[L]+R,S[c]=D.texturedVertexB[L]+R,T[c]=D.texturedVertexC[L]+R,c++}}const N=new ae({vertexCount:s,vertexX:f,vertexY:g,vertexZ:m,faceCount:l,faceVertexA:p,faceVertexB:x,faceVertexC:u,faceColorA:d,faceColorB:y,faceColorC:v,faceInfo:b,facePriority:P,faceAlpha:_,faceColor:A,priorityVal:h,texturedFaceCount:c,texturedVertexA:M,texturedVertexB:S,texturedVertexC:T});return N.calculateBoundsCylinder(),N}static modelFromModels(e,t,n){let i=!1,r=!1,o=!1,s=!1,l=0,c=0,h=0,f=-1;for(let R=0;R<t;R++){const L=e[R];L&&(l+=L.vertexCount,c+=L.faceCount,h+=L.texturedFaceCount,i||(i=L.faceInfo!==null),L.facePriority?r=!0:(f===-1&&(f=L.priorityVal),f!==L.priorityVal&&(r=!0)),o||(o=L.faceAlpha!==null),s||(s=L.faceLabel!==null))}const g=new Int32Array(l),m=new Int32Array(l),p=new Int32Array(l),x=new Int32Array(l),u=new Int32Array(c),d=new Int32Array(c),y=new Int32Array(c),v=new Int32Array(h),M=new Int32Array(h),S=new Int32Array(h);let T=null;i&&(T=new Int32Array(c));let b=null;r&&(b=new Int32Array(c));let P=null;o&&(P=new Int32Array(c));let _=null;s&&(_=new Int32Array(c));const A=new Int32Array(c),N=[];l=0,c=0,h=0;const F=(R,L,H,Z,j,G,K)=>{let Y=-1;const U=R.vertexX[L],k=R.vertexY[L],q=R.vertexZ[L];for(let oe=0;oe<K;oe++)if(U===H[oe]&&k===Z[oe]&&q===j[oe]){Y=oe;break}return Y===-1&&(H[K]=U,Z[K]=k,j[K]=q,G&&R.vertexLabel&&(G[K]=R.vertexLabel[L]),Y=K++),{vertex:Y,vertexCount:K}};for(let R=0;R<t;R++){const L=e[R];if(L){const H=l,Z=c,j=h,G=new Map;for(let Y=0;Y<L.faceCount;Y++){i&&(L.faceInfo?T&&(T[c]=L.faceInfo[Y]):T&&(T[c]=0)),r&&(L.facePriority?b&&(b[c]=L.facePriority[Y]):b&&(b[c]=L.priorityVal)),o&&(L.faceAlpha?P&&(P[c]=L.faceAlpha[Y]):P&&(P[c]=0)),s&&L.faceLabel&&_&&(_[c]=L.faceLabel[Y]),L.faceColor&&(A[c]=L.faceColor[Y]);const U=F(L,L.faceVertexA[Y],g,m,p,x,l);G.has(L.faceVertexA[Y])||G.set(L.faceVertexA[Y],U.vertex),l=U.vertexCount;const k=F(L,L.faceVertexB[Y],g,m,p,x,l);G.has(L.faceVertexB[Y])||G.set(L.faceVertexB[Y],k.vertex),l=k.vertexCount;const q=F(L,L.faceVertexC[Y],g,m,p,x,l);G.has(L.faceVertexC[Y])||G.set(L.faceVertexC[Y],q.vertex),l=q.vertexCount,u[c]=U.vertex,d[c]=k.vertex,y[c]=q.vertex,c++}for(let Y=0;Y<L.texturedFaceCount;Y++){const U=F(L,L.texturedVertexA[Y],g,m,p,x,l);G.has(L.texturedVertexA[Y])||G.set(L.texturedVertexA[Y],U.vertex),l=U.vertexCount;const k=F(L,L.texturedVertexB[Y],g,m,p,x,l);G.has(L.texturedVertexB[Y])||G.set(L.texturedVertexB[Y],k.vertex),l=k.vertexCount;const q=F(L,L.texturedVertexC[Y],g,m,p,x,l);G.has(L.texturedVertexC[Y])||G.set(L.texturedVertexC[Y],q.vertex),l=q.vertexCount,v[h]=U.vertex,M[h]=k.vertex,S[h]=q.vertex,h++}const K=n&&n[R]?n[R]:`part_${R}`;N.push({partIndex:R,originalModel:L,originalModelName:K,vertexOffset:H,vertexCount:l-H,faceOffset:Z,faceCount:c-Z,texturedFaceOffset:j,texturedFaceCount:h-j,vertexMapping:G})}}const D=new ae({vertexCount:l,vertexX:g,vertexY:m,vertexZ:p,faceCount:c,faceVertexA:u,faceVertexB:d,faceVertexC:y,faceColorA:null,faceColorB:null,faceColorC:null,faceInfo:T,facePriority:b,faceAlpha:P,faceColor:A,priorityVal:f,texturedFaceCount:h,texturedVertexA:v,texturedVertexB:M,texturedVertexC:S,vertexLabel:x,faceLabel:_});return D.partMapping={parts:N,isNpcModel:!1},D.faceColor&&(D.originalFaceColor=new Int32Array(D.faceColor)),D}static modelFromNpcModels(e,t,n,i){const r=ae.modelFromModels(e,t,i);return r.partMapping&&(r.partMapping.isNpcModel=!0,r.partMapping.npcId=n),r}exportNpcParts(){if(!this.partMapping||!this.partMapping.isNpcModel)return null;const e=new Map;for(const t of this.partMapping.parts){const n=this.extractModelPart(t);if(n){const i=n.exportToOb2();e.set(t.partIndex,i)}}return e}extractModelPart(e){return this.partMapping?e.originalModel.clone():null}updateVertex(e,t,n,i){e>=0&&e<this.vertexCount&&(this.vertexX[e]=t,this.vertexY[e]=n,this.vertexZ[e]=i,this.currentScaleX!==128||this.currentScaleY!==128||this.currentScaleZ!==128?(this.originalVertexX[e]=t*128/this.baseScaleX|0,this.originalVertexY[e]=n*128/this.baseScaleY|0,this.originalVertexZ[e]=i*128/this.baseScaleZ|0):(this.originalVertexX[e]=t,this.originalVertexY[e]=n,this.originalVertexZ[e]=i),this.partMapping&&this.partMapping.isNpcModel&&this.updateAllPartVertices())}updateAllPartVertices(){if(this.partMapping)for(const e of this.partMapping.parts)this.updatePartVertices(e)}updatePartVertices(e){for(const[t,n]of e.vertexMapping)n<this.vertexCount&&(e.originalModel.vertexX[t]=this.vertexX[n],e.originalModel.vertexY[t]=this.vertexY[n],e.originalModel.vertexZ[t]=this.vertexZ[n]);e.originalModel.originalVertexX=new Int32Array(e.originalModel.vertexX),e.originalModel.originalVertexY=new Int32Array(e.originalModel.vertexY),e.originalModel.originalVertexZ=new Int32Array(e.originalModel.vertexZ)}calculateBoundsCylinder(){this.maxY=0,this.radius=0,this.minY=0;for(let e=0;e<this.vertexCount;e++){const t=this.vertexX[e],n=this.vertexY[e],i=this.vertexZ[e];-n>this.maxY&&(this.maxY=-n),n>this.minY&&(this.minY=n);const r=t*t+i*i;r>this.radius&&(this.radius=r)}this.radius=Math.sqrt(this.radius)+.99|0,this.minDepth=Math.sqrt(this.radius*this.radius+this.maxY*this.maxY)+.99|0,this.maxDepth=this.minDepth+(Math.sqrt(this.radius*this.radius+this.minY*this.minY)+.99|0)}calculateBoundsY(){this.maxY=0,this.minY=0;for(let e=0;e<this.vertexCount;e++){const t=this.vertexY[e];-t>this.maxY&&(this.maxY=-t),t>this.minY&&(this.minY=t)}this.minDepth=Math.sqrt(this.radius*this.radius+this.maxY*this.maxY)+.99|0,this.maxDepth=this.minDepth+(Math.sqrt(this.radius*this.radius+this.minY*this.minY)+.99|0)}createLabelReferences(){if(this.vertexLabel){const e=new Int32Array(256);let t=0;for(let i=0;i<this.vertexCount;i++){const r=this.vertexLabel[i];e[r]++,r>t&&(t=r)}this.labelVertices=new Qt(t+1,null);for(let i=0;i<=t;i++)this.labelVertices[i]=new Int32Array(e[i]),e[i]=0;let n=0;for(;n<this.vertexCount;){const i=this.vertexLabel[n],r=this.labelVertices[i];r&&(r[e[i]++]=n++)}this.vertexLabel=null}if(this.faceLabel){const e=new Int32Array(256);let t=0;for(let i=0;i<this.faceCount;i++){const r=this.faceLabel[i];e[r]++,r>t&&(t=r)}this.labelFaces=new Qt(t+1,null);for(let i=0;i<=t;i++)this.labelFaces[i]=new Int32Array(e[i]),e[i]=0;let n=0;for(;n<this.faceCount;){const i=this.faceLabel[n],r=this.labelFaces[i];r&&(r[e[i]++]=n++)}this.faceLabel=null}}applyTransforms(e,t,n){if(e!==-1)if(!n||t===-1)this.applyTransform(e);else{const i=Ke.instances[e],r=Ke.instances[t],o=i.base;ae.baseX=0,ae.baseY=0,ae.baseZ=0;let s=0,l=n[s++];for(let c=0;c<i.frameLength;c++){if(!i.bases)continue;const h=i.bases[c];for(;h>l;)l=n[s++];o&&o.animTypes&&i.x&&i.y&&i.z&&o.animLabels&&(h!==l||o.animTypes[h]===0)&&this.applyTransform2(i.x[c],i.y[c],i.z[c],o.animLabels[h],o.animTypes[h])}ae.baseX=0,ae.baseY=0,ae.baseZ=0,s=0,l=n[s++];for(let c=0;c<r.frameLength;c++){if(!r.bases)continue;const h=r.bases[c];for(;h>l;)l=n[s++];o&&o.animTypes&&r.x&&r.y&&r.z&&o.animLabels&&(h===l||o.animTypes[h]===0)&&this.applyTransform2(r.x[c],r.y[c],r.z[c],o.animLabels[h],o.animTypes[h])}}}applyTransform(e){if(!this.labelVertices||e===-1||!Ke.instances[e])return;const t=Ke.instances[e],n=t.base;ae.baseX=0,ae.baseY=0,ae.baseZ=0;for(let i=0;i<t.frameLength;i++){if(!t.bases||!t.x||!t.y||!t.z||!n||!n.animLabels||!n.animTypes)continue;const r=t.bases[i];this.applyTransform2(t.x[i],t.y[i],t.z[i],n.animLabels[r],n.animTypes[r])}}rotateY90(){for(let e=0;e<this.vertexCount;e++){const t=this.vertexX[e];this.vertexX[e]=this.vertexZ[e],this.vertexZ[e]=-t}}rotateX(e){const t=lt.sin[e],n=lt.cos[e];for(let i=0;i<this.vertexCount;i++){const r=this.vertexY[i]*n-this.vertexZ[i]*t>>16;this.vertexZ[i]=this.vertexY[i]*t+this.vertexZ[i]*n>>16,this.vertexY[i]=r}}translateModel(e,t,n){for(let i=0;i<this.vertexCount;i++)this.vertexX[i]+=t,this.vertexY[i]+=e,this.vertexZ[i]+=n}recolor(e,t){if(this.faceColor)for(let n=0;n<this.faceCount;n++)this.faceColor[n]===e&&(this.faceColor[n]=t)}rotateY180(){for(let e=0;e<this.vertexCount;e++)this.vertexZ[e]=-this.vertexZ[e];for(let e=0;e<this.faceCount;e++){const t=this.faceVertexA[e];this.faceVertexA[e]=this.faceVertexC[e],this.faceVertexC[e]=t}}scale(e,t,n){this.currentScaleX=e,this.currentScaleY=t,this.currentScaleZ=n,this.baseScaleX===128&&this.baseScaleY===128&&this.baseScaleZ===128&&(this.baseScaleX=e,this.baseScaleY=t,this.baseScaleZ=n);for(let i=0;i<this.vertexCount;i++)this.vertexX[i]=this.vertexX[i]*e/128|0,this.vertexY[i]=this.vertexY[i]*t/128|0,this.vertexZ[i]=this.vertexZ[i]*n/128|0}calculateNormals(e,t,n,i,r,o){const s=Math.sqrt(n*n+i*i+r*r)|0,l=t*s>>8;if((!this.faceColorA||!this.faceColorB||!this.faceColorC)&&(this.faceColorA=new Int32Array(this.faceCount),this.faceColorB=new Int32Array(this.faceCount),this.faceColorC=new Int32Array(this.faceCount)),!this.vertexNormal){this.vertexNormal=new Qt(this.vertexCount,null);for(let c=0;c<this.vertexCount;c++)this.vertexNormal[c]=new bi}for(let c=0;c<this.faceCount;c++){const h=this.faceVertexA[c],f=this.faceVertexB[c],g=this.faceVertexC[c],m=this.vertexX[f]-this.vertexX[h],p=this.vertexY[f]-this.vertexY[h],x=this.vertexZ[f]-this.vertexZ[h],u=this.vertexX[g]-this.vertexX[h],d=this.vertexY[g]-this.vertexY[h],y=this.vertexZ[g]-this.vertexZ[h];let v=p*y-d*x,M=x*u-y*m,S=m*d-u*p;for(;v>8192||M>8192||S>8192||v<-8192||M<-8192||S<-8192;)v>>=1,M>>=1,S>>=1;let T=Math.sqrt(v*v+M*M+S*S)|0;if(T<=0&&(T=1),v=v*256/T|0,M=M*256/T|0,S=S*256/T|0,!this.faceInfo||!(this.faceInfo[c]&1)){let b=this.vertexNormal[h];b&&(b.x+=v,b.y+=M,b.z+=S,b.w++),b=this.vertexNormal[f],b&&(b.x+=v,b.y+=M,b.z+=S,b.w++),b=this.vertexNormal[g],b&&(b.x+=v,b.y+=M,b.z+=S,b.w++)}else{const b=e+((n*v+i*M+r*S)/(l+(l/2|0))|0);this.faceColor&&(this.faceColorA[c]=ae.mulColorLightness(this.faceColor[c],b,this.faceInfo[c]))}}if(o)this.applyLighting(e,l,n,i,r);else{this.vertexNormalOriginal=new Qt(this.vertexCount,null);for(let c=0;c<this.vertexCount;c++){const h=this.vertexNormal[c],f=new bi;h&&(f.x=h.x,f.y=h.y,f.z=h.z,f.w=h.w),this.vertexNormalOriginal[c]=f}}o?this.calculateBoundsCylinder():this.calculateBoundsAABB()}applyLighting(e,t,n,i,r){for(let o=0;o<this.faceCount;o++){const s=this.faceVertexA[o],l=this.faceVertexB[o],c=this.faceVertexC[o];if(!this.faceInfo&&this.faceColor&&this.vertexNormal&&this.faceColorA&&this.faceColorB&&this.faceColorC){const h=this.faceColor[o],f=this.vertexNormal[s];f&&(this.faceColorA[o]=ae.mulColorLightness(h,e+((n*f.x+i*f.y+r*f.z)/(t*f.w)|0),0));const g=this.vertexNormal[l];g&&(this.faceColorB[o]=ae.mulColorLightness(h,e+((n*g.x+i*g.y+r*g.z)/(t*g.w)|0),0));const m=this.vertexNormal[c];m&&(this.faceColorC[o]=ae.mulColorLightness(h,e+((n*m.x+i*m.y+r*m.z)/(t*m.w)|0),0))}else if(this.faceInfo&&!(this.faceInfo[o]&1)&&this.faceColor&&this.vertexNormal&&this.faceColorA&&this.faceColorB&&this.faceColorC){const h=this.faceColor[o],f=this.faceInfo[o],g=this.vertexNormal[s];g&&(this.faceColorA[o]=ae.mulColorLightness(h,e+((n*g.x+i*g.y+r*g.z)/(t*g.w)|0),f));const m=this.vertexNormal[l];m&&(this.faceColorB[o]=ae.mulColorLightness(h,e+((n*m.x+i*m.y+r*m.z)/(t*m.w)|0),f));const p=this.vertexNormal[c];p&&(this.faceColorC[o]=ae.mulColorLightness(h,e+((n*p.x+i*p.y+r*p.z)/(t*p.w)|0),f))}}if(this.vertexNormal=null,this.vertexNormalOriginal=null,this.vertexLabel=null,this.faceLabel=null,this.faceInfo){for(let o=0;o<this.faceCount;o++)if((this.faceInfo[o]&2)===2)return}}static rgb15to24(e){const t=e>>10&31,n=e>>5&31,i=e&31;return(t<<3<<16)+(n<<3<<8)+(i<<3)}applyTransform2(e,t,n,i,r){if(!i)return;const o=i.length;if(r===0){let s=0;ae.baseX=0,ae.baseY=0,ae.baseZ=0;for(let l=0;l<o;l++){if(!this.labelVertices)continue;const c=i[l];if(c<this.labelVertices.length){const h=this.labelVertices[c];if(h)for(let f=0;f<h.length;f++){const g=h[f];ae.baseX+=this.vertexX[g],ae.baseY+=this.vertexY[g],ae.baseZ+=this.vertexZ[g],s++}}}s>0?(ae.baseX=(ae.baseX/s|0)+e,ae.baseY=(ae.baseY/s|0)+t,ae.baseZ=(ae.baseZ/s|0)+n):(ae.baseX=e,ae.baseY=t,ae.baseZ=n)}else if(r===1)for(let s=0;s<o;s++){const l=i[s];if(!this.labelVertices||l>=this.labelVertices.length)continue;const c=this.labelVertices[l];if(c)for(let h=0;h<c.length;h++){const f=c[h];this.vertexX[f]+=e,this.vertexY[f]+=t,this.vertexZ[f]+=n}}else if(r===2)for(let s=0;s<o;s++){const l=i[s];if(!this.labelVertices||l>=this.labelVertices.length)continue;const c=this.labelVertices[l];if(c)for(let h=0;h<c.length;h++){const f=c[h];this.vertexX[f]-=ae.baseX,this.vertexY[f]-=ae.baseY,this.vertexZ[f]-=ae.baseZ;const g=(e&255)*8,m=(t&255)*8,p=(n&255)*8;let x,u;if(p!==0){x=lt.sin[p],u=lt.cos[p];const d=this.vertexY[f]*x+this.vertexX[f]*u>>16;this.vertexY[f]=this.vertexY[f]*u-this.vertexX[f]*x>>16,this.vertexX[f]=d}if(g!==0){x=lt.sin[g],u=lt.cos[g];const d=this.vertexY[f]*u-this.vertexZ[f]*x>>16;this.vertexZ[f]=this.vertexY[f]*x+this.vertexZ[f]*u>>16,this.vertexY[f]=d}if(m!==0){x=lt.sin[m],u=lt.cos[m];const d=this.vertexZ[f]*x+this.vertexX[f]*u>>16;this.vertexZ[f]=this.vertexZ[f]*u-this.vertexX[f]*x>>16,this.vertexX[f]=d}this.vertexX[f]+=ae.baseX,this.vertexY[f]+=ae.baseY,this.vertexZ[f]+=ae.baseZ}}else if(r===3)for(let s=0;s<o;s++){const l=i[s];if(!this.labelVertices||l>=this.labelVertices.length)continue;const c=this.labelVertices[l];if(c)for(let h=0;h<c.length;h++){const f=c[h];this.vertexX[f]-=ae.baseX,this.vertexY[f]-=ae.baseY,this.vertexZ[f]-=ae.baseZ,this.vertexX[f]=this.vertexX[f]*e/128|0,this.vertexY[f]=this.vertexY[f]*t/128|0,this.vertexZ[f]=this.vertexZ[f]*n/128|0,this.vertexX[f]+=ae.baseX,this.vertexY[f]+=ae.baseY,this.vertexZ[f]+=ae.baseZ}}else if(r===5&&this.labelFaces&&this.faceAlpha)for(let s=0;s<o;s++){const l=i[s];if(l>=this.labelFaces.length)continue;const c=this.labelFaces[l];if(c)for(let h=0;h<c.length;h++){const f=c[h];this.faceAlpha[f]+=e*8,this.faceAlpha[f]<0&&(this.faceAlpha[f]=0),this.faceAlpha[f]>255&&(this.faceAlpha[f]=255)}}}calculateBoundsAABB(){this.maxY=0,this.radius=0,this.minY=0,this.minX=999999,this.maxX=-999999,this.maxZ=-99999,this.minZ=99999;for(let e=0;e<this.vertexCount;e++){const t=this.vertexX[e],n=this.vertexY[e],i=this.vertexZ[e];t<this.minX&&(this.minX=t),t>this.maxX&&(this.maxX=t),i<this.minZ&&(this.minZ=i),i>this.maxZ&&(this.maxZ=i),-n>this.maxY&&(this.maxY=-n),n>this.minY&&(this.minY=n);const r=t*t+i*i;r>this.radius&&(this.radius=r)}this.radius=Math.sqrt(this.radius)|0,this.minDepth=Math.sqrt(this.radius*this.radius+this.maxY*this.maxY)|0,this.maxDepth=this.minDepth+(Math.sqrt(this.radius*this.radius+this.minY*this.minY)|0)}clone(){const e={vertexCount:this.vertexCount,vertexX:new Int32Array(this.vertexX),vertexY:new Int32Array(this.vertexY),vertexZ:new Int32Array(this.vertexZ),faceCount:this.faceCount,faceVertexA:new Int32Array(this.faceVertexA),faceVertexB:new Int32Array(this.faceVertexB),faceVertexC:new Int32Array(this.faceVertexC),faceColorA:this.faceColorA?new Int32Array(this.faceColorA):null,faceColorB:this.faceColorB?new Int32Array(this.faceColorB):null,faceColorC:this.faceColorC?new Int32Array(this.faceColorC):null,faceInfo:this.faceInfo?new Int32Array(this.faceInfo):null,facePriority:this.facePriority?new Int32Array(this.facePriority):null,faceAlpha:this.faceAlpha?new Int32Array(this.faceAlpha):null,faceColor:this.faceColor?new Int32Array(this.faceColor):null,priorityVal:this.priorityVal,texturedFaceCount:this.texturedFaceCount,texturedVertexA:new Int32Array(this.texturedVertexA),texturedVertexB:new Int32Array(this.texturedVertexB),texturedVertexC:new Int32Array(this.texturedVertexC),minX:this.minX,maxX:this.maxX,minZ:this.minZ,maxZ:this.maxZ,radius:this.radius,minY:this.minY,maxY:this.maxY,maxDepth:this.maxDepth,minDepth:this.minDepth,vertexLabel:this.vertexLabel?new Int32Array(this.vertexLabel):null,faceLabel:this.faceLabel?new Int32Array(this.faceLabel):null,labelVertices:null,labelFaces:null,vertexNormal:null,vertexNormalOriginal:null},t=new ae(e);if(t.currentScaleX=this.currentScaleX,t.currentScaleY=this.currentScaleY,t.currentScaleZ=this.currentScaleZ,t.baseScaleX=this.baseScaleX,t.baseScaleY=this.baseScaleY,t.baseScaleZ=this.baseScaleZ,this.partMapping&&(t.partMapping={parts:this.partMapping.parts.map(n=>({...n,originalModel:n.originalModel.clone(),vertexMapping:new Map(n.vertexMapping)})),isNpcModel:this.partMapping.isNpcModel,npcId:this.partMapping.npcId}),t.originalVertexX=new Int32Array(this.originalVertexX),t.originalVertexY=new Int32Array(this.originalVertexY),t.originalVertexZ=new Int32Array(this.originalVertexZ),this.originalFaceColor?t.originalFaceColor=new Int32Array(this.originalFaceColor):this.faceColor&&(t.originalFaceColor=new Int32Array(this.faceColor)),this.labelVertices&&(t.labelVertices=this.labelVertices.map(n=>n?new Int32Array(n):null)),this.labelFaces&&(t.labelFaces=this.labelFaces.map(n=>n?new Int32Array(n):null)),this.vertexNormal&&(t.vertexNormal=this.vertexNormal.map(n=>{if(n){const i=new bi;return i.x=n.x,i.y=n.y,i.z=n.z,i.w=n.w,i}return null})),this.vertexNormalOriginal&&(t.vertexNormalOriginal=this.vertexNormalOriginal.map(n=>{if(n){const i=new bi;return i.x=n.x,i.y=n.y,i.z=n.z,i.w=n.w,i}return null})),t.objRaise=this.objRaise,t.pickable=this.pickable,t.pickedFace=this.pickedFace,t.pickedFaceDepth=this.pickedFaceDepth,t.faceTextures.set(this.faceTextures),t.textureCoords.set(this.textureCoords),this.uvCoords)for(let n=0;n<t.faceCount;n++)this.uvCoords[n]&&t.uvCoords[n]&&t.uvCoords[n].set(this.uvCoords[n]);return t.hadOriginalFaceLabels=this.hadOriginalFaceLabels,t.hadOriginalVertexLabels=this.hadOriginalVertexLabels,t.hadOriginalFacePriorities=this.hadOriginalFacePriorities,t.hadOriginalFaceAlphas=this.hadOriginalFaceAlphas,t.hadOriginalFaceInfos=this.hadOriginalFaceInfos,t}};ae.modelMeta=null,ae.faceClippedX=new Qt(4096,!1),ae.faceNearClipped=new Qt(4096,!1),ae.vertexScreenX=new Int32Array(4096),ae.vertexScreenY=new Int32Array(4096),ae.vertexScreenZ=new Int32Array(4096),ae.vertexViewSpaceX=new Int32Array(4096),ae.vertexViewSpaceY=new Int32Array(4096),ae.vertexViewSpaceZ=new Int32Array(4096),ae.tmpDepthFaceCount=new Int32Array(1500),ae.tmpDepthFaces=new mr(1500,512),ae.tmpPriorityFaceCount=new Int32Array(12),ae.tmpPriorityFaces=new mr(12,2e3),ae.tmpPriority10FaceDepth=new Int32Array(2e3),ae.tmpPriority11FaceDepth=new Int32Array(2e3),ae.tmpPriorityDepthSum=new Int32Array(12),ae.clippedX=new Int32Array(10),ae.clippedY=new Int32Array(10),ae.clippedColor=new Int32Array(10),ae.baseX=0,ae.baseY=0,ae.baseZ=0,ae.checkHover=!1,ae.mouseX=0,ae.mouseY=0,ae.pickedCount=0,ae.picked=new Int32Array(1e3),ae.checkHoverFace=!1;let pi=ae;const fn=class fn{static hsl24to16(e,t,n){return n>243?t>>=4:n>217?t>>=3:n>192?t>>=2:n>179&&(t>>=1),((e&255)>>2<<10)+(t>>5<<7)+(n>>1)}static rgb15to24(e){const t=e>>10&31,n=e>>5&31,i=e&31;return(t<<3<<16)+(n<<3<<8)+(i<<3)}static rgb15toHsl16(e){const t=e>>10&31,n=e>>5&31,i=e&31,r=t/31,o=n/31,s=i/31;return fn.rgbToHsl(r,o,s)}static rgb24to15(e){const t=e>>16&255,n=e>>8&255,i=e&255;return(t>>3<<10)+(n>>3<<5)+(i>>3)}static rgb24toHsl16(e){const t=e>>16&255,n=e>>8&255,i=e&255,r=t/256,o=n/256,s=i/256;return fn.rgbToHsl(r,o,s)}static rgbToHsl(e,t,n){let i=e;t<i&&(i=t),n<i&&(i=n);let r=e;t>r&&(r=t),n>r&&(r=n);let o=0,s=0;const l=(i+r)/2;i!==r&&(l<.5?s=(r-i)/(r+i):l>=.5&&(s=(r-i)/(2-r-i)),e===r?o=(t-n)/(r-i):t===r?o=(n-e)/(r-i)+2:n===r&&(o=(e-t)/(r-i)+4)),o/=6;const c=o*256|0;let h=s*256|0,f=l*256|0;return h<0?h=0:h>255&&(h=255),f<0?f=0:f>255&&(f=255),fn.hsl24to16(c,h,f)}static reverseHsl(e){const t=[];for(let n=0;n<32768;n++)fn.RGB15_HSL16[n]===e&&t.push(n);return t}};fn.RGB15_HSL16=new Int32Array(32768),(()=>{for(let e=0;e<32768;e++)fn.RGB15_HSL16[e]=fn.rgb15toHsl16(e)})();let dn=fn;class Qo{constructor(){this.availableFiles=new Map,this.loadedModels=new Map,this.npcData=new Map,this.seqData=new Map,this.availableTextures=new Map,this.textureNameToId=new Map,this.objData=new Map,this.locData=new Map}async parseNpcFile(e){const t=await this.readFileAsText(e),n=new Map;let i=null,r=new Map,o=new Map,s=null,l=null,c=128,h=128,f=1;const g=t.split(`
`);for(let m of g){if(m=m.trim(),!m||m.startsWith("//"))continue;const p=m.match(/\[(.*?)\]/);if(p)this.saveNpcData(n,i,r,o,s,l,c,h,f),i=p[1],r.clear(),o.clear(),s=null,l=null,f=1,c=128,h=128;else if(m.startsWith("name="))s=m.substring(5).trim();else if(m.startsWith("size="))f=parseInt(m.substring(5).trim());else if(m.startsWith("desc="))l=m.substring(5).trim();else if(m.startsWith("resizeh="))c=parseInt(m.substring(8).trim());else if(m.startsWith("resizev="))h=parseInt(m.substring(8).trim());else if(m.startsWith("recol")){const x=m.match(/recol(\d+)([sd])=(\d+)/);if(x){const u=parseInt(x[1]),d=x[2],y=parseInt(x[3]);o.has(u)||o.set(u,[0,0]);const v=o.get(u);v&&d==="s"?v[0]=dn.rgb15toHsl16(y):v&&d==="d"&&(v[1]=dn.rgb15toHsl16(y))}}else if(m.startsWith("model")){const x=m.match(/model(\d+)=(.+)/);if(x){const u=parseInt(x[1]),d=x[2].trim();r.set(u,d)}}}return this.saveNpcData(n,i,r,o,s,l,c,h,f),n}saveNpcData(e,t,n,i,r,o,s,l,c){if(t!==null){const h={resizeh:s,resizev:l,size:c};if(n.size>0){const f=Math.max(...n.keys()),g=new Array(f);for(let m=1;m<=f;m++)n.has(m)&&(g[m-1]=n.get(m));h.models=g.filter(m=>m!==void 0)}if(i.size>0){const f={};for(let[g,m]of i.entries())f[g]=[...m];h.recols=f}r!==null&&(h.name=r),o!==null&&(h.desc=o),h.resizeh=s,h.resizev=l,h.size=c,e.set(t,h)}}async parseObjFile(e){const t=await this.readFileAsText(e),n=new Map;let i=null,r=null,o=new Map,s=null,l=null;const c=t.split(/\r?\n/);for(let h of c){if(h=h.trim(),!h||h.startsWith("//"))continue;const f=h.match(/\[(.*?)\]/);if(f)i&&this.saveObjData(n,i,r,o,s,l),i=f[1],r=null,o.clear(),s=null,l=null;else if(i){if(h.startsWith("name="))s=h.substring(5).trim();else if(h.startsWith("desc="))l=h.substring(5).trim();else if(h.startsWith("model="))r=h.substring(6).trim();else if(h.startsWith("recol")){const g=h.match(/recol(\d+)([sd])=(\d+)/);if(g){const m=parseInt(g[1]),p=g[2],x=parseInt(g[3]);o.has(m)||o.set(m,[0,0]);const u=o.get(m);u&&p==="s"?u[0]=dn.rgb15toHsl16(x):u&&p==="d"&&(u[1]=dn.rgb15toHsl16(x))}}}}return i&&this.saveObjData(n,i,r,o,s,l),n}saveObjData(e,t,n,i,r,o){if(t!==null){const s={};if(n!==null&&(s.model=n),i.size>0){const l={};for(let[c,h]of i.entries())l[c]=[...h];s.recols=l}r!==null&&(s.name=r),o!==null&&(s.desc=o),e.set(t,s)}}async parseLocFile(e){const t=await this.readFileAsText(e),n=new Map;let i=null,r=null,o=null,s=null,l=new Map,c=new Map,h=1,f=1,g=!1,m=!1,p=!0,x=0,u=16,d=0,y=0,v=!1,M=0,S=!1,T=!1,b=128,P=128,_=128,A=0,N=0,F=0,D=!1,R=!1,L=0,H=null,Z=null,j=null,G=null,K=null;const Y=t.split(/\r?\n/);for(let U of Y){if(U=U.trim(),!U||U.startsWith("//"))continue;const k=U.match(/\[(.*?)\]/);if(k)i&&this.saveLocData(n,i,r,o,s,l,c,h,f,g,m,p,x,u,d,y,v,M,S,T,b,P,_,A,N,F,D,R,L,H,Z,j,G,K),i=k[1],r=null,o=null,s=null,l.clear(),c.clear(),h=1,f=1,g=!1,m=!1,p=!0,x=0,u=16,d=0,y=0,v=!1,M=0,S=!1,T=!1,b=128,P=128,_=128,A=0,N=0,F=0,D=!1,R=!1,L=0,H=null,Z=null,j=null,G=null,K=null;else if(i){if(U.startsWith("name="))r=U.substring(5).trim();else if(U.startsWith("desc="))o=U.substring(5).trim();else if(U.startsWith("model="))s=U.substring(6).trim();else if(U.startsWith("width="))h=parseInt(U.substring(6).trim())||1;else if(U.startsWith("length="))f=parseInt(U.substring(7).trim())||1;else if(U.startsWith("hillskew="))g=U.substring(9).trim().toLowerCase()==="yes";else if(U.startsWith("sharelight="))m=U.substring(11).trim().toLowerCase()==="yes";else if(U.startsWith("occlude="))p=U.substring(8).trim().toLowerCase()!=="no";else if(U.startsWith("anim="))x=parseInt(U.substring(5).trim())||0;else if(U.startsWith("wallwidth="))u=parseInt(U.substring(10).trim())||16;else if(U.startsWith("ambient="))d=parseInt(U.substring(8).trim())||0;else if(U.startsWith("contrast="))y=parseInt(U.substring(9).trim())||0;else if(U.startsWith("mapfunction="))M=parseInt(U.substring(12).trim())||0;else if(U.startsWith("mirror="))S=U.substring(7).trim().toLowerCase()==="yes";else if(U.startsWith("resizex="))b=parseInt(U.substring(8).trim())||128;else if(U.startsWith("resizey="))P=parseInt(U.substring(8).trim())||128;else if(U.startsWith("resizez="))_=parseInt(U.substring(8).trim())||128;else if(U.startsWith("offsetx="))A=parseInt(U.substring(8).trim())||0;else if(U.startsWith("offsety="))N=parseInt(U.substring(8).trim())||0;else if(U.startsWith("offsetz="))F=parseInt(U.substring(8).trim())||0;else if(U.startsWith("forcedecor="))D=U.substring(11).trim().toLowerCase()==="yes";else if(U.startsWith("active="))R=U.substring(7).trim().toLowerCase()==="yes";else if(U.startsWith("mapscene="))L=parseInt(U.substring(9).trim())||0;else if(U.startsWith("op1="))H=U.substring(4).trim();else if(U.startsWith("op2="))Z=U.substring(4).trim();else if(U.startsWith("category="))j=U.substring(9).trim();else if(U.startsWith("blockrange="))G=U.substring(11).trim().toLowerCase()!=="yes";else if(U.startsWith("forceapproach="))K=U.substring(14).trim();else if(U.startsWith("recol")){const q=U.match(/recol(\d+)([sd])=(\d+)/);if(q){const oe=parseInt(q[1]),de=q[2],se=parseInt(q[3]);l.has(oe)||l.set(oe,[0,0]);const he=l.get(oe);he&&de==="s"?he[0]=dn.rgb15toHsl16(se):he&&de==="d"&&(he[1]=dn.rgb15toHsl16(se))}}else if(U.startsWith("retex")){const q=U.match(/retex(\d+)([sd])=(.+)/);if(q){const oe=parseInt(q[1]),de=q[2],se=q[3].trim();c.has(oe)||c.set(oe,[null,null]);const he=c.get(oe);he&&de==="s"?he[0]=se:he&&de==="d"&&(he[1]=se)}}}}return i&&this.saveLocData(n,i,r,o,s,l,c,h,f,g,m,p,x,u,d,y,v,M,S,T,b,P,_,A,N,F,D,R,L,H,Z,j,G,K),n}saveLocData(e,t,n,i,r,o,s,l,c,h,f,g,m,p,x,u,d,y,v,M,S,T,b,P,_,A,N,F,D,R,L,H,Z,j){if(t!==null){const G={width:l,length:c,hillskew:h,sharelight:f,occlude:g,anim:m,wallwidth:p,ambient:x,contrast:u,animHasAlpha:d,mapfunction:y,mirror:v,shadow:M,resizex:S,resizey:T,resizez:b,offsetx:P,offsety:_,offsetz:A,forcedecor:N,active:F,mapscene:D};if(n!==null&&(G.name=n),i!==null&&(G.desc=i),r!==null&&(G.model=r),o.size>0){const K={};for(let[Y,U]of o.entries())K[Y]=[...U];G.recols=K}if(s.size>0){const K={};for(let[Y,U]of s.entries())K[Y]=[...U];G.retexs=K}R!==null&&(G.op1=R),L!==null&&(G.op2=L),H!==null&&(G.category=H),Z!==null&&(G.blockrange=Z),j!==null&&(G.forceapproach=j),e.set(t,G)}}async parseSeqFile(e){const t=await this.readFileAsText(e),n=new Map;let i=null,r=new Map,o=new Map,s=new Map,l,c,h=!1,f=0,g,m,p;const x=t.split(/\r?\n/);for(let u of x){if(u=u.trim(),!u||u.startsWith("//"))continue;const d=u.match(/\[(.*?)\]/);if(d)this.saveSeqData(n,i,r,o,s,l,c,h,f,g,m,p),i=d[1],r.clear(),o.clear(),s.clear(),l=void 0,c=void 0,h=!1,f=0,g=void 0,m=void 0,p=void 0;else if(i){const[y,...v]=u.split("="),M=v.join("=").trim();if(y.startsWith("frame")){const S=parseInt(y.substring(5));isNaN(S)||r.set(S,M)}else if(y.startsWith("iframe")){const S=parseInt(y.substring(6));isNaN(S)||o.set(S,M)}else if(y.startsWith("delay")){const S=parseInt(y.substring(5)),T=parseInt(M);!isNaN(S)&&!isNaN(T)&&s.set(S,T)}else y==="replayoff"?l=parseInt(M):y==="walkmerge"?c=M.split(",").map(S=>parseInt(S.trim())).filter(S=>!isNaN(S)):y==="stretches"?h=M.toLowerCase()==="yes"||M.toLowerCase()==="true":y==="priority"?f=parseInt(M):y==="righthand"?g=M:y==="lefthand"?m=M:y==="replaycount"&&(p=parseInt(M))}}return this.saveSeqData(n,i,r,o,s,l,c,h,f,g,m,p),n}saveSeqData(e,t,n,i,r,o,s,l,c,h,f,g){if(t===null)return;const m={};let p=0;if(n.size>0&&(p=Math.max(p,...n.keys())),i.size>0&&(p=Math.max(p,...i.keys())),r.size>0&&(p=Math.max(p,...r.keys())),p>0){m.frameIds=new Array(p),m.iframeIds=new Array(p),m.delayValues=new Array(p);for(let x=1;x<=p;x++){const u=n.get(x);if(!u)continue;const d=u.match(/anim_(\d+)_f(\d+)/);if(d){const v=parseInt(d[1]),M=parseInt(d[2]),S=v<<16|M;m.frameIds[x-1]=S.toString()}else m.frameIds[x-1]=u;m.iframeIds[x-1]=i.get(x);const y=r.get(x);m.delayValues[x-1]=y!==void 0?y:0}}else m.frameIds=[],m.iframeIds=[],m.delayValues=[];o!==void 0&&!isNaN(o)&&(m.replayoff=o),s!==void 0&&s.length>0&&(m.walkmerge=s),l&&(m.stretches=l),c!==void 0&&!isNaN(c)&&(m.priority=c),h!==void 0&&(m.righthand=h),f!==void 0&&(m.lefthand=f),g!==void 0&&!isNaN(g)&&(m.replaycount=g),e.set(t,m)}async loadNpcModels(e){const t=this.getNpcData(e);if(!t||!t.models)throw new Error(`NPC ${e} has no models defined`);const n=[],i=[];for(const o of t.models)try{let s=null;for(const[c]of this.availableFiles.entries())if(c.includes(o)){s=c;break}if(!s){console.warn(`Model file not found for: ${o}`);continue}const l=await this.loadNpcPartModel(s);n.push(l),i.push(o)}catch(s){console.warn(`Failed to load model component ${o} for NPC ${e}:`,s)}if(n.length===0)throw new Error(`No models could be loaded for NPC ${e}`);const r=pi.modelFromNpcModels(n,n.length,e,i);if(t.recols)for(const o in t.recols){const[s,l]=t.recols[o];r.recolor(s,l)}return r.saveCurrentVerticesAsOriginal(),(t.resizeh!==128||t.resizev!==128)&&r.scale(t.resizeh,t.resizev,t.resizeh),r.processTextureCoordinates(),r.createLabelReferences(),r.calculateNormals(64,850,-30,-50,-30,!0),r}async loadContentFiles(e){this.textureNameToId.clear(),this.availableFiles.clear(),this.loadedModels.clear(),this.npcData.clear(),this.seqData.clear(),this.locData.clear(),this.objData.clear(),this.availableTextures.clear();const t=Array.from(e).filter(p=>p.name.endsWith(".base2")),n=Array.from(e).filter(p=>p.name.endsWith(".anim2"));for(const p of t)try{const x=parseInt(p.name.split(".")[0],10),u=await this.readFileAsArrayBuffer(p),d=new Uint8Array(u);if(d.length<=1){console.warn(`Base ${x} is empty, skipping.`);continue}const y=new ce(d);Ot.convertFromDataDat2(x,y)}catch(x){console.error(`Error loading .base2: ${p.name}`,x)}for(const p of n)try{const u=(p.webkitRelativePath||p.name).split("/"),d=u[u.length-1],y=u[u.length-2],v=parseInt(y),M=parseInt(d.split(".")[0]);if(!isNaN(v)&&!isNaN(M)){const S=v<<16|M,T=await this.readFileAsArrayBuffer(p);Ke.convertFromDataDat2(S,new Uint8Array(T))}}catch(x){console.error("Failed to load anim2:",p.name,x)}const i=Array.from(e).filter(p=>p.name.toLowerCase().endsWith(".dat")),r=Array.from(e).filter(p=>p.name.toLowerCase().endsWith(".pack")),o=Array.from(e).filter(p=>p.name.toLowerCase().endsWith(".npc")),s=Array.from(e).filter(p=>p.name.toLowerCase().endsWith(".obj")),l=Array.from(e).filter(p=>p.name.toLowerCase().endsWith(".loc")),c=Array.from(e).filter(p=>p.name.toLowerCase().endsWith(".seq")),h=Array.from(e).filter(p=>p.name.toLowerCase().endsWith(".anim")),f=Array.from(e).filter(p=>p.name.toLowerCase().endsWith(".base")),g=Array.from(e).filter(p=>p.name.toLowerCase().endsWith(".frame")),m=Array.from(e).filter(p=>p.name.toLowerCase().endsWith(".png"));for(const p of r)if(p.name.toLowerCase().includes("texture")){const u=(await p.text()).split(`
`);for(const d of u){const y=d.trim();if(y&&y.includes("=")){const[v,M]=y.split("="),S=parseInt(v.trim(),10),T=M.trim();!isNaN(S)&&T&&this.textureNameToId.set(T,S)}}}for(const p of i){const x=p.webkitRelativePath||p.name;if(!String(x).includes("_unpack")){const u=x.substring(x.indexOf("/models/")+8,x.lastIndexOf("."));this.availableFiles.set(u,p)}}for(const p of m){const x=p.webkitRelativePath||p.name;if(String(x).includes("/textures/")){const u=x.substring(x.lastIndexOf("/")+1,x.lastIndexOf("."));if(this.textureNameToId.has(u)){const d=this.textureNameToId.get(u);d!==void 0&&this.availableTextures.set(d,p)}}}for(const p of o)try{const x=await this.parseNpcFile(p);for(let[u,d]of x.entries())this.npcData.set(u,d)}catch(x){console.error(`Error processing NPC file ${p.name}:`,x)}for(const p of s)try{const x=await this.parseObjFile(p);for(let[u,d]of x.entries())this.objData.set(u,d)}catch(x){console.error(`Error processing OBJ file ${p.name}:`,x)}for(const p of l)try{const x=await this.parseLocFile(p);for(let[u,d]of x.entries())this.locData.set(u,d)}catch(x){console.error(`Error processing LOC file ${p.name}:`,x)}for(const p of c)try{const x=await this.parseSeqFile(p);for(let[u,d]of x.entries())this.seqData.set(u,d)}catch(x){console.error(`Error processing SEQ file ${p.name}:`,x)}for(const p of h)try{const x=p.name.split("_"),u=x[x.length-1],d=parseInt(u,10);await this.convertAnimset(d,p)}catch(x){console.error(`Error processing Animset file ${p.name}:`,x)}for(const p of f)try{const x=p.name.split("_"),u=x[x.length-1],d=parseInt(u,10);await this.convertBase(d,p)}catch(x){console.error(`Error processing Frame file ${p.name}:`,x)}for(const p of g)try{const x=p.name.split("_"),u=x[x.length-1],d=parseInt(u,10);await this.convertFrame(d,p)}catch(x){console.error(`Error processing Frame file ${p.name}:`,x)}}async loadModel(e){if(this.loadedModels.has(e)){const n=this.loadedModels.get(e);if(n)return n}const t=this.availableFiles.get(e);if(!t)throw new Error(`Model file not found: ${e}`);try{const n=await this.convertModel(t);return n.processTextureCoordinates(),n.createLabelReferences(),n.calculateNormals(64,768,-50,-10,-50,!0),n.saveCurrentVerticesAsOriginal(),this.loadedModels.set(e,n),n}catch(n){throw console.error(`Failed to load model '${e}': ${n}`),n}}async loadNpcPartModel(e){if(this.loadedModels.has("part_"+e)){const n=this.loadedModels.get("part_"+e);if(n)return n}const t=this.availableFiles.get(e);if(!t)throw new Error(`Model file not found for NPC part: ${e}`);try{const n=await this.convertModel(t);return this.loadedModels.set("part_"+e,n),n}catch(n){throw n}}async convertModel(e){const t=await this.readFileAsArrayBuffer(e),n=new Uint8Array(t),i=new ce(n);return pi.convertFromData(i)}async convertAnimset(e,t){const n=await this.readFileAsArrayBuffer(t),i=new Uint8Array(n);Jt.convertFromData(e,i)}async convertBase(e,t){const n=await this.readFileAsArrayBuffer(t),i=new Uint8Array(n),r=new ce(i);Ot.convertFromData(e,r)}async convertFrame(e,t){const n=await this.readFileAsArrayBuffer(t),i=new Uint8Array(n),r=new ce(i);if(Ke.convertFromData(e,r),Ke.instances&&Ke.instances[e]){const o=Ke.instances[e];o.originalPath=t.webkitRelativePath||t.name,o.originalFileName=t.name}}getAvailableModels(){return Array.from(this.availableFiles.keys()).sort()}getLoadedModels(){return this.loadedModels}getNpcData(e){return this.npcData.get(e)}getAllNpcs(){return Array.from(this.npcData.keys()).sort()}getAllSeqs(){return Array.from(this.seqData.keys()).sort()}getSeqData(e){return this.seqData.get(e)}getObjData(e){return this.objData.get(e)}getAllObjs(){return Array.from(this.objData.keys()).sort()}getLocData(e){return this.locData.get(e)}getAllLocs(){return Array.from(this.locData.keys()).sort()}getTextureIdByName(e){return this.textureNameToId.get(e)}async readFileAsArrayBuffer(e){return new Promise((t,n)=>{const i=new FileReader;i.onload=r=>t(r.target.result),i.onerror=n,i.readAsArrayBuffer(e)})}async readFileAsText(e){return new Promise((t,n)=>{const i=new FileReader;i.onload=r=>t(r.target.result),i.onerror=n,i.readAsText(e)})}}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ss="160",el=0,Hs=1,tl=2,fo=1,nl=2,cn=3,Tn=0,Lt=1,qt=2,bn=0,Bn=1,ks=2,Gs=3,Ws=4,il=5,Un=100,rl=101,sl=102,Xs=103,Ys=104,al=200,ol=201,ll=202,cl=203,cs=204,hs=205,hl=206,fl=207,dl=208,ul=209,pl=210,ml=211,gl=212,xl=213,vl=214,_l=0,yl=1,Ml=2,gr=3,Sl=4,bl=5,El=6,Al=7,uo=0,Tl=1,wl=2,mn=0,Cl=1,Ll=2,Rl=3,Il=4,Pl=5,Dl=6,po=300,mi=301,gi=302,fs=303,ds=304,Sr=306,Pi=1e3,$t=1001,us=1002,Tt=1003,qs=1004,Ir=1005,Bt=1006,Fl=1007,Di=1008,En=1009,Ul=1010,Nl=1011,bs=1012,mo=1013,Mn=1014,Sn=1015,Fi=1016,go=1017,xo=1018,Vn=1020,Ol=1021,Ht=1023,Bl=1024,Vl=1025,zn=1026,xi=1027,zl=1028,vo=1029,Hl=1030,_o=1031,yo=1033,Pr=33776,Dr=33777,Fr=33778,Ur=33779,$s=35840,Zs=35841,js=35842,Ks=35843,Mo=36196,Js=37492,Qs=37496,ea=37808,ta=37809,na=37810,ia=37811,ra=37812,sa=37813,aa=37814,oa=37815,la=37816,ca=37817,ha=37818,fa=37819,da=37820,ua=37821,Nr=36492,pa=36494,ma=36495,kl=36283,ga=36284,xa=36285,va=36286,So=3e3,Hn=3001,Gl=3200,Wl=3201,Xl=0,Yl=1,kt="",gt="srgb",tn="srgb-linear",Es="display-p3",br="display-p3-linear",xr="linear",rt="srgb",vr="rec709",_r="p3",Wn=7680,_a=519,ql=512,$l=513,Zl=514,bo=515,jl=516,Kl=517,Jl=518,Ql=519,ps=35044,ya="300 es",ms=1035,pn=2e3,yr=2001;class _i{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const _t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Or=Math.PI/180,gs=180/Math.PI;function An(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(_t[a&255]+_t[a>>8&255]+_t[a>>16&255]+_t[a>>24&255]+"-"+_t[e&255]+_t[e>>8&255]+"-"+_t[e>>16&15|64]+_t[e>>24&255]+"-"+_t[t&63|128]+_t[t>>8&255]+"-"+_t[t>>16&255]+_t[t>>24&255]+_t[n&255]+_t[n>>8&255]+_t[n>>16&255]+_t[n>>24&255]).toLowerCase()}function wt(a,e,t){return Math.max(e,Math.min(t,a))}function ec(a,e){return(a%e+e)%e}function Br(a,e,t){return(1-t)*a+t*e}function Ma(a){return(a&a-1)===0&&a!==0}function xs(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function un(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function et(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}class We{constructor(e=0,t=0){We.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(wt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ke{constructor(e,t,n,i,r,o,s,l,c){ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,s,l,c)}set(e,t,n,i,r,o,s,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=s,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],s=n[3],l=n[6],c=n[1],h=n[4],f=n[7],g=n[2],m=n[5],p=n[8],x=i[0],u=i[3],d=i[6],y=i[1],v=i[4],M=i[7],S=i[2],T=i[5],b=i[8];return r[0]=o*x+s*y+l*S,r[3]=o*u+s*v+l*T,r[6]=o*d+s*M+l*b,r[1]=c*x+h*y+f*S,r[4]=c*u+h*v+f*T,r[7]=c*d+h*M+f*b,r[2]=g*x+m*y+p*S,r[5]=g*u+m*v+p*T,r[8]=g*d+m*M+p*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],s=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*s*c-n*r*h+n*s*l+i*r*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],s=e[5],l=e[6],c=e[7],h=e[8],f=h*o-s*c,g=s*l-h*r,m=c*r-o*l,p=t*f+n*g+i*m;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/p;return e[0]=f*x,e[1]=(i*c-h*n)*x,e[2]=(s*n-i*o)*x,e[3]=g*x,e[4]=(h*t-i*l)*x,e[5]=(i*r-s*t)*x,e[6]=m*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,s){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*s)+o+e,-i*c,i*l,-i*(-c*o+l*s)+s+t,0,0,1),this}scale(e,t){return this.premultiply(Vr.makeScale(e,t)),this}rotate(e){return this.premultiply(Vr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Vr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Vr=new ke;function Eo(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function Ui(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function tc(){const a=Ui("canvas");return a.style.display="block",a}const Sa={};function Ii(a){a in Sa||(Sa[a]=!0,console.warn(a))}const ba=new ke().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ea=new ke().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ki={[tn]:{transfer:xr,primaries:vr,toReference:a=>a,fromReference:a=>a},[gt]:{transfer:rt,primaries:vr,toReference:a=>a.convertSRGBToLinear(),fromReference:a=>a.convertLinearToSRGB()},[br]:{transfer:xr,primaries:_r,toReference:a=>a.applyMatrix3(Ea),fromReference:a=>a.applyMatrix3(ba)},[Es]:{transfer:rt,primaries:_r,toReference:a=>a.convertSRGBToLinear().applyMatrix3(Ea),fromReference:a=>a.applyMatrix3(ba).convertLinearToSRGB()}},nc=new Set([tn,br]),Ze={enabled:!0,_workingColorSpace:tn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(a){if(!nc.has(a))throw new Error(`Unsupported working color space, "${a}".`);this._workingColorSpace=a},convert:function(a,e,t){if(this.enabled===!1||e===t||!e||!t)return a;const n=ki[e].toReference,i=ki[t].fromReference;return i(n(a))},fromWorkingColorSpace:function(a,e){return this.convert(a,this._workingColorSpace,e)},toWorkingColorSpace:function(a,e){return this.convert(a,e,this._workingColorSpace)},getPrimaries:function(a){return ki[a].primaries},getTransfer:function(a){return a===kt?xr:ki[a].transfer}};function ui(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function zr(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let Xn;class Ao{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Xn===void 0&&(Xn=Ui("canvas")),Xn.width=e.width,Xn.height=e.height;const n=Xn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Xn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ui("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=ui(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ui(t[n]/255)*255):t[n]=ui(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ic=0;class To{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ic++}),this.uuid=An(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,s=i.length;o<s;o++)i[o].isDataTexture?r.push(Hr(i[o].image)):r.push(Hr(i[o]))}else r=Hr(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Hr(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?Ao.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let rc=0;class Ct extends _i{constructor(e=Ct.DEFAULT_IMAGE,t=Ct.DEFAULT_MAPPING,n=$t,i=$t,r=Bt,o=Di,s=Ht,l=En,c=Ct.DEFAULT_ANISOTROPY,h=kt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rc++}),this.uuid=An(),this.name="",this.source=new To(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=s,this.internalFormat=null,this.type=l,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Ii("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Hn?gt:kt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==po)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Pi:e.x=e.x-Math.floor(e.x);break;case $t:e.x=e.x<0?0:1;break;case us:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Pi:e.y=e.y-Math.floor(e.y);break;case $t:e.y=e.y<0?0:1;break;case us:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ii("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===gt?Hn:So}set encoding(e){Ii("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Hn?gt:kt}}Ct.DEFAULT_IMAGE=null;Ct.DEFAULT_MAPPING=po;Ct.DEFAULT_ANISOTROPY=1;class xt{constructor(e=0,t=0,n=0,i=1){xt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],h=l[4],f=l[8],g=l[1],m=l[5],p=l[9],x=l[2],u=l[6],d=l[10];if(Math.abs(h-g)<.01&&Math.abs(f-x)<.01&&Math.abs(p-u)<.01){if(Math.abs(h+g)<.1&&Math.abs(f+x)<.1&&Math.abs(p+u)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,M=(m+1)/2,S=(d+1)/2,T=(h+g)/4,b=(f+x)/4,P=(p+u)/4;return v>M&&v>S?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=T/n,r=b/n):M>S?M<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(M),n=T/i,r=P/i):S<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(S),n=b/r,i=P/r),this.set(n,i,r,t),this}let y=Math.sqrt((u-p)*(u-p)+(f-x)*(f-x)+(g-h)*(g-h));return Math.abs(y)<.001&&(y=1),this.x=(u-p)/y,this.y=(f-x)/y,this.z=(g-h)/y,this.w=Math.acos((c+m+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class sc extends _i{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new xt(0,0,e,t),this.scissorTest=!1,this.viewport=new xt(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(Ii("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Hn?gt:kt),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Ct(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new To(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class kn extends sc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class wo extends Ct{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=$t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ac extends Ct{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=$t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ni{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,s){let l=n[i+0],c=n[i+1],h=n[i+2],f=n[i+3];const g=r[o+0],m=r[o+1],p=r[o+2],x=r[o+3];if(s===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f;return}if(s===1){e[t+0]=g,e[t+1]=m,e[t+2]=p,e[t+3]=x;return}if(f!==x||l!==g||c!==m||h!==p){let u=1-s;const d=l*g+c*m+h*p+f*x,y=d>=0?1:-1,v=1-d*d;if(v>Number.EPSILON){const S=Math.sqrt(v),T=Math.atan2(S,d*y);u=Math.sin(u*T)/S,s=Math.sin(s*T)/S}const M=s*y;if(l=l*u+g*M,c=c*u+m*M,h=h*u+p*M,f=f*u+x*M,u===1-s){const S=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=S,c*=S,h*=S,f*=S}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,r,o){const s=n[i],l=n[i+1],c=n[i+2],h=n[i+3],f=r[o],g=r[o+1],m=r[o+2],p=r[o+3];return e[t]=s*p+h*f+l*m-c*g,e[t+1]=l*p+h*g+c*f-s*m,e[t+2]=c*p+h*m+s*g-l*f,e[t+3]=h*p-s*f-l*g-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,s=Math.cos,l=Math.sin,c=s(n/2),h=s(i/2),f=s(r/2),g=l(n/2),m=l(i/2),p=l(r/2);switch(o){case"XYZ":this._x=g*h*f+c*m*p,this._y=c*m*f-g*h*p,this._z=c*h*p+g*m*f,this._w=c*h*f-g*m*p;break;case"YXZ":this._x=g*h*f+c*m*p,this._y=c*m*f-g*h*p,this._z=c*h*p-g*m*f,this._w=c*h*f+g*m*p;break;case"ZXY":this._x=g*h*f-c*m*p,this._y=c*m*f+g*h*p,this._z=c*h*p+g*m*f,this._w=c*h*f-g*m*p;break;case"ZYX":this._x=g*h*f-c*m*p,this._y=c*m*f+g*h*p,this._z=c*h*p-g*m*f,this._w=c*h*f+g*m*p;break;case"YZX":this._x=g*h*f+c*m*p,this._y=c*m*f+g*h*p,this._z=c*h*p-g*m*f,this._w=c*h*f-g*m*p;break;case"XZY":this._x=g*h*f-c*m*p,this._y=c*m*f-g*h*p,this._z=c*h*p+g*m*f,this._w=c*h*f+g*m*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],s=t[5],l=t[9],c=t[2],h=t[6],f=t[10],g=n+s+f;if(g>0){const m=.5/Math.sqrt(g+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(o-i)*m}else if(n>s&&n>f){const m=2*Math.sqrt(1+n-s-f);this._w=(h-l)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(r+c)/m}else if(s>f){const m=2*Math.sqrt(1+s-n-f);this._w=(r-c)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+f-n-s);this._w=(o-i)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(wt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,s=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*s+i*c-r*l,this._y=i*h+o*l+r*s-n*c,this._z=r*h+o*c+n*l-i*s,this._w=o*h-n*s-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let s=o*e._w+n*e._x+i*e._y+r*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-s*s;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,s),f=Math.sin((1-t)*h)/c,g=Math.sin(t*h)/c;return this._w=o*f+this._w*g,this._x=n*f+this._x*g,this._y=i*f+this._y*g,this._z=r*f+this._z*g,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,t=0,n=0){B.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Aa.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Aa.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,s=e.z,l=e.w,c=2*(o*i-s*n),h=2*(s*t-r*i),f=2*(r*n-o*t);return this.x=t+l*c+o*f-s*h,this.y=n+l*h+s*c-r*f,this.z=i+l*f+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,s=t.y,l=t.z;return this.x=i*l-r*s,this.y=r*o-n*l,this.z=n*s-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return kr.copy(this).projectOnVector(e),this.sub(kr)}reflect(e){return this.sub(kr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(wt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const kr=new B,Aa=new Ni;class yi{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Wt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Wt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Wt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,s=r.count;o<s;o++)e.isMesh===!0?e.getVertexPosition(o,Wt):Wt.fromBufferAttribute(r,o),Wt.applyMatrix4(e.matrixWorld),this.expandByPoint(Wt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Gi.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Gi.copy(n.boundingBox)),Gi.applyMatrix4(e.matrixWorld),this.union(Gi)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Wt),Wt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ei),Wi.subVectors(this.max,Ei),Yn.subVectors(e.a,Ei),qn.subVectors(e.b,Ei),$n.subVectors(e.c,Ei),gn.subVectors(qn,Yn),xn.subVectors($n,qn),Ln.subVectors(Yn,$n);let t=[0,-gn.z,gn.y,0,-xn.z,xn.y,0,-Ln.z,Ln.y,gn.z,0,-gn.x,xn.z,0,-xn.x,Ln.z,0,-Ln.x,-gn.y,gn.x,0,-xn.y,xn.x,0,-Ln.y,Ln.x,0];return!Gr(t,Yn,qn,$n,Wi)||(t=[1,0,0,0,1,0,0,0,1],!Gr(t,Yn,qn,$n,Wi))?!1:(Xi.crossVectors(gn,xn),t=[Xi.x,Xi.y,Xi.z],Gr(t,Yn,qn,$n,Wi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(rn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const rn=[new B,new B,new B,new B,new B,new B,new B,new B],Wt=new B,Gi=new yi,Yn=new B,qn=new B,$n=new B,gn=new B,xn=new B,Ln=new B,Ei=new B,Wi=new B,Xi=new B,Rn=new B;function Gr(a,e,t,n,i){for(let r=0,o=a.length-3;r<=o;r+=3){Rn.fromArray(a,r);const s=i.x*Math.abs(Rn.x)+i.y*Math.abs(Rn.y)+i.z*Math.abs(Rn.z),l=e.dot(Rn),c=t.dot(Rn),h=n.dot(Rn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>s)return!1}return!0}const oc=new yi,Ai=new B,Wr=new B;class As{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):oc.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ai.subVectors(e,this.center);const t=Ai.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ai,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Wr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ai.copy(e.center).add(Wr)),this.expandByPoint(Ai.copy(e.center).sub(Wr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const sn=new B,Xr=new B,Yi=new B,vn=new B,Yr=new B,qi=new B,qr=new B;class Co{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,sn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=sn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(sn.copy(this.origin).addScaledVector(this.direction,t),sn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Xr.copy(e).add(t).multiplyScalar(.5),Yi.copy(t).sub(e).normalize(),vn.copy(this.origin).sub(Xr);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Yi),s=vn.dot(this.direction),l=-vn.dot(Yi),c=vn.lengthSq(),h=Math.abs(1-o*o);let f,g,m,p;if(h>0)if(f=o*l-s,g=o*s-l,p=r*h,f>=0)if(g>=-p)if(g<=p){const x=1/h;f*=x,g*=x,m=f*(f+o*g+2*s)+g*(o*f+g+2*l)+c}else g=r,f=Math.max(0,-(o*g+s)),m=-f*f+g*(g+2*l)+c;else g=-r,f=Math.max(0,-(o*g+s)),m=-f*f+g*(g+2*l)+c;else g<=-p?(f=Math.max(0,-(-o*r+s)),g=f>0?-r:Math.min(Math.max(-r,-l),r),m=-f*f+g*(g+2*l)+c):g<=p?(f=0,g=Math.min(Math.max(-r,-l),r),m=g*(g+2*l)+c):(f=Math.max(0,-(o*r+s)),g=f>0?r:Math.min(Math.max(-r,-l),r),m=-f*f+g*(g+2*l)+c);else g=o>0?-r:r,f=Math.max(0,-(o*g+s)),m=-f*f+g*(g+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(Xr).addScaledVector(Yi,g),m}intersectSphere(e,t){sn.subVectors(e.center,this.origin);const n=sn.dot(this.direction),i=sn.dot(sn)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),s=n-o,l=n+o;return l<0?null:s<0?this.at(l,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,s,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,g=this.origin;return c>=0?(n=(e.min.x-g.x)*c,i=(e.max.x-g.x)*c):(n=(e.max.x-g.x)*c,i=(e.min.x-g.x)*c),h>=0?(r=(e.min.y-g.y)*h,o=(e.max.y-g.y)*h):(r=(e.max.y-g.y)*h,o=(e.min.y-g.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),f>=0?(s=(e.min.z-g.z)*f,l=(e.max.z-g.z)*f):(s=(e.max.z-g.z)*f,l=(e.min.z-g.z)*f),n>l||s>i)||((s>n||n!==n)&&(n=s),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,sn)!==null}intersectTriangle(e,t,n,i,r){Yr.subVectors(t,e),qi.subVectors(n,e),qr.crossVectors(Yr,qi);let o=this.direction.dot(qr),s;if(o>0){if(i)return null;s=1}else if(o<0)s=-1,o=-o;else return null;vn.subVectors(this.origin,e);const l=s*this.direction.dot(qi.crossVectors(vn,qi));if(l<0)return null;const c=s*this.direction.dot(Yr.cross(vn));if(c<0||l+c>o)return null;const h=-s*vn.dot(qr);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class mt{constructor(e,t,n,i,r,o,s,l,c,h,f,g,m,p,x,u){mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,s,l,c,h,f,g,m,p,x,u)}set(e,t,n,i,r,o,s,l,c,h,f,g,m,p,x,u){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=i,d[1]=r,d[5]=o,d[9]=s,d[13]=l,d[2]=c,d[6]=h,d[10]=f,d[14]=g,d[3]=m,d[7]=p,d[11]=x,d[15]=u,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Zn.setFromMatrixColumn(e,0).length(),r=1/Zn.setFromMatrixColumn(e,1).length(),o=1/Zn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),s=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const g=o*h,m=o*f,p=s*h,x=s*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=m+p*c,t[5]=g-x*c,t[9]=-s*l,t[2]=x-g*c,t[6]=p+m*c,t[10]=o*l}else if(e.order==="YXZ"){const g=l*h,m=l*f,p=c*h,x=c*f;t[0]=g+x*s,t[4]=p*s-m,t[8]=o*c,t[1]=o*f,t[5]=o*h,t[9]=-s,t[2]=m*s-p,t[6]=x+g*s,t[10]=o*l}else if(e.order==="ZXY"){const g=l*h,m=l*f,p=c*h,x=c*f;t[0]=g-x*s,t[4]=-o*f,t[8]=p+m*s,t[1]=m+p*s,t[5]=o*h,t[9]=x-g*s,t[2]=-o*c,t[6]=s,t[10]=o*l}else if(e.order==="ZYX"){const g=o*h,m=o*f,p=s*h,x=s*f;t[0]=l*h,t[4]=p*c-m,t[8]=g*c+x,t[1]=l*f,t[5]=x*c+g,t[9]=m*c-p,t[2]=-c,t[6]=s*l,t[10]=o*l}else if(e.order==="YZX"){const g=o*l,m=o*c,p=s*l,x=s*c;t[0]=l*h,t[4]=x-g*f,t[8]=p*f+m,t[1]=f,t[5]=o*h,t[9]=-s*h,t[2]=-c*h,t[6]=m*f+p,t[10]=g-x*f}else if(e.order==="XZY"){const g=o*l,m=o*c,p=s*l,x=s*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=g*f+x,t[5]=o*h,t[9]=m*f-p,t[2]=p*f-m,t[6]=s*h,t[10]=x*f+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(lc,e,cc)}lookAt(e,t,n){const i=this.elements;return Pt.subVectors(e,t),Pt.lengthSq()===0&&(Pt.z=1),Pt.normalize(),_n.crossVectors(n,Pt),_n.lengthSq()===0&&(Math.abs(n.z)===1?Pt.x+=1e-4:Pt.z+=1e-4,Pt.normalize(),_n.crossVectors(n,Pt)),_n.normalize(),$i.crossVectors(Pt,_n),i[0]=_n.x,i[4]=$i.x,i[8]=Pt.x,i[1]=_n.y,i[5]=$i.y,i[9]=Pt.y,i[2]=_n.z,i[6]=$i.z,i[10]=Pt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],s=n[4],l=n[8],c=n[12],h=n[1],f=n[5],g=n[9],m=n[13],p=n[2],x=n[6],u=n[10],d=n[14],y=n[3],v=n[7],M=n[11],S=n[15],T=i[0],b=i[4],P=i[8],_=i[12],A=i[1],N=i[5],F=i[9],D=i[13],R=i[2],L=i[6],H=i[10],Z=i[14],j=i[3],G=i[7],K=i[11],Y=i[15];return r[0]=o*T+s*A+l*R+c*j,r[4]=o*b+s*N+l*L+c*G,r[8]=o*P+s*F+l*H+c*K,r[12]=o*_+s*D+l*Z+c*Y,r[1]=h*T+f*A+g*R+m*j,r[5]=h*b+f*N+g*L+m*G,r[9]=h*P+f*F+g*H+m*K,r[13]=h*_+f*D+g*Z+m*Y,r[2]=p*T+x*A+u*R+d*j,r[6]=p*b+x*N+u*L+d*G,r[10]=p*P+x*F+u*H+d*K,r[14]=p*_+x*D+u*Z+d*Y,r[3]=y*T+v*A+M*R+S*j,r[7]=y*b+v*N+M*L+S*G,r[11]=y*P+v*F+M*H+S*K,r[15]=y*_+v*D+M*Z+S*Y,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],s=e[5],l=e[9],c=e[13],h=e[2],f=e[6],g=e[10],m=e[14],p=e[3],x=e[7],u=e[11],d=e[15];return p*(+r*l*f-i*c*f-r*s*g+n*c*g+i*s*m-n*l*m)+x*(+t*l*m-t*c*g+r*o*g-i*o*m+i*c*h-r*l*h)+u*(+t*c*f-t*s*m-r*o*f+n*o*m+r*s*h-n*c*h)+d*(-i*s*h-t*l*f+t*s*g+i*o*f-n*o*g+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],s=e[5],l=e[6],c=e[7],h=e[8],f=e[9],g=e[10],m=e[11],p=e[12],x=e[13],u=e[14],d=e[15],y=f*u*c-x*g*c+x*l*m-s*u*m-f*l*d+s*g*d,v=p*g*c-h*u*c-p*l*m+o*u*m+h*l*d-o*g*d,M=h*x*c-p*f*c+p*s*m-o*x*m-h*s*d+o*f*d,S=p*f*l-h*x*l-p*s*g+o*x*g+h*s*u-o*f*u,T=t*y+n*v+i*M+r*S;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/T;return e[0]=y*b,e[1]=(x*g*r-f*u*r-x*i*m+n*u*m+f*i*d-n*g*d)*b,e[2]=(s*u*r-x*l*r+x*i*c-n*u*c-s*i*d+n*l*d)*b,e[3]=(f*l*r-s*g*r-f*i*c+n*g*c+s*i*m-n*l*m)*b,e[4]=v*b,e[5]=(h*u*r-p*g*r+p*i*m-t*u*m-h*i*d+t*g*d)*b,e[6]=(p*l*r-o*u*r-p*i*c+t*u*c+o*i*d-t*l*d)*b,e[7]=(o*g*r-h*l*r+h*i*c-t*g*c-o*i*m+t*l*m)*b,e[8]=M*b,e[9]=(p*f*r-h*x*r-p*n*m+t*x*m+h*n*d-t*f*d)*b,e[10]=(o*x*r-p*s*r+p*n*c-t*x*c-o*n*d+t*s*d)*b,e[11]=(h*s*r-o*f*r-h*n*c+t*f*c+o*n*m-t*s*m)*b,e[12]=S*b,e[13]=(h*x*i-p*f*i+p*n*g-t*x*g-h*n*u+t*f*u)*b,e[14]=(p*s*i-o*x*i-p*n*l+t*x*l+o*n*u-t*s*u)*b,e[15]=(o*f*i-h*s*i+h*n*l-t*f*l-o*n*g+t*s*g)*b,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,s=e.y,l=e.z,c=r*o,h=r*s;return this.set(c*o+n,c*s-i*l,c*l+i*s,0,c*s+i*l,h*s+n,h*l-i*o,0,c*l-i*s,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,s=t._z,l=t._w,c=r+r,h=o+o,f=s+s,g=r*c,m=r*h,p=r*f,x=o*h,u=o*f,d=s*f,y=l*c,v=l*h,M=l*f,S=n.x,T=n.y,b=n.z;return i[0]=(1-(x+d))*S,i[1]=(m+M)*S,i[2]=(p-v)*S,i[3]=0,i[4]=(m-M)*T,i[5]=(1-(g+d))*T,i[6]=(u+y)*T,i[7]=0,i[8]=(p+v)*b,i[9]=(u-y)*b,i[10]=(1-(g+x))*b,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Zn.set(i[0],i[1],i[2]).length();const o=Zn.set(i[4],i[5],i[6]).length(),s=Zn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Xt.copy(this);const c=1/r,h=1/o,f=1/s;return Xt.elements[0]*=c,Xt.elements[1]*=c,Xt.elements[2]*=c,Xt.elements[4]*=h,Xt.elements[5]*=h,Xt.elements[6]*=h,Xt.elements[8]*=f,Xt.elements[9]*=f,Xt.elements[10]*=f,t.setFromRotationMatrix(Xt),n.x=r,n.y=o,n.z=s,this}makePerspective(e,t,n,i,r,o,s=pn){const l=this.elements,c=2*r/(t-e),h=2*r/(n-i),f=(t+e)/(t-e),g=(n+i)/(n-i);let m,p;if(s===pn)m=-(o+r)/(o-r),p=-2*o*r/(o-r);else if(s===yr)m=-o/(o-r),p=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+s);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=g,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=p,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,o,s=pn){const l=this.elements,c=1/(t-e),h=1/(n-i),f=1/(o-r),g=(t+e)*c,m=(n+i)*h;let p,x;if(s===pn)p=(o+r)*f,x=-2*f;else if(s===yr)p=r*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+s);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-g,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=x,l[14]=-p,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Zn=new B,Xt=new mt,lc=new B(0,0,0),cc=new B(1,1,1),_n=new B,$i=new B,Pt=new B,Ta=new mt,wa=new Ni;class Er{constructor(e=0,t=0,n=0,i=Er.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],s=i[8],l=i[1],c=i[5],h=i[9],f=i[2],g=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(wt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(g,c),this._z=0);break;case"YXZ":this._x=Math.asin(-wt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(s,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(wt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-wt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(g,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(s,m));break;case"XZY":this._z=Math.asin(-wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(g,c),this._y=Math.atan2(s,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ta.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ta,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return wa.setFromEuler(this),this.setFromQuaternion(wa,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Er.DEFAULT_ORDER="XYZ";class Ts{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let hc=0;const Ca=new B,jn=new Ni,an=new mt,Zi=new B,Ti=new B,fc=new B,dc=new Ni,La=new B(1,0,0),Ra=new B(0,1,0),Ia=new B(0,0,1),uc={type:"added"},pc={type:"removed"};class Rt extends _i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hc++}),this.uuid=An(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rt.DEFAULT_UP.clone();const e=new B,t=new Er,n=new Ni,i=new B(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new mt},normalMatrix:{value:new ke}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=Rt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ts,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return jn.setFromAxisAngle(e,t),this.quaternion.multiply(jn),this}rotateOnWorldAxis(e,t){return jn.setFromAxisAngle(e,t),this.quaternion.premultiply(jn),this}rotateX(e){return this.rotateOnAxis(La,e)}rotateY(e){return this.rotateOnAxis(Ra,e)}rotateZ(e){return this.rotateOnAxis(Ia,e)}translateOnAxis(e,t){return Ca.copy(e).applyQuaternion(this.quaternion),this.position.add(Ca.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(La,e)}translateY(e){return this.translateOnAxis(Ra,e)}translateZ(e){return this.translateOnAxis(Ia,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(an.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Zi.copy(e):Zi.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ti.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?an.lookAt(Ti,Zi,this.up):an.lookAt(Zi,Ti,this.up),this.quaternion.setFromRotationMatrix(an),i&&(an.extractRotation(i.matrixWorld),jn.setFromRotationMatrix(an),this.quaternion.premultiply(jn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(uc)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(pc)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),an.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),an.multiply(e.parent.matrixWorld)),e.applyMatrix4(an),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ti,e,fc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ti,dc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const s=i[r];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(s=>({boxInitialized:s.boxInitialized,boxMin:s.box.min.toArray(),boxMax:s.box.max.toArray(),sphereInitialized:s.sphereInitialized,sphereRadius:s.sphere.radius,sphereCenter:s.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const l=s.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let l=0,c=this.material.length;l<c;l++)s.push(r(e.materials,this.material[l]));i.material=s}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let s=0;s<this.children.length;s++)i.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let s=0;s<this.animations.length;s++){const l=this.animations[s];i.animations.push(r(e.animations,l))}}if(t){const s=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),f=o(e.shapes),g=o(e.skeletons),m=o(e.animations),p=o(e.nodes);s.length>0&&(n.geometries=s),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),g.length>0&&(n.skeletons=g),m.length>0&&(n.animations=m),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(s){const l=[];for(const c in s){const h=s[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Rt.DEFAULT_UP=new B(0,1,0);Rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Yt=new B,on=new B,$r=new B,ln=new B,Kn=new B,Jn=new B,Pa=new B,Zr=new B,jr=new B,Kr=new B;let ji=!1;class Vt{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Yt.subVectors(e,t),i.cross(Yt);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Yt.subVectors(i,t),on.subVectors(n,t),$r.subVectors(e,t);const o=Yt.dot(Yt),s=Yt.dot(on),l=Yt.dot($r),c=on.dot(on),h=on.dot($r),f=o*c-s*s;if(f===0)return r.set(0,0,0),null;const g=1/f,m=(c*l-s*h)*g,p=(o*h-s*l)*g;return r.set(1-m-p,p,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ln)===null?!1:ln.x>=0&&ln.y>=0&&ln.x+ln.y<=1}static getUV(e,t,n,i,r,o,s,l){return ji===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ji=!0),this.getInterpolation(e,t,n,i,r,o,s,l)}static getInterpolation(e,t,n,i,r,o,s,l){return this.getBarycoord(e,t,n,i,ln)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ln.x),l.addScaledVector(o,ln.y),l.addScaledVector(s,ln.z),l)}static isFrontFacing(e,t,n,i){return Yt.subVectors(n,t),on.subVectors(e,t),Yt.cross(on).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yt.subVectors(this.c,this.b),on.subVectors(this.a,this.b),Yt.cross(on).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Vt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Vt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return ji===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ji=!0),Vt.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}getInterpolation(e,t,n,i,r){return Vt.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Vt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Vt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,s;Kn.subVectors(i,n),Jn.subVectors(r,n),Zr.subVectors(e,n);const l=Kn.dot(Zr),c=Jn.dot(Zr);if(l<=0&&c<=0)return t.copy(n);jr.subVectors(e,i);const h=Kn.dot(jr),f=Jn.dot(jr);if(h>=0&&f<=h)return t.copy(i);const g=l*f-h*c;if(g<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Kn,o);Kr.subVectors(e,r);const m=Kn.dot(Kr),p=Jn.dot(Kr);if(p>=0&&m<=p)return t.copy(r);const x=m*c-l*p;if(x<=0&&c>=0&&p<=0)return s=c/(c-p),t.copy(n).addScaledVector(Jn,s);const u=h*p-m*f;if(u<=0&&f-h>=0&&m-p>=0)return Pa.subVectors(r,i),s=(f-h)/(f-h+(m-p)),t.copy(i).addScaledVector(Pa,s);const d=1/(u+x+g);return o=x*d,s=g*d,t.copy(n).addScaledVector(Kn,o).addScaledVector(Jn,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Lo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yn={h:0,s:0,l:0},Ki={h:0,s:0,l:0};function Jr(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}class je{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ze.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Ze.workingColorSpace){if(e=ec(e,1),t=wt(t,0,1),n=wt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Jr(o,r,e+1/3),this.g=Jr(o,r,e),this.b=Jr(o,r,e-1/3)}return Ze.toWorkingColorSpace(this,i),this}setStyle(e,t=gt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],s=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=gt){const n=Lo[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ui(e.r),this.g=ui(e.g),this.b=ui(e.b),this}copyLinearToSRGB(e){return this.r=zr(e.r),this.g=zr(e.g),this.b=zr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gt){return Ze.fromWorkingColorSpace(yt.copy(this),e),Math.round(wt(yt.r*255,0,255))*65536+Math.round(wt(yt.g*255,0,255))*256+Math.round(wt(yt.b*255,0,255))}getHexString(e=gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.fromWorkingColorSpace(yt.copy(this),t);const n=yt.r,i=yt.g,r=yt.b,o=Math.max(n,i,r),s=Math.min(n,i,r);let l,c;const h=(s+o)/2;if(s===o)l=0,c=0;else{const f=o-s;switch(c=h<=.5?f/(o+s):f/(2-o-s),o){case n:l=(i-r)/f+(i<r?6:0);break;case i:l=(r-n)/f+2;break;case r:l=(n-i)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(yt.copy(this),t),e.r=yt.r,e.g=yt.g,e.b=yt.b,e}getStyle(e=gt){Ze.fromWorkingColorSpace(yt.copy(this),e);const t=yt.r,n=yt.g,i=yt.b;return e!==gt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(yn),this.setHSL(yn.h+e,yn.s+t,yn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(yn),e.getHSL(Ki);const n=Br(yn.h,Ki.h,t),i=Br(yn.s,Ki.s,t),r=Br(yn.l,Ki.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const yt=new je;je.NAMES=Lo;let mc=0;class Oi extends _i{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mc++}),this.uuid=An(),this.name="",this.type="Material",this.blending=Bn,this.side=Tn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cs,this.blendDst=hs,this.blendEquation=Un,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new je(0,0,0),this.blendAlpha=0,this.depthFunc=gr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_a,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wn,this.stencilZFail=Wn,this.stencilZPass=Wn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Bn&&(n.blending=this.blending),this.side!==Tn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==cs&&(n.blendSrc=this.blendSrc),this.blendDst!==hs&&(n.blendDst=this.blendDst),this.blendEquation!==Un&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==gr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_a&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Wn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Wn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const s in r){const l=r[s];delete l.metadata,o.push(l)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class hi extends Oi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=uo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ct=new B,Ji=new We;class Zt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ps,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Sn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ji.fromBufferAttribute(this,t),Ji.applyMatrix3(e),this.setXY(t,Ji.x,Ji.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.applyMatrix3(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.applyMatrix4(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.applyNormalMatrix(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.transformDirection(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=un(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=et(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=un(t,this.array)),t}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=un(t,this.array)),t}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=un(t,this.array)),t}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=un(t,this.array)),t}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array),r=et(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ps&&(e.usage=this.usage),e}}class Ro extends Zt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Io extends Zt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Mt extends Zt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let gc=0;const Ut=new mt,Qr=new Rt,Qn=new B,Dt=new yi,wi=new yi,pt=new B;class jt extends _i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gc++}),this.uuid=An(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Eo(e)?Io:Ro)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ke().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ut.makeRotationFromQuaternion(e),this.applyMatrix4(Ut),this}rotateX(e){return Ut.makeRotationX(e),this.applyMatrix4(Ut),this}rotateY(e){return Ut.makeRotationY(e),this.applyMatrix4(Ut),this}rotateZ(e){return Ut.makeRotationZ(e),this.applyMatrix4(Ut),this}translate(e,t,n){return Ut.makeTranslation(e,t,n),this.applyMatrix4(Ut),this}scale(e,t,n){return Ut.makeScale(e,t,n),this.applyMatrix4(Ut),this}lookAt(e){return Qr.lookAt(e),Qr.updateMatrix(),this.applyMatrix4(Qr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qn).negate(),this.translate(Qn.x,Qn.y,Qn.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Mt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Dt.setFromBufferAttribute(r),this.morphTargetsRelative?(pt.addVectors(this.boundingBox.min,Dt.min),this.boundingBox.expandByPoint(pt),pt.addVectors(this.boundingBox.max,Dt.max),this.boundingBox.expandByPoint(pt)):(this.boundingBox.expandByPoint(Dt.min),this.boundingBox.expandByPoint(Dt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new As);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new B,1/0);return}if(e){const n=this.boundingSphere.center;if(Dt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const s=t[r];wi.setFromBufferAttribute(s),this.morphTargetsRelative?(pt.addVectors(Dt.min,wi.min),Dt.expandByPoint(pt),pt.addVectors(Dt.max,wi.max),Dt.expandByPoint(pt)):(Dt.expandByPoint(wi.min),Dt.expandByPoint(wi.max))}Dt.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)pt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(pt));if(t)for(let r=0,o=t.length;r<o;r++){const s=t[r],l=this.morphTargetsRelative;for(let c=0,h=s.count;c<h;c++)pt.fromBufferAttribute(s,c),l&&(Qn.fromBufferAttribute(e,c),pt.add(Qn)),i=Math.max(i,n.distanceToSquared(pt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,o=t.uv.array,s=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Zt(new Float32Array(4*s),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let A=0;A<s;A++)c[A]=new B,h[A]=new B;const f=new B,g=new B,m=new B,p=new We,x=new We,u=new We,d=new B,y=new B;function v(A,N,F){f.fromArray(i,A*3),g.fromArray(i,N*3),m.fromArray(i,F*3),p.fromArray(o,A*2),x.fromArray(o,N*2),u.fromArray(o,F*2),g.sub(f),m.sub(f),x.sub(p),u.sub(p);const D=1/(x.x*u.y-u.x*x.y);isFinite(D)&&(d.copy(g).multiplyScalar(u.y).addScaledVector(m,-x.y).multiplyScalar(D),y.copy(m).multiplyScalar(x.x).addScaledVector(g,-u.x).multiplyScalar(D),c[A].add(d),c[N].add(d),c[F].add(d),h[A].add(y),h[N].add(y),h[F].add(y))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let A=0,N=M.length;A<N;++A){const F=M[A],D=F.start,R=F.count;for(let L=D,H=D+R;L<H;L+=3)v(n[L+0],n[L+1],n[L+2])}const S=new B,T=new B,b=new B,P=new B;function _(A){b.fromArray(r,A*3),P.copy(b);const N=c[A];S.copy(N),S.sub(b.multiplyScalar(b.dot(N))).normalize(),T.crossVectors(P,N);const D=T.dot(h[A])<0?-1:1;l[A*4]=S.x,l[A*4+1]=S.y,l[A*4+2]=S.z,l[A*4+3]=D}for(let A=0,N=M.length;A<N;++A){const F=M[A],D=F.start,R=F.count;for(let L=D,H=D+R;L<H;L+=3)_(n[L+0]),_(n[L+1]),_(n[L+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Zt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let g=0,m=n.count;g<m;g++)n.setXYZ(g,0,0,0);const i=new B,r=new B,o=new B,s=new B,l=new B,c=new B,h=new B,f=new B;if(e)for(let g=0,m=e.count;g<m;g+=3){const p=e.getX(g+0),x=e.getX(g+1),u=e.getX(g+2);i.fromBufferAttribute(t,p),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,u),h.subVectors(o,r),f.subVectors(i,r),h.cross(f),s.fromBufferAttribute(n,p),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,u),s.add(h),l.add(h),c.add(h),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(u,c.x,c.y,c.z)}else for(let g=0,m=t.count;g<m;g+=3)i.fromBufferAttribute(t,g+0),r.fromBufferAttribute(t,g+1),o.fromBufferAttribute(t,g+2),h.subVectors(o,r),f.subVectors(i,r),h.cross(f),n.setXYZ(g+0,h.x,h.y,h.z),n.setXYZ(g+1,h.x,h.y,h.z),n.setXYZ(g+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)pt.fromBufferAttribute(e,t),pt.normalize(),e.setXYZ(t,pt.x,pt.y,pt.z)}toNonIndexed(){function e(s,l){const c=s.array,h=s.itemSize,f=s.normalized,g=new c.constructor(l.length*h);let m=0,p=0;for(let x=0,u=l.length;x<u;x++){s.isInterleavedBufferAttribute?m=l[x]*s.data.stride+s.offset:m=l[x]*h;for(let d=0;d<h;d++)g[p++]=c[m++]}return new Zt(g,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new jt,n=this.index.array,i=this.attributes;for(const s in i){const l=i[s],c=e(l,n);t.setAttribute(s,c)}const r=this.morphAttributes;for(const s in r){const l=[],c=r[s];for(let h=0,f=c.length;h<f;h++){const g=c[h],m=e(g,n);l.push(m)}t.morphAttributes[s]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let s=0,l=o.length;s<l;s++){const c=o[s];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,g=c.length;f<g;f++){const m=c[f];h.push(m.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],f=r[c];for(let g=0,m=f.length;g<m;g++)h.push(f[g].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Da=new mt,In=new Co,Qi=new As,Fa=new B,ei=new B,ti=new B,ni=new B,es=new B,er=new B,tr=new We,nr=new We,ir=new We,Ua=new B,Na=new B,Oa=new B,rr=new B,sr=new B;class Gt extends Rt{constructor(e=new jt,t=new hi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const s=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const s=this.morphTargetInfluences;if(r&&s){er.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=s[l],f=r[l];h!==0&&(es.fromBufferAttribute(f,e),o?er.addScaledVector(es,h):er.addScaledVector(es.sub(t),h))}t.add(er)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Qi.copy(n.boundingSphere),Qi.applyMatrix4(r),In.copy(e.ray).recast(e.near),!(Qi.containsPoint(In.origin)===!1&&(In.intersectSphere(Qi,Fa)===null||In.origin.distanceToSquared(Fa)>(e.far-e.near)**2))&&(Da.copy(r).invert(),In.copy(e.ray).applyMatrix4(Da),!(n.boundingBox!==null&&In.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,In)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,s=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,g=r.groups,m=r.drawRange;if(s!==null)if(Array.isArray(o))for(let p=0,x=g.length;p<x;p++){const u=g[p],d=o[u.materialIndex],y=Math.max(u.start,m.start),v=Math.min(s.count,Math.min(u.start+u.count,m.start+m.count));for(let M=y,S=v;M<S;M+=3){const T=s.getX(M),b=s.getX(M+1),P=s.getX(M+2);i=ar(this,d,e,n,c,h,f,T,b,P),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=u.materialIndex,t.push(i))}}else{const p=Math.max(0,m.start),x=Math.min(s.count,m.start+m.count);for(let u=p,d=x;u<d;u+=3){const y=s.getX(u),v=s.getX(u+1),M=s.getX(u+2);i=ar(this,o,e,n,c,h,f,y,v,M),i&&(i.faceIndex=Math.floor(u/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=g.length;p<x;p++){const u=g[p],d=o[u.materialIndex],y=Math.max(u.start,m.start),v=Math.min(l.count,Math.min(u.start+u.count,m.start+m.count));for(let M=y,S=v;M<S;M+=3){const T=M,b=M+1,P=M+2;i=ar(this,d,e,n,c,h,f,T,b,P),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=u.materialIndex,t.push(i))}}else{const p=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let u=p,d=x;u<d;u+=3){const y=u,v=u+1,M=u+2;i=ar(this,o,e,n,c,h,f,y,v,M),i&&(i.faceIndex=Math.floor(u/3),t.push(i))}}}}function xc(a,e,t,n,i,r,o,s){let l;if(e.side===Lt?l=n.intersectTriangle(o,r,i,!0,s):l=n.intersectTriangle(i,r,o,e.side===Tn,s),l===null)return null;sr.copy(s),sr.applyMatrix4(a.matrixWorld);const c=t.ray.origin.distanceTo(sr);return c<t.near||c>t.far?null:{distance:c,point:sr.clone(),object:a}}function ar(a,e,t,n,i,r,o,s,l,c){a.getVertexPosition(s,ei),a.getVertexPosition(l,ti),a.getVertexPosition(c,ni);const h=xc(a,e,t,n,ei,ti,ni,rr);if(h){i&&(tr.fromBufferAttribute(i,s),nr.fromBufferAttribute(i,l),ir.fromBufferAttribute(i,c),h.uv=Vt.getInterpolation(rr,ei,ti,ni,tr,nr,ir,new We)),r&&(tr.fromBufferAttribute(r,s),nr.fromBufferAttribute(r,l),ir.fromBufferAttribute(r,c),h.uv1=Vt.getInterpolation(rr,ei,ti,ni,tr,nr,ir,new We),h.uv2=h.uv1),o&&(Ua.fromBufferAttribute(o,s),Na.fromBufferAttribute(o,l),Oa.fromBufferAttribute(o,c),h.normal=Vt.getInterpolation(rr,ei,ti,ni,Ua,Na,Oa,new B),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:s,b:l,c,normal:new B,materialIndex:0};Vt.getNormal(ei,ti,ni,f.normal),h.face=f}return h}class Bi extends jt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const s=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],f=[];let g=0,m=0;p("z","y","x",-1,-1,n,t,e,o,r,0),p("z","y","x",1,-1,n,t,-e,o,r,1),p("x","z","y",1,1,e,n,t,i,o,2),p("x","z","y",1,-1,e,n,-t,i,o,3),p("x","y","z",1,-1,e,t,n,i,r,4),p("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Mt(c,3)),this.setAttribute("normal",new Mt(h,3)),this.setAttribute("uv",new Mt(f,2));function p(x,u,d,y,v,M,S,T,b,P,_){const A=M/b,N=S/P,F=M/2,D=S/2,R=T/2,L=b+1,H=P+1;let Z=0,j=0;const G=new B;for(let K=0;K<H;K++){const Y=K*N-D;for(let U=0;U<L;U++){const k=U*A-F;G[x]=k*y,G[u]=Y*v,G[d]=R,c.push(G.x,G.y,G.z),G[x]=0,G[u]=0,G[d]=T>0?1:-1,h.push(G.x,G.y,G.z),f.push(U/b),f.push(1-K/P),Z+=1}}for(let K=0;K<P;K++)for(let Y=0;Y<b;Y++){const U=g+Y+L*K,k=g+Y+L*(K+1),q=g+(Y+1)+L*(K+1),oe=g+(Y+1)+L*K;l.push(U,k,oe),l.push(k,q,oe),j+=6}s.addGroup(m,j,_),m+=j,g+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function vi(a){const e={};for(const t in a){e[t]={};for(const n in a[t]){const i=a[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function At(a){const e={};for(let t=0;t<a.length;t++){const n=vi(a[t]);for(const i in n)e[i]=n[i]}return e}function vc(a){const e=[];for(let t=0;t<a.length;t++)e.push(a[t].clone());return e}function Po(a){return a.getRenderTarget()===null?a.outputColorSpace:Ze.workingColorSpace}const _c={clone:vi,merge:At};var yc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Mc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Gn extends Oi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yc,this.fragmentShader=Mc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vi(e.uniforms),this.uniformsGroups=vc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Do extends Rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=pn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class zt extends Do{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=gs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Or*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return gs*2*Math.atan(Math.tan(Or*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Or*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const s=this.filmOffset;s!==0&&(r+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ii=-90,ri=1;class Sc extends Rt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new zt(ii,ri,e,t);i.layers=this.layers,this.add(i);const r=new zt(ii,ri,e,t);r.layers=this.layers,this.add(r);const o=new zt(ii,ri,e,t);o.layers=this.layers,this.add(o);const s=new zt(ii,ri,e,t);s.layers=this.layers,this.add(s);const l=new zt(ii,ri,e,t);l.layers=this.layers,this.add(l);const c=new zt(ii,ri,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,s,l]=t;for(const c of t)this.remove(c);if(e===pn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===yr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,s,l,c,h]=this.children,f=e.getRenderTarget(),g=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,s),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(f,g,m),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class Fo extends Ct{constructor(e,t,n,i,r,o,s,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:mi,super(e,t,n,i,r,o,s,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class bc extends kn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(Ii("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Hn?gt:kt),this.texture=new Fo(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Bt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Bi(5,5,5),r=new Gn({name:"CubemapFromEquirect",uniforms:vi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Lt,blending:bn});r.uniforms.tEquirect.value=t;const o=new Gt(i,r),s=t.minFilter;return t.minFilter===Di&&(t.minFilter=Bt),new Sc(1,10,this).update(e,o),t.minFilter=s,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const ts=new B,Ec=new B,Ac=new ke;class Dn{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=ts.subVectors(n,t).cross(Ec.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ts),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Ac.getNormalMatrix(e),i=this.coplanarPoint(ts).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Pn=new As,or=new B;class Uo{constructor(e=new Dn,t=new Dn,n=new Dn,i=new Dn,r=new Dn,o=new Dn){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(n),s[3].copy(i),s[4].copy(r),s[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=pn){const n=this.planes,i=e.elements,r=i[0],o=i[1],s=i[2],l=i[3],c=i[4],h=i[5],f=i[6],g=i[7],m=i[8],p=i[9],x=i[10],u=i[11],d=i[12],y=i[13],v=i[14],M=i[15];if(n[0].setComponents(l-r,g-c,u-m,M-d).normalize(),n[1].setComponents(l+r,g+c,u+m,M+d).normalize(),n[2].setComponents(l+o,g+h,u+p,M+y).normalize(),n[3].setComponents(l-o,g-h,u-p,M-y).normalize(),n[4].setComponents(l-s,g-f,u-x,M-v).normalize(),t===pn)n[5].setComponents(l+s,g+f,u+x,M+v).normalize();else if(t===yr)n[5].setComponents(s,f,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Pn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Pn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Pn)}intersectsSprite(e){return Pn.center.set(0,0,0),Pn.radius=.7071067811865476,Pn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Pn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(or.x=i.normal.x>0?e.max.x:e.min.x,or.y=i.normal.y>0?e.max.y:e.min.y,or.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(or)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function No(){let a=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=a.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=a.requestAnimationFrame(i),e=!0)},stop:function(){a.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){a=r}}}function Tc(a,e){const t=e.isWebGL2,n=new WeakMap;function i(c,h){const f=c.array,g=c.usage,m=f.byteLength,p=a.createBuffer();a.bindBuffer(h,p),a.bufferData(h,f,g),c.onUploadCallback();let x;if(f instanceof Float32Array)x=a.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)x=a.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=a.UNSIGNED_SHORT;else if(f instanceof Int16Array)x=a.SHORT;else if(f instanceof Uint32Array)x=a.UNSIGNED_INT;else if(f instanceof Int32Array)x=a.INT;else if(f instanceof Int8Array)x=a.BYTE;else if(f instanceof Uint8Array)x=a.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)x=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:p,type:x,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:m}}function r(c,h,f){const g=h.array,m=h._updateRange,p=h.updateRanges;if(a.bindBuffer(f,c),m.count===-1&&p.length===0&&a.bufferSubData(f,0,g),p.length!==0){for(let x=0,u=p.length;x<u;x++){const d=p[x];t?a.bufferSubData(f,d.start*g.BYTES_PER_ELEMENT,g,d.start,d.count):a.bufferSubData(f,d.start*g.BYTES_PER_ELEMENT,g.subarray(d.start,d.start+d.count))}h.clearUpdateRanges()}m.count!==-1&&(t?a.bufferSubData(f,m.offset*g.BYTES_PER_ELEMENT,g,m.offset,m.count):a.bufferSubData(f,m.offset*g.BYTES_PER_ELEMENT,g.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function s(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(a.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const g=n.get(c);(!g||g.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=n.get(c);if(f===void 0)n.set(c,i(c,h));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(f.buffer,c,h),f.version=c.version}}return{get:o,remove:s,update:l}}class Ar extends jt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,s=Math.floor(n),l=Math.floor(i),c=s+1,h=l+1,f=e/s,g=t/l,m=[],p=[],x=[],u=[];for(let d=0;d<h;d++){const y=d*g-o;for(let v=0;v<c;v++){const M=v*f-r;p.push(M,-y,0),x.push(0,0,1),u.push(v/s),u.push(1-d/l)}}for(let d=0;d<l;d++)for(let y=0;y<s;y++){const v=y+c*d,M=y+c*(d+1),S=y+1+c*(d+1),T=y+1+c*d;m.push(v,M,T),m.push(M,S,T)}this.setIndex(m),this.setAttribute("position",new Mt(p,3)),this.setAttribute("normal",new Mt(x,3)),this.setAttribute("uv",new Mt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ar(e.width,e.height,e.widthSegments,e.heightSegments)}}var wc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Cc=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Lc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Rc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ic=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Pc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Dc=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Fc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Uc=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Nc=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Oc=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Bc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vc=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,zc=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Hc=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,kc=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Gc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Yc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$c=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Zc=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,jc=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Kc=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Jc=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Qc=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,eh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,th=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ih="gl_FragColor = linearToOutputTexel( gl_FragColor );",rh=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,sh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ah=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,oh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,lh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ch=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,hh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,uh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ph=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,mh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,gh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vh=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_h=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,yh=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Mh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Eh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ah=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Th=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,wh=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ch=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Lh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Rh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ih=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ph=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Dh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Fh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Uh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Nh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Oh=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Vh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zh=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Hh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,kh=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Gh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Wh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Xh=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Yh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$h=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Zh=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,jh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Kh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Jh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Qh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ef=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,nf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,af=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,of=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,hf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ff=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,df=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,uf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,mf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,xf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_f=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Mf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Sf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,bf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ef=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Af=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Tf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const wf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Cf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,If=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Df=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ff=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Uf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Nf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Of=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Bf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Hf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,kf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Yf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,$f=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Zf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Jf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ed=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,td=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,nd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,id=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rd=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sd=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ad=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ve={alphahash_fragment:wc,alphahash_pars_fragment:Cc,alphamap_fragment:Lc,alphamap_pars_fragment:Rc,alphatest_fragment:Ic,alphatest_pars_fragment:Pc,aomap_fragment:Dc,aomap_pars_fragment:Fc,batching_pars_vertex:Uc,batching_vertex:Nc,begin_vertex:Oc,beginnormal_vertex:Bc,bsdfs:Vc,iridescence_fragment:zc,bumpmap_pars_fragment:Hc,clipping_planes_fragment:kc,clipping_planes_pars_fragment:Gc,clipping_planes_pars_vertex:Wc,clipping_planes_vertex:Xc,color_fragment:Yc,color_pars_fragment:qc,color_pars_vertex:$c,color_vertex:Zc,common:jc,cube_uv_reflection_fragment:Kc,defaultnormal_vertex:Jc,displacementmap_pars_vertex:Qc,displacementmap_vertex:eh,emissivemap_fragment:th,emissivemap_pars_fragment:nh,colorspace_fragment:ih,colorspace_pars_fragment:rh,envmap_fragment:sh,envmap_common_pars_fragment:ah,envmap_pars_fragment:oh,envmap_pars_vertex:lh,envmap_physical_pars_fragment:yh,envmap_vertex:ch,fog_vertex:hh,fog_pars_vertex:fh,fog_fragment:dh,fog_pars_fragment:uh,gradientmap_pars_fragment:ph,lightmap_fragment:mh,lightmap_pars_fragment:gh,lights_lambert_fragment:xh,lights_lambert_pars_fragment:vh,lights_pars_begin:_h,lights_toon_fragment:Mh,lights_toon_pars_fragment:Sh,lights_phong_fragment:bh,lights_phong_pars_fragment:Eh,lights_physical_fragment:Ah,lights_physical_pars_fragment:Th,lights_fragment_begin:wh,lights_fragment_maps:Ch,lights_fragment_end:Lh,logdepthbuf_fragment:Rh,logdepthbuf_pars_fragment:Ih,logdepthbuf_pars_vertex:Ph,logdepthbuf_vertex:Dh,map_fragment:Fh,map_pars_fragment:Uh,map_particle_fragment:Nh,map_particle_pars_fragment:Oh,metalnessmap_fragment:Bh,metalnessmap_pars_fragment:Vh,morphcolor_vertex:zh,morphnormal_vertex:Hh,morphtarget_pars_vertex:kh,morphtarget_vertex:Gh,normal_fragment_begin:Wh,normal_fragment_maps:Xh,normal_pars_fragment:Yh,normal_pars_vertex:qh,normal_vertex:$h,normalmap_pars_fragment:Zh,clearcoat_normal_fragment_begin:jh,clearcoat_normal_fragment_maps:Kh,clearcoat_pars_fragment:Jh,iridescence_pars_fragment:Qh,opaque_fragment:ef,packing:tf,premultiplied_alpha_fragment:nf,project_vertex:rf,dithering_fragment:sf,dithering_pars_fragment:af,roughnessmap_fragment:of,roughnessmap_pars_fragment:lf,shadowmap_pars_fragment:cf,shadowmap_pars_vertex:hf,shadowmap_vertex:ff,shadowmask_pars_fragment:df,skinbase_vertex:uf,skinning_pars_vertex:pf,skinning_vertex:mf,skinnormal_vertex:gf,specularmap_fragment:xf,specularmap_pars_fragment:vf,tonemapping_fragment:_f,tonemapping_pars_fragment:yf,transmission_fragment:Mf,transmission_pars_fragment:Sf,uv_pars_fragment:bf,uv_pars_vertex:Ef,uv_vertex:Af,worldpos_vertex:Tf,background_vert:wf,background_frag:Cf,backgroundCube_vert:Lf,backgroundCube_frag:Rf,cube_vert:If,cube_frag:Pf,depth_vert:Df,depth_frag:Ff,distanceRGBA_vert:Uf,distanceRGBA_frag:Nf,equirect_vert:Of,equirect_frag:Bf,linedashed_vert:Vf,linedashed_frag:zf,meshbasic_vert:Hf,meshbasic_frag:kf,meshlambert_vert:Gf,meshlambert_frag:Wf,meshmatcap_vert:Xf,meshmatcap_frag:Yf,meshnormal_vert:qf,meshnormal_frag:$f,meshphong_vert:Zf,meshphong_frag:jf,meshphysical_vert:Kf,meshphysical_frag:Jf,meshtoon_vert:Qf,meshtoon_frag:ed,points_vert:td,points_frag:nd,shadow_vert:id,shadow_frag:rd,sprite_vert:sd,sprite_frag:ad},pe={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},en={basic:{uniforms:At([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:At([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new je(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:At([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:At([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:At([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new je(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:At([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:At([pe.points,pe.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:At([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:At([pe.common,pe.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:At([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:At([pe.sprite,pe.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:At([pe.common,pe.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:At([pe.lights,pe.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};en.physical={uniforms:At([en.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new We(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new We},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const lr={r:0,b:0,g:0};function od(a,e,t,n,i,r,o){const s=new je(0);let l=r===!0?0:1,c,h,f=null,g=0,m=null;function p(u,d){let y=!1,v=d.isScene===!0?d.background:null;v&&v.isTexture&&(v=(d.backgroundBlurriness>0?t:e).get(v)),v===null?x(s,l):v&&v.isColor&&(x(v,1),y=!0);const M=a.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(a.autoClear||y)&&a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Sr)?(h===void 0&&(h=new Gt(new Bi(1,1,1),new Gn({name:"BackgroundCubeMaterial",uniforms:vi(en.backgroundCube.uniforms),vertexShader:en.backgroundCube.vertexShader,fragmentShader:en.backgroundCube.fragmentShader,side:Lt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(S,T,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,h.material.toneMapped=Ze.getTransfer(v.colorSpace)!==rt,(f!==v||g!==v.version||m!==a.toneMapping)&&(h.material.needsUpdate=!0,f=v,g=v.version,m=a.toneMapping),h.layers.enableAll(),u.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Gt(new Ar(2,2),new Gn({name:"BackgroundMaterial",uniforms:vi(en.background.uniforms),vertexShader:en.background.vertexShader,fragmentShader:en.background.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=Ze.getTransfer(v.colorSpace)!==rt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||g!==v.version||m!==a.toneMapping)&&(c.material.needsUpdate=!0,f=v,g=v.version,m=a.toneMapping),c.layers.enableAll(),u.unshift(c,c.geometry,c.material,0,0,null))}function x(u,d){u.getRGB(lr,Po(a)),n.buffers.color.setClear(lr.r,lr.g,lr.b,d,o)}return{getClearColor:function(){return s},setClearColor:function(u,d=1){s.set(u),l=d,x(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(u){l=u,x(s,l)},render:p}}function ld(a,e,t,n){const i=a.getParameter(a.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,s={},l=u(null);let c=l,h=!1;function f(R,L,H,Z,j){let G=!1;if(o){const K=x(Z,H,L);c!==K&&(c=K,m(c.object)),G=d(R,Z,H,j),G&&y(R,Z,H,j)}else{const K=L.wireframe===!0;(c.geometry!==Z.id||c.program!==H.id||c.wireframe!==K)&&(c.geometry=Z.id,c.program=H.id,c.wireframe=K,G=!0)}j!==null&&t.update(j,a.ELEMENT_ARRAY_BUFFER),(G||h)&&(h=!1,P(R,L,H,Z),j!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,t.get(j).buffer))}function g(){return n.isWebGL2?a.createVertexArray():r.createVertexArrayOES()}function m(R){return n.isWebGL2?a.bindVertexArray(R):r.bindVertexArrayOES(R)}function p(R){return n.isWebGL2?a.deleteVertexArray(R):r.deleteVertexArrayOES(R)}function x(R,L,H){const Z=H.wireframe===!0;let j=s[R.id];j===void 0&&(j={},s[R.id]=j);let G=j[L.id];G===void 0&&(G={},j[L.id]=G);let K=G[Z];return K===void 0&&(K=u(g()),G[Z]=K),K}function u(R){const L=[],H=[],Z=[];for(let j=0;j<i;j++)L[j]=0,H[j]=0,Z[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:H,attributeDivisors:Z,object:R,attributes:{},index:null}}function d(R,L,H,Z){const j=c.attributes,G=L.attributes;let K=0;const Y=H.getAttributes();for(const U in Y)if(Y[U].location>=0){const q=j[U];let oe=G[U];if(oe===void 0&&(U==="instanceMatrix"&&R.instanceMatrix&&(oe=R.instanceMatrix),U==="instanceColor"&&R.instanceColor&&(oe=R.instanceColor)),q===void 0||q.attribute!==oe||oe&&q.data!==oe.data)return!0;K++}return c.attributesNum!==K||c.index!==Z}function y(R,L,H,Z){const j={},G=L.attributes;let K=0;const Y=H.getAttributes();for(const U in Y)if(Y[U].location>=0){let q=G[U];q===void 0&&(U==="instanceMatrix"&&R.instanceMatrix&&(q=R.instanceMatrix),U==="instanceColor"&&R.instanceColor&&(q=R.instanceColor));const oe={};oe.attribute=q,q&&q.data&&(oe.data=q.data),j[U]=oe,K++}c.attributes=j,c.attributesNum=K,c.index=Z}function v(){const R=c.newAttributes;for(let L=0,H=R.length;L<H;L++)R[L]=0}function M(R){S(R,0)}function S(R,L){const H=c.newAttributes,Z=c.enabledAttributes,j=c.attributeDivisors;H[R]=1,Z[R]===0&&(a.enableVertexAttribArray(R),Z[R]=1),j[R]!==L&&((n.isWebGL2?a:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,L),j[R]=L)}function T(){const R=c.newAttributes,L=c.enabledAttributes;for(let H=0,Z=L.length;H<Z;H++)L[H]!==R[H]&&(a.disableVertexAttribArray(H),L[H]=0)}function b(R,L,H,Z,j,G,K){K===!0?a.vertexAttribIPointer(R,L,H,j,G):a.vertexAttribPointer(R,L,H,Z,j,G)}function P(R,L,H,Z){if(n.isWebGL2===!1&&(R.isInstancedMesh||Z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const j=Z.attributes,G=H.getAttributes(),K=L.defaultAttributeValues;for(const Y in G){const U=G[Y];if(U.location>=0){let k=j[Y];if(k===void 0&&(Y==="instanceMatrix"&&R.instanceMatrix&&(k=R.instanceMatrix),Y==="instanceColor"&&R.instanceColor&&(k=R.instanceColor)),k!==void 0){const q=k.normalized,oe=k.itemSize,de=t.get(k);if(de===void 0)continue;const se=de.buffer,he=de.type,Te=de.bytesPerElement,Ee=n.isWebGL2===!0&&(he===a.INT||he===a.UNSIGNED_INT||k.gpuType===mo);if(k.isInterleavedBufferAttribute){const Fe=k.data,z=Fe.stride,qe=k.offset;if(Fe.isInstancedInterleavedBuffer){for(let Me=0;Me<U.locationSize;Me++)S(U.location+Me,Fe.meshPerAttribute);R.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=Fe.meshPerAttribute*Fe.count)}else for(let Me=0;Me<U.locationSize;Me++)M(U.location+Me);a.bindBuffer(a.ARRAY_BUFFER,se);for(let Me=0;Me<U.locationSize;Me++)b(U.location+Me,oe/U.locationSize,he,q,z*Te,(qe+oe/U.locationSize*Me)*Te,Ee)}else{if(k.isInstancedBufferAttribute){for(let Fe=0;Fe<U.locationSize;Fe++)S(U.location+Fe,k.meshPerAttribute);R.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let Fe=0;Fe<U.locationSize;Fe++)M(U.location+Fe);a.bindBuffer(a.ARRAY_BUFFER,se);for(let Fe=0;Fe<U.locationSize;Fe++)b(U.location+Fe,oe/U.locationSize,he,q,oe*Te,oe/U.locationSize*Fe*Te,Ee)}}else if(K!==void 0){const q=K[Y];if(q!==void 0)switch(q.length){case 2:a.vertexAttrib2fv(U.location,q);break;case 3:a.vertexAttrib3fv(U.location,q);break;case 4:a.vertexAttrib4fv(U.location,q);break;default:a.vertexAttrib1fv(U.location,q)}}}}T()}function _(){F();for(const R in s){const L=s[R];for(const H in L){const Z=L[H];for(const j in Z)p(Z[j].object),delete Z[j];delete L[H]}delete s[R]}}function A(R){if(s[R.id]===void 0)return;const L=s[R.id];for(const H in L){const Z=L[H];for(const j in Z)p(Z[j].object),delete Z[j];delete L[H]}delete s[R.id]}function N(R){for(const L in s){const H=s[L];if(H[R.id]===void 0)continue;const Z=H[R.id];for(const j in Z)p(Z[j].object),delete Z[j];delete H[R.id]}}function F(){D(),h=!0,c!==l&&(c=l,m(c.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:F,resetDefaultState:D,dispose:_,releaseStatesOfGeometry:A,releaseStatesOfProgram:N,initAttributes:v,enableAttribute:M,disableUnusedAttributes:T}}function cd(a,e,t,n){const i=n.isWebGL2;let r;function o(h){r=h}function s(h,f){a.drawArrays(r,h,f),t.update(f,r,1)}function l(h,f,g){if(g===0)return;let m,p;if(i)m=a,p="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,h,f,g),t.update(f,r,g)}function c(h,f,g){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<g;p++)this.render(h[p],f[p]);else{m.multiDrawArraysWEBGL(r,h,0,f,0,g);let p=0;for(let x=0;x<g;x++)p+=f[x];t.update(p,r,1)}}this.setMode=o,this.render=s,this.renderInstances=l,this.renderMultiDraw=c}function hd(a,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");n=a.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(b){if(b==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&a.constructor.name==="WebGL2RenderingContext";let s=t.precision!==void 0?t.precision:"highp";const l=r(s);l!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",l,"instead."),s=l);const c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,f=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),g=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=a.getParameter(a.MAX_TEXTURE_SIZE),p=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),x=a.getParameter(a.MAX_VERTEX_ATTRIBS),u=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),d=a.getParameter(a.MAX_VARYING_VECTORS),y=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),v=g>0,M=o||e.has("OES_texture_float"),S=v&&M,T=o?a.getParameter(a.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:s,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:m,maxCubemapSize:p,maxAttributes:x,maxVertexUniforms:u,maxVaryings:d,maxFragmentUniforms:y,vertexTextures:v,floatFragmentTextures:M,floatVertexTextures:S,maxSamples:T}}function fd(a){const e=this;let t=null,n=0,i=!1,r=!1;const o=new Dn,s=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,g){const m=f.length!==0||g||n!==0||i;return i=g,n=f.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,g){t=h(f,g,0)},this.setState=function(f,g,m){const p=f.clippingPlanes,x=f.clipIntersection,u=f.clipShadows,d=a.get(f);if(!i||p===null||p.length===0||r&&!u)r?h(null):c();else{const y=r?0:n,v=y*4;let M=d.clippingState||null;l.value=M,M=h(p,g,v,m);for(let S=0;S!==v;++S)M[S]=t[S];d.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,g,m,p){const x=f!==null?f.length:0;let u=null;if(x!==0){if(u=l.value,p!==!0||u===null){const d=m+x*4,y=g.matrixWorldInverse;s.getNormalMatrix(y),(u===null||u.length<d)&&(u=new Float32Array(d));for(let v=0,M=m;v!==x;++v,M+=4)o.copy(f[v]).applyMatrix4(y,s),o.normal.toArray(u,M),u[M+3]=o.constant}l.value=u,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,u}}function dd(a){let e=new WeakMap;function t(o,s){return s===fs?o.mapping=mi:s===ds&&(o.mapping=gi),o}function n(o){if(o&&o.isTexture){const s=o.mapping;if(s===fs||s===ds)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new bc(l.height/2);return c.fromEquirectangularTexture(a,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const s=o.target;s.removeEventListener("dispose",i);const l=e.get(s);l!==void 0&&(e.delete(s),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class ud extends Do{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,s=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,s-=h*this.view.offsetY,l=s-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,s,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const fi=4,Ba=[.125,.215,.35,.446,.526,.582],Nn=20,ns=new ud,Va=new je;let is=null,rs=0,ss=0;const Fn=(1+Math.sqrt(5))/2,si=1/Fn,za=[new B(1,1,1),new B(-1,1,1),new B(1,1,-1),new B(-1,1,-1),new B(0,Fn,si),new B(0,Fn,-si),new B(si,0,Fn),new B(-si,0,Fn),new B(Fn,si,0),new B(-Fn,si,0)];class Ha{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){is=this._renderer.getRenderTarget(),rs=this._renderer.getActiveCubeFace(),ss=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ga(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(is,rs,ss),e.scissorTest=!1,cr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===mi||e.mapping===gi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),is=this._renderer.getRenderTarget(),rs=this._renderer.getActiveCubeFace(),ss=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Bt,minFilter:Bt,generateMipmaps:!1,type:Fi,format:Ht,colorSpace:tn,depthBuffer:!1},i=ka(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ka(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=pd(r)),this._blurMaterial=md(r,e,t)}return i}_compileMaterial(e){const t=new Gt(this._lodPlanes[0],e);this._renderer.compile(t,ns)}_sceneToCubeUV(e,t,n,i){const s=new zt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,g=h.toneMapping;h.getClearColor(Va),h.toneMapping=mn,h.autoClear=!1;const m=new hi({name:"PMREM.Background",side:Lt,depthWrite:!1,depthTest:!1}),p=new Gt(new Bi,m);let x=!1;const u=e.background;u?u.isColor&&(m.color.copy(u),e.background=null,x=!0):(m.color.copy(Va),x=!0);for(let d=0;d<6;d++){const y=d%3;y===0?(s.up.set(0,l[d],0),s.lookAt(c[d],0,0)):y===1?(s.up.set(0,0,l[d]),s.lookAt(0,c[d],0)):(s.up.set(0,l[d],0),s.lookAt(0,0,c[d]));const v=this._cubeSize;cr(i,y*v,d>2?v:0,v,v),h.setRenderTarget(i),x&&h.render(p,s),h.render(e,s)}p.geometry.dispose(),p.material.dispose(),h.toneMapping=g,h.autoClear=f,e.background=u}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===mi||e.mapping===gi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wa()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ga());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new Gt(this._lodPlanes[0],r),s=r.uniforms;s.envMap.value=e;const l=this._cubeSize;cr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,ns)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=za[(i-1)%za.length];this._blur(e,i-1,i,r,o)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,s){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new Gt(this._lodPlanes[i],c),g=c.uniforms,m=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Nn-1),x=r/p,u=isFinite(r)?1+Math.floor(h*x):Nn;u>Nn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${u} samples when the maximum is set to ${Nn}`);const d=[];let y=0;for(let b=0;b<Nn;++b){const P=b/x,_=Math.exp(-P*P/2);d.push(_),b===0?y+=_:b<u&&(y+=2*_)}for(let b=0;b<d.length;b++)d[b]=d[b]/y;g.envMap.value=e.texture,g.samples.value=u,g.weights.value=d,g.latitudinal.value=o==="latitudinal",s&&(g.poleAxis.value=s);const{_lodMax:v}=this;g.dTheta.value=p,g.mipInt.value=v-n;const M=this._sizeLods[i],S=3*M*(i>v-fi?i-v+fi:0),T=4*(this._cubeSize-M);cr(t,S,T,3*M,2*M),l.setRenderTarget(t),l.render(f,ns)}}function pd(a){const e=[],t=[],n=[];let i=a;const r=a-fi+1+Ba.length;for(let o=0;o<r;o++){const s=Math.pow(2,i);t.push(s);let l=1/s;o>a-fi?l=Ba[o-a+fi-1]:o===0&&(l=0),n.push(l);const c=1/(s-2),h=-c,f=1+c,g=[h,h,f,h,f,f,h,h,f,f,h,f],m=6,p=6,x=3,u=2,d=1,y=new Float32Array(x*p*m),v=new Float32Array(u*p*m),M=new Float32Array(d*p*m);for(let T=0;T<m;T++){const b=T%3*2/3-1,P=T>2?0:-1,_=[b,P,0,b+2/3,P,0,b+2/3,P+1,0,b,P,0,b+2/3,P+1,0,b,P+1,0];y.set(_,x*p*T),v.set(g,u*p*T);const A=[T,T,T,T,T,T];M.set(A,d*p*T)}const S=new jt;S.setAttribute("position",new Zt(y,x)),S.setAttribute("uv",new Zt(v,u)),S.setAttribute("faceIndex",new Zt(M,d)),e.push(S),i>fi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ka(a,e,t){const n=new kn(a,e,t);return n.texture.mapping=Sr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function cr(a,e,t,n,i){a.viewport.set(e,t,n,i),a.scissor.set(e,t,n,i)}function md(a,e,t){const n=new Float32Array(Nn),i=new B(0,1,0);return new Gn({name:"SphericalGaussianBlur",defines:{n:Nn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ws(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function Ga(){return new Gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ws(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function Wa(){return new Gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ws(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function ws(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function gd(a){let e=new WeakMap,t=null;function n(s){if(s&&s.isTexture){const l=s.mapping,c=l===fs||l===ds,h=l===mi||l===gi;if(c||h)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let f=e.get(s);return t===null&&(t=new Ha(a)),f=c?t.fromEquirectangular(s,f):t.fromCubemap(s,f),e.set(s,f),f.texture}else{if(e.has(s))return e.get(s).texture;{const f=s.image;if(c&&f&&f.height>0||h&&f&&i(f)){t===null&&(t=new Ha(a));const g=c?t.fromEquirectangular(s):t.fromCubemap(s);return e.set(s,g),s.addEventListener("dispose",r),g.texture}else return null}}}return s}function i(s){let l=0;const c=6;for(let h=0;h<c;h++)s[h]!==void 0&&l++;return l===c}function r(s){const l=s.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function xd(a){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=a.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function vd(a,e,t,n){const i={},r=new WeakMap;function o(f){const g=f.target;g.index!==null&&e.remove(g.index);for(const p in g.attributes)e.remove(g.attributes[p]);for(const p in g.morphAttributes){const x=g.morphAttributes[p];for(let u=0,d=x.length;u<d;u++)e.remove(x[u])}g.removeEventListener("dispose",o),delete i[g.id];const m=r.get(g);m&&(e.remove(m),r.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function s(f,g){return i[g.id]===!0||(g.addEventListener("dispose",o),i[g.id]=!0,t.memory.geometries++),g}function l(f){const g=f.attributes;for(const p in g)e.update(g[p],a.ARRAY_BUFFER);const m=f.morphAttributes;for(const p in m){const x=m[p];for(let u=0,d=x.length;u<d;u++)e.update(x[u],a.ARRAY_BUFFER)}}function c(f){const g=[],m=f.index,p=f.attributes.position;let x=0;if(m!==null){const y=m.array;x=m.version;for(let v=0,M=y.length;v<M;v+=3){const S=y[v+0],T=y[v+1],b=y[v+2];g.push(S,T,T,b,b,S)}}else if(p!==void 0){const y=p.array;x=p.version;for(let v=0,M=y.length/3-1;v<M;v+=3){const S=v+0,T=v+1,b=v+2;g.push(S,T,T,b,b,S)}}else return;const u=new(Eo(g)?Io:Ro)(g,1);u.version=x;const d=r.get(f);d&&e.remove(d),r.set(f,u)}function h(f){const g=r.get(f);if(g){const m=f.index;m!==null&&g.version<m.version&&c(f)}else c(f);return r.get(f)}return{get:s,update:l,getWireframeAttribute:h}}function _d(a,e,t,n){const i=n.isWebGL2;let r;function o(m){r=m}let s,l;function c(m){s=m.type,l=m.bytesPerElement}function h(m,p){a.drawElements(r,p,s,m*l),t.update(p,r,1)}function f(m,p,x){if(x===0)return;let u,d;if(i)u=a,d="drawElementsInstanced";else if(u=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",u===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u[d](r,p,s,m*l,x),t.update(p,r,x)}function g(m,p,x){if(x===0)return;const u=e.get("WEBGL_multi_draw");if(u===null)for(let d=0;d<x;d++)this.render(m[d]/l,p[d]);else{u.multiDrawElementsWEBGL(r,p,0,s,m,0,x);let d=0;for(let y=0;y<x;y++)d+=p[y];t.update(d,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=f,this.renderMultiDraw=g}function yd(a){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,s){switch(t.calls++,o){case a.TRIANGLES:t.triangles+=s*(r/3);break;case a.LINES:t.lines+=s*(r/2);break;case a.LINE_STRIP:t.lines+=s*(r-1);break;case a.LINE_LOOP:t.lines+=s*r;break;case a.POINTS:t.points+=s*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Md(a,e){return a[0]-e[0]}function Sd(a,e){return Math.abs(e[1])-Math.abs(a[1])}function bd(a,e,t){const n={},i=new Float32Array(8),r=new WeakMap,o=new xt,s=[];for(let c=0;c<8;c++)s[c]=[c,0];function l(c,h,f){const g=c.morphTargetInfluences;if(e.isWebGL2===!0){const p=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,x=p!==void 0?p.length:0;let u=r.get(h);if(u===void 0||u.count!==x){let L=function(){D.dispose(),r.delete(h),h.removeEventListener("dispose",L)};var m=L;u!==void 0&&u.texture.dispose();const v=h.morphAttributes.position!==void 0,M=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,T=h.morphAttributes.position||[],b=h.morphAttributes.normal||[],P=h.morphAttributes.color||[];let _=0;v===!0&&(_=1),M===!0&&(_=2),S===!0&&(_=3);let A=h.attributes.position.count*_,N=1;A>e.maxTextureSize&&(N=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const F=new Float32Array(A*N*4*x),D=new wo(F,A,N,x);D.type=Sn,D.needsUpdate=!0;const R=_*4;for(let H=0;H<x;H++){const Z=T[H],j=b[H],G=P[H],K=A*N*4*H;for(let Y=0;Y<Z.count;Y++){const U=Y*R;v===!0&&(o.fromBufferAttribute(Z,Y),F[K+U+0]=o.x,F[K+U+1]=o.y,F[K+U+2]=o.z,F[K+U+3]=0),M===!0&&(o.fromBufferAttribute(j,Y),F[K+U+4]=o.x,F[K+U+5]=o.y,F[K+U+6]=o.z,F[K+U+7]=0),S===!0&&(o.fromBufferAttribute(G,Y),F[K+U+8]=o.x,F[K+U+9]=o.y,F[K+U+10]=o.z,F[K+U+11]=G.itemSize===4?o.w:1)}}u={count:x,texture:D,size:new We(A,N)},r.set(h,u),h.addEventListener("dispose",L)}let d=0;for(let v=0;v<g.length;v++)d+=g[v];const y=h.morphTargetsRelative?1:1-d;f.getUniforms().setValue(a,"morphTargetBaseInfluence",y),f.getUniforms().setValue(a,"morphTargetInfluences",g),f.getUniforms().setValue(a,"morphTargetsTexture",u.texture,t),f.getUniforms().setValue(a,"morphTargetsTextureSize",u.size)}else{const p=g===void 0?0:g.length;let x=n[h.id];if(x===void 0||x.length!==p){x=[];for(let M=0;M<p;M++)x[M]=[M,0];n[h.id]=x}for(let M=0;M<p;M++){const S=x[M];S[0]=M,S[1]=g[M]}x.sort(Sd);for(let M=0;M<8;M++)M<p&&x[M][1]?(s[M][0]=x[M][0],s[M][1]=x[M][1]):(s[M][0]=Number.MAX_SAFE_INTEGER,s[M][1]=0);s.sort(Md);const u=h.morphAttributes.position,d=h.morphAttributes.normal;let y=0;for(let M=0;M<8;M++){const S=s[M],T=S[0],b=S[1];T!==Number.MAX_SAFE_INTEGER&&b?(u&&h.getAttribute("morphTarget"+M)!==u[T]&&h.setAttribute("morphTarget"+M,u[T]),d&&h.getAttribute("morphNormal"+M)!==d[T]&&h.setAttribute("morphNormal"+M,d[T]),i[M]=b,y+=b):(u&&h.hasAttribute("morphTarget"+M)===!0&&h.deleteAttribute("morphTarget"+M),d&&h.hasAttribute("morphNormal"+M)===!0&&h.deleteAttribute("morphNormal"+M),i[M]=0)}const v=h.morphTargetsRelative?1:1-y;f.getUniforms().setValue(a,"morphTargetBaseInfluence",v),f.getUniforms().setValue(a,"morphTargetInfluences",i)}}return{update:l}}function Ed(a,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,f=e.get(l,h);if(i.get(f)!==c&&(e.update(f),i.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),i.get(l)!==c&&(t.update(l.instanceMatrix,a.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,a.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const g=l.skeleton;i.get(g)!==c&&(g.update(),i.set(g,c))}return f}function o(){i=new WeakMap}function s(l){const c=l.target;c.removeEventListener("dispose",s),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class Oo extends Ct{constructor(e,t,n,i,r,o,s,l,c,h){if(h=h!==void 0?h:zn,h!==zn&&h!==xi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===zn&&(n=Mn),n===void 0&&h===xi&&(n=Vn),super(null,i,r,o,s,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s!==void 0?s:Tt,this.minFilter=l!==void 0?l:Tt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Bo=new Ct,Vo=new Oo(1,1);Vo.compareFunction=bo;const zo=new wo,Ho=new ac,ko=new Fo,Xa=[],Ya=[],qa=new Float32Array(16),$a=new Float32Array(9),Za=new Float32Array(4);function Mi(a,e,t){const n=a[0];if(n<=0||n>0)return a;const i=e*t;let r=Xa[i];if(r===void 0&&(r=new Float32Array(i),Xa[i]=r),e!==0){n.toArray(r,0);for(let o=1,s=0;o!==e;++o)s+=t,a[o].toArray(r,s)}return r}function ht(a,e){if(a.length!==e.length)return!1;for(let t=0,n=a.length;t<n;t++)if(a[t]!==e[t])return!1;return!0}function ft(a,e){for(let t=0,n=e.length;t<n;t++)a[t]=e[t]}function Tr(a,e){let t=Ya[e];t===void 0&&(t=new Int32Array(e),Ya[e]=t);for(let n=0;n!==e;++n)t[n]=a.allocateTextureUnit();return t}function Ad(a,e){const t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function Td(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;a.uniform2fv(this.addr,e),ft(t,e)}}function wd(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ht(t,e))return;a.uniform3fv(this.addr,e),ft(t,e)}}function Cd(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;a.uniform4fv(this.addr,e),ft(t,e)}}function Ld(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(ht(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),ft(t,e)}else{if(ht(t,n))return;Za.set(n),a.uniformMatrix2fv(this.addr,!1,Za),ft(t,n)}}function Rd(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(ht(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),ft(t,e)}else{if(ht(t,n))return;$a.set(n),a.uniformMatrix3fv(this.addr,!1,$a),ft(t,n)}}function Id(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(ht(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),ft(t,e)}else{if(ht(t,n))return;qa.set(n),a.uniformMatrix4fv(this.addr,!1,qa),ft(t,n)}}function Pd(a,e){const t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function Dd(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;a.uniform2iv(this.addr,e),ft(t,e)}}function Fd(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ht(t,e))return;a.uniform3iv(this.addr,e),ft(t,e)}}function Ud(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;a.uniform4iv(this.addr,e),ft(t,e)}}function Nd(a,e){const t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function Od(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;a.uniform2uiv(this.addr,e),ft(t,e)}}function Bd(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ht(t,e))return;a.uniform3uiv(this.addr,e),ft(t,e)}}function Vd(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;a.uniform4uiv(this.addr,e),ft(t,e)}}function zd(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i);const r=this.type===a.SAMPLER_2D_SHADOW?Vo:Bo;t.setTexture2D(e||r,i)}function Hd(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Ho,i)}function kd(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||ko,i)}function Gd(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||zo,i)}function Wd(a){switch(a){case 5126:return Ad;case 35664:return Td;case 35665:return wd;case 35666:return Cd;case 35674:return Ld;case 35675:return Rd;case 35676:return Id;case 5124:case 35670:return Pd;case 35667:case 35671:return Dd;case 35668:case 35672:return Fd;case 35669:case 35673:return Ud;case 5125:return Nd;case 36294:return Od;case 36295:return Bd;case 36296:return Vd;case 35678:case 36198:case 36298:case 36306:case 35682:return zd;case 35679:case 36299:case 36307:return Hd;case 35680:case 36300:case 36308:case 36293:return kd;case 36289:case 36303:case 36311:case 36292:return Gd}}function Xd(a,e){a.uniform1fv(this.addr,e)}function Yd(a,e){const t=Mi(e,this.size,2);a.uniform2fv(this.addr,t)}function qd(a,e){const t=Mi(e,this.size,3);a.uniform3fv(this.addr,t)}function $d(a,e){const t=Mi(e,this.size,4);a.uniform4fv(this.addr,t)}function Zd(a,e){const t=Mi(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function jd(a,e){const t=Mi(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function Kd(a,e){const t=Mi(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function Jd(a,e){a.uniform1iv(this.addr,e)}function Qd(a,e){a.uniform2iv(this.addr,e)}function eu(a,e){a.uniform3iv(this.addr,e)}function tu(a,e){a.uniform4iv(this.addr,e)}function nu(a,e){a.uniform1uiv(this.addr,e)}function iu(a,e){a.uniform2uiv(this.addr,e)}function ru(a,e){a.uniform3uiv(this.addr,e)}function su(a,e){a.uniform4uiv(this.addr,e)}function au(a,e,t){const n=this.cache,i=e.length,r=Tr(t,i);ht(n,r)||(a.uniform1iv(this.addr,r),ft(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Bo,r[o])}function ou(a,e,t){const n=this.cache,i=e.length,r=Tr(t,i);ht(n,r)||(a.uniform1iv(this.addr,r),ft(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Ho,r[o])}function lu(a,e,t){const n=this.cache,i=e.length,r=Tr(t,i);ht(n,r)||(a.uniform1iv(this.addr,r),ft(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||ko,r[o])}function cu(a,e,t){const n=this.cache,i=e.length,r=Tr(t,i);ht(n,r)||(a.uniform1iv(this.addr,r),ft(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||zo,r[o])}function hu(a){switch(a){case 5126:return Xd;case 35664:return Yd;case 35665:return qd;case 35666:return $d;case 35674:return Zd;case 35675:return jd;case 35676:return Kd;case 5124:case 35670:return Jd;case 35667:case 35671:return Qd;case 35668:case 35672:return eu;case 35669:case 35673:return tu;case 5125:return nu;case 36294:return iu;case 36295:return ru;case 36296:return su;case 35678:case 36198:case 36298:case 36306:case 35682:return au;case 35679:case 36299:case 36307:return ou;case 35680:case 36300:case 36308:case 36293:return lu;case 36289:case 36303:case 36311:case 36292:return cu}}class fu{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Wd(t.type)}}class du{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=hu(t.type)}}class uu{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const s=i[r];s.setValue(e,t[s.id],n)}}}const as=/(\w+)(\])?(\[|\.)?/g;function ja(a,e){a.seq.push(e),a.map[e.id]=e}function pu(a,e,t){const n=a.name,i=n.length;for(as.lastIndex=0;;){const r=as.exec(n),o=as.lastIndex;let s=r[1];const l=r[2]==="]",c=r[3];if(l&&(s=s|0),c===void 0||c==="["&&o+2===i){ja(t,c===void 0?new fu(s,a,e):new du(s,a,e));break}else{let f=t.map[s];f===void 0&&(f=new uu(s),ja(t,f)),t=f}}}class pr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);pu(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const s=t[r],l=n[s.id];l.needsUpdate!==!1&&s.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Ka(a,e,t){const n=a.createShader(e);return a.shaderSource(n,t),a.compileShader(n),n}const mu=37297;let gu=0;function xu(a,e){const t=a.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const s=o+1;n.push(`${s===e?">":" "} ${s}: ${t[o]}`)}return n.join(`
`)}function vu(a){const e=Ze.getPrimaries(Ze.workingColorSpace),t=Ze.getPrimaries(a);let n;switch(e===t?n="":e===_r&&t===vr?n="LinearDisplayP3ToLinearSRGB":e===vr&&t===_r&&(n="LinearSRGBToLinearDisplayP3"),a){case tn:case br:return[n,"LinearTransferOETF"];case gt:case Es:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",a),[n,"LinearTransferOETF"]}}function Ja(a,e,t){const n=a.getShaderParameter(e,a.COMPILE_STATUS),i=a.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+xu(a.getShaderSource(e),o)}else return i}function _u(a,e){const t=vu(e);return`vec4 ${a}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function yu(a,e){let t;switch(e){case Cl:t="Linear";break;case Ll:t="Reinhard";break;case Rl:t="OptimizedCineon";break;case Il:t="ACESFilmic";break;case Dl:t="AgX";break;case Pl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Mu(a){return[a.extensionDerivatives||a.envMapCubeUVHeight||a.bumpMap||a.normalMapTangentSpace||a.clearcoatNormalMap||a.flatShading||a.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(a.extensionFragDepth||a.logarithmicDepthBuffer)&&a.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",a.extensionDrawBuffers&&a.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(a.extensionShaderTextureLOD||a.envMap||a.transmission)&&a.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(di).join(`
`)}function Su(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(di).join(`
`)}function bu(a){const e=[];for(const t in a){const n=a[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Eu(a,e){const t={},n=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=a.getActiveAttrib(e,i),o=r.name;let s=1;r.type===a.FLOAT_MAT2&&(s=2),r.type===a.FLOAT_MAT3&&(s=3),r.type===a.FLOAT_MAT4&&(s=4),t[o]={type:r.type,location:a.getAttribLocation(e,o),locationSize:s}}return t}function di(a){return a!==""}function Qa(a,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function eo(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Au=/^[ \t]*#include +<([\w\d./]+)>/gm;function vs(a){return a.replace(Au,wu)}const Tu=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function wu(a,e){let t=Ve[e];if(t===void 0){const n=Tu.get(e);if(n!==void 0)t=Ve[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return vs(t)}const Cu=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function to(a){return a.replace(Cu,Lu)}function Lu(a,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function no(a){let e="precision "+a.precision+` float;
precision `+a.precision+" int;";return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Ru(a){let e="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===fo?e="SHADOWMAP_TYPE_PCF":a.shadowMapType===nl?e="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===cn&&(e="SHADOWMAP_TYPE_VSM"),e}function Iu(a){let e="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case mi:case gi:e="ENVMAP_TYPE_CUBE";break;case Sr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Pu(a){let e="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case gi:e="ENVMAP_MODE_REFRACTION";break}return e}function Du(a){let e="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case uo:e="ENVMAP_BLENDING_MULTIPLY";break;case Tl:e="ENVMAP_BLENDING_MIX";break;case wl:e="ENVMAP_BLENDING_ADD";break}return e}function Fu(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Uu(a,e,t,n){const i=a.getContext(),r=t.defines;let o=t.vertexShader,s=t.fragmentShader;const l=Ru(t),c=Iu(t),h=Pu(t),f=Du(t),g=Fu(t),m=t.isWebGL2?"":Mu(t),p=Su(t),x=bu(r),u=i.createProgram();let d,y,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(di).join(`
`),d.length>0&&(d+=`
`),y=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(di).join(`
`),y.length>0&&(y+=`
`)):(d=[no(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(di).join(`
`),y=[m,no(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==mn?"#define TONE_MAPPING":"",t.toneMapping!==mn?Ve.tonemapping_pars_fragment:"",t.toneMapping!==mn?yu("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,_u("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(di).join(`
`)),o=vs(o),o=Qa(o,t),o=eo(o,t),s=vs(s),s=Qa(s,t),s=eo(s,t),o=to(o),s=to(s),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,d=[p,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,y=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===ya?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ya?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const M=v+d+o,S=v+y+s,T=Ka(i,i.VERTEX_SHADER,M),b=Ka(i,i.FRAGMENT_SHADER,S);i.attachShader(u,T),i.attachShader(u,b),t.index0AttributeName!==void 0?i.bindAttribLocation(u,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(u,0,"position"),i.linkProgram(u);function P(F){if(a.debug.checkShaderErrors){const D=i.getProgramInfoLog(u).trim(),R=i.getShaderInfoLog(T).trim(),L=i.getShaderInfoLog(b).trim();let H=!0,Z=!0;if(i.getProgramParameter(u,i.LINK_STATUS)===!1)if(H=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(i,u,T,b);else{const j=Ja(i,T,"vertex"),G=Ja(i,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(u,i.VALIDATE_STATUS)+`

Program Info Log: `+D+`
`+j+`
`+G)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(R===""||L==="")&&(Z=!1);Z&&(F.diagnostics={runnable:H,programLog:D,vertexShader:{log:R,prefix:d},fragmentShader:{log:L,prefix:y}})}i.deleteShader(T),i.deleteShader(b),_=new pr(i,u),A=Eu(i,u)}let _;this.getUniforms=function(){return _===void 0&&P(this),_};let A;this.getAttributes=function(){return A===void 0&&P(this),A};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=i.getProgramParameter(u,mu)),N},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(u),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=gu++,this.cacheKey=e,this.usedTimes=1,this.program=u,this.vertexShader=T,this.fragmentShader=b,this}let Nu=0;class Ou{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Bu(e),t.set(e,n)),n}}class Bu{constructor(e){this.id=Nu++,this.code=e,this.usedTimes=0}}function Vu(a,e,t,n,i,r,o){const s=new Ts,l=new Ou,c=[],h=i.isWebGL2,f=i.logarithmicDepthBuffer,g=i.vertexTextures;let m=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(_){return _===0?"uv":`uv${_}`}function u(_,A,N,F,D){const R=F.fog,L=D.geometry,H=_.isMeshStandardMaterial?F.environment:null,Z=(_.isMeshStandardMaterial?t:e).get(_.envMap||H),j=Z&&Z.mapping===Sr?Z.image.height:null,G=p[_.type];_.precision!==null&&(m=i.getMaxPrecision(_.precision),m!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",m,"instead."));const K=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,Y=K!==void 0?K.length:0;let U=0;L.morphAttributes.position!==void 0&&(U=1),L.morphAttributes.normal!==void 0&&(U=2),L.morphAttributes.color!==void 0&&(U=3);let k,q,oe,de;if(G){const St=en[G];k=St.vertexShader,q=St.fragmentShader}else k=_.vertexShader,q=_.fragmentShader,l.update(_),oe=l.getVertexShaderID(_),de=l.getFragmentShaderID(_);const se=a.getRenderTarget(),he=D.isInstancedMesh===!0,Te=D.isBatchedMesh===!0,Ee=!!_.map,Fe=!!_.matcap,z=!!Z,qe=!!_.aoMap,Me=!!_.lightMap,Se=!!_.bumpMap,me=!!_.normalMap,Ge=!!_.displacementMap,we=!!_.emissiveMap,C=!!_.metalnessMap,E=!!_.roughnessMap,V=_.anisotropy>0,ne=_.clearcoat>0,ie=_.iridescence>0,re=_.sheen>0,_e=_.transmission>0,Q=V&&!!_.anisotropyMap,le=ne&&!!_.clearcoatMap,ee=ne&&!!_.clearcoatNormalMap,fe=ne&&!!_.clearcoatRoughnessMap,te=ie&&!!_.iridescenceMap,Xe=ie&&!!_.iridescenceThicknessMap,De=re&&!!_.sheenColorMap,Re=re&&!!_.sheenRoughnessMap,be=!!_.specularMap,J=!!_.specularColorMap,ve=!!_.specularIntensityMap,Ue=_e&&!!_.transmissionMap,Je=_e&&!!_.thicknessMap,Oe=!!_.gradientMap,ue=!!_.alphaMap,I=_.alphaTest>0,ge=!!_.alphaHash,xe=!!_.extensions,Ie=!!L.attributes.uv1,Ce=!!L.attributes.uv2,tt=!!L.attributes.uv3;let nt=mn;return _.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(nt=a.toneMapping),{isWebGL2:h,shaderID:G,shaderType:_.type,shaderName:_.name,vertexShader:k,fragmentShader:q,defines:_.defines,customVertexShaderID:oe,customFragmentShaderID:de,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:m,batching:Te,instancing:he,instancingColor:he&&D.instanceColor!==null,supportsVertexTextures:g,outputColorSpace:se===null?a.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:tn,map:Ee,matcap:Fe,envMap:z,envMapMode:z&&Z.mapping,envMapCubeUVHeight:j,aoMap:qe,lightMap:Me,bumpMap:Se,normalMap:me,displacementMap:g&&Ge,emissiveMap:we,normalMapObjectSpace:me&&_.normalMapType===Yl,normalMapTangentSpace:me&&_.normalMapType===Xl,metalnessMap:C,roughnessMap:E,anisotropy:V,anisotropyMap:Q,clearcoat:ne,clearcoatMap:le,clearcoatNormalMap:ee,clearcoatRoughnessMap:fe,iridescence:ie,iridescenceMap:te,iridescenceThicknessMap:Xe,sheen:re,sheenColorMap:De,sheenRoughnessMap:Re,specularMap:be,specularColorMap:J,specularIntensityMap:ve,transmission:_e,transmissionMap:Ue,thicknessMap:Je,gradientMap:Oe,opaque:_.transparent===!1&&_.blending===Bn,alphaMap:ue,alphaTest:I,alphaHash:ge,combine:_.combine,mapUv:Ee&&x(_.map.channel),aoMapUv:qe&&x(_.aoMap.channel),lightMapUv:Me&&x(_.lightMap.channel),bumpMapUv:Se&&x(_.bumpMap.channel),normalMapUv:me&&x(_.normalMap.channel),displacementMapUv:Ge&&x(_.displacementMap.channel),emissiveMapUv:we&&x(_.emissiveMap.channel),metalnessMapUv:C&&x(_.metalnessMap.channel),roughnessMapUv:E&&x(_.roughnessMap.channel),anisotropyMapUv:Q&&x(_.anisotropyMap.channel),clearcoatMapUv:le&&x(_.clearcoatMap.channel),clearcoatNormalMapUv:ee&&x(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:fe&&x(_.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&x(_.iridescenceMap.channel),iridescenceThicknessMapUv:Xe&&x(_.iridescenceThicknessMap.channel),sheenColorMapUv:De&&x(_.sheenColorMap.channel),sheenRoughnessMapUv:Re&&x(_.sheenRoughnessMap.channel),specularMapUv:be&&x(_.specularMap.channel),specularColorMapUv:J&&x(_.specularColorMap.channel),specularIntensityMapUv:ve&&x(_.specularIntensityMap.channel),transmissionMapUv:Ue&&x(_.transmissionMap.channel),thicknessMapUv:Je&&x(_.thicknessMap.channel),alphaMapUv:ue&&x(_.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(me||V),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,vertexUv1s:Ie,vertexUv2s:Ce,vertexUv3s:tt,pointsUvs:D.isPoints===!0&&!!L.attributes.uv&&(Ee||ue),fog:!!R,useFog:_.fog===!0,fogExp2:R&&R.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:D.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:Y,morphTextureStride:U,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:a.shadowMap.enabled&&N.length>0,shadowMapType:a.shadowMap.type,toneMapping:nt,useLegacyLights:a._useLegacyLights,decodeVideoTexture:Ee&&_.map.isVideoTexture===!0&&Ze.getTransfer(_.map.colorSpace)===rt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===qt,flipSided:_.side===Lt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionDerivatives:xe&&_.extensions.derivatives===!0,extensionFragDepth:xe&&_.extensions.fragDepth===!0,extensionDrawBuffers:xe&&_.extensions.drawBuffers===!0,extensionShaderTextureLOD:xe&&_.extensions.shaderTextureLOD===!0,extensionClipCullDistance:xe&&_.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()}}function d(_){const A=[];if(_.shaderID?A.push(_.shaderID):(A.push(_.customVertexShaderID),A.push(_.customFragmentShaderID)),_.defines!==void 0)for(const N in _.defines)A.push(N),A.push(_.defines[N]);return _.isRawShaderMaterial===!1&&(y(A,_),v(A,_),A.push(a.outputColorSpace)),A.push(_.customProgramCacheKey),A.join()}function y(_,A){_.push(A.precision),_.push(A.outputColorSpace),_.push(A.envMapMode),_.push(A.envMapCubeUVHeight),_.push(A.mapUv),_.push(A.alphaMapUv),_.push(A.lightMapUv),_.push(A.aoMapUv),_.push(A.bumpMapUv),_.push(A.normalMapUv),_.push(A.displacementMapUv),_.push(A.emissiveMapUv),_.push(A.metalnessMapUv),_.push(A.roughnessMapUv),_.push(A.anisotropyMapUv),_.push(A.clearcoatMapUv),_.push(A.clearcoatNormalMapUv),_.push(A.clearcoatRoughnessMapUv),_.push(A.iridescenceMapUv),_.push(A.iridescenceThicknessMapUv),_.push(A.sheenColorMapUv),_.push(A.sheenRoughnessMapUv),_.push(A.specularMapUv),_.push(A.specularColorMapUv),_.push(A.specularIntensityMapUv),_.push(A.transmissionMapUv),_.push(A.thicknessMapUv),_.push(A.combine),_.push(A.fogExp2),_.push(A.sizeAttenuation),_.push(A.morphTargetsCount),_.push(A.morphAttributeCount),_.push(A.numDirLights),_.push(A.numPointLights),_.push(A.numSpotLights),_.push(A.numSpotLightMaps),_.push(A.numHemiLights),_.push(A.numRectAreaLights),_.push(A.numDirLightShadows),_.push(A.numPointLightShadows),_.push(A.numSpotLightShadows),_.push(A.numSpotLightShadowsWithMaps),_.push(A.numLightProbes),_.push(A.shadowMapType),_.push(A.toneMapping),_.push(A.numClippingPlanes),_.push(A.numClipIntersection),_.push(A.depthPacking)}function v(_,A){s.disableAll(),A.isWebGL2&&s.enable(0),A.supportsVertexTextures&&s.enable(1),A.instancing&&s.enable(2),A.instancingColor&&s.enable(3),A.matcap&&s.enable(4),A.envMap&&s.enable(5),A.normalMapObjectSpace&&s.enable(6),A.normalMapTangentSpace&&s.enable(7),A.clearcoat&&s.enable(8),A.iridescence&&s.enable(9),A.alphaTest&&s.enable(10),A.vertexColors&&s.enable(11),A.vertexAlphas&&s.enable(12),A.vertexUv1s&&s.enable(13),A.vertexUv2s&&s.enable(14),A.vertexUv3s&&s.enable(15),A.vertexTangents&&s.enable(16),A.anisotropy&&s.enable(17),A.alphaHash&&s.enable(18),A.batching&&s.enable(19),_.push(s.mask),s.disableAll(),A.fog&&s.enable(0),A.useFog&&s.enable(1),A.flatShading&&s.enable(2),A.logarithmicDepthBuffer&&s.enable(3),A.skinning&&s.enable(4),A.morphTargets&&s.enable(5),A.morphNormals&&s.enable(6),A.morphColors&&s.enable(7),A.premultipliedAlpha&&s.enable(8),A.shadowMapEnabled&&s.enable(9),A.useLegacyLights&&s.enable(10),A.doubleSided&&s.enable(11),A.flipSided&&s.enable(12),A.useDepthPacking&&s.enable(13),A.dithering&&s.enable(14),A.transmission&&s.enable(15),A.sheen&&s.enable(16),A.opaque&&s.enable(17),A.pointsUvs&&s.enable(18),A.decodeVideoTexture&&s.enable(19),_.push(s.mask)}function M(_){const A=p[_.type];let N;if(A){const F=en[A];N=_c.clone(F.uniforms)}else N=_.uniforms;return N}function S(_,A){let N;for(let F=0,D=c.length;F<D;F++){const R=c[F];if(R.cacheKey===A){N=R,++N.usedTimes;break}}return N===void 0&&(N=new Uu(a,A,_,r),c.push(N)),N}function T(_){if(--_.usedTimes===0){const A=c.indexOf(_);c[A]=c[c.length-1],c.pop(),_.destroy()}}function b(_){l.remove(_)}function P(){l.dispose()}return{getParameters:u,getProgramCacheKey:d,getUniforms:M,acquireProgram:S,releaseProgram:T,releaseShaderCache:b,programs:c,dispose:P}}function zu(){let a=new WeakMap;function e(r){let o=a.get(r);return o===void 0&&(o={},a.set(r,o)),o}function t(r){a.delete(r)}function n(r,o,s){a.get(r)[o]=s}function i(){a=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Hu(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function io(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function ro(){const a=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(f,g,m,p,x,u){let d=a[e];return d===void 0?(d={id:f.id,object:f,geometry:g,material:m,groupOrder:p,renderOrder:f.renderOrder,z:x,group:u},a[e]=d):(d.id=f.id,d.object=f,d.geometry=g,d.material=m,d.groupOrder=p,d.renderOrder=f.renderOrder,d.z=x,d.group=u),e++,d}function s(f,g,m,p,x,u){const d=o(f,g,m,p,x,u);m.transmission>0?n.push(d):m.transparent===!0?i.push(d):t.push(d)}function l(f,g,m,p,x,u){const d=o(f,g,m,p,x,u);m.transmission>0?n.unshift(d):m.transparent===!0?i.unshift(d):t.unshift(d)}function c(f,g){t.length>1&&t.sort(f||Hu),n.length>1&&n.sort(g||io),i.length>1&&i.sort(g||io)}function h(){for(let f=e,g=a.length;f<g;f++){const m=a[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:s,unshift:l,finish:h,sort:c}}function ku(){let a=new WeakMap;function e(n,i){const r=a.get(n);let o;return r===void 0?(o=new ro,a.set(n,[o])):i>=r.length?(o=new ro,r.push(o)):o=r[i],o}function t(){a=new WeakMap}return{get:e,dispose:t}}function Gu(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new je};break;case"SpotLight":t={position:new B,direction:new B,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new je,groundColor:new je};break;case"RectAreaLight":t={color:new je,position:new B,halfWidth:new B,halfHeight:new B};break}return a[e.id]=t,t}}}function Wu(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}let Xu=0;function Yu(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function qu(a,e){const t=new Gu,n=Wu(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new B);const r=new B,o=new mt,s=new mt;function l(h,f){let g=0,m=0,p=0;for(let F=0;F<9;F++)i.probe[F].set(0,0,0);let x=0,u=0,d=0,y=0,v=0,M=0,S=0,T=0,b=0,P=0,_=0;h.sort(Yu);const A=f===!0?Math.PI:1;for(let F=0,D=h.length;F<D;F++){const R=h[F],L=R.color,H=R.intensity,Z=R.distance,j=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)g+=L.r*H*A,m+=L.g*H*A,p+=L.b*H*A;else if(R.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(R.sh.coefficients[G],H);_++}else if(R.isDirectionalLight){const G=t.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity*A),R.castShadow){const K=R.shadow,Y=n.get(R);Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,i.directionalShadow[x]=Y,i.directionalShadowMap[x]=j,i.directionalShadowMatrix[x]=R.shadow.matrix,M++}i.directional[x]=G,x++}else if(R.isSpotLight){const G=t.get(R);G.position.setFromMatrixPosition(R.matrixWorld),G.color.copy(L).multiplyScalar(H*A),G.distance=Z,G.coneCos=Math.cos(R.angle),G.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),G.decay=R.decay,i.spot[d]=G;const K=R.shadow;if(R.map&&(i.spotLightMap[b]=R.map,b++,K.updateMatrices(R),R.castShadow&&P++),i.spotLightMatrix[d]=K.matrix,R.castShadow){const Y=n.get(R);Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,i.spotShadow[d]=Y,i.spotShadowMap[d]=j,T++}d++}else if(R.isRectAreaLight){const G=t.get(R);G.color.copy(L).multiplyScalar(H),G.halfWidth.set(R.width*.5,0,0),G.halfHeight.set(0,R.height*.5,0),i.rectArea[y]=G,y++}else if(R.isPointLight){const G=t.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity*A),G.distance=R.distance,G.decay=R.decay,R.castShadow){const K=R.shadow,Y=n.get(R);Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,Y.shadowCameraNear=K.camera.near,Y.shadowCameraFar=K.camera.far,i.pointShadow[u]=Y,i.pointShadowMap[u]=j,i.pointShadowMatrix[u]=R.shadow.matrix,S++}i.point[u]=G,u++}else if(R.isHemisphereLight){const G=t.get(R);G.skyColor.copy(R.color).multiplyScalar(H*A),G.groundColor.copy(R.groundColor).multiplyScalar(H*A),i.hemi[v]=G,v++}}y>0&&(e.isWebGL2?a.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_FLOAT_1,i.rectAreaLTC2=pe.LTC_FLOAT_2):(i.rectAreaLTC1=pe.LTC_HALF_1,i.rectAreaLTC2=pe.LTC_HALF_2):a.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_FLOAT_1,i.rectAreaLTC2=pe.LTC_FLOAT_2):a.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_HALF_1,i.rectAreaLTC2=pe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=g,i.ambient[1]=m,i.ambient[2]=p;const N=i.hash;(N.directionalLength!==x||N.pointLength!==u||N.spotLength!==d||N.rectAreaLength!==y||N.hemiLength!==v||N.numDirectionalShadows!==M||N.numPointShadows!==S||N.numSpotShadows!==T||N.numSpotMaps!==b||N.numLightProbes!==_)&&(i.directional.length=x,i.spot.length=d,i.rectArea.length=y,i.point.length=u,i.hemi.length=v,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=T+b-P,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=_,N.directionalLength=x,N.pointLength=u,N.spotLength=d,N.rectAreaLength=y,N.hemiLength=v,N.numDirectionalShadows=M,N.numPointShadows=S,N.numSpotShadows=T,N.numSpotMaps=b,N.numLightProbes=_,i.version=Xu++)}function c(h,f){let g=0,m=0,p=0,x=0,u=0;const d=f.matrixWorldInverse;for(let y=0,v=h.length;y<v;y++){const M=h[y];if(M.isDirectionalLight){const S=i.directional[g];S.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(d),g++}else if(M.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(d),S.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(d),p++}else if(M.isRectAreaLight){const S=i.rectArea[x];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(d),s.identity(),o.copy(M.matrixWorld),o.premultiply(d),s.extractRotation(o),S.halfWidth.set(M.width*.5,0,0),S.halfHeight.set(0,M.height*.5,0),S.halfWidth.applyMatrix4(s),S.halfHeight.applyMatrix4(s),x++}else if(M.isPointLight){const S=i.point[m];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(d),m++}else if(M.isHemisphereLight){const S=i.hemi[u];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(d),u++}}}return{setup:l,setupView:c,state:i}}function so(a,e){const t=new qu(a,e),n=[],i=[];function r(){n.length=0,i.length=0}function o(f){n.push(f)}function s(f){i.push(f)}function l(f){t.setup(n,f)}function c(f){t.setupView(n,f)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:s}}function $u(a,e){let t=new WeakMap;function n(r,o=0){const s=t.get(r);let l;return s===void 0?(l=new so(a,e),t.set(r,[l])):o>=s.length?(l=new so(a,e),s.push(l)):l=s[o],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class Zu extends Oi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Gl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ju extends Oi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ku=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ju=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Qu(a,e,t){let n=new Uo;const i=new We,r=new We,o=new xt,s=new Zu({depthPacking:Wl}),l=new ju,c={},h=t.maxTextureSize,f={[Tn]:Lt,[Lt]:Tn,[qt]:qt},g=new Gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:Ku,fragmentShader:Ju}),m=g.clone();m.defines.HORIZONTAL_PASS=1;const p=new jt;p.setAttribute("position",new Zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Gt(p,g),u=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fo;let d=this.type;this.render=function(T,b,P){if(u.enabled===!1||u.autoUpdate===!1&&u.needsUpdate===!1||T.length===0)return;const _=a.getRenderTarget(),A=a.getActiveCubeFace(),N=a.getActiveMipmapLevel(),F=a.state;F.setBlending(bn),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const D=d!==cn&&this.type===cn,R=d===cn&&this.type!==cn;for(let L=0,H=T.length;L<H;L++){const Z=T[L],j=Z.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;i.copy(j.mapSize);const G=j.getFrameExtents();if(i.multiply(G),r.copy(j.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/G.x),i.x=r.x*G.x,j.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/G.y),i.y=r.y*G.y,j.mapSize.y=r.y)),j.map===null||D===!0||R===!0){const Y=this.type!==cn?{minFilter:Tt,magFilter:Tt}:{};j.map!==null&&j.map.dispose(),j.map=new kn(i.x,i.y,Y),j.map.texture.name=Z.name+".shadowMap",j.camera.updateProjectionMatrix()}a.setRenderTarget(j.map),a.clear();const K=j.getViewportCount();for(let Y=0;Y<K;Y++){const U=j.getViewport(Y);o.set(r.x*U.x,r.y*U.y,r.x*U.z,r.y*U.w),F.viewport(o),j.updateMatrices(Z,Y),n=j.getFrustum(),M(b,P,j.camera,Z,this.type)}j.isPointLightShadow!==!0&&this.type===cn&&y(j,P),j.needsUpdate=!1}d=this.type,u.needsUpdate=!1,a.setRenderTarget(_,A,N)};function y(T,b){const P=e.update(x);g.defines.VSM_SAMPLES!==T.blurSamples&&(g.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,g.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new kn(i.x,i.y)),g.uniforms.shadow_pass.value=T.map.texture,g.uniforms.resolution.value=T.mapSize,g.uniforms.radius.value=T.radius,a.setRenderTarget(T.mapPass),a.clear(),a.renderBufferDirect(b,null,P,g,x,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,a.setRenderTarget(T.map),a.clear(),a.renderBufferDirect(b,null,P,m,x,null)}function v(T,b,P,_){let A=null;const N=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(N!==void 0)A=N;else if(A=P.isPointLight===!0?l:s,a.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const F=A.uuid,D=b.uuid;let R=c[F];R===void 0&&(R={},c[F]=R);let L=R[D];L===void 0&&(L=A.clone(),R[D]=L,b.addEventListener("dispose",S)),A=L}if(A.visible=b.visible,A.wireframe=b.wireframe,_===cn?A.side=b.shadowSide!==null?b.shadowSide:b.side:A.side=b.shadowSide!==null?b.shadowSide:f[b.side],A.alphaMap=b.alphaMap,A.alphaTest=b.alphaTest,A.map=b.map,A.clipShadows=b.clipShadows,A.clippingPlanes=b.clippingPlanes,A.clipIntersection=b.clipIntersection,A.displacementMap=b.displacementMap,A.displacementScale=b.displacementScale,A.displacementBias=b.displacementBias,A.wireframeLinewidth=b.wireframeLinewidth,A.linewidth=b.linewidth,P.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const F=a.properties.get(A);F.light=P}return A}function M(T,b,P,_,A){if(T.visible===!1)return;if(T.layers.test(b.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&A===cn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);const D=e.update(T),R=T.material;if(Array.isArray(R)){const L=D.groups;for(let H=0,Z=L.length;H<Z;H++){const j=L[H],G=R[j.materialIndex];if(G&&G.visible){const K=v(T,G,_,A);T.onBeforeShadow(a,T,b,P,D,K,j),a.renderBufferDirect(P,null,D,K,T,j),T.onAfterShadow(a,T,b,P,D,K,j)}}}else if(R.visible){const L=v(T,R,_,A);T.onBeforeShadow(a,T,b,P,D,L,null),a.renderBufferDirect(P,null,D,L,T,null),T.onAfterShadow(a,T,b,P,D,L,null)}}const F=T.children;for(let D=0,R=F.length;D<R;D++)M(F[D],b,P,_,A)}function S(T){T.target.removeEventListener("dispose",S);for(const P in c){const _=c[P],A=T.target.uuid;A in _&&(_[A].dispose(),delete _[A])}}}function ep(a,e,t){const n=t.isWebGL2;function i(){let I=!1;const ge=new xt;let xe=null;const Ie=new xt(0,0,0,0);return{setMask:function(Ce){xe!==Ce&&!I&&(a.colorMask(Ce,Ce,Ce,Ce),xe=Ce)},setLocked:function(Ce){I=Ce},setClear:function(Ce,tt,nt,dt,St){St===!0&&(Ce*=dt,tt*=dt,nt*=dt),ge.set(Ce,tt,nt,dt),Ie.equals(ge)===!1&&(a.clearColor(Ce,tt,nt,dt),Ie.copy(ge))},reset:function(){I=!1,xe=null,Ie.set(-1,0,0,0)}}}function r(){let I=!1,ge=null,xe=null,Ie=null;return{setTest:function(Ce){Ce?Te(a.DEPTH_TEST):Ee(a.DEPTH_TEST)},setMask:function(Ce){ge!==Ce&&!I&&(a.depthMask(Ce),ge=Ce)},setFunc:function(Ce){if(xe!==Ce){switch(Ce){case _l:a.depthFunc(a.NEVER);break;case yl:a.depthFunc(a.ALWAYS);break;case Ml:a.depthFunc(a.LESS);break;case gr:a.depthFunc(a.LEQUAL);break;case Sl:a.depthFunc(a.EQUAL);break;case bl:a.depthFunc(a.GEQUAL);break;case El:a.depthFunc(a.GREATER);break;case Al:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}xe=Ce}},setLocked:function(Ce){I=Ce},setClear:function(Ce){Ie!==Ce&&(a.clearDepth(Ce),Ie=Ce)},reset:function(){I=!1,ge=null,xe=null,Ie=null}}}function o(){let I=!1,ge=null,xe=null,Ie=null,Ce=null,tt=null,nt=null,dt=null,St=null;return{setTest:function(it){I||(it?Te(a.STENCIL_TEST):Ee(a.STENCIL_TEST))},setMask:function(it){ge!==it&&!I&&(a.stencilMask(it),ge=it)},setFunc:function(it,bt,Kt){(xe!==it||Ie!==bt||Ce!==Kt)&&(a.stencilFunc(it,bt,Kt),xe=it,Ie=bt,Ce=Kt)},setOp:function(it,bt,Kt){(tt!==it||nt!==bt||dt!==Kt)&&(a.stencilOp(it,bt,Kt),tt=it,nt=bt,dt=Kt)},setLocked:function(it){I=it},setClear:function(it){St!==it&&(a.clearStencil(it),St=it)},reset:function(){I=!1,ge=null,xe=null,Ie=null,Ce=null,tt=null,nt=null,dt=null,St=null}}}const s=new i,l=new r,c=new o,h=new WeakMap,f=new WeakMap;let g={},m={},p=new WeakMap,x=[],u=null,d=!1,y=null,v=null,M=null,S=null,T=null,b=null,P=null,_=new je(0,0,0),A=0,N=!1,F=null,D=null,R=null,L=null,H=null;const Z=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,G=0;const K=a.getParameter(a.VERSION);K.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(K)[1]),j=G>=1):K.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),j=G>=2);let Y=null,U={};const k=a.getParameter(a.SCISSOR_BOX),q=a.getParameter(a.VIEWPORT),oe=new xt().fromArray(k),de=new xt().fromArray(q);function se(I,ge,xe,Ie){const Ce=new Uint8Array(4),tt=a.createTexture();a.bindTexture(I,tt),a.texParameteri(I,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(I,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let nt=0;nt<xe;nt++)n&&(I===a.TEXTURE_3D||I===a.TEXTURE_2D_ARRAY)?a.texImage3D(ge,0,a.RGBA,1,1,Ie,0,a.RGBA,a.UNSIGNED_BYTE,Ce):a.texImage2D(ge+nt,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,Ce);return tt}const he={};he[a.TEXTURE_2D]=se(a.TEXTURE_2D,a.TEXTURE_2D,1),he[a.TEXTURE_CUBE_MAP]=se(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(he[a.TEXTURE_2D_ARRAY]=se(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),he[a.TEXTURE_3D]=se(a.TEXTURE_3D,a.TEXTURE_3D,1,1)),s.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Te(a.DEPTH_TEST),l.setFunc(gr),we(!1),C(Hs),Te(a.CULL_FACE),me(bn);function Te(I){g[I]!==!0&&(a.enable(I),g[I]=!0)}function Ee(I){g[I]!==!1&&(a.disable(I),g[I]=!1)}function Fe(I,ge){return m[I]!==ge?(a.bindFramebuffer(I,ge),m[I]=ge,n&&(I===a.DRAW_FRAMEBUFFER&&(m[a.FRAMEBUFFER]=ge),I===a.FRAMEBUFFER&&(m[a.DRAW_FRAMEBUFFER]=ge)),!0):!1}function z(I,ge){let xe=x,Ie=!1;if(I)if(xe=p.get(ge),xe===void 0&&(xe=[],p.set(ge,xe)),I.isWebGLMultipleRenderTargets){const Ce=I.texture;if(xe.length!==Ce.length||xe[0]!==a.COLOR_ATTACHMENT0){for(let tt=0,nt=Ce.length;tt<nt;tt++)xe[tt]=a.COLOR_ATTACHMENT0+tt;xe.length=Ce.length,Ie=!0}}else xe[0]!==a.COLOR_ATTACHMENT0&&(xe[0]=a.COLOR_ATTACHMENT0,Ie=!0);else xe[0]!==a.BACK&&(xe[0]=a.BACK,Ie=!0);Ie&&(t.isWebGL2?a.drawBuffers(xe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(xe))}function qe(I){return u!==I?(a.useProgram(I),u=I,!0):!1}const Me={[Un]:a.FUNC_ADD,[rl]:a.FUNC_SUBTRACT,[sl]:a.FUNC_REVERSE_SUBTRACT};if(n)Me[Xs]=a.MIN,Me[Ys]=a.MAX;else{const I=e.get("EXT_blend_minmax");I!==null&&(Me[Xs]=I.MIN_EXT,Me[Ys]=I.MAX_EXT)}const Se={[al]:a.ZERO,[ol]:a.ONE,[ll]:a.SRC_COLOR,[cs]:a.SRC_ALPHA,[pl]:a.SRC_ALPHA_SATURATE,[dl]:a.DST_COLOR,[hl]:a.DST_ALPHA,[cl]:a.ONE_MINUS_SRC_COLOR,[hs]:a.ONE_MINUS_SRC_ALPHA,[ul]:a.ONE_MINUS_DST_COLOR,[fl]:a.ONE_MINUS_DST_ALPHA,[ml]:a.CONSTANT_COLOR,[gl]:a.ONE_MINUS_CONSTANT_COLOR,[xl]:a.CONSTANT_ALPHA,[vl]:a.ONE_MINUS_CONSTANT_ALPHA};function me(I,ge,xe,Ie,Ce,tt,nt,dt,St,it){if(I===bn){d===!0&&(Ee(a.BLEND),d=!1);return}if(d===!1&&(Te(a.BLEND),d=!0),I!==il){if(I!==y||it!==N){if((v!==Un||T!==Un)&&(a.blendEquation(a.FUNC_ADD),v=Un,T=Un),it)switch(I){case Bn:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case ks:a.blendFunc(a.ONE,a.ONE);break;case Gs:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case Ws:a.blendFuncSeparate(a.ZERO,a.SRC_COLOR,a.ZERO,a.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Bn:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case ks:a.blendFunc(a.SRC_ALPHA,a.ONE);break;case Gs:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case Ws:a.blendFunc(a.ZERO,a.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}M=null,S=null,b=null,P=null,_.set(0,0,0),A=0,y=I,N=it}return}Ce=Ce||ge,tt=tt||xe,nt=nt||Ie,(ge!==v||Ce!==T)&&(a.blendEquationSeparate(Me[ge],Me[Ce]),v=ge,T=Ce),(xe!==M||Ie!==S||tt!==b||nt!==P)&&(a.blendFuncSeparate(Se[xe],Se[Ie],Se[tt],Se[nt]),M=xe,S=Ie,b=tt,P=nt),(dt.equals(_)===!1||St!==A)&&(a.blendColor(dt.r,dt.g,dt.b,St),_.copy(dt),A=St),y=I,N=!1}function Ge(I,ge){I.side===qt?Ee(a.CULL_FACE):Te(a.CULL_FACE);let xe=I.side===Lt;ge&&(xe=!xe),we(xe),I.blending===Bn&&I.transparent===!1?me(bn):me(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),l.setFunc(I.depthFunc),l.setTest(I.depthTest),l.setMask(I.depthWrite),s.setMask(I.colorWrite);const Ie=I.stencilWrite;c.setTest(Ie),Ie&&(c.setMask(I.stencilWriteMask),c.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),c.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),V(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Te(a.SAMPLE_ALPHA_TO_COVERAGE):Ee(a.SAMPLE_ALPHA_TO_COVERAGE)}function we(I){F!==I&&(I?a.frontFace(a.CW):a.frontFace(a.CCW),F=I)}function C(I){I!==el?(Te(a.CULL_FACE),I!==D&&(I===Hs?a.cullFace(a.BACK):I===tl?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):Ee(a.CULL_FACE),D=I}function E(I){I!==R&&(j&&a.lineWidth(I),R=I)}function V(I,ge,xe){I?(Te(a.POLYGON_OFFSET_FILL),(L!==ge||H!==xe)&&(a.polygonOffset(ge,xe),L=ge,H=xe)):Ee(a.POLYGON_OFFSET_FILL)}function ne(I){I?Te(a.SCISSOR_TEST):Ee(a.SCISSOR_TEST)}function ie(I){I===void 0&&(I=a.TEXTURE0+Z-1),Y!==I&&(a.activeTexture(I),Y=I)}function re(I,ge,xe){xe===void 0&&(Y===null?xe=a.TEXTURE0+Z-1:xe=Y);let Ie=U[xe];Ie===void 0&&(Ie={type:void 0,texture:void 0},U[xe]=Ie),(Ie.type!==I||Ie.texture!==ge)&&(Y!==xe&&(a.activeTexture(xe),Y=xe),a.bindTexture(I,ge||he[I]),Ie.type=I,Ie.texture=ge)}function _e(){const I=U[Y];I!==void 0&&I.type!==void 0&&(a.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Q(){try{a.compressedTexImage2D.apply(a,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function le(){try{a.compressedTexImage3D.apply(a,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ee(){try{a.texSubImage2D.apply(a,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function fe(){try{a.texSubImage3D.apply(a,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function te(){try{a.compressedTexSubImage2D.apply(a,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Xe(){try{a.compressedTexSubImage3D.apply(a,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function De(){try{a.texStorage2D.apply(a,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Re(){try{a.texStorage3D.apply(a,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function be(){try{a.texImage2D.apply(a,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function J(){try{a.texImage3D.apply(a,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ve(I){oe.equals(I)===!1&&(a.scissor(I.x,I.y,I.z,I.w),oe.copy(I))}function Ue(I){de.equals(I)===!1&&(a.viewport(I.x,I.y,I.z,I.w),de.copy(I))}function Je(I,ge){let xe=f.get(ge);xe===void 0&&(xe=new WeakMap,f.set(ge,xe));let Ie=xe.get(I);Ie===void 0&&(Ie=a.getUniformBlockIndex(ge,I.name),xe.set(I,Ie))}function Oe(I,ge){const Ie=f.get(ge).get(I);h.get(ge)!==Ie&&(a.uniformBlockBinding(ge,Ie,I.__bindingPointIndex),h.set(ge,Ie))}function ue(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),n===!0&&(a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null)),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),g={},Y=null,U={},m={},p=new WeakMap,x=[],u=null,d=!1,y=null,v=null,M=null,S=null,T=null,b=null,P=null,_=new je(0,0,0),A=0,N=!1,F=null,D=null,R=null,L=null,H=null,oe.set(0,0,a.canvas.width,a.canvas.height),de.set(0,0,a.canvas.width,a.canvas.height),s.reset(),l.reset(),c.reset()}return{buffers:{color:s,depth:l,stencil:c},enable:Te,disable:Ee,bindFramebuffer:Fe,drawBuffers:z,useProgram:qe,setBlending:me,setMaterial:Ge,setFlipSided:we,setCullFace:C,setLineWidth:E,setPolygonOffset:V,setScissorTest:ne,activeTexture:ie,bindTexture:re,unbindTexture:_e,compressedTexImage2D:Q,compressedTexImage3D:le,texImage2D:be,texImage3D:J,updateUBOMapping:Je,uniformBlockBinding:Oe,texStorage2D:De,texStorage3D:Re,texSubImage2D:ee,texSubImage3D:fe,compressedTexSubImage2D:te,compressedTexSubImage3D:Xe,scissor:ve,viewport:Ue,reset:ue}}function tp(a,e,t,n,i,r,o){const s=i.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let f;const g=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(C,E){return m?new OffscreenCanvas(C,E):Ui("canvas")}function x(C,E,V,ne){let ie=1;if((C.width>ne||C.height>ne)&&(ie=ne/Math.max(C.width,C.height)),ie<1||E===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const re=E?xs:Math.floor,_e=re(ie*C.width),Q=re(ie*C.height);f===void 0&&(f=p(_e,Q));const le=V?p(_e,Q):f;return le.width=_e,le.height=Q,le.getContext("2d").drawImage(C,0,0,_e,Q),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+_e+"x"+Q+")."),le}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function u(C){return Ma(C.width)&&Ma(C.height)}function d(C){return s?!1:C.wrapS!==$t||C.wrapT!==$t||C.minFilter!==Tt&&C.minFilter!==Bt}function y(C,E){return C.generateMipmaps&&E&&C.minFilter!==Tt&&C.minFilter!==Bt}function v(C){a.generateMipmap(C)}function M(C,E,V,ne,ie=!1){if(s===!1)return E;if(C!==null){if(a[C]!==void 0)return a[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let re=E;if(E===a.RED&&(V===a.FLOAT&&(re=a.R32F),V===a.HALF_FLOAT&&(re=a.R16F),V===a.UNSIGNED_BYTE&&(re=a.R8)),E===a.RED_INTEGER&&(V===a.UNSIGNED_BYTE&&(re=a.R8UI),V===a.UNSIGNED_SHORT&&(re=a.R16UI),V===a.UNSIGNED_INT&&(re=a.R32UI),V===a.BYTE&&(re=a.R8I),V===a.SHORT&&(re=a.R16I),V===a.INT&&(re=a.R32I)),E===a.RG&&(V===a.FLOAT&&(re=a.RG32F),V===a.HALF_FLOAT&&(re=a.RG16F),V===a.UNSIGNED_BYTE&&(re=a.RG8)),E===a.RGBA){const _e=ie?xr:Ze.getTransfer(ne);V===a.FLOAT&&(re=a.RGBA32F),V===a.HALF_FLOAT&&(re=a.RGBA16F),V===a.UNSIGNED_BYTE&&(re=_e===rt?a.SRGB8_ALPHA8:a.RGBA8),V===a.UNSIGNED_SHORT_4_4_4_4&&(re=a.RGBA4),V===a.UNSIGNED_SHORT_5_5_5_1&&(re=a.RGB5_A1)}return(re===a.R16F||re===a.R32F||re===a.RG16F||re===a.RG32F||re===a.RGBA16F||re===a.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function S(C,E,V){return y(C,V)===!0||C.isFramebufferTexture&&C.minFilter!==Tt&&C.minFilter!==Bt?Math.log2(Math.max(E.width,E.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?E.mipmaps.length:1}function T(C){return C===Tt||C===qs||C===Ir?a.NEAREST:a.LINEAR}function b(C){const E=C.target;E.removeEventListener("dispose",b),_(E),E.isVideoTexture&&h.delete(E)}function P(C){const E=C.target;E.removeEventListener("dispose",P),N(E)}function _(C){const E=n.get(C);if(E.__webglInit===void 0)return;const V=C.source,ne=g.get(V);if(ne){const ie=ne[E.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&A(C),Object.keys(ne).length===0&&g.delete(V)}n.remove(C)}function A(C){const E=n.get(C);a.deleteTexture(E.__webglTexture);const V=C.source,ne=g.get(V);delete ne[E.__cacheKey],o.memory.textures--}function N(C){const E=C.texture,V=n.get(C),ne=n.get(E);if(ne.__webglTexture!==void 0&&(a.deleteTexture(ne.__webglTexture),o.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(V.__webglFramebuffer[ie]))for(let re=0;re<V.__webglFramebuffer[ie].length;re++)a.deleteFramebuffer(V.__webglFramebuffer[ie][re]);else a.deleteFramebuffer(V.__webglFramebuffer[ie]);V.__webglDepthbuffer&&a.deleteRenderbuffer(V.__webglDepthbuffer[ie])}else{if(Array.isArray(V.__webglFramebuffer))for(let ie=0;ie<V.__webglFramebuffer.length;ie++)a.deleteFramebuffer(V.__webglFramebuffer[ie]);else a.deleteFramebuffer(V.__webglFramebuffer);if(V.__webglDepthbuffer&&a.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&a.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let ie=0;ie<V.__webglColorRenderbuffer.length;ie++)V.__webglColorRenderbuffer[ie]&&a.deleteRenderbuffer(V.__webglColorRenderbuffer[ie]);V.__webglDepthRenderbuffer&&a.deleteRenderbuffer(V.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let ie=0,re=E.length;ie<re;ie++){const _e=n.get(E[ie]);_e.__webglTexture&&(a.deleteTexture(_e.__webglTexture),o.memory.textures--),n.remove(E[ie])}n.remove(E),n.remove(C)}let F=0;function D(){F=0}function R(){const C=F;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),F+=1,C}function L(C){const E=[];return E.push(C.wrapS),E.push(C.wrapT),E.push(C.wrapR||0),E.push(C.magFilter),E.push(C.minFilter),E.push(C.anisotropy),E.push(C.internalFormat),E.push(C.format),E.push(C.type),E.push(C.generateMipmaps),E.push(C.premultiplyAlpha),E.push(C.flipY),E.push(C.unpackAlignment),E.push(C.colorSpace),E.join()}function H(C,E){const V=n.get(C);if(C.isVideoTexture&&Ge(C),C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){const ne=C.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{oe(V,C,E);return}}t.bindTexture(a.TEXTURE_2D,V.__webglTexture,a.TEXTURE0+E)}function Z(C,E){const V=n.get(C);if(C.version>0&&V.__version!==C.version){oe(V,C,E);return}t.bindTexture(a.TEXTURE_2D_ARRAY,V.__webglTexture,a.TEXTURE0+E)}function j(C,E){const V=n.get(C);if(C.version>0&&V.__version!==C.version){oe(V,C,E);return}t.bindTexture(a.TEXTURE_3D,V.__webglTexture,a.TEXTURE0+E)}function G(C,E){const V=n.get(C);if(C.version>0&&V.__version!==C.version){de(V,C,E);return}t.bindTexture(a.TEXTURE_CUBE_MAP,V.__webglTexture,a.TEXTURE0+E)}const K={[Pi]:a.REPEAT,[$t]:a.CLAMP_TO_EDGE,[us]:a.MIRRORED_REPEAT},Y={[Tt]:a.NEAREST,[qs]:a.NEAREST_MIPMAP_NEAREST,[Ir]:a.NEAREST_MIPMAP_LINEAR,[Bt]:a.LINEAR,[Fl]:a.LINEAR_MIPMAP_NEAREST,[Di]:a.LINEAR_MIPMAP_LINEAR},U={[ql]:a.NEVER,[Ql]:a.ALWAYS,[$l]:a.LESS,[bo]:a.LEQUAL,[Zl]:a.EQUAL,[Jl]:a.GEQUAL,[jl]:a.GREATER,[Kl]:a.NOTEQUAL};function k(C,E,V){if(V?(a.texParameteri(C,a.TEXTURE_WRAP_S,K[E.wrapS]),a.texParameteri(C,a.TEXTURE_WRAP_T,K[E.wrapT]),(C===a.TEXTURE_3D||C===a.TEXTURE_2D_ARRAY)&&a.texParameteri(C,a.TEXTURE_WRAP_R,K[E.wrapR]),a.texParameteri(C,a.TEXTURE_MAG_FILTER,Y[E.magFilter]),a.texParameteri(C,a.TEXTURE_MIN_FILTER,Y[E.minFilter])):(a.texParameteri(C,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(C,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE),(C===a.TEXTURE_3D||C===a.TEXTURE_2D_ARRAY)&&a.texParameteri(C,a.TEXTURE_WRAP_R,a.CLAMP_TO_EDGE),(E.wrapS!==$t||E.wrapT!==$t)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),a.texParameteri(C,a.TEXTURE_MAG_FILTER,T(E.magFilter)),a.texParameteri(C,a.TEXTURE_MIN_FILTER,T(E.minFilter)),E.minFilter!==Tt&&E.minFilter!==Bt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(a.texParameteri(C,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(C,a.TEXTURE_COMPARE_FUNC,U[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ne=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===Tt||E.minFilter!==Ir&&E.minFilter!==Di||E.type===Sn&&e.has("OES_texture_float_linear")===!1||s===!1&&E.type===Fi&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||n.get(E).__currentAnisotropy)&&(a.texParameterf(C,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy)}}function q(C,E){let V=!1;C.__webglInit===void 0&&(C.__webglInit=!0,E.addEventListener("dispose",b));const ne=E.source;let ie=g.get(ne);ie===void 0&&(ie={},g.set(ne,ie));const re=L(E);if(re!==C.__cacheKey){ie[re]===void 0&&(ie[re]={texture:a.createTexture(),usedTimes:0},o.memory.textures++,V=!0),ie[re].usedTimes++;const _e=ie[C.__cacheKey];_e!==void 0&&(ie[C.__cacheKey].usedTimes--,_e.usedTimes===0&&A(E)),C.__cacheKey=re,C.__webglTexture=ie[re].texture}return V}function oe(C,E,V){let ne=a.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ne=a.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ne=a.TEXTURE_3D);const ie=q(C,E),re=E.source;t.bindTexture(ne,C.__webglTexture,a.TEXTURE0+V);const _e=n.get(re);if(re.version!==_e.__version||ie===!0){t.activeTexture(a.TEXTURE0+V);const Q=Ze.getPrimaries(Ze.workingColorSpace),le=E.colorSpace===kt?null:Ze.getPrimaries(E.colorSpace),ee=E.colorSpace===kt||Q===le?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,E.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,E.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);const fe=d(E)&&u(E.image)===!1;let te=x(E.image,fe,!1,i.maxTextureSize);te=we(E,te);const Xe=u(te)||s,De=r.convert(E.format,E.colorSpace);let Re=r.convert(E.type),be=M(E.internalFormat,De,Re,E.colorSpace,E.isVideoTexture);k(ne,E,Xe);let J;const ve=E.mipmaps,Ue=s&&E.isVideoTexture!==!0&&be!==Mo,Je=_e.__version===void 0||ie===!0,Oe=S(E,te,Xe);if(E.isDepthTexture)be=a.DEPTH_COMPONENT,s?E.type===Sn?be=a.DEPTH_COMPONENT32F:E.type===Mn?be=a.DEPTH_COMPONENT24:E.type===Vn?be=a.DEPTH24_STENCIL8:be=a.DEPTH_COMPONENT16:E.type===Sn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===zn&&be===a.DEPTH_COMPONENT&&E.type!==bs&&E.type!==Mn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=Mn,Re=r.convert(E.type)),E.format===xi&&be===a.DEPTH_COMPONENT&&(be=a.DEPTH_STENCIL,E.type!==Vn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Vn,Re=r.convert(E.type))),Je&&(Ue?t.texStorage2D(a.TEXTURE_2D,1,be,te.width,te.height):t.texImage2D(a.TEXTURE_2D,0,be,te.width,te.height,0,De,Re,null));else if(E.isDataTexture)if(ve.length>0&&Xe){Ue&&Je&&t.texStorage2D(a.TEXTURE_2D,Oe,be,ve[0].width,ve[0].height);for(let ue=0,I=ve.length;ue<I;ue++)J=ve[ue],Ue?t.texSubImage2D(a.TEXTURE_2D,ue,0,0,J.width,J.height,De,Re,J.data):t.texImage2D(a.TEXTURE_2D,ue,be,J.width,J.height,0,De,Re,J.data);E.generateMipmaps=!1}else Ue?(Je&&t.texStorage2D(a.TEXTURE_2D,Oe,be,te.width,te.height),t.texSubImage2D(a.TEXTURE_2D,0,0,0,te.width,te.height,De,Re,te.data)):t.texImage2D(a.TEXTURE_2D,0,be,te.width,te.height,0,De,Re,te.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ue&&Je&&t.texStorage3D(a.TEXTURE_2D_ARRAY,Oe,be,ve[0].width,ve[0].height,te.depth);for(let ue=0,I=ve.length;ue<I;ue++)J=ve[ue],E.format!==Ht?De!==null?Ue?t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,ue,0,0,0,J.width,J.height,te.depth,De,J.data,0,0):t.compressedTexImage3D(a.TEXTURE_2D_ARRAY,ue,be,J.width,J.height,te.depth,0,J.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?t.texSubImage3D(a.TEXTURE_2D_ARRAY,ue,0,0,0,J.width,J.height,te.depth,De,Re,J.data):t.texImage3D(a.TEXTURE_2D_ARRAY,ue,be,J.width,J.height,te.depth,0,De,Re,J.data)}else{Ue&&Je&&t.texStorage2D(a.TEXTURE_2D,Oe,be,ve[0].width,ve[0].height);for(let ue=0,I=ve.length;ue<I;ue++)J=ve[ue],E.format!==Ht?De!==null?Ue?t.compressedTexSubImage2D(a.TEXTURE_2D,ue,0,0,J.width,J.height,De,J.data):t.compressedTexImage2D(a.TEXTURE_2D,ue,be,J.width,J.height,0,J.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?t.texSubImage2D(a.TEXTURE_2D,ue,0,0,J.width,J.height,De,Re,J.data):t.texImage2D(a.TEXTURE_2D,ue,be,J.width,J.height,0,De,Re,J.data)}else if(E.isDataArrayTexture)Ue?(Je&&t.texStorage3D(a.TEXTURE_2D_ARRAY,Oe,be,te.width,te.height,te.depth),t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,De,Re,te.data)):t.texImage3D(a.TEXTURE_2D_ARRAY,0,be,te.width,te.height,te.depth,0,De,Re,te.data);else if(E.isData3DTexture)Ue?(Je&&t.texStorage3D(a.TEXTURE_3D,Oe,be,te.width,te.height,te.depth),t.texSubImage3D(a.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,De,Re,te.data)):t.texImage3D(a.TEXTURE_3D,0,be,te.width,te.height,te.depth,0,De,Re,te.data);else if(E.isFramebufferTexture){if(Je)if(Ue)t.texStorage2D(a.TEXTURE_2D,Oe,be,te.width,te.height);else{let ue=te.width,I=te.height;for(let ge=0;ge<Oe;ge++)t.texImage2D(a.TEXTURE_2D,ge,be,ue,I,0,De,Re,null),ue>>=1,I>>=1}}else if(ve.length>0&&Xe){Ue&&Je&&t.texStorage2D(a.TEXTURE_2D,Oe,be,ve[0].width,ve[0].height);for(let ue=0,I=ve.length;ue<I;ue++)J=ve[ue],Ue?t.texSubImage2D(a.TEXTURE_2D,ue,0,0,De,Re,J):t.texImage2D(a.TEXTURE_2D,ue,be,De,Re,J);E.generateMipmaps=!1}else Ue?(Je&&t.texStorage2D(a.TEXTURE_2D,Oe,be,te.width,te.height),t.texSubImage2D(a.TEXTURE_2D,0,0,0,De,Re,te)):t.texImage2D(a.TEXTURE_2D,0,be,De,Re,te);y(E,Xe)&&v(ne),_e.__version=re.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function de(C,E,V){if(E.image.length!==6)return;const ne=q(C,E),ie=E.source;t.bindTexture(a.TEXTURE_CUBE_MAP,C.__webglTexture,a.TEXTURE0+V);const re=n.get(ie);if(ie.version!==re.__version||ne===!0){t.activeTexture(a.TEXTURE0+V);const _e=Ze.getPrimaries(Ze.workingColorSpace),Q=E.colorSpace===kt?null:Ze.getPrimaries(E.colorSpace),le=E.colorSpace===kt||_e===Q?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,E.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,E.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);const ee=E.isCompressedTexture||E.image[0].isCompressedTexture,fe=E.image[0]&&E.image[0].isDataTexture,te=[];for(let ue=0;ue<6;ue++)!ee&&!fe?te[ue]=x(E.image[ue],!1,!0,i.maxCubemapSize):te[ue]=fe?E.image[ue].image:E.image[ue],te[ue]=we(E,te[ue]);const Xe=te[0],De=u(Xe)||s,Re=r.convert(E.format,E.colorSpace),be=r.convert(E.type),J=M(E.internalFormat,Re,be,E.colorSpace),ve=s&&E.isVideoTexture!==!0,Ue=re.__version===void 0||ne===!0;let Je=S(E,Xe,De);k(a.TEXTURE_CUBE_MAP,E,De);let Oe;if(ee){ve&&Ue&&t.texStorage2D(a.TEXTURE_CUBE_MAP,Je,J,Xe.width,Xe.height);for(let ue=0;ue<6;ue++){Oe=te[ue].mipmaps;for(let I=0;I<Oe.length;I++){const ge=Oe[I];E.format!==Ht?Re!==null?ve?t.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ue,I,0,0,ge.width,ge.height,Re,ge.data):t.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ue,I,J,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ve?t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ue,I,0,0,ge.width,ge.height,Re,be,ge.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ue,I,J,ge.width,ge.height,0,Re,be,ge.data)}}}else{Oe=E.mipmaps,ve&&Ue&&(Oe.length>0&&Je++,t.texStorage2D(a.TEXTURE_CUBE_MAP,Je,J,te[0].width,te[0].height));for(let ue=0;ue<6;ue++)if(fe){ve?t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,te[ue].width,te[ue].height,Re,be,te[ue].data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,J,te[ue].width,te[ue].height,0,Re,be,te[ue].data);for(let I=0;I<Oe.length;I++){const xe=Oe[I].image[ue].image;ve?t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ue,I+1,0,0,xe.width,xe.height,Re,be,xe.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ue,I+1,J,xe.width,xe.height,0,Re,be,xe.data)}}else{ve?t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Re,be,te[ue]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,J,Re,be,te[ue]);for(let I=0;I<Oe.length;I++){const ge=Oe[I];ve?t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ue,I+1,0,0,Re,be,ge.image[ue]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ue,I+1,J,Re,be,ge.image[ue])}}}y(E,De)&&v(a.TEXTURE_CUBE_MAP),re.__version=ie.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function se(C,E,V,ne,ie,re){const _e=r.convert(V.format,V.colorSpace),Q=r.convert(V.type),le=M(V.internalFormat,_e,Q,V.colorSpace);if(!n.get(E).__hasExternalTextures){const fe=Math.max(1,E.width>>re),te=Math.max(1,E.height>>re);ie===a.TEXTURE_3D||ie===a.TEXTURE_2D_ARRAY?t.texImage3D(ie,re,le,fe,te,E.depth,0,_e,Q,null):t.texImage2D(ie,re,le,fe,te,0,_e,Q,null)}t.bindFramebuffer(a.FRAMEBUFFER,C),me(E)?l.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,ne,ie,n.get(V).__webglTexture,0,Se(E)):(ie===a.TEXTURE_2D||ie>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,ne,ie,n.get(V).__webglTexture,re),t.bindFramebuffer(a.FRAMEBUFFER,null)}function he(C,E,V){if(a.bindRenderbuffer(a.RENDERBUFFER,C),E.depthBuffer&&!E.stencilBuffer){let ne=s===!0?a.DEPTH_COMPONENT24:a.DEPTH_COMPONENT16;if(V||me(E)){const ie=E.depthTexture;ie&&ie.isDepthTexture&&(ie.type===Sn?ne=a.DEPTH_COMPONENT32F:ie.type===Mn&&(ne=a.DEPTH_COMPONENT24));const re=Se(E);me(E)?l.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,re,ne,E.width,E.height):a.renderbufferStorageMultisample(a.RENDERBUFFER,re,ne,E.width,E.height)}else a.renderbufferStorage(a.RENDERBUFFER,ne,E.width,E.height);a.framebufferRenderbuffer(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.RENDERBUFFER,C)}else if(E.depthBuffer&&E.stencilBuffer){const ne=Se(E);V&&me(E)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,ne,a.DEPTH24_STENCIL8,E.width,E.height):me(E)?l.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,ne,a.DEPTH24_STENCIL8,E.width,E.height):a.renderbufferStorage(a.RENDERBUFFER,a.DEPTH_STENCIL,E.width,E.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.RENDERBUFFER,C)}else{const ne=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let ie=0;ie<ne.length;ie++){const re=ne[ie],_e=r.convert(re.format,re.colorSpace),Q=r.convert(re.type),le=M(re.internalFormat,_e,Q,re.colorSpace),ee=Se(E);V&&me(E)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,ee,le,E.width,E.height):me(E)?l.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,ee,le,E.width,E.height):a.renderbufferStorage(a.RENDERBUFFER,le,E.width,E.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function Te(C,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(a.FRAMEBUFFER,C),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),H(E.depthTexture,0);const ne=n.get(E.depthTexture).__webglTexture,ie=Se(E);if(E.depthTexture.format===zn)me(E)?l.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,ne,0,ie):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,ne,0);else if(E.depthTexture.format===xi)me(E)?l.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,ne,0,ie):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function Ee(C){const E=n.get(C),V=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!E.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");Te(E.__webglFramebuffer,C)}else if(V){E.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)t.bindFramebuffer(a.FRAMEBUFFER,E.__webglFramebuffer[ne]),E.__webglDepthbuffer[ne]=a.createRenderbuffer(),he(E.__webglDepthbuffer[ne],C,!1)}else t.bindFramebuffer(a.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=a.createRenderbuffer(),he(E.__webglDepthbuffer,C,!1);t.bindFramebuffer(a.FRAMEBUFFER,null)}function Fe(C,E,V){const ne=n.get(C);E!==void 0&&se(ne.__webglFramebuffer,C,C.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),V!==void 0&&Ee(C)}function z(C){const E=C.texture,V=n.get(C),ne=n.get(E);C.addEventListener("dispose",P),C.isWebGLMultipleRenderTargets!==!0&&(ne.__webglTexture===void 0&&(ne.__webglTexture=a.createTexture()),ne.__version=E.version,o.memory.textures++);const ie=C.isWebGLCubeRenderTarget===!0,re=C.isWebGLMultipleRenderTargets===!0,_e=u(C)||s;if(ie){V.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(s&&E.mipmaps&&E.mipmaps.length>0){V.__webglFramebuffer[Q]=[];for(let le=0;le<E.mipmaps.length;le++)V.__webglFramebuffer[Q][le]=a.createFramebuffer()}else V.__webglFramebuffer[Q]=a.createFramebuffer()}else{if(s&&E.mipmaps&&E.mipmaps.length>0){V.__webglFramebuffer=[];for(let Q=0;Q<E.mipmaps.length;Q++)V.__webglFramebuffer[Q]=a.createFramebuffer()}else V.__webglFramebuffer=a.createFramebuffer();if(re)if(i.drawBuffers){const Q=C.texture;for(let le=0,ee=Q.length;le<ee;le++){const fe=n.get(Q[le]);fe.__webglTexture===void 0&&(fe.__webglTexture=a.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(s&&C.samples>0&&me(C)===!1){const Q=re?E:[E];V.__webglMultisampledFramebuffer=a.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(a.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let le=0;le<Q.length;le++){const ee=Q[le];V.__webglColorRenderbuffer[le]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,V.__webglColorRenderbuffer[le]);const fe=r.convert(ee.format,ee.colorSpace),te=r.convert(ee.type),Xe=M(ee.internalFormat,fe,te,ee.colorSpace,C.isXRRenderTarget===!0),De=Se(C);a.renderbufferStorageMultisample(a.RENDERBUFFER,De,Xe,C.width,C.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+le,a.RENDERBUFFER,V.__webglColorRenderbuffer[le])}a.bindRenderbuffer(a.RENDERBUFFER,null),C.depthBuffer&&(V.__webglDepthRenderbuffer=a.createRenderbuffer(),he(V.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(a.FRAMEBUFFER,null)}}if(ie){t.bindTexture(a.TEXTURE_CUBE_MAP,ne.__webglTexture),k(a.TEXTURE_CUBE_MAP,E,_e);for(let Q=0;Q<6;Q++)if(s&&E.mipmaps&&E.mipmaps.length>0)for(let le=0;le<E.mipmaps.length;le++)se(V.__webglFramebuffer[Q][le],C,E,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+Q,le);else se(V.__webglFramebuffer[Q],C,E,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);y(E,_e)&&v(a.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(re){const Q=C.texture;for(let le=0,ee=Q.length;le<ee;le++){const fe=Q[le],te=n.get(fe);t.bindTexture(a.TEXTURE_2D,te.__webglTexture),k(a.TEXTURE_2D,fe,_e),se(V.__webglFramebuffer,C,fe,a.COLOR_ATTACHMENT0+le,a.TEXTURE_2D,0),y(fe,_e)&&v(a.TEXTURE_2D)}t.unbindTexture()}else{let Q=a.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(s?Q=C.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Q,ne.__webglTexture),k(Q,E,_e),s&&E.mipmaps&&E.mipmaps.length>0)for(let le=0;le<E.mipmaps.length;le++)se(V.__webglFramebuffer[le],C,E,a.COLOR_ATTACHMENT0,Q,le);else se(V.__webglFramebuffer,C,E,a.COLOR_ATTACHMENT0,Q,0);y(E,_e)&&v(Q),t.unbindTexture()}C.depthBuffer&&Ee(C)}function qe(C){const E=u(C)||s,V=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let ne=0,ie=V.length;ne<ie;ne++){const re=V[ne];if(y(re,E)){const _e=C.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:a.TEXTURE_2D,Q=n.get(re).__webglTexture;t.bindTexture(_e,Q),v(_e),t.unbindTexture()}}}function Me(C){if(s&&C.samples>0&&me(C)===!1){const E=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],V=C.width,ne=C.height;let ie=a.COLOR_BUFFER_BIT;const re=[],_e=C.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Q=n.get(C),le=C.isWebGLMultipleRenderTargets===!0;if(le)for(let ee=0;ee<E.length;ee++)t.bindFramebuffer(a.FRAMEBUFFER,Q.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+ee,a.RENDERBUFFER,null),t.bindFramebuffer(a.FRAMEBUFFER,Q.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+ee,a.TEXTURE_2D,null,0);t.bindFramebuffer(a.READ_FRAMEBUFFER,Q.__webglMultisampledFramebuffer),t.bindFramebuffer(a.DRAW_FRAMEBUFFER,Q.__webglFramebuffer);for(let ee=0;ee<E.length;ee++){re.push(a.COLOR_ATTACHMENT0+ee),C.depthBuffer&&re.push(_e);const fe=Q.__ignoreDepthValues!==void 0?Q.__ignoreDepthValues:!1;if(fe===!1&&(C.depthBuffer&&(ie|=a.DEPTH_BUFFER_BIT),C.stencilBuffer&&(ie|=a.STENCIL_BUFFER_BIT)),le&&a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,Q.__webglColorRenderbuffer[ee]),fe===!0&&(a.invalidateFramebuffer(a.READ_FRAMEBUFFER,[_e]),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[_e])),le){const te=n.get(E[ee]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,te,0)}a.blitFramebuffer(0,0,V,ne,0,0,V,ne,ie,a.NEAREST),c&&a.invalidateFramebuffer(a.READ_FRAMEBUFFER,re)}if(t.bindFramebuffer(a.READ_FRAMEBUFFER,null),t.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),le)for(let ee=0;ee<E.length;ee++){t.bindFramebuffer(a.FRAMEBUFFER,Q.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+ee,a.RENDERBUFFER,Q.__webglColorRenderbuffer[ee]);const fe=n.get(E[ee]).__webglTexture;t.bindFramebuffer(a.FRAMEBUFFER,Q.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+ee,a.TEXTURE_2D,fe,0)}t.bindFramebuffer(a.DRAW_FRAMEBUFFER,Q.__webglMultisampledFramebuffer)}}function Se(C){return Math.min(i.maxSamples,C.samples)}function me(C){const E=n.get(C);return s&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ge(C){const E=o.render.frame;h.get(C)!==E&&(h.set(C,E),C.update())}function we(C,E){const V=C.colorSpace,ne=C.format,ie=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===ms||V!==tn&&V!==kt&&(Ze.getTransfer(V)===rt?s===!1?e.has("EXT_sRGB")===!0&&ne===Ht?(C.format=ms,C.minFilter=Bt,C.generateMipmaps=!1):E=Ao.sRGBToLinear(E):(ne!==Ht||ie!==En)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),E}this.allocateTextureUnit=R,this.resetTextureUnits=D,this.setTexture2D=H,this.setTexture2DArray=Z,this.setTexture3D=j,this.setTextureCube=G,this.rebindTextures=Fe,this.setupRenderTarget=z,this.updateRenderTargetMipmap=qe,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=se,this.useMultisampledRTT=me}function np(a,e,t){const n=t.isWebGL2;function i(r,o=kt){let s;const l=Ze.getTransfer(o);if(r===En)return a.UNSIGNED_BYTE;if(r===go)return a.UNSIGNED_SHORT_4_4_4_4;if(r===xo)return a.UNSIGNED_SHORT_5_5_5_1;if(r===Ul)return a.BYTE;if(r===Nl)return a.SHORT;if(r===bs)return a.UNSIGNED_SHORT;if(r===mo)return a.INT;if(r===Mn)return a.UNSIGNED_INT;if(r===Sn)return a.FLOAT;if(r===Fi)return n?a.HALF_FLOAT:(s=e.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(r===Ol)return a.ALPHA;if(r===Ht)return a.RGBA;if(r===Bl)return a.LUMINANCE;if(r===Vl)return a.LUMINANCE_ALPHA;if(r===zn)return a.DEPTH_COMPONENT;if(r===xi)return a.DEPTH_STENCIL;if(r===ms)return s=e.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(r===zl)return a.RED;if(r===vo)return a.RED_INTEGER;if(r===Hl)return a.RG;if(r===_o)return a.RG_INTEGER;if(r===yo)return a.RGBA_INTEGER;if(r===Pr||r===Dr||r===Fr||r===Ur)if(l===rt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(r===Pr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Dr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Fr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ur)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(r===Pr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Dr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Fr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ur)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===$s||r===Zs||r===js||r===Ks)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(r===$s)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Zs)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===js)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ks)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Mo)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Js||r===Qs)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(r===Js)return l===rt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(r===Qs)return l===rt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===ea||r===ta||r===na||r===ia||r===ra||r===sa||r===aa||r===oa||r===la||r===ca||r===ha||r===fa||r===da||r===ua)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(r===ea)return l===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ta)return l===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===na)return l===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ia)return l===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ra)return l===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===sa)return l===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===aa)return l===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===oa)return l===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===la)return l===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===ca)return l===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===ha)return l===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===fa)return l===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===da)return l===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ua)return l===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Nr||r===pa||r===ma)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(r===Nr)return l===rt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===pa)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===ma)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===kl||r===ga||r===xa||r===va)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(r===Nr)return s.COMPRESSED_RED_RGTC1_EXT;if(r===ga)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===xa)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===va)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Vn?n?a.UNSIGNED_INT_24_8:(s=e.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):a[r]!==void 0?a[r]:null}return{convert:i}}class ip extends zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class hr extends Rt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const rp={type:"move"};class os{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const s=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const u=t.getJointPose(x,n),d=this._getHandJoint(c,x);u!==null&&(d.matrix.fromArray(u.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=u.radius),d.visible=u!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],g=h.position.distanceTo(f.position),m=.02,p=.005;c.inputState.pinching&&g>m+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&g<=m-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));s!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(rp)))}return s!==null&&(s.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new hr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class sp extends _i{constructor(e,t){super();const n=this;let i=null,r=1,o=null,s="local-floor",l=1,c=null,h=null,f=null,g=null,m=null,p=null;const x=t.getContextAttributes();let u=null,d=null;const y=[],v=[],M=new We;let S=null;const T=new zt;T.layers.enable(1),T.viewport=new xt;const b=new zt;b.layers.enable(2),b.viewport=new xt;const P=[T,b],_=new ip;_.layers.enable(1),_.layers.enable(2);let A=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let q=y[k];return q===void 0&&(q=new os,y[k]=q),q.getTargetRaySpace()},this.getControllerGrip=function(k){let q=y[k];return q===void 0&&(q=new os,y[k]=q),q.getGripSpace()},this.getHand=function(k){let q=y[k];return q===void 0&&(q=new os,y[k]=q),q.getHandSpace()};function F(k){const q=v.indexOf(k.inputSource);if(q===-1)return;const oe=y[q];oe!==void 0&&(oe.update(k.inputSource,k.frame,c||o),oe.dispatchEvent({type:k.type,data:k.inputSource}))}function D(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",D),i.removeEventListener("inputsourceschange",R);for(let k=0;k<y.length;k++){const q=v[k];q!==null&&(v[k]=null,y[k].disconnect(q))}A=null,N=null,e.setRenderTarget(u),m=null,g=null,f=null,i=null,d=null,U.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(M.width,M.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){r=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){s=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(k){c=k},this.getBaseLayer=function(){return g!==null?g:m},this.getBinding=function(){return f},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(k){if(i=k,i!==null){if(u=e.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",D),i.addEventListener("inputsourceschange",R),x.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(M),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const q={antialias:i.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(i,t,q),i.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),d=new kn(m.framebufferWidth,m.framebufferHeight,{format:Ht,type:En,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let q=null,oe=null,de=null;x.depth&&(de=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,q=x.stencil?xi:zn,oe=x.stencil?Vn:Mn);const se={colorFormat:t.RGBA8,depthFormat:de,scaleFactor:r};f=new XRWebGLBinding(i,t),g=f.createProjectionLayer(se),i.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),d=new kn(g.textureWidth,g.textureHeight,{format:Ht,type:En,depthTexture:new Oo(g.textureWidth,g.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});const he=e.properties.get(d);he.__ignoreDepthValues=g.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(s),U.setContext(i),U.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function R(k){for(let q=0;q<k.removed.length;q++){const oe=k.removed[q],de=v.indexOf(oe);de>=0&&(v[de]=null,y[de].disconnect(oe))}for(let q=0;q<k.added.length;q++){const oe=k.added[q];let de=v.indexOf(oe);if(de===-1){for(let he=0;he<y.length;he++)if(he>=v.length){v.push(oe),de=he;break}else if(v[he]===null){v[he]=oe,de=he;break}if(de===-1)break}const se=y[de];se&&se.connect(oe)}}const L=new B,H=new B;function Z(k,q,oe){L.setFromMatrixPosition(q.matrixWorld),H.setFromMatrixPosition(oe.matrixWorld);const de=L.distanceTo(H),se=q.projectionMatrix.elements,he=oe.projectionMatrix.elements,Te=se[14]/(se[10]-1),Ee=se[14]/(se[10]+1),Fe=(se[9]+1)/se[5],z=(se[9]-1)/se[5],qe=(se[8]-1)/se[0],Me=(he[8]+1)/he[0],Se=Te*qe,me=Te*Me,Ge=de/(-qe+Me),we=Ge*-qe;q.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(we),k.translateZ(Ge),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();const C=Te+Ge,E=Ee+Ge,V=Se-we,ne=me+(de-we),ie=Fe*Ee/E*C,re=z*Ee/E*C;k.projectionMatrix.makePerspective(V,ne,ie,re,C,E),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}function j(k,q){q===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(q.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(i===null)return;_.near=b.near=T.near=k.near,_.far=b.far=T.far=k.far,(A!==_.near||N!==_.far)&&(i.updateRenderState({depthNear:_.near,depthFar:_.far}),A=_.near,N=_.far);const q=k.parent,oe=_.cameras;j(_,q);for(let de=0;de<oe.length;de++)j(oe[de],q);oe.length===2?Z(_,T,b):_.projectionMatrix.copy(T.projectionMatrix),G(k,_,q)};function G(k,q,oe){oe===null?k.matrix.copy(q.matrixWorld):(k.matrix.copy(oe.matrixWorld),k.matrix.invert(),k.matrix.multiply(q.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(q.projectionMatrix),k.projectionMatrixInverse.copy(q.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=gs*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(g===null&&m===null))return l},this.setFoveation=function(k){l=k,g!==null&&(g.fixedFoveation=k),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=k)};let K=null;function Y(k,q){if(h=q.getViewerPose(c||o),p=q,h!==null){const oe=h.views;m!==null&&(e.setRenderTargetFramebuffer(d,m.framebuffer),e.setRenderTarget(d));let de=!1;oe.length!==_.cameras.length&&(_.cameras.length=0,de=!0);for(let se=0;se<oe.length;se++){const he=oe[se];let Te=null;if(m!==null)Te=m.getViewport(he);else{const Fe=f.getViewSubImage(g,he);Te=Fe.viewport,se===0&&(e.setRenderTargetTextures(d,Fe.colorTexture,g.ignoreDepthValues?void 0:Fe.depthStencilTexture),e.setRenderTarget(d))}let Ee=P[se];Ee===void 0&&(Ee=new zt,Ee.layers.enable(se),Ee.viewport=new xt,P[se]=Ee),Ee.matrix.fromArray(he.transform.matrix),Ee.matrix.decompose(Ee.position,Ee.quaternion,Ee.scale),Ee.projectionMatrix.fromArray(he.projectionMatrix),Ee.projectionMatrixInverse.copy(Ee.projectionMatrix).invert(),Ee.viewport.set(Te.x,Te.y,Te.width,Te.height),se===0&&(_.matrix.copy(Ee.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),de===!0&&_.cameras.push(Ee)}}for(let oe=0;oe<y.length;oe++){const de=v[oe],se=y[oe];de!==null&&se!==void 0&&se.update(de,q,c||o)}K&&K(k,q),q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:q}),p=null}const U=new No;U.setAnimationLoop(Y),this.setAnimationLoop=function(k){K=k},this.dispose=function(){}}}function ap(a,e){function t(u,d){u.matrixAutoUpdate===!0&&u.updateMatrix(),d.value.copy(u.matrix)}function n(u,d){d.color.getRGB(u.fogColor.value,Po(a)),d.isFog?(u.fogNear.value=d.near,u.fogFar.value=d.far):d.isFogExp2&&(u.fogDensity.value=d.density)}function i(u,d,y,v,M){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(u,d):d.isMeshToonMaterial?(r(u,d),f(u,d)):d.isMeshPhongMaterial?(r(u,d),h(u,d)):d.isMeshStandardMaterial?(r(u,d),g(u,d),d.isMeshPhysicalMaterial&&m(u,d,M)):d.isMeshMatcapMaterial?(r(u,d),p(u,d)):d.isMeshDepthMaterial?r(u,d):d.isMeshDistanceMaterial?(r(u,d),x(u,d)):d.isMeshNormalMaterial?r(u,d):d.isLineBasicMaterial?(o(u,d),d.isLineDashedMaterial&&s(u,d)):d.isPointsMaterial?l(u,d,y,v):d.isSpriteMaterial?c(u,d):d.isShadowMaterial?(u.color.value.copy(d.color),u.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(u,d){u.opacity.value=d.opacity,d.color&&u.diffuse.value.copy(d.color),d.emissive&&u.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(u.map.value=d.map,t(d.map,u.mapTransform)),d.alphaMap&&(u.alphaMap.value=d.alphaMap,t(d.alphaMap,u.alphaMapTransform)),d.bumpMap&&(u.bumpMap.value=d.bumpMap,t(d.bumpMap,u.bumpMapTransform),u.bumpScale.value=d.bumpScale,d.side===Lt&&(u.bumpScale.value*=-1)),d.normalMap&&(u.normalMap.value=d.normalMap,t(d.normalMap,u.normalMapTransform),u.normalScale.value.copy(d.normalScale),d.side===Lt&&u.normalScale.value.negate()),d.displacementMap&&(u.displacementMap.value=d.displacementMap,t(d.displacementMap,u.displacementMapTransform),u.displacementScale.value=d.displacementScale,u.displacementBias.value=d.displacementBias),d.emissiveMap&&(u.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,u.emissiveMapTransform)),d.specularMap&&(u.specularMap.value=d.specularMap,t(d.specularMap,u.specularMapTransform)),d.alphaTest>0&&(u.alphaTest.value=d.alphaTest);const y=e.get(d).envMap;if(y&&(u.envMap.value=y,u.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.reflectivity.value=d.reflectivity,u.ior.value=d.ior,u.refractionRatio.value=d.refractionRatio),d.lightMap){u.lightMap.value=d.lightMap;const v=a._useLegacyLights===!0?Math.PI:1;u.lightMapIntensity.value=d.lightMapIntensity*v,t(d.lightMap,u.lightMapTransform)}d.aoMap&&(u.aoMap.value=d.aoMap,u.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,u.aoMapTransform))}function o(u,d){u.diffuse.value.copy(d.color),u.opacity.value=d.opacity,d.map&&(u.map.value=d.map,t(d.map,u.mapTransform))}function s(u,d){u.dashSize.value=d.dashSize,u.totalSize.value=d.dashSize+d.gapSize,u.scale.value=d.scale}function l(u,d,y,v){u.diffuse.value.copy(d.color),u.opacity.value=d.opacity,u.size.value=d.size*y,u.scale.value=v*.5,d.map&&(u.map.value=d.map,t(d.map,u.uvTransform)),d.alphaMap&&(u.alphaMap.value=d.alphaMap,t(d.alphaMap,u.alphaMapTransform)),d.alphaTest>0&&(u.alphaTest.value=d.alphaTest)}function c(u,d){u.diffuse.value.copy(d.color),u.opacity.value=d.opacity,u.rotation.value=d.rotation,d.map&&(u.map.value=d.map,t(d.map,u.mapTransform)),d.alphaMap&&(u.alphaMap.value=d.alphaMap,t(d.alphaMap,u.alphaMapTransform)),d.alphaTest>0&&(u.alphaTest.value=d.alphaTest)}function h(u,d){u.specular.value.copy(d.specular),u.shininess.value=Math.max(d.shininess,1e-4)}function f(u,d){d.gradientMap&&(u.gradientMap.value=d.gradientMap)}function g(u,d){u.metalness.value=d.metalness,d.metalnessMap&&(u.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,u.metalnessMapTransform)),u.roughness.value=d.roughness,d.roughnessMap&&(u.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,u.roughnessMapTransform)),e.get(d).envMap&&(u.envMapIntensity.value=d.envMapIntensity)}function m(u,d,y){u.ior.value=d.ior,d.sheen>0&&(u.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),u.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(u.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,u.sheenColorMapTransform)),d.sheenRoughnessMap&&(u.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,u.sheenRoughnessMapTransform))),d.clearcoat>0&&(u.clearcoat.value=d.clearcoat,u.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(u.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,u.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(u.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,u.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(u.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,u.clearcoatNormalMapTransform),u.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Lt&&u.clearcoatNormalScale.value.negate())),d.iridescence>0&&(u.iridescence.value=d.iridescence,u.iridescenceIOR.value=d.iridescenceIOR,u.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],u.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(u.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,u.iridescenceMapTransform)),d.iridescenceThicknessMap&&(u.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,u.iridescenceThicknessMapTransform))),d.transmission>0&&(u.transmission.value=d.transmission,u.transmissionSamplerMap.value=y.texture,u.transmissionSamplerSize.value.set(y.width,y.height),d.transmissionMap&&(u.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,u.transmissionMapTransform)),u.thickness.value=d.thickness,d.thicknessMap&&(u.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,u.thicknessMapTransform)),u.attenuationDistance.value=d.attenuationDistance,u.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(u.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(u.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,u.anisotropyMapTransform))),u.specularIntensity.value=d.specularIntensity,u.specularColor.value.copy(d.specularColor),d.specularColorMap&&(u.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,u.specularColorMapTransform)),d.specularIntensityMap&&(u.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,u.specularIntensityMapTransform))}function p(u,d){d.matcap&&(u.matcap.value=d.matcap)}function x(u,d){const y=e.get(d).light;u.referencePosition.value.setFromMatrixPosition(y.matrixWorld),u.nearDistance.value=y.shadow.camera.near,u.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function op(a,e,t,n){let i={},r={},o=[];const s=t.isWebGL2?a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,v){const M=v.program;n.uniformBlockBinding(y,M)}function c(y,v){let M=i[y.id];M===void 0&&(p(y),M=h(y),i[y.id]=M,y.addEventListener("dispose",u));const S=v.program;n.updateUBOMapping(y,S);const T=e.render.frame;r[y.id]!==T&&(g(y),r[y.id]=T)}function h(y){const v=f();y.__bindingPointIndex=v;const M=a.createBuffer(),S=y.__size,T=y.usage;return a.bindBuffer(a.UNIFORM_BUFFER,M),a.bufferData(a.UNIFORM_BUFFER,S,T),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,v,M),M}function f(){for(let y=0;y<s;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(y){const v=i[y.id],M=y.uniforms,S=y.__cache;a.bindBuffer(a.UNIFORM_BUFFER,v);for(let T=0,b=M.length;T<b;T++){const P=Array.isArray(M[T])?M[T]:[M[T]];for(let _=0,A=P.length;_<A;_++){const N=P[_];if(m(N,T,_,S)===!0){const F=N.__offset,D=Array.isArray(N.value)?N.value:[N.value];let R=0;for(let L=0;L<D.length;L++){const H=D[L],Z=x(H);typeof H=="number"||typeof H=="boolean"?(N.__data[0]=H,a.bufferSubData(a.UNIFORM_BUFFER,F+R,N.__data)):H.isMatrix3?(N.__data[0]=H.elements[0],N.__data[1]=H.elements[1],N.__data[2]=H.elements[2],N.__data[3]=0,N.__data[4]=H.elements[3],N.__data[5]=H.elements[4],N.__data[6]=H.elements[5],N.__data[7]=0,N.__data[8]=H.elements[6],N.__data[9]=H.elements[7],N.__data[10]=H.elements[8],N.__data[11]=0):(H.toArray(N.__data,R),R+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,F,N.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function m(y,v,M,S){const T=y.value,b=v+"_"+M;if(S[b]===void 0)return typeof T=="number"||typeof T=="boolean"?S[b]=T:S[b]=T.clone(),!0;{const P=S[b];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return S[b]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function p(y){const v=y.uniforms;let M=0;const S=16;for(let b=0,P=v.length;b<P;b++){const _=Array.isArray(v[b])?v[b]:[v[b]];for(let A=0,N=_.length;A<N;A++){const F=_[A],D=Array.isArray(F.value)?F.value:[F.value];for(let R=0,L=D.length;R<L;R++){const H=D[R],Z=x(H),j=M%S;j!==0&&S-j<Z.boundary&&(M+=S-j),F.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=M,M+=Z.storage}}}const T=M%S;return T>0&&(M+=S-T),y.__size=M,y.__cache={},this}function x(y){const v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function u(y){const v=y.target;v.removeEventListener("dispose",u);const M=o.indexOf(v.__bindingPointIndex);o.splice(M,1),a.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function d(){for(const y in i)a.deleteBuffer(i[y]);o=[],i={},r={}}return{bind:l,update:c,dispose:d}}class Go{constructor(e={}){const{canvas:t=tc(),context:n=null,depth:i=!0,stencil:r=!0,alpha:o=!1,antialias:s=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let g;n!==null?g=n.getContextAttributes().alpha:g=o;const m=new Uint32Array(4),p=new Int32Array(4);let x=null,u=null;const d=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=gt,this._useLegacyLights=!1,this.toneMapping=mn,this.toneMappingExposure=1;const v=this;let M=!1,S=0,T=0,b=null,P=-1,_=null;const A=new xt,N=new xt;let F=null;const D=new je(0);let R=0,L=t.width,H=t.height,Z=1,j=null,G=null;const K=new xt(0,0,L,H),Y=new xt(0,0,L,H);let U=!1;const k=new Uo;let q=!1,oe=!1,de=null;const se=new mt,he=new We,Te=new B,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Fe(){return b===null?Z:1}let z=n;function qe(w,O){for(let X=0;X<w.length;X++){const $=w[X],W=t.getContext($,O);if(W!==null)return W}return null}try{const w={alpha:!0,depth:i,stencil:r,antialias:s,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ss}`),t.addEventListener("webglcontextlost",ue,!1),t.addEventListener("webglcontextrestored",I,!1),t.addEventListener("webglcontextcreationerror",ge,!1),z===null){const O=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&O.shift(),z=qe(O,w),z===null)throw qe(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&z instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Me,Se,me,Ge,we,C,E,V,ne,ie,re,_e,Q,le,ee,fe,te,Xe,De,Re,be,J,ve,Ue;function Je(){Me=new xd(z),Se=new hd(z,Me,e),Me.init(Se),J=new np(z,Me,Se),me=new ep(z,Me,Se),Ge=new yd(z),we=new zu,C=new tp(z,Me,me,we,Se,J,Ge),E=new dd(v),V=new gd(v),ne=new Tc(z,Se),ve=new ld(z,Me,ne,Se),ie=new vd(z,ne,Ge,ve),re=new Ed(z,ie,ne,Ge),De=new bd(z,Se,C),fe=new fd(we),_e=new Vu(v,E,V,Me,Se,ve,fe),Q=new ap(v,we),le=new ku,ee=new $u(Me,Se),Xe=new od(v,E,V,me,re,g,l),te=new Qu(v,re,Se),Ue=new op(z,Ge,Se,me),Re=new cd(z,Me,Ge,Se),be=new _d(z,Me,Ge,Se),Ge.programs=_e.programs,v.capabilities=Se,v.extensions=Me,v.properties=we,v.renderLists=le,v.shadowMap=te,v.state=me,v.info=Ge}Je();const Oe=new sp(v,z);this.xr=Oe,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const w=Me.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Me.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(w){w!==void 0&&(Z=w,this.setSize(L,H,!1))},this.getSize=function(w){return w.set(L,H)},this.setSize=function(w,O,X=!0){if(Oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}L=w,H=O,t.width=Math.floor(w*Z),t.height=Math.floor(O*Z),X===!0&&(t.style.width=w+"px",t.style.height=O+"px"),this.setViewport(0,0,w,O)},this.getDrawingBufferSize=function(w){return w.set(L*Z,H*Z).floor()},this.setDrawingBufferSize=function(w,O,X){L=w,H=O,Z=X,t.width=Math.floor(w*X),t.height=Math.floor(O*X),this.setViewport(0,0,w,O)},this.getCurrentViewport=function(w){return w.copy(A)},this.getViewport=function(w){return w.copy(K)},this.setViewport=function(w,O,X,$){w.isVector4?K.set(w.x,w.y,w.z,w.w):K.set(w,O,X,$),me.viewport(A.copy(K).multiplyScalar(Z).floor())},this.getScissor=function(w){return w.copy(Y)},this.setScissor=function(w,O,X,$){w.isVector4?Y.set(w.x,w.y,w.z,w.w):Y.set(w,O,X,$),me.scissor(N.copy(Y).multiplyScalar(Z).floor())},this.getScissorTest=function(){return U},this.setScissorTest=function(w){me.setScissorTest(U=w)},this.setOpaqueSort=function(w){j=w},this.setTransparentSort=function(w){G=w},this.getClearColor=function(w){return w.copy(Xe.getClearColor())},this.setClearColor=function(){Xe.setClearColor.apply(Xe,arguments)},this.getClearAlpha=function(){return Xe.getClearAlpha()},this.setClearAlpha=function(){Xe.setClearAlpha.apply(Xe,arguments)},this.clear=function(w=!0,O=!0,X=!0){let $=0;if(w){let W=!1;if(b!==null){const ye=b.texture.format;W=ye===yo||ye===_o||ye===vo}if(W){const ye=b.texture.type,Ae=ye===En||ye===Mn||ye===bs||ye===Vn||ye===go||ye===xo,Le=Xe.getClearColor(),Pe=Xe.getClearAlpha(),ze=Le.r,Ne=Le.g,Be=Le.b;Ae?(m[0]=ze,m[1]=Ne,m[2]=Be,m[3]=Pe,z.clearBufferuiv(z.COLOR,0,m)):(p[0]=ze,p[1]=Ne,p[2]=Be,p[3]=Pe,z.clearBufferiv(z.COLOR,0,p))}else $|=z.COLOR_BUFFER_BIT}O&&($|=z.DEPTH_BUFFER_BIT),X&&($|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ue,!1),t.removeEventListener("webglcontextrestored",I,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),le.dispose(),ee.dispose(),we.dispose(),E.dispose(),V.dispose(),re.dispose(),ve.dispose(),Ue.dispose(),_e.dispose(),Oe.dispose(),Oe.removeEventListener("sessionstart",St),Oe.removeEventListener("sessionend",it),de&&(de.dispose(),de=null),bt.stop()};function ue(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function I(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const w=Ge.autoReset,O=te.enabled,X=te.autoUpdate,$=te.needsUpdate,W=te.type;Je(),Ge.autoReset=w,te.enabled=O,te.autoUpdate=X,te.needsUpdate=$,te.type=W}function ge(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function xe(w){const O=w.target;O.removeEventListener("dispose",xe),Ie(O)}function Ie(w){Ce(w),we.remove(w)}function Ce(w){const O=we.get(w).programs;O!==void 0&&(O.forEach(function(X){_e.releaseProgram(X)}),w.isShaderMaterial&&_e.releaseShaderCache(w))}this.renderBufferDirect=function(w,O,X,$,W,ye){O===null&&(O=Ee);const Ae=W.isMesh&&W.matrixWorld.determinant()<0,Le=$o(w,O,X,$,W);me.setMaterial($,Ae);let Pe=X.index,ze=1;if($.wireframe===!0){if(Pe=ie.getWireframeAttribute(X),Pe===void 0)return;ze=2}const Ne=X.drawRange,Be=X.attributes.position;let ot=Ne.start*ze,It=(Ne.start+Ne.count)*ze;ye!==null&&(ot=Math.max(ot,ye.start*ze),It=Math.min(It,(ye.start+ye.count)*ze)),Pe!==null?(ot=Math.max(ot,0),It=Math.min(It,Pe.count)):Be!=null&&(ot=Math.max(ot,0),It=Math.min(It,Be.count));const ut=It-ot;if(ut<0||ut===1/0)return;ve.setup(W,$,Le,X,Pe);let nn,st=Re;if(Pe!==null&&(nn=ne.get(Pe),st=be,st.setIndex(nn)),W.isMesh)$.wireframe===!0?(me.setLineWidth($.wireframeLinewidth*Fe()),st.setMode(z.LINES)):st.setMode(z.TRIANGLES);else if(W.isLine){let He=$.linewidth;He===void 0&&(He=1),me.setLineWidth(He*Fe()),W.isLineSegments?st.setMode(z.LINES):W.isLineLoop?st.setMode(z.LINE_LOOP):st.setMode(z.LINE_STRIP)}else W.isPoints?st.setMode(z.POINTS):W.isSprite&&st.setMode(z.TRIANGLES);if(W.isBatchedMesh)st.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else if(W.isInstancedMesh)st.renderInstances(ot,ut,W.count);else if(X.isInstancedBufferGeometry){const He=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,wr=Math.min(X.instanceCount,He);st.renderInstances(ot,ut,wr)}else st.render(ot,ut)};function tt(w,O,X){w.transparent===!0&&w.side===qt&&w.forceSinglePass===!1?(w.side=Lt,w.needsUpdate=!0,zi(w,O,X),w.side=Tn,w.needsUpdate=!0,zi(w,O,X),w.side=qt):zi(w,O,X)}this.compile=function(w,O,X=null){X===null&&(X=w),u=ee.get(X),u.init(),y.push(u),X.traverseVisible(function(W){W.isLight&&W.layers.test(O.layers)&&(u.pushLight(W),W.castShadow&&u.pushShadow(W))}),w!==X&&w.traverseVisible(function(W){W.isLight&&W.layers.test(O.layers)&&(u.pushLight(W),W.castShadow&&u.pushShadow(W))}),u.setupLights(v._useLegacyLights);const $=new Set;return w.traverse(function(W){const ye=W.material;if(ye)if(Array.isArray(ye))for(let Ae=0;Ae<ye.length;Ae++){const Le=ye[Ae];tt(Le,X,W),$.add(Le)}else tt(ye,X,W),$.add(ye)}),y.pop(),u=null,$},this.compileAsync=function(w,O,X=null){const $=this.compile(w,O,X);return new Promise(W=>{function ye(){if($.forEach(function(Ae){we.get(Ae).currentProgram.isReady()&&$.delete(Ae)}),$.size===0){W(w);return}setTimeout(ye,10)}Me.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let nt=null;function dt(w){nt&&nt(w)}function St(){bt.stop()}function it(){bt.start()}const bt=new No;bt.setAnimationLoop(dt),typeof self<"u"&&bt.setContext(self),this.setAnimationLoop=function(w){nt=w,Oe.setAnimationLoop(w),w===null?bt.stop():bt.start()},Oe.addEventListener("sessionstart",St),Oe.addEventListener("sessionend",it),this.render=function(w,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Oe.enabled===!0&&Oe.isPresenting===!0&&(Oe.cameraAutoUpdate===!0&&Oe.updateCamera(O),O=Oe.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,O,b),u=ee.get(w,y.length),u.init(),y.push(u),se.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),k.setFromProjectionMatrix(se),oe=this.localClippingEnabled,q=fe.init(this.clippingPlanes,oe),x=le.get(w,d.length),x.init(),d.push(x),Kt(w,O,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(j,G),this.info.render.frame++,q===!0&&fe.beginShadows();const X=u.state.shadowsArray;if(te.render(X,w,O),q===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset(),Xe.render(x,w),u.setupLights(v._useLegacyLights),O.isArrayCamera){const $=O.cameras;for(let W=0,ye=$.length;W<ye;W++){const Ae=$[W];Rs(x,w,Ae,Ae.viewport)}}else Rs(x,w,O);b!==null&&(C.updateMultisampleRenderTarget(b),C.updateRenderTargetMipmap(b)),w.isScene===!0&&w.onAfterRender(v,w,O),ve.resetDefaultState(),P=-1,_=null,y.pop(),y.length>0?u=y[y.length-1]:u=null,d.pop(),d.length>0?x=d[d.length-1]:x=null};function Kt(w,O,X,$){if(w.visible===!1)return;if(w.layers.test(O.layers)){if(w.isGroup)X=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(O);else if(w.isLight)u.pushLight(w),w.castShadow&&u.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||k.intersectsSprite(w)){$&&Te.setFromMatrixPosition(w.matrixWorld).applyMatrix4(se);const Ae=re.update(w),Le=w.material;Le.visible&&x.push(w,Ae,Le,X,Te.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||k.intersectsObject(w))){const Ae=re.update(w),Le=w.material;if($&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Te.copy(w.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),Te.copy(Ae.boundingSphere.center)),Te.applyMatrix4(w.matrixWorld).applyMatrix4(se)),Array.isArray(Le)){const Pe=Ae.groups;for(let ze=0,Ne=Pe.length;ze<Ne;ze++){const Be=Pe[ze],ot=Le[Be.materialIndex];ot&&ot.visible&&x.push(w,Ae,ot,X,Te.z,Be)}}else Le.visible&&x.push(w,Ae,Le,X,Te.z,null)}}const ye=w.children;for(let Ae=0,Le=ye.length;Ae<Le;Ae++)Kt(ye[Ae],O,X,$)}function Rs(w,O,X,$){const W=w.opaque,ye=w.transmissive,Ae=w.transparent;u.setupLightsView(X),q===!0&&fe.setGlobalState(v.clippingPlanes,X),ye.length>0&&qo(W,ye,O,X),$&&me.viewport(A.copy($)),W.length>0&&Vi(W,O,X),ye.length>0&&Vi(ye,O,X),Ae.length>0&&Vi(Ae,O,X),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function qo(w,O,X,$){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;const ye=Se.isWebGL2;de===null&&(de=new kn(1,1,{generateMipmaps:!0,type:Me.has("EXT_color_buffer_half_float")?Fi:En,minFilter:Di,samples:ye?4:0})),v.getDrawingBufferSize(he),ye?de.setSize(he.x,he.y):de.setSize(xs(he.x),xs(he.y));const Ae=v.getRenderTarget();v.setRenderTarget(de),v.getClearColor(D),R=v.getClearAlpha(),R<1&&v.setClearColor(16777215,.5),v.clear();const Le=v.toneMapping;v.toneMapping=mn,Vi(w,X,$),C.updateMultisampleRenderTarget(de),C.updateRenderTargetMipmap(de);let Pe=!1;for(let ze=0,Ne=O.length;ze<Ne;ze++){const Be=O[ze],ot=Be.object,It=Be.geometry,ut=Be.material,nn=Be.group;if(ut.side===qt&&ot.layers.test($.layers)){const st=ut.side;ut.side=Lt,ut.needsUpdate=!0,Is(ot,X,$,It,ut,nn),ut.side=st,ut.needsUpdate=!0,Pe=!0}}Pe===!0&&(C.updateMultisampleRenderTarget(de),C.updateRenderTargetMipmap(de)),v.setRenderTarget(Ae),v.setClearColor(D,R),v.toneMapping=Le}function Vi(w,O,X){const $=O.isScene===!0?O.overrideMaterial:null;for(let W=0,ye=w.length;W<ye;W++){const Ae=w[W],Le=Ae.object,Pe=Ae.geometry,ze=$===null?Ae.material:$,Ne=Ae.group;Le.layers.test(X.layers)&&Is(Le,O,X,Pe,ze,Ne)}}function Is(w,O,X,$,W,ye){w.onBeforeRender(v,O,X,$,W,ye),w.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),W.onBeforeRender(v,O,X,$,w,ye),W.transparent===!0&&W.side===qt&&W.forceSinglePass===!1?(W.side=Lt,W.needsUpdate=!0,v.renderBufferDirect(X,O,$,W,w,ye),W.side=Tn,W.needsUpdate=!0,v.renderBufferDirect(X,O,$,W,w,ye),W.side=qt):v.renderBufferDirect(X,O,$,W,w,ye),w.onAfterRender(v,O,X,$,W,ye)}function zi(w,O,X){O.isScene!==!0&&(O=Ee);const $=we.get(w),W=u.state.lights,ye=u.state.shadowsArray,Ae=W.state.version,Le=_e.getParameters(w,W.state,ye,O,X),Pe=_e.getProgramCacheKey(Le);let ze=$.programs;$.environment=w.isMeshStandardMaterial?O.environment:null,$.fog=O.fog,$.envMap=(w.isMeshStandardMaterial?V:E).get(w.envMap||$.environment),ze===void 0&&(w.addEventListener("dispose",xe),ze=new Map,$.programs=ze);let Ne=ze.get(Pe);if(Ne!==void 0){if($.currentProgram===Ne&&$.lightsStateVersion===Ae)return Ds(w,Le),Ne}else Le.uniforms=_e.getUniforms(w),w.onBuild(X,Le,v),w.onBeforeCompile(Le,v),Ne=_e.acquireProgram(Le,Pe),ze.set(Pe,Ne),$.uniforms=Le.uniforms;const Be=$.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Be.clippingPlanes=fe.uniform),Ds(w,Le),$.needsLights=jo(w),$.lightsStateVersion=Ae,$.needsLights&&(Be.ambientLightColor.value=W.state.ambient,Be.lightProbe.value=W.state.probe,Be.directionalLights.value=W.state.directional,Be.directionalLightShadows.value=W.state.directionalShadow,Be.spotLights.value=W.state.spot,Be.spotLightShadows.value=W.state.spotShadow,Be.rectAreaLights.value=W.state.rectArea,Be.ltc_1.value=W.state.rectAreaLTC1,Be.ltc_2.value=W.state.rectAreaLTC2,Be.pointLights.value=W.state.point,Be.pointLightShadows.value=W.state.pointShadow,Be.hemisphereLights.value=W.state.hemi,Be.directionalShadowMap.value=W.state.directionalShadowMap,Be.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Be.spotShadowMap.value=W.state.spotShadowMap,Be.spotLightMatrix.value=W.state.spotLightMatrix,Be.spotLightMap.value=W.state.spotLightMap,Be.pointShadowMap.value=W.state.pointShadowMap,Be.pointShadowMatrix.value=W.state.pointShadowMatrix),$.currentProgram=Ne,$.uniformsList=null,Ne}function Ps(w){if(w.uniformsList===null){const O=w.currentProgram.getUniforms();w.uniformsList=pr.seqWithValue(O.seq,w.uniforms)}return w.uniformsList}function Ds(w,O){const X=we.get(w);X.outputColorSpace=O.outputColorSpace,X.batching=O.batching,X.instancing=O.instancing,X.instancingColor=O.instancingColor,X.skinning=O.skinning,X.morphTargets=O.morphTargets,X.morphNormals=O.morphNormals,X.morphColors=O.morphColors,X.morphTargetsCount=O.morphTargetsCount,X.numClippingPlanes=O.numClippingPlanes,X.numIntersection=O.numClipIntersection,X.vertexAlphas=O.vertexAlphas,X.vertexTangents=O.vertexTangents,X.toneMapping=O.toneMapping}function $o(w,O,X,$,W){O.isScene!==!0&&(O=Ee),C.resetTextureUnits();const ye=O.fog,Ae=$.isMeshStandardMaterial?O.environment:null,Le=b===null?v.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:tn,Pe=($.isMeshStandardMaterial?V:E).get($.envMap||Ae),ze=$.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ne=!!X.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Be=!!X.morphAttributes.position,ot=!!X.morphAttributes.normal,It=!!X.morphAttributes.color;let ut=mn;$.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(ut=v.toneMapping);const nn=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,st=nn!==void 0?nn.length:0,He=we.get($),wr=u.state.lights;if(q===!0&&(oe===!0||w!==_)){const Ft=w===_&&$.id===P;fe.setState($,w,Ft)}let at=!1;$.version===He.__version?(He.needsLights&&He.lightsStateVersion!==wr.state.version||He.outputColorSpace!==Le||W.isBatchedMesh&&He.batching===!1||!W.isBatchedMesh&&He.batching===!0||W.isInstancedMesh&&He.instancing===!1||!W.isInstancedMesh&&He.instancing===!0||W.isSkinnedMesh&&He.skinning===!1||!W.isSkinnedMesh&&He.skinning===!0||W.isInstancedMesh&&He.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&He.instancingColor===!1&&W.instanceColor!==null||He.envMap!==Pe||$.fog===!0&&He.fog!==ye||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==fe.numPlanes||He.numIntersection!==fe.numIntersection)||He.vertexAlphas!==ze||He.vertexTangents!==Ne||He.morphTargets!==Be||He.morphNormals!==ot||He.morphColors!==It||He.toneMapping!==ut||Se.isWebGL2===!0&&He.morphTargetsCount!==st)&&(at=!0):(at=!0,He.__version=$.version);let wn=He.currentProgram;at===!0&&(wn=zi($,O,W));let Fs=!1,Si=!1,Cr=!1;const vt=wn.getUniforms(),Cn=He.uniforms;if(me.useProgram(wn.program)&&(Fs=!0,Si=!0,Cr=!0),$.id!==P&&(P=$.id,Si=!0),Fs||_!==w){vt.setValue(z,"projectionMatrix",w.projectionMatrix),vt.setValue(z,"viewMatrix",w.matrixWorldInverse);const Ft=vt.map.cameraPosition;Ft!==void 0&&Ft.setValue(z,Te.setFromMatrixPosition(w.matrixWorld)),Se.logarithmicDepthBuffer&&vt.setValue(z,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&vt.setValue(z,"isOrthographic",w.isOrthographicCamera===!0),_!==w&&(_=w,Si=!0,Cr=!0)}if(W.isSkinnedMesh){vt.setOptional(z,W,"bindMatrix"),vt.setOptional(z,W,"bindMatrixInverse");const Ft=W.skeleton;Ft&&(Se.floatVertexTextures?(Ft.boneTexture===null&&Ft.computeBoneTexture(),vt.setValue(z,"boneTexture",Ft.boneTexture,C)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}W.isBatchedMesh&&(vt.setOptional(z,W,"batchingTexture"),vt.setValue(z,"batchingTexture",W._matricesTexture,C));const Lr=X.morphAttributes;if((Lr.position!==void 0||Lr.normal!==void 0||Lr.color!==void 0&&Se.isWebGL2===!0)&&De.update(W,X,wn),(Si||He.receiveShadow!==W.receiveShadow)&&(He.receiveShadow=W.receiveShadow,vt.setValue(z,"receiveShadow",W.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(Cn.envMap.value=Pe,Cn.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),Si&&(vt.setValue(z,"toneMappingExposure",v.toneMappingExposure),He.needsLights&&Zo(Cn,Cr),ye&&$.fog===!0&&Q.refreshFogUniforms(Cn,ye),Q.refreshMaterialUniforms(Cn,$,Z,H,de),pr.upload(z,Ps(He),Cn,C)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(pr.upload(z,Ps(He),Cn,C),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&vt.setValue(z,"center",W.center),vt.setValue(z,"modelViewMatrix",W.modelViewMatrix),vt.setValue(z,"normalMatrix",W.normalMatrix),vt.setValue(z,"modelMatrix",W.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const Ft=$.uniformsGroups;for(let Rr=0,Ko=Ft.length;Rr<Ko;Rr++)if(Se.isWebGL2){const Us=Ft[Rr];Ue.update(Us,wn),Ue.bind(Us,wn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return wn}function Zo(w,O){w.ambientLightColor.needsUpdate=O,w.lightProbe.needsUpdate=O,w.directionalLights.needsUpdate=O,w.directionalLightShadows.needsUpdate=O,w.pointLights.needsUpdate=O,w.pointLightShadows.needsUpdate=O,w.spotLights.needsUpdate=O,w.spotLightShadows.needsUpdate=O,w.rectAreaLights.needsUpdate=O,w.hemisphereLights.needsUpdate=O}function jo(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(w,O,X){we.get(w.texture).__webglTexture=O,we.get(w.depthTexture).__webglTexture=X;const $=we.get(w);$.__hasExternalTextures=!0,$.__hasExternalTextures&&($.__autoAllocateDepthBuffer=X===void 0,$.__autoAllocateDepthBuffer||Me.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,O){const X=we.get(w);X.__webglFramebuffer=O,X.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(w,O=0,X=0){b=w,S=O,T=X;let $=!0,W=null,ye=!1,Ae=!1;if(w){const Pe=we.get(w);Pe.__useDefaultFramebuffer!==void 0?(me.bindFramebuffer(z.FRAMEBUFFER,null),$=!1):Pe.__webglFramebuffer===void 0?C.setupRenderTarget(w):Pe.__hasExternalTextures&&C.rebindTextures(w,we.get(w.texture).__webglTexture,we.get(w.depthTexture).__webglTexture);const ze=w.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(Ae=!0);const Ne=we.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ne[O])?W=Ne[O][X]:W=Ne[O],ye=!0):Se.isWebGL2&&w.samples>0&&C.useMultisampledRTT(w)===!1?W=we.get(w).__webglMultisampledFramebuffer:Array.isArray(Ne)?W=Ne[X]:W=Ne,A.copy(w.viewport),N.copy(w.scissor),F=w.scissorTest}else A.copy(K).multiplyScalar(Z).floor(),N.copy(Y).multiplyScalar(Z).floor(),F=U;if(me.bindFramebuffer(z.FRAMEBUFFER,W)&&Se.drawBuffers&&$&&me.drawBuffers(w,W),me.viewport(A),me.scissor(N),me.setScissorTest(F),ye){const Pe=we.get(w.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+O,Pe.__webglTexture,X)}else if(Ae){const Pe=we.get(w.texture),ze=O||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Pe.__webglTexture,X||0,ze)}P=-1},this.readRenderTargetPixels=function(w,O,X,$,W,ye,Ae){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=we.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ae!==void 0&&(Le=Le[Ae]),Le){me.bindFramebuffer(z.FRAMEBUFFER,Le);try{const Pe=w.texture,ze=Pe.format,Ne=Pe.type;if(ze!==Ht&&J.convert(ze)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Be=Ne===Fi&&(Me.has("EXT_color_buffer_half_float")||Se.isWebGL2&&Me.has("EXT_color_buffer_float"));if(Ne!==En&&J.convert(Ne)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ne===Sn&&(Se.isWebGL2||Me.has("OES_texture_float")||Me.has("WEBGL_color_buffer_float")))&&!Be){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=w.width-$&&X>=0&&X<=w.height-W&&z.readPixels(O,X,$,W,J.convert(ze),J.convert(Ne),ye)}finally{const Pe=b!==null?we.get(b).__webglFramebuffer:null;me.bindFramebuffer(z.FRAMEBUFFER,Pe)}}},this.copyFramebufferToTexture=function(w,O,X=0){const $=Math.pow(2,-X),W=Math.floor(O.image.width*$),ye=Math.floor(O.image.height*$);C.setTexture2D(O,0),z.copyTexSubImage2D(z.TEXTURE_2D,X,0,0,w.x,w.y,W,ye),me.unbindTexture()},this.copyTextureToTexture=function(w,O,X,$=0){const W=O.image.width,ye=O.image.height,Ae=J.convert(X.format),Le=J.convert(X.type);C.setTexture2D(X,0),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,X.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,X.unpackAlignment),O.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,$,w.x,w.y,W,ye,Ae,Le,O.image.data):O.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,$,w.x,w.y,O.mipmaps[0].width,O.mipmaps[0].height,Ae,O.mipmaps[0].data):z.texSubImage2D(z.TEXTURE_2D,$,w.x,w.y,Ae,Le,O.image),$===0&&X.generateMipmaps&&z.generateMipmap(z.TEXTURE_2D),me.unbindTexture()},this.copyTextureToTexture3D=function(w,O,X,$,W=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ye=w.max.x-w.min.x+1,Ae=w.max.y-w.min.y+1,Le=w.max.z-w.min.z+1,Pe=J.convert($.format),ze=J.convert($.type);let Ne;if($.isData3DTexture)C.setTexture3D($,0),Ne=z.TEXTURE_3D;else if($.isDataArrayTexture||$.isCompressedArrayTexture)C.setTexture2DArray($,0),Ne=z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,$.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,$.unpackAlignment);const Be=z.getParameter(z.UNPACK_ROW_LENGTH),ot=z.getParameter(z.UNPACK_IMAGE_HEIGHT),It=z.getParameter(z.UNPACK_SKIP_PIXELS),ut=z.getParameter(z.UNPACK_SKIP_ROWS),nn=z.getParameter(z.UNPACK_SKIP_IMAGES),st=X.isCompressedTexture?X.mipmaps[W]:X.image;z.pixelStorei(z.UNPACK_ROW_LENGTH,st.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,st.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,w.min.x),z.pixelStorei(z.UNPACK_SKIP_ROWS,w.min.y),z.pixelStorei(z.UNPACK_SKIP_IMAGES,w.min.z),X.isDataTexture||X.isData3DTexture?z.texSubImage3D(Ne,W,O.x,O.y,O.z,ye,Ae,Le,Pe,ze,st.data):X.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),z.compressedTexSubImage3D(Ne,W,O.x,O.y,O.z,ye,Ae,Le,Pe,st.data)):z.texSubImage3D(Ne,W,O.x,O.y,O.z,ye,Ae,Le,Pe,ze,st),z.pixelStorei(z.UNPACK_ROW_LENGTH,Be),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ot),z.pixelStorei(z.UNPACK_SKIP_PIXELS,It),z.pixelStorei(z.UNPACK_SKIP_ROWS,ut),z.pixelStorei(z.UNPACK_SKIP_IMAGES,nn),W===0&&$.generateMipmaps&&z.generateMipmap(Ne),me.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?C.setTextureCube(w,0):w.isData3DTexture?C.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?C.setTexture2DArray(w,0):C.setTexture2D(w,0),me.unbindTexture()},this.resetState=function(){S=0,T=0,b=null,me.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Es?"display-p3":"srgb",t.unpackColorSpace=Ze.workingColorSpace===br?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===gt?Hn:So}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Hn?gt:tn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class lp extends Go{}lp.prototype.isWebGL1Renderer=!0;class cp extends Rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class hp{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ps,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=An()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=An()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=An()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Et=new B;class Mr{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=un(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=un(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=un(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=un(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array),r=et(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Zt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Mr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Wo extends Oi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new je(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ai;const Ci=new B,oi=new B,li=new B,ci=new We,Li=new We,Xo=new mt,fr=new B,Ri=new B,dr=new B,ao=new We,ls=new We,oo=new We;class fp extends Rt{constructor(e=new Wo){if(super(),this.isSprite=!0,this.type="Sprite",ai===void 0){ai=new jt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new hp(t,5);ai.setIndex([0,1,2,0,2,3]),ai.setAttribute("position",new Mr(n,3,0,!1)),ai.setAttribute("uv",new Mr(n,2,3,!1))}this.geometry=ai,this.material=e,this.center=new We(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),oi.setFromMatrixScale(this.matrixWorld),Xo.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),li.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&oi.multiplyScalar(-li.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const o=this.center;ur(fr.set(-.5,-.5,0),li,o,oi,i,r),ur(Ri.set(.5,-.5,0),li,o,oi,i,r),ur(dr.set(.5,.5,0),li,o,oi,i,r),ao.set(0,0),ls.set(1,0),oo.set(1,1);let s=e.ray.intersectTriangle(fr,Ri,dr,!1,Ci);if(s===null&&(ur(Ri.set(-.5,.5,0),li,o,oi,i,r),ls.set(0,1),s=e.ray.intersectTriangle(fr,dr,Ri,!1,Ci),s===null))return;const l=e.ray.origin.distanceTo(Ci);l<e.near||l>e.far||t.push({distance:l,point:Ci.clone(),uv:Vt.getInterpolation(Ci,fr,Ri,dr,ao,ls,oo,new We),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function ur(a,e,t,n,i,r){ci.subVectors(a,t).addScalar(.5).multiply(n),i!==void 0?(Li.x=r*ci.x-i*ci.y,Li.y=i*ci.x+r*ci.y):Li.copy(ci),a.copy(e),a.x+=Li.x,a.y+=Li.y,a.applyMatrix4(Xo)}class dp extends Ct{constructor(e,t,n,i,r,o,s,l,c){super(e,t,n,i,r,o,s,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Cs extends jt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,s=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:s},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+s,Math.PI);let c=0;const h=[],f=new B,g=new B,m=[],p=[],x=[],u=[];for(let d=0;d<=n;d++){const y=[],v=d/n;let M=0;d===0&&o===0?M=.5/t:d===n&&l===Math.PI&&(M=-.5/t);for(let S=0;S<=t;S++){const T=S/t;f.x=-e*Math.cos(i+T*r)*Math.sin(o+v*s),f.y=e*Math.cos(o+v*s),f.z=e*Math.sin(i+T*r)*Math.sin(o+v*s),p.push(f.x,f.y,f.z),g.copy(f).normalize(),x.push(g.x,g.y,g.z),u.push(T+M,1-v),y.push(c++)}h.push(y)}for(let d=0;d<n;d++)for(let y=0;y<t;y++){const v=h[d][y+1],M=h[d][y],S=h[d+1][y],T=h[d+1][y+1];(d!==0||o>0)&&m.push(v,M,T),(d!==n-1||l<Math.PI)&&m.push(M,S,T)}this.setIndex(m),this.setAttribute("position",new Mt(p,3)),this.setAttribute("normal",new Mt(x,3)),this.setAttribute("uv",new Mt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cs(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}const lo={enabled:!1,files:{},add:function(a,e){this.enabled!==!1&&(this.files[a]=e)},get:function(a){if(this.enabled!==!1)return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};class up{constructor(e,t,n){const i=this;let r=!1,o=0,s=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){s++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,s),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,s),o===s&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){const f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,g=c.length;f<g;f+=2){const m=c[f],p=c[f+1];if(m.global&&(m.lastIndex=0),m.test(h))return p}return null}}}const pp=new up;class Ls{constructor(e){this.manager=e!==void 0?e:pp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Ls.DEFAULT_MATERIAL_NAME="__DEFAULT";class mp extends Ls{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=lo.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const s=Ui("img");function l(){h(),lo.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(f){h(),i&&i(f),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){s.removeEventListener("load",l,!1),s.removeEventListener("error",c,!1)}return s.addEventListener("load",l,!1),s.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(s.crossOrigin=this.crossOrigin),r.manager.itemStart(e),s.src=e,s}}class gp extends Ls{constructor(e){super(e)}load(e,t,n,i){const r=new Ct,o=new mp(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(s){r.image=s,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class xp{constructor(e,t,n=0,i=1/0){this.ray=new Co(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Ts,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return _s(e,this,n,t),n.sort(co),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)_s(e[i],this,n,t);return n.sort(co),n}}function co(a,e){return a.distance-e.distance}function _s(a,e,t,n){if(a.layers.test(e.layers)&&a.raycast(e,t),n===!0){const i=a.children;for(let r=0,o=i.length;r<o;r++)_s(i[r],e,t,!0)}}class vp{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(wt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ss}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ss);class _p{constructor(e,t){this.scene=null,this.camera=null,this.renderer=null,this.modelMeshes=new Map,this.vertexLabels=new Map,this.vertexSpheres=new Map,this.raycaster=null,this.mouse=null,this.selectedModel=null,this.currentMesh=null,this.showVertexNumbers=!1,this.editMode=!1,this.isDragging=!1,this.selectedVertex=null,this.dragPlane=null,this.originalVertexPosition=null,this.cameraControls=!0,this.keys={w:!1,a:!1,s:!1,d:!1},this.cameraMoveSpeed=5,this.cameraTarget=new B(0,0,0),this.highlightedFaces=new Set,this.originalFaceColors=new Map,this.showingFaceLabels=!1,this.highlightedVertexLabelInfo={id:null,originalSphereColors:new Map},this.specificHighlightedVerticesInfo={originalSphereColors:new Map,spheresWereTemporarilyMadeVisible:!1},this.specificHighlightedFacesInfo={originalFaceColors:new Map,highlightedFacesSet:new Set},this.fileLoader=t,this.textureCache=new Map,this.mouseDown=!1,this.mouseX=0,this.mouseY=0,this.initThreeJS(e),this.setupControls(),this.setupInteraction(),this.animate()}async loadTexture(e){if(this.textureCache.has(e))return this.textureCache.get(e);if(this.fileLoader&&this.fileLoader.availableTextures.has(e)){const t=this.fileLoader.availableTextures.get(e);if(!t)return console.warn(`Texture file for ID ${e} not found in fileLoader.availableTextures.`),null;try{const n=await this.processMagentaTransparency(t),r=await new gp().loadAsync(n.url);return r.flipY=!1,r.wrapS=Pi,r.wrapT=Pi,r.format=Ht,r.premultiplyAlpha=!1,this.textureCache.set(e,r),URL.revokeObjectURL(n.url),r}catch(n){return console.error(`Failed to load texture ID ${e} from ${t.name}:`,n),null}}else return null}async processMagentaTransparency(e){return new Promise((t,n)=>{const i=new Image,r=URL.createObjectURL(e);i.onload=()=>{try{const o=document.createElement("canvas"),s=o.getContext("2d");if(!s)throw new Error("Failed to get 2D context from canvas");o.width=i.width,o.height=i.height,s.drawImage(i,0,0);const l=s.getImageData(0,0,o.width,o.height),c=l.data;for(let h=0;h<c.length;h+=4){const f=c[h],g=c[h+1],m=c[h+2];f>=250&&g<=5&&m>=250&&(c[h+3]=0)}s.putImageData(l,0,0),o.toBlob(h=>{if(h){const f=URL.createObjectURL(h);t({url:f,blob:h})}else n(new Error("Failed to create blob from processed image"))},"image/png")}catch(o){n(o)}finally{URL.revokeObjectURL(r)}},i.onerror=()=>{URL.revokeObjectURL(r),n(new Error("Failed to load image for processing"))},i.src=r})}getModel(e){return this.modelMeshes.get(e)}updateVertexVisuals(e){if(!this.currentMesh||!e)return;const t=Array.isArray(this.currentMesh)?this.currentMesh:[this.currentMesh];let n=null;for(const s of t)if(s&&s.userData&&s.userData.modelId===e){n=s;break}if(!n||!n.userData.originalModel)return;const i=n.userData.originalModel,r=this.vertexSpheres.get(e);if(r)for(let s=0;s<i.vertexCount;s++)r[s]&&r[s].position.set(i.vertexX[s],-i.vertexY[s],i.vertexZ[s]);const o=this.vertexLabels.get(e);if(o&&this.showVertexNumbers)for(let s=0;s<i.vertexCount;s++)o[s]&&o[s].position.set(i.vertexX[s],-i.vertexY[s],i.vertexZ[s])}highlightSpecificFaces(e){var r,o;if(!this.currentMesh||!this.selectedModel)return;this.clearSpecificFaceHighlights(),this.clearFaceHighlights();const t=Array.isArray(this.currentMesh)?this.currentMesh:[this.currentMesh];if(t.length===0)return;let n=null;for(const s of t)if(s&&s.userData&&s.userData.originalModel){n=s.userData.originalModel;break}if(!n){console.warn("No model found in current meshes for highlighting");return}const i={r:0,g:1,b:1};if(!this.specificHighlightedFacesInfo.originalFaceColors.size)for(let s=0;s<n.faceCount;s++){let l;((r=n.faceColor)==null?void 0:r[s])!==void 0?l=this.parseColor(lt.hslPal[n.faceColor[s]]):((o=n.faceColorA)==null?void 0:o[s])!==void 0?l=this.parseColor(lt.hslPal[n.faceColorA[s]]):l={r:.7,g:.7,b:.7},this.specificHighlightedFacesInfo.originalFaceColors.set(s,l)}t.forEach(s=>{if(!s||!s.geometry)return;const l=s.geometry,c=l.getAttribute("color");if(c){if(l.userData.faceIndexMapping){const h=l.userData.faceIndexMapping,f=c.count/3;for(let g=0;g<f;g++){const m=h[g];if(m!==void 0&&e.includes(m)){this.specificHighlightedFacesInfo.highlightedFacesSet.add(m);const p=g*3;for(let x=0;x<3;x++)c.setXYZ(p+x,i.r,i.g,i.b)}}}else{const h=l.userData.renderedToOriginalFaceIndexMap,f=l.userData.usedPriorities,g=c.count/3;for(let m=0;m<g;m++){const p=f&&h?h[m]:m;if(p!==void 0&&e.includes(p)){this.specificHighlightedFacesInfo.highlightedFacesSet.add(p);const x=m*3;for(let u=0;u<3;u++)c.setXYZ(x+u,i.r,i.g,i.b)}}}c.needsUpdate=!0}})}clearSpecificFaceHighlights(){if(!this.currentMesh||!this.selectedModel||this.specificHighlightedFacesInfo.highlightedFacesSet.size===0)return;(Array.isArray(this.currentMesh)?this.currentMesh:[this.currentMesh]).forEach(t=>{if(!t||!t.geometry)return;const n=t.geometry,i=n.getAttribute("color");if(i){if(n.userData.faceIndexMapping){const r=n.userData.faceIndexMapping,o=i.count/3;for(let s=0;s<o;s++){const l=r[s];if(l!==void 0&&this.specificHighlightedFacesInfo.highlightedFacesSet.has(l)){const c=this.specificHighlightedFacesInfo.originalFaceColors.get(l);if(c){const h=s*3;for(let f=0;f<3;f++)i.setXYZ(h+f,c.r,c.g,c.b)}}}}else{const r=n.userData.renderedToOriginalFaceIndexMap,o=n.userData.usedPriorities,s=i.count/3;for(let l=0;l<s;l++){const c=o&&r?r[l]:l;if(c!==void 0&&this.specificHighlightedFacesInfo.highlightedFacesSet.has(c)){const h=this.specificHighlightedFacesInfo.originalFaceColors.get(c);if(h){const f=l*3;for(let g=0;g<3;g++)i.setXYZ(f+g,h.r,h.g,h.b)}}}}i.needsUpdate=!0}}),this.specificHighlightedFacesInfo.highlightedFacesSet.clear()}getModelVertexLabels(e){const t=this.modelMeshes.get(e);if(!t)return null;const n=Array.isArray(t)?t:[t];let i=null;for(const o of n)if(o&&o.userData&&o.userData.originalModel){i=o.userData.originalModel;break}if(!i||!i.labelVertices)return null;const r=[];for(let o=0;o<i.labelVertices.length;o++)i.labelVertices[o]&&i.labelVertices[o].length>0&&r.push({id:o,vertexCount:i.labelVertices[o].length,vertices:i.labelVertices[o]});return r.length>0?r:null}highlightFaceLabel(e){if(!this.currentMesh||!this.selectedModel)return;const t=Array.isArray(this.currentMesh)?this.currentMesh:[this.currentMesh];if(t.length===0)return;let n=null;for(const r of t)if(r&&r.userData&&r.userData.originalModel){n=r.userData.originalModel;break}if(!n||!n.labelFaces||!n.labelFaces[e])return;this.clearFaceHighlights(),this.clearVertexHighlights(),this.originalFaceColors.has(this.selectedModel)||this.storeOriginalFaceColors();const i=n.labelFaces[e];t.forEach(r=>{if(!r||!r.geometry)return;const o=r.geometry,s=o.getAttribute("color");if(s){if(o.userData.faceIndexMapping){const l=o.userData.faceIndexMapping,c=s.count/3;for(let h=0;h<c;h++){const f=l[h];if(f!==void 0&&i.includes(f)){this.highlightedFaces.add(f);const g=h*3;for(let m=0;m<3;m++)s.setXYZ(g+m,1,.4,0)}}}else{const l=o.userData.renderedToOriginalFaceIndexMap,c=o.userData.usedPriorities,h=s.count/3;for(let f=0;f<h;f++){const g=c&&l?l[f]:f;if(g!==void 0&&i.includes(g)){this.highlightedFaces.add(g);const m=f*3;for(let p=0;p<3;p++)s.setXYZ(m+p,1,.4,0)}}}s.needsUpdate=!0}}),this.showingFaceLabels=!0}clearFaceHighlights(){if(!this.currentMesh||!this.selectedModel||!this.showingFaceLabels)return;const e=this.originalFaceColors.get(this.selectedModel);if(!e)return;(Array.isArray(this.currentMesh)?this.currentMesh:[this.currentMesh]).forEach(n=>{if(!n||!n.geometry)return;const i=n.geometry,r=i.getAttribute("color");if(r){if(i.userData.faceIndexMapping){const o=i.userData.faceIndexMapping,s=r.count/3;for(let l=0;l<s;l++){const c=o[l];if(c!==void 0&&this.highlightedFaces.has(c)){const h=e[c];if(h){const f=l*3;for(let g=0;g<3;g++)r.setXYZ(f+g,h.r,h.g,h.b)}}}}else{const o=i.userData.renderedToOriginalFaceIndexMap,s=i.userData.usedPriorities,l=r.count/3;for(let c=0;c<l;c++){const h=s&&o?o[c]:c;if(h!==void 0&&this.highlightedFaces.has(h)){const f=e[h];if(f){const g=c*3;for(let m=0;m<3;m++)r.setXYZ(g+m,f.r,f.g,f.b)}}}}r.needsUpdate=!0}}),this.highlightedFaces.clear(),this.showingFaceLabels=!1,this.clearSpecificFaceHighlights()}storeOriginalFaceColors(){if(!this.currentMesh||!this.selectedModel)return;const e=Array.isArray(this.currentMesh)?this.currentMesh:[this.currentMesh];if(e.length===0)return;let t=null;for(const i of e)if(i&&i.userData&&i.userData.originalModel){t=i.userData.originalModel;break}if(!t)return;const n={};for(let i=0;i<t.faceCount;i++){let r;t.faceColor!=null&&t.faceColor[i]!==void 0?r=this.parseColor(lt.hslPal[t.faceColor[i]]):t.faceColorA&&t.faceColorA[i]!==void 0?r=this.parseColor(lt.hslPal[t.faceColorA[i]]):r={r:.7,g:.7,b:.7},n[i]=r}this.originalFaceColors.set(this.selectedModel,n)}initThreeJS(e){this.scene=new cp,this.scene.background=new je(8947848),this.camera=new zt(75,e.clientWidth/e.clientHeight,.1,1e4),this.camera.position.set(50,50,50),this.cameraTarget.set(0,0,0),this.camera.lookAt(this.cameraTarget),this.renderer=new Go({antialias:!0,logarithmicDepthBuffer:!0}),this.renderer.setSize(e.clientWidth,e.clientHeight),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.shadowMap.enabled=!1,this.renderer.outputColorSpace=tn,this.renderer.toneMapping=mn,this.renderer.toneMappingExposure=1,Ze&&(Ze.enabled=!1),this.renderer.getContext().enable(this.renderer.getContext().POLYGON_OFFSET_FILL),this.renderer.sortObjects=!0,e.appendChild(this.renderer.domElement),this.renderer.domElement.parentElement.classList.add("canvas-container");const t=new Ar(1e3,1e3),n=new hi({color:16776960,transparent:!0,opacity:0,side:qt,depthWrite:!1,depthTest:!1,visible:!1});this.dragPlane=new Gt(t,n),this.scene.add(this.dragPlane),window.addEventListener("resize",()=>this.onWindowResize(e))}setupControls(){this.mouseDown=!1,this.mouseX=0,this.mouseY=0,this.renderer.domElement.addEventListener("mousedown",e=>{this.mouseDown=!0,this.mouseX=e.clientX,this.mouseY=e.clientY,this.editMode&&this.onVertexMouseDown(e)}),this.renderer.domElement.addEventListener("mousemove",e=>{if(this.editMode&&this.isDragging&&this.selectedVertex)this.onVertexDrag(e);else if(this.mouseDown&&this.cameraControls){const t=e.clientX-this.mouseX,n=e.clientY-this.mouseY,i=new B().subVectors(this.camera.position,this.cameraTarget),r=new vp().setFromVector3(i);r.theta-=t*.01,r.phi+=n*.01,r.phi=Math.max(.01,Math.min(Math.PI-.01,r.phi)),i.setFromSpherical(r),this.camera.position.copy(this.cameraTarget).add(i),this.camera.lookAt(this.cameraTarget),this.mouseX=e.clientX,this.mouseY=e.clientY}}),this.renderer.domElement.addEventListener("mouseup",()=>{this.mouseDown=!1,this.editMode&&this.isDragging&&this.onVertexMouseUp()}),this.renderer.domElement.addEventListener("wheel",e=>{if(!this.editMode||!this.isDragging){const t=new B().subVectors(this.camera.position,this.cameraTarget),i=t.length()+e.deltaY*.3;t.normalize().multiplyScalar(Math.max(5,i)),this.camera.position.copy(this.cameraTarget).add(t)}}),document.addEventListener("keydown",e=>{const t=e.key.toLowerCase(),n=document.activeElement,i=n&&(n.tagName==="INPUT"||n.tagName==="TEXTAREA"||n instanceof HTMLElement&&n.isContentEditable);Object.prototype.hasOwnProperty.call(this.keys,t)&&!i&&(this.keys[t]=!0,["w","a","s","d"].includes(t)&&e.preventDefault())}),document.addEventListener("keyup",e=>{const t=e.key.toLowerCase(),n=document.activeElement,i=n&&(n.tagName==="INPUT"||n.tagName==="TEXTAREA"||n instanceof HTMLElement&&n.isContentEditable);Object.prototype.hasOwnProperty.call(this.keys,t)&&!i&&(this.keys[t]=!1)})}setupInteraction(){this.raycaster=new xp,this.mouse=new We,this.renderer.domElement.addEventListener("click",e=>{!this.isDragging&&!this.editMode&&this.onMouseClick(e)})}getModelFaceLabels(e){const t=this.modelMeshes.get(e);if(!t)return null;const n=Array.isArray(t)?t:[t];let i=null;for(const o of n)if(o&&o.userData&&o.userData.originalModel){i=o.userData.originalModel;break}if(!i||!i.labelFaces)return null;const r=[];for(let o=0;o<i.labelFaces.length;o++)i.labelFaces[o]&&i.labelFaces[o].length>0&&r.push({id:o,faceCount:i.labelFaces[o].length,faces:i.labelFaces[o]});return r.length>0?r:null}highlightSpecificVertices(e){if(!this.selectedModel||!this.currentMesh)return;const t=Array.isArray(this.currentMesh)?this.currentMesh:[this.currentMesh];let n=null;for(const o of t)if(o&&o.userData&&o.userData.originalModel){n=o.userData.originalModel;break}if(!n)return;let i=this.vertexSpheres.get(this.selectedModel);if(this.clearSpecificVertexHighlights(!1),this.clearVertexHighlights(),(!i||i.length===0)&&(this.createVertexSpheres(this.selectedModel,n),this.addVertexSpheresToScene(this.selectedModel),i=this.vertexSpheres.get(this.selectedModel),!i||i.length===0)){console.warn("Failed to create vertex spheres for highlighting");return}i.forEach(o=>{o.parent||this.scene.add(o)}),this.specificHighlightedVerticesInfo.spheresWereTemporarilyMadeVisible=!0;const r=65535;e.forEach(o=>{if(o<i.length&&o>=0){const s=i[o];if(s&&s.material){this.specificHighlightedVerticesInfo.originalSphereColors.has(s)||this.specificHighlightedVerticesInfo.originalSphereColors.set(s,{color:s.material.color.getHex(),visible:s.visible}),s.material.color.setHex(r),s.visible=!0;const l=s.material;l.transparent=!1,l.opacity=1,l.depthTest=!1,l.needsUpdate=!0}}})}clearSpecificVertexHighlights(e=!0){if(!this.selectedModel)return;this.vertexSpheres.get(this.selectedModel)&&this.specificHighlightedVerticesInfo.originalSphereColors.forEach((n,i)=>{i&&i.material&&(i.material.color.setHex(n.color),this.specificHighlightedVerticesInfo.spheresWereTemporarilyMadeVisible&&e&&!this.editMode?i.visible=!1:this.editMode?i.visible=!0:i.visible=n.visible)}),this.specificHighlightedVerticesInfo.originalSphereColors.clear(),e&&(this.specificHighlightedVerticesInfo.spheresWereTemporarilyMadeVisible=!1)}updateMeshGeometry(){if(!this.currentMesh)return;(Array.isArray(this.currentMesh)?this.currentMesh:[this.currentMesh]).forEach(t=>{var l,c;const n=t.userData.originalModel,i=t.geometry,r=i.getAttribute("position"),o=i.getAttribute("color");if(i.userData.faceIndexMapping){const h=i.userData.faceIndexMapping,f=r.count/3;for(let g=0;g<f;g++){const m=h[g];if(m===void 0||m>=n.faceCount)continue;const p=n.faceVertexA[m],x=n.faceVertexB[m],u=n.faceVertexC[m];if(p>=n.vertexCount||x>=n.vertexCount||u>=n.vertexCount)continue;const d=g*3;if(r.setXYZ(d,n.vertexX[p],-n.vertexY[p],n.vertexZ[p]),r.setXYZ(d+1,n.vertexX[x],-n.vertexY[x],n.vertexZ[x]),r.setXYZ(d+2,n.vertexX[u],-n.vertexY[u],n.vertexZ[u]),o&&!t.userData.meshType.includes("textured-")){let y;if(((l=n.faceColor)==null?void 0:l[m])!==void 0){const M=n.faceColor[m],S=lt.hslPal[M];y=this.parseColor(S)}else if(((c=n.faceColorA)==null?void 0:c[m])!==void 0){const M=n.faceColorA[m],S=lt.hslPal[M];y=this.parseColor(S)}else y={r:.7,g:.7,b:.7};let v=1;n.faceAlpha&&n.faceAlpha[m]!==void 0&&(v=(255-n.faceAlpha[m])/255,v=Math.max(0,Math.min(1,v)));for(let M=0;M<3;M++)o.setXYZW(d+M,y.r,y.g,y.b,v)}}}else{const h=i.userData.renderedToOriginalFaceIndexMap,f=i.userData.usedPriorities,g=r.count/3;for(let m=0;m<g;m++){const p=f&&h?h[m]:m;if(p===void 0||p>=n.faceCount)continue;const x=n.faceVertexA[p],u=n.faceVertexB[p],d=n.faceVertexC[p];if(x>=n.vertexCount||u>=n.vertexCount||d>=n.vertexCount)continue;const y=m*3;r.setXYZ(y,n.vertexX[x],-n.vertexY[x],n.vertexZ[x]),r.setXYZ(y+1,n.vertexX[u],-n.vertexY[u],n.vertexZ[u]),r.setXYZ(y+2,n.vertexX[d],-n.vertexY[d],n.vertexZ[d])}}r.needsUpdate=!0,o&&(o.needsUpdate=!0),i.computeBoundingBox(),i.computeBoundingSphere()}),this.updateModelAlpha(this.selectedModel)}updateModelAlpha(e){const t=this.modelMeshes.get(e);if(!t)return;(Array.isArray(t)?t:[t]).forEach(i=>{const r=i.userData.originalModel,o=i.geometry,s=o.getAttribute("color");if(r.faceAlpha&&r.faceAlpha.length>0&&s){let l=!1;if(o.userData.faceIndexMapping){const c=o.userData.faceIndexMapping,h=s.count/3;for(let f=0;f<h;f++){const g=c[f];if(g===void 0||g>=r.faceCount)continue;let m=1;r.faceAlpha[g]!==void 0&&(m=(255-r.faceAlpha[g])/255,m=Math.max(0,Math.min(1,m)));const p=f*3,x=f*3+1,u=f*3+2;s.getW(p)!==m&&(s.setW(p,m),l=!0),s.getW(x)!==m&&(s.setW(x,m),l=!0),s.getW(u)!==m&&(s.setW(u,m),l=!0)}}else{const c=o.userData.renderedToOriginalFaceIndexMap,h=o.userData.usedPriorities,f=s.count/3;for(let g=0;g<f;g++){const m=h&&c?c[g]:g;if(m===void 0||m>=r.faceCount)continue;let p=1;r.faceAlpha[m]!==void 0&&(p=(255-r.faceAlpha[m])/255,p=Math.max(0,Math.min(1,p)));const x=g*3,u=g*3+1,d=g*3+2;s.getW(x)!==p&&(s.setW(x,p),l=!0),s.getW(u)!==p&&(s.setW(u,p),l=!0),s.getW(d)!==p&&(s.setW(d,p),l=!0)}}l&&(s.needsUpdate=!0)}})}addModel(e,t){t.calculateBoundsCylinder();const n=this.createSeparateGeometriesByPriority(t),i=[];let r=0;const o=100;for(const[s,l]of n){if(!l||l.getAttribute("position").count===0)continue;const c=s.includes("transparent"),h=s.includes("textured-");let f=null;if(h){const x=s.match(/textured-(\d+)/);x&&(f=parseInt(x[1]))}const g=c?"transparent":"opaque",m=this.createMaterialFromModel(l,g),p=new Gt(l,m);p.userData={modelId:e,originalModel:t,meshType:s,textureId:f},c?(p.renderOrder=1e4+r*o,p.material.transparent=!0,p.material.depthWrite=!1,p.material.polygonOffsetFactor=-10-r,p.material.polygonOffsetUnits=-10-r):(p.renderOrder=r*o,p.material.transparent=!1,p.material.depthWrite=!0,p.material.polygonOffsetFactor=-1-r*.1,p.material.polygonOffsetUnits=-1-r*.1),r++,i.push(p)}this.modelMeshes.set(e,i);for(const s of i)s.userData.textureId!==null&&this.loadAndApplySpecificTexture(s,s.userData.textureId).catch(l=>{console.error(`Failed to load texture ${s.userData.textureId} for model ${e}:`,l)});return this.createVertexLabels(e,t),this.createVertexSpheres(e,t),this.addVertexSpheresToScene(e),i}async loadAndApplySpecificTexture(e,t){try{const n=await this.loadTexture(t);if(n)return(Array.isArray(e.material)?e.material:[e.material]).forEach(r=>{r.map=n,r.transparent=!0,r.alphaTest=.1,r.vertexColors=!0,r.needsUpdate=!0}),!0;console.warn(`Failed to load texture ${t} - texture is null/undefined`)}catch(n){console.error(`Error loading texture ${t}:`,n)}return!1}groupFacesByTexture(e,t,n){const i=new Map;i.set("opaque-untextured",[]),i.set("transparent-untextured",[]);for(const r of t){const o=this.isFaceTransparent(e,r),s=e.faceTextures&&e.faceTextures[r]!==-1&&e.faceTextures[r]!==void 0?e.faceTextures[r]:null;let l;s!==null?l=o?`transparent-textured-${s}`:`opaque-textured-${s}`:l=o?"transparent-untextured":"opaque-untextured",i.has(l)||i.set(l,[]),i.get(l).push(r)}for(const[r,o]of i)if(o.length>0){const s=this.createGeometryForFaces(e,o,r);n.set(r,s)}}createSeparateGeometriesByPriority(e){const i=new Int32Array(1500),r=[];for(let S=0;S<1500;S++)r[S]=new Int32Array(512);const o=new Int32Array(12),s=[],l=new Int32Array(12),c=new Int32Array(2e3),h=new Int32Array(2e3);for(let S=0;S<12;S++)s[S]=new Int32Array(2e3);i.fill(0),o.fill(0),l.fill(0);for(let S=0;S<e.faceCount;S++){if(e.faceInfo&&e.faceInfo[S]===-1)continue;const T=e.faceVertexA[S],b=e.faceVertexB[S],P=e.faceVertexC[S],_=e.vertexZ[T],A=e.vertexZ[b],N=e.vertexZ[P],F=Math.floor((_+A+N)/3)+e.minDepth,D=Math.max(0,Math.min(1499,F));i[D]<512&&(r[D][i[D]++]=S)}if(!e.facePriority){const S=[];for(let b=1499;b>=0;b--){const P=i[b];for(let _=0;_<P;_++)S.push(r[b][_])}const T=new Map;return this.groupFacesByTexture(e,S,T),T}for(let S=1499;S>=0;S--){const T=i[S];if(T>0){const b=r[S];for(let P=0;P<T;P++){const _=b[P],A=e.facePriority[_]||0,N=Math.max(0,Math.min(11,A));if(o[N]<2e3){const F=o[N]++;s[N][F]=_,N<10?l[N]+=S:N===10&&F<2e3?c[F]=S:N===11&&F<2e3&&(h[F]=S)}}}}const f=o[1]>0||o[2]>0?Math.floor((l[1]+l[2])/(o[1]+o[2])):0,g=o[3]>0||o[4]>0?Math.floor((l[3]+l[4])/(o[3]+o[4])):0,m=o[6]>0||o[8]>0?Math.floor((l[6]+l[8])/(o[6]+o[8])):0,p=[];let x=0,u=o[10],d=s[10],y=c;x===u&&(x=0,u=o[11],d=s[11],y=h);let v=x<u&&y?y[x]:-1e3;for(let S=0;S<10;S++){for(;S===0&&v>f;)p.push(d[x++]),x===u&&d!==s[11]&&(x=0,u=o[11],d=s[11],y=h),v=x<u&&y?y[x]:-1e3;for(;S===3&&v>g;)p.push(d[x++]),x===u&&d!==s[11]&&(x=0,u=o[11],d=s[11],y=h),v=x<u&&y?y[x]:-1e3;for(;S===5&&v>m;)p.push(d[x++]),x===u&&d!==s[11]&&(x=0,u=o[11],d=s[11],y=h),v=x<u&&y?y[x]:-1e3;const T=o[S],b=s[S];for(let P=0;P<T;P++)p.push(b[P])}for(;v!==-1e3;)p.push(d[x++]),x===u&&d!==s[11]&&(x=0,d=s[11],u=o[11],y=h),v=x<u&&y?y[x]:-1e3;const M=new Map;return this.groupFacesByTexture(e,p,M),M}isFaceTransparent(e,t){return!!(e.faceAlpha&&e.faceAlpha[t]!==void 0&&e.faceAlpha[t]>0)}createGeometryForFaces(e,t,n){var f,g;if(t.length===0){const m=new jt;return m.setAttribute("position",new Mt([],3)),m.setAttribute("color",new Mt([],4)),m.setAttribute("uv",new Mt([],2)),m}const i=new jt,r=[],o=[],s=[],l=[];let c=0;const h=n.startsWith("opaque-textured-")||n.startsWith("transparent-textured-");for(const m of t){const p=e.faceVertexA[m],x=e.faceVertexB[m],u=e.faceVertexC[m];if(p===void 0||x===void 0||u===void 0||p>=e.vertexCount||x>=e.vertexCount||u>=e.vertexCount)continue;l[c]=m,r.push(e.vertexX[p],-e.vertexY[p],e.vertexZ[p],e.vertexX[x],-e.vertexY[x],e.vertexZ[x],e.vertexX[u],-e.vertexY[u],e.vertexZ[u]);let d,y,v;if(h)if(d=1,y=1,v=1,e.uvCoords&&e.uvCoords[m]&&e.uvCoords[m].length===6){const S=e.uvCoords[m];s.push(S[0],S[1],S[2],S[3],S[4],S[5])}else s.push(0,0,1,0,.5,1);else{s.push(0,0,0,0,0,0);let S;if(((f=e.faceColor)==null?void 0:f[m])!==void 0){const T=e.faceColor[m],b=lt.hslPal[T];S=this.parseColor(b)}else if(((g=e.faceColorA)==null?void 0:g[m])!==void 0){const T=e.faceColorA[m],b=lt.hslPal[T];S=this.parseColor(b)}else S={r:.7,g:.7,b:.7};d=S.r,y=S.g,v=S.b}let M=1;e.faceAlpha&&e.faceAlpha[m]!==void 0&&(M=(255-e.faceAlpha[m])/255,M=Math.max(0,Math.min(1,M)));for(let S=0;S<3;S++)o.push(d,y,v,M);c++}return i.userData.faceIndexMapping=l,i.setAttribute("position",new Mt(r,3)),i.setAttribute("color",new Mt(o,4)),r.length>0&&s.length===r.length/3*2&&i.setAttribute("uv",new Mt(s,2)),i}createMaterialFromModel(e,t){const n=t.includes("transparent"),i=t.includes("textured-"),r={vertexColors:!0,side:qt,blending:Bn,wireframe:!1};if(i&&(r.vertexColors=!0),n?(r.transparent=!0,r.depthWrite=!1,r.alphaTest=.01):(r.transparent=!1,r.depthWrite=!0,r.alphaTest=0),e.userData.usedPriorities&&e.userData.uniquePriorities){const o=[],s=e.userData.uniquePriorities;for(const l of s){const c=new hi({...r,polygonOffset:!0,polygonOffsetFactor:-l*2,polygonOffsetUnits:-l*1});o.push(c)}return o}else return new hi(r)}parseColor(e){if(e==null)return{r:.7,g:.7,b:.7};const t=(e>>16&255)/255,n=(e>>8&255)/255,i=(e&255)/255;return{r:t,g:n,b:i}}removeModel(e){const t=this.modelMeshes.get(e);t&&((Array.isArray(t)?t:[t]).forEach(i=>{this.scene.remove(i),i.geometry.dispose(),Array.isArray(i.material)?i.material.forEach(r=>r.dispose()):i.material.dispose()}),this.modelMeshes.delete(e))}showModel(e){if(this.currentMesh&&(Array.isArray(this.currentMesh)?this.currentMesh.forEach(c=>this.scene.remove(c)):this.scene.remove(this.currentMesh)),this.selectedModel){const c=this.vertexLabels.get(this.selectedModel);c&&c.forEach(h=>this.scene.remove(h)),this.clearVertexHighlights(),this.hideVertexSpheres(),this.clearSpecificVertexHighlights(),this.clearSpecificFaceHighlights(),this.specificHighlightedFacesInfo.originalFaceColors.clear()}this.hideFaceInfo(),this.clearFaceHighlights();const t=this.modelMeshes.get(e);if(!t){console.warn(`Meshes for modelId ${e} not found in cache when trying to show.`);return}if(t.forEach(c=>this.scene.add(c)),this.currentMesh=t,this.selectedModel=e,this.updateModelAlpha(e),this.storeOriginalFaceColors(),this.showVertexNumbers){const c=this.vertexLabels.get(e);c&&c.forEach(h=>this.scene.add(h))}this.editMode&&this.showVertexSpheres();const n=Array.isArray(t)?t[0]:t,i=new yi().setFromObject(n),r=i.getCenter(new B),o=i.getSize(new B),s=Math.max(o.x,o.y,o.z),l=s*2.5;this.cameraTarget.copy(r),this.cameraTarget.y+=s*.5,this.camera.position.set(this.cameraTarget.x+l*.7,this.cameraTarget.y+l*.7,this.cameraTarget.z+l*.7),this.camera.lookAt(this.cameraTarget)}onVertexMouseDown(e){if(!this.currentMesh||!this.selectedModel)return;const t=this.renderer.domElement.getBoundingClientRect();this.mouse.x=(e.clientX-t.left)/t.width*2-1,this.mouse.y=-((e.clientY-t.top)/t.height)*2+1,this.raycaster.setFromCamera(this.mouse,this.camera);const n=this.vertexSpheres.get(this.selectedModel);if(n){const i=this.raycaster.intersectObjects(n,!1);if(i.length>0){const r=i[0].object,o=r.userData.vertexIndex;this.selectedVertex={index:o,sphere:r,originalPosition:r.position.clone()},this.isDragging=!0,this.cameraControls=!1;const s=new B;this.camera.getWorldDirection(s),this.dragPlane.position.copy(r.position),this.dragPlane.lookAt(this.dragPlane.position.clone().add(s)),this.renderer.domElement.parentElement.classList.add("dragging"),e.preventDefault(),e.stopPropagation()}}}onVertexDrag(e){if(!this.selectedVertex||!this.currentMesh)return;const t=this.renderer.domElement.getBoundingClientRect();this.mouse.x=(e.clientX-t.left)/t.width*2-1,this.mouse.y=-((e.clientY-t.top)/t.height)*2+1,this.raycaster.setFromCamera(this.mouse,this.camera);const n=this.raycaster.intersectObject(this.dragPlane,!1);if(n.length>0){const i=n[0].point;this.selectedVertex.sphere.position.copy(i);const r=Array.isArray(this.currentMesh)?this.currentMesh:[this.currentMesh];let o=null;for(const l of r)if(l&&l.userData&&l.userData.originalModel){o=l.userData.originalModel;break}if(!o)return;const s=this.selectedVertex.index;if(o.updateVertex(s,i.x,-i.y,i.z),this.showVertexNumbers){const l=this.vertexLabels.get(this.selectedModel);l&&l[s]&&l[s].position.copy(i)}this.updateMeshGeometry()}}onVertexMouseUp(){this.selectedVertex&&(this.selectedVertex=null,this.isDragging=!1,this.cameraControls=!0,this.renderer.domElement.parentElement.classList.remove("dragging"))}highlightVertexLabel(e){if(this.clearFaceHighlights(),this.clearVertexHighlights(),!this.editMode||!this.currentMesh||!this.selectedModel)return;const t=Array.isArray(this.currentMesh)?this.currentMesh:[this.currentMesh];let n=null;for(const o of t)if(o&&o.userData&&o.userData.originalModel){n=o.userData.originalModel;break}if(!n||!n.labelVertices||!n.labelVertices[e])return;const i=this.vertexSpheres.get(this.selectedModel);if(!i)return;this.highlightedVertexLabelInfo.id=e,n.labelVertices[e].forEach(o=>{if(o<i.length&&o>=0){const s=i[o];s&&s.material&&(this.highlightedVertexLabelInfo.originalSphereColors.has(s)||this.highlightedVertexLabelInfo.originalSphereColors.set(s,s.material.color.getHex()),s.material.color.setHex(65280))}})}clearVertexHighlights(){if(!this.selectedModel)return;const e=this.vertexSpheres.get(this.selectedModel);e&&e.forEach(t=>{t&&t.material&&t.material.color.setHex(16711680)}),this.highlightedVertexLabelInfo.id=null,this.highlightedVertexLabelInfo.originalSphereColors.clear(),this.clearSpecificVertexHighlights(!1)}createVertexSpheres(e,t){const n=[],i=new Cs(1,6,4);for(let r=0;r<t.vertexCount;r++){const o=new hi({color:16711680,transparent:!1,depthTest:!0,opacity:1}),s=new Gt(i,o);s.position.set(t.vertexX[r],-t.vertexY[r],t.vertexZ[r]),s.userData.vertexIndex=r,s.visible=!1,s.userData.originalScale=1,n.push(s)}this.vertexSpheres.set(e,n)}addVertexSpheresToScene(e){const t=this.vertexSpheres.get(e);t&&t.forEach(n=>{n.parent||this.scene.add(n)})}createVertexLabels(e,t){const n=[];for(let i=0;i<t.vertexCount;i++){const r=document.createElement("canvas"),o=r.getContext("2d");r.width=64,r.height=32,o.font="14px Arial",o.fillStyle="yellow",o.strokeStyle="black",o.lineWidth=2,o.textAlign="center",o.textBaseline="middle";const s=i.toString();o.strokeText(s,32,16),o.fillText(s,32,16);const l=new dp(r),c=new Wo({map:l,transparent:!0,depthTest:!1}),h=new fp(c);h.position.set(t.vertexX[i],-t.vertexY[i],t.vertexZ[i]),h.scale.set(8,4,1),n.push(h)}this.vertexLabels.set(e,n)}toggleVertexNumbers(){if(this.showVertexNumbers=!this.showVertexNumbers,this.selectedModel){const e=this.vertexLabels.get(this.selectedModel);e&&(this.showVertexNumbers?e.forEach(t=>this.scene.add(t)):e.forEach(t=>this.scene.remove(t)))}return this.showVertexNumbers}onWindowResize(e){this.camera.aspect=e.clientWidth/e.clientHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(e.clientWidth,e.clientHeight)}animate(){if(requestAnimationFrame(()=>this.animate()),this.renderer.render(this.scene,this.camera),this.cameraControls){const e=this.cameraMoveSpeed;let t=!1;const n=new B,i=new B,r=new B,o=new B;this.camera.getWorldDirection(i),r.crossVectors(i,this.camera.up).normalize(),o.crossVectors(r,i).normalize(),this.keys.w&&(n.addScaledVector(o,e),t=!0),this.keys.s&&(n.addScaledVector(o,-e),t=!0),this.keys.a&&(n.addScaledVector(r,-e),t=!0),this.keys.d&&(n.addScaledVector(r,e),t=!0),t&&(this.camera.position.add(n),this.cameraTarget.add(n),this.camera.lookAt(this.cameraTarget))}}toggleWireframe(){if(this.currentMesh){const e=Array.isArray(this.currentMesh)?this.currentMesh:[this.currentMesh];let t=!1;return e.forEach((n,i)=>{(Array.isArray(n.material)?n.material:[n.material]).forEach((o,s)=>{o.wireframe=!o.wireframe,i===0&&s===0&&(t=o.wireframe)})}),t}return!1}toggleEditMode(){this.editMode=!this.editMode;const e=this.renderer.domElement.parentElement;return this.clearSpecificVertexHighlights(),this.editMode?(e.classList.add("vertex-edit"),this.showVertexSpheres()):(e.classList.remove("vertex-edit"),this.hideVertexSpheres(),this.clearVertexHighlights(),this.selectedVertex=null,this.isDragging=!1,this.cameraControls=!0,e.classList.remove("dragging")),this.editMode}showVertexSpheres(){if(!this.selectedModel)return;const e=this.vertexSpheres.get(this.selectedModel);e&&e.forEach(t=>t.visible=!0)}hideVertexSpheres(){if(!this.selectedModel)return;const e=this.vertexSpheres.get(this.selectedModel);e&&e.forEach(t=>t.visible=!1),this.clearSpecificVertexHighlights()}onMouseClick(e){if(this.editMode)return;if(!this.renderer||!this.raycaster||!this.mouse||!this.camera||!this.currentMesh){console.warn("Raycasting prerequisites not met.");return}const t=this.renderer.domElement.getBoundingClientRect();this.mouse.x=(e.clientX-t.left)/t.width*2-1,this.mouse.y=-((e.clientY-t.top)/t.height)*2+1,this.raycaster.setFromCamera(this.mouse,this.camera);let n=[];if(Array.isArray(this.currentMesh)?n=this.currentMesh.filter(r=>r!==null):this.currentMesh!==null&&(n=[this.currentMesh]),n.length===0){this.hideFaceInfo();return}const i=this.raycaster.intersectObjects(n);if(i.length>0){const r=i[0],o=r.object;if(!(o instanceof Gt)){this.hideFaceInfo();return}const s=o.geometry;let l=r;if(i.length>1){const g=r.distance,m=i.filter(p=>Math.abs(p.distance-g)<.001);m.length>1&&(l=m.reduce((p,x)=>{const u=p.faceIndex,d=x.faceIndex;return d==null?p:u==null||d>u?x:p}))}if(l.faceIndex===null||l.faceIndex===void 0){this.hideFaceInfo(),console.warn("Intersection found, but no valid faceIndex determined.");return}let c=l.faceIndex;const h=s.userData.faceIndexMapping,f=s.userData.renderedToOriginalFaceIndexMap;if(h){const g=h[c];if(g!==void 0)c=g;else{console.warn(`faceIndex ${c} not found in faceIndexMapping.`),this.hideFaceInfo();return}}else if(s.userData.usedPriorities&&f){const g=f[c];if(g!==void 0)c=g;else{console.warn(`faceIndex ${c} not found in renderedToOriginalFaceIndexMap.`),this.hideFaceInfo();return}}this.displayFaceInfo(c)}else this.hideFaceInfo()}displayFaceInfo(e){var S,T;if(!this.selectedModel||!this.currentMesh)return;const t=Array.isArray(this.currentMesh)?this.currentMesh:[this.currentMesh];if(t.length===0)return;let n=null;for(const b of t)if(b&&b.userData&&b.userData.originalModel){n=b.userData.originalModel;break}if(!n)return;if(!n.faceVertexA||!n.faceVertexB||!n.faceVertexC||!n.vertexX||!n.vertexY||!n.vertexZ){console.error("Model is missing required vertex or face data.");return}const i=document.getElementById("face-info"),r=document.getElementById("face-details");if(!i||!r){console.warn("Face info panel elements not found in the DOM.");return}const o=n.faceVertexA[e],s=n.faceVertexB[e],l=n.faceVertexC[e];if(o===void 0||s===void 0||l===void 0){console.warn(`Vertex indices for face ${e} are undefined.`);return}let c="";const h=(S=n.faceTextures)==null?void 0:S[e];if(h!==void 0&&h!==-1){let b=`ID: ${h}`;if(this.fileLoader&&this.fileLoader.availableTextures){const P=this.fileLoader.availableTextures.get(h);P&&P.name?b=P.name.substring(0,P.name.lastIndexOf("."))||P.name:b+=" (Name not found)"}else b+=" (Texture map unavailable)";c=`<div class="face-detail"><strong>Texture:</strong> ${b}</div>`}else{let b,P="#ffffff";if(n.faceColor&&n.faceColor[e]!==void 0&&(b=n.faceColor[e]),b!==void 0&&lt.hslPal&&lt.hslPal[b]!==void 0){const _=lt.hslPal[b],A={r:_>>16&255,g:_>>8&255,b:_&255};P=`#${A.r.toString(16).padStart(2,"0")}${A.g.toString(16).padStart(2,"0")}${A.b.toString(16).padStart(2,"0")}`;const N=(T=n.faceColor)==null?void 0:T[e];N!==void 0?c=`
                        <div class="face-detail">
                            <strong>Face Color:</strong> ${dn.reverseHsl(N)[0]}
                            <span class="color-swatch" style="background-color: ${P}"></span>
                        </div>`:c='<div class="face-detail"><strong>Face Color:</strong> N/A (Invalid index for HSL)</div>'}else c='<div class="face-detail"><strong>Face Color:</strong> N/A</div>'}const f=n.vertexX[o],g=n.vertexY[o],m=n.vertexZ[o],p=n.vertexX[s],x=n.vertexY[s],u=n.vertexZ[s],d=n.vertexX[l],y=n.vertexY[l],v=n.vertexZ[l];if(f===void 0||g===void 0||m===void 0||p===void 0||x===void 0||u===void 0||d===void 0||y===void 0||v===void 0){console.warn(`Vertex coordinates for face ${e} are incomplete.`),r.innerHTML=`<div class="face-detail"><strong>Error:</strong> Incomplete vertex data for face ${e}.</div>`,i.style.display="block";return}const M=[{x:f,y:g,z:m},{x:p,y:x,z:u},{x:d,y,z:v}];r.innerHTML=`
            <div class="face-detail"><strong>Face Index:</strong> ${e}</div>
            <div class="face-detail"><strong>Vertices:</strong> [${o}, ${s}, ${l}]</div>
            <div class="face-detail">
                <strong>Vertex A (${o}):</strong> (${M[0].x.toFixed(2)}, ${M[0].y.toFixed(2)}, ${M[0].z.toFixed(2)})
            </div>
            <div class="face-detail">
                <strong>Vertex B (${s}):</strong> (${M[1].x.toFixed(2)}, ${M[1].y.toFixed(2)}, ${M[1].z.toFixed(2)})
            </div>
            <div class="face-detail">
                <strong>Vertex C (${l}):</strong> (${M[2].x.toFixed(2)}, ${M[2].y.toFixed(2)}, ${M[2].z.toFixed(2)})
            </div>
            ${c}
        `,i.style.display="block"}hideFaceInfo(){const e=document.getElementById("face-info");e?e.style.display="none":console.warn("Face info panel element not found in the DOM when trying to hide.")}}class yp{constructor(e,t){this.loader=t,this.renderer=new _p(e,this.loader)}async loadModel(e){try{const t=await this.loader.loadModel(e);if(this.renderer.modelMeshes.has(e))return;this.renderer.addModel(e,t)}catch(t){throw console.error(`Failed to load model '${e}': ${t}`),t}}getRenderer(){return this.renderer}}const ys={_1:0,_2:1,_3:2,_4:3,_q:4,_w:5,_r:6,_e:7,_t:8,_5:9,_8:10,_9:11,_a:12,_s:13,_d:14,_f:15,_g:16,_h:17,_z:18,_x:19,_c:20,_v:21,_0:22},Yo=[],Ms={};for(const a in ys)Ms[ys[a]]=a;for(let a=0;a<=22;a++)Ms[a]&&Yo.push(Ms[a]);function ho(a,e,t,n,i){const r=e.toLowerCase(),o=a.querySelectorAll(t);let s=0;o.forEach(c=>{(c.textContent||"").toLowerCase().includes(r)?(c.style.display="",s++):c.style.display="none"});let l=a.querySelector(".list-message");if(!l){l=document.createElement("div"),l.className=t.startsWith(".model-item")?"model-item list-message":"label-item list-message";const c=a.querySelector(t);c?a.insertBefore(l,c):a.appendChild(l)}l.style.display="block",o.length===0?l.innerHTML=n:s===0&&e?l.innerHTML=`<span>${i} for "${e}"</span>`:s===0&&!e&&o.length>0?l.innerHTML=n:l.style.display="none"}class Mp{constructor(){this.container=document.getElementById("container"),this.loader=new Qo,this.viewer=new yp(this.container,this.loader),this.currentAnimation={modelRef:null,seqId:null,seqData:null,frameIndex:0,timerId:null},this.activeTransformEditor={element:null,animFrame:null,transformIndex:-1,parentElement:null},this.activeNewTransformForm={baseGroupSelect:null,xInput:null,yInput:null,zInput:null,affectedInfoDiv:null},this.currentSelectedAnimFrameInstance=null,this.loopSequenceCheckbox=null,this.changeFaceLabels=null,this.changeVertexLabels=null,this.modelSearchInput=document.getElementById("model-search"),this.seqSearchInput=document.getElementById("seq-search"),this.exportModelButton=null,this.setupUI(),this.setupAnimsetTools(),this.setupFaceLabelUI(),this.setupVertexLabelUI(),this.initializeFaceLabelPanel(),this.initializeVertexLabelPanel(),this.initializeSeqListPanel(),this.initializeAnimFrameListPanel(),this.initializeAnimFrameDetailsPanel(),this.setupSeqAndAnimFrameEventHandlers(),this.modelSearchInput.addEventListener("input",()=>this.filterModelList()),this.seqSearchInput.addEventListener("input",()=>this.filterSeqList())}setupAnimsetTools(){const e=document.getElementById("import-animset-btn"),t=document.getElementById("export-animset-btn"),n=document.getElementById("copy-seq-btn"),i=document.getElementById("anim-import-input");t==null||t.addEventListener("click",()=>{var p,x,u;const r=document.querySelector("#seq-list .label-item.selected");if(!r)return alert("Select a SEQ first.");const o=r.textContent,s=this.loader.getSeqData(o),l=(p=s==null?void 0:s.frameIds)==null?void 0:p[0];if(!l)return alert("SEQ has no frames.");const c=parseInt(l.split("_").pop()),h=(u=(x=Ke.instances[c])==null?void 0:x.base)==null?void 0:u.id;if(h===void 0)return alert("Could not resolve Base ID.");const f=Jt.exportAsLegacyAnim(h),g=new Blob([f],{type:"application/octet-stream"}),m=document.createElement("a");m.href=URL.createObjectURL(g),m.download=`anim_${h}.anim`,m.click()}),n==null||n.addEventListener("click",async()=>{var c,h;const r=document.querySelector("#seq-list .label-item.selected");if(!r)return alert("Select a SEQ first.");const o=r.textContent,s=this.loader.getSeqData(o);let l=`[${o}]
`;(c=s==null?void 0:s.frameIds)==null||c.forEach((f,g)=>{f&&(l+=`frame${g+1}=${f}
`)}),(h=s==null?void 0:s.delayValues)==null||h.forEach((f,g)=>{f!==void 0&&f>0&&(l+=`delay${g+1}=${f}
`)}),(s==null?void 0:s.replayoff)!==void 0&&s.replayoff!==-1&&(l+=`replayoff=${s.replayoff}
`);try{await navigator.clipboard.writeText(l),console.log(`Copied current SEQ to clipboard:
`,l),alert("Current .seq config copied to clipboard!")}catch{prompt("Clipboard blocked. Copy the config from here:",l)}}),e==null||e.addEventListener("click",()=>i.click()),i==null||i.addEventListener("change",async()=>{var M;const r=(M=i.files)==null?void 0:M[0];if(!r)return;const o=r.name.split("_"),s=parseInt(o[o.length-1],10);if(isNaN(s))return alert("Could not determine Original Base ID from filename. Filename must end in _ID.anim");const l=await this.showConversionOptionsModal();if(!l){i.value="";return}const{revisionDir:c,isPlayerEquipment:h}=l;let f=null,g="relabeled_model.ob2";if(h){const S=await this.getModelFileFromUser();if(S){g=S.name;const T=await S.arrayBuffer();f=pi.convertFromData(new ce(new Uint8Array(T))),f.createLabelReferences()}}const m=new Uint8Array(await r.arrayBuffer()),p=await Jt.importWithConflictCheck(m),{from:x,to:u}=Jt.parseRevisionDir(c);let d;if(h){if(f){Jt.applyModelRelabel(f,x,u);const S=f.exportToOb2(),T=new Blob([S],{type:"application/octet-stream"}),b=document.createElement("a");b.href=URL.createObjectURL(T),b.download=g,b.click(),console.log("Model relabeled and exported.")}d=Jt.remapBaseLabels(p.baseId,x,u)??p.baseId}else d=p.baseId;console.log("%c--- ANIMSET CONVERSION SUCCESSFUL ---","color:green; font-weight:bold;");try{const S=Jt.exportAnimSet(d),T=new Blob([S],{type:"application/octet-stream"}),b=document.createElement("a");b.href=URL.createObjectURL(T),b.download=`anim_${d}.anim`,b.click(),URL.revokeObjectURL(b.href),console.log(`Auto-exported converted file: anim_${d}.anim`)}catch(S){console.error("Auto-export failed:",S)}const y=prompt("AnimSet converted! To update your .seq config, paste the original [sequence] text here:");if(y){const S=Jt.remapSeqConfig(y,p.mapping);console.log("%c--- UPDATED SEQ CONFIG ---","color:cyan; font-weight:bold;"),console.log(S),await navigator.clipboard.writeText(S)}let v=`--- ADD TO base.pack ---
${d}=base_${d}

`;v+=`--- ADD TO animset.pack ---
${d}=anim_${d}

`,v+=`--- ADD TO anim.pack ---
`,p.mapping.forEach(S=>{v+=`${S}=anim_${S}
`}),console.log("%c--- PACK FILE ENTRIES ---","color:orange; font-weight:bold;"),console.log(v),alert(`Remapping Complete!
1. The new SEQ config should be on your clipboard.
2. Pack file entries have been printed to the Console (F12).
-Please place your new .anim file in /Content/models/
-Update all files listed in the console.

If you want to map additional seqs under that animset, you have to manually convert config to new frame ids.
`),this.updateSeqListUI(),i.value=""})}async getModelFileFromUser(){return confirm(`Player equipment or weapons require the model's vertex labels to be remapped.

Do you have the associated .ob2 model file?

OK = select file, Cancel = skip model relabeling.`)?new Promise(t=>{const n=document.createElement("input");n.type="file",n.accept=".ob2";let i=!1;n.onchange=()=>{var o;i||(i=!0,window.removeEventListener("focus",r),t(((o=n.files)==null?void 0:o[0])??null))};const r=()=>{setTimeout(()=>{i||(i=!0,t(null))},300)};n.click(),setTimeout(()=>{window.addEventListener("focus",r,{once:!0})},500)}):null}showConversionOptionsModal(){return new Promise(e=>{const t=document.getElementById("animset-modal-overlay"),n=document.getElementById("animset-modal-cancel"),i=document.getElementById("animset-modal-confirm"),r=document.getElementById("animset-revision-select"),o=document.getElementById("animset-is-player");t.style.display="flex";const s=()=>{t.style.display="none"},l=()=>{s(),n.removeEventListener("click",l),i.removeEventListener("click",c),e(null)},c=()=>{const h={revisionDir:r.value,isPlayerEquipment:o.checked};s(),n.removeEventListener("click",l),i.removeEventListener("click",c),e(h)};n.addEventListener("click",l),i.addEventListener("click",c)})}filterModelList(){const e=document.getElementById("model-list"),t=this.modelSearchInput.value,i=document.getElementById("view-mode-select").value;let r="<span>No .ob2 models loaded</span>";i==="npcs"?r="<span>No NPCs loaded</span>":i==="objects"?r="<span>No Objects (.obj) loaded</span>":i==="locations"&&(r="<span>No Locations (.loc) loaded</span>"),ho(e,t,".model-item:not(.list-message)",r,i==="models"?"No models found":i==="npcs"?"No NPCs found":i==="objects"?"No Objects found":i==="locations"?"No Locations found":"No items found")}filterSeqList(){const e=document.getElementById("seq-list"),t=this.seqSearchInput.value;ho(e,t,".label-item:not(.list-message)","<span>No SEQs available</span>","No sequences found")}initializeAnimFrameDetailsPanel(){const e=document.getElementById("animframe-details-panel"),t=document.getElementById("clear-details"),n=document.getElementById("animframe-details-content"),i=document.getElementById("add-new-transform-btn"),r=document.getElementById("delete-transform-btn");e.style.display="block",n.innerHTML='<div class="label-item no-labels"><span style="color: #888; font-style: italic;">Select an animation frame to view details.</span></div>',t.disabled=!0,i.disabled=!0,r.disabled=!0,t.addEventListener("click",()=>{if(t.disabled)return;this.hideNewTransformForm(),this.clearTransformEditor();const o=this.viewer.getRenderer();o&&(o.clearSpecificVertexHighlights(),o.clearSpecificFaceHighlights()),this.currentSelectedAnimFrameInstance=null,this.updateExportFrameButtonState(),t.disabled=!0;const s=document.getElementById("add-new-transform-btn");s&&(s.disabled=!0),document.getElementById("animframe-details-content").querySelectorAll(".transform-group").forEach(c=>{c.style.backgroundColor="#2a2a2a"})}),i.addEventListener("click",()=>{i.disabled||this.showNewTransformForm()}),r.addEventListener("click",()=>{r.disabled||this.handleDeleteSelectedTransform()})}clearTransformEditor(){this.activeTransformEditor.element&&this.activeTransformEditor.element.remove(),this.activeTransformEditor={element:null,animFrame:null,transformIndex:-1,parentElement:null};const e=document.getElementById("delete-transform-btn");e.disabled=!0}showTransformEditor(e,t,n){this.clearTransformEditor();const i=document.getElementById("delete-transform-btn"),r=document.createElement("div");r.className="transform-editor";const o=e.base;let s=`Unknown: ${t}`,l=-1;if(o&&o.animTypes&&e.bases&&t<e.bases.length&&e.bases[t]<o.animTypes.length){const f=e.bases[t];l=o.animTypes[f],s=this.getTransformTypeName(l)}r.innerHTML=`<h4>Edit Transform ${t+1} (${s})</h4>`;const c={x:e.x&&t<e.x.length?e.x[t]:0,y:e.y&&t<e.y.length?e.y[t]:0,z:e.z&&t<e.z.length?e.z[t]:0};let h=["x","y","z"];l===5&&(h=["x"]),h.forEach(f=>{const g=document.createElement("div"),m=document.createElement("label");m.htmlFor=`transform-edit-${f}-${t}`,l===5&&f==="x"?m.textContent="Alpha:":m.textContent=`${f.toUpperCase()}:`;let p,x;l===2||l===5&&f==="x"?(p=document.createElement("input"),p.type="range",p.min="0",p.max="255",p.className="transform-slider",x=document.createElement("span"),x.className="slider-value-display",x.textContent=c[f].toString(),p.id=`transform-edit-${f}-${t}`,p.dataset.axis=f,p.value=c[f].toString(),p.addEventListener("input",u=>{const d=parseInt(u.target.value,10);isNaN(d)||(e[f]&&t<e[f].length?e[f][t]=d:console.warn(`Attempted to update transform out of bounds: axis ${f}, index ${t}`),x.textContent=d.toString(),this.refreshActiveAnimFrameDisplay())})):(p=document.createElement("input"),p.type="number",p.id=`transform-edit-${f}-${t}`,p.dataset.axis=f,p.value=c[f].toString(),p.addEventListener("input",u=>{const d=parseFloat(u.target.value);isNaN(d)||(e[f]&&t<e[f].length?e[f][t]=d:console.warn(`Attempted to update transform out of bounds: axis ${f}, index ${t}`),this.refreshActiveAnimFrameDisplay())})),g.appendChild(m),g.appendChild(p),x&&g.appendChild(x),r.appendChild(g)}),this.activeTransformEditor={element:r,animFrame:e,transformIndex:t,parentElement:n},n.parentNode.insertBefore(r,n.nextSibling),i.disabled=!1}refreshActiveAnimFrameDisplay(){this.currentSelectedAnimFrameInstance&&this.currentSelectedAnimFrameInstance.id!==void 0&&this.displaySingleAnimFrame(this.currentSelectedAnimFrameInstance.id)}initializeSeqListPanel(){const e=document.getElementById("seq-list-panel");this.loopSequenceCheckbox=document.getElementById("loop-sequence-checkbox"),e.style.display="block",this.filterSeqList(),document.getElementById("start-seq").disabled=!0,document.getElementById("clear-seq").disabled=!0,this.loopSequenceCheckbox.disabled=!0}getTransformTypeName(e){switch(e){case 0:return"Set Pivot";case 1:return"Translate";case 2:return"Rotate";case 3:return"Scale";case 5:return"Alpha (Faces)";default:return`Unknown (${e})`}}initializeAnimFrameListPanel(){const e=document.getElementById("animframe-list-panel"),t=document.getElementById("animframe-list"),n=document.getElementById("clear-frames"),i=document.getElementById("export-frame-btn");e.style.display="block",t.innerHTML='<div class="label-item no-labels"><span style="color: #888; font-style: italic;">Select a SEQ to view frames</span></div>',i.disabled=!0,n.disabled=!0,n.addEventListener("click",()=>{if(n.disabled)return;const r=this.viewer.getRenderer(),o=r.selectedModel;if(o){const s=r.modelMeshes.get(o);if(s){const l=Array.isArray(s)?s:[s];let c=null;for(const h of l)if(h&&h.userData&&h.userData.originalModel){c=h.userData.originalModel;break}c&&(c.resetToOriginal(),r.updateMeshGeometry(),r.updateVertexVisuals(o))}}this.currentSelectedAnimFrameInstance=null,this.updateAnimFrameDetailsUI(null),document.querySelectorAll("#animframe-list .label-item.selected").forEach(s=>s.classList.remove("selected"))}),i.addEventListener("click",()=>{i.disabled||this.handleExportAnimFrame()})}setupSeqAndAnimFrameEventHandlers(){const e=document.getElementById("start-seq"),t=document.getElementById("clear-seq");e.addEventListener("click",()=>this.handleStartSequence()),t.addEventListener("click",()=>this.handleClearSequence())}setupUI(){const e=document.getElementById("file-input"),t=document.getElementById("status"),n=document.getElementById("vertex-toggle"),i=document.getElementById("wireframe-toggle"),r=document.getElementById("edit-toggle"),o=document.getElementById("view-mode-select");this.exportModelButton=document.getElementById("export-model-button"),e.addEventListener("change",async s=>{const l=s.target;if(!l.files||l.files.length===0)return;const c=document.getElementById("loading");c.style.display="block";try{await this.loader.loadContentFiles(l.files),this.updateModelListUI(),this.updateSeqListUI(),t.textContent=`Found ${this.loader.getAvailableModels().length} .ob2 files`}catch(h){console.error("Error processing files:",h),t.textContent=`Error: ${h.message}`}finally{c.style.display="none"}}),n.addEventListener("click",()=>{const s=this.viewer.getRenderer().toggleVertexNumbers();n.textContent=s?"Hide Vertex Numbers":"Show Vertex Numbers",n.classList.toggle("active",s)}),i.addEventListener("click",()=>{const s=this.viewer.getRenderer().toggleWireframe();i.textContent=s?"Hide Wireframe":"Show Wireframe",i.classList.toggle("active",s)}),r.addEventListener("click",()=>{const s=this.viewer.getRenderer().toggleEditMode();r.textContent=s?"Disable Vertex Editing":"Enable Vertex Editing",r.classList.toggle("active",s),this.updateVertexLabelUIState()}),o.addEventListener("change",()=>{this.updateModelListUI(),this.updateExportButtonState(),this.updateLabelsEditBoxes()}),this.exportModelButton.addEventListener("click",()=>this.handleExportModel()),this.updateExportButtonState()}updateLabelsEditBoxes(){const n=document.getElementById("view-mode-select").value==="npcs";this.changeVertexLabels&&(this.changeVertexLabels.disabled=n,this.changeVertexLabels.checked=n?!1:this.changeVertexLabels.checked),this.changeFaceLabels&&(this.changeFaceLabels.disabled=n,this.changeFaceLabels.checked=n?!1:this.changeFaceLabels.checked)}updateExportButtonState(){if(this.exportModelButton){const e=this.viewer.getRenderer(),t=e.selectedModel;let n=!1;if(t){const i=e.modelMeshes.get(t);if(i){const r=Array.isArray(i)?i:[i];n=r.length>0&&r[0]&&r[0].userData&&r[0].userData.originalModel}}this.exportModelButton.disabled=!n}}initializeFaceLabelPanel(){var n;const e=document.getElementById("label-panel"),t=document.getElementById("label-list");e.style.display="block",t.innerHTML='<div class="label-item no-labels"><span style="color: #888; font-style: italic;">No model loaded</span></div>',document.getElementById("clear-labels").disabled=!0,this.changeFaceLabels=document.getElementById("change-face-labels"),(n=this.changeFaceLabels)==null||n.addEventListener("change",()=>{const i=this.viewer.getRenderer().selectedModel;i&&this.updateFaceLabelUI(i),this.updateLabelsEditBoxes()})}initializeVertexLabelPanel(){var n;const e=document.getElementById("vertex-label-panel"),t=document.getElementById("vertex-label-list");e.style.display="block",t.innerHTML='<div class="label-item no-labels"><span style="color: #888; font-style: italic;">No model loaded</span></div>',document.getElementById("clear-vertex-labels").disabled=!0,this.changeVertexLabels=document.getElementById("change-vertex-labels"),(n=this.changeVertexLabels)==null||n.addEventListener("change",()=>{const i=this.viewer.getRenderer().selectedModel;i&&this.updateVertexLabelUI(i),this.updateLabelsEditBoxes()})}async updateModelListUI(){const e=document.getElementById("model-list"),n=document.getElementById("view-mode-select").value;if(e.innerHTML="",this.handleClearSequence(),n==="models"){const i=this.loader.getAvailableModels();let r=!0;for(const o of i){const s=document.createElement("div");s.className="model-item",s.textContent=o,s.addEventListener("click",async()=>{s.classList.add("loading"),s.textContent=`${o} (loading...)`;try{await this.viewer.loadModel(o),document.querySelectorAll(".model-item").forEach(l=>{l.classList.remove("selected","loading");const c=l.textContent.replace(" (loading...)","").replace(" (error)","");l.textContent=c}),s.classList.add("selected"),s.textContent=o,this.viewer.getRenderer().showModel(o),this.updateFaceLabelUI(o),this.updateVertexLabelUI(o),this.handleClearSequence(),this.updateAnimationButtonStates(),this.updateExportButtonState()}catch{s.classList.remove("loading"),s.textContent=`${o} (error)`,s.classList.add("error"),setTimeout(()=>{s.classList.remove("error"),s.textContent=o},3e3),this.updateExportButtonState()}}),e.appendChild(s),r&&i.length>0&&(setTimeout(async()=>{try{await this.viewer.loadModel(o),s.classList.add("selected"),this.viewer.getRenderer().showModel(o),this.updateFaceLabelUI(o),this.updateVertexLabelUI(o),this.handleClearSequence(),this.updateAnimationButtonStates(),this.updateExportButtonState()}catch(l){console.error(`Auto-load failed for ${o}: ${l}`)}},100),r=!1)}}else if(n==="npcs"){const i=this.loader.getAllNpcs();for(const r of i){const o=this.loader.getNpcData(r),s=document.createElement("div");s.className="model-item npc-item";const l=(o==null?void 0:o.name)||r;s.innerHTML=`<div class="npc-name">${l}</div><div class="npc-id">${r}</div>${o!=null&&o.models?`<div class="npc-models">${o.models.length} model(s)</div>`:""}`,s.addEventListener("click",async()=>{s.classList.add("loading");const c=s.innerHTML;s.innerHTML=`${c} <div style="color: #888; font-size: 10px; margin-top: 2px;">Loading...</div>`;try{const h=await this.loader.loadNpcModels(r),f=`npc_${r}`;this.viewer.getRenderer().addModel(f,h),document.querySelectorAll(".model-item").forEach(g=>g.classList.remove("selected","loading")),s.classList.add("selected"),s.innerHTML=c,this.viewer.getRenderer().showModel(f),this.updateFaceLabelUI(f),this.updateVertexLabelUI(f),this.handleClearSequence(),this.updateAnimationButtonStates(),this.updateExportButtonState()}catch(h){console.error(`Error loading object ${r}:`,h),s.classList.remove("loading"),s.innerHTML=`${c} <div style="color: #ff6666; font-size: 10px; margin-top: 2px;">Error: ${h.message.substring(0,30)}...</div>`,s.classList.add("error"),setTimeout(()=>{s.classList.remove("error"),s.innerHTML=c},5e3),this.updateExportButtonState()}}),e.appendChild(s)}}else if(n==="objects"){const i=this.loader.getAllObjs();for(const r of i){const o=this.loader.getObjData(r),s=document.createElement("div");s.className="model-item obj-item";const l=(o==null?void 0:o.name)||r;s.innerHTML=`<div class="obj-name">${l}</div><div class="obj-id">${r}</div>${o!=null&&o.model?`<div class="obj-model-name">Model: ${o.model}</div>`:""}`,s.addEventListener("click",async()=>{s.classList.add("loading");const c=s.innerHTML;if(s.innerHTML=`${c} <div style="color: #888; font-size: 10px; margin-top: 2px;">Loading...</div>`,!(o!=null&&o.model)){s.classList.remove("loading"),s.innerHTML=`${c} <div style="color: #ffcc00; font-size: 10px; margin-top: 2px;">No model defined</div>`,setTimeout(()=>{s.innerHTML=c},3e3),this.updateExportButtonState();return}try{const h=o.model;let f=null;for(const[x]of this.loader.availableFiles.entries()){const u=x.split("/");if(u[u.length-1]===h){f=x;break}}if(!f)throw new Error(`Model file not found for object: ${h}`);const m=(await this.loader.loadModel(f)).clone();if(o.recols)for(const x in o.recols){const[u,d]=o.recols[x];m.recolor(u,d)}m.processTextureCoordinates(),m.createLabelReferences(),m.calculateNormals(64,850,-30,-50,-30,!0),m.saveCurrentVerticesAsOriginal();const p=`obj_${r}_${f.replace(/\//g,"_")}`;this.viewer.getRenderer().addModel(p,m),document.querySelectorAll(".model-item").forEach(x=>x.classList.remove("selected","loading")),s.classList.add("selected"),s.innerHTML=c,this.viewer.getRenderer().showModel(p),this.updateFaceLabelUI(p),this.updateVertexLabelUI(p),this.handleClearSequence(),this.updateAnimationButtonStates(),this.updateExportButtonState()}catch(h){console.error(`Error loading object ${r}:`,h),s.classList.remove("loading"),s.innerHTML=`${c} <div style="color: #ff6666; font-size: 10px; margin-top: 2px;">Error: ${h.message.substring(0,30)}...</div>`,s.classList.add("error"),setTimeout(()=>{s.classList.remove("error"),s.innerHTML=c},5e3),this.updateExportButtonState()}}),e.appendChild(s)}}else if(n==="locations"){const i=this.loader.getAllLocs();for(const r of i){const o=this.loader.getLocData(r),s=document.createElement("div");s.className="model-item loc-item";const l=(o==null?void 0:o.name)||r;s.innerHTML=`<div class="loc-name">${l}</div><div class="loc-id">${r}</div>${o!=null&&o.model?`<div class="loc-model-name">Model: ${o.model}</div>`:""}`,s.addEventListener("click",async()=>{s.classList.add("loading");const c=s.innerHTML;if(s.innerHTML=`${c} <div style="color: #888; font-size: 10px; margin-top: 2px;">Loading...</div>`,!(o!=null&&o.model)){s.classList.remove("loading"),s.innerHTML=`${c} <div style="color: #ffcc00; font-size: 10px; margin-top: 2px;">No model defined</div>`,setTimeout(()=>{s.innerHTML=c},3e3),this.updateExportButtonState();return}try{const h=o.model;let f=null,g=[];const m=async v=>{g.push(v);for(const[M]of this.loader.availableFiles.entries()){const S=M.split("/");if(S[S.length-1]===v)return M}return null};let p=h;const x=Object.keys(ys);for(const v of x)if(h.endsWith(v)){p=h.substring(0,h.length-v.length);break}if(f=await m(h),!f){const v=p+"_8";(h!==v||p===h)&&(g.includes(v)||(f=await m(v)))}if(!f)for(const v of Yo){const M=p+v;if(!g.includes(M)&&(f=await m(M),f))break}if(!f){let v=`No suitable model variant found for location base '${h}'`;throw p!==h&&(v+=` (derived base: '${p}')`),new Error(`${v}. Tried: ${[...new Set(g)].join(", ")}.`)}const d=(await this.loader.loadModel(f)).clone();if(o.recols)for(const v in o.recols){const[M,S]=o.recols[v];d.recolor(M,S)}if(o.retexs)for(const v in o.retexs){const[M,S]=o.retexs[v];if(M&&S){const T=this.loader.getTextureIdByName(M),b=this.loader.getTextureIdByName(S);T&&b&&d.recolor(T,b)}}(o.resizex!==128||o.resizey!==128||o.resizez!==128)&&d.scale(o.resizex,o.resizey,o.resizez),d.processTextureCoordinates(),d.createLabelReferences(),d.calculateNormals(o.ambient+64,o.contrast*5+768,-50,-10,-50,!o.sharelight),d.saveCurrentVerticesAsOriginal();const y=`loc_${r}_${f.replace(/\//g,"_")}`;this.viewer.getRenderer().addModel(y,d),document.querySelectorAll(".model-item").forEach(v=>v.classList.remove("selected","loading")),s.classList.add("selected"),s.innerHTML=c,this.viewer.getRenderer().showModel(y),this.updateFaceLabelUI(y),this.updateVertexLabelUI(y),this.handleClearSequence(),this.updateAnimationButtonStates(),this.updateExportButtonState()}catch(h){console.error(`Error loading location ${r}:`,h),s.classList.remove("loading"),s.innerHTML=`${c} <div style="color: #ff6666; font-size: 10px; margin-top: 2px;">Error: ${h.message.substring(0,30)}...</div>`,s.classList.add("error"),setTimeout(()=>{s.classList.remove("error"),s.innerHTML=c},5e3),this.updateExportButtonState()}}),e.appendChild(s)}}this.filterModelList(),this.updateAnimationButtonStates(),this.updateExportButtonState()}updateExportFrameButtonState(){const e=document.getElementById("export-frame-btn");e&&(e.disabled=!this.currentSelectedAnimFrameInstance||this.currentSelectedAnimFrameInstance.id===void 0)}buildRemappedFaceArray(e,t){const n=new Int32Array(e.faceCount).fill(0);return e.labelFaces&&e.labelFaces.forEach((i,r)=>{if(!i)return;const o=t[r]??r;for(let s=0;s<i.length;s++)n[i[s]]=o}),n}buildRemappedVertexArray(e,t){const n=new Int32Array(e.vertexCount).fill(0);return e.labelVertices&&e.labelVertices.forEach((i,r)=>{if(!i)return;const o=t[r]??r;for(let s=0;s<i.length;s++)n[i[s]]=o}),n}applyCustomFaceLabels(e){const t={};document.querySelectorAll("#label-list .label-item").forEach(i=>{var h;const r=(h=i.querySelector("span"))==null?void 0:h.textContent,o=i.querySelector("input");if(!r||!o)return;const s=r.match(/Label\s+(\d+)/);if(!s)return;const l=parseInt(s[1]),c=parseInt(o.value);!isNaN(c)&&c!==l&&(t[l]=c)}),e.faceLabelForExport=this.buildRemappedFaceArray(e,t),e.hadOriginalFaceLabels=!0}applyCustomVertexLabels(e){const t={};document.querySelectorAll("#vertex-label-list .label-item").forEach(i=>{var h;const r=(h=i.querySelector("span"))==null?void 0:h.textContent,o=i.querySelector("input");if(!r||!o)return;const s=r.match(/Label\s+(\d+)/);if(!s)return;const l=parseInt(s[1]),c=parseInt(o.value);!isNaN(c)&&c!==l&&(t[l]=c)}),e.vertexLabelForExport=this.buildRemappedVertexArray(e,t),e.hadOriginalVertexLabels=!0}async handleExportAnimFrame(){if(!this.currentSelectedAnimFrameInstance||this.currentSelectedAnimFrameInstance.id===void 0){alert("No animation frame selected to export, or the selected frame is invalid."),this.updateExportFrameButtonState();return}const e=this.currentSelectedAnimFrameInstance;try{const t=e.exportToFrame();if(!t){console.error(`AnimFrame ${e.id}: exportToFrame() returned null. This might happen if animFrame.base is missing or other critical data is unavailable.`),alert(`Failed to export frame ${e.id}: Frame data could not be generated. Check console for details.`),this.updateExportFrameButtonState();return}const n=new Blob([t],{type:"application/octet-stream"}),i=document.createElement("a");i.href=URL.createObjectURL(n);let r;if(e.originalFileName)r=e.originalFileName;else if(e.originalPath){const s=e.originalPath.split("/");r=s[s.length-1]}else r=`animframe_${e.id}.frame`;i.download=r,document.body.appendChild(i),i.click(),document.body.removeChild(i),URL.revokeObjectURL(i.href);const o=document.getElementById("status");o&&(o.textContent=`Frame "${r}" exported successfully.`,setTimeout(()=>{var l;const s=((l=this.loader.getAvailableModels())==null?void 0:l.length)||0;o.textContent=`Found ${s} .ob2 files`},3e3))}catch(t){console.error(`Error exporting AnimFrame ${e.id}:`,t),alert(`Failed to export frame ${e.id}: ${t.message}`)}this.updateExportFrameButtonState()}async handleExportModel(){var o,s;const e=this.viewer.getRenderer(),t=e.selectedModel;if(!this.viewer||!t){alert("No model selected to export."),this.updateExportButtonState();return}const n=e.modelMeshes.get(t);if(!n){alert("Selected model data not found."),this.updateExportButtonState();return}const i=Array.isArray(n)?n:[n];let r=null;for(const l of i)if(l&&l.userData&&l.userData.originalModel){r=l.userData.originalModel;break}if(!r){alert("Selected model instance not found."),this.updateExportButtonState();return}(o=this.changeFaceLabels)!=null&&o.checked&&r&&this.applyCustomFaceLabels(r),(s=this.changeVertexLabels)!=null&&s.checked&&r&&this.applyCustomVertexLabels(r);try{if(r.saveCurrentVerticesAsOriginal(),r.partMapping&&r.partMapping.isNpcModel){const l=r.exportNpcParts();if(l&&l.size>0){let c=0;for(const[f,g]of l){const p=`${r.partMapping.parts[f].originalModelName}.ob2`,x=new Blob([g],{type:"application/octet-stream"}),u=document.createElement("a");u.href=URL.createObjectURL(x),u.download=p,document.body.appendChild(u),u.click(),document.body.removeChild(u),URL.revokeObjectURL(u.href),c++}const h=document.getElementById("status");if(h){const f=document.querySelector("#model-list .model-item.selected");let g="NPC";if(f&&f.classList.contains("npc-item")){const m=f.querySelector(".npc-id");m&&(g=`NPC ${m.textContent}`)}h.textContent=`${g} exported as ${c} parts with original names.`,setTimeout(()=>{var p;const m=((p=this.loader.getAvailableModels())==null?void 0:p.length)||0;h.textContent=`Found ${m} .ob2 files`},3e3)}}else throw new Error("Failed to export NPC parts - no part data available")}else{const l=r.exportToOb2(),c=new Blob([l],{type:"application/octet-stream"}),h=document.createElement("a");h.href=URL.createObjectURL(c);let f="exported_model.ob2";const g=document.querySelector("#model-list .model-item.selected");if(g){if(g.classList.contains("obj-item")){const p=g.querySelector(".obj-model-name");p&&p.textContent&&(f=`${p.textContent.replace("Model: ","")}.ob2`)}else if(g.classList.contains("loc-item")){const p=g.querySelector(".loc-model-name");p&&p.textContent&&(f=`${p.textContent.replace("Model: ","")}.ob2`)}else if(t){const p=this.loader.availableFiles.get(t);p&&p.name?f=p.name:f=`${t.split("/").pop()||"exported_model"}.ob2`}}h.download=f,document.body.appendChild(h),h.click(),document.body.removeChild(h),URL.revokeObjectURL(h.href);const m=document.getElementById("status");m&&(m.textContent=`Model "${f}" exported.`,setTimeout(()=>{var x;const p=((x=this.loader.getAvailableModels())==null?void 0:x.length)||0;m.textContent=`Found ${p} .ob2 files`},3e3))}}catch(l){console.error("Error exporting model:",l),alert("Failed to export model: "+l.message)}this.updateExportButtonState()}updateAnimationButtonStates(){const e=document.getElementById("start-seq"),t=document.getElementById("clear-seq"),n=this.viewer.getRenderer(),i=n.selectedModel;let r=!1;if(i){const c=n.modelMeshes.get(i);if(c){const h=Array.isArray(c)?c:[c];r=h.length>0&&h[0]&&h[0].userData&&h[0].userData.originalModel}}const o=document.querySelector("#seq-list .label-item.selected"),s=r&&o&&!this.currentAnimation.timerId,l=!!this.currentAnimation.timerId;e&&(e.disabled=!s),t&&(t.disabled=!l),this.loopSequenceCheckbox&&(this.loopSequenceCheckbox.disabled=!r||!o)}handleStartSequence(){this.currentAnimation.timerId&&this.handleClearSequence();const e=this.viewer.getRenderer(),t=e.selectedModel;if(!t){this.updateAnimationButtonStates();return}const n=e.modelMeshes.get(t);if(!n){this.updateAnimationButtonStates();return}const i=Array.isArray(n)?n:[n];let r=null;for(const c of i)if(c&&c.userData&&c.userData.originalModel){r=c.userData.originalModel;break}if(!r){this.updateAnimationButtonStates();return}const o=document.querySelector("#seq-list .label-item.selected");if(!o){this.updateAnimationButtonStates();return}const s=o.textContent,l=this.loader.getSeqData(s);if(!l||!l.frameIds||l.frameIds.length===0){this.updateAnimationButtonStates();return}this.currentAnimation.modelRef=r,this.currentAnimation.seqId=s,this.currentAnimation.seqData=l,this.currentAnimation.frameIndex=0,this.animateNextFrame(),this.updateAnimationButtonStates()}animateNextFrame(){if(!this.currentAnimation.modelRef||!this.currentAnimation.seqData){this.handleClearSequence();return}const e=this.currentAnimation.modelRef,t=this.currentAnimation.seqData;let n=this.currentAnimation.frameIndex;const i=t.frameIds||[],r=i.length;if(r===0){this.handleClearSequence();return}if(n>=r){const h=this.loopSequenceCheckbox;if(h&&h.checked)n=0;else if(t.replayoff!==void 0&&t.replayoff!==-1&&n>=t.replayoff){this.handleClearSequence();return}else if(t.replayoff===void 0||t.replayoff===-1){if(t.replayoff!==-1){this.handleClearSequence();return}n=0}else n=0}const o=i[n];let s=-1;if(o!=null){const h=String(o).split("_"),f=h.length>1?h[h.length-1]:h[0];s=parseInt(f,10),isNaN(s)&&(s=-1)}if(s!==-1){e.resetToOriginal(),e.applyTransform(s),this.viewer.getRenderer().updateMeshGeometry();const h=this.viewer.getRenderer().selectedModel;h&&this.viewer.getRenderer().updateVertexVisuals(h)}this.currentAnimation.frameIndex=n+1;let l=2;const c=t.delayValues||[];if(c[n]!==void 0)if(c[n]===0)if(s!==-1&&Ke.instances&&Ke.instances[s]){const h=Ke.instances[s];h&&h.frameDelay>0?l=h.frameDelay:l=1}else l=1;else l=c[n];else if(s!==-1&&Ke.instances&&Ke.instances[s]){const h=Ke.instances[s];h&&h.frameDelay>0?l=h.frameDelay:h&&h.frameDelay===0&&(l=1)}this.currentAnimation.timerId=setTimeout(()=>this.animateNextFrame(),l*20)}handleClearSequence(){if(this.currentAnimation.timerId&&clearTimeout(this.currentAnimation.timerId),this.currentAnimation.modelRef){this.currentAnimation.modelRef.resetToOriginal(),this.viewer.getRenderer().updateMeshGeometry();const e=this.viewer.getRenderer().selectedModel;e&&this.viewer.getRenderer().updateVertexVisuals(e)}this.currentAnimation={modelRef:null,seqId:null,seqData:null,frameIndex:0,timerId:null},document.querySelectorAll("#seq-list .label-item.selected").forEach(e=>e.classList.remove("selected")),this.updateAnimFrameListUI(null),this.updateAnimationButtonStates()}updateSeqListUI(){const e=document.getElementById("seq-list");e.innerHTML="",this.loader.getAllSeqs().forEach(n=>{const i=document.createElement("div");i.className="label-item",i.textContent=n,i.addEventListener("click",()=>{if(this.currentAnimation.timerId&&clearTimeout(this.currentAnimation.timerId),this.currentAnimation.modelRef&&this.currentAnimation.timerId){this.currentAnimation.modelRef.resetToOriginal(),this.viewer.getRenderer().updateMeshGeometry();const r=this.viewer.getRenderer().selectedModel;r&&this.viewer.getRenderer().updateVertexVisuals(r)}this.currentAnimation={modelRef:null,seqId:null,seqData:null,frameIndex:0,timerId:null},document.querySelectorAll("#seq-list .label-item").forEach(r=>r.classList.remove("selected")),i.classList.add("selected"),this.updateAnimFrameListUI(n),this.updateAnimationButtonStates()}),e.appendChild(i)}),this.filterSeqList(),this.updateAnimationButtonStates()}updateAnimFrameListUI(e){const t=document.getElementById("animframe-list");if(t.innerHTML="",this.currentSelectedAnimFrameInstance=null,this.clearTransformEditor(),this.updateAnimFrameDetailsUI(null),!e){t.innerHTML='<div class="label-item no-labels"><span style="color: #888; font-style: italic;">Select a SEQ to view frames</span></div>',document.getElementById("clear-frames").disabled=!0,document.getElementById("export-frame-btn").disabled=!0;return}const n=this.loader.getSeqData(e);if(!n||!n.frameIds&&!n.iframeIds){t.innerHTML=`<div class="label-item no-labels"><span style="color: #888; font-style: italic;">No frame data for ${e}</span></div>`;return}const i=n.frameIds||[],r=n.iframeIds||[],o=n.delayValues||[],s=Math.max(i.length,r.length,o.length);if(s===0){t.innerHTML=`<div class="label-item no-labels"><span style="color: #888; font-style: italic;">SEQ ${e} has no frames defined</span></div>`;return}document.getElementById("clear-frames").disabled=!1,document.getElementById("export-frame-btn").disabled=!0;for(let l=0;l<s;l++){const c=i[l],h=r[l],f=o[l],g=(m,p)=>{if(m!=null){const x=document.createElement("div");x.className="label-item";let u=`${l+1}: ${m}`;f!==void 0&&p==="Frame"?u+=` (Delay: ${f})`:f!==void 0&&p==="iFrame"&&!c&&(u+=` (Delay: ${f})`),x.textContent=u;let d=null,y=null;try{const v=String(m).split("_"),M=v.length>1?v[v.length-1]:v[0];y=parseInt(M,10),!isNaN(y)&&Ke.instances&&Ke.instances[y]&&(d=Ke.instances[y],d.id===void 0&&(d.id=y))}catch(v){console.warn(`Could not parse or find AnimFrame for: ${m}`,v)}d?x.addEventListener("click",()=>{const v=x;document.querySelectorAll("#animframe-list .label-item").forEach(M=>M.classList.remove("selected")),v.classList.add("selected"),this.currentSelectedAnimFrameInstance=d,this.updateAnimFrameDetailsUI(d),d&&d.id!==void 0&&(this.displaySingleAnimFrame(d.id),document.querySelectorAll("#animframe-list .label-item").forEach(M=>M.classList.remove("selected")),v.classList.add("selected"))}):(x.style.cursor="not-allowed",x.title="Animation frame data not found"),t.appendChild(x)}};if(g(c,"Frame"),g(h,"iFrame"),c==null&&h==null&&f!==void 0){const m=document.createElement("div");m.className="label-item",m.innerHTML=`Step ${l+1}: (Empty) (Delay: ${f})`,t.appendChild(m)}}t.children.length===0&&(t.innerHTML=`<div class="label-item no-labels"><span style="color: #888; font-style: italic;">No displayable frames in ${e}</span></div>`,document.getElementById("clear-frames").disabled=!0,document.getElementById("export-frame-btn").disabled=!0)}displaySingleAnimFrame(e){if(e===-1||isNaN(e)){console.warn("Invalid frame ID provided for single frame display."),this.updateAnimationButtonStates();return}this.currentAnimation.timerId&&clearTimeout(this.currentAnimation.timerId),this.currentAnimation={modelRef:this.currentAnimation.modelRef,seqId:null,seqData:null,frameIndex:0,timerId:null};const t=this.viewer.getRenderer(),n=t.selectedModel;if(!n){this.updateAnimationButtonStates();return}const i=t.modelMeshes.get(n);if(!i){this.updateAnimationButtonStates();return}const r=Array.isArray(i)?i:[i];let o=null;for(const s of r)if(s&&s.userData&&s.userData.originalModel){o=s.userData.originalModel;break}if(!o){this.updateAnimationButtonStates();return}this.currentAnimation.modelRef=o,o.resetToOriginal(),o.applyTransform(e),t.updateMeshGeometry(),t.updateVertexVisuals(n),this.updateAnimationButtonStates()}handleTransformOperationClick(e,t){const n=this.viewer.getRenderer(),i=n.selectedModel;if(!i)return;const r=n.modelMeshes.get(i);if(!r)return;const o=Array.isArray(r)?r:[r];let s=null;for(const g of o)if(g&&g.userData&&g.userData.originalModel){s=g.userData.originalModel;break}if(!s)return;const l=e.base;if(!l||!e.bases||!l.animLabels||!l.animTypes||t>=e.bases.length){console.warn("Cannot highlight: AnimFrame or AnimBase data incomplete or index out of bounds."),n.clearSpecificVertexHighlights(),n.clearSpecificFaceHighlights();return}const c=e.bases[t];if(c===void 0||c>=l.animTypes.length||c>=l.animLabels.length){console.warn(`Invalid baseGroupIndex (${c}) for transform. AnimBase might not have this group defined.`),n.clearSpecificVertexHighlights(),n.clearSpecificFaceHighlights();return}const h=l.animTypes[c],f=l.animLabels[c];if(n.clearSpecificVertexHighlights(),n.clearSpecificFaceHighlights(),!(!f||f.length===0))if(h===5){const g=new Set;if(s.labelFaces)for(let m=0;m<f.length;m++){const p=f[m];if(s.labelFaces[p]){const x=s.labelFaces[p];for(let u=0;u<x.length;u++)g.add(x[u])}}g.size>0&&n.highlightSpecificFaces(Array.from(g))}else{const g=new Set;if(s.labelVertices)for(let m=0;m<f.length;m++){const p=f[m];if(s.labelVertices[p]){const x=s.labelVertices[p];for(let u=0;u<x.length;u++)g.add(x[u])}}g.size>0&&n.highlightSpecificVertices(Array.from(g))}}updateAnimFrameDetailsUI(e){const t=document.getElementById("animframe-details-content"),n=document.getElementById("clear-details"),i=document.getElementById("add-new-transform-btn"),r=this.viewer.getRenderer();if(r&&(r.clearSpecificVertexHighlights(),r.clearSpecificFaceHighlights()),this.clearTransformEditor(),this.updateExportFrameButtonState(),e&&e.base&&e.base.animTypes&&e.base.animLabels?i&&(i.disabled=!1):(i&&(i.disabled=!0),this.hideNewTransformForm()),!e){t.innerHTML='<div class="label-item no-labels"><span style="color: #888; font-style: italic;">Select an animation frame or frame data missing.</span></div>',n&&(n.disabled=!0);return}n&&(n.disabled=!1);let o=`<div class="detail-item"><span class="detail-label">Frame ID:</span> ${e.id!==void 0?e.id:"N/A"}</div>`;o+=`<div class="detail-item"><span class="detail-label">Frame Delay:</span> ${e.frameDelay} ticks</div>`;const s=e.base;s?o+=`<div class="detail-item"><span class="detail-label">Base Anim Groups:</span> ${s.animLength}</div>`:o+='<div class="detail-item"><span class="detail-label">Base Info:</span> AnimBase object not found on this frame.</div>';const l=e.frameLength;if(o+=`<div class="detail-item"><span class="detail-label">Transforms in this Frame:</span> ${l}</div>`,l>0&&s&&e.bases&&e.x&&e.y&&e.z&&s.animTypes&&s.animLabels){o+='<div class="detail-item" style="margin-top: 8px;"><span class="detail-label">Frame Transforms List:</span></div>';for(let c=0;c<l;c++){if(c>=e.bases.length||c>=e.x.length||c>=e.y.length||c>=e.z.length){console.warn(`Data inconsistency in AnimFrame ${e.id} at transform index ${c}. frameLength: ${l}, but array lengths differ.`);continue}const h=e.bases[c];if(h===void 0||h>=s.animTypes.length||h>=s.animLabels.length){console.warn(`Invalid baseIndexForThisTransform (${h}) in AnimFrame ${e.id} at transform index ${c}. Max base group index: ${s.animTypes.length-1}`),o+=`<div class="transform-group" data-transform-index="${c}" style="padding: 6px; margin-bottom: 6px; border: 1px solid #cc0000; border-radius: 4px; background-color: #4a2a2a;">`,o+=`<div style="font-weight: bold; color: #ffaaaa;">${c+1}: Error - Invalid Base Group Index ${h}</div>`,o+="</div>";continue}const f=s.animTypes[h],g=this.getTransformTypeName(f),m=e.x[c],p=e.y[c],x=e.z[c];o+=`<div class="transform-group" data-transform-index="${c}"
                             style="cursor: pointer; padding: 6px; margin-bottom: 6px; border: 1px solid #444; border-radius: 4px; background-color: #2a2a2a;">`,o+=`<div style="font-weight: bold;">${c+1} (targets Base Group ${h}): ${g}</div>`,o+=`<div>Values: (X: ${m}, Y: ${p}, Z: ${x})</div>`;const u=s.animLabels[h];if(u&&u.length>0){o+=`<div>Affects Model ${f===5?"Face":"Vertex"} Labels: <ul>`;for(let d=0;d<u.length;d++)o+=`<li>Label ${u[d]}</li>`;o+="</ul></div>"}else o+=`<div>Affects Model ${f===5?"Face":"Vertex"} Labels: None specified for Base Group ${h}</div>`;o+="</div>"}}else l>0&&(o+='<div class="detail-item"><span class="detail-label">Transforms:</span> (Data for individual transforms might be incomplete or AnimBase info missing)</div>');t.innerHTML=o,t.querySelectorAll(".transform-group").forEach(c=>{c.addEventListener("click",h=>{const f=h.currentTarget;if(f.style.borderColor==="rgb(204, 0, 0)"){console.warn("Clicked on an error-state transform group. Editor not shown.");return}t.querySelectorAll(".transform-group").forEach(m=>m.style.backgroundColor="#2a2a2a"),f.style.backgroundColor="#0055A4";const g=parseInt(f.dataset.transformIndex,10);if(!isNaN(g)){const m=this.viewer.getRenderer();m&&(m.clearSpecificVertexHighlights(),m.clearSpecificFaceHighlights()),this.handleTransformOperationClick(e,g),this.showTransformEditor(e,g,f);const p=document.getElementById("delete-transform-btn");p.disabled=!1,n.disabled=!1}})})}showNewTransformForm(){const e=document.getElementById("new-transform-form-container");if(!this.currentSelectedAnimFrameInstance||!this.currentSelectedAnimFrameInstance.base){console.warn("Cannot show new Transform form: No valid AnimFrame or AnimBase selected."),this.hideNewTransformForm();return}const n=this.currentSelectedAnimFrameInstance.base;if(e.innerHTML=`
            <h4>Add New Transform</h4>
            <div>
                <label for="new-transform-base-group-select">Target AnimBase Group:</label>
                <select id="new-transform-base-group-select"></select>
                <div id="affected-labels-info" style="font-size: 10px; color: #aaa; margin-top: 4px;">Select a base group to see affected model labels.</div>
            </div>
            <div>
                <label for="new-transform-x">X Value:</label>
                <input type="number" id="new-transform-x" value="0">
            </div>
            <div>
                <label for="new-transform-y">Y Value:</label>
                <input type="number" id="new-transform-y" value="0">
            </div>
            <div>
                <label for="new-transform-z">Z Value:</label>
                <input type="number" id="new-transform-z" value="0">
            </div>
            <div class="form-action-buttons" style="margin-top: 10px;">
                <button id="cancel-add-transform-btn" class="label-control-btn">Cancel</button>
                <button id="confirm-add-transform-btn" class="label-control-btn active" style="background-color: #0066cc; margin-left: 5px;">Confirm Add</button>
            </div>
        `,this.activeNewTransformForm.baseGroupSelect=document.getElementById("new-transform-base-group-select"),this.activeNewTransformForm.xInput=document.getElementById("new-transform-x"),this.activeNewTransformForm.yInput=document.getElementById("new-transform-y"),this.activeNewTransformForm.zInput=document.getElementById("new-transform-z"),this.activeNewTransformForm.affectedInfoDiv=document.getElementById("affected-labels-info"),n.animLength>0&&n.animTypes&&this.activeNewTransformForm.baseGroupSelect)for(let i=0;i<n.animLength;i++){const r=document.createElement("option");r.value=i.toString(),r.textContent=`Group ${i}: ${this.getTransformTypeName(n.animTypes[i])}`,this.activeNewTransformForm.baseGroupSelect.appendChild(r)}else this.activeNewTransformForm.affectedInfoDiv&&(this.activeNewTransformForm.affectedInfoDiv.textContent="AnimBase has no defined groups.");this.activeNewTransformForm.baseGroupSelect&&(this.activeNewTransformForm.baseGroupSelect.addEventListener("change",i=>{const r=parseInt(i.target.value,10);this.updateAffectedLabelsInfo(n,r),this.highlightAffectedModelParts(n,r);const o=n.animTypes[r];this.activeNewTransformForm.xInput&&this.activeNewTransformForm.yInput&&this.activeNewTransformForm.zInput&&(o===3?(this.activeNewTransformForm.xInput.value="128",this.activeNewTransformForm.yInput.value="128",this.activeNewTransformForm.zInput.value="128"):(this.activeNewTransformForm.xInput.value="0",this.activeNewTransformForm.yInput.value="0",this.activeNewTransformForm.zInput.value="0"))}),this.activeNewTransformForm.baseGroupSelect.options.length>0&&this.activeNewTransformForm.baseGroupSelect.dispatchEvent(new Event("change"))),document.getElementById("confirm-add-transform-btn").addEventListener("click",()=>this.handleConfirmAddNewTransform()),document.getElementById("cancel-add-transform-btn").addEventListener("click",()=>this.hideNewTransformForm()),e.style.display="block"}hideNewTransformForm(){const e=document.getElementById("new-transform-form-container");e.style.display="none",e.innerHTML="";const t=this.viewer.getRenderer();t&&(t.clearSpecificVertexHighlights(),t.clearSpecificFaceHighlights()),this.activeNewTransformForm={baseGroupSelect:null,xInput:null,yInput:null,zInput:null,affectedInfoDiv:null}}handleDeleteSelectedTransform(){if(!this.activeTransformEditor||!this.activeTransformEditor.animFrame||this.activeTransformEditor.transformIndex===-1){console.warn("No transform selected for deletion, or editor not active."),alert("No transform is currently selected for deletion.");return}const e=this.activeTransformEditor.animFrame,t=this.activeTransformEditor.transformIndex;if(!confirm(`Are you sure you want to delete Transform ${t+1} (from list) from frame ${e.id}?`))return;if(e.deleteTransform(t))if(this.clearTransformEditor(),this.updateAnimFrameDetailsUI(e),e.id!==void 0)this.displaySingleAnimFrame(e.id);else{console.warn("AnimFrame ID is undefined, cannot refresh 3D model view after deletion. Resetting model.");const i=this.viewer.getRenderer(),r=i.selectedModel;if(r){const o=i.modelMeshes.get(r);if(o){const s=Array.isArray(o)?o:[o];s[0]&&s[0].userData.originalModel&&(s[0].userData.originalModel.resetToOriginal(),i.updateMeshGeometry(),i.updateVertexVisuals(r))}}}else alert(`Failed to delete transform ${t+1}. Check console for errors or data inconsistencies.`)}updateAffectedLabelsInfo(e,t){if(!e||!e.animLabels||!e.animTypes||!this.activeNewTransformForm.affectedInfoDiv||t>=e.animLabels.length||t>=e.animTypes.length)return;const n=e.animLabels[t];let r=`Affects Model ${e.animTypes[t]===5?"Face":"Vertex"} Label(s): `;n&&n.length>0?r+=Array.from(n).join(", "):r+=`None specified for Base Group ${t}.`,this.activeNewTransformForm.affectedInfoDiv.textContent=r}highlightAffectedModelParts(e,t){const n=this.viewer.getRenderer(),i=n.selectedModel;if(!i)return;const r=n.modelMeshes.get(i);if(!r)return;const o=Array.isArray(r)?r:[r];let s=null;for(const h of o)if(h&&h.userData&&h.userData.originalModel){s=h.userData.originalModel;break}if(!s)return;if(!e||!e.animLabels||!e.animTypes||t>=e.animLabels.length||t>=e.animTypes.length){console.warn("Cannot highlight: AnimBase data incomplete or index out of bounds for highlighting."),n.clearSpecificVertexHighlights(),n.clearSpecificFaceHighlights();return}const l=e.animTypes[t],c=e.animLabels[t];if(n.clearSpecificVertexHighlights(),n.clearSpecificFaceHighlights(),!(!c||c.length===0))if(l===5){const h=new Set;if(s.labelFaces)for(let f=0;f<c.length;f++){const g=c[f];if(s.labelFaces[g]){const m=s.labelFaces[g];for(let p=0;p<m.length;p++)h.add(m[p])}}h.size>0&&n.highlightSpecificFaces(Array.from(h))}else{const h=new Set;if(s.labelVertices)for(let f=0;f<c.length;f++){const g=c[f];if(s.labelVertices[g]){const m=s.labelVertices[g];for(let p=0;p<m.length;p++)h.add(m[p])}}h.size>0&&n.highlightSpecificVertices(Array.from(h))}}handleConfirmAddNewTransform(){if(!this.currentSelectedAnimFrameInstance||!this.activeNewTransformForm.baseGroupSelect||!this.activeNewTransformForm.xInput||!this.activeNewTransformForm.yInput||!this.activeNewTransformForm.zInput){console.error("Cannot add Transform: Form or AnimFrame not ready.");return}const e=this.currentSelectedAnimFrameInstance,t=parseInt(this.activeNewTransformForm.baseGroupSelect.value,10),n=parseInt(this.activeNewTransformForm.xInput.value,10),i=parseInt(this.activeNewTransformForm.yInput.value,10),r=parseInt(this.activeNewTransformForm.zInput.value,10);if(isNaN(t)||isNaN(n)||isNaN(i)||isNaN(r)){alert("Invalid input values for the new Transform. Ensure all are numbers.");return}e.addTransform(t,n,i,r),this.hideNewTransformForm(),this.updateAnimFrameDetailsUI(e),e.id!==void 0&&this.displaySingleAnimFrame(e.id)}updateFaceLabelUI(e){const t=document.getElementById("label-list");t.innerHTML="";const n=this.viewer.getRenderer().getModelFaceLabels(e),i=document.getElementById("clear-labels"),r=!!e;if(i&&(i.disabled=!r),!n||n.length===0){t.innerHTML='<div class="label-item no-labels"><span style="color: #888; font-style: italic;">No face labels available</span></div>';return}n.forEach(o=>{var f;const s=document.createElement("div");s.className="label-item";const l=document.createElement("span");l.textContent=`Label ${o.id}`;const c=document.createElement("input");c.type="text",c.value=o.id.toString(),c.className="label-edit-input",c.style.marginLeft="8px",c.style.width="40px",c.disabled=!((f=this.changeFaceLabels)!=null&&f.checked);const h=document.createElement("span");h.className="label-count",h.textContent=`${o.faceCount} faces`,s.appendChild(l),s.appendChild(c),s.appendChild(h),s.addEventListener("click",()=>{document.querySelectorAll("#label-list .label-item").forEach(g=>g.classList.remove("selected","highlighted-face")),s.classList.add("highlighted-face"),this.viewer.getRenderer().highlightFaceLabel(o.id)}),t.appendChild(s)})}updateVertexLabelUI(e){const t=document.getElementById("vertex-label-list");t.innerHTML="";const n=this.viewer.getRenderer().getModelVertexLabels(e);if(!n||n.length===0){t.innerHTML='<div class="label-item no-labels"><span style="color: #888; font-style: italic;">No vertex labels available</span></div>',this.updateVertexLabelUIState();return}this.updateVertexLabelUIState(),n.forEach(i=>{var c;const r=document.createElement("div");r.className="label-item";const o=document.createElement("span");o.textContent=`Label ${i.id}`;const s=document.createElement("input");s.type="text",s.value=i.id.toString(),s.className="label-edit-input",s.style.marginLeft="8px",s.style.width="40px",s.disabled=!((c=this.changeVertexLabels)!=null&&c.checked);const l=document.createElement("span");l.className="label-count",l.textContent=`${i.vertexCount} vertices`,r.appendChild(o),r.appendChild(s),r.appendChild(l),r.addEventListener("click",()=>{if(!this.viewer.getRenderer().editMode){alert("Enable Vertex Editing mode to highlight vertex labels.");return}document.querySelectorAll("#vertex-label-list .label-item").forEach(h=>h.classList.remove("selected","highlighted-vertex")),r.classList.add("highlighted-vertex"),this.viewer.getRenderer().highlightVertexLabel(i.id)}),t.appendChild(r)})}updateVertexLabelUIState(){const e=document.getElementById("clear-vertex-labels"),t=!!this.viewer.getRenderer().selectedModel,n=this.viewer.getRenderer().editMode;e.disabled=!t||!n}setupFaceLabelUI(){const e=document.getElementById("clear-labels");e.addEventListener("click",()=>{e.disabled||(this.viewer.getRenderer().clearFaceHighlights(),document.querySelectorAll("#label-list .label-item").forEach(t=>t.classList.remove("selected","highlighted-face")),document.querySelectorAll("#label-panel .label-control-btn").forEach(t=>t.classList.remove("active")))})}setupVertexLabelUI(){const e=document.getElementById("clear-vertex-labels"),t=document.getElementById("convert-vertex-labels"),n=document.getElementById("model-relabel-input");e.addEventListener("click",()=>{e.disabled||(this.viewer.getRenderer().clearVertexHighlights(),document.querySelectorAll("#vertex-label-list .label-item").forEach(i=>i.classList.remove("selected","highlighted-vertex")))}),t==null||t.addEventListener("click",()=>n.click()),n==null||n.addEventListener("change",async()=>{var o;const i=(o=n.files)==null?void 0:o[0];if(!i)return;const r=await this.showConversionOptionsModal();if(!r){n.value="";return}try{const{from:s,to:l}=Jt.parseRevisionDir(r.revisionDir),c=await i.arrayBuffer(),h=new ce(new Uint8Array(c)),f=pi.convertFromData(h);f.createLabelReferences(),Jt.applyModelRelabel(f,s,l),console.log(`Relabeled ${i.name} (${s} → ${l})`);const g=f.exportToOb2(),m=new Blob([g],{type:"application/octet-stream"}),p=document.createElement("a");p.href=URL.createObjectURL(m),p.download=i.name,document.body.appendChild(p),p.click(),document.body.removeChild(p),URL.revokeObjectURL(p.href),alert("Model labels converted and downloaded successfully.")}catch(s){console.error("Model conversion failed:",s),alert("Error: "+s.message)}finally{n.value=""}})}}new Mp;
