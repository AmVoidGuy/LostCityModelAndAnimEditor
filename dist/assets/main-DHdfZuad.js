var Us=s=>{throw TypeError(s)};var Ns=(s,e,t)=>e.has(s)||Us("Cannot "+t);var We=(s,e,t)=>(Ns(s,e,"read from private field"),t?t.call(s):e.get(s)),Os=(s,e,t)=>e.has(s)?Us("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(s):e.set(s,t),Bs=(s,e,t,n)=>(Ns(s,e,"write to private field"),n?n.call(s,t):e.set(s,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();var ke;const Nt=class Nt{constructor(e){Os(this,ke);this.data=e,Bs(this,ke,new DataView(e.buffer,e.byteOffset,e.byteLength)),this.pos=0,this.bitPos=0}get available(){return this.data.length-this.pos}get length(){return this.data.length}p1(e){We(this,ke).setUint8(this.pos++,e)}p2(e){We(this,ke).setUint16(this.pos,e),this.pos+=2}ip2(e){We(this,ke).setUint16(this.pos,e,!0),this.pos+=2}p3(e){We(this,ke).setUint8(this.pos++,e>>16),We(this,ke).setUint16(this.pos,e),this.pos+=2}p4(e){We(this,ke).setInt32(this.pos,e),this.pos+=4}ip4(e){We(this,ke).setInt32(this.pos,e,!0),this.pos+=4}p8(e){We(this,ke).setBigInt64(this.pos,e),this.pos+=8}pbool(e){this.p1(e?1:0)}pjstr(e,t=10){const n=e.length;for(let i=0;i<n;i++)We(this,ke).setUint8(this.pos++,e.charCodeAt(i));We(this,ke).setUint8(this.pos++,t)}pdata(e,t,n){this.data.set(e.subarray(t,t+n),this.pos),this.pos+=n-t}psize4(e){We(this,ke).setUint32(this.pos-e-4,e)}psize2(e){We(this,ke).setUint16(this.pos-e-2,e)}psize1(e){We(this,ke).setUint8(this.pos-e-1,e)}psmarts(e){if(e<64&&e>=-64)this.p1(e+64);else if(e<16384&&e>=-16384)this.p2(e+49152);else throw new Error("Error psmarts out of range: "+e)}psmart(e){if(e>=0&&e<128)this.p1(e);else if(e>=0&&e<32768)this.p2(e+32768);else throw new Error("Error psmart out of range: "+e)}g1(){return We(this,ke).getUint8(this.pos++)}g1b(){return We(this,ke).getInt8(this.pos++)}g2(){return this.pos+=2,We(this,ke).getUint16(this.pos-2)}g2s(){return this.pos+=2,We(this,ke).getInt16(this.pos-2)}ig2(){return this.pos+=2,We(this,ke).getUint16(this.pos-2,!0)}g3(){const e=We(this,ke).getUint8(this.pos++)<<16|We(this,ke).getUint16(this.pos);return this.pos+=2,e}g4(){return this.pos+=4,We(this,ke).getInt32(this.pos-4)}ig4(){return this.pos+=4,We(this,ke).getInt32(this.pos-4,!0)}g8(){return this.pos+=8,We(this,ke).getBigInt64(this.pos-8)}gbool(){return this.g1()===1}gjstr(e=10){const t=this.data.length;let n="",i;for(;(i=We(this,ke).getUint8(this.pos++))!==e&&this.pos<t;)n+=String.fromCharCode(i);return n}gdata(e,t,n){e.set(this.data.subarray(this.pos,this.pos+n),t),this.pos+=n}gsmarts(){return We(this,ke).getUint8(this.pos)<128?this.g1()-64:this.g2()-49152}gsmart(){return We(this,ke).getUint8(this.pos)<128?this.g1():this.g2()-32768}bits(){this.bitPos=this.pos<<3}bytes(){this.pos=this.bitPos+7>>>3}gBit(e){let t=this.bitPos>>>3,n=8-(this.bitPos&7),i=0;for(this.bitPos+=e;e>n;n=8)i+=(We(this,ke).getUint8(t++)&Nt.bitmask[n])<<e-n,e-=n;return e==n?i+=We(this,ke).getUint8(t)&Nt.bitmask[n]:i+=We(this,ke).getUint8(t)>>>n-e&Nt.bitmask[e],i}pBit(e,t){const n=this.bitPos;this.bitPos+=e;let i=n>>>3,r=8-(n&7);const o=We(this,ke);for(;e>r;r=8){const h=(1<<r)-1,d=o.getUint8(i);o.setUint8(i++,d&~h|t>>>e-r&h),e-=r}const a=r-e,l=(1<<e)-1,c=o.getUint8(i);o.setUint8(i,c&~l<<a|(t&l)<<a)}};ke=new WeakMap,Nt.crctable=new Int32Array(256),Nt.bitmask=new Uint32Array(33),Nt.crc32b=3988292384,(()=>{for(let e=0;e<32;e++)Nt.bitmask[e]=(1<<e)-1;Nt.bitmask[32]=4294967295;for(let e=0;e<256;e++){let t=e;for(let n=0;n<8;n++)(t&1)==1?t=t>>>1^Nt.crc32b:t>>>=1;Nt.crctable[e]=t}})();let ve=Nt;class Kt extends Array{constructor(e,t){super(e);for(let n=0;n<e;n++)this[n]=t}}class pr extends Array{constructor(e,t){super(e);for(let n=0;n<e;n++)this[n]=new Int32Array(t)}}class Ko extends Array{constructor(e,t){super(e);for(let n=0;n<e;n++)this[n]=new Float32Array(t)}}const Nn=class Nn{constructor(){this.animLength=0,this.animTypes=null,this.animLabels=null,this.id=0}static isIdTaken(e){return!!this.instances[e]}static getNextAvailableId(){const e=Object.keys(this.instances).map(Number);return e.length===0?0:Math.max(...e)+1}static convertFromData(e,t){t.pos=t.data.length-4;const n=t.g2(),i=t.g2();t.pos=0;const r=new Uint8Array(n);t.gdata(r,0,n);const o=new Uint8Array(i);t.gdata(o,0,i);const a=new ve(r),l=new ve(o),c=new Nn;c.animLength=n;const h=new Uint8Array(c.animLength),d=new Kt(c.animLength,null);for(let f=0;f<c.animLength;f++){h[f]=a.g1();const u=l.g1(),g=new Uint8Array(u);for(let v=0;v<u;v++)g[v]=l.g1();d[f]=g}return c.animTypes=h,c.animLabels=d,Nn.instances[e]=c,c}static convertFromData377(e,t){const n=new Nn;n.id=e;const i=t.g1();n.animLength=i;const r=new Uint8Array(i),o=new Array(i);for(let a=0;a<i;a++)r[a]=t.g1();for(let a=0;a<i;a++){const l=t.g1(),c=new Uint8Array(l);for(let h=0;h<l;h++)c[h]=t.g1();o[a]=c}return n.animTypes=r,n.animLabels=o,Nn.instances[e]=n,n}};Nn.instances=[];let dn=Nn;const Ii=class Ii{constructor(){this.id=0,this.frameDelay=0,this.base=null,this.frameLength=0,this.bases=null,this.x=null,this.y=null,this.z=null,this.originalGroupCount=null,this.isModified=!1}static isIdTaken(e){return!!this.instances[e]}static getNextAvailableId(){const e=Object.keys(this.instances).map(Number);return e.length===0?0:Math.max(...e)+1}static getFramesByBaseId(e){return Object.values(this.instances).filter(t=>t.base&&t.base.id===e)}static convertFromData(e,t){t.pos=t.data.length-8;const n=t.g2(),i=t.g2(),r=t.g2(),o=t.g2();t.pos=0;const a=new Uint8Array(n);t.gdata(a,0,n);const l=new ve(a),c=new Uint8Array(i);t.gdata(c,0,i);const h=new ve(c),d=new Uint8Array(r);t.gdata(d,0,r);const f=new ve(d),u=new Uint8Array(o);t.gdata(u,0,o);const g=new ve(u),v=new Ii;v.isModified=!1,l.g2(),Ii.instances[e]=v,v.id=e,v.frameDelay=g.g1();const m=l.g2(),p=dn.instances[m];if(p.id=m,!p)throw console.error(`AnimFrame ${e}: Missing AnimBase with id ${m}`),new Error(`AnimFrame ${e}: Missing AnimBase with id ${m}`);if(!p.animTypes)throw console.error(`AnimFrame ${e}: AnimBase ${m} has no animTypes`),new Error(`AnimFrame ${e}: AnimBase ${m} has no animTypes`);const M=l.g1();v.originalGroupCount=M;const x=M*2,y=new Int32Array(x),E=new Int32Array(x),C=new Int32Array(x),S=new Int32Array(x);let P=-1,_=0;for(let A=0;A<M;A++){const U=h.g1();if(U>0){if(A<p.animTypes.length&&p.animTypes[A]!==0){for(let D=A-1;D>P;D--)if(D<p.animTypes.length&&p.animTypes[D]===0){if(_>=x)throw new Error(`AnimFrame ${e}: Exceeded temp array capacity for type 0 group insert.`);y[_]=D,E[_]=0,C[_]=0,S[_]=0,_++;break}}if(_>=x)throw new Error(`AnimFrame ${e}: Exceeded temp array capacity for main group.`);y[_]=A;let F=0;A<p.animTypes.length&&p.animTypes[A]===3&&(F=128),U&1?E[_]=f.gsmarts():E[_]=F,U&2?C[_]=f.gsmarts():C[_]=F,U&4?S[_]=f.gsmarts():S[_]=F,P=A,_++}}if(v.base=p,v.frameLength=_,_>0){v.bases=new Int32Array(_),v.x=new Int32Array(_),v.y=new Int32Array(_),v.z=new Int32Array(_);for(let A=0;A<_;A++)v.bases[A]=y[A],v.x[A]=E[A],v.y[A]=C[A],v.z[A]=S[A]}else v.bases=null,v.x=null,v.y=null,v.z=null;return v}exportToFrame(){if(!this.base||!this.base.animTypes)return console.error(`AnimFrame ${this.id}: Cannot export, AnimBase or its animTypes are missing.`),null;const e=[];let t;!this.isModified&&this.originalGroupCount!==null?t=this.originalGroupCount:t=this.base.animTypes.length;const n=new ve(new Uint8Array(5));n.p2(this.id),n.p2(this.base.id),n.p1(t);const i=n.data.slice(0,n.pos),r=i.length;e.push(i);const o=(this.frameLength>0?this.frameLength:1)*3*5,a=new ve(new Uint8Array(t)),l=new ve(new Uint8Array(o));for(let E=0;E<t;E++){let C=0;const S=this.bases&&this.frameLength>0?this.bases.indexOf(E):-1;if(S!==-1&&this.x&&this.y&&this.z){const P=this.x[S],_=this.y[S],A=this.z[S];let U=0;E<this.base.animTypes.length&&(U=this.base.animTypes[E]);const F=U===3?128:0;P!==F&&(C|=1,l.psmarts(P)),_!==F&&(C|=2,l.psmarts(_)),A!==F&&(C|=4,l.psmarts(A))}a.p1(C)}const c=a.data.slice(0,a.pos),h=c.length;e.push(c);const d=l.data.slice(0,l.pos),f=d.length;e.push(d);const u=new ve(new Uint8Array(1));u.p1(this.frameDelay);const g=u.data.slice(0,u.pos),v=g.length;e.push(g);let m=0;for(const E of e)m+=E.length;const p=new ve(new Uint8Array(8));p.p2(r),p.p2(h),p.p2(f),p.p2(v);const M=p.data.slice(0,p.pos),x=new Uint8Array(m+M.length);let y=0;for(const E of e)x.set(E,y),y+=E.length;return x.set(M,y),x}addTransform(e,t,n,i){const r=this.frameLength+1,o=new Int32Array(r),a=new Int32Array(r),l=new Int32Array(r),c=new Int32Array(r);if(this.frameLength>0&&this.bases&&this.x&&this.y&&this.z)for(let h=0;h<this.frameLength;h++)o[h]=this.bases[h],a[h]=this.x[h],l[h]=this.y[h],c[h]=this.z[h];o[this.frameLength]=e,a[this.frameLength]=t,l[this.frameLength]=n,c[this.frameLength]=i,this.bases=o,this.x=a,this.y=l,this.z=c,this.frameLength=r,this.isModified=!0}deleteTransform(e){if(e<0||e>=this.frameLength)return console.error(`AnimFrame ${this.id}.deleteTransform: Invalid transformIndex ${e}. frameLength is ${this.frameLength}.`),!1;const t=this.frameLength-1;if(t===0)this.bases=null,this.x=null,this.y=null,this.z=null;else{const n=new Int32Array(t),i=new Int32Array(t),r=new Int32Array(t),o=new Int32Array(t);let a=0;for(let l=0;l<this.frameLength;l++)l!==e&&(n[a]=this.bases[l],i[a]=this.x[l],r[a]=this.y[l],o[a]=this.z[l],a++);this.bases=n,this.x=i,this.y=r,this.z=o}return this.frameLength=t,this.isModified=!0,!0}};Ii.instances=[];let et=Ii;const Vs=[{name:"base",revisions:{274:0,377:0}},{name:"head",revisions:{274:16,377:1}},{name:"top neck",revisions:{274:17,377:3}},{name:"bot neck",revisions:{274:18,377:[2,49]}},{name:"chest",revisions:{274:33,377:8}},{name:"midriff",revisions:{274:30,377:4}},{name:"weapon",revisions:{274:1,377:50}},{name:"left upper arm",revisions:{274:7,377:[18,20,21]}},{name:"left elbow",revisions:{274:3,377:17}},{name:"left forearm",revisions:{274:2,377:19}},{name:"left fist",revisions:{274:15,377:27}},{name:"right upper arm",revisions:{274:4,377:[24,25,26]}},{name:"right elbow",revisions:{274:5,377:23}},{name:"right forearm",revisions:{274:6,377:22}},{name:"right fist",revisions:{274:14,377:28}},{name:"front hip",revisions:{274:19,377:30}},{name:"full hip",revisions:{274:20,377:29}},{name:"back hip",revisions:{274:21,377:5}},{name:"right hip",revisions:{274:[24,62,64],377:40}},{name:"left hip",revisions:{274:[25,65,78],377:42}},{name:"butt",revisions:{274:22,377:41}},{name:"groin",revisions:{274:23,377:39}},{name:"right thigh",revisions:{274:61,377:43}},{name:"left thigh",revisions:{274:63,377:44}},{name:"top right knee",revisions:{274:27,377:35}},{name:"bot right knee",revisions:{274:26,377:37}},{name:"right knee pad",revisions:{274:59,377:36}},{name:"top left knee",revisions:{274:29,377:34}},{name:"bot left knee",revisions:{274:28,377:31}},{name:"left knee pad",revisions:{274:60,377:33}},{name:"top right foot",revisions:{274:12,377:38}},{name:"right foot",revisions:{274:9,377:46}},{name:"right heel",revisions:{274:8,377:47}},{name:"top left foot",revisions:{274:13,377:32}},{name:"left foot",revisions:{274:11,377:45}},{name:"left heel",revisions:{274:10,377:48}},{name:"female hair",revisions:{274:[58,79],377:94}},{name:"apron chest",revisions:{274:31,377:6}},{name:"apron bottom",revisions:{274:32,377:7}},{name:"skirt upper front+back center",revisions:{274:[66,67],377:79}},{name:"skirt middle",revisions:{274:[70,71,73],377:[34,35,80,81]}},{name:"skirt lower",revisions:{274:[69,72,74],377:[31,37,82,83]}},{name:"skirt bottom",revisions:{274:[68,75,76],377:[76,77]}},{name:"skirt short bottom",revisions:{274:77,377:57}},{name:"cape top",revisions:{274:34,377:[10,11]}},{name:"cape upper",revisions:{274:35,377:9}},{name:"cape middle",revisions:{274:36,377:14}},{name:"cape lower",revisions:{274:37,377:13}},{name:"cape bot",revisions:{274:38,377:12}},{name:"extra cape 1",revisions:{274:56,377:15}},{name:"extra cape 2",revisions:{274:57,377:16}},{name:"misc",revisions:{274:255,377:255}},{name:"377 unknown or added 1",revisions:{274:101,377:51}},{name:"377 unknown or added 2",revisions:{274:102,377:52}},{name:"377 unknown or added 3",revisions:{274:103,377:53}},{name:"377 unknown or added 4",revisions:{274:104,377:54}},{name:"377 unknown or added 5",revisions:{274:105,377:55}},{name:"377 unknown or added 6",revisions:{274:106,377:56}},{name:"377 unknown or added 7",revisions:{274:107,377:58}},{name:"377 unknown or added 8",revisions:{274:108,377:59}},{name:"377 unknown or added 9",revisions:{274:109,377:60}},{name:"377 unknown or added 10",revisions:{274:110,377:61}},{name:"377 unknown or added 11",revisions:{274:111,377:62}},{name:"377 unknown or added 12",revisions:{274:112,377:63}},{name:"377 unknown or added 13",revisions:{274:113,377:64}},{name:"377 unknown or added 14",revisions:{274:114,377:65}},{name:"377 unknown or added 15",revisions:{274:115,377:66}},{name:"377 unknown or added 16",revisions:{274:116,377:67}},{name:"377 unknown or added 17",revisions:{274:117,377:68}},{name:"377 unknown or added 18",revisions:{274:118,377:69}},{name:"377 unknown or added 19",revisions:{274:119,377:70}},{name:"377 unknown or added 20",revisions:{274:120,377:71}},{name:"377 unknown or added 21",revisions:{274:121,377:72}},{name:"377 unknown or added 22",revisions:{274:122,377:73}},{name:"377 unknown or added 23",revisions:{274:123,377:74}},{name:"377 unknown or added 24",revisions:{274:124,377:75}},{name:"377 unknown or added 25",revisions:{274:125,377:78}},{name:"377 unknown or added 26",revisions:{274:126,377:84}},{name:"377 unknown or added 27",revisions:{274:127,377:85}},{name:"377 unknown or added 28",revisions:{274:128,377:86}},{name:"377 unknown or added 29",revisions:{274:129,377:87}},{name:"377 unknown or added 30",revisions:{274:130,377:88}},{name:"377 unknown or added 31",revisions:{274:131,377:89}},{name:"377 unknown or added 32",revisions:{274:132,377:90}},{name:"377 unknown or added 33",revisions:{274:133,377:91}},{name:"377 unknown or added 34",revisions:{274:134,377:92}},{name:"377 unknown or added 35",revisions:{274:135,377:93}}];class Jt{static build377To274SingleMap(){const e=new Map;for(const t of Vs){const n=Array.isArray(t.revisions[377])?t.revisions[377]:[t.revisions[377]],i=Array.isArray(t.revisions[274])?t.revisions[274]:[t.revisions[274]];if(!n||!i||i.length===0)continue;const r=i[0];for(const o of n)e.set(o,r)}return e}static build377To274LabelMap(){const e=new Map;for(const t of Vs){const n=Array.isArray(t.revisions[377])?t.revisions[377]:t.revisions[377]!==void 0?[t.revisions[377]]:[],i=Array.isArray(t.revisions[274])?t.revisions[274]:t.revisions[274]!==void 0?[t.revisions[274]]:[];if(!(n.length===0||i.length===0))for(const r of n){const o=e.get(r);if(o)for(const a of i)o.includes(a)||o.push(a);else e.set(r,[...i])}}return e}static applyModelRelabel377To274(e){const t=this.build377To274SingleMap(),n=i=>{if(!i)return null;const r=new Array(256).fill(null),o=new Map;for(let a=0;a<i.length;a++){const l=i[a];if(!l)continue;const c=t.has(a)?t.get(a):a;o.has(c)||o.set(c,[]),o.get(c).push(...Array.from(l))}return o.forEach((a,l)=>{r[l]=new Int32Array(a)}),r};e.labelVertices&&(e.labelVertices=n(e.labelVertices),e.hadOriginalVertexLabels=!0)}static remapLabels377To274(e){const t=dn.instances[e];if(!t||!t.animTypes||!t.animLabels)return console.error(`remapLabels: no valid AnimBase at id ${e}`),null;const n=Jt.build377To274LabelMap(),i=new Array(t.animLength).fill(null);for(let r=0;r<t.animLength;r++){const o=t.animLabels[r];if(!o||o.length===0){i[r]=new Uint8Array(0);continue}const a=[],l=new Set;for(const c of o){const h=n.get(c);if(h)for(const d of h)l.has(d)||(l.add(d),a.push(d))}i[r]=new Uint8Array(a)}return t.animLabels=i,console.log(`%cremapLabels377To274: relabeled base ${e} in-place (${t.animLength} groups).`,"color: #4fc"),e}static remapSeqConfig(e,t){let n=e;const i=Array.from(t.keys()).sort((r,o)=>o-r);for(const r of i){const o=t.get(r),a=new RegExp(`anim_${r}\\b`,"g");n=n.replace(a,`anim_${o}`)}return n}static async importWithConflictCheck(e){const t=new ve(e);t.pos=e.length-8;const n=t.g2(),i=t.g2(),r=t.g2(),o=t.g2();let a=0;const l=new ve(e.subarray(a,a+n+2));a+=n+2;const c=new ve(e.subarray(a,a+i));a+=i;const h=new ve(e.subarray(a,a+r));a+=r;const d=new ve(e.subarray(a,a+o));a+=o;const f=new ve(e.subarray(a,e.length-8)),u=l.g2(),g=dn.getNextAvailableId();let v=et.getNextAvailableId();const m=new Map,p=dn.convertFromData377(g,f),M=new Array(500),x=new Array(500),y=new Array(500),E=new Array(500);for(let C=0;C<u;C++){const S=l.g2(),P=v++;m.set(S,P);const _=new et;_.id=P,_.frameDelay=d.g1(),_.base=p;const A=l.g1();let U=-1,F=0;for(let D=0;D<A;D++){const R=c.g1();if(R>0){if(p.animTypes[D]!==0){for(let V=D-1;V>U;V--)if(p.animTypes[V]===0){M[F]=V,x[F]=0,y[F]=0,E[F]=0,F++;break}}M[F]=D;let L=p.animTypes[D]===3?128:0;x[F]=R&1?h.gsmarts():L,y[F]=R&2?h.gsmarts():L,E[F]=R&4?h.gsmarts():L,U=D,F++}}_.frameLength=F,_.bases=new Int32Array(F),_.x=new Int32Array(F),_.y=new Int32Array(F),_.z=new Int32Array(F);for(let D=0;D<F;D++)_.bases[D]=M[D],_.x[D]=x[D],_.y[D]=y[D],_.z[D]=E[D];et.instances[P]=_}return{baseId:g,mapping:m,frameCount:u}}static exportAnimSet(e){const t=dn.instances[e],n=et.getFramesByBaseId(e).sort((g,v)=>g.id-v.id);if(!t||n.length===0)throw new Error("Base or frames missing for export");const i=new ve(new Uint8Array(2+n.length*3)),r=new ve(new Uint8Array(n.length*t.animLength)),o=new ve(new Uint8Array(n.length*t.animLength*6)),a=new ve(new Uint8Array(n.length));i.p2(n.length);for(const g of n){i.p2(g.id),i.p1(t.animLength);for(let v=0;v<t.animLength;v++){const m=g.bases?Array.from(g.bases).indexOf(v):-1;let p=0;if(m!==-1){const M=t.animTypes[v]===3?128:0;g.x[m]!==M&&(p|=1,o.psmarts(g.x[m])),g.y[m]!==M&&(p|=2,o.psmarts(g.y[m])),g.z[m]!==M&&(p|=4,o.psmarts(g.z[m]))}r.p1(p)}a.p1(g.frameDelay)}const l=new ve(new Uint8Array(1e8));l.p1(t.animLength);for(let g=0;g<t.animLength;g++)l.p1(t.animTypes[g]);for(let g=0;g<t.animLength;g++){l.p1(t.animLabels[g].length);for(const v of t.animLabels[g])l.p1(v)}const c=new ve(new Uint8Array(i.pos+r.pos+o.pos+a.pos+l.pos+8)),h=i.pos;c.pdata(i.data,0,i.pos);const d=r.pos;c.pdata(r.data,0,r.pos);const f=o.pos;c.pdata(o.data,0,o.pos);const u=a.pos;return c.pdata(a.data,0,a.pos),c.pdata(l.data,0,l.pos),c.p2(h-2),c.p2(d),c.p2(f),c.p2(u),c.data.slice(0,c.pos)}static convertFromData(e,t){const n=new ve(t);n.pos=t.length-8;const i=n.g2(),r=n.g2(),o=n.g2(),a=n.g2(),l=new ve(t);l.pos=0;const c=l.g2(),h=new ve(t);h.pos=l.pos+i;const d=new ve(t);d.pos=h.pos+r;const f=new ve(t);f.pos=d.pos+o;const u=new ve(t);u.pos=f.pos+a;const g=dn.convertFromData377(e,u),v=new Array(500),m=new Array(500),p=new Array(500),M=new Array(500);for(let x=0;x<c;x++){const y=l.g2(),E=new et;E.id=y,E.frameDelay=f.g1(),E.base=g;const C=l.g1();let S=-1,P=0;for(let _=0;_<C;_++){const A=h.g1();if(A>0){if(g.animTypes[_]!==0){for(let F=_-1;F>S;F--)if(g.animTypes[F]===0){v[P]=F,m[P]=0,p[P]=0,M[P]=0,P++;break}}v[P]=_;let U=0;g.animTypes[v[P]]===3&&(U=128),A&1?m[P]=d.gsmarts():m[P]=U,A&2?p[P]=d.gsmarts():p[P]=U,A&4?M[P]=d.gsmarts():M[P]=U,S=_,P++}}E.frameLength=P,E.bases=new Int32Array(P),E.x=new Int32Array(P),E.y=new Int32Array(P),E.z=new Int32Array(P);for(let _=0;_<P;_++)E.bases[_]=v[_],E.x[_]=m[_],E.y[_]=p[_],E.z[_]=M[_];et.instances[y]=E}}}const Ze=class Ze{static init3D(e,t){this.lineOffset=new Int32Array(t);for(let n=0;n<t;n++)this.lineOffset[n]=e*n;this.centerX=e/2|0,this.centerY=t/2|0}static clearTexels(){this.texelPool=null,this.activeTexels.fill(null)}static getAverageTextureRGB(e){if(this.averageTextureRGB[e]!==0)return this.averageTextureRGB[e];const t=this.texPal[e];if(!t)return 0;let n=0,i=0,r=0;const o=t.length;for(let l=0;l<o;l++)n+=t[l]>>16&255,i+=t[l]>>8&255,r+=t[l]&255;let a=((n/o|0)<<16)+((i/o|0)<<8)+(r/o|0);return a=this.setGamma(a,1.4),a===0&&(a=1),this.averageTextureRGB[e]=a,a}static setBrightness(e){const t=e+Math.random()*.03-.015;let n=0;for(let i=0;i<512;i++){const r=(i/8|0)/64+.0078125,o=(i&7)/8+.0625;for(let a=0;a<128;a++){const l=a/128;let c=l,h=l,d=l;if(o!==0){let m;l<.5?m=l*(o+1):m=l+o-l*o;const p=l*2-m;let M=r+.3333333333333333;M>1&&M--;let x=r-.3333333333333333;x<0&&x++,M*6<1?c=p+(m-p)*6*M:M*2<1?c=m:M*3<2?c=p+(m-p)*(.6666666666666666-M)*6:c=p,r*6<1?h=p+(m-p)*6*r:r*2<1?h=m:r*3<2?h=p+(m-p)*(.6666666666666666-r)*6:h=p,x*6<1?d=p+(m-p)*6*x:x*2<1?d=m:x*3<2?d=p+(m-p)*(.6666666666666666-x)*6:d=p}const f=c*256|0,u=h*256|0,g=d*256|0,v=(f<<16)+(u<<8)+g;this.hslPal[n++]=this.setGamma(v,t)}}}static setGamma(e,t){const n=(e>>16)/256,i=(e>>8&255)/256,r=(e&255)/256,o=Math.pow(n,t),a=Math.pow(i,t),l=Math.pow(r,t),c=o*256|0,h=a*256|0,d=l*256|0;return(c<<16)+(h<<8)+d}static initPool(e){this.texelPool||(this.poolSize=e,this.lowMemory?this.texelPool=new pr(e,16384):this.texelPool=new pr(e,65536),this.activeTexels.fill(null))}};Ze.lowMemory=!1,Ze.reciprocal15=new Int32Array(512),Ze.reciprocal16=new Int32Array(2048),Ze.sin=new Int32Array(2048),Ze.cos=new Int32Array(2048),Ze.hslPal=new Int32Array(65536),Ze.textureCount=0,Ze.lineOffset=new Int32Array,Ze.centerX=0,Ze.centerY=0,Ze.jagged=!0,Ze.clipX=!1,Ze.alpha=0,Ze.texelPool=null,Ze.activeTexels=new Kt(50,null),Ze.poolSize=0,Ze.cycle=0,Ze.textureCycle=new Int32Array(50),Ze.texPal=new Kt(50,null),Ze.averageTextureRGB=new Int32Array(50),(()=>{for(let e=1;e<512;e++)Ze.reciprocal15[e]=32768/e|0;for(let e=1;e<2048;e++)Ze.reciprocal16[e]=65536/e|0;for(let e=0;e<2048;e++)Ze.sin[e]=Math.sin(e*.0030679615757712823)*65536|0,Ze.cos[e]=Math.cos(e*.0030679615757712823)*65536|0;Ze.setBrightness(.8)})();let ot=Ze;class Si{constructor(){this.x=0,this.y=0,this.z=0,this.w=0}}const ie=class ie{constructor(e){this.objRaise=0,this.pickable=!1,this.pickedFace=-1,this.pickedFaceDepth=-1,this.originalFaceColor=null,this.hadOriginalFaceLabels=!1,this.hadOriginalVertexLabels=!1,this.hadOriginalFacePriorities=!1,this.hadOriginalFaceAlphas=!1,this.hadOriginalFaceInfos=!1,this.partMapping=null,this.currentScaleX=128,this.currentScaleY=128,this.currentScaleZ=128,this.baseScaleX=128,this.baseScaleY=128,this.baseScaleZ=128,this.vertexCount=e.vertexCount,this.vertexX=e.vertexX,this.vertexY=e.vertexY,this.vertexZ=e.vertexZ,this.faceCount=e.faceCount,this.faceVertexA=e.faceVertexA,this.faceVertexB=e.faceVertexB,this.faceVertexC=e.faceVertexC,this.faceColorA=e.faceColorA,this.faceColorB=e.faceColorB,this.faceColorC=e.faceColorC,this.faceInfo=e.faceInfo,this.facePriority=e.facePriority,this.faceAlpha=e.faceAlpha,this.faceColor=e.faceColor,this.priorityVal=e.priorityVal,this.texturedFaceCount=e.texturedFaceCount,this.texturedVertexA=e.texturedVertexA,this.texturedVertexB=e.texturedVertexB,this.texturedVertexC=e.texturedVertexC,this.minX=e.minX??0,this.maxX=e.maxX??0,this.minZ=e.minZ??0,this.maxZ=e.maxZ??0,this.radius=e.radius??0,this.minY=e.minY??0,this.maxY=e.maxY??0,this.maxDepth=e.maxDepth??0,this.minDepth=e.minDepth??0,this.vertexLabel=e.vertexLabel??null,this.faceLabel=e.faceLabel??null,this.labelVertices=e.labelVertices??null,this.labelFaces=e.labelFaces??null,this.vertexNormal=e.vertexNormal??null,this.vertexNormalOriginal=e.vertexNormalOriginal??null,this.originalVertexX=new Int32Array(this.vertexX),this.originalVertexY=new Int32Array(this.vertexY),this.originalVertexZ=new Int32Array(this.vertexZ),this.faceTextures=new Int32Array(this.faceCount),this.faceTextures.fill(-1),this.textureCoords=new Int32Array(this.faceCount),this.uvCoords=new Ko(this.faceCount,6),this.priorityVal=e.priorityVal,this.currentScaleX=128,this.currentScaleY=128,this.currentScaleZ=128,this.baseScaleX=128,this.baseScaleY=128,this.baseScaleZ=128}static encodeVertices(e,t,n,i){const r=new ve(new Uint8Array(i)),o=new ve(new Uint8Array(i*2)),a=new ve(new Uint8Array(i*2)),l=new ve(new Uint8Array(i*2));let c=0,h=0,d=0;for(let f=0;f<i;f++){const u=e[f],g=t[f],v=n[f],m=u-c,p=g-h,M=v-d;let x=0;m!==0&&(x|=1,o.psmarts(m)),p!==0&&(x|=2,a.psmarts(p)),M!==0&&(x|=4,l.psmarts(M)),r.p1(x),c=u,h=g,d=v}return{flags:r.data,xData:o.data.slice(0,o.pos),yData:a.data.slice(0,a.pos),zData:l.data.slice(0,l.pos)}}static encodeFaces(e,t,n,i){const r=new ve(new Uint8Array(i)),o=new ve(new Uint8Array(i*3*2));let a=0,l=0,c=0,h=0;for(let d=0;d<i;d++){const f=e[d],u=t[d],g=n[d];let v;f===l&&u===a&&g!==h?(v=4,r.p1(v),o.psmarts(g-h)):f===c&&u===l&&g!==h?(v=3,r.p1(v),o.psmarts(g-h)):f===a&&u===c&&g!==h?(v=2,r.p1(v),o.psmarts(g-h)):(v=1,r.p1(v),o.psmarts(f-h),o.psmarts(u-f),o.psmarts(g-u)),h=g,a=f,l=u,c=g}return{orientations:r.data,vertexIndices:o.data.slice(0,o.pos)}}static convertFromData(e){const t=e.data.length-18;e.pos=t;const n=e.g2(),i=e.g2(),r=e.g1(),o=e.g1(),a=e.g1(),l=e.g1(),c=e.g1(),h=e.g1(),d=e.g2(),f=e.g2(),u=e.g2(),g=e.g2();e.pos=0;const v=new Uint8Array(n);e.gdata(v,0,v.length);const m=new Uint8Array(i);e.gdata(m,0,m.length);const p=[],M=[],x=[],y=[],E=[];if(a===255){const J=new Uint8Array(i);e.gdata(J,0,J.length);for(let re=0;re<J.length;re++)p.push(J[re])}if(c===1){const J=new Uint8Array(i);e.gdata(J,0,J.length);for(let re=0;re<J.length;re++)M.push(J[re])}if(o===1){const J=new Uint8Array(i);e.gdata(J,0,J.length);for(let re=0;re<J.length;re++)x.push(J[re])}if(h===1){const J=new Uint8Array(n);e.gdata(J,0,J.length);for(let re=0;re<J.length;re++)y.push(J[re])}if(l===1){const J=new Uint8Array(i);e.gdata(J,0,J.length);for(let re=0;re<J.length;re++)E.push(J[re])}const C=new Uint8Array(g);e.gdata(C,0,C.length);const S=new Uint8Array(i*2);e.gdata(S,0,S.length);const P=new Uint8Array(r*6);e.gdata(P,0,P.length);const _=new Uint8Array(d);e.gdata(_,0,_.length);const A=new Uint8Array(f);e.gdata(A,0,A.length);const U=new Uint8Array(u);e.gdata(U,0,U.length);const F=new Int32Array(n),D=new Int32Array(n),R=new Int32Array(n),L=new Int32Array(i),V=new Int32Array(i),Z=new Int32Array(i),K=new Int32Array(i),W=new Int32Array(r),j=new Int32Array(r),$=new Int32Array(r);ie.processVertices(F,D,R,n,_,A,U,v),ie.processFaces(L,V,Z,i,C,m),ie.processColors(K,i,S),ie.processTextures(W,j,$,r,P);let N=0;a!==255&&(N=a);const z={vertexCount:n,vertexX:F,vertexY:D,vertexZ:R,faceCount:i,faceVertexA:L,faceVertexB:V,faceVertexC:Z,faceColorA:null,faceColorB:null,faceColorC:null,faceInfo:x.length>0?new Int32Array(x):null,facePriority:p.length>0?new Int32Array(p):null,faceAlpha:E.length>0?new Int32Array(E):null,faceColor:K,priorityVal:N,texturedFaceCount:r,texturedVertexA:W,texturedVertexB:j,texturedVertexC:$,vertexLabel:y.length>0?new Int32Array(y):null,faceLabel:M.length>0?new Int32Array(M):null,labelVertices:null,labelFaces:null,vertexNormal:null,vertexNormalOriginal:null},Y=new ie(z);return Y.hadOriginalFaceInfos=o===1,Y.hadOriginalFacePriorities=a===255,Y.hadOriginalFaceAlphas=l===1,Y.hadOriginalFaceLabels=c===1,Y.hadOriginalVertexLabels=h===1,Y.faceColor&&(Y.originalFaceColor=new Int32Array(Y.faceColor)),Y}exportToOb2(){const e=[],{flags:t,xData:n,yData:i,zData:r}=ie.encodeVertices(this.vertexX,this.vertexY,this.vertexZ,this.vertexCount);e.push(t);const{orientations:o,vertexIndices:a}=ie.encodeFaces(this.faceVertexA,this.faceVertexB,this.faceVertexC,this.faceCount);if(e.push(o),this.hadOriginalFacePriorities){const S=this.facePriority?Uint8Array.from(this.facePriority):new Uint8Array(this.faceCount).fill(0);e.push(S)}if(this.hadOriginalFaceLabels){let S=new Uint8Array(this.faceCount).fill(0);if(this.faceLabelForExport instanceof Int32Array){const P=this.faceLabelForExport;console.log("Using faceLabelForExport in export:",P.slice(0,20));for(let _=0;_<this.faceCount&&_<P.length;_++)S[_]=P[_]}else if(this.labelFaces)for(let P=0;P<this.labelFaces.length;P++){const _=this.labelFaces[P];if(_)for(let A=0;A<_.length;A++)_[A]<this.faceCount&&(S[_[A]]=P)}e.push(S)}if(this.hadOriginalFaceInfos){const S=this.faceInfo?Uint8Array.from(this.faceInfo):new Uint8Array(this.faceCount).fill(0);e.push(S)}if(this.hadOriginalVertexLabels){let S=new Uint8Array(this.vertexCount).fill(0);if(this.vertexLabelForExport instanceof Int32Array){const P=this.vertexLabelForExport;for(let _=0;_<this.vertexCount&&_<P.length;_++)S[_]=P[_]}else if(this.labelVertices)for(let P=0;P<this.labelVertices.length;P++){const _=this.labelVertices[P];if(_)for(let A=0;A<_.length;A++)_[A]<this.vertexCount&&(S[_[A]]=P)}e.push(S)}if(this.hadOriginalFaceAlphas){const S=this.faceAlpha?Uint8Array.from(this.faceAlpha):new Uint8Array(this.faceCount).fill(0);e.push(S)}e.push(a);const l=new ve(new Uint8Array(this.faceCount*2)),c=this.originalFaceColor?this.originalFaceColor:this.faceColor;if(c)for(let S=0;S<this.faceCount;S++)l.p2(c[S]);else for(let S=0;S<this.faceCount;S++)l.p2(0);const h=l.data;e.push(h);const d=new ve(new Uint8Array(this.texturedFaceCount*6));for(let S=0;S<this.texturedFaceCount;S++)d.p2(this.texturedVertexA[S]),d.p2(this.texturedVertexB[S]),d.p2(this.texturedVertexC[S]);const f=d.data;e.push(f),e.push(n),e.push(i),e.push(r);let u=0;for(let S=0;S<e.length;S++)u+=e[S].length;const g=new ve(new Uint8Array(18));g.p2(this.vertexCount),g.p2(this.faceCount),g.p1(this.texturedFaceCount);const v=this.hadOriginalFaceInfos?1:0;g.p1(v);let m;this.hadOriginalFacePriorities?m=255:m=this.priorityVal,g.p1(m);const p=this.hadOriginalFaceAlphas?1:0;g.p1(p);const M=this.hadOriginalFaceLabels?1:0;g.p1(M);const x=this.hadOriginalVertexLabels?1:0;g.p1(x),g.p2(n.length),g.p2(i.length),g.p2(r.length),g.p2(a.length);const y=g.data,E=new Uint8Array(u+y.length);let C=0;for(const S of e)E.set(S,C),C+=S.length;return E.set(y,C),E}saveCurrentVerticesAsOriginal(){if(this.baseScaleX!==128||this.baseScaleY!==128||this.baseScaleZ!==128){this.originalVertexX=new Int32Array(this.vertexCount),this.originalVertexY=new Int32Array(this.vertexCount),this.originalVertexZ=new Int32Array(this.vertexCount);for(let e=0;e<this.vertexCount;e++)this.originalVertexX[e]=this.vertexX[e]*128/this.baseScaleX|0,this.originalVertexY[e]=this.vertexY[e]*128/this.baseScaleY|0,this.originalVertexZ[e]=this.vertexZ[e]*128/this.baseScaleZ|0}else this.originalVertexX=new Int32Array(this.vertexX),this.originalVertexY=new Int32Array(this.vertexY),this.originalVertexZ=new Int32Array(this.vertexZ);this.partMapping&&this.partMapping.isNpcModel&&this.updateAllPartVertices()}resetToOriginal(){if(this.vertexX.set(this.originalVertexX),this.vertexY.set(this.originalVertexY),this.vertexZ.set(this.originalVertexZ),this.currentScaleX=this.baseScaleX,this.currentScaleY=this.baseScaleY,this.currentScaleZ=this.baseScaleZ,this.partMapping&&this.partMapping.isNpcModel)for(const e of this.partMapping.parts)e.originalModel.resetToOriginal()}static processVertices(e,t,n,i,r,o,a,l){const c=new ve(r),h=new ve(o),d=new ve(a);let f=0,u=0,g=0;for(let v=0;v<i;v++){const m=l[v];let p=0;m&1&&(p=c.gsmarts());let M=0;m&2&&(M=h.gsmarts());let x=0;m&4&&(x=d.gsmarts());const y=f+p,E=u+M,C=g+x;f=y,u=E,g=C,e[v]=y,t[v]=E,n[v]=C}}static processFaces(e,t,n,i,r,o){const a=new ve(r),l=new ve(o);let c=0,h=0,d=0,f=0;for(let u=0;u<i;u++){const g=l.g1();if(g===1)c=a.gsmarts()+f,f=c,h=a.gsmarts()+f,f=h,d=a.gsmarts()+f,f=d;else if(g===2)h=d,d=a.gsmarts()+f,f=d;else if(g===3)c=d,d=a.gsmarts()+f,f=d;else if(g===4){const v=c;c=h,h=v,d=a.gsmarts()+f,f=d}e[u]=c,t[u]=h,n[u]=d}}static processColors(e,t,n){const i=new ve(n);for(let r=0;r<t;r++){const o=i.g2();e[r]=o}}static processTextures(e,t,n,i,r){if(i===0)return;const o=new ve(r);for(let a=0;a<i;a++)e[a]=o.g2(),t[a]=o.g2(),n[a]=o.g2()}processTextureCoordinates(){if(this.faceInfo)for(let e=0;e<this.faceCount;e++){const t=this.faceInfo[e]&3;(t===2||t===3)&&this.faceColor&&(this.faceTextures[e]=this.faceColor[e],this.textureCoords[e]=this.faceInfo[e]>>2,this.calculateTextureCoordinates(e))}}calculateTextureCoordinates(e){const t=this.faceVertexA[e],n=this.faceVertexB[e],i=this.faceVertexC[e];let r,o,a;if(this.faceTextures[e]!==-1){const Y=this.textureCoords[e];r=this.texturedVertexA[Y],o=this.texturedVertexB[Y],a=this.texturedVertexC[Y]}else r=t,o=n,a=i;const l=this.vertexX[r],c=this.vertexY[r],h=this.vertexZ[r],d=this.vertexX[o]-l,f=this.vertexY[o]-c,u=this.vertexZ[o]-h,g=this.vertexX[a]-l,v=this.vertexY[a]-c,m=this.vertexZ[a]-h,p=this.vertexX[t]-l,M=this.vertexY[t]-c,x=this.vertexZ[t]-h,y=this.vertexX[n]-l,E=this.vertexY[n]-c,C=this.vertexZ[n]-h,S=this.vertexX[i]-l,P=this.vertexY[i]-c,_=this.vertexZ[i]-h,A=f*m-u*v,U=u*g-d*m,F=d*v-f*g;let D=v*F-m*U,R=m*A-g*F,L=g*U-v*A,V=D*d+R*f+L*u,Z=1/V;const K=(D*p+R*M+L*x)*Z,W=(D*y+R*E+L*C)*Z,j=(D*S+R*P+L*_)*Z;D=f*F-u*U,R=u*A-d*F,L=d*U-f*A,V=D*g+R*v+L*m,Z=1/V;const $=(D*p+R*M+L*x)*Z,N=(D*y+R*E+L*C)*Z,z=(D*S+R*P+L*_)*Z;this.uvCoords[e].set([K,$,W,N,j,z])}static mulColorLightness(e,t,n){return(n&2)===2?(t<0?t=0:t>127&&(t=127),127-t):(t=t*(e&127)>>7,t<2?t=2:t>126&&(t=126),(e&65408)+t)}static modelCopyFaces(e,t,n){const i=e.vertexCount,r=e.faceCount,o=e.texturedFaceCount;let a;if(t){a=new Int32Array(i);for(let g=0;g<i;g++)a[g]=e.vertexY[g]}else a=e.vertexY;let l,c,h,d,f=null,u=null;if(n){l=new Int32Array(r),c=new Int32Array(r),h=new Int32Array(r);for(let g=0;g<r;g++)e.faceColorA&&(l[g]=e.faceColorA[g]),e.faceColorB&&(c[g]=e.faceColorB[g]),e.faceColorC&&(h[g]=e.faceColorC[g]);if(d=new Int32Array(r),e.faceInfo)for(let g=0;g<r;g++)d[g]=e.faceInfo[g];else for(let g=0;g<r;g++)d[g]=0;f=new Kt(i,null);for(let g=0;g<i;g++){const v=f[g]=new Si;if(e.vertexNormal){const m=e.vertexNormal[g];m&&(v.x=m.x,v.y=m.y,v.z=m.z,v.w=m.w)}}u=e.vertexNormalOriginal}else l=e.faceColorA,c=e.faceColorB,h=e.faceColorC,d=e.faceInfo;return new ie({vertexCount:i,vertexX:e.vertexX,vertexY:a,vertexZ:e.vertexZ,faceCount:r,faceVertexA:e.faceVertexA,faceVertexB:e.faceVertexB,faceVertexC:e.faceVertexC,faceColorA:l,faceColorB:c,faceColorC:h,faceInfo:d,facePriority:e.facePriority,faceAlpha:e.faceAlpha,faceColor:e.faceColor,priorityVal:e.priorityVal,texturedFaceCount:o,texturedVertexA:e.texturedVertexA,texturedVertexB:e.texturedVertexB,texturedVertexC:e.texturedVertexC,minX:e.minX,maxX:e.maxX,minZ:e.minZ,maxZ:e.maxZ,radius:e.radius,minY:e.minY,maxY:e.maxY,maxDepth:e.maxDepth,minDepth:e.minDepth,vertexNormal:f,vertexNormalOriginal:u})}static modelShareColored(e,t,n,i){const r=e.vertexCount,o=e.faceCount,a=e.texturedFaceCount;let l,c,h;if(i)l=e.vertexX,c=e.vertexY,h=e.vertexZ;else{l=new Int32Array(r),c=new Int32Array(r),h=new Int32Array(r);for(let u=0;u<r;u++)l[u]=e.vertexX[u],c[u]=e.vertexY[u],h[u]=e.vertexZ[u]}let d;if(t)d=e.faceColor;else{d=new Int32Array(o);for(let u=0;u<o;u++)e.faceColor&&(d[u]=e.faceColor[u])}let f;if(n)f=e.faceAlpha;else if(f=new Int32Array(o),e.faceAlpha)for(let u=0;u<o;u++)f[u]=e.faceAlpha[u];else for(let u=0;u<o;u++)f[u]=0;return new ie({vertexCount:r,vertexX:l,vertexY:c,vertexZ:h,faceCount:o,faceVertexA:e.faceVertexA,faceVertexB:e.faceVertexB,faceVertexC:e.faceVertexC,faceColorA:null,faceColorB:null,faceColorC:null,faceInfo:e.faceInfo,facePriority:e.facePriority,faceAlpha:f,faceColor:d,priorityVal:e.priorityVal,texturedFaceCount:a,texturedVertexA:e.texturedVertexA,texturedVertexB:e.texturedVertexB,texturedVertexC:e.texturedVertexC,vertexLabel:e.vertexLabel,faceLabel:e.faceLabel})}static modelShareAlpha(e,t){const n=e.vertexCount,i=e.faceCount,r=e.texturedFaceCount,o=new Int32Array(n),a=new Int32Array(n),l=new Int32Array(n);for(let h=0;h<n;h++)o[h]=e.vertexX[h],a[h]=e.vertexY[h],l[h]=e.vertexZ[h];let c;if(t)c=e.faceAlpha;else if(c=new Int32Array(i),e.faceAlpha)for(let h=0;h<i;h++)c[h]=e.faceAlpha[h];else for(let h=0;h<i;h++)c[h]=0;return new ie({vertexCount:n,vertexX:o,vertexY:a,vertexZ:l,faceCount:i,faceVertexA:e.faceVertexA,faceVertexB:e.faceVertexB,faceVertexC:e.faceVertexC,faceColorA:e.faceColorA,faceColorB:e.faceColorB,faceColorC:e.faceColorC,faceInfo:e.faceInfo,facePriority:e.facePriority,faceAlpha:c,faceColor:e.faceColor,priorityVal:e.priorityVal,texturedFaceCount:r,texturedVertexA:e.texturedVertexA,texturedVertexB:e.texturedVertexB,texturedVertexC:e.texturedVertexC,labelVertices:e.labelVertices,labelFaces:e.labelFaces})}static modelFromModelsBounds(e,t){let n=!1,i=!1,r=!1,o=!1,a=0,l=0,c=0,h=-1;for(let F=0;F<t;F++){const D=e[F];D&&(a+=D.vertexCount,l+=D.faceCount,c+=D.texturedFaceCount,n||(n=D.faceInfo!==null),D.facePriority?i=!0:(h===-1&&(h=D.priorityVal),h!==D.priorityVal&&(i=!0)),r||(r=D.faceAlpha!==null),o||(o=D.faceColor!==null))}const d=new Int32Array(a),f=new Int32Array(a),u=new Int32Array(a),g=new Int32Array(l),v=new Int32Array(l),m=new Int32Array(l),p=new Int32Array(l),M=new Int32Array(l),x=new Int32Array(l),y=new Int32Array(c),E=new Int32Array(c),C=new Int32Array(c);let S=null;n&&(S=new Int32Array(l));let P=null;i&&(P=new Int32Array(l));let _=null;r&&(_=new Int32Array(l));let A=null;o&&(A=new Int32Array(l)),a=0,l=0,c=0;for(let F=0;F<t;F++){const D=e[F];if(D){const R=a;for(let L=0;L<D.vertexCount;L++)d[a]=D.vertexX[L],f[a]=D.vertexY[L],u[a]=D.vertexZ[L],a++;for(let L=0;L<D.faceCount;L++)g[l]=D.faceVertexA[L]+R,v[l]=D.faceVertexB[L]+R,m[l]=D.faceVertexC[L]+R,D.faceColorA&&(p[l]=D.faceColorA[L]),D.faceColorB&&(M[l]=D.faceColorB[L]),D.faceColorC&&(x[l]=D.faceColorC[L]),n&&(D.faceInfo?S&&(S[l]=D.faceInfo[L]):S&&(S[l]=0)),i&&(D.facePriority?P&&(P[l]=D.facePriority[L]):P&&(P[l]=D.priorityVal)),r&&(D.faceAlpha?_&&(_[l]=D.faceAlpha[L]):_&&(_[l]=0)),o&&D.faceColor&&A&&(A[l]=D.faceColor[L]),l++;for(let L=0;L<D.texturedFaceCount;L++)y[c]=D.texturedVertexA[L]+R,E[c]=D.texturedVertexB[L]+R,C[c]=D.texturedVertexC[L]+R,c++}}const U=new ie({vertexCount:a,vertexX:d,vertexY:f,vertexZ:u,faceCount:l,faceVertexA:g,faceVertexB:v,faceVertexC:m,faceColorA:p,faceColorB:M,faceColorC:x,faceInfo:S,facePriority:P,faceAlpha:_,faceColor:A,priorityVal:h,texturedFaceCount:c,texturedVertexA:y,texturedVertexB:E,texturedVertexC:C});return U.calculateBoundsCylinder(),U}static modelFromModels(e,t,n){let i=!1,r=!1,o=!1,a=!1,l=0,c=0,h=0,d=-1;for(let R=0;R<t;R++){const L=e[R];L&&(l+=L.vertexCount,c+=L.faceCount,h+=L.texturedFaceCount,i||(i=L.faceInfo!==null),L.facePriority?r=!0:(d===-1&&(d=L.priorityVal),d!==L.priorityVal&&(r=!0)),o||(o=L.faceAlpha!==null),a||(a=L.faceLabel!==null))}const f=new Int32Array(l),u=new Int32Array(l),g=new Int32Array(l),v=new Int32Array(l),m=new Int32Array(c),p=new Int32Array(c),M=new Int32Array(c),x=new Int32Array(h),y=new Int32Array(h),E=new Int32Array(h);let C=null;i&&(C=new Int32Array(c));let S=null;r&&(S=new Int32Array(c));let P=null;o&&(P=new Int32Array(c));let _=null;a&&(_=new Int32Array(c));const A=new Int32Array(c),U=[];l=0,c=0,h=0;const F=(R,L,V,Z,K,W,j)=>{let $=-1;const N=R.vertexX[L],z=R.vertexY[L],Y=R.vertexZ[L];for(let J=0;J<j;J++)if(N===V[J]&&z===Z[J]&&Y===K[J]){$=J;break}return $===-1&&(V[j]=N,Z[j]=z,K[j]=Y,W&&R.vertexLabel&&(W[j]=R.vertexLabel[L]),$=j++),{vertex:$,vertexCount:j}};for(let R=0;R<t;R++){const L=e[R];if(L){const V=l,Z=c,K=h,W=new Map;for(let $=0;$<L.faceCount;$++){i&&(L.faceInfo?C&&(C[c]=L.faceInfo[$]):C&&(C[c]=0)),r&&(L.facePriority?S&&(S[c]=L.facePriority[$]):S&&(S[c]=L.priorityVal)),o&&(L.faceAlpha?P&&(P[c]=L.faceAlpha[$]):P&&(P[c]=0)),a&&L.faceLabel&&_&&(_[c]=L.faceLabel[$]),L.faceColor&&(A[c]=L.faceColor[$]);const N=F(L,L.faceVertexA[$],f,u,g,v,l);W.has(L.faceVertexA[$])||W.set(L.faceVertexA[$],N.vertex),l=N.vertexCount;const z=F(L,L.faceVertexB[$],f,u,g,v,l);W.has(L.faceVertexB[$])||W.set(L.faceVertexB[$],z.vertex),l=z.vertexCount;const Y=F(L,L.faceVertexC[$],f,u,g,v,l);W.has(L.faceVertexC[$])||W.set(L.faceVertexC[$],Y.vertex),l=Y.vertexCount,m[c]=N.vertex,p[c]=z.vertex,M[c]=Y.vertex,c++}for(let $=0;$<L.texturedFaceCount;$++){const N=F(L,L.texturedVertexA[$],f,u,g,v,l);W.has(L.texturedVertexA[$])||W.set(L.texturedVertexA[$],N.vertex),l=N.vertexCount;const z=F(L,L.texturedVertexB[$],f,u,g,v,l);W.has(L.texturedVertexB[$])||W.set(L.texturedVertexB[$],z.vertex),l=z.vertexCount;const Y=F(L,L.texturedVertexC[$],f,u,g,v,l);W.has(L.texturedVertexC[$])||W.set(L.texturedVertexC[$],Y.vertex),l=Y.vertexCount,x[h]=N.vertex,y[h]=z.vertex,E[h]=Y.vertex,h++}const j=n&&n[R]?n[R]:`part_${R}`;U.push({partIndex:R,originalModel:L,originalModelName:j,vertexOffset:V,vertexCount:l-V,faceOffset:Z,faceCount:c-Z,texturedFaceOffset:K,texturedFaceCount:h-K,vertexMapping:W})}}const D=new ie({vertexCount:l,vertexX:f,vertexY:u,vertexZ:g,faceCount:c,faceVertexA:m,faceVertexB:p,faceVertexC:M,faceColorA:null,faceColorB:null,faceColorC:null,faceInfo:C,facePriority:S,faceAlpha:P,faceColor:A,priorityVal:d,texturedFaceCount:h,texturedVertexA:x,texturedVertexB:y,texturedVertexC:E,vertexLabel:v,faceLabel:_});return D.partMapping={parts:U,isNpcModel:!1},D.faceColor&&(D.originalFaceColor=new Int32Array(D.faceColor)),D}static modelFromNpcModels(e,t,n,i){const r=ie.modelFromModels(e,t,i);return r.partMapping&&(r.partMapping.isNpcModel=!0,r.partMapping.npcId=n),r}exportNpcParts(){if(!this.partMapping||!this.partMapping.isNpcModel)return null;const e=new Map;for(const t of this.partMapping.parts){const n=this.extractModelPart(t);if(n){const i=n.exportToOb2();e.set(t.partIndex,i)}}return e}extractModelPart(e){return this.partMapping?e.originalModel.clone():null}updateVertex(e,t,n,i){e>=0&&e<this.vertexCount&&(this.vertexX[e]=t,this.vertexY[e]=n,this.vertexZ[e]=i,this.currentScaleX!==128||this.currentScaleY!==128||this.currentScaleZ!==128?(this.originalVertexX[e]=t*128/this.baseScaleX|0,this.originalVertexY[e]=n*128/this.baseScaleY|0,this.originalVertexZ[e]=i*128/this.baseScaleZ|0):(this.originalVertexX[e]=t,this.originalVertexY[e]=n,this.originalVertexZ[e]=i),this.partMapping&&this.partMapping.isNpcModel&&this.updateAllPartVertices())}updateAllPartVertices(){if(this.partMapping)for(const e of this.partMapping.parts)this.updatePartVertices(e)}updatePartVertices(e){for(const[t,n]of e.vertexMapping)n<this.vertexCount&&(e.originalModel.vertexX[t]=this.vertexX[n],e.originalModel.vertexY[t]=this.vertexY[n],e.originalModel.vertexZ[t]=this.vertexZ[n]);e.originalModel.originalVertexX=new Int32Array(e.originalModel.vertexX),e.originalModel.originalVertexY=new Int32Array(e.originalModel.vertexY),e.originalModel.originalVertexZ=new Int32Array(e.originalModel.vertexZ)}calculateBoundsCylinder(){this.maxY=0,this.radius=0,this.minY=0;for(let e=0;e<this.vertexCount;e++){const t=this.vertexX[e],n=this.vertexY[e],i=this.vertexZ[e];-n>this.maxY&&(this.maxY=-n),n>this.minY&&(this.minY=n);const r=t*t+i*i;r>this.radius&&(this.radius=r)}this.radius=Math.sqrt(this.radius)+.99|0,this.minDepth=Math.sqrt(this.radius*this.radius+this.maxY*this.maxY)+.99|0,this.maxDepth=this.minDepth+(Math.sqrt(this.radius*this.radius+this.minY*this.minY)+.99|0)}calculateBoundsY(){this.maxY=0,this.minY=0;for(let e=0;e<this.vertexCount;e++){const t=this.vertexY[e];-t>this.maxY&&(this.maxY=-t),t>this.minY&&(this.minY=t)}this.minDepth=Math.sqrt(this.radius*this.radius+this.maxY*this.maxY)+.99|0,this.maxDepth=this.minDepth+(Math.sqrt(this.radius*this.radius+this.minY*this.minY)+.99|0)}createLabelReferences(){if(this.vertexLabel){const e=new Int32Array(256);let t=0;for(let i=0;i<this.vertexCount;i++){const r=this.vertexLabel[i];e[r]++,r>t&&(t=r)}this.labelVertices=new Kt(t+1,null);for(let i=0;i<=t;i++)this.labelVertices[i]=new Int32Array(e[i]),e[i]=0;let n=0;for(;n<this.vertexCount;){const i=this.vertexLabel[n],r=this.labelVertices[i];r&&(r[e[i]++]=n++)}this.vertexLabel=null}if(this.faceLabel){const e=new Int32Array(256);let t=0;for(let i=0;i<this.faceCount;i++){const r=this.faceLabel[i];e[r]++,r>t&&(t=r)}this.labelFaces=new Kt(t+1,null);for(let i=0;i<=t;i++)this.labelFaces[i]=new Int32Array(e[i]),e[i]=0;let n=0;for(;n<this.faceCount;){const i=this.faceLabel[n],r=this.labelFaces[i];r&&(r[e[i]++]=n++)}this.faceLabel=null}}applyTransforms(e,t,n){if(e!==-1)if(!n||t===-1)this.applyTransform(e);else{const i=et.instances[e],r=et.instances[t],o=i.base;ie.baseX=0,ie.baseY=0,ie.baseZ=0;let a=0,l=n[a++];for(let c=0;c<i.frameLength;c++){if(!i.bases)continue;const h=i.bases[c];for(;h>l;)l=n[a++];o&&o.animTypes&&i.x&&i.y&&i.z&&o.animLabels&&(h!==l||o.animTypes[h]===0)&&this.applyTransform2(i.x[c],i.y[c],i.z[c],o.animLabels[h],o.animTypes[h])}ie.baseX=0,ie.baseY=0,ie.baseZ=0,a=0,l=n[a++];for(let c=0;c<r.frameLength;c++){if(!r.bases)continue;const h=r.bases[c];for(;h>l;)l=n[a++];o&&o.animTypes&&r.x&&r.y&&r.z&&o.animLabels&&(h===l||o.animTypes[h]===0)&&this.applyTransform2(r.x[c],r.y[c],r.z[c],o.animLabels[h],o.animTypes[h])}}}applyTransform(e){if(!this.labelVertices||e===-1||!et.instances[e])return;const t=et.instances[e],n=t.base;ie.baseX=0,ie.baseY=0,ie.baseZ=0;for(let i=0;i<t.frameLength;i++){if(!t.bases||!t.x||!t.y||!t.z||!n||!n.animLabels||!n.animTypes)continue;const r=t.bases[i];this.applyTransform2(t.x[i],t.y[i],t.z[i],n.animLabels[r],n.animTypes[r])}}rotateY90(){for(let e=0;e<this.vertexCount;e++){const t=this.vertexX[e];this.vertexX[e]=this.vertexZ[e],this.vertexZ[e]=-t}}rotateX(e){const t=ot.sin[e],n=ot.cos[e];for(let i=0;i<this.vertexCount;i++){const r=this.vertexY[i]*n-this.vertexZ[i]*t>>16;this.vertexZ[i]=this.vertexY[i]*t+this.vertexZ[i]*n>>16,this.vertexY[i]=r}}translateModel(e,t,n){for(let i=0;i<this.vertexCount;i++)this.vertexX[i]+=t,this.vertexY[i]+=e,this.vertexZ[i]+=n}recolor(e,t){if(this.faceColor)for(let n=0;n<this.faceCount;n++)this.faceColor[n]===e&&(this.faceColor[n]=t)}rotateY180(){for(let e=0;e<this.vertexCount;e++)this.vertexZ[e]=-this.vertexZ[e];for(let e=0;e<this.faceCount;e++){const t=this.faceVertexA[e];this.faceVertexA[e]=this.faceVertexC[e],this.faceVertexC[e]=t}}scale(e,t,n){this.currentScaleX=e,this.currentScaleY=t,this.currentScaleZ=n,this.baseScaleX===128&&this.baseScaleY===128&&this.baseScaleZ===128&&(this.baseScaleX=e,this.baseScaleY=t,this.baseScaleZ=n);for(let i=0;i<this.vertexCount;i++)this.vertexX[i]=this.vertexX[i]*e/128|0,this.vertexY[i]=this.vertexY[i]*t/128|0,this.vertexZ[i]=this.vertexZ[i]*n/128|0}calculateNormals(e,t,n,i,r,o){const a=Math.sqrt(n*n+i*i+r*r)|0,l=t*a>>8;if((!this.faceColorA||!this.faceColorB||!this.faceColorC)&&(this.faceColorA=new Int32Array(this.faceCount),this.faceColorB=new Int32Array(this.faceCount),this.faceColorC=new Int32Array(this.faceCount)),!this.vertexNormal){this.vertexNormal=new Kt(this.vertexCount,null);for(let c=0;c<this.vertexCount;c++)this.vertexNormal[c]=new Si}for(let c=0;c<this.faceCount;c++){const h=this.faceVertexA[c],d=this.faceVertexB[c],f=this.faceVertexC[c],u=this.vertexX[d]-this.vertexX[h],g=this.vertexY[d]-this.vertexY[h],v=this.vertexZ[d]-this.vertexZ[h],m=this.vertexX[f]-this.vertexX[h],p=this.vertexY[f]-this.vertexY[h],M=this.vertexZ[f]-this.vertexZ[h];let x=g*M-p*v,y=v*m-M*u,E=u*p-m*g;for(;x>8192||y>8192||E>8192||x<-8192||y<-8192||E<-8192;)x>>=1,y>>=1,E>>=1;let C=Math.sqrt(x*x+y*y+E*E)|0;if(C<=0&&(C=1),x=x*256/C|0,y=y*256/C|0,E=E*256/C|0,!this.faceInfo||!(this.faceInfo[c]&1)){let S=this.vertexNormal[h];S&&(S.x+=x,S.y+=y,S.z+=E,S.w++),S=this.vertexNormal[d],S&&(S.x+=x,S.y+=y,S.z+=E,S.w++),S=this.vertexNormal[f],S&&(S.x+=x,S.y+=y,S.z+=E,S.w++)}else{const S=e+((n*x+i*y+r*E)/(l+(l/2|0))|0);this.faceColor&&(this.faceColorA[c]=ie.mulColorLightness(this.faceColor[c],S,this.faceInfo[c]))}}if(o)this.applyLighting(e,l,n,i,r);else{this.vertexNormalOriginal=new Kt(this.vertexCount,null);for(let c=0;c<this.vertexCount;c++){const h=this.vertexNormal[c],d=new Si;h&&(d.x=h.x,d.y=h.y,d.z=h.z,d.w=h.w),this.vertexNormalOriginal[c]=d}}o?this.calculateBoundsCylinder():this.calculateBoundsAABB()}applyLighting(e,t,n,i,r){for(let o=0;o<this.faceCount;o++){const a=this.faceVertexA[o],l=this.faceVertexB[o],c=this.faceVertexC[o];if(!this.faceInfo&&this.faceColor&&this.vertexNormal&&this.faceColorA&&this.faceColorB&&this.faceColorC){const h=this.faceColor[o],d=this.vertexNormal[a];d&&(this.faceColorA[o]=ie.mulColorLightness(h,e+((n*d.x+i*d.y+r*d.z)/(t*d.w)|0),0));const f=this.vertexNormal[l];f&&(this.faceColorB[o]=ie.mulColorLightness(h,e+((n*f.x+i*f.y+r*f.z)/(t*f.w)|0),0));const u=this.vertexNormal[c];u&&(this.faceColorC[o]=ie.mulColorLightness(h,e+((n*u.x+i*u.y+r*u.z)/(t*u.w)|0),0))}else if(this.faceInfo&&!(this.faceInfo[o]&1)&&this.faceColor&&this.vertexNormal&&this.faceColorA&&this.faceColorB&&this.faceColorC){const h=this.faceColor[o],d=this.faceInfo[o],f=this.vertexNormal[a];f&&(this.faceColorA[o]=ie.mulColorLightness(h,e+((n*f.x+i*f.y+r*f.z)/(t*f.w)|0),d));const u=this.vertexNormal[l];u&&(this.faceColorB[o]=ie.mulColorLightness(h,e+((n*u.x+i*u.y+r*u.z)/(t*u.w)|0),d));const g=this.vertexNormal[c];g&&(this.faceColorC[o]=ie.mulColorLightness(h,e+((n*g.x+i*g.y+r*g.z)/(t*g.w)|0),d))}}if(this.vertexNormal=null,this.vertexNormalOriginal=null,this.vertexLabel=null,this.faceLabel=null,this.faceInfo){for(let o=0;o<this.faceCount;o++)if((this.faceInfo[o]&2)===2)return}}static rgb15to24(e){const t=e>>10&31,n=e>>5&31,i=e&31;return(t<<3<<16)+(n<<3<<8)+(i<<3)}applyTransform2(e,t,n,i,r){if(!i)return;const o=i.length;if(r===0){let a=0;ie.baseX=0,ie.baseY=0,ie.baseZ=0;for(let l=0;l<o;l++){if(!this.labelVertices)continue;const c=i[l];if(c<this.labelVertices.length){const h=this.labelVertices[c];if(h)for(let d=0;d<h.length;d++){const f=h[d];ie.baseX+=this.vertexX[f],ie.baseY+=this.vertexY[f],ie.baseZ+=this.vertexZ[f],a++}}}a>0?(ie.baseX=(ie.baseX/a|0)+e,ie.baseY=(ie.baseY/a|0)+t,ie.baseZ=(ie.baseZ/a|0)+n):(ie.baseX=e,ie.baseY=t,ie.baseZ=n)}else if(r===1)for(let a=0;a<o;a++){const l=i[a];if(!this.labelVertices||l>=this.labelVertices.length)continue;const c=this.labelVertices[l];if(c)for(let h=0;h<c.length;h++){const d=c[h];this.vertexX[d]+=e,this.vertexY[d]+=t,this.vertexZ[d]+=n}}else if(r===2)for(let a=0;a<o;a++){const l=i[a];if(!this.labelVertices||l>=this.labelVertices.length)continue;const c=this.labelVertices[l];if(c)for(let h=0;h<c.length;h++){const d=c[h];this.vertexX[d]-=ie.baseX,this.vertexY[d]-=ie.baseY,this.vertexZ[d]-=ie.baseZ;const f=(e&255)*8,u=(t&255)*8,g=(n&255)*8;let v,m;if(g!==0){v=ot.sin[g],m=ot.cos[g];const p=this.vertexY[d]*v+this.vertexX[d]*m>>16;this.vertexY[d]=this.vertexY[d]*m-this.vertexX[d]*v>>16,this.vertexX[d]=p}if(f!==0){v=ot.sin[f],m=ot.cos[f];const p=this.vertexY[d]*m-this.vertexZ[d]*v>>16;this.vertexZ[d]=this.vertexY[d]*v+this.vertexZ[d]*m>>16,this.vertexY[d]=p}if(u!==0){v=ot.sin[u],m=ot.cos[u];const p=this.vertexZ[d]*v+this.vertexX[d]*m>>16;this.vertexZ[d]=this.vertexZ[d]*m-this.vertexX[d]*v>>16,this.vertexX[d]=p}this.vertexX[d]+=ie.baseX,this.vertexY[d]+=ie.baseY,this.vertexZ[d]+=ie.baseZ}}else if(r===3)for(let a=0;a<o;a++){const l=i[a];if(!this.labelVertices||l>=this.labelVertices.length)continue;const c=this.labelVertices[l];if(c)for(let h=0;h<c.length;h++){const d=c[h];this.vertexX[d]-=ie.baseX,this.vertexY[d]-=ie.baseY,this.vertexZ[d]-=ie.baseZ,this.vertexX[d]=this.vertexX[d]*e/128|0,this.vertexY[d]=this.vertexY[d]*t/128|0,this.vertexZ[d]=this.vertexZ[d]*n/128|0,this.vertexX[d]+=ie.baseX,this.vertexY[d]+=ie.baseY,this.vertexZ[d]+=ie.baseZ}}else if(r===5&&this.labelFaces&&this.faceAlpha)for(let a=0;a<o;a++){const l=i[a];if(l>=this.labelFaces.length)continue;const c=this.labelFaces[l];if(c)for(let h=0;h<c.length;h++){const d=c[h];this.faceAlpha[d]+=e*8,this.faceAlpha[d]<0&&(this.faceAlpha[d]=0),this.faceAlpha[d]>255&&(this.faceAlpha[d]=255)}}}calculateBoundsAABB(){this.maxY=0,this.radius=0,this.minY=0,this.minX=999999,this.maxX=-999999,this.maxZ=-99999,this.minZ=99999;for(let e=0;e<this.vertexCount;e++){const t=this.vertexX[e],n=this.vertexY[e],i=this.vertexZ[e];t<this.minX&&(this.minX=t),t>this.maxX&&(this.maxX=t),i<this.minZ&&(this.minZ=i),i>this.maxZ&&(this.maxZ=i),-n>this.maxY&&(this.maxY=-n),n>this.minY&&(this.minY=n);const r=t*t+i*i;r>this.radius&&(this.radius=r)}this.radius=Math.sqrt(this.radius)|0,this.minDepth=Math.sqrt(this.radius*this.radius+this.maxY*this.maxY)|0,this.maxDepth=this.minDepth+(Math.sqrt(this.radius*this.radius+this.minY*this.minY)|0)}clone(){const e={vertexCount:this.vertexCount,vertexX:new Int32Array(this.vertexX),vertexY:new Int32Array(this.vertexY),vertexZ:new Int32Array(this.vertexZ),faceCount:this.faceCount,faceVertexA:new Int32Array(this.faceVertexA),faceVertexB:new Int32Array(this.faceVertexB),faceVertexC:new Int32Array(this.faceVertexC),faceColorA:this.faceColorA?new Int32Array(this.faceColorA):null,faceColorB:this.faceColorB?new Int32Array(this.faceColorB):null,faceColorC:this.faceColorC?new Int32Array(this.faceColorC):null,faceInfo:this.faceInfo?new Int32Array(this.faceInfo):null,facePriority:this.facePriority?new Int32Array(this.facePriority):null,faceAlpha:this.faceAlpha?new Int32Array(this.faceAlpha):null,faceColor:this.faceColor?new Int32Array(this.faceColor):null,priorityVal:this.priorityVal,texturedFaceCount:this.texturedFaceCount,texturedVertexA:new Int32Array(this.texturedVertexA),texturedVertexB:new Int32Array(this.texturedVertexB),texturedVertexC:new Int32Array(this.texturedVertexC),minX:this.minX,maxX:this.maxX,minZ:this.minZ,maxZ:this.maxZ,radius:this.radius,minY:this.minY,maxY:this.maxY,maxDepth:this.maxDepth,minDepth:this.minDepth,vertexLabel:this.vertexLabel?new Int32Array(this.vertexLabel):null,faceLabel:this.faceLabel?new Int32Array(this.faceLabel):null,labelVertices:null,labelFaces:null,vertexNormal:null,vertexNormalOriginal:null},t=new ie(e);if(t.currentScaleX=this.currentScaleX,t.currentScaleY=this.currentScaleY,t.currentScaleZ=this.currentScaleZ,t.baseScaleX=this.baseScaleX,t.baseScaleY=this.baseScaleY,t.baseScaleZ=this.baseScaleZ,this.partMapping&&(t.partMapping={parts:this.partMapping.parts.map(n=>({...n,originalModel:n.originalModel.clone(),vertexMapping:new Map(n.vertexMapping)})),isNpcModel:this.partMapping.isNpcModel,npcId:this.partMapping.npcId}),t.originalVertexX=new Int32Array(this.originalVertexX),t.originalVertexY=new Int32Array(this.originalVertexY),t.originalVertexZ=new Int32Array(this.originalVertexZ),this.originalFaceColor?t.originalFaceColor=new Int32Array(this.originalFaceColor):this.faceColor&&(t.originalFaceColor=new Int32Array(this.faceColor)),this.labelVertices&&(t.labelVertices=this.labelVertices.map(n=>n?new Int32Array(n):null)),this.labelFaces&&(t.labelFaces=this.labelFaces.map(n=>n?new Int32Array(n):null)),this.vertexNormal&&(t.vertexNormal=this.vertexNormal.map(n=>{if(n){const i=new Si;return i.x=n.x,i.y=n.y,i.z=n.z,i.w=n.w,i}return null})),this.vertexNormalOriginal&&(t.vertexNormalOriginal=this.vertexNormalOriginal.map(n=>{if(n){const i=new Si;return i.x=n.x,i.y=n.y,i.z=n.z,i.w=n.w,i}return null})),t.objRaise=this.objRaise,t.pickable=this.pickable,t.pickedFace=this.pickedFace,t.pickedFaceDepth=this.pickedFaceDepth,t.faceTextures.set(this.faceTextures),t.textureCoords.set(this.textureCoords),this.uvCoords)for(let n=0;n<t.faceCount;n++)this.uvCoords[n]&&t.uvCoords[n]&&t.uvCoords[n].set(this.uvCoords[n]);return t.hadOriginalFaceLabels=this.hadOriginalFaceLabels,t.hadOriginalVertexLabels=this.hadOriginalVertexLabels,t.hadOriginalFacePriorities=this.hadOriginalFacePriorities,t.hadOriginalFaceAlphas=this.hadOriginalFaceAlphas,t.hadOriginalFaceInfos=this.hadOriginalFaceInfos,t}};ie.modelMeta=null,ie.faceClippedX=new Kt(4096,!1),ie.faceNearClipped=new Kt(4096,!1),ie.vertexScreenX=new Int32Array(4096),ie.vertexScreenY=new Int32Array(4096),ie.vertexScreenZ=new Int32Array(4096),ie.vertexViewSpaceX=new Int32Array(4096),ie.vertexViewSpaceY=new Int32Array(4096),ie.vertexViewSpaceZ=new Int32Array(4096),ie.tmpDepthFaceCount=new Int32Array(1500),ie.tmpDepthFaces=new pr(1500,512),ie.tmpPriorityFaceCount=new Int32Array(12),ie.tmpPriorityFaces=new pr(12,2e3),ie.tmpPriority10FaceDepth=new Int32Array(2e3),ie.tmpPriority11FaceDepth=new Int32Array(2e3),ie.tmpPriorityDepthSum=new Int32Array(12),ie.clippedX=new Int32Array(10),ie.clippedY=new Int32Array(10),ie.clippedColor=new Int32Array(10),ie.baseX=0,ie.baseY=0,ie.baseZ=0,ie.checkHover=!1,ie.mouseX=0,ie.mouseY=0,ie.pickedCount=0,ie.picked=new Int32Array(1e3),ie.checkHoverFace=!1;let ui=ie;const cn=class cn{static hsl24to16(e,t,n){return n>243?t>>=4:n>217?t>>=3:n>192?t>>=2:n>179&&(t>>=1),((e&255)>>2<<10)+(t>>5<<7)+(n>>1)}static rgb15to24(e){const t=e>>10&31,n=e>>5&31,i=e&31;return(t<<3<<16)+(n<<3<<8)+(i<<3)}static rgb15toHsl16(e){const t=e>>10&31,n=e>>5&31,i=e&31,r=t/31,o=n/31,a=i/31;return cn.rgbToHsl(r,o,a)}static rgb24to15(e){const t=e>>16&255,n=e>>8&255,i=e&255;return(t>>3<<10)+(n>>3<<5)+(i>>3)}static rgb24toHsl16(e){const t=e>>16&255,n=e>>8&255,i=e&255,r=t/256,o=n/256,a=i/256;return cn.rgbToHsl(r,o,a)}static rgbToHsl(e,t,n){let i=e;t<i&&(i=t),n<i&&(i=n);let r=e;t>r&&(r=t),n>r&&(r=n);let o=0,a=0;const l=(i+r)/2;i!==r&&(l<.5?a=(r-i)/(r+i):l>=.5&&(a=(r-i)/(2-r-i)),e===r?o=(t-n)/(r-i):t===r?o=(n-e)/(r-i)+2:n===r&&(o=(e-t)/(r-i)+4)),o/=6;const c=o*256|0;let h=a*256|0,d=l*256|0;return h<0?h=0:h>255&&(h=255),d<0?d=0:d>255&&(d=255),cn.hsl24to16(c,h,d)}static reverseHsl(e){const t=[];for(let n=0;n<32768;n++)cn.RGB15_HSL16[n]===e&&t.push(n);return t}};cn.RGB15_HSL16=new Int32Array(32768),(()=>{for(let e=0;e<32768;e++)cn.RGB15_HSL16[e]=cn.rgb15toHsl16(e)})();let hn=cn;class Jo{constructor(){this.availableFiles=new Map,this.loadedModels=new Map,this.npcData=new Map,this.seqData=new Map,this.availableTextures=new Map,this.textureNameToId=new Map,this.objData=new Map,this.locData=new Map}async parseNpcFile(e){const t=await this.readFileAsText(e),n=new Map;let i=null,r=new Map,o=new Map,a=null,l=null,c=128,h=128,d=1;const f=t.split(`
`);for(let u of f){if(u=u.trim(),!u||u.startsWith("//"))continue;const g=u.match(/\[(.*?)\]/);if(g)this.saveNpcData(n,i,r,o,a,l,c,h,d),i=g[1],r.clear(),o.clear(),a=null,l=null,d=1,c=128,h=128;else if(u.startsWith("name="))a=u.substring(5).trim();else if(u.startsWith("size="))d=parseInt(u.substring(5).trim());else if(u.startsWith("desc="))l=u.substring(5).trim();else if(u.startsWith("resizeh="))c=parseInt(u.substring(8).trim());else if(u.startsWith("resizev="))h=parseInt(u.substring(8).trim());else if(u.startsWith("recol")){const v=u.match(/recol(\d+)([sd])=(\d+)/);if(v){const m=parseInt(v[1]),p=v[2],M=parseInt(v[3]);o.has(m)||o.set(m,[0,0]);const x=o.get(m);x&&p==="s"?x[0]=hn.rgb15toHsl16(M):x&&p==="d"&&(x[1]=hn.rgb15toHsl16(M))}}else if(u.startsWith("model")){const v=u.match(/model(\d+)=(.+)/);if(v){const m=parseInt(v[1]),p=v[2].trim();r.set(m,p)}}}return this.saveNpcData(n,i,r,o,a,l,c,h,d),n}saveNpcData(e,t,n,i,r,o,a,l,c){if(t!==null){const h={resizeh:a,resizev:l,size:c};if(n.size>0){const d=Math.max(...n.keys()),f=new Array(d);for(let u=1;u<=d;u++)n.has(u)&&(f[u-1]=n.get(u));h.models=f.filter(u=>u!==void 0)}if(i.size>0){const d={};for(let[f,u]of i.entries())d[f]=[...u];h.recols=d}r!==null&&(h.name=r),o!==null&&(h.desc=o),h.resizeh=a,h.resizev=l,h.size=c,e.set(t,h)}}async parseObjFile(e){const t=await this.readFileAsText(e),n=new Map;let i=null,r=null,o=new Map,a=null,l=null;const c=t.split(/\r?\n/);for(let h of c){if(h=h.trim(),!h||h.startsWith("//"))continue;const d=h.match(/\[(.*?)\]/);if(d)i&&this.saveObjData(n,i,r,o,a,l),i=d[1],r=null,o.clear(),a=null,l=null;else if(i){if(h.startsWith("name="))a=h.substring(5).trim();else if(h.startsWith("desc="))l=h.substring(5).trim();else if(h.startsWith("model="))r=h.substring(6).trim();else if(h.startsWith("recol")){const f=h.match(/recol(\d+)([sd])=(\d+)/);if(f){const u=parseInt(f[1]),g=f[2],v=parseInt(f[3]);o.has(u)||o.set(u,[0,0]);const m=o.get(u);m&&g==="s"?m[0]=hn.rgb15toHsl16(v):m&&g==="d"&&(m[1]=hn.rgb15toHsl16(v))}}}}return i&&this.saveObjData(n,i,r,o,a,l),n}saveObjData(e,t,n,i,r,o){if(t!==null){const a={};if(n!==null&&(a.model=n),i.size>0){const l={};for(let[c,h]of i.entries())l[c]=[...h];a.recols=l}r!==null&&(a.name=r),o!==null&&(a.desc=o),e.set(t,a)}}async parseLocFile(e){const t=await this.readFileAsText(e),n=new Map;let i=null,r=null,o=null,a=null,l=new Map,c=new Map,h=1,d=1,f=!1,u=!1,g=!0,v=0,m=16,p=0,M=0,x=!1,y=0,E=!1,C=!1,S=128,P=128,_=128,A=0,U=0,F=0,D=!1,R=!1,L=0,V=null,Z=null,K=null,W=null,j=null;const $=t.split(/\r?\n/);for(let N of $){if(N=N.trim(),!N||N.startsWith("//"))continue;const z=N.match(/\[(.*?)\]/);if(z)i&&this.saveLocData(n,i,r,o,a,l,c,h,d,f,u,g,v,m,p,M,x,y,E,C,S,P,_,A,U,F,D,R,L,V,Z,K,W,j),i=z[1],r=null,o=null,a=null,l.clear(),c.clear(),h=1,d=1,f=!1,u=!1,g=!0,v=0,m=16,p=0,M=0,x=!1,y=0,E=!1,C=!1,S=128,P=128,_=128,A=0,U=0,F=0,D=!1,R=!1,L=0,V=null,Z=null,K=null,W=null,j=null;else if(i){if(N.startsWith("name="))r=N.substring(5).trim();else if(N.startsWith("desc="))o=N.substring(5).trim();else if(N.startsWith("model="))a=N.substring(6).trim();else if(N.startsWith("width="))h=parseInt(N.substring(6).trim())||1;else if(N.startsWith("length="))d=parseInt(N.substring(7).trim())||1;else if(N.startsWith("hillskew="))f=N.substring(9).trim().toLowerCase()==="yes";else if(N.startsWith("sharelight="))u=N.substring(11).trim().toLowerCase()==="yes";else if(N.startsWith("occlude="))g=N.substring(8).trim().toLowerCase()!=="no";else if(N.startsWith("anim="))v=parseInt(N.substring(5).trim())||0;else if(N.startsWith("wallwidth="))m=parseInt(N.substring(10).trim())||16;else if(N.startsWith("ambient="))p=parseInt(N.substring(8).trim())||0;else if(N.startsWith("contrast="))M=parseInt(N.substring(9).trim())||0;else if(N.startsWith("mapfunction="))y=parseInt(N.substring(12).trim())||0;else if(N.startsWith("mirror="))E=N.substring(7).trim().toLowerCase()==="yes";else if(N.startsWith("resizex="))S=parseInt(N.substring(8).trim())||128;else if(N.startsWith("resizey="))P=parseInt(N.substring(8).trim())||128;else if(N.startsWith("resizez="))_=parseInt(N.substring(8).trim())||128;else if(N.startsWith("offsetx="))A=parseInt(N.substring(8).trim())||0;else if(N.startsWith("offsety="))U=parseInt(N.substring(8).trim())||0;else if(N.startsWith("offsetz="))F=parseInt(N.substring(8).trim())||0;else if(N.startsWith("forcedecor="))D=N.substring(11).trim().toLowerCase()==="yes";else if(N.startsWith("active="))R=N.substring(7).trim().toLowerCase()==="yes";else if(N.startsWith("mapscene="))L=parseInt(N.substring(9).trim())||0;else if(N.startsWith("op1="))V=N.substring(4).trim();else if(N.startsWith("op2="))Z=N.substring(4).trim();else if(N.startsWith("category="))K=N.substring(9).trim();else if(N.startsWith("blockrange="))W=N.substring(11).trim().toLowerCase()!=="yes";else if(N.startsWith("forceapproach="))j=N.substring(14).trim();else if(N.startsWith("recol")){const Y=N.match(/recol(\d+)([sd])=(\d+)/);if(Y){const J=parseInt(Y[1]),re=Y[2],ue=parseInt(Y[3]);l.has(J)||l.set(J,[0,0]);const xe=l.get(J);xe&&re==="s"?xe[0]=hn.rgb15toHsl16(ue):xe&&re==="d"&&(xe[1]=hn.rgb15toHsl16(ue))}}else if(N.startsWith("retex")){const Y=N.match(/retex(\d+)([sd])=(.+)/);if(Y){const J=parseInt(Y[1]),re=Y[2],ue=Y[3].trim();c.has(J)||c.set(J,[null,null]);const xe=c.get(J);xe&&re==="s"?xe[0]=ue:xe&&re==="d"&&(xe[1]=ue)}}}}return i&&this.saveLocData(n,i,r,o,a,l,c,h,d,f,u,g,v,m,p,M,x,y,E,C,S,P,_,A,U,F,D,R,L,V,Z,K,W,j),n}saveLocData(e,t,n,i,r,o,a,l,c,h,d,f,u,g,v,m,p,M,x,y,E,C,S,P,_,A,U,F,D,R,L,V,Z,K){if(t!==null){const W={width:l,length:c,hillskew:h,sharelight:d,occlude:f,anim:u,wallwidth:g,ambient:v,contrast:m,animHasAlpha:p,mapfunction:M,mirror:x,shadow:y,resizex:E,resizey:C,resizez:S,offsetx:P,offsety:_,offsetz:A,forcedecor:U,active:F,mapscene:D};if(n!==null&&(W.name=n),i!==null&&(W.desc=i),r!==null&&(W.model=r),o.size>0){const j={};for(let[$,N]of o.entries())j[$]=[...N];W.recols=j}if(a.size>0){const j={};for(let[$,N]of a.entries())j[$]=[...N];W.retexs=j}R!==null&&(W.op1=R),L!==null&&(W.op2=L),V!==null&&(W.category=V),Z!==null&&(W.blockrange=Z),K!==null&&(W.forceapproach=K),e.set(t,W)}}async parseSeqFile(e){const t=await this.readFileAsText(e),n=new Map;let i=null,r=new Map,o=new Map,a=new Map,l,c,h=!1,d=0,f,u,g;const v=t.split(/\r?\n/);for(let m of v){if(m=m.trim(),!m||m.startsWith("//"))continue;const p=m.match(/\[(.*?)\]/);if(p)this.saveSeqData(n,i,r,o,a,l,c,h,d,f,u,g),i=p[1],r.clear(),o.clear(),a.clear(),l=void 0,c=void 0,h=!1,d=0,f=void 0,u=void 0,g=void 0;else if(i){const[M,...x]=m.split("="),y=x.join("=").trim();if(M.startsWith("frame")){const E=parseInt(M.substring(5));isNaN(E)||r.set(E,y)}else if(M.startsWith("iframe")){const E=parseInt(M.substring(6));isNaN(E)||o.set(E,y)}else if(M.startsWith("delay")){const E=parseInt(M.substring(5)),C=parseInt(y);!isNaN(E)&&!isNaN(C)&&a.set(E,C)}else M==="replayoff"?l=parseInt(y):M==="walkmerge"?c=y.split(",").map(E=>parseInt(E.trim())).filter(E=>!isNaN(E)):M==="stretches"?h=y.toLowerCase()==="yes"||y.toLowerCase()==="true":M==="priority"?d=parseInt(y):M==="righthand"?f=y:M==="lefthand"?u=y:M==="replaycount"&&(g=parseInt(y))}}return this.saveSeqData(n,i,r,o,a,l,c,h,d,f,u,g),n}saveSeqData(e,t,n,i,r,o,a,l,c,h,d,f){if(t===null)return;const u={};let g=0;if(n.size>0&&(g=Math.max(g,...n.keys())),i.size>0&&(g=Math.max(g,...i.keys())),r.size>0&&(g=Math.max(g,...r.keys())),g>0){u.frameIds=new Array(g),u.iframeIds=new Array(g),u.delayValues=new Array(g);for(let v=1;v<=g;v++)u.frameIds[v-1]=n.get(v),u.iframeIds[v-1]=i.get(v),u.delayValues[v-1]=r.get(v)}else u.frameIds=[],u.iframeIds=[],u.delayValues=[];o!==void 0&&!isNaN(o)&&(u.replayoff=o),a!==void 0&&a.length>0&&(u.walkmerge=a),l&&(u.stretches=l),c!==void 0&&!isNaN(c)&&(u.priority=c),h!==void 0&&(u.righthand=h),d!==void 0&&(u.lefthand=d),f!==void 0&&!isNaN(f)&&(u.replaycount=f),e.set(t,u)}async loadNpcModels(e){const t=this.getNpcData(e);if(!t||!t.models)throw new Error(`NPC ${e} has no models defined`);const n=[],i=[];for(const o of t.models)try{let a=null;for(const[c]of this.availableFiles.entries())if(c.includes(o)){a=c;break}if(!a){console.warn(`Model file not found for: ${o}`);continue}const l=await this.loadNpcPartModel(a);n.push(l),i.push(o)}catch(a){console.warn(`Failed to load model component ${o} for NPC ${e}:`,a)}if(n.length===0)throw new Error(`No models could be loaded for NPC ${e}`);const r=ui.modelFromNpcModels(n,n.length,e,i);if(t.recols)for(const o in t.recols){const[a,l]=t.recols[o];r.recolor(a,l)}return r.saveCurrentVerticesAsOriginal(),(t.resizeh!==128||t.resizev!==128)&&r.scale(t.resizeh,t.resizev,t.resizeh),r.processTextureCoordinates(),r.createLabelReferences(),r.calculateNormals(64,850,-30,-50,-30,!0),r}async loadContentFiles(e){this.textureNameToId.clear(),this.availableFiles.clear(),this.loadedModels.clear(),this.npcData.clear(),this.seqData.clear(),this.locData.clear(),this.objData.clear(),this.availableTextures.clear();const t=Array.from(e).filter(f=>f.name.toLowerCase().endsWith(".ob2")),n=Array.from(e).filter(f=>f.name.toLowerCase().endsWith(".pack")),i=Array.from(e).filter(f=>f.name.toLowerCase().endsWith(".npc")),r=Array.from(e).filter(f=>f.name.toLowerCase().endsWith(".obj")),o=Array.from(e).filter(f=>f.name.toLowerCase().endsWith(".loc")),a=Array.from(e).filter(f=>f.name.toLowerCase().endsWith(".seq")),l=Array.from(e).filter(f=>f.name.toLowerCase().endsWith(".anim")),c=Array.from(e).filter(f=>f.name.toLowerCase().endsWith(".base")),h=Array.from(e).filter(f=>f.name.toLowerCase().endsWith(".frame")),d=Array.from(e).filter(f=>f.name.toLowerCase().endsWith(".png"));for(const f of n)if(f.name.toLowerCase().includes("texture")){const g=(await f.text()).split(`
`);for(const v of g){const m=v.trim();if(m&&m.includes("=")){const[p,M]=m.split("="),x=parseInt(p.trim(),10),y=M.trim();!isNaN(x)&&y&&this.textureNameToId.set(y,x)}}}for(const f of t){const u=f.webkitRelativePath||f.name;if(!String(u).includes("_unpack")){const g=u.substring(u.indexOf("/models/")+8,u.lastIndexOf("."));this.availableFiles.set(g,f)}}for(const f of d){const u=f.webkitRelativePath||f.name;if(String(u).includes("/textures/")){const g=u.substring(u.lastIndexOf("/")+1,u.lastIndexOf("."));if(this.textureNameToId.has(g)){const v=this.textureNameToId.get(g);v!==void 0&&this.availableTextures.set(v,f)}}}for(const f of i)try{const u=await this.parseNpcFile(f);for(let[g,v]of u.entries())this.npcData.set(g,v)}catch(u){console.error(`Error processing NPC file ${f.name}:`,u)}for(const f of r)try{const u=await this.parseObjFile(f);for(let[g,v]of u.entries())this.objData.set(g,v)}catch(u){console.error(`Error processing OBJ file ${f.name}:`,u)}for(const f of o)try{const u=await this.parseLocFile(f);for(let[g,v]of u.entries())this.locData.set(g,v)}catch(u){console.error(`Error processing LOC file ${f.name}:`,u)}for(const f of a)try{const u=await this.parseSeqFile(f);for(let[g,v]of u.entries())this.seqData.set(g,v)}catch(u){console.error(`Error processing SEQ file ${f.name}:`,u)}for(const f of l)try{const u=f.name.split("_"),g=u[u.length-1],v=parseInt(g,10);await this.convertAnimset(v,f)}catch(u){console.error(`Error processing Animset file ${f.name}:`,u)}for(const f of c)try{const u=f.name.split("_"),g=u[u.length-1],v=parseInt(g,10);await this.convertBase(v,f)}catch(u){console.error(`Error processing Frame file ${f.name}:`,u)}for(const f of h)try{const u=f.name.split("_"),g=u[u.length-1],v=parseInt(g,10);await this.convertFrame(v,f)}catch(u){console.error(`Error processing Frame file ${f.name}:`,u)}}async loadModel(e){if(this.loadedModels.has(e)){const n=this.loadedModels.get(e);if(n)return n}const t=this.availableFiles.get(e);if(!t)throw new Error(`Model file not found: ${e}`);try{const n=await this.convertModel(t);return n.processTextureCoordinates(),n.createLabelReferences(),n.calculateNormals(64,768,-50,-10,-50,!0),n.saveCurrentVerticesAsOriginal(),this.loadedModels.set(e,n),n}catch(n){throw console.error(`Failed to load model '${e}': ${n}`),n}}async loadNpcPartModel(e){if(this.loadedModels.has("part_"+e)){const n=this.loadedModels.get("part_"+e);if(n)return n}const t=this.availableFiles.get(e);if(!t)throw new Error(`Model file not found for NPC part: ${e}`);try{const n=await this.convertModel(t);return this.loadedModels.set("part_"+e,n),n}catch(n){throw n}}async convertModel(e){const t=await this.readFileAsArrayBuffer(e),n=new Uint8Array(t),i=new ve(n);return ui.convertFromData(i)}async convertAnimset(e,t){const n=await this.readFileAsArrayBuffer(t),i=new Uint8Array(n);Jt.convertFromData(e,i)}async convertBase(e,t){const n=await this.readFileAsArrayBuffer(t),i=new Uint8Array(n),r=new ve(i);dn.convertFromData(e,r)}async convertFrame(e,t){const n=await this.readFileAsArrayBuffer(t),i=new Uint8Array(n),r=new ve(i);if(et.convertFromData(e,r),et.instances&&et.instances[e]){const o=et.instances[e];o.originalPath=t.webkitRelativePath||t.name,o.originalFileName=t.name}}getAvailableModels(){return Array.from(this.availableFiles.keys()).sort()}getLoadedModels(){return this.loadedModels}getNpcData(e){return this.npcData.get(e)}getAllNpcs(){return Array.from(this.npcData.keys()).sort()}getAllSeqs(){return Array.from(this.seqData.keys()).sort()}getSeqData(e){return this.seqData.get(e)}getObjData(e){return this.objData.get(e)}getAllObjs(){return Array.from(this.objData.keys()).sort()}getLocData(e){return this.locData.get(e)}getAllLocs(){return Array.from(this.locData.keys()).sort()}getTextureIdByName(e){return this.textureNameToId.get(e)}async readFileAsArrayBuffer(e){return new Promise((t,n)=>{const i=new FileReader;i.onload=r=>t(r.target.result),i.onerror=n,i.readAsArrayBuffer(e)})}async readFileAsText(e){return new Promise((t,n)=>{const i=new FileReader;i.onload=r=>t(r.target.result),i.onerror=n,i.readAsText(e)})}}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ys="160",Qo=0,zs=1,el=2,ho=1,tl=2,ln=3,An=0,Lt=1,qt=2,Sn=0,On=1,Hs=2,ks=3,Gs=4,nl=5,Fn=100,il=101,rl=102,Ws=103,Xs=104,sl=200,al=201,ol=202,ll=203,ls=204,cs=205,cl=206,hl=207,dl=208,fl=209,ul=210,pl=211,ml=212,gl=213,vl=214,xl=0,_l=1,Ml=2,mr=3,yl=4,Sl=5,bl=6,El=7,fo=0,Al=1,Tl=2,pn=0,wl=1,Cl=2,Ll=3,Rl=4,Il=5,Pl=6,uo=300,pi=301,mi=302,hs=303,ds=304,yr=306,Pi=1e3,Yt=1001,fs=1002,Tt=1003,qs=1004,Rr=1005,Ot=1006,Dl=1007,Di=1008,bn=1009,Fl=1010,Ul=1011,Ss=1012,po=1013,Mn=1014,yn=1015,Fi=1016,mo=1017,go=1018,Bn=1020,Nl=1021,zt=1023,Ol=1024,Bl=1025,Vn=1026,gi=1027,Vl=1028,vo=1029,zl=1030,xo=1031,_o=1033,Ir=33776,Pr=33777,Dr=33778,Fr=33779,Ys=35840,$s=35841,Zs=35842,js=35843,Mo=36196,Ks=37492,Js=37496,Qs=37808,ea=37809,ta=37810,na=37811,ia=37812,ra=37813,sa=37814,aa=37815,oa=37816,la=37817,ca=37818,ha=37819,da=37820,fa=37821,Ur=36492,ua=36494,pa=36495,Hl=36283,ma=36284,ga=36285,va=36286,yo=3e3,zn=3001,kl=3200,Gl=3201,Wl=0,Xl=1,Ht="",mt="srgb",en="srgb-linear",bs="display-p3",Sr="display-p3-linear",gr="linear",tt="srgb",vr="rec709",xr="p3",Gn=7680,xa=519,ql=512,Yl=513,$l=514,So=515,Zl=516,jl=517,Kl=518,Jl=519,us=35044,_a="300 es",ps=1035,un=2e3,_r=2001;class xi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Nr=Math.PI/180,ms=180/Math.PI;function En(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(xt[s&255]+xt[s>>8&255]+xt[s>>16&255]+xt[s>>24&255]+"-"+xt[e&255]+xt[e>>8&255]+"-"+xt[e>>16&15|64]+xt[e>>24&255]+"-"+xt[t&63|128]+xt[t>>8&255]+"-"+xt[t>>16&255]+xt[t>>24&255]+xt[n&255]+xt[n>>8&255]+xt[n>>16&255]+xt[n>>24&255]).toLowerCase()}function wt(s,e,t){return Math.max(e,Math.min(t,s))}function Ql(s,e){return(s%e+e)%e}function Or(s,e,t){return(1-t)*s+t*e}function Ma(s){return(s&s-1)===0&&s!==0}function gs(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function fn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function je(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class He{constructor(e=0,t=0){He.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(wt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ve{constructor(e,t,n,i,r,o,a,l,c){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],f=n[2],u=n[5],g=n[8],v=i[0],m=i[3],p=i[6],M=i[1],x=i[4],y=i[7],E=i[2],C=i[5],S=i[8];return r[0]=o*v+a*M+l*E,r[3]=o*m+a*x+l*C,r[6]=o*p+a*y+l*S,r[1]=c*v+h*M+d*E,r[4]=c*m+h*x+d*C,r[7]=c*p+h*y+d*S,r[2]=f*v+u*M+g*E,r[5]=f*m+u*x+g*C,r[8]=f*p+u*y+g*S,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,f=a*l-h*r,u=c*r-o*l,g=t*d+n*f+i*u;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=d*v,e[1]=(i*c-h*n)*v,e[2]=(a*n-i*o)*v,e[3]=f*v,e[4]=(h*t-i*l)*v,e[5]=(i*r-a*t)*v,e[6]=u*v,e[7]=(n*l-c*t)*v,e[8]=(o*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Br.makeScale(e,t)),this}rotate(e){return this.premultiply(Br.makeRotation(-e)),this}translate(e,t){return this.premultiply(Br.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Br=new Ve;function bo(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ui(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function ec(){const s=Ui("canvas");return s.style.display="block",s}const ya={};function Ri(s){s in ya||(ya[s]=!0,console.warn(s))}const Sa=new Ve().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ba=new Ve().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Hi={[en]:{transfer:gr,primaries:vr,toReference:s=>s,fromReference:s=>s},[mt]:{transfer:tt,primaries:vr,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Sr]:{transfer:gr,primaries:xr,toReference:s=>s.applyMatrix3(ba),fromReference:s=>s.applyMatrix3(Sa)},[bs]:{transfer:tt,primaries:xr,toReference:s=>s.convertSRGBToLinear().applyMatrix3(ba),fromReference:s=>s.applyMatrix3(Sa).convertLinearToSRGB()}},tc=new Set([en,Sr]),Xe={enabled:!0,_workingColorSpace:en,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!tc.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=Hi[e].toReference,i=Hi[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return Hi[s].primaries},getTransfer:function(s){return s===Ht?gr:Hi[s].transfer}};function fi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Vr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Wn;class Eo{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Wn===void 0&&(Wn=Ui("canvas")),Wn.width=e.width,Wn.height=e.height;const n=Wn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Wn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ui("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=fi(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(fi(t[n]/255)*255):t[n]=fi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let nc=0;class Ao{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:nc++}),this.uuid=En(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(zr(i[o].image)):r.push(zr(i[o]))}else r=zr(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function zr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Eo.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ic=0;class Ct extends xi{constructor(e=Ct.DEFAULT_IMAGE,t=Ct.DEFAULT_MAPPING,n=Yt,i=Yt,r=Ot,o=Di,a=zt,l=bn,c=Ct.DEFAULT_ANISOTROPY,h=Ht){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ic++}),this.uuid=En(),this.name="",this.source=new Ao(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Ri("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===zn?mt:Ht),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==uo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Pi:e.x=e.x-Math.floor(e.x);break;case Yt:e.x=e.x<0?0:1;break;case fs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Pi:e.y=e.y-Math.floor(e.y);break;case Yt:e.y=e.y<0?0:1;break;case fs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ri("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===mt?zn:yo}set encoding(e){Ri("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===zn?mt:Ht}}Ct.DEFAULT_IMAGE=null;Ct.DEFAULT_MAPPING=uo;Ct.DEFAULT_ANISOTROPY=1;class gt{constructor(e=0,t=0,n=0,i=1){gt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],h=l[4],d=l[8],f=l[1],u=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+u+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,y=(u+1)/2,E=(p+1)/2,C=(h+f)/4,S=(d+v)/4,P=(g+m)/4;return x>y&&x>E?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=C/n,r=S/n):y>E?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=C/i,r=P/i):E<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(E),n=S/r,i=P/r),this.set(n,i,r,t),this}let M=Math.sqrt((m-g)*(m-g)+(d-v)*(d-v)+(f-h)*(f-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(d-v)/M,this.z=(f-h)/M,this.w=Math.acos((c+u+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class rc extends xi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(Ri("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===zn?mt:Ht),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ot,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Ct(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ao(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hn extends rc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class To extends Ct{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=Yt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sc extends Ct{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=Yt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ni{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3];const f=r[o+0],u=r[o+1],g=r[o+2],v=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=u,e[t+2]=g,e[t+3]=v;return}if(d!==v||l!==f||c!==u||h!==g){let m=1-a;const p=l*f+c*u+h*g+d*v,M=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const E=Math.sqrt(x),C=Math.atan2(E,p*M);m=Math.sin(m*C)/E,a=Math.sin(a*C)/E}const y=a*M;if(l=l*m+f*y,c=c*m+u*y,h=h*m+g*y,d=d*m+v*y,m===1-a){const E=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=E,c*=E,h*=E,d*=E}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=r[o],f=r[o+1],u=r[o+2],g=r[o+3];return e[t]=a*g+h*d+l*u-c*f,e[t+1]=l*g+h*f+c*d-a*u,e[t+2]=c*g+h*u+a*f-l*d,e[t+3]=h*g-a*d-l*f-c*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),d=a(r/2),f=l(n/2),u=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*d+c*u*g,this._y=c*u*d-f*h*g,this._z=c*h*g+f*u*d,this._w=c*h*d-f*u*g;break;case"YXZ":this._x=f*h*d+c*u*g,this._y=c*u*d-f*h*g,this._z=c*h*g-f*u*d,this._w=c*h*d+f*u*g;break;case"ZXY":this._x=f*h*d-c*u*g,this._y=c*u*d+f*h*g,this._z=c*h*g+f*u*d,this._w=c*h*d-f*u*g;break;case"ZYX":this._x=f*h*d-c*u*g,this._y=c*u*d+f*h*g,this._z=c*h*g-f*u*d,this._w=c*h*d+f*u*g;break;case"YZX":this._x=f*h*d+c*u*g,this._y=c*u*d+f*h*g,this._z=c*h*g-f*u*d,this._w=c*h*d-f*u*g;break;case"XZY":this._x=f*h*d-c*u*g,this._y=c*u*d-f*h*g,this._z=c*h*g+f*u*d,this._w=c*h*d+f*u*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10],f=n+a+d;if(f>0){const u=.5/Math.sqrt(f+1);this._w=.25/u,this._x=(h-l)*u,this._y=(r-c)*u,this._z=(o-i)*u}else if(n>a&&n>d){const u=2*Math.sqrt(1+n-a-d);this._w=(h-l)/u,this._x=.25*u,this._y=(i+o)/u,this._z=(r+c)/u}else if(a>d){const u=2*Math.sqrt(1+a-n-d);this._w=(r-c)/u,this._x=(i+o)/u,this._y=.25*u,this._z=(l+h)/u}else{const u=2*Math.sqrt(1+d-n-a);this._w=(o-i)/u,this._x=(r+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(wt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const u=1-t;return this._w=u*o+t*this._w,this._x=u*n+t*this._x,this._y=u*i+t*this._y,this._z=u*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=o*d+this._w*f,this._x=n*d+this._x*f,this._y=i*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,t=0,n=0){B.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ea.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ea.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),h=2*(a*t-r*i),d=2*(r*n-o*t);return this.x=t+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=i+l*d+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Hr.copy(this).projectOnVector(e),this.sub(Hr)}reflect(e){return this.sub(Hr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(wt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Hr=new B,Ea=new Ni;class _i{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Gt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Gt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Gt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Gt):Gt.fromBufferAttribute(r,o),Gt.applyMatrix4(e.matrixWorld),this.expandByPoint(Gt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ki.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ki.copy(n.boundingBox)),ki.applyMatrix4(e.matrixWorld),this.union(ki)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Gt),Gt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(bi),Gi.subVectors(this.max,bi),Xn.subVectors(e.a,bi),qn.subVectors(e.b,bi),Yn.subVectors(e.c,bi),mn.subVectors(qn,Xn),gn.subVectors(Yn,qn),Cn.subVectors(Xn,Yn);let t=[0,-mn.z,mn.y,0,-gn.z,gn.y,0,-Cn.z,Cn.y,mn.z,0,-mn.x,gn.z,0,-gn.x,Cn.z,0,-Cn.x,-mn.y,mn.x,0,-gn.y,gn.x,0,-Cn.y,Cn.x,0];return!kr(t,Xn,qn,Yn,Gi)||(t=[1,0,0,0,1,0,0,0,1],!kr(t,Xn,qn,Yn,Gi))?!1:(Wi.crossVectors(mn,gn),t=[Wi.x,Wi.y,Wi.z],kr(t,Xn,qn,Yn,Gi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(nn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const nn=[new B,new B,new B,new B,new B,new B,new B,new B],Gt=new B,ki=new _i,Xn=new B,qn=new B,Yn=new B,mn=new B,gn=new B,Cn=new B,bi=new B,Gi=new B,Wi=new B,Ln=new B;function kr(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Ln.fromArray(s,r);const a=i.x*Math.abs(Ln.x)+i.y*Math.abs(Ln.y)+i.z*Math.abs(Ln.z),l=e.dot(Ln),c=t.dot(Ln),h=n.dot(Ln);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const ac=new _i,Ei=new B,Gr=new B;class Es{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):ac.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ei.subVectors(e,this.center);const t=Ei.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ei,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Gr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ei.copy(e.center).add(Gr)),this.expandByPoint(Ei.copy(e.center).sub(Gr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const rn=new B,Wr=new B,Xi=new B,vn=new B,Xr=new B,qi=new B,qr=new B;class wo{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,rn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=rn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(rn.copy(this.origin).addScaledVector(this.direction,t),rn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Wr.copy(e).add(t).multiplyScalar(.5),Xi.copy(t).sub(e).normalize(),vn.copy(this.origin).sub(Wr);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Xi),a=vn.dot(this.direction),l=-vn.dot(Xi),c=vn.lengthSq(),h=Math.abs(1-o*o);let d,f,u,g;if(h>0)if(d=o*l-a,f=o*a-l,g=r*h,d>=0)if(f>=-g)if(f<=g){const v=1/h;d*=v,f*=v,u=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),u=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-r,-l),r),u=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),u=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Wr).addScaledVector(Xi,f),u}intersectSphere(e,t){rn.subVectors(e.center,this.origin);const n=rn.dot(this.direction),i=rn.dot(rn)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,rn)!==null}intersectTriangle(e,t,n,i,r){Xr.subVectors(t,e),qi.subVectors(n,e),qr.crossVectors(Xr,qi);let o=this.direction.dot(qr),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;vn.subVectors(this.origin,e);const l=a*this.direction.dot(qi.crossVectors(vn,qi));if(l<0)return null;const c=a*this.direction.dot(Xr.cross(vn));if(c<0||l+c>o)return null;const h=-a*vn.dot(qr);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pt{constructor(e,t,n,i,r,o,a,l,c,h,d,f,u,g,v,m){pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,h,d,f,u,g,v,m)}set(e,t,n,i,r,o,a,l,c,h,d,f,u,g,v,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=f,p[3]=u,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/$n.setFromMatrixColumn(e,0).length(),r=1/$n.setFromMatrixColumn(e,1).length(),o=1/$n.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const f=o*h,u=o*d,g=a*h,v=a*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=u+g*c,t[5]=f-v*c,t[9]=-a*l,t[2]=v-f*c,t[6]=g+u*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*h,u=l*d,g=c*h,v=c*d;t[0]=f+v*a,t[4]=g*a-u,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=u*a-g,t[6]=v+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*h,u=l*d,g=c*h,v=c*d;t[0]=f-v*a,t[4]=-o*d,t[8]=g+u*a,t[1]=u+g*a,t[5]=o*h,t[9]=v-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*h,u=o*d,g=a*h,v=a*d;t[0]=l*h,t[4]=g*c-u,t[8]=f*c+v,t[1]=l*d,t[5]=v*c+f,t[9]=u*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,u=o*c,g=a*l,v=a*c;t[0]=l*h,t[4]=v-f*d,t[8]=g*d+u,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=u*d+g,t[10]=f-v*d}else if(e.order==="XZY"){const f=o*l,u=o*c,g=a*l,v=a*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=f*d+v,t[5]=o*h,t[9]=u*d-g,t[2]=g*d-u,t[6]=a*h,t[10]=v*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(oc,e,lc)}lookAt(e,t,n){const i=this.elements;return Pt.subVectors(e,t),Pt.lengthSq()===0&&(Pt.z=1),Pt.normalize(),xn.crossVectors(n,Pt),xn.lengthSq()===0&&(Math.abs(n.z)===1?Pt.x+=1e-4:Pt.z+=1e-4,Pt.normalize(),xn.crossVectors(n,Pt)),xn.normalize(),Yi.crossVectors(Pt,xn),i[0]=xn.x,i[4]=Yi.x,i[8]=Pt.x,i[1]=xn.y,i[5]=Yi.y,i[9]=Pt.y,i[2]=xn.z,i[6]=Yi.z,i[10]=Pt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],f=n[9],u=n[13],g=n[2],v=n[6],m=n[10],p=n[14],M=n[3],x=n[7],y=n[11],E=n[15],C=i[0],S=i[4],P=i[8],_=i[12],A=i[1],U=i[5],F=i[9],D=i[13],R=i[2],L=i[6],V=i[10],Z=i[14],K=i[3],W=i[7],j=i[11],$=i[15];return r[0]=o*C+a*A+l*R+c*K,r[4]=o*S+a*U+l*L+c*W,r[8]=o*P+a*F+l*V+c*j,r[12]=o*_+a*D+l*Z+c*$,r[1]=h*C+d*A+f*R+u*K,r[5]=h*S+d*U+f*L+u*W,r[9]=h*P+d*F+f*V+u*j,r[13]=h*_+d*D+f*Z+u*$,r[2]=g*C+v*A+m*R+p*K,r[6]=g*S+v*U+m*L+p*W,r[10]=g*P+v*F+m*V+p*j,r[14]=g*_+v*D+m*Z+p*$,r[3]=M*C+x*A+y*R+E*K,r[7]=M*S+x*U+y*L+E*W,r[11]=M*P+x*F+y*V+E*j,r[15]=M*_+x*D+y*Z+E*$,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],f=e[10],u=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+r*l*d-i*c*d-r*a*f+n*c*f+i*a*u-n*l*u)+v*(+t*l*u-t*c*f+r*o*f-i*o*u+i*c*h-r*l*h)+m*(+t*c*d-t*a*u-r*o*d+n*o*u+r*a*h-n*c*h)+p*(-i*a*h-t*l*d+t*a*f+i*o*d-n*o*f+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],f=e[10],u=e[11],g=e[12],v=e[13],m=e[14],p=e[15],M=d*m*c-v*f*c+v*l*u-a*m*u-d*l*p+a*f*p,x=g*f*c-h*m*c-g*l*u+o*m*u+h*l*p-o*f*p,y=h*v*c-g*d*c+g*a*u-o*v*u-h*a*p+o*d*p,E=g*d*l-h*v*l-g*a*f+o*v*f+h*a*m-o*d*m,C=t*M+n*x+i*y+r*E;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/C;return e[0]=M*S,e[1]=(v*f*r-d*m*r-v*i*u+n*m*u+d*i*p-n*f*p)*S,e[2]=(a*m*r-v*l*r+v*i*c-n*m*c-a*i*p+n*l*p)*S,e[3]=(d*l*r-a*f*r-d*i*c+n*f*c+a*i*u-n*l*u)*S,e[4]=x*S,e[5]=(h*m*r-g*f*r+g*i*u-t*m*u-h*i*p+t*f*p)*S,e[6]=(g*l*r-o*m*r-g*i*c+t*m*c+o*i*p-t*l*p)*S,e[7]=(o*f*r-h*l*r+h*i*c-t*f*c-o*i*u+t*l*u)*S,e[8]=y*S,e[9]=(g*d*r-h*v*r-g*n*u+t*v*u+h*n*p-t*d*p)*S,e[10]=(o*v*r-g*a*r+g*n*c-t*v*c-o*n*p+t*a*p)*S,e[11]=(h*a*r-o*d*r-h*n*c+t*d*c+o*n*u-t*a*u)*S,e[12]=E*S,e[13]=(h*v*i-g*d*i+g*n*f-t*v*f-h*n*m+t*d*m)*S,e[14]=(g*a*i-o*v*i-g*n*l+t*v*l+o*n*m-t*a*m)*S,e[15]=(o*d*i-h*a*i+h*n*l-t*d*l-o*n*f+t*a*f)*S,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,d=a+a,f=r*c,u=r*h,g=r*d,v=o*h,m=o*d,p=a*d,M=l*c,x=l*h,y=l*d,E=n.x,C=n.y,S=n.z;return i[0]=(1-(v+p))*E,i[1]=(u+y)*E,i[2]=(g-x)*E,i[3]=0,i[4]=(u-y)*C,i[5]=(1-(f+p))*C,i[6]=(m+M)*C,i[7]=0,i[8]=(g+x)*S,i[9]=(m-M)*S,i[10]=(1-(f+v))*S,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=$n.set(i[0],i[1],i[2]).length();const o=$n.set(i[4],i[5],i[6]).length(),a=$n.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Wt.copy(this);const c=1/r,h=1/o,d=1/a;return Wt.elements[0]*=c,Wt.elements[1]*=c,Wt.elements[2]*=c,Wt.elements[4]*=h,Wt.elements[5]*=h,Wt.elements[6]*=h,Wt.elements[8]*=d,Wt.elements[9]*=d,Wt.elements[10]*=d,t.setFromRotationMatrix(Wt),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=un){const l=this.elements,c=2*r/(t-e),h=2*r/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i);let u,g;if(a===un)u=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===_r)u=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=u,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=un){const l=this.elements,c=1/(t-e),h=1/(n-i),d=1/(o-r),f=(t+e)*c,u=(n+i)*h;let g,v;if(a===un)g=(o+r)*d,v=-2*d;else if(a===_r)g=r*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-u,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const $n=new B,Wt=new pt,oc=new B(0,0,0),lc=new B(1,1,1),xn=new B,Yi=new B,Pt=new B,Aa=new pt,Ta=new Ni;class br{constructor(e=0,t=0,n=0,i=br.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],d=i[2],f=i[6],u=i[10];switch(t){case"XYZ":this._y=Math.asin(wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-wt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(wt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,u),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-wt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Aa.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Aa,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ta.setFromEuler(this),this.setFromQuaternion(Ta,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}br.DEFAULT_ORDER="XYZ";class As{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let cc=0;const wa=new B,Zn=new Ni,sn=new pt,$i=new B,Ai=new B,hc=new B,dc=new Ni,Ca=new B(1,0,0),La=new B(0,1,0),Ra=new B(0,0,1),fc={type:"added"},uc={type:"removed"};class Rt extends xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cc++}),this.uuid=En(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rt.DEFAULT_UP.clone();const e=new B,t=new br,n=new Ni,i=new B(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new pt},normalMatrix:{value:new Ve}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=Rt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new As,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Zn.setFromAxisAngle(e,t),this.quaternion.multiply(Zn),this}rotateOnWorldAxis(e,t){return Zn.setFromAxisAngle(e,t),this.quaternion.premultiply(Zn),this}rotateX(e){return this.rotateOnAxis(Ca,e)}rotateY(e){return this.rotateOnAxis(La,e)}rotateZ(e){return this.rotateOnAxis(Ra,e)}translateOnAxis(e,t){return wa.copy(e).applyQuaternion(this.quaternion),this.position.add(wa.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ca,e)}translateY(e){return this.translateOnAxis(La,e)}translateZ(e){return this.translateOnAxis(Ra,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(sn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?$i.copy(e):$i.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ai.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?sn.lookAt(Ai,$i,this.up):sn.lookAt($i,Ai,this.up),this.quaternion.setFromRotationMatrix(sn),i&&(sn.extractRotation(i.matrixWorld),Zn.setFromRotationMatrix(sn),this.quaternion.premultiply(Zn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(fc)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(uc)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),sn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),sn.multiply(e.parent.matrixWorld)),e.applyMatrix4(sn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ai,e,hc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ai,dc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),f=o(e.skeletons),u=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),u.length>0&&(n.animations=u),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Rt.DEFAULT_UP=new B(0,1,0);Rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Xt=new B,an=new B,Yr=new B,on=new B,jn=new B,Kn=new B,Ia=new B,$r=new B,Zr=new B,jr=new B;let Zi=!1;class Bt{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Xt.subVectors(e,t),i.cross(Xt);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Xt.subVectors(i,t),an.subVectors(n,t),Yr.subVectors(e,t);const o=Xt.dot(Xt),a=Xt.dot(an),l=Xt.dot(Yr),c=an.dot(an),h=an.dot(Yr),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const f=1/d,u=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-u-g,g,u)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,on)===null?!1:on.x>=0&&on.y>=0&&on.x+on.y<=1}static getUV(e,t,n,i,r,o,a,l){return Zi===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Zi=!0),this.getInterpolation(e,t,n,i,r,o,a,l)}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,on)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,on.x),l.addScaledVector(o,on.y),l.addScaledVector(a,on.z),l)}static isFrontFacing(e,t,n,i){return Xt.subVectors(n,t),an.subVectors(e,t),Xt.cross(an).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xt.subVectors(this.c,this.b),an.subVectors(this.a,this.b),Xt.cross(an).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Bt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Bt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return Zi===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Zi=!0),Bt.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}getInterpolation(e,t,n,i,r){return Bt.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Bt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Bt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;jn.subVectors(i,n),Kn.subVectors(r,n),$r.subVectors(e,n);const l=jn.dot($r),c=Kn.dot($r);if(l<=0&&c<=0)return t.copy(n);Zr.subVectors(e,i);const h=jn.dot(Zr),d=Kn.dot(Zr);if(h>=0&&d<=h)return t.copy(i);const f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(jn,o);jr.subVectors(e,r);const u=jn.dot(jr),g=Kn.dot(jr);if(g>=0&&u<=g)return t.copy(r);const v=u*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Kn,a);const m=h*g-u*d;if(m<=0&&d-h>=0&&u-g>=0)return Ia.subVectors(r,i),a=(d-h)/(d-h+(u-g)),t.copy(i).addScaledVector(Ia,a);const p=1/(m+v+f);return o=v*p,a=f*p,t.copy(n).addScaledVector(jn,o).addScaledVector(Kn,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Co={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_n={h:0,s:0,l:0},ji={h:0,s:0,l:0};function Kr(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class qe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=mt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Xe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Xe.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Xe.workingColorSpace){if(e=Ql(e,1),t=wt(t,0,1),n=wt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Kr(o,r,e+1/3),this.g=Kr(o,r,e),this.b=Kr(o,r,e-1/3)}return Xe.toWorkingColorSpace(this,i),this}setStyle(e,t=mt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=mt){const n=Co[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fi(e.r),this.g=fi(e.g),this.b=fi(e.b),this}copyLinearToSRGB(e){return this.r=Vr(e.r),this.g=Vr(e.g),this.b=Vr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mt){return Xe.fromWorkingColorSpace(_t.copy(this),e),Math.round(wt(_t.r*255,0,255))*65536+Math.round(wt(_t.g*255,0,255))*256+Math.round(wt(_t.b*255,0,255))}getHexString(e=mt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xe.workingColorSpace){Xe.fromWorkingColorSpace(_t.copy(this),t);const n=_t.r,i=_t.g,r=_t.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Xe.workingColorSpace){return Xe.fromWorkingColorSpace(_t.copy(this),t),e.r=_t.r,e.g=_t.g,e.b=_t.b,e}getStyle(e=mt){Xe.fromWorkingColorSpace(_t.copy(this),e);const t=_t.r,n=_t.g,i=_t.b;return e!==mt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(_n),this.setHSL(_n.h+e,_n.s+t,_n.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(_n),e.getHSL(ji);const n=Or(_n.h,ji.h,t),i=Or(_n.s,ji.s,t),r=Or(_n.l,ji.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _t=new qe;qe.NAMES=Co;let pc=0;class Oi extends xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pc++}),this.uuid=En(),this.name="",this.type="Material",this.blending=On,this.side=An,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ls,this.blendDst=cs,this.blendEquation=Fn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=mr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gn,this.stencilZFail=Gn,this.stencilZPass=Gn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==On&&(n.blending=this.blending),this.side!==An&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ls&&(n.blendSrc=this.blendSrc),this.blendDst!==cs&&(n.blendDst=this.blendDst),this.blendEquation!==Fn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==mr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xa&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Gn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Gn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ci extends Oi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=fo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const lt=new B,Ki=new He;class $t{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=us,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=yn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ki.fromBufferAttribute(this,t),Ki.applyMatrix3(e),this.setXY(t,Ki.x,Ki.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.applyMatrix3(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.applyMatrix4(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.applyNormalMatrix(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.transformDirection(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=fn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=je(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=fn(t,this.array)),t}setX(e,t){return this.normalized&&(t=je(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=fn(t,this.array)),t}setY(e,t){return this.normalized&&(t=je(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=fn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=je(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=fn(t,this.array)),t}setW(e,t){return this.normalized&&(t=je(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=je(t,this.array),n=je(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=je(t,this.array),n=je(n,this.array),i=je(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=je(t,this.array),n=je(n,this.array),i=je(i,this.array),r=je(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==us&&(e.usage=this.usage),e}}class Lo extends $t{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ro extends $t{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Mt extends $t{constructor(e,t,n){super(new Float32Array(e),t,n)}}let mc=0;const Ut=new pt,Jr=new Rt,Jn=new B,Dt=new _i,Ti=new _i,ut=new B;class Zt extends xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mc++}),this.uuid=En(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(bo(e)?Ro:Lo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ve().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ut.makeRotationFromQuaternion(e),this.applyMatrix4(Ut),this}rotateX(e){return Ut.makeRotationX(e),this.applyMatrix4(Ut),this}rotateY(e){return Ut.makeRotationY(e),this.applyMatrix4(Ut),this}rotateZ(e){return Ut.makeRotationZ(e),this.applyMatrix4(Ut),this}translate(e,t,n){return Ut.makeTranslation(e,t,n),this.applyMatrix4(Ut),this}scale(e,t,n){return Ut.makeScale(e,t,n),this.applyMatrix4(Ut),this}lookAt(e){return Jr.lookAt(e),Jr.updateMatrix(),this.applyMatrix4(Jr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Jn).negate(),this.translate(Jn.x,Jn.y,Jn.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Mt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _i);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Dt.setFromBufferAttribute(r),this.morphTargetsRelative?(ut.addVectors(this.boundingBox.min,Dt.min),this.boundingBox.expandByPoint(ut),ut.addVectors(this.boundingBox.max,Dt.max),this.boundingBox.expandByPoint(ut)):(this.boundingBox.expandByPoint(Dt.min),this.boundingBox.expandByPoint(Dt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Es);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new B,1/0);return}if(e){const n=this.boundingSphere.center;if(Dt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Ti.setFromBufferAttribute(a),this.morphTargetsRelative?(ut.addVectors(Dt.min,Ti.min),Dt.expandByPoint(ut),ut.addVectors(Dt.max,Ti.max),Dt.expandByPoint(ut)):(Dt.expandByPoint(Ti.min),Dt.expandByPoint(Ti.max))}Dt.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)ut.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(ut));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)ut.fromBufferAttribute(a,c),l&&(Jn.fromBufferAttribute(e,c),ut.add(Jn)),i=Math.max(i,n.distanceToSquared(ut))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $t(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let A=0;A<a;A++)c[A]=new B,h[A]=new B;const d=new B,f=new B,u=new B,g=new He,v=new He,m=new He,p=new B,M=new B;function x(A,U,F){d.fromArray(i,A*3),f.fromArray(i,U*3),u.fromArray(i,F*3),g.fromArray(o,A*2),v.fromArray(o,U*2),m.fromArray(o,F*2),f.sub(d),u.sub(d),v.sub(g),m.sub(g);const D=1/(v.x*m.y-m.x*v.y);isFinite(D)&&(p.copy(f).multiplyScalar(m.y).addScaledVector(u,-v.y).multiplyScalar(D),M.copy(u).multiplyScalar(v.x).addScaledVector(f,-m.x).multiplyScalar(D),c[A].add(p),c[U].add(p),c[F].add(p),h[A].add(M),h[U].add(M),h[F].add(M))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let A=0,U=y.length;A<U;++A){const F=y[A],D=F.start,R=F.count;for(let L=D,V=D+R;L<V;L+=3)x(n[L+0],n[L+1],n[L+2])}const E=new B,C=new B,S=new B,P=new B;function _(A){S.fromArray(r,A*3),P.copy(S);const U=c[A];E.copy(U),E.sub(S.multiplyScalar(S.dot(U))).normalize(),C.crossVectors(P,U);const D=C.dot(h[A])<0?-1:1;l[A*4]=E.x,l[A*4+1]=E.y,l[A*4+2]=E.z,l[A*4+3]=D}for(let A=0,U=y.length;A<U;++A){const F=y[A],D=F.start,R=F.count;for(let L=D,V=D+R;L<V;L+=3)_(n[L+0]),_(n[L+1]),_(n[L+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new $t(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,u=n.count;f<u;f++)n.setXYZ(f,0,0,0);const i=new B,r=new B,o=new B,a=new B,l=new B,c=new B,h=new B,d=new B;if(e)for(let f=0,u=e.count;f<u;f+=3){const g=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,u=t.count;f<u;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ut.fromBufferAttribute(e,t),ut.normalize(),e.setXYZ(t,ut.x,ut.y,ut.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,d=a.normalized,f=new c.constructor(l.length*h);let u=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?u=l[v]*a.data.stride+a.offset:u=l[v]*h;for(let p=0;p<h;p++)f[g++]=c[u++]}return new $t(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Zt,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){const f=c[h],u=e(f,n);l.push(u)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){const u=c[d];h.push(u.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],d=r[c];for(let f=0,u=d.length;f<u;f++)h.push(d[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Pa=new pt,Rn=new wo,Ji=new Es,Da=new B,Qn=new B,ei=new B,ti=new B,Qr=new B,Qi=new B,er=new He,tr=new He,nr=new He,Fa=new B,Ua=new B,Na=new B,ir=new B,rr=new B;class kt extends Rt{constructor(e=new Zt,t=new ci){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){Qi.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],d=r[l];h!==0&&(Qr.fromBufferAttribute(d,e),o?Qi.addScaledVector(Qr,h):Qi.addScaledVector(Qr.sub(t),h))}t.add(Qi)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ji.copy(n.boundingSphere),Ji.applyMatrix4(r),Rn.copy(e.ray).recast(e.near),!(Ji.containsPoint(Rn.origin)===!1&&(Rn.intersectSphere(Ji,Da)===null||Rn.origin.distanceToSquared(Da)>(e.far-e.near)**2))&&(Pa.copy(r).invert(),Rn.copy(e.ray).applyMatrix4(Pa),!(n.boundingBox!==null&&Rn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Rn)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,u=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const m=f[g],p=o[m.materialIndex],M=Math.max(m.start,u.start),x=Math.min(a.count,Math.min(m.start+m.count,u.start+u.count));for(let y=M,E=x;y<E;y+=3){const C=a.getX(y),S=a.getX(y+1),P=a.getX(y+2);i=sr(this,p,e,n,c,h,d,C,S,P),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,u.start),v=Math.min(a.count,u.start+u.count);for(let m=g,p=v;m<p;m+=3){const M=a.getX(m),x=a.getX(m+1),y=a.getX(m+2);i=sr(this,o,e,n,c,h,d,M,x,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const m=f[g],p=o[m.materialIndex],M=Math.max(m.start,u.start),x=Math.min(l.count,Math.min(m.start+m.count,u.start+u.count));for(let y=M,E=x;y<E;y+=3){const C=y,S=y+1,P=y+2;i=sr(this,p,e,n,c,h,d,C,S,P),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,u.start),v=Math.min(l.count,u.start+u.count);for(let m=g,p=v;m<p;m+=3){const M=m,x=m+1,y=m+2;i=sr(this,o,e,n,c,h,d,M,x,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function gc(s,e,t,n,i,r,o,a){let l;if(e.side===Lt?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===An,a),l===null)return null;rr.copy(a),rr.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(rr);return c<t.near||c>t.far?null:{distance:c,point:rr.clone(),object:s}}function sr(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,Qn),s.getVertexPosition(l,ei),s.getVertexPosition(c,ti);const h=gc(s,e,t,n,Qn,ei,ti,ir);if(h){i&&(er.fromBufferAttribute(i,a),tr.fromBufferAttribute(i,l),nr.fromBufferAttribute(i,c),h.uv=Bt.getInterpolation(ir,Qn,ei,ti,er,tr,nr,new He)),r&&(er.fromBufferAttribute(r,a),tr.fromBufferAttribute(r,l),nr.fromBufferAttribute(r,c),h.uv1=Bt.getInterpolation(ir,Qn,ei,ti,er,tr,nr,new He),h.uv2=h.uv1),o&&(Fa.fromBufferAttribute(o,a),Ua.fromBufferAttribute(o,l),Na.fromBufferAttribute(o,c),h.normal=Bt.getInterpolation(ir,Qn,ei,ti,Fa,Ua,Na,new B),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new B,materialIndex:0};Bt.getNormal(Qn,ei,ti,d.normal),h.face=d}return h}class Bi extends Zt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],d=[];let f=0,u=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Mt(c,3)),this.setAttribute("normal",new Mt(h,3)),this.setAttribute("uv",new Mt(d,2));function g(v,m,p,M,x,y,E,C,S,P,_){const A=y/S,U=E/P,F=y/2,D=E/2,R=C/2,L=S+1,V=P+1;let Z=0,K=0;const W=new B;for(let j=0;j<V;j++){const $=j*U-D;for(let N=0;N<L;N++){const z=N*A-F;W[v]=z*M,W[m]=$*x,W[p]=R,c.push(W.x,W.y,W.z),W[v]=0,W[m]=0,W[p]=C>0?1:-1,h.push(W.x,W.y,W.z),d.push(N/S),d.push(1-j/P),Z+=1}}for(let j=0;j<P;j++)for(let $=0;$<S;$++){const N=f+$+L*j,z=f+$+L*(j+1),Y=f+($+1)+L*(j+1),J=f+($+1)+L*j;l.push(N,z,J),l.push(z,Y,J),K+=6}a.addGroup(u,K,_),u+=K,f+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function vi(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function At(s){const e={};for(let t=0;t<s.length;t++){const n=vi(s[t]);for(const i in n)e[i]=n[i]}return e}function vc(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Io(s){return s.getRenderTarget()===null?s.outputColorSpace:Xe.workingColorSpace}const xc={clone:vi,merge:At};var _c=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Mc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class kn extends Oi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_c,this.fragmentShader=Mc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vi(e.uniforms),this.uniformsGroups=vc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Po extends Rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=un}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Vt extends Po{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ms*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Nr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ms*2*Math.atan(Math.tan(Nr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Nr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ni=-90,ii=1;class yc extends Rt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Vt(ni,ii,e,t);i.layers=this.layers,this.add(i);const r=new Vt(ni,ii,e,t);r.layers=this.layers,this.add(r);const o=new Vt(ni,ii,e,t);o.layers=this.layers,this.add(o);const a=new Vt(ni,ii,e,t);a.layers=this.layers,this.add(a);const l=new Vt(ni,ii,e,t);l.layers=this.layers,this.add(l);const c=new Vt(ni,ii,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===un)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===_r)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(d,f,u),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Do extends Ct{constructor(e,t,n,i,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:pi,super(e,t,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Sc extends Hn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(Ri("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===zn?mt:Ht),this.texture=new Do(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ot}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Bi(5,5,5),r=new kn({name:"CubemapFromEquirect",uniforms:vi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Lt,blending:Sn});r.uniforms.tEquirect.value=t;const o=new kt(i,r),a=t.minFilter;return t.minFilter===Di&&(t.minFilter=Ot),new yc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const es=new B,bc=new B,Ec=new Ve;class Pn{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=es.subVectors(n,t).cross(bc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(es),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Ec.getNormalMatrix(e),i=this.coplanarPoint(es).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const In=new Es,ar=new B;class Fo{constructor(e=new Pn,t=new Pn,n=new Pn,i=new Pn,r=new Pn,o=new Pn){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=un){const n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],d=i[6],f=i[7],u=i[8],g=i[9],v=i[10],m=i[11],p=i[12],M=i[13],x=i[14],y=i[15];if(n[0].setComponents(l-r,f-c,m-u,y-p).normalize(),n[1].setComponents(l+r,f+c,m+u,y+p).normalize(),n[2].setComponents(l+o,f+h,m+g,y+M).normalize(),n[3].setComponents(l-o,f-h,m-g,y-M).normalize(),n[4].setComponents(l-a,f-d,m-v,y-x).normalize(),t===un)n[5].setComponents(l+a,f+d,m+v,y+x).normalize();else if(t===_r)n[5].setComponents(a,d,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),In.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),In.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(In)}intersectsSprite(e){return In.center.set(0,0,0),In.radius=.7071067811865476,In.applyMatrix4(e.matrixWorld),this.intersectsSphere(In)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ar.x=i.normal.x>0?e.max.x:e.min.x,ar.y=i.normal.y>0?e.max.y:e.min.y,ar.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ar)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Uo(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Ac(s,e){const t=e.isWebGL2,n=new WeakMap;function i(c,h){const d=c.array,f=c.usage,u=d.byteLength,g=s.createBuffer();s.bindBuffer(h,g),s.bufferData(h,d,f),c.onUploadCallback();let v;if(d instanceof Float32Array)v=s.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)v=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=s.UNSIGNED_SHORT;else if(d instanceof Int16Array)v=s.SHORT;else if(d instanceof Uint32Array)v=s.UNSIGNED_INT;else if(d instanceof Int32Array)v=s.INT;else if(d instanceof Int8Array)v=s.BYTE;else if(d instanceof Uint8Array)v=s.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)v=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:v,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:u}}function r(c,h,d){const f=h.array,u=h._updateRange,g=h.updateRanges;if(s.bindBuffer(d,c),u.count===-1&&g.length===0&&s.bufferSubData(d,0,f),g.length!==0){for(let v=0,m=g.length;v<m;v++){const p=g[v];t?s.bufferSubData(d,p.start*f.BYTES_PER_ELEMENT,f,p.start,p.count):s.bufferSubData(d,p.start*f.BYTES_PER_ELEMENT,f.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}u.count!==-1&&(t?s.bufferSubData(d,u.offset*f.BYTES_PER_ELEMENT,f,u.offset,u.count):s.bufferSubData(d,u.offset*f.BYTES_PER_ELEMENT,f.subarray(u.offset,u.offset+u.count)),u.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(s.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=n.get(c);if(d===void 0)n.set(c,i(c,h));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,c,h),d.version=c.version}}return{get:o,remove:a,update:l}}class Er extends Zt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,d=e/a,f=t/l,u=[],g=[],v=[],m=[];for(let p=0;p<h;p++){const M=p*f-o;for(let x=0;x<c;x++){const y=x*d-r;g.push(y,-M,0),v.push(0,0,1),m.push(x/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<a;M++){const x=M+c*p,y=M+c*(p+1),E=M+1+c*(p+1),C=M+1+c*p;u.push(x,y,C),u.push(y,E,C)}this.setIndex(u),this.setAttribute("position",new Mt(g,3)),this.setAttribute("normal",new Mt(v,3)),this.setAttribute("uv",new Mt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Er(e.width,e.height,e.widthSegments,e.heightSegments)}}var Tc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wc=`#ifdef USE_ALPHAHASH
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
#endif`,Cc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Lc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rc=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Ic=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Pc=`#ifdef USE_AOMAP
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
#endif`,Dc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Fc=`#ifdef USE_BATCHING
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
#endif`,Uc=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Nc=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Oc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Bc=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Vc=`#ifdef USE_IRIDESCENCE
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
#endif`,zc=`#ifdef USE_BUMPMAP
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
#endif`,Hc=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,kc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Yc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,$c=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Zc=`#define PI 3.141592653589793
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
} // validated`,jc=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Kc=`vec3 transformedNormal = objectNormal;
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
#endif`,Jc=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qc=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,eh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,th=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nh="gl_FragColor = linearToOutputTexel( gl_FragColor );",ih=`
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
}`,rh=`#ifdef USE_ENVMAP
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
#endif`,sh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ah=`#ifdef USE_ENVMAP
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
#endif`,oh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lh=`#ifdef USE_ENVMAP
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
#endif`,ch=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,uh=`#ifdef USE_GRADIENTMAP
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
}`,ph=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,mh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gh=`LambertMaterial material;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xh=`uniform bool receiveShadow;
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
#endif`,_h=`#ifdef USE_ENVMAP
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
material.diffuseColor = diffuseColor.rgb;`,yh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Sh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Eh=`PhysicalMaterial material;
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
#endif`,Ah=`struct PhysicalMaterial {
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
}`,Th=`
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
#endif`,wh=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ch=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Lh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ih=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Ph=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Dh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Fh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Uh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Nh=`#if defined( USE_POINTS_UV )
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
#endif`,Oh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Bh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vh=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zh=`#ifdef USE_MORPHNORMALS
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
#endif`,Hh=`#ifdef USE_MORPHTARGETS
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
#endif`,kh=`#ifdef USE_MORPHTARGETS
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
#endif`,Gh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Wh=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Xh=`#ifndef FLAT_SHADED
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
#endif`,Yh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$h=`#ifdef USE_NORMALMAP
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
#endif`,Zh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Kh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Jh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ed=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,td=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,nd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,id=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ad=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,od=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ld=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,hd=`float getShadowMask() {
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
}`,dd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fd=`#ifdef USE_SKINNING
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
#endif`,ud=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pd=`#ifdef USE_SKINNING
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
#endif`,md=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,_d=`#ifdef USE_TRANSMISSION
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
#endif`,Md=`#ifdef USE_TRANSMISSION
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
#endif`,yd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ed=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ad=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Td=`uniform sampler2D t2D;
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
}`,wd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ld=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Id=`#include <common>
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
}`,Pd=`#if DEPTH_PACKING == 3200
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
}`,Dd=`#define DISTANCE
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
}`,Fd=`#define DISTANCE
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
}`,Ud=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Nd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Od=`uniform float scale;
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
}`,Bd=`uniform vec3 diffuse;
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
}`,Vd=`#include <common>
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
}`,zd=`uniform vec3 diffuse;
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
}`,Hd=`#define LAMBERT
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
}`,kd=`#define LAMBERT
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
}`,Gd=`#define MATCAP
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
}`,Wd=`#define MATCAP
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
}`,Xd=`#define NORMAL
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
}`,qd=`#define NORMAL
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
}`,Yd=`#define PHONG
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
}`,$d=`#define PHONG
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
}`,Zd=`#define STANDARD
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
}`,jd=`#define STANDARD
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
}`,Kd=`#define TOON
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
}`,Jd=`#define TOON
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
}`,Qd=`uniform float size;
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
}`,ef=`uniform vec3 diffuse;
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
}`,tf=`#include <common>
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
}`,nf=`uniform vec3 color;
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
}`,rf=`uniform float rotation;
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
}`,sf=`uniform vec3 diffuse;
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
}`,De={alphahash_fragment:Tc,alphahash_pars_fragment:wc,alphamap_fragment:Cc,alphamap_pars_fragment:Lc,alphatest_fragment:Rc,alphatest_pars_fragment:Ic,aomap_fragment:Pc,aomap_pars_fragment:Dc,batching_pars_vertex:Fc,batching_vertex:Uc,begin_vertex:Nc,beginnormal_vertex:Oc,bsdfs:Bc,iridescence_fragment:Vc,bumpmap_pars_fragment:zc,clipping_planes_fragment:Hc,clipping_planes_pars_fragment:kc,clipping_planes_pars_vertex:Gc,clipping_planes_vertex:Wc,color_fragment:Xc,color_pars_fragment:qc,color_pars_vertex:Yc,color_vertex:$c,common:Zc,cube_uv_reflection_fragment:jc,defaultnormal_vertex:Kc,displacementmap_pars_vertex:Jc,displacementmap_vertex:Qc,emissivemap_fragment:eh,emissivemap_pars_fragment:th,colorspace_fragment:nh,colorspace_pars_fragment:ih,envmap_fragment:rh,envmap_common_pars_fragment:sh,envmap_pars_fragment:ah,envmap_pars_vertex:oh,envmap_physical_pars_fragment:_h,envmap_vertex:lh,fog_vertex:ch,fog_pars_vertex:hh,fog_fragment:dh,fog_pars_fragment:fh,gradientmap_pars_fragment:uh,lightmap_fragment:ph,lightmap_pars_fragment:mh,lights_lambert_fragment:gh,lights_lambert_pars_fragment:vh,lights_pars_begin:xh,lights_toon_fragment:Mh,lights_toon_pars_fragment:yh,lights_phong_fragment:Sh,lights_phong_pars_fragment:bh,lights_physical_fragment:Eh,lights_physical_pars_fragment:Ah,lights_fragment_begin:Th,lights_fragment_maps:wh,lights_fragment_end:Ch,logdepthbuf_fragment:Lh,logdepthbuf_pars_fragment:Rh,logdepthbuf_pars_vertex:Ih,logdepthbuf_vertex:Ph,map_fragment:Dh,map_pars_fragment:Fh,map_particle_fragment:Uh,map_particle_pars_fragment:Nh,metalnessmap_fragment:Oh,metalnessmap_pars_fragment:Bh,morphcolor_vertex:Vh,morphnormal_vertex:zh,morphtarget_pars_vertex:Hh,morphtarget_vertex:kh,normal_fragment_begin:Gh,normal_fragment_maps:Wh,normal_pars_fragment:Xh,normal_pars_vertex:qh,normal_vertex:Yh,normalmap_pars_fragment:$h,clearcoat_normal_fragment_begin:Zh,clearcoat_normal_fragment_maps:jh,clearcoat_pars_fragment:Kh,iridescence_pars_fragment:Jh,opaque_fragment:Qh,packing:ed,premultiplied_alpha_fragment:td,project_vertex:nd,dithering_fragment:id,dithering_pars_fragment:rd,roughnessmap_fragment:sd,roughnessmap_pars_fragment:ad,shadowmap_pars_fragment:od,shadowmap_pars_vertex:ld,shadowmap_vertex:cd,shadowmask_pars_fragment:hd,skinbase_vertex:dd,skinning_pars_vertex:fd,skinning_vertex:ud,skinnormal_vertex:pd,specularmap_fragment:md,specularmap_pars_fragment:gd,tonemapping_fragment:vd,tonemapping_pars_fragment:xd,transmission_fragment:_d,transmission_pars_fragment:Md,uv_pars_fragment:yd,uv_pars_vertex:Sd,uv_vertex:bd,worldpos_vertex:Ed,background_vert:Ad,background_frag:Td,backgroundCube_vert:wd,backgroundCube_frag:Cd,cube_vert:Ld,cube_frag:Rd,depth_vert:Id,depth_frag:Pd,distanceRGBA_vert:Dd,distanceRGBA_frag:Fd,equirect_vert:Ud,equirect_frag:Nd,linedashed_vert:Od,linedashed_frag:Bd,meshbasic_vert:Vd,meshbasic_frag:zd,meshlambert_vert:Hd,meshlambert_frag:kd,meshmatcap_vert:Gd,meshmatcap_frag:Wd,meshnormal_vert:Xd,meshnormal_frag:qd,meshphong_vert:Yd,meshphong_frag:$d,meshphysical_vert:Zd,meshphysical_frag:jd,meshtoon_vert:Kd,meshtoon_frag:Jd,points_vert:Qd,points_frag:ef,shadow_vert:tf,shadow_frag:nf,sprite_vert:rf,sprite_frag:sf},ae={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},Qt={basic:{uniforms:At([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:De.meshbasic_vert,fragmentShader:De.meshbasic_frag},lambert:{uniforms:At([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new qe(0)}}]),vertexShader:De.meshlambert_vert,fragmentShader:De.meshlambert_frag},phong:{uniforms:At([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:De.meshphong_vert,fragmentShader:De.meshphong_frag},standard:{uniforms:At([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag},toon:{uniforms:At([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new qe(0)}}]),vertexShader:De.meshtoon_vert,fragmentShader:De.meshtoon_frag},matcap:{uniforms:At([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:De.meshmatcap_vert,fragmentShader:De.meshmatcap_frag},points:{uniforms:At([ae.points,ae.fog]),vertexShader:De.points_vert,fragmentShader:De.points_frag},dashed:{uniforms:At([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:De.linedashed_vert,fragmentShader:De.linedashed_frag},depth:{uniforms:At([ae.common,ae.displacementmap]),vertexShader:De.depth_vert,fragmentShader:De.depth_frag},normal:{uniforms:At([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:De.meshnormal_vert,fragmentShader:De.meshnormal_frag},sprite:{uniforms:At([ae.sprite,ae.fog]),vertexShader:De.sprite_vert,fragmentShader:De.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:De.background_vert,fragmentShader:De.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:De.backgroundCube_vert,fragmentShader:De.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:De.cube_vert,fragmentShader:De.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:De.equirect_vert,fragmentShader:De.equirect_frag},distanceRGBA:{uniforms:At([ae.common,ae.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:De.distanceRGBA_vert,fragmentShader:De.distanceRGBA_frag},shadow:{uniforms:At([ae.lights,ae.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:De.shadow_vert,fragmentShader:De.shadow_frag}};Qt.physical={uniforms:At([Qt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag};const or={r:0,b:0,g:0};function af(s,e,t,n,i,r,o){const a=new qe(0);let l=r===!0?0:1,c,h,d=null,f=0,u=null;function g(m,p){let M=!1,x=p.isScene===!0?p.background:null;x&&x.isTexture&&(x=(p.backgroundBlurriness>0?t:e).get(x)),x===null?v(a,l):x&&x.isColor&&(v(x,1),M=!0);const y=s.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||M)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),x&&(x.isCubeTexture||x.mapping===yr)?(h===void 0&&(h=new kt(new Bi(1,1,1),new kn({name:"BackgroundCubeMaterial",uniforms:vi(Qt.backgroundCube.uniforms),vertexShader:Qt.backgroundCube.vertexShader,fragmentShader:Qt.backgroundCube.fragmentShader,side:Lt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,C,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=Xe.getTransfer(x.colorSpace)!==tt,(d!==x||f!==x.version||u!==s.toneMapping)&&(h.material.needsUpdate=!0,d=x,f=x.version,u=s.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new kt(new Er(2,2),new kn({name:"BackgroundMaterial",uniforms:vi(Qt.background.uniforms),vertexShader:Qt.background.vertexShader,fragmentShader:Qt.background.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=Xe.getTransfer(x.colorSpace)!==tt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||f!==x.version||u!==s.toneMapping)&&(c.material.needsUpdate=!0,d=x,f=x.version,u=s.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function v(m,p){m.getRGB(or,Io(s)),n.buffers.color.setClear(or.r,or.g,or.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),l=p,v(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,v(a,l)},render:g}}function of(s,e,t,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=m(null);let c=l,h=!1;function d(R,L,V,Z,K){let W=!1;if(o){const j=v(Z,V,L);c!==j&&(c=j,u(c.object)),W=p(R,Z,V,K),W&&M(R,Z,V,K)}else{const j=L.wireframe===!0;(c.geometry!==Z.id||c.program!==V.id||c.wireframe!==j)&&(c.geometry=Z.id,c.program=V.id,c.wireframe=j,W=!0)}K!==null&&t.update(K,s.ELEMENT_ARRAY_BUFFER),(W||h)&&(h=!1,P(R,L,V,Z),K!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function f(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function u(R){return n.isWebGL2?s.bindVertexArray(R):r.bindVertexArrayOES(R)}function g(R){return n.isWebGL2?s.deleteVertexArray(R):r.deleteVertexArrayOES(R)}function v(R,L,V){const Z=V.wireframe===!0;let K=a[R.id];K===void 0&&(K={},a[R.id]=K);let W=K[L.id];W===void 0&&(W={},K[L.id]=W);let j=W[Z];return j===void 0&&(j=m(f()),W[Z]=j),j}function m(R){const L=[],V=[],Z=[];for(let K=0;K<i;K++)L[K]=0,V[K]=0,Z[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:V,attributeDivisors:Z,object:R,attributes:{},index:null}}function p(R,L,V,Z){const K=c.attributes,W=L.attributes;let j=0;const $=V.getAttributes();for(const N in $)if($[N].location>=0){const Y=K[N];let J=W[N];if(J===void 0&&(N==="instanceMatrix"&&R.instanceMatrix&&(J=R.instanceMatrix),N==="instanceColor"&&R.instanceColor&&(J=R.instanceColor)),Y===void 0||Y.attribute!==J||J&&Y.data!==J.data)return!0;j++}return c.attributesNum!==j||c.index!==Z}function M(R,L,V,Z){const K={},W=L.attributes;let j=0;const $=V.getAttributes();for(const N in $)if($[N].location>=0){let Y=W[N];Y===void 0&&(N==="instanceMatrix"&&R.instanceMatrix&&(Y=R.instanceMatrix),N==="instanceColor"&&R.instanceColor&&(Y=R.instanceColor));const J={};J.attribute=Y,Y&&Y.data&&(J.data=Y.data),K[N]=J,j++}c.attributes=K,c.attributesNum=j,c.index=Z}function x(){const R=c.newAttributes;for(let L=0,V=R.length;L<V;L++)R[L]=0}function y(R){E(R,0)}function E(R,L){const V=c.newAttributes,Z=c.enabledAttributes,K=c.attributeDivisors;V[R]=1,Z[R]===0&&(s.enableVertexAttribArray(R),Z[R]=1),K[R]!==L&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,L),K[R]=L)}function C(){const R=c.newAttributes,L=c.enabledAttributes;for(let V=0,Z=L.length;V<Z;V++)L[V]!==R[V]&&(s.disableVertexAttribArray(V),L[V]=0)}function S(R,L,V,Z,K,W,j){j===!0?s.vertexAttribIPointer(R,L,V,K,W):s.vertexAttribPointer(R,L,V,Z,K,W)}function P(R,L,V,Z){if(n.isWebGL2===!1&&(R.isInstancedMesh||Z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const K=Z.attributes,W=V.getAttributes(),j=L.defaultAttributeValues;for(const $ in W){const N=W[$];if(N.location>=0){let z=K[$];if(z===void 0&&($==="instanceMatrix"&&R.instanceMatrix&&(z=R.instanceMatrix),$==="instanceColor"&&R.instanceColor&&(z=R.instanceColor)),z!==void 0){const Y=z.normalized,J=z.itemSize,re=t.get(z);if(re===void 0)continue;const ue=re.buffer,xe=re.type,Ie=re.bytesPerElement,Ee=n.isWebGL2===!0&&(xe===s.INT||xe===s.UNSIGNED_INT||z.gpuType===po);if(z.isInterleavedBufferAttribute){const Ge=z.data,H=Ge.stride,yt=z.offset;if(Ge.isInstancedInterleavedBuffer){for(let Me=0;Me<N.locationSize;Me++)E(N.location+Me,Ge.meshPerAttribute);R.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=Ge.meshPerAttribute*Ge.count)}else for(let Me=0;Me<N.locationSize;Me++)y(N.location+Me);s.bindBuffer(s.ARRAY_BUFFER,ue);for(let Me=0;Me<N.locationSize;Me++)S(N.location+Me,J/N.locationSize,xe,Y,H*Ie,(yt+J/N.locationSize*Me)*Ie,Ee)}else{if(z.isInstancedBufferAttribute){for(let Ge=0;Ge<N.locationSize;Ge++)E(N.location+Ge,z.meshPerAttribute);R.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let Ge=0;Ge<N.locationSize;Ge++)y(N.location+Ge);s.bindBuffer(s.ARRAY_BUFFER,ue);for(let Ge=0;Ge<N.locationSize;Ge++)S(N.location+Ge,J/N.locationSize,xe,Y,J*Ie,J/N.locationSize*Ge*Ie,Ee)}}else if(j!==void 0){const Y=j[$];if(Y!==void 0)switch(Y.length){case 2:s.vertexAttrib2fv(N.location,Y);break;case 3:s.vertexAttrib3fv(N.location,Y);break;case 4:s.vertexAttrib4fv(N.location,Y);break;default:s.vertexAttrib1fv(N.location,Y)}}}}C()}function _(){F();for(const R in a){const L=a[R];for(const V in L){const Z=L[V];for(const K in Z)g(Z[K].object),delete Z[K];delete L[V]}delete a[R]}}function A(R){if(a[R.id]===void 0)return;const L=a[R.id];for(const V in L){const Z=L[V];for(const K in Z)g(Z[K].object),delete Z[K];delete L[V]}delete a[R.id]}function U(R){for(const L in a){const V=a[L];if(V[R.id]===void 0)continue;const Z=V[R.id];for(const K in Z)g(Z[K].object),delete Z[K];delete V[R.id]}}function F(){D(),h=!0,c!==l&&(c=l,u(c.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:F,resetDefaultState:D,dispose:_,releaseStatesOfGeometry:A,releaseStatesOfProgram:U,initAttributes:x,enableAttribute:y,disableUnusedAttributes:C}}function lf(s,e,t,n){const i=n.isWebGL2;let r;function o(h){r=h}function a(h,d){s.drawArrays(r,h,d),t.update(d,r,1)}function l(h,d,f){if(f===0)return;let u,g;if(i)u=s,g="drawArraysInstanced";else if(u=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",u===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u[g](r,h,d,f),t.update(d,r,f)}function c(h,d,f){if(f===0)return;const u=e.get("WEBGL_multi_draw");if(u===null)for(let g=0;g<f;g++)this.render(h[g],d[g]);else{u.multiDrawArraysWEBGL(r,h,0,d,0,f);let g=0;for(let v=0;v<f;v++)g+=d[v];t.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function cf(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const S=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(S){if(S==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),u=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),p=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),x=f>0,y=o||e.has("OES_texture_float"),E=x&&y,C=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:f,maxTextureSize:u,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:M,vertexTextures:x,floatFragmentTextures:y,floatVertexTextures:E,maxSamples:C}}function hf(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new Pn,a=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const u=d.length!==0||f||n!==0||i;return i=f,n=d.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,u){const g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,p=s.get(d);if(!i||g===null||g.length===0||r&&!m)r?h(null):c();else{const M=r?0:n,x=M*4;let y=p.clippingState||null;l.value=y,y=h(g,f,x,u);for(let E=0;E!==x;++E)y[E]=t[E];p.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,f,u,g){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=u+v*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,y=u;x!==v;++x,y+=4)o.copy(d[x]).applyMatrix4(M,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function df(s){let e=new WeakMap;function t(o,a){return a===hs?o.mapping=pi:a===ds&&(o.mapping=mi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===hs||a===ds)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Sc(l.height/2);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class ff extends Po{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const hi=4,Oa=[.125,.215,.35,.446,.526,.582],Un=20,ts=new ff,Ba=new qe;let ns=null,is=0,rs=0;const Dn=(1+Math.sqrt(5))/2,ri=1/Dn,Va=[new B(1,1,1),new B(-1,1,1),new B(1,1,-1),new B(-1,1,-1),new B(0,Dn,ri),new B(0,Dn,-ri),new B(ri,0,Dn),new B(-ri,0,Dn),new B(Dn,ri,0),new B(-Dn,ri,0)];class za{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){ns=this._renderer.getRenderTarget(),is=this._renderer.getActiveCubeFace(),rs=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ga(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ka(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ns,is,rs),e.scissorTest=!1,lr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===pi||e.mapping===mi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ns=this._renderer.getRenderTarget(),is=this._renderer.getActiveCubeFace(),rs=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ot,minFilter:Ot,generateMipmaps:!1,type:Fi,format:zt,colorSpace:en,depthBuffer:!1},i=Ha(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ha(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=uf(r)),this._blurMaterial=pf(r,e,t)}return i}_compileMaterial(e){const t=new kt(this._lodPlanes[0],e);this._renderer.compile(t,ts)}_sceneToCubeUV(e,t,n,i){const a=new Vt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Ba),h.toneMapping=pn,h.autoClear=!1;const u=new ci({name:"PMREM.Background",side:Lt,depthWrite:!1,depthTest:!1}),g=new kt(new Bi,u);let v=!1;const m=e.background;m?m.isColor&&(u.color.copy(m),e.background=null,v=!0):(u.color.copy(Ba),v=!0);for(let p=0;p<6;p++){const M=p%3;M===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):M===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const x=this._cubeSize;lr(i,M*x,p>2?x:0,x,x),h.setRenderTarget(i),v&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===pi||e.mapping===mi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ga()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ka());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new kt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;lr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,ts)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Va[(i-1)%Va.length];this._blur(e,i-1,i,r,o)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new kt(this._lodPlanes[i],c),f=c.uniforms,u=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*u):2*Math.PI/(2*Un-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):Un;m>Un&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Un}`);const p=[];let M=0;for(let S=0;S<Un;++S){const P=S/v,_=Math.exp(-P*P/2);p.push(_),S===0?M+=_:S<m&&(M+=2*_)}for(let S=0;S<p.length;S++)p[S]=p[S]/M;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;const y=this._sizeLods[i],E=3*y*(i>x-hi?i-x+hi:0),C=4*(this._cubeSize-y);lr(t,E,C,3*y,2*y),l.setRenderTarget(t),l.render(d,ts)}}function uf(s){const e=[],t=[],n=[];let i=s;const r=s-hi+1+Oa.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>s-hi?l=Oa[o-s+hi-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],u=6,g=6,v=3,m=2,p=1,M=new Float32Array(v*g*u),x=new Float32Array(m*g*u),y=new Float32Array(p*g*u);for(let C=0;C<u;C++){const S=C%3*2/3-1,P=C>2?0:-1,_=[S,P,0,S+2/3,P,0,S+2/3,P+1,0,S,P,0,S+2/3,P+1,0,S,P+1,0];M.set(_,v*g*C),x.set(f,m*g*C);const A=[C,C,C,C,C,C];y.set(A,p*g*C)}const E=new Zt;E.setAttribute("position",new $t(M,v)),E.setAttribute("uv",new $t(x,m)),E.setAttribute("faceIndex",new $t(y,p)),e.push(E),i>hi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ha(s,e,t){const n=new Hn(s,e,t);return n.texture.mapping=yr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function lr(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function pf(s,e,t){const n=new Float32Array(Un),i=new B(0,1,0);return new kn({name:"SphericalGaussianBlur",defines:{n:Un,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ts(),fragmentShader:`

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
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function ka(){return new kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ts(),fragmentShader:`

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
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function Ga(){return new kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ts(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function Ts(){return`

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
	`}function mf(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===hs||l===ds,h=l===pi||l===mi;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new za(s)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(c&&d&&d.height>0||h&&d&&i(d)){t===null&&(t=new za(s));const f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function gf(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function vf(s,e,t,n){const i={},r=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const v=f.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)e.remove(v[m])}f.removeEventListener("dispose",o),delete i[f.id];const u=r.get(f);u&&(e.remove(u),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const g in f)e.update(f[g],s.ARRAY_BUFFER);const u=d.morphAttributes;for(const g in u){const v=u[g];for(let m=0,p=v.length;m<p;m++)e.update(v[m],s.ARRAY_BUFFER)}}function c(d){const f=[],u=d.index,g=d.attributes.position;let v=0;if(u!==null){const M=u.array;v=u.version;for(let x=0,y=M.length;x<y;x+=3){const E=M[x+0],C=M[x+1],S=M[x+2];f.push(E,C,C,S,S,E)}}else if(g!==void 0){const M=g.array;v=g.version;for(let x=0,y=M.length/3-1;x<y;x+=3){const E=x+0,C=x+1,S=x+2;f.push(E,C,C,S,S,E)}}else return;const m=new(bo(f)?Ro:Lo)(f,1);m.version=v;const p=r.get(d);p&&e.remove(p),r.set(d,m)}function h(d){const f=r.get(d);if(f){const u=d.index;u!==null&&f.version<u.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function xf(s,e,t,n){const i=n.isWebGL2;let r;function o(u){r=u}let a,l;function c(u){a=u.type,l=u.bytesPerElement}function h(u,g){s.drawElements(r,g,a,u*l),t.update(g,r,1)}function d(u,g,v){if(v===0)return;let m,p;if(i)m=s,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,g,a,u*l,v),t.update(g,r,v)}function f(u,g,v){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<v;p++)this.render(u[p]/l,g[p]);else{m.multiDrawElementsWEBGL(r,g,0,a,u,0,v);let p=0;for(let M=0;M<v;M++)p+=g[M];t.update(p,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=d,this.renderMultiDraw=f}function _f(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Mf(s,e){return s[0]-e[0]}function yf(s,e){return Math.abs(e[1])-Math.abs(s[1])}function Sf(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,o=new gt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,d){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=g!==void 0?g.length:0;let m=r.get(h);if(m===void 0||m.count!==v){let L=function(){D.dispose(),r.delete(h),h.removeEventListener("dispose",L)};var u=L;m!==void 0&&m.texture.dispose();const x=h.morphAttributes.position!==void 0,y=h.morphAttributes.normal!==void 0,E=h.morphAttributes.color!==void 0,C=h.morphAttributes.position||[],S=h.morphAttributes.normal||[],P=h.morphAttributes.color||[];let _=0;x===!0&&(_=1),y===!0&&(_=2),E===!0&&(_=3);let A=h.attributes.position.count*_,U=1;A>e.maxTextureSize&&(U=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const F=new Float32Array(A*U*4*v),D=new To(F,A,U,v);D.type=yn,D.needsUpdate=!0;const R=_*4;for(let V=0;V<v;V++){const Z=C[V],K=S[V],W=P[V],j=A*U*4*V;for(let $=0;$<Z.count;$++){const N=$*R;x===!0&&(o.fromBufferAttribute(Z,$),F[j+N+0]=o.x,F[j+N+1]=o.y,F[j+N+2]=o.z,F[j+N+3]=0),y===!0&&(o.fromBufferAttribute(K,$),F[j+N+4]=o.x,F[j+N+5]=o.y,F[j+N+6]=o.z,F[j+N+7]=0),E===!0&&(o.fromBufferAttribute(W,$),F[j+N+8]=o.x,F[j+N+9]=o.y,F[j+N+10]=o.z,F[j+N+11]=W.itemSize===4?o.w:1)}}m={count:v,texture:D,size:new He(A,U)},r.set(h,m),h.addEventListener("dispose",L)}let p=0;for(let x=0;x<f.length;x++)p+=f[x];const M=h.morphTargetsRelative?1:1-p;d.getUniforms().setValue(s,"morphTargetBaseInfluence",M),d.getUniforms().setValue(s,"morphTargetInfluences",f),d.getUniforms().setValue(s,"morphTargetsTexture",m.texture,t),d.getUniforms().setValue(s,"morphTargetsTextureSize",m.size)}else{const g=f===void 0?0:f.length;let v=n[h.id];if(v===void 0||v.length!==g){v=[];for(let y=0;y<g;y++)v[y]=[y,0];n[h.id]=v}for(let y=0;y<g;y++){const E=v[y];E[0]=y,E[1]=f[y]}v.sort(yf);for(let y=0;y<8;y++)y<g&&v[y][1]?(a[y][0]=v[y][0],a[y][1]=v[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(Mf);const m=h.morphAttributes.position,p=h.morphAttributes.normal;let M=0;for(let y=0;y<8;y++){const E=a[y],C=E[0],S=E[1];C!==Number.MAX_SAFE_INTEGER&&S?(m&&h.getAttribute("morphTarget"+y)!==m[C]&&h.setAttribute("morphTarget"+y,m[C]),p&&h.getAttribute("morphNormal"+y)!==p[C]&&h.setAttribute("morphNormal"+y,p[C]),i[y]=S,M+=S):(m&&h.hasAttribute("morphTarget"+y)===!0&&h.deleteAttribute("morphTarget"+y),p&&h.hasAttribute("morphNormal"+y)===!0&&h.deleteAttribute("morphNormal"+y),i[y]=0)}const x=h.morphTargetsRelative?1:1-M;d.getUniforms().setValue(s,"morphTargetBaseInfluence",x),d.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function bf(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,d=e.get(l,h);if(i.get(d)!==c&&(e.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return d}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class No extends Ct{constructor(e,t,n,i,r,o,a,l,c,h){if(h=h!==void 0?h:Vn,h!==Vn&&h!==gi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Vn&&(n=Mn),n===void 0&&h===gi&&(n=Bn),super(null,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Tt,this.minFilter=l!==void 0?l:Tt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Oo=new Ct,Bo=new No(1,1);Bo.compareFunction=So;const Vo=new To,zo=new sc,Ho=new Do,Wa=[],Xa=[],qa=new Float32Array(16),Ya=new Float32Array(9),$a=new Float32Array(4);function Mi(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Wa[i];if(r===void 0&&(r=new Float32Array(i),Wa[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function ct(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function ht(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Ar(s,e){let t=Xa[e];t===void 0&&(t=new Int32Array(e),Xa[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Ef(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Af(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ct(t,e))return;s.uniform2fv(this.addr,e),ht(t,e)}}function Tf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ct(t,e))return;s.uniform3fv(this.addr,e),ht(t,e)}}function wf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ct(t,e))return;s.uniform4fv(this.addr,e),ht(t,e)}}function Cf(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(ct(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),ht(t,e)}else{if(ct(t,n))return;$a.set(n),s.uniformMatrix2fv(this.addr,!1,$a),ht(t,n)}}function Lf(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(ct(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),ht(t,e)}else{if(ct(t,n))return;Ya.set(n),s.uniformMatrix3fv(this.addr,!1,Ya),ht(t,n)}}function Rf(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(ct(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),ht(t,e)}else{if(ct(t,n))return;qa.set(n),s.uniformMatrix4fv(this.addr,!1,qa),ht(t,n)}}function If(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Pf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ct(t,e))return;s.uniform2iv(this.addr,e),ht(t,e)}}function Df(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ct(t,e))return;s.uniform3iv(this.addr,e),ht(t,e)}}function Ff(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ct(t,e))return;s.uniform4iv(this.addr,e),ht(t,e)}}function Uf(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Nf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ct(t,e))return;s.uniform2uiv(this.addr,e),ht(t,e)}}function Of(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ct(t,e))return;s.uniform3uiv(this.addr,e),ht(t,e)}}function Bf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ct(t,e))return;s.uniform4uiv(this.addr,e),ht(t,e)}}function Vf(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const r=this.type===s.SAMPLER_2D_SHADOW?Bo:Oo;t.setTexture2D(e||r,i)}function zf(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||zo,i)}function Hf(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Ho,i)}function kf(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Vo,i)}function Gf(s){switch(s){case 5126:return Ef;case 35664:return Af;case 35665:return Tf;case 35666:return wf;case 35674:return Cf;case 35675:return Lf;case 35676:return Rf;case 5124:case 35670:return If;case 35667:case 35671:return Pf;case 35668:case 35672:return Df;case 35669:case 35673:return Ff;case 5125:return Uf;case 36294:return Nf;case 36295:return Of;case 36296:return Bf;case 35678:case 36198:case 36298:case 36306:case 35682:return Vf;case 35679:case 36299:case 36307:return zf;case 35680:case 36300:case 36308:case 36293:return Hf;case 36289:case 36303:case 36311:case 36292:return kf}}function Wf(s,e){s.uniform1fv(this.addr,e)}function Xf(s,e){const t=Mi(e,this.size,2);s.uniform2fv(this.addr,t)}function qf(s,e){const t=Mi(e,this.size,3);s.uniform3fv(this.addr,t)}function Yf(s,e){const t=Mi(e,this.size,4);s.uniform4fv(this.addr,t)}function $f(s,e){const t=Mi(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Zf(s,e){const t=Mi(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function jf(s,e){const t=Mi(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Kf(s,e){s.uniform1iv(this.addr,e)}function Jf(s,e){s.uniform2iv(this.addr,e)}function Qf(s,e){s.uniform3iv(this.addr,e)}function eu(s,e){s.uniform4iv(this.addr,e)}function tu(s,e){s.uniform1uiv(this.addr,e)}function nu(s,e){s.uniform2uiv(this.addr,e)}function iu(s,e){s.uniform3uiv(this.addr,e)}function ru(s,e){s.uniform4uiv(this.addr,e)}function su(s,e,t){const n=this.cache,i=e.length,r=Ar(t,i);ct(n,r)||(s.uniform1iv(this.addr,r),ht(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Oo,r[o])}function au(s,e,t){const n=this.cache,i=e.length,r=Ar(t,i);ct(n,r)||(s.uniform1iv(this.addr,r),ht(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||zo,r[o])}function ou(s,e,t){const n=this.cache,i=e.length,r=Ar(t,i);ct(n,r)||(s.uniform1iv(this.addr,r),ht(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Ho,r[o])}function lu(s,e,t){const n=this.cache,i=e.length,r=Ar(t,i);ct(n,r)||(s.uniform1iv(this.addr,r),ht(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Vo,r[o])}function cu(s){switch(s){case 5126:return Wf;case 35664:return Xf;case 35665:return qf;case 35666:return Yf;case 35674:return $f;case 35675:return Zf;case 35676:return jf;case 5124:case 35670:return Kf;case 35667:case 35671:return Jf;case 35668:case 35672:return Qf;case 35669:case 35673:return eu;case 5125:return tu;case 36294:return nu;case 36295:return iu;case 36296:return ru;case 35678:case 36198:case 36298:case 36306:case 35682:return su;case 35679:case 36299:case 36307:return au;case 35680:case 36300:case 36308:case 36293:return ou;case 36289:case 36303:case 36311:case 36292:return lu}}class hu{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Gf(t.type)}}class du{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=cu(t.type)}}class fu{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const ss=/(\w+)(\])?(\[|\.)?/g;function Za(s,e){s.seq.push(e),s.map[e.id]=e}function uu(s,e,t){const n=s.name,i=n.length;for(ss.lastIndex=0;;){const r=ss.exec(n),o=ss.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Za(t,c===void 0?new hu(a,s,e):new du(a,s,e));break}else{let d=t.map[a];d===void 0&&(d=new fu(a),Za(t,d)),t=d}}}class ur{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);uu(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function ja(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const pu=37297;let mu=0;function gu(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function vu(s){const e=Xe.getPrimaries(Xe.workingColorSpace),t=Xe.getPrimaries(s);let n;switch(e===t?n="":e===xr&&t===vr?n="LinearDisplayP3ToLinearSRGB":e===vr&&t===xr&&(n="LinearSRGBToLinearDisplayP3"),s){case en:case Sr:return[n,"LinearTransferOETF"];case mt:case bs:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Ka(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+gu(s.getShaderSource(e),o)}else return i}function xu(s,e){const t=vu(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function _u(s,e){let t;switch(e){case wl:t="Linear";break;case Cl:t="Reinhard";break;case Ll:t="OptimizedCineon";break;case Rl:t="ACESFilmic";break;case Pl:t="AgX";break;case Il:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Mu(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(di).join(`
`)}function yu(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(di).join(`
`)}function Su(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function bu(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function di(s){return s!==""}function Ja(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Qa(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Eu=/^[ \t]*#include +<([\w\d./]+)>/gm;function vs(s){return s.replace(Eu,Tu)}const Au=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Tu(s,e){let t=De[e];if(t===void 0){const n=Au.get(e);if(n!==void 0)t=De[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return vs(t)}const wu=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function eo(s){return s.replace(wu,Cu)}function Cu(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function to(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Lu(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===ho?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===tl?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ln&&(e="SHADOWMAP_TYPE_VSM"),e}function Ru(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case pi:case mi:e="ENVMAP_TYPE_CUBE";break;case yr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Iu(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case mi:e="ENVMAP_MODE_REFRACTION";break}return e}function Pu(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case fo:e="ENVMAP_BLENDING_MULTIPLY";break;case Al:e="ENVMAP_BLENDING_MIX";break;case Tl:e="ENVMAP_BLENDING_ADD";break}return e}function Du(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Fu(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Lu(t),c=Ru(t),h=Iu(t),d=Pu(t),f=Du(t),u=t.isWebGL2?"":Mu(t),g=yu(t),v=Su(r),m=i.createProgram();let p,M,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(di).join(`
`),p.length>0&&(p+=`
`),M=[u,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(di).join(`
`),M.length>0&&(M+=`
`)):(p=[to(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(di).join(`
`),M=[u,to(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==pn?"#define TONE_MAPPING":"",t.toneMapping!==pn?De.tonemapping_pars_fragment:"",t.toneMapping!==pn?_u("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",De.colorspace_pars_fragment,xu("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(di).join(`
`)),o=vs(o),o=Ja(o,t),o=Qa(o,t),a=vs(a),a=Ja(a,t),a=Qa(a,t),o=eo(o),a=eo(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,M=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===_a?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===_a?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);const y=x+p+o,E=x+M+a,C=ja(i,i.VERTEX_SHADER,y),S=ja(i,i.FRAGMENT_SHADER,E);i.attachShader(m,C),i.attachShader(m,S),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function P(F){if(s.debug.checkShaderErrors){const D=i.getProgramInfoLog(m).trim(),R=i.getShaderInfoLog(C).trim(),L=i.getShaderInfoLog(S).trim();let V=!0,Z=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(V=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,m,C,S);else{const K=Ka(i,C,"vertex"),W=Ka(i,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+D+`
`+K+`
`+W)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(R===""||L==="")&&(Z=!1);Z&&(F.diagnostics={runnable:V,programLog:D,vertexShader:{log:R,prefix:p},fragmentShader:{log:L,prefix:M}})}i.deleteShader(C),i.deleteShader(S),_=new ur(i,m),A=bu(i,m)}let _;this.getUniforms=function(){return _===void 0&&P(this),_};let A;this.getAttributes=function(){return A===void 0&&P(this),A};let U=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=i.getProgramParameter(m,pu)),U},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=mu++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=C,this.fragmentShader=S,this}let Uu=0;class Nu{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Ou(e),t.set(e,n)),n}}class Ou{constructor(e){this.id=Uu++,this.code=e,this.usedTimes=0}}function Bu(s,e,t,n,i,r,o){const a=new As,l=new Nu,c=[],h=i.isWebGL2,d=i.logarithmicDepthBuffer,f=i.vertexTextures;let u=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(_){return _===0?"uv":`uv${_}`}function m(_,A,U,F,D){const R=F.fog,L=D.geometry,V=_.isMeshStandardMaterial?F.environment:null,Z=(_.isMeshStandardMaterial?t:e).get(_.envMap||V),K=Z&&Z.mapping===yr?Z.image.height:null,W=g[_.type];_.precision!==null&&(u=i.getMaxPrecision(_.precision),u!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",u,"instead."));const j=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,$=j!==void 0?j.length:0;let N=0;L.morphAttributes.position!==void 0&&(N=1),L.morphAttributes.normal!==void 0&&(N=2),L.morphAttributes.color!==void 0&&(N=3);let z,Y,J,re;if(W){const St=Qt[W];z=St.vertexShader,Y=St.fragmentShader}else z=_.vertexShader,Y=_.fragmentShader,l.update(_),J=l.getVertexShaderID(_),re=l.getFragmentShaderID(_);const ue=s.getRenderTarget(),xe=D.isInstancedMesh===!0,Ie=D.isBatchedMesh===!0,Ee=!!_.map,Ge=!!_.matcap,H=!!Z,yt=!!_.aoMap,Me=!!_.lightMap,Ce=!!_.bumpMap,pe=!!_.normalMap,nt=!!_.displacementMap,Fe=!!_.emissiveMap,w=!!_.metalnessMap,b=!!_.roughnessMap,G=_.anisotropy>0,te=_.clearcoat>0,ee=_.iridescence>0,ne=_.sheen>0,me=_.transmission>0,ce=G&&!!_.anisotropyMap,de=te&&!!_.clearcoatMap,be=te&&!!_.clearcoatNormalMap,Ue=te&&!!_.clearcoatRoughnessMap,Q=ee&&!!_.iridescenceMap,$e=ee&&!!_.iridescenceThicknessMap,ze=ne&&!!_.sheenColorMap,we=ne&&!!_.sheenRoughnessMap,_e=!!_.specularMap,fe=!!_.specularColorMap,Pe=!!_.specularIntensityMap,Ye=me&&!!_.transmissionMap,rt=me&&!!_.thicknessMap,Oe=!!_.gradientMap,se=!!_.alphaMap,I=_.alphaTest>0,oe=!!_.alphaHash,le=!!_.extensions,Ae=!!L.attributes.uv1,ye=!!L.attributes.uv2,Ke=!!L.attributes.uv3;let Je=pn;return _.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(Je=s.toneMapping),{isWebGL2:h,shaderID:W,shaderType:_.type,shaderName:_.name,vertexShader:z,fragmentShader:Y,defines:_.defines,customVertexShaderID:J,customFragmentShaderID:re,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:u,batching:Ie,instancing:xe,instancingColor:xe&&D.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:ue===null?s.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:en,map:Ee,matcap:Ge,envMap:H,envMapMode:H&&Z.mapping,envMapCubeUVHeight:K,aoMap:yt,lightMap:Me,bumpMap:Ce,normalMap:pe,displacementMap:f&&nt,emissiveMap:Fe,normalMapObjectSpace:pe&&_.normalMapType===Xl,normalMapTangentSpace:pe&&_.normalMapType===Wl,metalnessMap:w,roughnessMap:b,anisotropy:G,anisotropyMap:ce,clearcoat:te,clearcoatMap:de,clearcoatNormalMap:be,clearcoatRoughnessMap:Ue,iridescence:ee,iridescenceMap:Q,iridescenceThicknessMap:$e,sheen:ne,sheenColorMap:ze,sheenRoughnessMap:we,specularMap:_e,specularColorMap:fe,specularIntensityMap:Pe,transmission:me,transmissionMap:Ye,thicknessMap:rt,gradientMap:Oe,opaque:_.transparent===!1&&_.blending===On,alphaMap:se,alphaTest:I,alphaHash:oe,combine:_.combine,mapUv:Ee&&v(_.map.channel),aoMapUv:yt&&v(_.aoMap.channel),lightMapUv:Me&&v(_.lightMap.channel),bumpMapUv:Ce&&v(_.bumpMap.channel),normalMapUv:pe&&v(_.normalMap.channel),displacementMapUv:nt&&v(_.displacementMap.channel),emissiveMapUv:Fe&&v(_.emissiveMap.channel),metalnessMapUv:w&&v(_.metalnessMap.channel),roughnessMapUv:b&&v(_.roughnessMap.channel),anisotropyMapUv:ce&&v(_.anisotropyMap.channel),clearcoatMapUv:de&&v(_.clearcoatMap.channel),clearcoatNormalMapUv:be&&v(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ue&&v(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&v(_.iridescenceMap.channel),iridescenceThicknessMapUv:$e&&v(_.iridescenceThicknessMap.channel),sheenColorMapUv:ze&&v(_.sheenColorMap.channel),sheenRoughnessMapUv:we&&v(_.sheenRoughnessMap.channel),specularMapUv:_e&&v(_.specularMap.channel),specularColorMapUv:fe&&v(_.specularColorMap.channel),specularIntensityMapUv:Pe&&v(_.specularIntensityMap.channel),transmissionMapUv:Ye&&v(_.transmissionMap.channel),thicknessMapUv:rt&&v(_.thicknessMap.channel),alphaMapUv:se&&v(_.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(pe||G),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,vertexUv1s:Ae,vertexUv2s:ye,vertexUv3s:Ke,pointsUvs:D.isPoints===!0&&!!L.attributes.uv&&(Ee||se),fog:!!R,useFog:_.fog===!0,fogExp2:R&&R.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:D.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:N,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&U.length>0,shadowMapType:s.shadowMap.type,toneMapping:Je,useLegacyLights:s._useLegacyLights,decodeVideoTexture:Ee&&_.map.isVideoTexture===!0&&Xe.getTransfer(_.map.colorSpace)===tt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===qt,flipSided:_.side===Lt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionDerivatives:le&&_.extensions.derivatives===!0,extensionFragDepth:le&&_.extensions.fragDepth===!0,extensionDrawBuffers:le&&_.extensions.drawBuffers===!0,extensionShaderTextureLOD:le&&_.extensions.shaderTextureLOD===!0,extensionClipCullDistance:le&&_.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()}}function p(_){const A=[];if(_.shaderID?A.push(_.shaderID):(A.push(_.customVertexShaderID),A.push(_.customFragmentShaderID)),_.defines!==void 0)for(const U in _.defines)A.push(U),A.push(_.defines[U]);return _.isRawShaderMaterial===!1&&(M(A,_),x(A,_),A.push(s.outputColorSpace)),A.push(_.customProgramCacheKey),A.join()}function M(_,A){_.push(A.precision),_.push(A.outputColorSpace),_.push(A.envMapMode),_.push(A.envMapCubeUVHeight),_.push(A.mapUv),_.push(A.alphaMapUv),_.push(A.lightMapUv),_.push(A.aoMapUv),_.push(A.bumpMapUv),_.push(A.normalMapUv),_.push(A.displacementMapUv),_.push(A.emissiveMapUv),_.push(A.metalnessMapUv),_.push(A.roughnessMapUv),_.push(A.anisotropyMapUv),_.push(A.clearcoatMapUv),_.push(A.clearcoatNormalMapUv),_.push(A.clearcoatRoughnessMapUv),_.push(A.iridescenceMapUv),_.push(A.iridescenceThicknessMapUv),_.push(A.sheenColorMapUv),_.push(A.sheenRoughnessMapUv),_.push(A.specularMapUv),_.push(A.specularColorMapUv),_.push(A.specularIntensityMapUv),_.push(A.transmissionMapUv),_.push(A.thicknessMapUv),_.push(A.combine),_.push(A.fogExp2),_.push(A.sizeAttenuation),_.push(A.morphTargetsCount),_.push(A.morphAttributeCount),_.push(A.numDirLights),_.push(A.numPointLights),_.push(A.numSpotLights),_.push(A.numSpotLightMaps),_.push(A.numHemiLights),_.push(A.numRectAreaLights),_.push(A.numDirLightShadows),_.push(A.numPointLightShadows),_.push(A.numSpotLightShadows),_.push(A.numSpotLightShadowsWithMaps),_.push(A.numLightProbes),_.push(A.shadowMapType),_.push(A.toneMapping),_.push(A.numClippingPlanes),_.push(A.numClipIntersection),_.push(A.depthPacking)}function x(_,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.matcap&&a.enable(4),A.envMap&&a.enable(5),A.normalMapObjectSpace&&a.enable(6),A.normalMapTangentSpace&&a.enable(7),A.clearcoat&&a.enable(8),A.iridescence&&a.enable(9),A.alphaTest&&a.enable(10),A.vertexColors&&a.enable(11),A.vertexAlphas&&a.enable(12),A.vertexUv1s&&a.enable(13),A.vertexUv2s&&a.enable(14),A.vertexUv3s&&a.enable(15),A.vertexTangents&&a.enable(16),A.anisotropy&&a.enable(17),A.alphaHash&&a.enable(18),A.batching&&a.enable(19),_.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.useLegacyLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),_.push(a.mask)}function y(_){const A=g[_.type];let U;if(A){const F=Qt[A];U=xc.clone(F.uniforms)}else U=_.uniforms;return U}function E(_,A){let U;for(let F=0,D=c.length;F<D;F++){const R=c[F];if(R.cacheKey===A){U=R,++U.usedTimes;break}}return U===void 0&&(U=new Fu(s,A,_,r),c.push(U)),U}function C(_){if(--_.usedTimes===0){const A=c.indexOf(_);c[A]=c[c.length-1],c.pop(),_.destroy()}}function S(_){l.remove(_)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:E,releaseProgram:C,releaseShaderCache:S,programs:c,dispose:P}}function Vu(){let s=new WeakMap;function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function t(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function zu(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function no(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function io(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(d,f,u,g,v,m){let p=s[e];return p===void 0?(p={id:d.id,object:d,geometry:f,material:u,groupOrder:g,renderOrder:d.renderOrder,z:v,group:m},s[e]=p):(p.id=d.id,p.object=d,p.geometry=f,p.material=u,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=v,p.group=m),e++,p}function a(d,f,u,g,v,m){const p=o(d,f,u,g,v,m);u.transmission>0?n.push(p):u.transparent===!0?i.push(p):t.push(p)}function l(d,f,u,g,v,m){const p=o(d,f,u,g,v,m);u.transmission>0?n.unshift(p):u.transparent===!0?i.unshift(p):t.unshift(p)}function c(d,f){t.length>1&&t.sort(d||zu),n.length>1&&n.sort(f||no),i.length>1&&i.sort(f||no)}function h(){for(let d=e,f=s.length;d<f;d++){const u=s[d];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function Hu(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new io,s.set(n,[o])):i>=r.length?(o=new io,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function ku(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new qe};break;case"SpotLight":t={position:new B,direction:new B,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new B,halfWidth:new B,halfHeight:new B};break}return s[e.id]=t,t}}}function Gu(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Wu=0;function Xu(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function qu(s,e){const t=new ku,n=Gu(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new B);const r=new B,o=new pt,a=new pt;function l(h,d){let f=0,u=0,g=0;for(let F=0;F<9;F++)i.probe[F].set(0,0,0);let v=0,m=0,p=0,M=0,x=0,y=0,E=0,C=0,S=0,P=0,_=0;h.sort(Xu);const A=d===!0?Math.PI:1;for(let F=0,D=h.length;F<D;F++){const R=h[F],L=R.color,V=R.intensity,Z=R.distance,K=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)f+=L.r*V*A,u+=L.g*V*A,g+=L.b*V*A;else if(R.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(R.sh.coefficients[W],V);_++}else if(R.isDirectionalLight){const W=t.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity*A),R.castShadow){const j=R.shadow,$=n.get(R);$.shadowBias=j.bias,$.shadowNormalBias=j.normalBias,$.shadowRadius=j.radius,$.shadowMapSize=j.mapSize,i.directionalShadow[v]=$,i.directionalShadowMap[v]=K,i.directionalShadowMatrix[v]=R.shadow.matrix,y++}i.directional[v]=W,v++}else if(R.isSpotLight){const W=t.get(R);W.position.setFromMatrixPosition(R.matrixWorld),W.color.copy(L).multiplyScalar(V*A),W.distance=Z,W.coneCos=Math.cos(R.angle),W.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),W.decay=R.decay,i.spot[p]=W;const j=R.shadow;if(R.map&&(i.spotLightMap[S]=R.map,S++,j.updateMatrices(R),R.castShadow&&P++),i.spotLightMatrix[p]=j.matrix,R.castShadow){const $=n.get(R);$.shadowBias=j.bias,$.shadowNormalBias=j.normalBias,$.shadowRadius=j.radius,$.shadowMapSize=j.mapSize,i.spotShadow[p]=$,i.spotShadowMap[p]=K,C++}p++}else if(R.isRectAreaLight){const W=t.get(R);W.color.copy(L).multiplyScalar(V),W.halfWidth.set(R.width*.5,0,0),W.halfHeight.set(0,R.height*.5,0),i.rectArea[M]=W,M++}else if(R.isPointLight){const W=t.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity*A),W.distance=R.distance,W.decay=R.decay,R.castShadow){const j=R.shadow,$=n.get(R);$.shadowBias=j.bias,$.shadowNormalBias=j.normalBias,$.shadowRadius=j.radius,$.shadowMapSize=j.mapSize,$.shadowCameraNear=j.camera.near,$.shadowCameraFar=j.camera.far,i.pointShadow[m]=$,i.pointShadowMap[m]=K,i.pointShadowMatrix[m]=R.shadow.matrix,E++}i.point[m]=W,m++}else if(R.isHemisphereLight){const W=t.get(R);W.skyColor.copy(R.color).multiplyScalar(V*A),W.groundColor.copy(R.groundColor).multiplyScalar(V*A),i.hemi[x]=W,x++}}M>0&&(e.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ae.LTC_FLOAT_1,i.rectAreaLTC2=ae.LTC_FLOAT_2):(i.rectAreaLTC1=ae.LTC_HALF_1,i.rectAreaLTC2=ae.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ae.LTC_FLOAT_1,i.rectAreaLTC2=ae.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ae.LTC_HALF_1,i.rectAreaLTC2=ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=u,i.ambient[2]=g;const U=i.hash;(U.directionalLength!==v||U.pointLength!==m||U.spotLength!==p||U.rectAreaLength!==M||U.hemiLength!==x||U.numDirectionalShadows!==y||U.numPointShadows!==E||U.numSpotShadows!==C||U.numSpotMaps!==S||U.numLightProbes!==_)&&(i.directional.length=v,i.spot.length=p,i.rectArea.length=M,i.point.length=m,i.hemi.length=x,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=C,i.spotShadowMap.length=C,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=C+S-P,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=_,U.directionalLength=v,U.pointLength=m,U.spotLength=p,U.rectAreaLength=M,U.hemiLength=x,U.numDirectionalShadows=y,U.numPointShadows=E,U.numSpotShadows=C,U.numSpotMaps=S,U.numLightProbes=_,i.version=Wu++)}function c(h,d){let f=0,u=0,g=0,v=0,m=0;const p=d.matrixWorldInverse;for(let M=0,x=h.length;M<x;M++){const y=h[M];if(y.isDirectionalLight){const E=i.directional[f];E.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),f++}else if(y.isSpotLight){const E=i.spot[g];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),g++}else if(y.isRectAreaLight){const E=i.rectArea[v];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(p),a.identity(),o.copy(y.matrixWorld),o.premultiply(p),a.extractRotation(o),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),v++}else if(y.isPointLight){const E=i.point[u];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(p),u++}else if(y.isHemisphereLight){const E=i.hemi[m];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:i}}function ro(s,e){const t=new qu(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function o(d){n.push(d)}function a(d){i.push(d)}function l(d){t.setup(n,d)}function c(d){t.setupView(n,d)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Yu(s,e){let t=new WeakMap;function n(r,o=0){const a=t.get(r);let l;return a===void 0?(l=new ro(s,e),t.set(r,[l])):o>=a.length?(l=new ro(s,e),a.push(l)):l=a[o],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class $u extends Oi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=kl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Zu extends Oi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ju=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ku=`uniform sampler2D shadow_pass;
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
}`;function Ju(s,e,t){let n=new Fo;const i=new He,r=new He,o=new gt,a=new $u({depthPacking:Gl}),l=new Zu,c={},h=t.maxTextureSize,d={[An]:Lt,[Lt]:An,[qt]:qt},f=new kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:ju,fragmentShader:Ku}),u=f.clone();u.defines.HORIZONTAL_PASS=1;const g=new Zt;g.setAttribute("position",new $t(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new kt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ho;let p=this.type;this.render=function(C,S,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const _=s.getRenderTarget(),A=s.getActiveCubeFace(),U=s.getActiveMipmapLevel(),F=s.state;F.setBlending(Sn),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const D=p!==ln&&this.type===ln,R=p===ln&&this.type!==ln;for(let L=0,V=C.length;L<V;L++){const Z=C[L],K=Z.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;i.copy(K.mapSize);const W=K.getFrameExtents();if(i.multiply(W),r.copy(K.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/W.x),i.x=r.x*W.x,K.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/W.y),i.y=r.y*W.y,K.mapSize.y=r.y)),K.map===null||D===!0||R===!0){const $=this.type!==ln?{minFilter:Tt,magFilter:Tt}:{};K.map!==null&&K.map.dispose(),K.map=new Hn(i.x,i.y,$),K.map.texture.name=Z.name+".shadowMap",K.camera.updateProjectionMatrix()}s.setRenderTarget(K.map),s.clear();const j=K.getViewportCount();for(let $=0;$<j;$++){const N=K.getViewport($);o.set(r.x*N.x,r.y*N.y,r.x*N.z,r.y*N.w),F.viewport(o),K.updateMatrices(Z,$),n=K.getFrustum(),y(S,P,K.camera,Z,this.type)}K.isPointLightShadow!==!0&&this.type===ln&&M(K,P),K.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(_,A,U)};function M(C,S){const P=e.update(v);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,u.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,u.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Hn(i.x,i.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,s.setRenderTarget(C.mapPass),s.clear(),s.renderBufferDirect(S,null,P,f,v,null),u.uniforms.shadow_pass.value=C.mapPass.texture,u.uniforms.resolution.value=C.mapSize,u.uniforms.radius.value=C.radius,s.setRenderTarget(C.map),s.clear(),s.renderBufferDirect(S,null,P,u,v,null)}function x(C,S,P,_){let A=null;const U=P.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(U!==void 0)A=U;else if(A=P.isPointLight===!0?l:a,s.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const F=A.uuid,D=S.uuid;let R=c[F];R===void 0&&(R={},c[F]=R);let L=R[D];L===void 0&&(L=A.clone(),R[D]=L,S.addEventListener("dispose",E)),A=L}if(A.visible=S.visible,A.wireframe=S.wireframe,_===ln?A.side=S.shadowSide!==null?S.shadowSide:S.side:A.side=S.shadowSide!==null?S.shadowSide:d[S.side],A.alphaMap=S.alphaMap,A.alphaTest=S.alphaTest,A.map=S.map,A.clipShadows=S.clipShadows,A.clippingPlanes=S.clippingPlanes,A.clipIntersection=S.clipIntersection,A.displacementMap=S.displacementMap,A.displacementScale=S.displacementScale,A.displacementBias=S.displacementBias,A.wireframeLinewidth=S.wireframeLinewidth,A.linewidth=S.linewidth,P.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const F=s.properties.get(A);F.light=P}return A}function y(C,S,P,_,A){if(C.visible===!1)return;if(C.layers.test(S.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&A===ln)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,C.matrixWorld);const D=e.update(C),R=C.material;if(Array.isArray(R)){const L=D.groups;for(let V=0,Z=L.length;V<Z;V++){const K=L[V],W=R[K.materialIndex];if(W&&W.visible){const j=x(C,W,_,A);C.onBeforeShadow(s,C,S,P,D,j,K),s.renderBufferDirect(P,null,D,j,C,K),C.onAfterShadow(s,C,S,P,D,j,K)}}}else if(R.visible){const L=x(C,R,_,A);C.onBeforeShadow(s,C,S,P,D,L,null),s.renderBufferDirect(P,null,D,L,C,null),C.onAfterShadow(s,C,S,P,D,L,null)}}const F=C.children;for(let D=0,R=F.length;D<R;D++)y(F[D],S,P,_,A)}function E(C){C.target.removeEventListener("dispose",E);for(const P in c){const _=c[P],A=C.target.uuid;A in _&&(_[A].dispose(),delete _[A])}}}function Qu(s,e,t){const n=t.isWebGL2;function i(){let I=!1;const oe=new gt;let le=null;const Ae=new gt(0,0,0,0);return{setMask:function(ye){le!==ye&&!I&&(s.colorMask(ye,ye,ye,ye),le=ye)},setLocked:function(ye){I=ye},setClear:function(ye,Ke,Je,dt,St){St===!0&&(ye*=dt,Ke*=dt,Je*=dt),oe.set(ye,Ke,Je,dt),Ae.equals(oe)===!1&&(s.clearColor(ye,Ke,Je,dt),Ae.copy(oe))},reset:function(){I=!1,le=null,Ae.set(-1,0,0,0)}}}function r(){let I=!1,oe=null,le=null,Ae=null;return{setTest:function(ye){ye?Ie(s.DEPTH_TEST):Ee(s.DEPTH_TEST)},setMask:function(ye){oe!==ye&&!I&&(s.depthMask(ye),oe=ye)},setFunc:function(ye){if(le!==ye){switch(ye){case xl:s.depthFunc(s.NEVER);break;case _l:s.depthFunc(s.ALWAYS);break;case Ml:s.depthFunc(s.LESS);break;case mr:s.depthFunc(s.LEQUAL);break;case yl:s.depthFunc(s.EQUAL);break;case Sl:s.depthFunc(s.GEQUAL);break;case bl:s.depthFunc(s.GREATER);break;case El:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}le=ye}},setLocked:function(ye){I=ye},setClear:function(ye){Ae!==ye&&(s.clearDepth(ye),Ae=ye)},reset:function(){I=!1,oe=null,le=null,Ae=null}}}function o(){let I=!1,oe=null,le=null,Ae=null,ye=null,Ke=null,Je=null,dt=null,St=null;return{setTest:function(Qe){I||(Qe?Ie(s.STENCIL_TEST):Ee(s.STENCIL_TEST))},setMask:function(Qe){oe!==Qe&&!I&&(s.stencilMask(Qe),oe=Qe)},setFunc:function(Qe,bt,jt){(le!==Qe||Ae!==bt||ye!==jt)&&(s.stencilFunc(Qe,bt,jt),le=Qe,Ae=bt,ye=jt)},setOp:function(Qe,bt,jt){(Ke!==Qe||Je!==bt||dt!==jt)&&(s.stencilOp(Qe,bt,jt),Ke=Qe,Je=bt,dt=jt)},setLocked:function(Qe){I=Qe},setClear:function(Qe){St!==Qe&&(s.clearStencil(Qe),St=Qe)},reset:function(){I=!1,oe=null,le=null,Ae=null,ye=null,Ke=null,Je=null,dt=null,St=null}}}const a=new i,l=new r,c=new o,h=new WeakMap,d=new WeakMap;let f={},u={},g=new WeakMap,v=[],m=null,p=!1,M=null,x=null,y=null,E=null,C=null,S=null,P=null,_=new qe(0,0,0),A=0,U=!1,F=null,D=null,R=null,L=null,V=null;const Z=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,W=0;const j=s.getParameter(s.VERSION);j.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(j)[1]),K=W>=1):j.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),K=W>=2);let $=null,N={};const z=s.getParameter(s.SCISSOR_BOX),Y=s.getParameter(s.VIEWPORT),J=new gt().fromArray(z),re=new gt().fromArray(Y);function ue(I,oe,le,Ae){const ye=new Uint8Array(4),Ke=s.createTexture();s.bindTexture(I,Ke),s.texParameteri(I,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(I,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Je=0;Je<le;Je++)n&&(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)?s.texImage3D(oe,0,s.RGBA,1,1,Ae,0,s.RGBA,s.UNSIGNED_BYTE,ye):s.texImage2D(oe+Je,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ye);return Ke}const xe={};xe[s.TEXTURE_2D]=ue(s.TEXTURE_2D,s.TEXTURE_2D,1),xe[s.TEXTURE_CUBE_MAP]=ue(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(xe[s.TEXTURE_2D_ARRAY]=ue(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),xe[s.TEXTURE_3D]=ue(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ie(s.DEPTH_TEST),l.setFunc(mr),Fe(!1),w(zs),Ie(s.CULL_FACE),pe(Sn);function Ie(I){f[I]!==!0&&(s.enable(I),f[I]=!0)}function Ee(I){f[I]!==!1&&(s.disable(I),f[I]=!1)}function Ge(I,oe){return u[I]!==oe?(s.bindFramebuffer(I,oe),u[I]=oe,n&&(I===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=oe),I===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=oe)),!0):!1}function H(I,oe){let le=v,Ae=!1;if(I)if(le=g.get(oe),le===void 0&&(le=[],g.set(oe,le)),I.isWebGLMultipleRenderTargets){const ye=I.texture;if(le.length!==ye.length||le[0]!==s.COLOR_ATTACHMENT0){for(let Ke=0,Je=ye.length;Ke<Je;Ke++)le[Ke]=s.COLOR_ATTACHMENT0+Ke;le.length=ye.length,Ae=!0}}else le[0]!==s.COLOR_ATTACHMENT0&&(le[0]=s.COLOR_ATTACHMENT0,Ae=!0);else le[0]!==s.BACK&&(le[0]=s.BACK,Ae=!0);Ae&&(t.isWebGL2?s.drawBuffers(le):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(le))}function yt(I){return m!==I?(s.useProgram(I),m=I,!0):!1}const Me={[Fn]:s.FUNC_ADD,[il]:s.FUNC_SUBTRACT,[rl]:s.FUNC_REVERSE_SUBTRACT};if(n)Me[Ws]=s.MIN,Me[Xs]=s.MAX;else{const I=e.get("EXT_blend_minmax");I!==null&&(Me[Ws]=I.MIN_EXT,Me[Xs]=I.MAX_EXT)}const Ce={[sl]:s.ZERO,[al]:s.ONE,[ol]:s.SRC_COLOR,[ls]:s.SRC_ALPHA,[ul]:s.SRC_ALPHA_SATURATE,[dl]:s.DST_COLOR,[cl]:s.DST_ALPHA,[ll]:s.ONE_MINUS_SRC_COLOR,[cs]:s.ONE_MINUS_SRC_ALPHA,[fl]:s.ONE_MINUS_DST_COLOR,[hl]:s.ONE_MINUS_DST_ALPHA,[pl]:s.CONSTANT_COLOR,[ml]:s.ONE_MINUS_CONSTANT_COLOR,[gl]:s.CONSTANT_ALPHA,[vl]:s.ONE_MINUS_CONSTANT_ALPHA};function pe(I,oe,le,Ae,ye,Ke,Je,dt,St,Qe){if(I===Sn){p===!0&&(Ee(s.BLEND),p=!1);return}if(p===!1&&(Ie(s.BLEND),p=!0),I!==nl){if(I!==M||Qe!==U){if((x!==Fn||C!==Fn)&&(s.blendEquation(s.FUNC_ADD),x=Fn,C=Fn),Qe)switch(I){case On:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Hs:s.blendFunc(s.ONE,s.ONE);break;case ks:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Gs:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case On:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Hs:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case ks:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Gs:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}y=null,E=null,S=null,P=null,_.set(0,0,0),A=0,M=I,U=Qe}return}ye=ye||oe,Ke=Ke||le,Je=Je||Ae,(oe!==x||ye!==C)&&(s.blendEquationSeparate(Me[oe],Me[ye]),x=oe,C=ye),(le!==y||Ae!==E||Ke!==S||Je!==P)&&(s.blendFuncSeparate(Ce[le],Ce[Ae],Ce[Ke],Ce[Je]),y=le,E=Ae,S=Ke,P=Je),(dt.equals(_)===!1||St!==A)&&(s.blendColor(dt.r,dt.g,dt.b,St),_.copy(dt),A=St),M=I,U=!1}function nt(I,oe){I.side===qt?Ee(s.CULL_FACE):Ie(s.CULL_FACE);let le=I.side===Lt;oe&&(le=!le),Fe(le),I.blending===On&&I.transparent===!1?pe(Sn):pe(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),l.setFunc(I.depthFunc),l.setTest(I.depthTest),l.setMask(I.depthWrite),a.setMask(I.colorWrite);const Ae=I.stencilWrite;c.setTest(Ae),Ae&&(c.setMask(I.stencilWriteMask),c.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),c.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),G(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Ie(s.SAMPLE_ALPHA_TO_COVERAGE):Ee(s.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(I){F!==I&&(I?s.frontFace(s.CW):s.frontFace(s.CCW),F=I)}function w(I){I!==Qo?(Ie(s.CULL_FACE),I!==D&&(I===zs?s.cullFace(s.BACK):I===el?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ee(s.CULL_FACE),D=I}function b(I){I!==R&&(K&&s.lineWidth(I),R=I)}function G(I,oe,le){I?(Ie(s.POLYGON_OFFSET_FILL),(L!==oe||V!==le)&&(s.polygonOffset(oe,le),L=oe,V=le)):Ee(s.POLYGON_OFFSET_FILL)}function te(I){I?Ie(s.SCISSOR_TEST):Ee(s.SCISSOR_TEST)}function ee(I){I===void 0&&(I=s.TEXTURE0+Z-1),$!==I&&(s.activeTexture(I),$=I)}function ne(I,oe,le){le===void 0&&($===null?le=s.TEXTURE0+Z-1:le=$);let Ae=N[le];Ae===void 0&&(Ae={type:void 0,texture:void 0},N[le]=Ae),(Ae.type!==I||Ae.texture!==oe)&&($!==le&&(s.activeTexture(le),$=le),s.bindTexture(I,oe||xe[I]),Ae.type=I,Ae.texture=oe)}function me(){const I=N[$];I!==void 0&&I.type!==void 0&&(s.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function ce(){try{s.compressedTexImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function de(){try{s.compressedTexImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function be(){try{s.texSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ue(){try{s.texSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Q(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function $e(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ze(){try{s.texStorage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function we(){try{s.texStorage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function _e(){try{s.texImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function fe(){try{s.texImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Pe(I){J.equals(I)===!1&&(s.scissor(I.x,I.y,I.z,I.w),J.copy(I))}function Ye(I){re.equals(I)===!1&&(s.viewport(I.x,I.y,I.z,I.w),re.copy(I))}function rt(I,oe){let le=d.get(oe);le===void 0&&(le=new WeakMap,d.set(oe,le));let Ae=le.get(I);Ae===void 0&&(Ae=s.getUniformBlockIndex(oe,I.name),le.set(I,Ae))}function Oe(I,oe){const Ae=d.get(oe).get(I);h.get(oe)!==Ae&&(s.uniformBlockBinding(oe,Ae,I.__bindingPointIndex),h.set(oe,Ae))}function se(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),f={},$=null,N={},u={},g=new WeakMap,v=[],m=null,p=!1,M=null,x=null,y=null,E=null,C=null,S=null,P=null,_=new qe(0,0,0),A=0,U=!1,F=null,D=null,R=null,L=null,V=null,J.set(0,0,s.canvas.width,s.canvas.height),re.set(0,0,s.canvas.width,s.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Ie,disable:Ee,bindFramebuffer:Ge,drawBuffers:H,useProgram:yt,setBlending:pe,setMaterial:nt,setFlipSided:Fe,setCullFace:w,setLineWidth:b,setPolygonOffset:G,setScissorTest:te,activeTexture:ee,bindTexture:ne,unbindTexture:me,compressedTexImage2D:ce,compressedTexImage3D:de,texImage2D:_e,texImage3D:fe,updateUBOMapping:rt,uniformBlockBinding:Oe,texStorage2D:ze,texStorage3D:we,texSubImage2D:be,texSubImage3D:Ue,compressedTexSubImage2D:Q,compressedTexSubImage3D:$e,scissor:Pe,viewport:Ye,reset:se}}function ep(s,e,t,n,i,r,o){const a=i.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let d;const f=new WeakMap;let u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,b){return u?new OffscreenCanvas(w,b):Ui("canvas")}function v(w,b,G,te){let ee=1;if((w.width>te||w.height>te)&&(ee=te/Math.max(w.width,w.height)),ee<1||b===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){const ne=b?gs:Math.floor,me=ne(ee*w.width),ce=ne(ee*w.height);d===void 0&&(d=g(me,ce));const de=G?g(me,ce):d;return de.width=me,de.height=ce,de.getContext("2d").drawImage(w,0,0,me,ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+me+"x"+ce+")."),de}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function m(w){return Ma(w.width)&&Ma(w.height)}function p(w){return a?!1:w.wrapS!==Yt||w.wrapT!==Yt||w.minFilter!==Tt&&w.minFilter!==Ot}function M(w,b){return w.generateMipmaps&&b&&w.minFilter!==Tt&&w.minFilter!==Ot}function x(w){s.generateMipmap(w)}function y(w,b,G,te,ee=!1){if(a===!1)return b;if(w!==null){if(s[w]!==void 0)return s[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ne=b;if(b===s.RED&&(G===s.FLOAT&&(ne=s.R32F),G===s.HALF_FLOAT&&(ne=s.R16F),G===s.UNSIGNED_BYTE&&(ne=s.R8)),b===s.RED_INTEGER&&(G===s.UNSIGNED_BYTE&&(ne=s.R8UI),G===s.UNSIGNED_SHORT&&(ne=s.R16UI),G===s.UNSIGNED_INT&&(ne=s.R32UI),G===s.BYTE&&(ne=s.R8I),G===s.SHORT&&(ne=s.R16I),G===s.INT&&(ne=s.R32I)),b===s.RG&&(G===s.FLOAT&&(ne=s.RG32F),G===s.HALF_FLOAT&&(ne=s.RG16F),G===s.UNSIGNED_BYTE&&(ne=s.RG8)),b===s.RGBA){const me=ee?gr:Xe.getTransfer(te);G===s.FLOAT&&(ne=s.RGBA32F),G===s.HALF_FLOAT&&(ne=s.RGBA16F),G===s.UNSIGNED_BYTE&&(ne=me===tt?s.SRGB8_ALPHA8:s.RGBA8),G===s.UNSIGNED_SHORT_4_4_4_4&&(ne=s.RGBA4),G===s.UNSIGNED_SHORT_5_5_5_1&&(ne=s.RGB5_A1)}return(ne===s.R16F||ne===s.R32F||ne===s.RG16F||ne===s.RG32F||ne===s.RGBA16F||ne===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function E(w,b,G){return M(w,G)===!0||w.isFramebufferTexture&&w.minFilter!==Tt&&w.minFilter!==Ot?Math.log2(Math.max(b.width,b.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?b.mipmaps.length:1}function C(w){return w===Tt||w===qs||w===Rr?s.NEAREST:s.LINEAR}function S(w){const b=w.target;b.removeEventListener("dispose",S),_(b),b.isVideoTexture&&h.delete(b)}function P(w){const b=w.target;b.removeEventListener("dispose",P),U(b)}function _(w){const b=n.get(w);if(b.__webglInit===void 0)return;const G=w.source,te=f.get(G);if(te){const ee=te[b.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&A(w),Object.keys(te).length===0&&f.delete(G)}n.remove(w)}function A(w){const b=n.get(w);s.deleteTexture(b.__webglTexture);const G=w.source,te=f.get(G);delete te[b.__cacheKey],o.memory.textures--}function U(w){const b=w.texture,G=n.get(w),te=n.get(b);if(te.__webglTexture!==void 0&&(s.deleteTexture(te.__webglTexture),o.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(G.__webglFramebuffer[ee]))for(let ne=0;ne<G.__webglFramebuffer[ee].length;ne++)s.deleteFramebuffer(G.__webglFramebuffer[ee][ne]);else s.deleteFramebuffer(G.__webglFramebuffer[ee]);G.__webglDepthbuffer&&s.deleteRenderbuffer(G.__webglDepthbuffer[ee])}else{if(Array.isArray(G.__webglFramebuffer))for(let ee=0;ee<G.__webglFramebuffer.length;ee++)s.deleteFramebuffer(G.__webglFramebuffer[ee]);else s.deleteFramebuffer(G.__webglFramebuffer);if(G.__webglDepthbuffer&&s.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&s.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer)for(let ee=0;ee<G.__webglColorRenderbuffer.length;ee++)G.__webglColorRenderbuffer[ee]&&s.deleteRenderbuffer(G.__webglColorRenderbuffer[ee]);G.__webglDepthRenderbuffer&&s.deleteRenderbuffer(G.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let ee=0,ne=b.length;ee<ne;ee++){const me=n.get(b[ee]);me.__webglTexture&&(s.deleteTexture(me.__webglTexture),o.memory.textures--),n.remove(b[ee])}n.remove(b),n.remove(w)}let F=0;function D(){F=0}function R(){const w=F;return w>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+i.maxTextures),F+=1,w}function L(w){const b=[];return b.push(w.wrapS),b.push(w.wrapT),b.push(w.wrapR||0),b.push(w.magFilter),b.push(w.minFilter),b.push(w.anisotropy),b.push(w.internalFormat),b.push(w.format),b.push(w.type),b.push(w.generateMipmaps),b.push(w.premultiplyAlpha),b.push(w.flipY),b.push(w.unpackAlignment),b.push(w.colorSpace),b.join()}function V(w,b){const G=n.get(w);if(w.isVideoTexture&&nt(w),w.isRenderTargetTexture===!1&&w.version>0&&G.__version!==w.version){const te=w.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(G,w,b);return}}t.bindTexture(s.TEXTURE_2D,G.__webglTexture,s.TEXTURE0+b)}function Z(w,b){const G=n.get(w);if(w.version>0&&G.__version!==w.version){J(G,w,b);return}t.bindTexture(s.TEXTURE_2D_ARRAY,G.__webglTexture,s.TEXTURE0+b)}function K(w,b){const G=n.get(w);if(w.version>0&&G.__version!==w.version){J(G,w,b);return}t.bindTexture(s.TEXTURE_3D,G.__webglTexture,s.TEXTURE0+b)}function W(w,b){const G=n.get(w);if(w.version>0&&G.__version!==w.version){re(G,w,b);return}t.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture,s.TEXTURE0+b)}const j={[Pi]:s.REPEAT,[Yt]:s.CLAMP_TO_EDGE,[fs]:s.MIRRORED_REPEAT},$={[Tt]:s.NEAREST,[qs]:s.NEAREST_MIPMAP_NEAREST,[Rr]:s.NEAREST_MIPMAP_LINEAR,[Ot]:s.LINEAR,[Dl]:s.LINEAR_MIPMAP_NEAREST,[Di]:s.LINEAR_MIPMAP_LINEAR},N={[ql]:s.NEVER,[Jl]:s.ALWAYS,[Yl]:s.LESS,[So]:s.LEQUAL,[$l]:s.EQUAL,[Kl]:s.GEQUAL,[Zl]:s.GREATER,[jl]:s.NOTEQUAL};function z(w,b,G){if(G?(s.texParameteri(w,s.TEXTURE_WRAP_S,j[b.wrapS]),s.texParameteri(w,s.TEXTURE_WRAP_T,j[b.wrapT]),(w===s.TEXTURE_3D||w===s.TEXTURE_2D_ARRAY)&&s.texParameteri(w,s.TEXTURE_WRAP_R,j[b.wrapR]),s.texParameteri(w,s.TEXTURE_MAG_FILTER,$[b.magFilter]),s.texParameteri(w,s.TEXTURE_MIN_FILTER,$[b.minFilter])):(s.texParameteri(w,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(w,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(w===s.TEXTURE_3D||w===s.TEXTURE_2D_ARRAY)&&s.texParameteri(w,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(b.wrapS!==Yt||b.wrapT!==Yt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(w,s.TEXTURE_MAG_FILTER,C(b.magFilter)),s.texParameteri(w,s.TEXTURE_MIN_FILTER,C(b.minFilter)),b.minFilter!==Tt&&b.minFilter!==Ot&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),b.compareFunction&&(s.texParameteri(w,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(w,s.TEXTURE_COMPARE_FUNC,N[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(b.magFilter===Tt||b.minFilter!==Rr&&b.minFilter!==Di||b.type===yn&&e.has("OES_texture_float_linear")===!1||a===!1&&b.type===Fi&&e.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||n.get(b).__currentAnisotropy)&&(s.texParameterf(w,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy)}}function Y(w,b){let G=!1;w.__webglInit===void 0&&(w.__webglInit=!0,b.addEventListener("dispose",S));const te=b.source;let ee=f.get(te);ee===void 0&&(ee={},f.set(te,ee));const ne=L(b);if(ne!==w.__cacheKey){ee[ne]===void 0&&(ee[ne]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,G=!0),ee[ne].usedTimes++;const me=ee[w.__cacheKey];me!==void 0&&(ee[w.__cacheKey].usedTimes--,me.usedTimes===0&&A(b)),w.__cacheKey=ne,w.__webglTexture=ee[ne].texture}return G}function J(w,b,G){let te=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(te=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(te=s.TEXTURE_3D);const ee=Y(w,b),ne=b.source;t.bindTexture(te,w.__webglTexture,s.TEXTURE0+G);const me=n.get(ne);if(ne.version!==me.__version||ee===!0){t.activeTexture(s.TEXTURE0+G);const ce=Xe.getPrimaries(Xe.workingColorSpace),de=b.colorSpace===Ht?null:Xe.getPrimaries(b.colorSpace),be=b.colorSpace===Ht||ce===de?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const Ue=p(b)&&m(b.image)===!1;let Q=v(b.image,Ue,!1,i.maxTextureSize);Q=Fe(b,Q);const $e=m(Q)||a,ze=r.convert(b.format,b.colorSpace);let we=r.convert(b.type),_e=y(b.internalFormat,ze,we,b.colorSpace,b.isVideoTexture);z(te,b,$e);let fe;const Pe=b.mipmaps,Ye=a&&b.isVideoTexture!==!0&&_e!==Mo,rt=me.__version===void 0||ee===!0,Oe=E(b,Q,$e);if(b.isDepthTexture)_e=s.DEPTH_COMPONENT,a?b.type===yn?_e=s.DEPTH_COMPONENT32F:b.type===Mn?_e=s.DEPTH_COMPONENT24:b.type===Bn?_e=s.DEPTH24_STENCIL8:_e=s.DEPTH_COMPONENT16:b.type===yn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===Vn&&_e===s.DEPTH_COMPONENT&&b.type!==Ss&&b.type!==Mn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=Mn,we=r.convert(b.type)),b.format===gi&&_e===s.DEPTH_COMPONENT&&(_e=s.DEPTH_STENCIL,b.type!==Bn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=Bn,we=r.convert(b.type))),rt&&(Ye?t.texStorage2D(s.TEXTURE_2D,1,_e,Q.width,Q.height):t.texImage2D(s.TEXTURE_2D,0,_e,Q.width,Q.height,0,ze,we,null));else if(b.isDataTexture)if(Pe.length>0&&$e){Ye&&rt&&t.texStorage2D(s.TEXTURE_2D,Oe,_e,Pe[0].width,Pe[0].height);for(let se=0,I=Pe.length;se<I;se++)fe=Pe[se],Ye?t.texSubImage2D(s.TEXTURE_2D,se,0,0,fe.width,fe.height,ze,we,fe.data):t.texImage2D(s.TEXTURE_2D,se,_e,fe.width,fe.height,0,ze,we,fe.data);b.generateMipmaps=!1}else Ye?(rt&&t.texStorage2D(s.TEXTURE_2D,Oe,_e,Q.width,Q.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,Q.width,Q.height,ze,we,Q.data)):t.texImage2D(s.TEXTURE_2D,0,_e,Q.width,Q.height,0,ze,we,Q.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Ye&&rt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Oe,_e,Pe[0].width,Pe[0].height,Q.depth);for(let se=0,I=Pe.length;se<I;se++)fe=Pe[se],b.format!==zt?ze!==null?Ye?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,0,fe.width,fe.height,Q.depth,ze,fe.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,se,_e,fe.width,fe.height,Q.depth,0,fe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?t.texSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,0,fe.width,fe.height,Q.depth,ze,we,fe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,se,_e,fe.width,fe.height,Q.depth,0,ze,we,fe.data)}else{Ye&&rt&&t.texStorage2D(s.TEXTURE_2D,Oe,_e,Pe[0].width,Pe[0].height);for(let se=0,I=Pe.length;se<I;se++)fe=Pe[se],b.format!==zt?ze!==null?Ye?t.compressedTexSubImage2D(s.TEXTURE_2D,se,0,0,fe.width,fe.height,ze,fe.data):t.compressedTexImage2D(s.TEXTURE_2D,se,_e,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?t.texSubImage2D(s.TEXTURE_2D,se,0,0,fe.width,fe.height,ze,we,fe.data):t.texImage2D(s.TEXTURE_2D,se,_e,fe.width,fe.height,0,ze,we,fe.data)}else if(b.isDataArrayTexture)Ye?(rt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Oe,_e,Q.width,Q.height,Q.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ze,we,Q.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,_e,Q.width,Q.height,Q.depth,0,ze,we,Q.data);else if(b.isData3DTexture)Ye?(rt&&t.texStorage3D(s.TEXTURE_3D,Oe,_e,Q.width,Q.height,Q.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ze,we,Q.data)):t.texImage3D(s.TEXTURE_3D,0,_e,Q.width,Q.height,Q.depth,0,ze,we,Q.data);else if(b.isFramebufferTexture){if(rt)if(Ye)t.texStorage2D(s.TEXTURE_2D,Oe,_e,Q.width,Q.height);else{let se=Q.width,I=Q.height;for(let oe=0;oe<Oe;oe++)t.texImage2D(s.TEXTURE_2D,oe,_e,se,I,0,ze,we,null),se>>=1,I>>=1}}else if(Pe.length>0&&$e){Ye&&rt&&t.texStorage2D(s.TEXTURE_2D,Oe,_e,Pe[0].width,Pe[0].height);for(let se=0,I=Pe.length;se<I;se++)fe=Pe[se],Ye?t.texSubImage2D(s.TEXTURE_2D,se,0,0,ze,we,fe):t.texImage2D(s.TEXTURE_2D,se,_e,ze,we,fe);b.generateMipmaps=!1}else Ye?(rt&&t.texStorage2D(s.TEXTURE_2D,Oe,_e,Q.width,Q.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,ze,we,Q)):t.texImage2D(s.TEXTURE_2D,0,_e,ze,we,Q);M(b,$e)&&x(te),me.__version=ne.version,b.onUpdate&&b.onUpdate(b)}w.__version=b.version}function re(w,b,G){if(b.image.length!==6)return;const te=Y(w,b),ee=b.source;t.bindTexture(s.TEXTURE_CUBE_MAP,w.__webglTexture,s.TEXTURE0+G);const ne=n.get(ee);if(ee.version!==ne.__version||te===!0){t.activeTexture(s.TEXTURE0+G);const me=Xe.getPrimaries(Xe.workingColorSpace),ce=b.colorSpace===Ht?null:Xe.getPrimaries(b.colorSpace),de=b.colorSpace===Ht||me===ce?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const be=b.isCompressedTexture||b.image[0].isCompressedTexture,Ue=b.image[0]&&b.image[0].isDataTexture,Q=[];for(let se=0;se<6;se++)!be&&!Ue?Q[se]=v(b.image[se],!1,!0,i.maxCubemapSize):Q[se]=Ue?b.image[se].image:b.image[se],Q[se]=Fe(b,Q[se]);const $e=Q[0],ze=m($e)||a,we=r.convert(b.format,b.colorSpace),_e=r.convert(b.type),fe=y(b.internalFormat,we,_e,b.colorSpace),Pe=a&&b.isVideoTexture!==!0,Ye=ne.__version===void 0||te===!0;let rt=E(b,$e,ze);z(s.TEXTURE_CUBE_MAP,b,ze);let Oe;if(be){Pe&&Ye&&t.texStorage2D(s.TEXTURE_CUBE_MAP,rt,fe,$e.width,$e.height);for(let se=0;se<6;se++){Oe=Q[se].mipmaps;for(let I=0;I<Oe.length;I++){const oe=Oe[I];b.format!==zt?we!==null?Pe?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,I,0,0,oe.width,oe.height,we,oe.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,I,fe,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pe?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,I,0,0,oe.width,oe.height,we,_e,oe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,I,fe,oe.width,oe.height,0,we,_e,oe.data)}}}else{Oe=b.mipmaps,Pe&&Ye&&(Oe.length>0&&rt++,t.texStorage2D(s.TEXTURE_CUBE_MAP,rt,fe,Q[0].width,Q[0].height));for(let se=0;se<6;se++)if(Ue){Pe?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Q[se].width,Q[se].height,we,_e,Q[se].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,fe,Q[se].width,Q[se].height,0,we,_e,Q[se].data);for(let I=0;I<Oe.length;I++){const le=Oe[I].image[se].image;Pe?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,I+1,0,0,le.width,le.height,we,_e,le.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,I+1,fe,le.width,le.height,0,we,_e,le.data)}}else{Pe?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,we,_e,Q[se]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,fe,we,_e,Q[se]);for(let I=0;I<Oe.length;I++){const oe=Oe[I];Pe?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,I+1,0,0,we,_e,oe.image[se]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,I+1,fe,we,_e,oe.image[se])}}}M(b,ze)&&x(s.TEXTURE_CUBE_MAP),ne.__version=ee.version,b.onUpdate&&b.onUpdate(b)}w.__version=b.version}function ue(w,b,G,te,ee,ne){const me=r.convert(G.format,G.colorSpace),ce=r.convert(G.type),de=y(G.internalFormat,me,ce,G.colorSpace);if(!n.get(b).__hasExternalTextures){const Ue=Math.max(1,b.width>>ne),Q=Math.max(1,b.height>>ne);ee===s.TEXTURE_3D||ee===s.TEXTURE_2D_ARRAY?t.texImage3D(ee,ne,de,Ue,Q,b.depth,0,me,ce,null):t.texImage2D(ee,ne,de,Ue,Q,0,me,ce,null)}t.bindFramebuffer(s.FRAMEBUFFER,w),pe(b)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,te,ee,n.get(G).__webglTexture,0,Ce(b)):(ee===s.TEXTURE_2D||ee>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,te,ee,n.get(G).__webglTexture,ne),t.bindFramebuffer(s.FRAMEBUFFER,null)}function xe(w,b,G){if(s.bindRenderbuffer(s.RENDERBUFFER,w),b.depthBuffer&&!b.stencilBuffer){let te=a===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(G||pe(b)){const ee=b.depthTexture;ee&&ee.isDepthTexture&&(ee.type===yn?te=s.DEPTH_COMPONENT32F:ee.type===Mn&&(te=s.DEPTH_COMPONENT24));const ne=Ce(b);pe(b)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ne,te,b.width,b.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,ne,te,b.width,b.height)}else s.renderbufferStorage(s.RENDERBUFFER,te,b.width,b.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,w)}else if(b.depthBuffer&&b.stencilBuffer){const te=Ce(b);G&&pe(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,te,s.DEPTH24_STENCIL8,b.width,b.height):pe(b)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,te,s.DEPTH24_STENCIL8,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,w)}else{const te=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let ee=0;ee<te.length;ee++){const ne=te[ee],me=r.convert(ne.format,ne.colorSpace),ce=r.convert(ne.type),de=y(ne.internalFormat,me,ce,ne.colorSpace),be=Ce(b);G&&pe(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,be,de,b.width,b.height):pe(b)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,be,de,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,de,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ie(w,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,w),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),V(b.depthTexture,0);const te=n.get(b.depthTexture).__webglTexture,ee=Ce(b);if(b.depthTexture.format===Vn)pe(b)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,te,0,ee):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,te,0);else if(b.depthTexture.format===gi)pe(b)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,te,0,ee):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function Ee(w){const b=n.get(w),G=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!b.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Ie(b.__webglFramebuffer,w)}else if(G){b.__webglDepthbuffer=[];for(let te=0;te<6;te++)t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[te]),b.__webglDepthbuffer[te]=s.createRenderbuffer(),xe(b.__webglDepthbuffer[te],w,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=s.createRenderbuffer(),xe(b.__webglDepthbuffer,w,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ge(w,b,G){const te=n.get(w);b!==void 0&&ue(te.__webglFramebuffer,w,w.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),G!==void 0&&Ee(w)}function H(w){const b=w.texture,G=n.get(w),te=n.get(b);w.addEventListener("dispose",P),w.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=s.createTexture()),te.__version=b.version,o.memory.textures++);const ee=w.isWebGLCubeRenderTarget===!0,ne=w.isWebGLMultipleRenderTargets===!0,me=m(w)||a;if(ee){G.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(a&&b.mipmaps&&b.mipmaps.length>0){G.__webglFramebuffer[ce]=[];for(let de=0;de<b.mipmaps.length;de++)G.__webglFramebuffer[ce][de]=s.createFramebuffer()}else G.__webglFramebuffer[ce]=s.createFramebuffer()}else{if(a&&b.mipmaps&&b.mipmaps.length>0){G.__webglFramebuffer=[];for(let ce=0;ce<b.mipmaps.length;ce++)G.__webglFramebuffer[ce]=s.createFramebuffer()}else G.__webglFramebuffer=s.createFramebuffer();if(ne)if(i.drawBuffers){const ce=w.texture;for(let de=0,be=ce.length;de<be;de++){const Ue=n.get(ce[de]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&w.samples>0&&pe(w)===!1){const ce=ne?b:[b];G.__webglMultisampledFramebuffer=s.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let de=0;de<ce.length;de++){const be=ce[de];G.__webglColorRenderbuffer[de]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,G.__webglColorRenderbuffer[de]);const Ue=r.convert(be.format,be.colorSpace),Q=r.convert(be.type),$e=y(be.internalFormat,Ue,Q,be.colorSpace,w.isXRRenderTarget===!0),ze=Ce(w);s.renderbufferStorageMultisample(s.RENDERBUFFER,ze,$e,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+de,s.RENDERBUFFER,G.__webglColorRenderbuffer[de])}s.bindRenderbuffer(s.RENDERBUFFER,null),w.depthBuffer&&(G.__webglDepthRenderbuffer=s.createRenderbuffer(),xe(G.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ee){t.bindTexture(s.TEXTURE_CUBE_MAP,te.__webglTexture),z(s.TEXTURE_CUBE_MAP,b,me);for(let ce=0;ce<6;ce++)if(a&&b.mipmaps&&b.mipmaps.length>0)for(let de=0;de<b.mipmaps.length;de++)ue(G.__webglFramebuffer[ce][de],w,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,de);else ue(G.__webglFramebuffer[ce],w,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);M(b,me)&&x(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ne){const ce=w.texture;for(let de=0,be=ce.length;de<be;de++){const Ue=ce[de],Q=n.get(Ue);t.bindTexture(s.TEXTURE_2D,Q.__webglTexture),z(s.TEXTURE_2D,Ue,me),ue(G.__webglFramebuffer,w,Ue,s.COLOR_ATTACHMENT0+de,s.TEXTURE_2D,0),M(Ue,me)&&x(s.TEXTURE_2D)}t.unbindTexture()}else{let ce=s.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(a?ce=w.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ce,te.__webglTexture),z(ce,b,me),a&&b.mipmaps&&b.mipmaps.length>0)for(let de=0;de<b.mipmaps.length;de++)ue(G.__webglFramebuffer[de],w,b,s.COLOR_ATTACHMENT0,ce,de);else ue(G.__webglFramebuffer,w,b,s.COLOR_ATTACHMENT0,ce,0);M(b,me)&&x(ce),t.unbindTexture()}w.depthBuffer&&Ee(w)}function yt(w){const b=m(w)||a,G=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let te=0,ee=G.length;te<ee;te++){const ne=G[te];if(M(ne,b)){const me=w.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,ce=n.get(ne).__webglTexture;t.bindTexture(me,ce),x(me),t.unbindTexture()}}}function Me(w){if(a&&w.samples>0&&pe(w)===!1){const b=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],G=w.width,te=w.height;let ee=s.COLOR_BUFFER_BIT;const ne=[],me=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ce=n.get(w),de=w.isWebGLMultipleRenderTargets===!0;if(de)for(let be=0;be<b.length;be++)t.bindFramebuffer(s.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ce.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let be=0;be<b.length;be++){ne.push(s.COLOR_ATTACHMENT0+be),w.depthBuffer&&ne.push(me);const Ue=ce.__ignoreDepthValues!==void 0?ce.__ignoreDepthValues:!1;if(Ue===!1&&(w.depthBuffer&&(ee|=s.DEPTH_BUFFER_BIT),w.stencilBuffer&&(ee|=s.STENCIL_BUFFER_BIT)),de&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ce.__webglColorRenderbuffer[be]),Ue===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[me]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[me])),de){const Q=n.get(b[be]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Q,0)}s.blitFramebuffer(0,0,G,te,0,0,G,te,ee,s.NEAREST),c&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ne)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),de)for(let be=0;be<b.length;be++){t.bindFramebuffer(s.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.RENDERBUFFER,ce.__webglColorRenderbuffer[be]);const Ue=n.get(b[be]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ce.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.TEXTURE_2D,Ue,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}}function Ce(w){return Math.min(i.maxSamples,w.samples)}function pe(w){const b=n.get(w);return a&&w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function nt(w){const b=o.render.frame;h.get(w)!==b&&(h.set(w,b),w.update())}function Fe(w,b){const G=w.colorSpace,te=w.format,ee=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===ps||G!==en&&G!==Ht&&(Xe.getTransfer(G)===tt?a===!1?e.has("EXT_sRGB")===!0&&te===zt?(w.format=ps,w.minFilter=Ot,w.generateMipmaps=!1):b=Eo.sRGBToLinear(b):(te!==zt||ee!==bn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),b}this.allocateTextureUnit=R,this.resetTextureUnits=D,this.setTexture2D=V,this.setTexture2DArray=Z,this.setTexture3D=K,this.setTextureCube=W,this.rebindTextures=Ge,this.setupRenderTarget=H,this.updateRenderTargetMipmap=yt,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=pe}function tp(s,e,t){const n=t.isWebGL2;function i(r,o=Ht){let a;const l=Xe.getTransfer(o);if(r===bn)return s.UNSIGNED_BYTE;if(r===mo)return s.UNSIGNED_SHORT_4_4_4_4;if(r===go)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Fl)return s.BYTE;if(r===Ul)return s.SHORT;if(r===Ss)return s.UNSIGNED_SHORT;if(r===po)return s.INT;if(r===Mn)return s.UNSIGNED_INT;if(r===yn)return s.FLOAT;if(r===Fi)return n?s.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Nl)return s.ALPHA;if(r===zt)return s.RGBA;if(r===Ol)return s.LUMINANCE;if(r===Bl)return s.LUMINANCE_ALPHA;if(r===Vn)return s.DEPTH_COMPONENT;if(r===gi)return s.DEPTH_STENCIL;if(r===ps)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Vl)return s.RED;if(r===vo)return s.RED_INTEGER;if(r===zl)return s.RG;if(r===xo)return s.RG_INTEGER;if(r===_o)return s.RGBA_INTEGER;if(r===Ir||r===Pr||r===Dr||r===Fr)if(l===tt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Ir)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Pr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Dr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Fr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Ir)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Pr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Dr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Fr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ys||r===$s||r===Zs||r===js)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Ys)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===$s)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Zs)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===js)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Mo)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Ks||r===Js)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Ks)return l===tt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Js)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Qs||r===ea||r===ta||r===na||r===ia||r===ra||r===sa||r===aa||r===oa||r===la||r===ca||r===ha||r===da||r===fa)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Qs)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ea)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ta)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===na)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ia)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ra)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===sa)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===aa)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===oa)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===la)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===ca)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ha)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===da)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===fa)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ur||r===ua||r===pa)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Ur)return l===tt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===ua)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===pa)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Hl||r===ma||r===ga||r===va)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Ur)return a.COMPRESSED_RED_RGTC1_EXT;if(r===ma)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ga)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===va)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Bn?n?s.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class np extends Vt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class cr extends Rt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ip={type:"move"};class as{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new cr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new cr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new cr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,n),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),u=.02,g=.005;c.inputState.pinching&&f>u+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=u-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ip)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new cr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class rp extends xi{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,f=null,u=null,g=null;const v=t.getContextAttributes();let m=null,p=null;const M=[],x=[],y=new He;let E=null;const C=new Vt;C.layers.enable(1),C.viewport=new gt;const S=new Vt;S.layers.enable(2),S.viewport=new gt;const P=[C,S],_=new np;_.layers.enable(1),_.layers.enable(2);let A=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let Y=M[z];return Y===void 0&&(Y=new as,M[z]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(z){let Y=M[z];return Y===void 0&&(Y=new as,M[z]=Y),Y.getGripSpace()},this.getHand=function(z){let Y=M[z];return Y===void 0&&(Y=new as,M[z]=Y),Y.getHandSpace()};function F(z){const Y=x.indexOf(z.inputSource);if(Y===-1)return;const J=M[Y];J!==void 0&&(J.update(z.inputSource,z.frame,c||o),J.dispatchEvent({type:z.type,data:z.inputSource}))}function D(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",D),i.removeEventListener("inputsourceschange",R);for(let z=0;z<M.length;z++){const Y=x[z];Y!==null&&(x[z]=null,M[z].disconnect(Y))}A=null,U=null,e.setRenderTarget(m),u=null,f=null,d=null,i=null,p=null,N.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(y.width,y.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){r=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){a=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(z){c=z},this.getBaseLayer=function(){return f!==null?f:u},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(z){if(i=z,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",D),i.addEventListener("inputsourceschange",R),v.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(y),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Y={antialias:i.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(i,t,Y),i.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),p=new Hn(u.framebufferWidth,u.framebufferHeight,{format:zt,type:bn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let Y=null,J=null,re=null;v.depth&&(re=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Y=v.stencil?gi:Vn,J=v.stencil?Bn:Mn);const ue={colorFormat:t.RGBA8,depthFormat:re,scaleFactor:r};d=new XRWebGLBinding(i,t),f=d.createProjectionLayer(ue),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),p=new Hn(f.textureWidth,f.textureHeight,{format:zt,type:bn,depthTexture:new No(f.textureWidth,f.textureHeight,J,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const xe=e.properties.get(p);xe.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),N.setContext(i),N.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function R(z){for(let Y=0;Y<z.removed.length;Y++){const J=z.removed[Y],re=x.indexOf(J);re>=0&&(x[re]=null,M[re].disconnect(J))}for(let Y=0;Y<z.added.length;Y++){const J=z.added[Y];let re=x.indexOf(J);if(re===-1){for(let xe=0;xe<M.length;xe++)if(xe>=x.length){x.push(J),re=xe;break}else if(x[xe]===null){x[xe]=J,re=xe;break}if(re===-1)break}const ue=M[re];ue&&ue.connect(J)}}const L=new B,V=new B;function Z(z,Y,J){L.setFromMatrixPosition(Y.matrixWorld),V.setFromMatrixPosition(J.matrixWorld);const re=L.distanceTo(V),ue=Y.projectionMatrix.elements,xe=J.projectionMatrix.elements,Ie=ue[14]/(ue[10]-1),Ee=ue[14]/(ue[10]+1),Ge=(ue[9]+1)/ue[5],H=(ue[9]-1)/ue[5],yt=(ue[8]-1)/ue[0],Me=(xe[8]+1)/xe[0],Ce=Ie*yt,pe=Ie*Me,nt=re/(-yt+Me),Fe=nt*-yt;Y.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(Fe),z.translateZ(nt),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert();const w=Ie+nt,b=Ee+nt,G=Ce-Fe,te=pe+(re-Fe),ee=Ge*Ee/b*w,ne=H*Ee/b*w;z.projectionMatrix.makePerspective(G,te,ee,ne,w,b),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}function K(z,Y){Y===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(Y.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(i===null)return;_.near=S.near=C.near=z.near,_.far=S.far=C.far=z.far,(A!==_.near||U!==_.far)&&(i.updateRenderState({depthNear:_.near,depthFar:_.far}),A=_.near,U=_.far);const Y=z.parent,J=_.cameras;K(_,Y);for(let re=0;re<J.length;re++)K(J[re],Y);J.length===2?Z(_,C,S):_.projectionMatrix.copy(C.projectionMatrix),W(z,_,Y)};function W(z,Y,J){J===null?z.matrix.copy(Y.matrixWorld):(z.matrix.copy(J.matrixWorld),z.matrix.invert(),z.matrix.multiply(Y.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(Y.projectionMatrix),z.projectionMatrixInverse.copy(Y.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=ms*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(f===null&&u===null))return l},this.setFoveation=function(z){l=z,f!==null&&(f.fixedFoveation=z),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=z)};let j=null;function $(z,Y){if(h=Y.getViewerPose(c||o),g=Y,h!==null){const J=h.views;u!==null&&(e.setRenderTargetFramebuffer(p,u.framebuffer),e.setRenderTarget(p));let re=!1;J.length!==_.cameras.length&&(_.cameras.length=0,re=!0);for(let ue=0;ue<J.length;ue++){const xe=J[ue];let Ie=null;if(u!==null)Ie=u.getViewport(xe);else{const Ge=d.getViewSubImage(f,xe);Ie=Ge.viewport,ue===0&&(e.setRenderTargetTextures(p,Ge.colorTexture,f.ignoreDepthValues?void 0:Ge.depthStencilTexture),e.setRenderTarget(p))}let Ee=P[ue];Ee===void 0&&(Ee=new Vt,Ee.layers.enable(ue),Ee.viewport=new gt,P[ue]=Ee),Ee.matrix.fromArray(xe.transform.matrix),Ee.matrix.decompose(Ee.position,Ee.quaternion,Ee.scale),Ee.projectionMatrix.fromArray(xe.projectionMatrix),Ee.projectionMatrixInverse.copy(Ee.projectionMatrix).invert(),Ee.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),ue===0&&(_.matrix.copy(Ee.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),re===!0&&_.cameras.push(Ee)}}for(let J=0;J<M.length;J++){const re=x[J],ue=M[J];re!==null&&ue!==void 0&&ue.update(re,Y,c||o)}j&&j(z,Y),Y.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Y}),g=null}const N=new Uo;N.setAnimationLoop($),this.setAnimationLoop=function(z){j=z},this.dispose=function(){}}}function sp(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Io(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,M,x,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&u(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,M,x):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Lt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Lt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=e.get(p).envMap;if(M&&(m.envMap.value=M,m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const x=s._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*x,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function u(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Lt&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function ap(s,e,t,n){let i={},r={},o=[];const a=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(M,x){const y=x.program;n.uniformBlockBinding(M,y)}function c(M,x){let y=i[M.id];y===void 0&&(g(M),y=h(M),i[M.id]=y,M.addEventListener("dispose",m));const E=x.program;n.updateUBOMapping(M,E);const C=e.render.frame;r[M.id]!==C&&(f(M),r[M.id]=C)}function h(M){const x=d();M.__bindingPointIndex=x;const y=s.createBuffer(),E=M.__size,C=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,E,C),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,y),y}function d(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const x=i[M.id],y=M.uniforms,E=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let C=0,S=y.length;C<S;C++){const P=Array.isArray(y[C])?y[C]:[y[C]];for(let _=0,A=P.length;_<A;_++){const U=P[_];if(u(U,C,_,E)===!0){const F=U.__offset,D=Array.isArray(U.value)?U.value:[U.value];let R=0;for(let L=0;L<D.length;L++){const V=D[L],Z=v(V);typeof V=="number"||typeof V=="boolean"?(U.__data[0]=V,s.bufferSubData(s.UNIFORM_BUFFER,F+R,U.__data)):V.isMatrix3?(U.__data[0]=V.elements[0],U.__data[1]=V.elements[1],U.__data[2]=V.elements[2],U.__data[3]=0,U.__data[4]=V.elements[3],U.__data[5]=V.elements[4],U.__data[6]=V.elements[5],U.__data[7]=0,U.__data[8]=V.elements[6],U.__data[9]=V.elements[7],U.__data[10]=V.elements[8],U.__data[11]=0):(V.toArray(U.__data,R),R+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,F,U.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function u(M,x,y,E){const C=M.value,S=x+"_"+y;if(E[S]===void 0)return typeof C=="number"||typeof C=="boolean"?E[S]=C:E[S]=C.clone(),!0;{const P=E[S];if(typeof C=="number"||typeof C=="boolean"){if(P!==C)return E[S]=C,!0}else if(P.equals(C)===!1)return P.copy(C),!0}return!1}function g(M){const x=M.uniforms;let y=0;const E=16;for(let S=0,P=x.length;S<P;S++){const _=Array.isArray(x[S])?x[S]:[x[S]];for(let A=0,U=_.length;A<U;A++){const F=_[A],D=Array.isArray(F.value)?F.value:[F.value];for(let R=0,L=D.length;R<L;R++){const V=D[R],Z=v(V),K=y%E;K!==0&&E-K<Z.boundary&&(y+=E-K),F.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=y,y+=Z.storage}}}const C=y%E;return C>0&&(y+=E-C),M.__size=y,M.__cache={},this}function v(M){const x={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function m(M){const x=M.target;x.removeEventListener("dispose",m);const y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function p(){for(const M in i)s.deleteBuffer(i[M]);o=[],i={},r={}}return{bind:l,update:c,dispose:p}}class ko{constructor(e={}){const{canvas:t=ec(),context:n=null,depth:i=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;const u=new Uint32Array(4),g=new Int32Array(4);let v=null,m=null;const p=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=mt,this._useLegacyLights=!1,this.toneMapping=pn,this.toneMappingExposure=1;const x=this;let y=!1,E=0,C=0,S=null,P=-1,_=null;const A=new gt,U=new gt;let F=null;const D=new qe(0);let R=0,L=t.width,V=t.height,Z=1,K=null,W=null;const j=new gt(0,0,L,V),$=new gt(0,0,L,V);let N=!1;const z=new Fo;let Y=!1,J=!1,re=null;const ue=new pt,xe=new He,Ie=new B,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ge(){return S===null?Z:1}let H=n;function yt(T,O){for(let X=0;X<T.length;X++){const q=T[X],k=t.getContext(q,O);if(k!==null)return k}return null}try{const T={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ys}`),t.addEventListener("webglcontextlost",se,!1),t.addEventListener("webglcontextrestored",I,!1),t.addEventListener("webglcontextcreationerror",oe,!1),H===null){const O=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&O.shift(),H=yt(O,T),H===null)throw yt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&H instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Me,Ce,pe,nt,Fe,w,b,G,te,ee,ne,me,ce,de,be,Ue,Q,$e,ze,we,_e,fe,Pe,Ye;function rt(){Me=new gf(H),Ce=new cf(H,Me,e),Me.init(Ce),fe=new tp(H,Me,Ce),pe=new Qu(H,Me,Ce),nt=new _f(H),Fe=new Vu,w=new ep(H,Me,pe,Fe,Ce,fe,nt),b=new df(x),G=new mf(x),te=new Ac(H,Ce),Pe=new of(H,Me,te,Ce),ee=new vf(H,te,nt,Pe),ne=new bf(H,ee,te,nt),ze=new Sf(H,Ce,w),Ue=new hf(Fe),me=new Bu(x,b,G,Me,Ce,Pe,Ue),ce=new sp(x,Fe),de=new Hu,be=new Yu(Me,Ce),$e=new af(x,b,G,pe,ne,f,l),Q=new Ju(x,ne,Ce),Ye=new ap(H,nt,Ce,pe),we=new lf(H,Me,nt,Ce),_e=new xf(H,Me,nt,Ce),nt.programs=me.programs,x.capabilities=Ce,x.extensions=Me,x.properties=Fe,x.renderLists=de,x.shadowMap=Q,x.state=pe,x.info=nt}rt();const Oe=new rp(x,H);this.xr=Oe,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const T=Me.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Me.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(T){T!==void 0&&(Z=T,this.setSize(L,V,!1))},this.getSize=function(T){return T.set(L,V)},this.setSize=function(T,O,X=!0){if(Oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}L=T,V=O,t.width=Math.floor(T*Z),t.height=Math.floor(O*Z),X===!0&&(t.style.width=T+"px",t.style.height=O+"px"),this.setViewport(0,0,T,O)},this.getDrawingBufferSize=function(T){return T.set(L*Z,V*Z).floor()},this.setDrawingBufferSize=function(T,O,X){L=T,V=O,Z=X,t.width=Math.floor(T*X),t.height=Math.floor(O*X),this.setViewport(0,0,T,O)},this.getCurrentViewport=function(T){return T.copy(A)},this.getViewport=function(T){return T.copy(j)},this.setViewport=function(T,O,X,q){T.isVector4?j.set(T.x,T.y,T.z,T.w):j.set(T,O,X,q),pe.viewport(A.copy(j).multiplyScalar(Z).floor())},this.getScissor=function(T){return T.copy($)},this.setScissor=function(T,O,X,q){T.isVector4?$.set(T.x,T.y,T.z,T.w):$.set(T,O,X,q),pe.scissor(U.copy($).multiplyScalar(Z).floor())},this.getScissorTest=function(){return N},this.setScissorTest=function(T){pe.setScissorTest(N=T)},this.setOpaqueSort=function(T){K=T},this.setTransparentSort=function(T){W=T},this.getClearColor=function(T){return T.copy($e.getClearColor())},this.setClearColor=function(){$e.setClearColor.apply($e,arguments)},this.getClearAlpha=function(){return $e.getClearAlpha()},this.setClearAlpha=function(){$e.setClearAlpha.apply($e,arguments)},this.clear=function(T=!0,O=!0,X=!0){let q=0;if(T){let k=!1;if(S!==null){const he=S.texture.format;k=he===_o||he===xo||he===vo}if(k){const he=S.texture.type,ge=he===bn||he===Mn||he===Ss||he===Bn||he===mo||he===go,Se=$e.getClearColor(),Te=$e.getClearAlpha(),Ne=Se.r,Le=Se.g,Re=Se.b;ge?(u[0]=Ne,u[1]=Le,u[2]=Re,u[3]=Te,H.clearBufferuiv(H.COLOR,0,u)):(g[0]=Ne,g[1]=Le,g[2]=Re,g[3]=Te,H.clearBufferiv(H.COLOR,0,g))}else q|=H.COLOR_BUFFER_BIT}O&&(q|=H.DEPTH_BUFFER_BIT),X&&(q|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",se,!1),t.removeEventListener("webglcontextrestored",I,!1),t.removeEventListener("webglcontextcreationerror",oe,!1),de.dispose(),be.dispose(),Fe.dispose(),b.dispose(),G.dispose(),ne.dispose(),Pe.dispose(),Ye.dispose(),me.dispose(),Oe.dispose(),Oe.removeEventListener("sessionstart",St),Oe.removeEventListener("sessionend",Qe),re&&(re.dispose(),re=null),bt.stop()};function se(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function I(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const T=nt.autoReset,O=Q.enabled,X=Q.autoUpdate,q=Q.needsUpdate,k=Q.type;rt(),nt.autoReset=T,Q.enabled=O,Q.autoUpdate=X,Q.needsUpdate=q,Q.type=k}function oe(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function le(T){const O=T.target;O.removeEventListener("dispose",le),Ae(O)}function Ae(T){ye(T),Fe.remove(T)}function ye(T){const O=Fe.get(T).programs;O!==void 0&&(O.forEach(function(X){me.releaseProgram(X)}),T.isShaderMaterial&&me.releaseShaderCache(T))}this.renderBufferDirect=function(T,O,X,q,k,he){O===null&&(O=Ee);const ge=k.isMesh&&k.matrixWorld.determinant()<0,Se=Yo(T,O,X,q,k);pe.setMaterial(q,ge);let Te=X.index,Ne=1;if(q.wireframe===!0){if(Te=ee.getWireframeAttribute(X),Te===void 0)return;Ne=2}const Le=X.drawRange,Re=X.attributes.position;let at=Le.start*Ne,It=(Le.start+Le.count)*Ne;he!==null&&(at=Math.max(at,he.start*Ne),It=Math.min(It,(he.start+he.count)*Ne)),Te!==null?(at=Math.max(at,0),It=Math.min(It,Te.count)):Re!=null&&(at=Math.max(at,0),It=Math.min(It,Re.count));const ft=It-at;if(ft<0||ft===1/0)return;Pe.setup(k,q,Se,X,Te);let tn,it=we;if(Te!==null&&(tn=te.get(Te),it=_e,it.setIndex(tn)),k.isMesh)q.wireframe===!0?(pe.setLineWidth(q.wireframeLinewidth*Ge()),it.setMode(H.LINES)):it.setMode(H.TRIANGLES);else if(k.isLine){let Be=q.linewidth;Be===void 0&&(Be=1),pe.setLineWidth(Be*Ge()),k.isLineSegments?it.setMode(H.LINES):k.isLineLoop?it.setMode(H.LINE_LOOP):it.setMode(H.LINE_STRIP)}else k.isPoints?it.setMode(H.POINTS):k.isSprite&&it.setMode(H.TRIANGLES);if(k.isBatchedMesh)it.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else if(k.isInstancedMesh)it.renderInstances(at,ft,k.count);else if(X.isInstancedBufferGeometry){const Be=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Tr=Math.min(X.instanceCount,Be);it.renderInstances(at,ft,Tr)}else it.render(at,ft)};function Ke(T,O,X){T.transparent===!0&&T.side===qt&&T.forceSinglePass===!1?(T.side=Lt,T.needsUpdate=!0,zi(T,O,X),T.side=An,T.needsUpdate=!0,zi(T,O,X),T.side=qt):zi(T,O,X)}this.compile=function(T,O,X=null){X===null&&(X=T),m=be.get(X),m.init(),M.push(m),X.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),T!==X&&T.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),m.setupLights(x._useLegacyLights);const q=new Set;return T.traverse(function(k){const he=k.material;if(he)if(Array.isArray(he))for(let ge=0;ge<he.length;ge++){const Se=he[ge];Ke(Se,X,k),q.add(Se)}else Ke(he,X,k),q.add(he)}),M.pop(),m=null,q},this.compileAsync=function(T,O,X=null){const q=this.compile(T,O,X);return new Promise(k=>{function he(){if(q.forEach(function(ge){Fe.get(ge).currentProgram.isReady()&&q.delete(ge)}),q.size===0){k(T);return}setTimeout(he,10)}Me.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let Je=null;function dt(T){Je&&Je(T)}function St(){bt.stop()}function Qe(){bt.start()}const bt=new Uo;bt.setAnimationLoop(dt),typeof self<"u"&&bt.setContext(self),this.setAnimationLoop=function(T){Je=T,Oe.setAnimationLoop(T),T===null?bt.stop():bt.start()},Oe.addEventListener("sessionstart",St),Oe.addEventListener("sessionend",Qe),this.render=function(T,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Oe.enabled===!0&&Oe.isPresenting===!0&&(Oe.cameraAutoUpdate===!0&&Oe.updateCamera(O),O=Oe.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,O,S),m=be.get(T,M.length),m.init(),M.push(m),ue.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),z.setFromProjectionMatrix(ue),J=this.localClippingEnabled,Y=Ue.init(this.clippingPlanes,J),v=de.get(T,p.length),v.init(),p.push(v),jt(T,O,0,x.sortObjects),v.finish(),x.sortObjects===!0&&v.sort(K,W),this.info.render.frame++,Y===!0&&Ue.beginShadows();const X=m.state.shadowsArray;if(Q.render(X,T,O),Y===!0&&Ue.endShadows(),this.info.autoReset===!0&&this.info.reset(),$e.render(v,T),m.setupLights(x._useLegacyLights),O.isArrayCamera){const q=O.cameras;for(let k=0,he=q.length;k<he;k++){const ge=q[k];Ls(v,T,ge,ge.viewport)}}else Ls(v,T,O);S!==null&&(w.updateMultisampleRenderTarget(S),w.updateRenderTargetMipmap(S)),T.isScene===!0&&T.onAfterRender(x,T,O),Pe.resetDefaultState(),P=-1,_=null,M.pop(),M.length>0?m=M[M.length-1]:m=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function jt(T,O,X,q){if(T.visible===!1)return;if(T.layers.test(O.layers)){if(T.isGroup)X=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(O);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||z.intersectsSprite(T)){q&&Ie.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ue);const ge=ne.update(T),Se=T.material;Se.visible&&v.push(T,ge,Se,X,Ie.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||z.intersectsObject(T))){const ge=ne.update(T),Se=T.material;if(q&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ie.copy(T.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),Ie.copy(ge.boundingSphere.center)),Ie.applyMatrix4(T.matrixWorld).applyMatrix4(ue)),Array.isArray(Se)){const Te=ge.groups;for(let Ne=0,Le=Te.length;Ne<Le;Ne++){const Re=Te[Ne],at=Se[Re.materialIndex];at&&at.visible&&v.push(T,ge,at,X,Ie.z,Re)}}else Se.visible&&v.push(T,ge,Se,X,Ie.z,null)}}const he=T.children;for(let ge=0,Se=he.length;ge<Se;ge++)jt(he[ge],O,X,q)}function Ls(T,O,X,q){const k=T.opaque,he=T.transmissive,ge=T.transparent;m.setupLightsView(X),Y===!0&&Ue.setGlobalState(x.clippingPlanes,X),he.length>0&&qo(k,he,O,X),q&&pe.viewport(A.copy(q)),k.length>0&&Vi(k,O,X),he.length>0&&Vi(he,O,X),ge.length>0&&Vi(ge,O,X),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function qo(T,O,X,q){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;const he=Ce.isWebGL2;re===null&&(re=new Hn(1,1,{generateMipmaps:!0,type:Me.has("EXT_color_buffer_half_float")?Fi:bn,minFilter:Di,samples:he?4:0})),x.getDrawingBufferSize(xe),he?re.setSize(xe.x,xe.y):re.setSize(gs(xe.x),gs(xe.y));const ge=x.getRenderTarget();x.setRenderTarget(re),x.getClearColor(D),R=x.getClearAlpha(),R<1&&x.setClearColor(16777215,.5),x.clear();const Se=x.toneMapping;x.toneMapping=pn,Vi(T,X,q),w.updateMultisampleRenderTarget(re),w.updateRenderTargetMipmap(re);let Te=!1;for(let Ne=0,Le=O.length;Ne<Le;Ne++){const Re=O[Ne],at=Re.object,It=Re.geometry,ft=Re.material,tn=Re.group;if(ft.side===qt&&at.layers.test(q.layers)){const it=ft.side;ft.side=Lt,ft.needsUpdate=!0,Rs(at,X,q,It,ft,tn),ft.side=it,ft.needsUpdate=!0,Te=!0}}Te===!0&&(w.updateMultisampleRenderTarget(re),w.updateRenderTargetMipmap(re)),x.setRenderTarget(ge),x.setClearColor(D,R),x.toneMapping=Se}function Vi(T,O,X){const q=O.isScene===!0?O.overrideMaterial:null;for(let k=0,he=T.length;k<he;k++){const ge=T[k],Se=ge.object,Te=ge.geometry,Ne=q===null?ge.material:q,Le=ge.group;Se.layers.test(X.layers)&&Rs(Se,O,X,Te,Ne,Le)}}function Rs(T,O,X,q,k,he){T.onBeforeRender(x,O,X,q,k,he),T.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),k.onBeforeRender(x,O,X,q,T,he),k.transparent===!0&&k.side===qt&&k.forceSinglePass===!1?(k.side=Lt,k.needsUpdate=!0,x.renderBufferDirect(X,O,q,k,T,he),k.side=An,k.needsUpdate=!0,x.renderBufferDirect(X,O,q,k,T,he),k.side=qt):x.renderBufferDirect(X,O,q,k,T,he),T.onAfterRender(x,O,X,q,k,he)}function zi(T,O,X){O.isScene!==!0&&(O=Ee);const q=Fe.get(T),k=m.state.lights,he=m.state.shadowsArray,ge=k.state.version,Se=me.getParameters(T,k.state,he,O,X),Te=me.getProgramCacheKey(Se);let Ne=q.programs;q.environment=T.isMeshStandardMaterial?O.environment:null,q.fog=O.fog,q.envMap=(T.isMeshStandardMaterial?G:b).get(T.envMap||q.environment),Ne===void 0&&(T.addEventListener("dispose",le),Ne=new Map,q.programs=Ne);let Le=Ne.get(Te);if(Le!==void 0){if(q.currentProgram===Le&&q.lightsStateVersion===ge)return Ps(T,Se),Le}else Se.uniforms=me.getUniforms(T),T.onBuild(X,Se,x),T.onBeforeCompile(Se,x),Le=me.acquireProgram(Se,Te),Ne.set(Te,Le),q.uniforms=Se.uniforms;const Re=q.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Re.clippingPlanes=Ue.uniform),Ps(T,Se),q.needsLights=Zo(T),q.lightsStateVersion=ge,q.needsLights&&(Re.ambientLightColor.value=k.state.ambient,Re.lightProbe.value=k.state.probe,Re.directionalLights.value=k.state.directional,Re.directionalLightShadows.value=k.state.directionalShadow,Re.spotLights.value=k.state.spot,Re.spotLightShadows.value=k.state.spotShadow,Re.rectAreaLights.value=k.state.rectArea,Re.ltc_1.value=k.state.rectAreaLTC1,Re.ltc_2.value=k.state.rectAreaLTC2,Re.pointLights.value=k.state.point,Re.pointLightShadows.value=k.state.pointShadow,Re.hemisphereLights.value=k.state.hemi,Re.directionalShadowMap.value=k.state.directionalShadowMap,Re.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Re.spotShadowMap.value=k.state.spotShadowMap,Re.spotLightMatrix.value=k.state.spotLightMatrix,Re.spotLightMap.value=k.state.spotLightMap,Re.pointShadowMap.value=k.state.pointShadowMap,Re.pointShadowMatrix.value=k.state.pointShadowMatrix),q.currentProgram=Le,q.uniformsList=null,Le}function Is(T){if(T.uniformsList===null){const O=T.currentProgram.getUniforms();T.uniformsList=ur.seqWithValue(O.seq,T.uniforms)}return T.uniformsList}function Ps(T,O){const X=Fe.get(T);X.outputColorSpace=O.outputColorSpace,X.batching=O.batching,X.instancing=O.instancing,X.instancingColor=O.instancingColor,X.skinning=O.skinning,X.morphTargets=O.morphTargets,X.morphNormals=O.morphNormals,X.morphColors=O.morphColors,X.morphTargetsCount=O.morphTargetsCount,X.numClippingPlanes=O.numClippingPlanes,X.numIntersection=O.numClipIntersection,X.vertexAlphas=O.vertexAlphas,X.vertexTangents=O.vertexTangents,X.toneMapping=O.toneMapping}function Yo(T,O,X,q,k){O.isScene!==!0&&(O=Ee),w.resetTextureUnits();const he=O.fog,ge=q.isMeshStandardMaterial?O.environment:null,Se=S===null?x.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:en,Te=(q.isMeshStandardMaterial?G:b).get(q.envMap||ge),Ne=q.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Le=!!X.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Re=!!X.morphAttributes.position,at=!!X.morphAttributes.normal,It=!!X.morphAttributes.color;let ft=pn;q.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(ft=x.toneMapping);const tn=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,it=tn!==void 0?tn.length:0,Be=Fe.get(q),Tr=m.state.lights;if(Y===!0&&(J===!0||T!==_)){const Ft=T===_&&q.id===P;Ue.setState(q,T,Ft)}let st=!1;q.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==Tr.state.version||Be.outputColorSpace!==Se||k.isBatchedMesh&&Be.batching===!1||!k.isBatchedMesh&&Be.batching===!0||k.isInstancedMesh&&Be.instancing===!1||!k.isInstancedMesh&&Be.instancing===!0||k.isSkinnedMesh&&Be.skinning===!1||!k.isSkinnedMesh&&Be.skinning===!0||k.isInstancedMesh&&Be.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Be.instancingColor===!1&&k.instanceColor!==null||Be.envMap!==Te||q.fog===!0&&Be.fog!==he||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==Ue.numPlanes||Be.numIntersection!==Ue.numIntersection)||Be.vertexAlphas!==Ne||Be.vertexTangents!==Le||Be.morphTargets!==Re||Be.morphNormals!==at||Be.morphColors!==It||Be.toneMapping!==ft||Ce.isWebGL2===!0&&Be.morphTargetsCount!==it)&&(st=!0):(st=!0,Be.__version=q.version);let Tn=Be.currentProgram;st===!0&&(Tn=zi(q,O,k));let Ds=!1,yi=!1,wr=!1;const vt=Tn.getUniforms(),wn=Be.uniforms;if(pe.useProgram(Tn.program)&&(Ds=!0,yi=!0,wr=!0),q.id!==P&&(P=q.id,yi=!0),Ds||_!==T){vt.setValue(H,"projectionMatrix",T.projectionMatrix),vt.setValue(H,"viewMatrix",T.matrixWorldInverse);const Ft=vt.map.cameraPosition;Ft!==void 0&&Ft.setValue(H,Ie.setFromMatrixPosition(T.matrixWorld)),Ce.logarithmicDepthBuffer&&vt.setValue(H,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&vt.setValue(H,"isOrthographic",T.isOrthographicCamera===!0),_!==T&&(_=T,yi=!0,wr=!0)}if(k.isSkinnedMesh){vt.setOptional(H,k,"bindMatrix"),vt.setOptional(H,k,"bindMatrixInverse");const Ft=k.skeleton;Ft&&(Ce.floatVertexTextures?(Ft.boneTexture===null&&Ft.computeBoneTexture(),vt.setValue(H,"boneTexture",Ft.boneTexture,w)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}k.isBatchedMesh&&(vt.setOptional(H,k,"batchingTexture"),vt.setValue(H,"batchingTexture",k._matricesTexture,w));const Cr=X.morphAttributes;if((Cr.position!==void 0||Cr.normal!==void 0||Cr.color!==void 0&&Ce.isWebGL2===!0)&&ze.update(k,X,Tn),(yi||Be.receiveShadow!==k.receiveShadow)&&(Be.receiveShadow=k.receiveShadow,vt.setValue(H,"receiveShadow",k.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(wn.envMap.value=Te,wn.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),yi&&(vt.setValue(H,"toneMappingExposure",x.toneMappingExposure),Be.needsLights&&$o(wn,wr),he&&q.fog===!0&&ce.refreshFogUniforms(wn,he),ce.refreshMaterialUniforms(wn,q,Z,V,re),ur.upload(H,Is(Be),wn,w)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(ur.upload(H,Is(Be),wn,w),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&vt.setValue(H,"center",k.center),vt.setValue(H,"modelViewMatrix",k.modelViewMatrix),vt.setValue(H,"normalMatrix",k.normalMatrix),vt.setValue(H,"modelMatrix",k.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const Ft=q.uniformsGroups;for(let Lr=0,jo=Ft.length;Lr<jo;Lr++)if(Ce.isWebGL2){const Fs=Ft[Lr];Ye.update(Fs,Tn),Ye.bind(Fs,Tn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Tn}function $o(T,O){T.ambientLightColor.needsUpdate=O,T.lightProbe.needsUpdate=O,T.directionalLights.needsUpdate=O,T.directionalLightShadows.needsUpdate=O,T.pointLights.needsUpdate=O,T.pointLightShadows.needsUpdate=O,T.spotLights.needsUpdate=O,T.spotLightShadows.needsUpdate=O,T.rectAreaLights.needsUpdate=O,T.hemisphereLights.needsUpdate=O}function Zo(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(T,O,X){Fe.get(T.texture).__webglTexture=O,Fe.get(T.depthTexture).__webglTexture=X;const q=Fe.get(T);q.__hasExternalTextures=!0,q.__hasExternalTextures&&(q.__autoAllocateDepthBuffer=X===void 0,q.__autoAllocateDepthBuffer||Me.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,O){const X=Fe.get(T);X.__webglFramebuffer=O,X.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(T,O=0,X=0){S=T,E=O,C=X;let q=!0,k=null,he=!1,ge=!1;if(T){const Te=Fe.get(T);Te.__useDefaultFramebuffer!==void 0?(pe.bindFramebuffer(H.FRAMEBUFFER,null),q=!1):Te.__webglFramebuffer===void 0?w.setupRenderTarget(T):Te.__hasExternalTextures&&w.rebindTextures(T,Fe.get(T.texture).__webglTexture,Fe.get(T.depthTexture).__webglTexture);const Ne=T.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(ge=!0);const Le=Fe.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Le[O])?k=Le[O][X]:k=Le[O],he=!0):Ce.isWebGL2&&T.samples>0&&w.useMultisampledRTT(T)===!1?k=Fe.get(T).__webglMultisampledFramebuffer:Array.isArray(Le)?k=Le[X]:k=Le,A.copy(T.viewport),U.copy(T.scissor),F=T.scissorTest}else A.copy(j).multiplyScalar(Z).floor(),U.copy($).multiplyScalar(Z).floor(),F=N;if(pe.bindFramebuffer(H.FRAMEBUFFER,k)&&Ce.drawBuffers&&q&&pe.drawBuffers(T,k),pe.viewport(A),pe.scissor(U),pe.setScissorTest(F),he){const Te=Fe.get(T.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+O,Te.__webglTexture,X)}else if(ge){const Te=Fe.get(T.texture),Ne=O||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Te.__webglTexture,X||0,Ne)}P=-1},this.readRenderTargetPixels=function(T,O,X,q,k,he,ge){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=Fe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ge!==void 0&&(Se=Se[ge]),Se){pe.bindFramebuffer(H.FRAMEBUFFER,Se);try{const Te=T.texture,Ne=Te.format,Le=Te.type;if(Ne!==zt&&fe.convert(Ne)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Re=Le===Fi&&(Me.has("EXT_color_buffer_half_float")||Ce.isWebGL2&&Me.has("EXT_color_buffer_float"));if(Le!==bn&&fe.convert(Le)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Le===yn&&(Ce.isWebGL2||Me.has("OES_texture_float")||Me.has("WEBGL_color_buffer_float")))&&!Re){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=T.width-q&&X>=0&&X<=T.height-k&&H.readPixels(O,X,q,k,fe.convert(Ne),fe.convert(Le),he)}finally{const Te=S!==null?Fe.get(S).__webglFramebuffer:null;pe.bindFramebuffer(H.FRAMEBUFFER,Te)}}},this.copyFramebufferToTexture=function(T,O,X=0){const q=Math.pow(2,-X),k=Math.floor(O.image.width*q),he=Math.floor(O.image.height*q);w.setTexture2D(O,0),H.copyTexSubImage2D(H.TEXTURE_2D,X,0,0,T.x,T.y,k,he),pe.unbindTexture()},this.copyTextureToTexture=function(T,O,X,q=0){const k=O.image.width,he=O.image.height,ge=fe.convert(X.format),Se=fe.convert(X.type);w.setTexture2D(X,0),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,X.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,X.unpackAlignment),O.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,q,T.x,T.y,k,he,ge,Se,O.image.data):O.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,q,T.x,T.y,O.mipmaps[0].width,O.mipmaps[0].height,ge,O.mipmaps[0].data):H.texSubImage2D(H.TEXTURE_2D,q,T.x,T.y,ge,Se,O.image),q===0&&X.generateMipmaps&&H.generateMipmap(H.TEXTURE_2D),pe.unbindTexture()},this.copyTextureToTexture3D=function(T,O,X,q,k=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const he=T.max.x-T.min.x+1,ge=T.max.y-T.min.y+1,Se=T.max.z-T.min.z+1,Te=fe.convert(q.format),Ne=fe.convert(q.type);let Le;if(q.isData3DTexture)w.setTexture3D(q,0),Le=H.TEXTURE_3D;else if(q.isDataArrayTexture||q.isCompressedArrayTexture)w.setTexture2DArray(q,0),Le=H.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,q.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,q.unpackAlignment);const Re=H.getParameter(H.UNPACK_ROW_LENGTH),at=H.getParameter(H.UNPACK_IMAGE_HEIGHT),It=H.getParameter(H.UNPACK_SKIP_PIXELS),ft=H.getParameter(H.UNPACK_SKIP_ROWS),tn=H.getParameter(H.UNPACK_SKIP_IMAGES),it=X.isCompressedTexture?X.mipmaps[k]:X.image;H.pixelStorei(H.UNPACK_ROW_LENGTH,it.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,it.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,T.min.x),H.pixelStorei(H.UNPACK_SKIP_ROWS,T.min.y),H.pixelStorei(H.UNPACK_SKIP_IMAGES,T.min.z),X.isDataTexture||X.isData3DTexture?H.texSubImage3D(Le,k,O.x,O.y,O.z,he,ge,Se,Te,Ne,it.data):X.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),H.compressedTexSubImage3D(Le,k,O.x,O.y,O.z,he,ge,Se,Te,it.data)):H.texSubImage3D(Le,k,O.x,O.y,O.z,he,ge,Se,Te,Ne,it),H.pixelStorei(H.UNPACK_ROW_LENGTH,Re),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,at),H.pixelStorei(H.UNPACK_SKIP_PIXELS,It),H.pixelStorei(H.UNPACK_SKIP_ROWS,ft),H.pixelStorei(H.UNPACK_SKIP_IMAGES,tn),k===0&&q.generateMipmaps&&H.generateMipmap(Le),pe.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?w.setTextureCube(T,0):T.isData3DTexture?w.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?w.setTexture2DArray(T,0):w.setTexture2D(T,0),pe.unbindTexture()},this.resetState=function(){E=0,C=0,S=null,pe.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===bs?"display-p3":"srgb",t.unpackColorSpace=Xe.workingColorSpace===Sr?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===mt?zn:yo}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===zn?mt:en}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class op extends ko{}op.prototype.isWebGL1Renderer=!0;class lp extends Rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class cp{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=us,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=En()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=En()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=En()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Et=new B;class Mr{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}setX(e,t){return this.normalized&&(t=je(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=je(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=je(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=je(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=fn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=fn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=fn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=fn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=je(t,this.array),n=je(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=je(t,this.array),n=je(n,this.array),i=je(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=je(t,this.array),n=je(n,this.array),i=je(i,this.array),r=je(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new $t(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Mr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Go extends Oi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new qe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let si;const wi=new B,ai=new B,oi=new B,li=new He,Ci=new He,Wo=new pt,hr=new B,Li=new B,dr=new B,so=new He,os=new He,ao=new He;class hp extends Rt{constructor(e=new Go){if(super(),this.isSprite=!0,this.type="Sprite",si===void 0){si=new Zt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new cp(t,5);si.setIndex([0,1,2,0,2,3]),si.setAttribute("position",new Mr(n,3,0,!1)),si.setAttribute("uv",new Mr(n,2,3,!1))}this.geometry=si,this.material=e,this.center=new He(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ai.setFromMatrixScale(this.matrixWorld),Wo.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),oi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ai.multiplyScalar(-oi.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const o=this.center;fr(hr.set(-.5,-.5,0),oi,o,ai,i,r),fr(Li.set(.5,-.5,0),oi,o,ai,i,r),fr(dr.set(.5,.5,0),oi,o,ai,i,r),so.set(0,0),os.set(1,0),ao.set(1,1);let a=e.ray.intersectTriangle(hr,Li,dr,!1,wi);if(a===null&&(fr(Li.set(-.5,.5,0),oi,o,ai,i,r),os.set(0,1),a=e.ray.intersectTriangle(hr,dr,Li,!1,wi),a===null))return;const l=e.ray.origin.distanceTo(wi);l<e.near||l>e.far||t.push({distance:l,point:wi.clone(),uv:Bt.getInterpolation(wi,hr,Li,dr,so,os,ao,new He),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function fr(s,e,t,n,i,r){li.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(Ci.x=r*li.x-i*li.y,Ci.y=i*li.x+r*li.y):Ci.copy(li),s.copy(e),s.x+=Ci.x,s.y+=Ci.y,s.applyMatrix4(Wo)}class dp extends Ct{constructor(e,t,n,i,r,o,a,l,c){super(e,t,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ws extends Zt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],d=new B,f=new B,u=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){const M=[],x=p/n;let y=0;p===0&&o===0?y=.5/t:p===n&&l===Math.PI&&(y=-.5/t);for(let E=0;E<=t;E++){const C=E/t;d.x=-e*Math.cos(i+C*r)*Math.sin(o+x*a),d.y=e*Math.cos(o+x*a),d.z=e*Math.sin(i+C*r)*Math.sin(o+x*a),g.push(d.x,d.y,d.z),f.copy(d).normalize(),v.push(f.x,f.y,f.z),m.push(C+y,1-x),M.push(c++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<t;M++){const x=h[p][M+1],y=h[p][M],E=h[p+1][M],C=h[p+1][M+1];(p!==0||o>0)&&u.push(x,y,C),(p!==n-1||l<Math.PI)&&u.push(y,E,C)}this.setIndex(u),this.setAttribute("position",new Mt(g,3)),this.setAttribute("normal",new Mt(v,3)),this.setAttribute("uv",new Mt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ws(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}const oo={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class fp{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){const u=c[d],g=c[d+1];if(u.global&&(u.lastIndex=0),u.test(h))return g}return null}}}const up=new fp;class Cs{constructor(e){this.manager=e!==void 0?e:up,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Cs.DEFAULT_MATERIAL_NAME="__DEFAULT";class pp extends Cs{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=oo.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Ui("img");function l(){h(),oo.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(d){h(),i&&i(d),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class mp extends Cs{constructor(e){super(e)}load(e,t,n,i){const r=new Ct,o=new pp(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class gp{constructor(e,t,n=0,i=1/0){this.ray=new wo(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new As,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return xs(e,this,n,t),n.sort(lo),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)xs(e[i],this,n,t);return n.sort(lo),n}}function lo(s,e){return s.distance-e.distance}function xs(s,e,t,n){if(s.layers.test(e.layers)&&s.raycast(e,t),n===!0){const i=s.children;for(let r=0,o=i.length;r<o;r++)xs(i[r],e,t,!0)}}class vp{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(wt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ys}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ys);class xp{constructor(e,t){this.scene=null,this.camera=null,this.renderer=null,this.modelMeshes=new Map,this.vertexLabels=new Map,this.vertexSpheres=new Map,this.raycaster=null,this.mouse=null,this.selectedModel=null,this.currentMesh=null,this.showVertexNumbers=!1,this.editMode=!1,this.isDragging=!1,this.selectedVertex=null,this.dragPlane=null,this.originalVertexPosition=null,this.cameraControls=!0,this.keys={w:!1,a:!1,s:!1,d:!1},this.cameraMoveSpeed=5,this.cameraTarget=new B(0,0,0),this.highlightedFaces=new Set,this.originalFaceColors=new Map,this.showingFaceLabels=!1,this.highlightedVertexLabelInfo={id:null,originalSphereColors:new Map},this.specificHighlightedVerticesInfo={originalSphereColors:new Map,spheresWereTemporarilyMadeVisible:!1},this.specificHighlightedFacesInfo={originalFaceColors:new Map,highlightedFacesSet:new Set},this.fileLoader=t,this.textureCache=new Map,this.mouseDown=!1,this.mouseX=0,this.mouseY=0,this.initThreeJS(e),this.setupControls(),this.setupInteraction(),this.animate()}async loadTexture(e){if(this.textureCache.has(e))return this.textureCache.get(e);if(this.fileLoader&&this.fileLoader.availableTextures.has(e)){const t=this.fileLoader.availableTextures.get(e);if(!t)return console.warn(`Texture file for ID ${e} not found in fileLoader.availableTextures.`),null;try{const n=await this.processMagentaTransparency(t),r=await new mp().loadAsync(n.url);return r.flipY=!1,r.wrapS=Pi,r.wrapT=Pi,r.format=zt,r.premultiplyAlpha=!1,this.textureCache.set(e,r),URL.revokeObjectURL(n.url),r}catch(n){return console.error(`Failed to load texture ID ${e} from ${t.name}:`,n),null}}else return null}async processMagentaTransparency(e){return new Promise((t,n)=>{const i=new Image,r=URL.createObjectURL(e);i.onload=()=>{try{const o=document.createElement("canvas"),a=o.getContext("2d");if(!a)throw new Error("Failed to get 2D context from canvas");o.width=i.width,o.height=i.height,a.drawImage(i,0,0);const l=a.getImageData(0,0,o.width,o.height),c=l.data;for(let h=0;h<c.length;h+=4){const d=c[h],f=c[h+1],u=c[h+2];d>=250&&f<=5&&u>=250&&(c[h+3]=0)}a.putImageData(l,0,0),o.toBlob(h=>{if(h){const d=URL.createObjectURL(h);t({url:d,blob:h})}else n(new Error("Failed to create blob from processed image"))},"image/png")}catch(o){n(o)}finally{URL.revokeObjectURL(r)}},i.onerror=()=>{URL.revokeObjectURL(r),n(new Error("Failed to load image for processing"))},i.src=r})}getModel(e){return this.modelMeshes.get(e)}updateVertexVisuals(e){if(!this.currentMesh||!e)return;const t=Array.isArray(this.currentMesh)?this.currentMesh:[this.currentMesh];let n=null;for(const a of t)if(a&&a.userData&&a.userData.modelId===e){n=a;break}if(!n||!n.userData.originalModel)return;const i=n.userData.originalModel,r=this.vertexSpheres.get(e);if(r)for(let a=0;a<i.vertexCount;a++)r[a]&&r[a].position.set(i.vertexX[a],-i.vertexY[a],i.vertexZ[a]);const o=this.vertexLabels.get(e);if(o&&this.showVertexNumbers)for(let a=0;a<i.vertexCount;a++)o[a]&&o[a].position.set(i.vertexX[a],-i.vertexY[a],i.vertexZ[a])}highlightSpecificFaces(e){var r,o;if(!this.currentMesh||!this.selectedModel)return;this.clearSpecificFaceHighlights(),this.clearFaceHighlights();const t=Array.isArray(this.currentMesh)?this.currentMesh:[this.currentMesh];if(t.length===0)return;let n=null;for(const a of t)if(a&&a.userData&&a.userData.originalModel){n=a.userData.originalModel;break}if(!n){console.warn("No model found in current meshes for highlighting");return}const i={r:0,g:1,b:1};if(!this.specificHighlightedFacesInfo.originalFaceColors.size)for(let a=0;a<n.faceCount;a++){let l;((r=n.faceColor)==null?void 0:r[a])!==void 0?l=this.parseColor(ot.hslPal[n.faceColor[a]]):((o=n.faceColorA)==null?void 0:o[a])!==void 0?l=this.parseColor(ot.hslPal[n.faceColorA[a]]):l={r:.7,g:.7,b:.7},this.specificHighlightedFacesInfo.originalFaceColors.set(a,l)}t.forEach(a=>{if(!a||!a.geometry)return;const l=a.geometry,c=l.getAttribute("color");if(c){if(l.userData.faceIndexMapping){const h=l.userData.faceIndexMapping,d=c.count/3;for(let f=0;f<d;f++){const u=h[f];if(u!==void 0&&e.includes(u)){this.specificHighlightedFacesInfo.highlightedFacesSet.add(u);const g=f*3;for(let v=0;v<3;v++)c.setXYZ(g+v,i.r,i.g,i.b)}}}else{const h=l.userData.renderedToOriginalFaceIndexMap,d=l.userData.usedPriorities,f=c.count/3;for(let u=0;u<f;u++){const g=d&&h?h[u]:u;if(g!==void 0&&e.includes(g)){this.specificHighlightedFacesInfo.highlightedFacesSet.add(g);const v=u*3;for(let m=0;m<3;m++)c.setXYZ(v+m,i.r,i.g,i.b)}}}c.needsUpdate=!0}})}clearSpecificFaceHighlights(){if(!this.currentMesh||!this.selectedModel||this.specificHighlightedFacesInfo.highlightedFacesSet.size===0)return;(Array.isArray(this.currentMesh)?this.currentMesh:[this.currentMesh]).forEach(t=>{if(!t||!t.geometry)return;const n=t.geometry,i=n.getAttribute("color");if(i){if(n.userData.faceIndexMapping){const r=n.userData.faceIndexMapping,o=i.count/3;for(let a=0;a<o;a++){const l=r[a];if(l!==void 0&&this.specificHighlightedFacesInfo.highlightedFacesSet.has(l)){const c=this.specificHighlightedFacesInfo.originalFaceColors.get(l);if(c){const h=a*3;for(let d=0;d<3;d++)i.setXYZ(h+d,c.r,c.g,c.b)}}}}else{const r=n.userData.renderedToOriginalFaceIndexMap,o=n.userData.usedPriorities,a=i.count/3;for(let l=0;l<a;l++){const c=o&&r?r[l]:l;if(c!==void 0&&this.specificHighlightedFacesInfo.highlightedFacesSet.has(c)){const h=this.specificHighlightedFacesInfo.originalFaceColors.get(c);if(h){const d=l*3;for(let f=0;f<3;f++)i.setXYZ(d+f,h.r,h.g,h.b)}}}}i.needsUpdate=!0}}),this.specificHighlightedFacesInfo.highlightedFacesSet.clear()}getModelVertexLabels(e){const t=this.modelMeshes.get(e);if(!t)return null;const n=Array.isArray(t)?t:[t];let i=null;for(const o of n)if(o&&o.userData&&o.userData.originalModel){i=o.userData.originalModel;break}if(!i||!i.labelVertices)return null;const r=[];for(let o=0;o<i.labelVertices.length;o++)i.labelVertices[o]&&i.labelVertices[o].length>0&&r.push({id:o,vertexCount:i.labelVertices[o].length,vertices:i.labelVertices[o]});return r.length>0?r:null}highlightFaceLabel(e){if(!this.currentMesh||!this.selectedModel)return;const t=Array.isArray(this.currentMesh)?this.currentMesh:[this.currentMesh];if(t.length===0)return;let n=null;for(const r of t)if(r&&r.userData&&r.userData.originalModel){n=r.userData.originalModel;break}if(!n||!n.labelFaces||!n.labelFaces[e])return;this.clearFaceHighlights(),this.clearVertexHighlights(),this.originalFaceColors.has(this.selectedModel)||this.storeOriginalFaceColors();const i=n.labelFaces[e];t.forEach(r=>{if(!r||!r.geometry)return;const o=r.geometry,a=o.getAttribute("color");if(a){if(o.userData.faceIndexMapping){const l=o.userData.faceIndexMapping,c=a.count/3;for(let h=0;h<c;h++){const d=l[h];if(d!==void 0&&i.includes(d)){this.highlightedFaces.add(d);const f=h*3;for(let u=0;u<3;u++)a.setXYZ(f+u,1,.4,0)}}}else{const l=o.userData.renderedToOriginalFaceIndexMap,c=o.userData.usedPriorities,h=a.count/3;for(let d=0;d<h;d++){const f=c&&l?l[d]:d;if(f!==void 0&&i.includes(f)){this.highlightedFaces.add(f);const u=d*3;for(let g=0;g<3;g++)a.setXYZ(u+g,1,.4,0)}}}a.needsUpdate=!0}}),this.showingFaceLabels=!0}clearFaceHighlights(){if(!this.currentMesh||!this.selectedModel||!this.showingFaceLabels)return;const e=this.originalFaceColors.get(this.selectedModel);if(!e)return;(Array.isArray(this.currentMesh)?this.currentMesh:[this.currentMesh]).forEach(n=>{if(!n||!n.geometry)return;const i=n.geometry,r=i.getAttribute("color");if(r){if(i.userData.faceIndexMapping){const o=i.userData.faceIndexMapping,a=r.count/3;for(let l=0;l<a;l++){const c=o[l];if(c!==void 0&&this.highlightedFaces.has(c)){const h=e[c];if(h){const d=l*3;for(let f=0;f<3;f++)r.setXYZ(d+f,h.r,h.g,h.b)}}}}else{const o=i.userData.renderedToOriginalFaceIndexMap,a=i.userData.usedPriorities,l=r.count/3;for(let c=0;c<l;c++){const h=a&&o?o[c]:c;if(h!==void 0&&this.highlightedFaces.has(h)){const d=e[h];if(d){const f=c*3;for(let u=0;u<3;u++)r.setXYZ(f+u,d.r,d.g,d.b)}}}}r.needsUpdate=!0}}),this.highlightedFaces.clear(),this.showingFaceLabels=!1,this.clearSpecificFaceHighlights()}storeOriginalFaceColors(){if(!this.currentMesh||!this.selectedModel)return;const e=Array.isArray(this.currentMesh)?this.currentMesh:[this.currentMesh];if(e.length===0)return;let t=null;for(const i of e)if(i&&i.userData&&i.userData.originalModel){t=i.userData.originalModel;break}if(!t)return;const n={};for(let i=0;i<t.faceCount;i++){let r;t.faceColor!=null&&t.faceColor[i]!==void 0?r=this.parseColor(ot.hslPal[t.faceColor[i]]):t.faceColorA&&t.faceColorA[i]!==void 0?r=this.parseColor(ot.hslPal[t.faceColorA[i]]):r={r:.7,g:.7,b:.7},n[i]=r}this.originalFaceColors.set(this.selectedModel,n)}initThreeJS(e){this.scene=new lp,this.scene.background=new qe(8947848),this.camera=new Vt(75,e.clientWidth/e.clientHeight,.1,1e4),this.camera.position.set(50,50,50),this.cameraTarget.set(0,0,0),this.camera.lookAt(this.cameraTarget),this.renderer=new ko({antialias:!0,logarithmicDepthBuffer:!0}),this.renderer.setSize(e.clientWidth,e.clientHeight),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.shadowMap.enabled=!1,this.renderer.outputColorSpace=en,this.renderer.toneMapping=pn,this.renderer.toneMappingExposure=1,Xe&&(Xe.enabled=!1),this.renderer.getContext().enable(this.renderer.getContext().POLYGON_OFFSET_FILL),this.renderer.sortObjects=!0,e.appendChild(this.renderer.domElement),this.renderer.domElement.parentElement.classList.add("canvas-container");const t=new Er(1e3,1e3),n=new ci({color:16776960,transparent:!0,opacity:0,side:qt,depthWrite:!1,depthTest:!1,visible:!1});this.dragPlane=new kt(t,n),this.scene.add(this.dragPlane),window.addEventListener("resize",()=>this.onWindowResize(e))}setupControls(){this.mouseDown=!1,this.mouseX=0,this.mouseY=0,this.renderer.domElement.addEventListener("mousedown",e=>{this.mouseDown=!0,this.mouseX=e.clientX,this.mouseY=e.clientY,this.editMode&&this.onVertexMouseDown(e)}),this.renderer.domElement.addEventListener("mousemove",e=>{if(this.editMode&&this.isDragging&&this.selectedVertex)this.onVertexDrag(e);else if(this.mouseDown&&this.cameraControls){const t=e.clientX-this.mouseX,n=e.clientY-this.mouseY,i=new B().subVectors(this.camera.position,this.cameraTarget),r=new vp().setFromVector3(i);r.theta-=t*.01,r.phi+=n*.01,r.phi=Math.max(.01,Math.min(Math.PI-.01,r.phi)),i.setFromSpherical(r),this.camera.position.copy(this.cameraTarget).add(i),this.camera.lookAt(this.cameraTarget),this.mouseX=e.clientX,this.mouseY=e.clientY}}),this.renderer.domElement.addEventListener("mouseup",()=>{this.mouseDown=!1,this.editMode&&this.isDragging&&this.onVertexMouseUp()}),this.renderer.domElement.addEventListener("wheel",e=>{if(!this.editMode||!this.isDragging){const t=new B().subVectors(this.camera.position,this.cameraTarget),i=t.length()+e.deltaY*.3;t.normalize().multiplyScalar(Math.max(5,i)),this.camera.position.copy(this.cameraTarget).add(t)}}),document.addEventListener("keydown",e=>{const t=e.key.toLowerCase(),n=document.activeElement,i=n&&(n.tagName==="INPUT"||n.tagName==="TEXTAREA"||n instanceof HTMLElement&&n.isContentEditable);Object.prototype.hasOwnProperty.call(this.keys,t)&&!i&&(this.keys[t]=!0,["w","a","s","d"].includes(t)&&e.preventDefault())}),document.addEventListener("keyup",e=>{const t=e.key.toLowerCase(),n=document.activeElement,i=n&&(n.tagName==="INPUT"||n.tagName==="TEXTAREA"||n instanceof HTMLElement&&n.isContentEditable);Object.prototype.hasOwnProperty.call(this.keys,t)&&!i&&(this.keys[t]=!1)})}setupInteraction(){this.raycaster=new gp,this.mouse=new He,this.renderer.domElement.addEventListener("click",e=>{!this.isDragging&&!this.editMode&&this.onMouseClick(e)})}getModelFaceLabels(e){const t=this.modelMeshes.get(e);if(!t)return null;const n=Array.isArray(t)?t:[t];let i=null;for(const o of n)if(o&&o.userData&&o.userData.originalModel){i=o.userData.originalModel;break}if(!i||!i.labelFaces)return null;const r=[];for(let o=0;o<i.labelFaces.length;o++)i.labelFaces[o]&&i.labelFaces[o].length>0&&r.push({id:o,faceCount:i.labelFaces[o].length,faces:i.labelFaces[o]});return r.length>0?r:null}highlightSpecificVertices(e){if(!this.selectedModel||!this.currentMesh)return;const t=Array.isArray(this.currentMesh)?this.currentMesh:[this.currentMesh];let n=null;for(const o of t)if(o&&o.userData&&o.userData.originalModel){n=o.userData.originalModel;break}if(!n)return;let i=this.vertexSpheres.get(this.selectedModel);if(this.clearSpecificVertexHighlights(!1),this.clearVertexHighlights(),(!i||i.length===0)&&(this.createVertexSpheres(this.selectedModel,n),this.addVertexSpheresToScene(this.selectedModel),i=this.vertexSpheres.get(this.selectedModel),!i||i.length===0)){console.warn("Failed to create vertex spheres for highlighting");return}i.forEach(o=>{o.parent||this.scene.add(o)}),this.specificHighlightedVerticesInfo.spheresWereTemporarilyMadeVisible=!0;const r=65535;e.forEach(o=>{if(o<i.length&&o>=0){const a=i[o];if(a&&a.material){this.specificHighlightedVerticesInfo.originalSphereColors.has(a)||this.specificHighlightedVerticesInfo.originalSphereColors.set(a,{color:a.material.color.getHex(),visible:a.visible}),a.material.color.setHex(r),a.visible=!0;const l=a.material;l.transparent=!1,l.opacity=1,l.depthTest=!1,l.needsUpdate=!0}}})}clearSpecificVertexHighlights(e=!0){if(!this.selectedModel)return;this.vertexSpheres.get(this.selectedModel)&&this.specificHighlightedVerticesInfo.originalSphereColors.forEach((n,i)=>{i&&i.material&&(i.material.color.setHex(n.color),this.specificHighlightedVerticesInfo.spheresWereTemporarilyMadeVisible&&e&&!this.editMode?i.visible=!1:this.editMode?i.visible=!0:i.visible=n.visible)}),this.specificHighlightedVerticesInfo.originalSphereColors.clear(),e&&(this.specificHighlightedVerticesInfo.spheresWereTemporarilyMadeVisible=!1)}updateMeshGeometry(){if(!this.currentMesh)return;(Array.isArray(this.currentMesh)?this.currentMesh:[this.currentMesh]).forEach(t=>{var l,c;const n=t.userData.originalModel,i=t.geometry,r=i.getAttribute("position"),o=i.getAttribute("color");if(i.userData.faceIndexMapping){const h=i.userData.faceIndexMapping,d=r.count/3;for(let f=0;f<d;f++){const u=h[f];if(u===void 0||u>=n.faceCount)continue;const g=n.faceVertexA[u],v=n.faceVertexB[u],m=n.faceVertexC[u];if(g>=n.vertexCount||v>=n.vertexCount||m>=n.vertexCount)continue;const p=f*3;if(r.setXYZ(p,n.vertexX[g],-n.vertexY[g],n.vertexZ[g]),r.setXYZ(p+1,n.vertexX[v],-n.vertexY[v],n.vertexZ[v]),r.setXYZ(p+2,n.vertexX[m],-n.vertexY[m],n.vertexZ[m]),o&&!t.userData.meshType.includes("textured-")){let M;if(((l=n.faceColor)==null?void 0:l[u])!==void 0){const y=n.faceColor[u],E=ot.hslPal[y];M=this.parseColor(E)}else if(((c=n.faceColorA)==null?void 0:c[u])!==void 0){const y=n.faceColorA[u],E=ot.hslPal[y];M=this.parseColor(E)}else M={r:.7,g:.7,b:.7};let x=1;n.faceAlpha&&n.faceAlpha[u]!==void 0&&(x=(255-n.faceAlpha[u])/255,x=Math.max(0,Math.min(1,x)));for(let y=0;y<3;y++)o.setXYZW(p+y,M.r,M.g,M.b,x)}}}else{const h=i.userData.renderedToOriginalFaceIndexMap,d=i.userData.usedPriorities,f=r.count/3;for(let u=0;u<f;u++){const g=d&&h?h[u]:u;if(g===void 0||g>=n.faceCount)continue;const v=n.faceVertexA[g],m=n.faceVertexB[g],p=n.faceVertexC[g];if(v>=n.vertexCount||m>=n.vertexCount||p>=n.vertexCount)continue;const M=u*3;r.setXYZ(M,n.vertexX[v],-n.vertexY[v],n.vertexZ[v]),r.setXYZ(M+1,n.vertexX[m],-n.vertexY[m],n.vertexZ[m]),r.setXYZ(M+2,n.vertexX[p],-n.vertexY[p],n.vertexZ[p])}}r.needsUpdate=!0,o&&(o.needsUpdate=!0),i.computeBoundingBox(),i.computeBoundingSphere()}),this.updateModelAlpha(this.selectedModel)}updateModelAlpha(e){const t=this.modelMeshes.get(e);if(!t)return;(Array.isArray(t)?t:[t]).forEach(i=>{const r=i.userData.originalModel,o=i.geometry,a=o.getAttribute("color");if(r.faceAlpha&&r.faceAlpha.length>0&&a){let l=!1;if(o.userData.faceIndexMapping){const c=o.userData.faceIndexMapping,h=a.count/3;for(let d=0;d<h;d++){const f=c[d];if(f===void 0||f>=r.faceCount)continue;let u=1;r.faceAlpha[f]!==void 0&&(u=(255-r.faceAlpha[f])/255,u=Math.max(0,Math.min(1,u)));const g=d*3,v=d*3+1,m=d*3+2;a.getW(g)!==u&&(a.setW(g,u),l=!0),a.getW(v)!==u&&(a.setW(v,u),l=!0),a.getW(m)!==u&&(a.setW(m,u),l=!0)}}else{const c=o.userData.renderedToOriginalFaceIndexMap,h=o.userData.usedPriorities,d=a.count/3;for(let f=0;f<d;f++){const u=h&&c?c[f]:f;if(u===void 0||u>=r.faceCount)continue;let g=1;r.faceAlpha[u]!==void 0&&(g=(255-r.faceAlpha[u])/255,g=Math.max(0,Math.min(1,g)));const v=f*3,m=f*3+1,p=f*3+2;a.getW(v)!==g&&(a.setW(v,g),l=!0),a.getW(m)!==g&&(a.setW(m,g),l=!0),a.getW(p)!==g&&(a.setW(p,g),l=!0)}}l&&(a.needsUpdate=!0)}})}addModel(e,t){t.calculateBoundsCylinder();const n=this.createSeparateGeometriesByPriority(t),i=[];let r=0;const o=100;for(const[a,l]of n){if(!l||l.getAttribute("position").count===0)continue;const c=a.includes("transparent"),h=a.includes("textured-");let d=null;if(h){const v=a.match(/textured-(\d+)/);v&&(d=parseInt(v[1]))}const f=c?"transparent":"opaque",u=this.createMaterialFromModel(l,f),g=new kt(l,u);g.userData={modelId:e,originalModel:t,meshType:a,textureId:d},c?(g.renderOrder=1e4+r*o,g.material.transparent=!0,g.material.depthWrite=!1,g.material.polygonOffsetFactor=-10-r,g.material.polygonOffsetUnits=-10-r):(g.renderOrder=r*o,g.material.transparent=!1,g.material.depthWrite=!0,g.material.polygonOffsetFactor=-1-r*.1,g.material.polygonOffsetUnits=-1-r*.1),r++,i.push(g)}this.modelMeshes.set(e,i);for(const a of i)a.userData.textureId!==null&&this.loadAndApplySpecificTexture(a,a.userData.textureId).catch(l=>{console.error(`Failed to load texture ${a.userData.textureId} for model ${e}:`,l)});return this.createVertexLabels(e,t),this.createVertexSpheres(e,t),this.addVertexSpheresToScene(e),i}async loadAndApplySpecificTexture(e,t){try{const n=await this.loadTexture(t);if(n)return(Array.isArray(e.material)?e.material:[e.material]).forEach(r=>{r.map=n,r.transparent=!0,r.alphaTest=.1,r.vertexColors=!0,r.needsUpdate=!0}),!0;console.warn(`Failed to load texture ${t} - texture is null/undefined`)}catch(n){console.error(`Error loading texture ${t}:`,n)}return!1}groupFacesByTexture(e,t,n){const i=new Map;i.set("opaque-untextured",[]),i.set("transparent-untextured",[]);for(const r of t){const o=this.isFaceTransparent(e,r),a=e.faceTextures&&e.faceTextures[r]!==-1&&e.faceTextures[r]!==void 0?e.faceTextures[r]:null;let l;a!==null?l=o?`transparent-textured-${a}`:`opaque-textured-${a}`:l=o?"transparent-untextured":"opaque-untextured",i.has(l)||i.set(l,[]),i.get(l).push(r)}for(const[r,o]of i)if(o.length>0){const a=this.createGeometryForFaces(e,o,r);n.set(r,a)}}createSeparateGeometriesByPriority(e){const i=new Int32Array(1500),r=[];for(let E=0;E<1500;E++)r[E]=new Int32Array(512);const o=new Int32Array(12),a=[],l=new Int32Array(12),c=new Int32Array(2e3),h=new Int32Array(2e3);for(let E=0;E<12;E++)a[E]=new Int32Array(2e3);i.fill(0),o.fill(0),l.fill(0);for(let E=0;E<e.faceCount;E++){if(e.faceInfo&&e.faceInfo[E]===-1)continue;const C=e.faceVertexA[E],S=e.faceVertexB[E],P=e.faceVertexC[E],_=e.vertexZ[C],A=e.vertexZ[S],U=e.vertexZ[P],F=Math.floor((_+A+U)/3)+e.minDepth,D=Math.max(0,Math.min(1499,F));i[D]<512&&(r[D][i[D]++]=E)}if(!e.facePriority){const E=[];for(let S=1499;S>=0;S--){const P=i[S];for(let _=0;_<P;_++)E.push(r[S][_])}const C=new Map;return this.groupFacesByTexture(e,E,C),C}for(let E=1499;E>=0;E--){const C=i[E];if(C>0){const S=r[E];for(let P=0;P<C;P++){const _=S[P],A=e.facePriority[_]||0,U=Math.max(0,Math.min(11,A));if(o[U]<2e3){const F=o[U]++;a[U][F]=_,U<10?l[U]+=E:U===10&&F<2e3?c[F]=E:U===11&&F<2e3&&(h[F]=E)}}}}const d=o[1]>0||o[2]>0?Math.floor((l[1]+l[2])/(o[1]+o[2])):0,f=o[3]>0||o[4]>0?Math.floor((l[3]+l[4])/(o[3]+o[4])):0,u=o[6]>0||o[8]>0?Math.floor((l[6]+l[8])/(o[6]+o[8])):0,g=[];let v=0,m=o[10],p=a[10],M=c;v===m&&(v=0,m=o[11],p=a[11],M=h);let x=v<m&&M?M[v]:-1e3;for(let E=0;E<10;E++){for(;E===0&&x>d;)g.push(p[v++]),v===m&&p!==a[11]&&(v=0,m=o[11],p=a[11],M=h),x=v<m&&M?M[v]:-1e3;for(;E===3&&x>f;)g.push(p[v++]),v===m&&p!==a[11]&&(v=0,m=o[11],p=a[11],M=h),x=v<m&&M?M[v]:-1e3;for(;E===5&&x>u;)g.push(p[v++]),v===m&&p!==a[11]&&(v=0,m=o[11],p=a[11],M=h),x=v<m&&M?M[v]:-1e3;const C=o[E],S=a[E];for(let P=0;P<C;P++)g.push(S[P])}for(;x!==-1e3;)g.push(p[v++]),v===m&&p!==a[11]&&(v=0,p=a[11],m=o[11],M=h),x=v<m&&M?M[v]:-1e3;const y=new Map;return this.groupFacesByTexture(e,g,y),y}isFaceTransparent(e,t){return!!(e.faceAlpha&&e.faceAlpha[t]!==void 0&&e.faceAlpha[t]>0)}createGeometryForFaces(e,t,n){var d,f;if(t.length===0){const u=new Zt;return u.setAttribute("position",new Mt([],3)),u.setAttribute("color",new Mt([],4)),u.setAttribute("uv",new Mt([],2)),u}const i=new Zt,r=[],o=[],a=[],l=[];let c=0;const h=n.startsWith("opaque-textured-")||n.startsWith("transparent-textured-");for(const u of t){const g=e.faceVertexA[u],v=e.faceVertexB[u],m=e.faceVertexC[u];if(g===void 0||v===void 0||m===void 0||g>=e.vertexCount||v>=e.vertexCount||m>=e.vertexCount)continue;l[c]=u,r.push(e.vertexX[g],-e.vertexY[g],e.vertexZ[g],e.vertexX[v],-e.vertexY[v],e.vertexZ[v],e.vertexX[m],-e.vertexY[m],e.vertexZ[m]);let p,M,x;if(h)if(p=1,M=1,x=1,e.uvCoords&&e.uvCoords[u]&&e.uvCoords[u].length===6){const E=e.uvCoords[u];a.push(E[0],E[1],E[2],E[3],E[4],E[5])}else a.push(0,0,1,0,.5,1);else{a.push(0,0,0,0,0,0);let E;if(((d=e.faceColor)==null?void 0:d[u])!==void 0){const C=e.faceColor[u],S=ot.hslPal[C];E=this.parseColor(S)}else if(((f=e.faceColorA)==null?void 0:f[u])!==void 0){const C=e.faceColorA[u],S=ot.hslPal[C];E=this.parseColor(S)}else E={r:.7,g:.7,b:.7};p=E.r,M=E.g,x=E.b}let y=1;e.faceAlpha&&e.faceAlpha[u]!==void 0&&(y=(255-e.faceAlpha[u])/255,y=Math.max(0,Math.min(1,y)));for(let E=0;E<3;E++)o.push(p,M,x,y);c++}return i.userData.faceIndexMapping=l,i.setAttribute("position",new Mt(r,3)),i.setAttribute("color",new Mt(o,4)),r.length>0&&a.length===r.length/3*2&&i.setAttribute("uv",new Mt(a,2)),i}createMaterialFromModel(e,t){const n=t.includes("transparent"),i=t.includes("textured-"),r={vertexColors:!0,side:qt,blending:On,wireframe:!1};if(i&&(r.vertexColors=!0),n?(r.transparent=!0,r.depthWrite=!1,r.alphaTest=.01):(r.transparent=!1,r.depthWrite=!0,r.alphaTest=0),e.userData.usedPriorities&&e.userData.uniquePriorities){const o=[],a=e.userData.uniquePriorities;for(const l of a){const c=new ci({...r,polygonOffset:!0,polygonOffsetFactor:-l*2,polygonOffsetUnits:-l*1});o.push(c)}return o}else return new ci(r)}parseColor(e){if(e==null)return{r:.7,g:.7,b:.7};const t=(e>>16&255)/255,n=(e>>8&255)/255,i=(e&255)/255;return{r:t,g:n,b:i}}removeModel(e){const t=this.modelMeshes.get(e);t&&((Array.isArray(t)?t:[t]).forEach(i=>{this.scene.remove(i),i.geometry.dispose(),Array.isArray(i.material)?i.material.forEach(r=>r.dispose()):i.material.dispose()}),this.modelMeshes.delete(e))}showModel(e){if(this.currentMesh&&(Array.isArray(this.currentMesh)?this.currentMesh.forEach(c=>this.scene.remove(c)):this.scene.remove(this.currentMesh)),this.selectedModel){const c=this.vertexLabels.get(this.selectedModel);c&&c.forEach(h=>this.scene.remove(h)),this.clearVertexHighlights(),this.hideVertexSpheres(),this.clearSpecificVertexHighlights(),this.clearSpecificFaceHighlights(),this.specificHighlightedFacesInfo.originalFaceColors.clear()}this.hideFaceInfo(),this.clearFaceHighlights();const t=this.modelMeshes.get(e);if(!t){console.warn(`Meshes for modelId ${e} not found in cache when trying to show.`);return}if(t.forEach(c=>this.scene.add(c)),this.currentMesh=t,this.selectedModel=e,this.updateModelAlpha(e),this.storeOriginalFaceColors(),this.showVertexNumbers){const c=this.vertexLabels.get(e);c&&c.forEach(h=>this.scene.add(h))}this.editMode&&this.showVertexSpheres();const n=Array.isArray(t)?t[0]:t,i=new _i().setFromObject(n),r=i.getCenter(new B),o=i.getSize(new B),a=Math.max(o.x,o.y,o.z),l=a*2.5;this.cameraTarget.copy(r),this.cameraTarget.y+=a*.5,this.camera.position.set(this.cameraTarget.x+l*.7,this.cameraTarget.y+l*.7,this.cameraTarget.z+l*.7),this.camera.lookAt(this.cameraTarget)}onVertexMouseDown(e){if(!this.currentMesh||!this.selectedModel)return;const t=this.renderer.domElement.getBoundingClientRect();this.mouse.x=(e.clientX-t.left)/t.width*2-1,this.mouse.y=-((e.clientY-t.top)/t.height)*2+1,this.raycaster.setFromCamera(this.mouse,this.camera);const n=this.vertexSpheres.get(this.selectedModel);if(n){const i=this.raycaster.intersectObjects(n,!1);if(i.length>0){const r=i[0].object,o=r.userData.vertexIndex;this.selectedVertex={index:o,sphere:r,originalPosition:r.position.clone()},this.isDragging=!0,this.cameraControls=!1;const a=new B;this.camera.getWorldDirection(a),this.dragPlane.position.copy(r.position),this.dragPlane.lookAt(this.dragPlane.position.clone().add(a)),this.renderer.domElement.parentElement.classList.add("dragging"),e.preventDefault(),e.stopPropagation()}}}onVertexDrag(e){if(!this.selectedVertex||!this.currentMesh)return;const t=this.renderer.domElement.getBoundingClientRect();this.mouse.x=(e.clientX-t.left)/t.width*2-1,this.mouse.y=-((e.clientY-t.top)/t.height)*2+1,this.raycaster.setFromCamera(this.mouse,this.camera);const n=this.raycaster.intersectObject(this.dragPlane,!1);if(n.length>0){const i=n[0].point;this.selectedVertex.sphere.position.copy(i);const r=Array.isArray(this.currentMesh)?this.currentMesh:[this.currentMesh];let o=null;for(const l of r)if(l&&l.userData&&l.userData.originalModel){o=l.userData.originalModel;break}if(!o)return;const a=this.selectedVertex.index;if(o.updateVertex(a,i.x,-i.y,i.z),this.showVertexNumbers){const l=this.vertexLabels.get(this.selectedModel);l&&l[a]&&l[a].position.copy(i)}this.updateMeshGeometry()}}onVertexMouseUp(){this.selectedVertex&&(this.selectedVertex=null,this.isDragging=!1,this.cameraControls=!0,this.renderer.domElement.parentElement.classList.remove("dragging"))}highlightVertexLabel(e){if(this.clearFaceHighlights(),this.clearVertexHighlights(),!this.editMode||!this.currentMesh||!this.selectedModel)return;const t=Array.isArray(this.currentMesh)?this.currentMesh:[this.currentMesh];let n=null;for(const o of t)if(o&&o.userData&&o.userData.originalModel){n=o.userData.originalModel;break}if(!n||!n.labelVertices||!n.labelVertices[e])return;const i=this.vertexSpheres.get(this.selectedModel);if(!i)return;this.highlightedVertexLabelInfo.id=e,n.labelVertices[e].forEach(o=>{if(o<i.length&&o>=0){const a=i[o];a&&a.material&&(this.highlightedVertexLabelInfo.originalSphereColors.has(a)||this.highlightedVertexLabelInfo.originalSphereColors.set(a,a.material.color.getHex()),a.material.color.setHex(65280))}})}clearVertexHighlights(){if(!this.selectedModel)return;const e=this.vertexSpheres.get(this.selectedModel);e&&e.forEach(t=>{t&&t.material&&t.material.color.setHex(16711680)}),this.highlightedVertexLabelInfo.id=null,this.highlightedVertexLabelInfo.originalSphereColors.clear(),this.clearSpecificVertexHighlights(!1)}createVertexSpheres(e,t){const n=[],i=new ws(1,6,4);for(let r=0;r<t.vertexCount;r++){const o=new ci({color:16711680,transparent:!1,depthTest:!0,opacity:1}),a=new kt(i,o);a.position.set(t.vertexX[r],-t.vertexY[r],t.vertexZ[r]),a.userData.vertexIndex=r,a.visible=!1,a.userData.originalScale=1,n.push(a)}this.vertexSpheres.set(e,n)}addVertexSpheresToScene(e){const t=this.vertexSpheres.get(e);t&&t.forEach(n=>{n.parent||this.scene.add(n)})}createVertexLabels(e,t){const n=[];for(let i=0;i<t.vertexCount;i++){const r=document.createElement("canvas"),o=r.getContext("2d");r.width=64,r.height=32,o.font="14px Arial",o.fillStyle="yellow",o.strokeStyle="black",o.lineWidth=2,o.textAlign="center",o.textBaseline="middle";const a=i.toString();o.strokeText(a,32,16),o.fillText(a,32,16);const l=new dp(r),c=new Go({map:l,transparent:!0,depthTest:!1}),h=new hp(c);h.position.set(t.vertexX[i],-t.vertexY[i],t.vertexZ[i]),h.scale.set(8,4,1),n.push(h)}this.vertexLabels.set(e,n)}toggleVertexNumbers(){if(this.showVertexNumbers=!this.showVertexNumbers,this.selectedModel){const e=this.vertexLabels.get(this.selectedModel);e&&(this.showVertexNumbers?e.forEach(t=>this.scene.add(t)):e.forEach(t=>this.scene.remove(t)))}return this.showVertexNumbers}onWindowResize(e){this.camera.aspect=e.clientWidth/e.clientHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(e.clientWidth,e.clientHeight)}animate(){if(requestAnimationFrame(()=>this.animate()),this.renderer.render(this.scene,this.camera),this.cameraControls){const e=this.cameraMoveSpeed;let t=!1;const n=new B,i=new B,r=new B,o=new B;this.camera.getWorldDirection(i),r.crossVectors(i,this.camera.up).normalize(),o.crossVectors(r,i).normalize(),this.keys.w&&(n.addScaledVector(o,e),t=!0),this.keys.s&&(n.addScaledVector(o,-e),t=!0),this.keys.a&&(n.addScaledVector(r,-e),t=!0),this.keys.d&&(n.addScaledVector(r,e),t=!0),t&&(this.camera.position.add(n),this.cameraTarget.add(n),this.camera.lookAt(this.cameraTarget))}}toggleWireframe(){if(this.currentMesh){const e=Array.isArray(this.currentMesh)?this.currentMesh:[this.currentMesh];let t=!1;return e.forEach((n,i)=>{(Array.isArray(n.material)?n.material:[n.material]).forEach((o,a)=>{o.wireframe=!o.wireframe,i===0&&a===0&&(t=o.wireframe)})}),t}return!1}toggleEditMode(){this.editMode=!this.editMode;const e=this.renderer.domElement.parentElement;return this.clearSpecificVertexHighlights(),this.editMode?(e.classList.add("vertex-edit"),this.showVertexSpheres()):(e.classList.remove("vertex-edit"),this.hideVertexSpheres(),this.clearVertexHighlights(),this.selectedVertex=null,this.isDragging=!1,this.cameraControls=!0,e.classList.remove("dragging")),this.editMode}showVertexSpheres(){if(!this.selectedModel)return;const e=this.vertexSpheres.get(this.selectedModel);e&&e.forEach(t=>t.visible=!0)}hideVertexSpheres(){if(!this.selectedModel)return;const e=this.vertexSpheres.get(this.selectedModel);e&&e.forEach(t=>t.visible=!1),this.clearSpecificVertexHighlights()}onMouseClick(e){if(this.editMode)return;if(!this.renderer||!this.raycaster||!this.mouse||!this.camera||!this.currentMesh){console.warn("Raycasting prerequisites not met.");return}const t=this.renderer.domElement.getBoundingClientRect();this.mouse.x=(e.clientX-t.left)/t.width*2-1,this.mouse.y=-((e.clientY-t.top)/t.height)*2+1,this.raycaster.setFromCamera(this.mouse,this.camera);let n=[];if(Array.isArray(this.currentMesh)?n=this.currentMesh.filter(r=>r!==null):this.currentMesh!==null&&(n=[this.currentMesh]),n.length===0){this.hideFaceInfo();return}const i=this.raycaster.intersectObjects(n);if(i.length>0){const r=i[0],o=r.object;if(!(o instanceof kt)){this.hideFaceInfo();return}const a=o.geometry;let l=r;if(i.length>1){const f=r.distance,u=i.filter(g=>Math.abs(g.distance-f)<.001);u.length>1&&(l=u.reduce((g,v)=>{const m=g.faceIndex,p=v.faceIndex;return p==null?g:m==null||p>m?v:g}))}if(l.faceIndex===null||l.faceIndex===void 0){this.hideFaceInfo(),console.warn("Intersection found, but no valid faceIndex determined.");return}let c=l.faceIndex;const h=a.userData.faceIndexMapping,d=a.userData.renderedToOriginalFaceIndexMap;if(h){const f=h[c];if(f!==void 0)c=f;else{console.warn(`faceIndex ${c} not found in faceIndexMapping.`),this.hideFaceInfo();return}}else if(a.userData.usedPriorities&&d){const f=d[c];if(f!==void 0)c=f;else{console.warn(`faceIndex ${c} not found in renderedToOriginalFaceIndexMap.`),this.hideFaceInfo();return}}this.displayFaceInfo(c)}else this.hideFaceInfo()}displayFaceInfo(e){var E,C;if(!this.selectedModel||!this.currentMesh)return;const t=Array.isArray(this.currentMesh)?this.currentMesh:[this.currentMesh];if(t.length===0)return;let n=null;for(const S of t)if(S&&S.userData&&S.userData.originalModel){n=S.userData.originalModel;break}if(!n)return;if(!n.faceVertexA||!n.faceVertexB||!n.faceVertexC||!n.vertexX||!n.vertexY||!n.vertexZ){console.error("Model is missing required vertex or face data.");return}const i=document.getElementById("face-info"),r=document.getElementById("face-details");if(!i||!r){console.warn("Face info panel elements not found in the DOM.");return}const o=n.faceVertexA[e],a=n.faceVertexB[e],l=n.faceVertexC[e];if(o===void 0||a===void 0||l===void 0){console.warn(`Vertex indices for face ${e} are undefined.`);return}let c="";const h=(E=n.faceTextures)==null?void 0:E[e];if(h!==void 0&&h!==-1){let S=`ID: ${h}`;if(this.fileLoader&&this.fileLoader.availableTextures){const P=this.fileLoader.availableTextures.get(h);P&&P.name?S=P.name.substring(0,P.name.lastIndexOf("."))||P.name:S+=" (Name not found)"}else S+=" (Texture map unavailable)";c=`<div class="face-detail"><strong>Texture:</strong> ${S}</div>`}else{let S,P="#ffffff";if(n.faceColor&&n.faceColor[e]!==void 0&&(S=n.faceColor[e]),S!==void 0&&ot.hslPal&&ot.hslPal[S]!==void 0){const _=ot.hslPal[S],A={r:_>>16&255,g:_>>8&255,b:_&255};P=`#${A.r.toString(16).padStart(2,"0")}${A.g.toString(16).padStart(2,"0")}${A.b.toString(16).padStart(2,"0")}`;const U=(C=n.faceColor)==null?void 0:C[e];U!==void 0?c=`
                        <div class="face-detail">
                            <strong>Face Color:</strong> ${hn.reverseHsl(U)[0]}
                            <span class="color-swatch" style="background-color: ${P}"></span>
                        </div>`:c='<div class="face-detail"><strong>Face Color:</strong> N/A (Invalid index for HSL)</div>'}else c='<div class="face-detail"><strong>Face Color:</strong> N/A</div>'}const d=n.vertexX[o],f=n.vertexY[o],u=n.vertexZ[o],g=n.vertexX[a],v=n.vertexY[a],m=n.vertexZ[a],p=n.vertexX[l],M=n.vertexY[l],x=n.vertexZ[l];if(d===void 0||f===void 0||u===void 0||g===void 0||v===void 0||m===void 0||p===void 0||M===void 0||x===void 0){console.warn(`Vertex coordinates for face ${e} are incomplete.`),r.innerHTML=`<div class="face-detail"><strong>Error:</strong> Incomplete vertex data for face ${e}.</div>`,i.style.display="block";return}const y=[{x:d,y:f,z:u},{x:g,y:v,z:m},{x:p,y:M,z:x}];r.innerHTML=`
            <div class="face-detail"><strong>Face Index:</strong> ${e}</div>
            <div class="face-detail"><strong>Vertices:</strong> [${o}, ${a}, ${l}]</div>
            <div class="face-detail">
                <strong>Vertex A (${o}):</strong> (${y[0].x.toFixed(2)}, ${y[0].y.toFixed(2)}, ${y[0].z.toFixed(2)})
            </div>
            <div class="face-detail">
                <strong>Vertex B (${a}):</strong> (${y[1].x.toFixed(2)}, ${y[1].y.toFixed(2)}, ${y[1].z.toFixed(2)})
            </div>
            <div class="face-detail">
                <strong>Vertex C (${l}):</strong> (${y[2].x.toFixed(2)}, ${y[2].y.toFixed(2)}, ${y[2].z.toFixed(2)})
            </div>
            ${c}
        `,i.style.display="block"}hideFaceInfo(){const e=document.getElementById("face-info");e?e.style.display="none":console.warn("Face info panel element not found in the DOM when trying to hide.")}}class _p{constructor(e,t){this.loader=t,this.renderer=new xp(e,this.loader)}async loadModel(e){try{const t=await this.loader.loadModel(e);if(this.renderer.modelMeshes.has(e))return;this.renderer.addModel(e,t)}catch(t){throw console.error(`Failed to load model '${e}': ${t}`),t}}getRenderer(){return this.renderer}}const _s={_1:0,_2:1,_3:2,_4:3,_q:4,_w:5,_r:6,_e:7,_t:8,_5:9,_8:10,_9:11,_a:12,_s:13,_d:14,_f:15,_g:16,_h:17,_z:18,_x:19,_c:20,_v:21,_0:22},Xo=[],Ms={};for(const s in _s)Ms[_s[s]]=s;for(let s=0;s<=22;s++)Ms[s]&&Xo.push(Ms[s]);function co(s,e,t,n,i){const r=e.toLowerCase(),o=s.querySelectorAll(t);let a=0;o.forEach(c=>{(c.textContent||"").toLowerCase().includes(r)?(c.style.display="",a++):c.style.display="none"});let l=s.querySelector(".list-message");if(!l){l=document.createElement("div"),l.className=t.startsWith(".model-item")?"model-item list-message":"label-item list-message";const c=s.querySelector(t);c?s.insertBefore(l,c):s.appendChild(l)}l.style.display="block",o.length===0?l.innerHTML=n:a===0&&e?l.innerHTML=`<span>${i} for "${e}"</span>`:a===0&&!e&&o.length>0?l.innerHTML=n:l.style.display="none"}class Mp{constructor(){this.container=document.getElementById("container"),this.loader=new Jo,this.viewer=new _p(this.container,this.loader),this.currentAnimation={modelRef:null,seqId:null,seqData:null,frameIndex:0,timerId:null},this.activeTransformEditor={element:null,animFrame:null,transformIndex:-1,parentElement:null},this.activeNewTransformForm={baseGroupSelect:null,xInput:null,yInput:null,zInput:null,affectedInfoDiv:null},this.currentSelectedAnimFrameInstance=null,this.loopSequenceCheckbox=null,this.changeFaceLabels=null,this.changeVertexLabels=null,this.modelSearchInput=document.getElementById("model-search"),this.seqSearchInput=document.getElementById("seq-search"),this.exportModelButton=null,this.setupUI(),this.setupAnimsetTools(),this.setupFaceLabelUI(),this.setupVertexLabelUI(),this.initializeFaceLabelPanel(),this.initializeVertexLabelPanel(),this.initializeSeqListPanel(),this.initializeAnimFrameListPanel(),this.initializeAnimFrameDetailsPanel(),this.setupSeqAndAnimFrameEventHandlers(),this.modelSearchInput.addEventListener("input",()=>this.filterModelList()),this.seqSearchInput.addEventListener("input",()=>this.filterSeqList())}setupAnimsetTools(){const e=document.getElementById("import-animset-btn"),t=document.getElementById("export-animset-btn"),n=document.getElementById("copy-seq-btn"),i=document.getElementById("anim-import-input");t==null||t.addEventListener("click",()=>{var g,v,m;const r=document.querySelector("#seq-list .label-item.selected");if(!r)return alert("Select a SEQ first.");const o=r.textContent,a=this.loader.getSeqData(o),l=(g=a==null?void 0:a.frameIds)==null?void 0:g[0];if(!l)return alert("SEQ has no frames.");const c=parseInt(l.split("_").pop()),h=(m=(v=et.instances[c])==null?void 0:v.base)==null?void 0:m.id;if(h===void 0)return alert("Could not resolve Base ID.");const d=Jt.exportAnimSet(h),f=new Blob([d],{type:"application/octet-stream"}),u=document.createElement("a");u.href=URL.createObjectURL(f),u.download=`anim_${h}.anim`,u.click()}),n==null||n.addEventListener("click",async()=>{var c,h;const r=document.querySelector("#seq-list .label-item.selected");if(!r)return alert("Select a SEQ first.");const o=r.textContent,a=this.loader.getSeqData(o);let l=`[${o}]
`;(c=a==null?void 0:a.frameIds)==null||c.forEach((d,f)=>{d&&(l+=`frame${f+1}=${d}
`)}),(h=a==null?void 0:a.delayValues)==null||h.forEach((d,f)=>{d!==void 0&&d>0&&(l+=`delay${f+1}=${d}
`)}),(a==null?void 0:a.replayoff)!==void 0&&a.replayoff!==-1&&(l+=`replayoff=${a.replayoff}
`);try{await navigator.clipboard.writeText(l),console.log(`Copied current SEQ to clipboard:
`,l),alert("Current .seq config copied to clipboard!")}catch{prompt("Clipboard blocked. Copy the config from here:",l)}}),e==null||e.addEventListener("click",()=>i.click()),i==null||i.addEventListener("change",async()=>{var M;const r=(M=i.files)==null?void 0:M[0];if(!r)return;const o=r.name.split("_"),a=parseInt(o[o.length-1],10);if(isNaN(a))return alert("Could not determine Original Base ID from filename. Filename must end in _ID.anim");const l=await this.showConversionOptionsModal();if(!l){i.value="";return}const{revisionDir:c,isPlayerEquipment:h}=l;let d=null,f="relabeled_model.ob2";if(h&&c==="377to274"){const x=await this.getModelFileFromUser();if(x){f=x.name;const y=await x.arrayBuffer();d=ui.convertFromData(new ve(new Uint8Array(y))),d.createLabelReferences()}}const u=new Uint8Array(await r.arrayBuffer()),g=await Jt.importWithConflictCheck(u);let v;if(h&&c==="377to274"){if(d){Jt.applyModelRelabel377To274(d);const x=d.exportToOb2(),y=new Blob([x],{type:"application/octet-stream"}),E=document.createElement("a");E.href=URL.createObjectURL(y),E.download=f,E.click(),console.log("Model relabeled and exported.")}v=Jt.remapLabels377To274(g.baseId)??g.baseId}else v=g.baseId;console.log("%c--- ANIMSET CONVERSION SUCCESSFUL ---","color:green; font-weight:bold;");try{const x=Jt.exportAnimSet(v),y=new Blob([x],{type:"application/octet-stream"}),E=document.createElement("a");E.href=URL.createObjectURL(y),E.download=`anim_${v}.anim`,E.click(),URL.revokeObjectURL(E.href),console.log(`Auto-exported converted file: anim_${v}.anim`)}catch(x){console.error("Auto-export failed:",x)}const m=prompt("AnimSet converted! To update your .seq config, paste the original [sequence] text here:");if(m){const x=Jt.remapSeqConfig(m,g.mapping);console.log("%c--- UPDATED SEQ CONFIG ---","color:cyan; font-weight:bold;"),console.log(x),await navigator.clipboard.writeText(x)}let p=`--- ADD TO base.pack ---
${v}=base_${v}

`;p+=`--- ADD TO animset.pack ---
${v}=anim_${v}

`,p+=`--- ADD TO anim.pack ---
`,g.mapping.forEach(x=>{p+=`${x}=anim_${x}
`}),console.log("%c--- PACK FILE ENTRIES ---","color:orange; font-weight:bold;"),console.log(p),alert(`Remapping Complete!
1. The new SEQ config should be on your clipboard.
2. Pack file entries have been printed to the Console (F12).
-Please place your new .anim file in /Content/models/
-Update all files listed in the console.

If you want to map additional seqs under that animset, you have to manually convert config to new frame ids.
`),this.updateSeqListUI(),i.value=""})}async getModelFileFromUser(){return confirm(`Player equipment or weapons require the model's vertex labels to be remapped.

Do you have the associated .ob2 model file?

OK = select file, Cancel = skip model relabeling.`)?new Promise(t=>{const n=document.createElement("input");n.type="file",n.accept=".ob2";let i=!1;n.onchange=()=>{var o;i||(i=!0,window.removeEventListener("focus",r),t(((o=n.files)==null?void 0:o[0])??null))};const r=()=>{setTimeout(()=>{i||(i=!0,t(null))},300)};n.click(),setTimeout(()=>{window.addEventListener("focus",r,{once:!0})},500)}):null}showConversionOptionsModal(){return new Promise(e=>{const t=document.getElementById("animset-modal-overlay"),n=document.getElementById("animset-modal-cancel"),i=document.getElementById("animset-modal-confirm"),r=document.getElementById("animset-revision-select"),o=document.getElementById("animset-is-player");t.style.display="flex";const a=()=>{t.style.display="none"},l=()=>{a(),n.removeEventListener("click",l),i.removeEventListener("click",c),e(null)},c=()=>{const h={revisionDir:r.value,isPlayerEquipment:o.checked};a(),n.removeEventListener("click",l),i.removeEventListener("click",c),e(h)};n.addEventListener("click",l),i.addEventListener("click",c)})}filterModelList(){const e=document.getElementById("model-list"),t=this.modelSearchInput.value,i=document.getElementById("view-mode-select").value;let r="<span>No .ob2 models loaded</span>";i==="npcs"?r="<span>No NPCs loaded</span>":i==="objects"?r="<span>No Objects (.obj) loaded</span>":i==="locations"&&(r="<span>No Locations (.loc) loaded</span>"),co(e,t,".model-item:not(.list-message)",r,i==="models"?"No models found":i==="npcs"?"No NPCs found":i==="objects"?"No Objects found":i==="locations"?"No Locations found":"No items found")}filterSeqList(){const e=document.getElementById("seq-list"),t=this.seqSearchInput.value;co(e,t,".label-item:not(.list-message)","<span>No SEQs available</span>","No sequences found")}initializeAnimFrameDetailsPanel(){const e=document.getElementById("animframe-details-panel"),t=document.getElementById("clear-details"),n=document.getElementById("animframe-details-content"),i=document.getElementById("add-new-transform-btn"),r=document.getElementById("delete-transform-btn");e.style.display="block",n.innerHTML='<div class="label-item no-labels"><span style="color: #888; font-style: italic;">Select an animation frame to view details.</span></div>',t.disabled=!0,i.disabled=!0,r.disabled=!0,t.addEventListener("click",()=>{if(t.disabled)return;this.hideNewTransformForm(),this.clearTransformEditor();const o=this.viewer.getRenderer();o&&(o.clearSpecificVertexHighlights(),o.clearSpecificFaceHighlights()),this.currentSelectedAnimFrameInstance=null,this.updateExportFrameButtonState(),t.disabled=!0;const a=document.getElementById("add-new-transform-btn");a&&(a.disabled=!0),document.getElementById("animframe-details-content").querySelectorAll(".transform-group").forEach(c=>{c.style.backgroundColor="#2a2a2a"})}),i.addEventListener("click",()=>{i.disabled||this.showNewTransformForm()}),r.addEventListener("click",()=>{r.disabled||this.handleDeleteSelectedTransform()})}clearTransformEditor(){this.activeTransformEditor.element&&this.activeTransformEditor.element.remove(),this.activeTransformEditor={element:null,animFrame:null,transformIndex:-1,parentElement:null};const e=document.getElementById("delete-transform-btn");e.disabled=!0}showTransformEditor(e,t,n){this.clearTransformEditor();const i=document.getElementById("delete-transform-btn"),r=document.createElement("div");r.className="transform-editor";const o=e.base;let a=`Unknown: ${t}`,l=-1;if(o&&o.animTypes&&e.bases&&t<e.bases.length&&e.bases[t]<o.animTypes.length){const d=e.bases[t];l=o.animTypes[d],a=this.getTransformTypeName(l)}r.innerHTML=`<h4>Edit Transform ${t+1} (${a})</h4>`;const c={x:e.x&&t<e.x.length?e.x[t]:0,y:e.y&&t<e.y.length?e.y[t]:0,z:e.z&&t<e.z.length?e.z[t]:0};let h=["x","y","z"];l===5&&(h=["x"]),h.forEach(d=>{const f=document.createElement("div"),u=document.createElement("label");u.htmlFor=`transform-edit-${d}-${t}`,l===5&&d==="x"?u.textContent="Alpha:":u.textContent=`${d.toUpperCase()}:`;let g,v;l===2||l===5&&d==="x"?(g=document.createElement("input"),g.type="range",g.min="0",g.max="255",g.className="transform-slider",v=document.createElement("span"),v.className="slider-value-display",v.textContent=c[d].toString(),g.id=`transform-edit-${d}-${t}`,g.dataset.axis=d,g.value=c[d].toString(),g.addEventListener("input",m=>{const p=parseInt(m.target.value,10);isNaN(p)||(e[d]&&t<e[d].length?e[d][t]=p:console.warn(`Attempted to update transform out of bounds: axis ${d}, index ${t}`),v.textContent=p.toString(),this.refreshActiveAnimFrameDisplay())})):(g=document.createElement("input"),g.type="number",g.id=`transform-edit-${d}-${t}`,g.dataset.axis=d,g.value=c[d].toString(),g.addEventListener("input",m=>{const p=parseFloat(m.target.value);isNaN(p)||(e[d]&&t<e[d].length?e[d][t]=p:console.warn(`Attempted to update transform out of bounds: axis ${d}, index ${t}`),this.refreshActiveAnimFrameDisplay())})),f.appendChild(u),f.appendChild(g),v&&f.appendChild(v),r.appendChild(f)}),this.activeTransformEditor={element:r,animFrame:e,transformIndex:t,parentElement:n},n.parentNode.insertBefore(r,n.nextSibling),i.disabled=!1}refreshActiveAnimFrameDisplay(){this.currentSelectedAnimFrameInstance&&this.currentSelectedAnimFrameInstance.id!==void 0&&this.displaySingleAnimFrame(this.currentSelectedAnimFrameInstance.id)}initializeSeqListPanel(){const e=document.getElementById("seq-list-panel");this.loopSequenceCheckbox=document.getElementById("loop-sequence-checkbox"),e.style.display="block",this.filterSeqList(),document.getElementById("start-seq").disabled=!0,document.getElementById("clear-seq").disabled=!0,this.loopSequenceCheckbox.disabled=!0}getTransformTypeName(e){switch(e){case 0:return"Set Pivot";case 1:return"Translate";case 2:return"Rotate";case 3:return"Scale";case 5:return"Alpha (Faces)";default:return`Unknown (${e})`}}initializeAnimFrameListPanel(){const e=document.getElementById("animframe-list-panel"),t=document.getElementById("animframe-list"),n=document.getElementById("clear-frames"),i=document.getElementById("export-frame-btn");e.style.display="block",t.innerHTML='<div class="label-item no-labels"><span style="color: #888; font-style: italic;">Select a SEQ to view frames</span></div>',i.disabled=!0,n.disabled=!0,n.addEventListener("click",()=>{if(n.disabled)return;const r=this.viewer.getRenderer(),o=r.selectedModel;if(o){const a=r.modelMeshes.get(o);if(a){const l=Array.isArray(a)?a:[a];let c=null;for(const h of l)if(h&&h.userData&&h.userData.originalModel){c=h.userData.originalModel;break}c&&(c.resetToOriginal(),r.updateMeshGeometry(),r.updateVertexVisuals(o))}}this.currentSelectedAnimFrameInstance=null,this.updateAnimFrameDetailsUI(null),document.querySelectorAll("#animframe-list .label-item.selected").forEach(a=>a.classList.remove("selected"))}),i.addEventListener("click",()=>{i.disabled||this.handleExportAnimFrame()})}setupSeqAndAnimFrameEventHandlers(){const e=document.getElementById("start-seq"),t=document.getElementById("clear-seq");e.addEventListener("click",()=>this.handleStartSequence()),t.addEventListener("click",()=>this.handleClearSequence())}setupUI(){const e=document.getElementById("file-input"),t=document.getElementById("status"),n=document.getElementById("vertex-toggle"),i=document.getElementById("wireframe-toggle"),r=document.getElementById("edit-toggle"),o=document.getElementById("view-mode-select");this.exportModelButton=document.getElementById("export-model-button"),e.addEventListener("change",async a=>{const l=a.target;if(!l.files||l.files.length===0)return;const c=document.getElementById("loading");c.style.display="block";try{await this.loader.loadContentFiles(l.files),this.updateModelListUI(),this.updateSeqListUI(),t.textContent=`Found ${this.loader.getAvailableModels().length} .ob2 files`}catch(h){console.error("Error processing files:",h),t.textContent=`Error: ${h.message}`}finally{c.style.display="none"}}),n.addEventListener("click",()=>{const a=this.viewer.getRenderer().toggleVertexNumbers();n.textContent=a?"Hide Vertex Numbers":"Show Vertex Numbers",n.classList.toggle("active",a)}),i.addEventListener("click",()=>{const a=this.viewer.getRenderer().toggleWireframe();i.textContent=a?"Hide Wireframe":"Show Wireframe",i.classList.toggle("active",a)}),r.addEventListener("click",()=>{const a=this.viewer.getRenderer().toggleEditMode();r.textContent=a?"Disable Vertex Editing":"Enable Vertex Editing",r.classList.toggle("active",a),this.updateVertexLabelUIState()}),o.addEventListener("change",()=>{this.updateModelListUI(),this.updateExportButtonState(),this.updateLabelsEditBoxes()}),this.exportModelButton.addEventListener("click",()=>this.handleExportModel()),this.updateExportButtonState()}updateLabelsEditBoxes(){const n=document.getElementById("view-mode-select").value==="npcs";this.changeVertexLabels&&(this.changeVertexLabels.disabled=n,this.changeVertexLabels.checked=n?!1:this.changeVertexLabels.checked),this.changeFaceLabels&&(this.changeFaceLabels.disabled=n,this.changeFaceLabels.checked=n?!1:this.changeFaceLabels.checked)}updateExportButtonState(){if(this.exportModelButton){const e=this.viewer.getRenderer(),t=e.selectedModel;let n=!1;if(t){const i=e.modelMeshes.get(t);if(i){const r=Array.isArray(i)?i:[i];n=r.length>0&&r[0]&&r[0].userData&&r[0].userData.originalModel}}this.exportModelButton.disabled=!n}}initializeFaceLabelPanel(){var n;const e=document.getElementById("label-panel"),t=document.getElementById("label-list");e.style.display="block",t.innerHTML='<div class="label-item no-labels"><span style="color: #888; font-style: italic;">No model loaded</span></div>',document.getElementById("clear-labels").disabled=!0,this.changeFaceLabels=document.getElementById("change-face-labels"),(n=this.changeFaceLabels)==null||n.addEventListener("change",()=>{const i=this.viewer.getRenderer().selectedModel;i&&this.updateFaceLabelUI(i),this.updateLabelsEditBoxes()})}initializeVertexLabelPanel(){var n;const e=document.getElementById("vertex-label-panel"),t=document.getElementById("vertex-label-list");e.style.display="block",t.innerHTML='<div class="label-item no-labels"><span style="color: #888; font-style: italic;">No model loaded</span></div>',document.getElementById("clear-vertex-labels").disabled=!0,this.changeVertexLabels=document.getElementById("change-vertex-labels"),(n=this.changeVertexLabels)==null||n.addEventListener("change",()=>{const i=this.viewer.getRenderer().selectedModel;i&&this.updateVertexLabelUI(i),this.updateLabelsEditBoxes()})}async updateModelListUI(){const e=document.getElementById("model-list"),n=document.getElementById("view-mode-select").value;if(e.innerHTML="",this.handleClearSequence(),n==="models"){const i=this.loader.getAvailableModels();let r=!0;for(const o of i){const a=document.createElement("div");a.className="model-item",a.textContent=o,a.addEventListener("click",async()=>{a.classList.add("loading"),a.textContent=`${o} (loading...)`;try{await this.viewer.loadModel(o),document.querySelectorAll(".model-item").forEach(l=>{l.classList.remove("selected","loading");const c=l.textContent.replace(" (loading...)","").replace(" (error)","");l.textContent=c}),a.classList.add("selected"),a.textContent=o,this.viewer.getRenderer().showModel(o),this.updateFaceLabelUI(o),this.updateVertexLabelUI(o),this.handleClearSequence(),this.updateAnimationButtonStates(),this.updateExportButtonState()}catch{a.classList.remove("loading"),a.textContent=`${o} (error)`,a.classList.add("error"),setTimeout(()=>{a.classList.remove("error"),a.textContent=o},3e3),this.updateExportButtonState()}}),e.appendChild(a),r&&i.length>0&&(setTimeout(async()=>{try{await this.viewer.loadModel(o),a.classList.add("selected"),this.viewer.getRenderer().showModel(o),this.updateFaceLabelUI(o),this.updateVertexLabelUI(o),this.handleClearSequence(),this.updateAnimationButtonStates(),this.updateExportButtonState()}catch(l){console.error(`Auto-load failed for ${o}: ${l}`)}},100),r=!1)}}else if(n==="npcs"){const i=this.loader.getAllNpcs();for(const r of i){const o=this.loader.getNpcData(r),a=document.createElement("div");a.className="model-item npc-item";const l=(o==null?void 0:o.name)||r;a.innerHTML=`<div class="npc-name">${l}</div><div class="npc-id">${r}</div>${o!=null&&o.models?`<div class="npc-models">${o.models.length} model(s)</div>`:""}`,a.addEventListener("click",async()=>{a.classList.add("loading");const c=a.innerHTML;a.innerHTML=`${c} <div style="color: #888; font-size: 10px; margin-top: 2px;">Loading...</div>`;try{const h=await this.loader.loadNpcModels(r),d=`npc_${r}`;this.viewer.getRenderer().addModel(d,h),document.querySelectorAll(".model-item").forEach(f=>f.classList.remove("selected","loading")),a.classList.add("selected"),a.innerHTML=c,this.viewer.getRenderer().showModel(d),this.updateFaceLabelUI(d),this.updateVertexLabelUI(d),this.handleClearSequence(),this.updateAnimationButtonStates(),this.updateExportButtonState()}catch(h){console.error(`Error loading object ${r}:`,h),a.classList.remove("loading"),a.innerHTML=`${c} <div style="color: #ff6666; font-size: 10px; margin-top: 2px;">Error: ${h.message.substring(0,30)}...</div>`,a.classList.add("error"),setTimeout(()=>{a.classList.remove("error"),a.innerHTML=c},5e3),this.updateExportButtonState()}}),e.appendChild(a)}}else if(n==="objects"){const i=this.loader.getAllObjs();for(const r of i){const o=this.loader.getObjData(r),a=document.createElement("div");a.className="model-item obj-item";const l=(o==null?void 0:o.name)||r;a.innerHTML=`<div class="obj-name">${l}</div><div class="obj-id">${r}</div>${o!=null&&o.model?`<div class="obj-model-name">Model: ${o.model}</div>`:""}`,a.addEventListener("click",async()=>{a.classList.add("loading");const c=a.innerHTML;if(a.innerHTML=`${c} <div style="color: #888; font-size: 10px; margin-top: 2px;">Loading...</div>`,!(o!=null&&o.model)){a.classList.remove("loading"),a.innerHTML=`${c} <div style="color: #ffcc00; font-size: 10px; margin-top: 2px;">No model defined</div>`,setTimeout(()=>{a.innerHTML=c},3e3),this.updateExportButtonState();return}try{const h=o.model;let d=null;for(const[v]of this.loader.availableFiles.entries()){const m=v.split("/");if(m[m.length-1]===h){d=v;break}}if(!d)throw new Error(`Model file not found for object: ${h}`);const u=(await this.loader.loadModel(d)).clone();if(o.recols)for(const v in o.recols){const[m,p]=o.recols[v];u.recolor(m,p)}u.processTextureCoordinates(),u.createLabelReferences(),u.calculateNormals(64,850,-30,-50,-30,!0),u.saveCurrentVerticesAsOriginal();const g=`obj_${r}_${d.replace(/\//g,"_")}`;this.viewer.getRenderer().addModel(g,u),document.querySelectorAll(".model-item").forEach(v=>v.classList.remove("selected","loading")),a.classList.add("selected"),a.innerHTML=c,this.viewer.getRenderer().showModel(g),this.updateFaceLabelUI(g),this.updateVertexLabelUI(g),this.handleClearSequence(),this.updateAnimationButtonStates(),this.updateExportButtonState()}catch(h){console.error(`Error loading object ${r}:`,h),a.classList.remove("loading"),a.innerHTML=`${c} <div style="color: #ff6666; font-size: 10px; margin-top: 2px;">Error: ${h.message.substring(0,30)}...</div>`,a.classList.add("error"),setTimeout(()=>{a.classList.remove("error"),a.innerHTML=c},5e3),this.updateExportButtonState()}}),e.appendChild(a)}}else if(n==="locations"){const i=this.loader.getAllLocs();for(const r of i){const o=this.loader.getLocData(r),a=document.createElement("div");a.className="model-item loc-item";const l=(o==null?void 0:o.name)||r;a.innerHTML=`<div class="loc-name">${l}</div><div class="loc-id">${r}</div>${o!=null&&o.model?`<div class="loc-model-name">Model: ${o.model}</div>`:""}`,a.addEventListener("click",async()=>{a.classList.add("loading");const c=a.innerHTML;if(a.innerHTML=`${c} <div style="color: #888; font-size: 10px; margin-top: 2px;">Loading...</div>`,!(o!=null&&o.model)){a.classList.remove("loading"),a.innerHTML=`${c} <div style="color: #ffcc00; font-size: 10px; margin-top: 2px;">No model defined</div>`,setTimeout(()=>{a.innerHTML=c},3e3),this.updateExportButtonState();return}try{const h=o.model;let d=null,f=[];const u=async x=>{f.push(x);for(const[y]of this.loader.availableFiles.entries()){const E=y.split("/");if(E[E.length-1]===x)return y}return null};let g=h;const v=Object.keys(_s);for(const x of v)if(h.endsWith(x)){g=h.substring(0,h.length-x.length);break}if(d=await u(h),!d){const x=g+"_8";(h!==x||g===h)&&(f.includes(x)||(d=await u(x)))}if(!d)for(const x of Xo){const y=g+x;if(!f.includes(y)&&(d=await u(y),d))break}if(!d){let x=`No suitable model variant found for location base '${h}'`;throw g!==h&&(x+=` (derived base: '${g}')`),new Error(`${x}. Tried: ${[...new Set(f)].join(", ")}.`)}const p=(await this.loader.loadModel(d)).clone();if(o.recols)for(const x in o.recols){const[y,E]=o.recols[x];p.recolor(y,E)}if(o.retexs)for(const x in o.retexs){const[y,E]=o.retexs[x];if(y&&E){const C=this.loader.getTextureIdByName(y),S=this.loader.getTextureIdByName(E);C&&S&&p.recolor(C,S)}}(o.resizex!==128||o.resizey!==128||o.resizez!==128)&&p.scale(o.resizex,o.resizey,o.resizez),p.processTextureCoordinates(),p.createLabelReferences(),p.calculateNormals(o.ambient+64,o.contrast*5+768,-50,-10,-50,!o.sharelight),p.saveCurrentVerticesAsOriginal();const M=`loc_${r}_${d.replace(/\//g,"_")}`;this.viewer.getRenderer().addModel(M,p),document.querySelectorAll(".model-item").forEach(x=>x.classList.remove("selected","loading")),a.classList.add("selected"),a.innerHTML=c,this.viewer.getRenderer().showModel(M),this.updateFaceLabelUI(M),this.updateVertexLabelUI(M),this.handleClearSequence(),this.updateAnimationButtonStates(),this.updateExportButtonState()}catch(h){console.error(`Error loading location ${r}:`,h),a.classList.remove("loading"),a.innerHTML=`${c} <div style="color: #ff6666; font-size: 10px; margin-top: 2px;">Error: ${h.message.substring(0,30)}...</div>`,a.classList.add("error"),setTimeout(()=>{a.classList.remove("error"),a.innerHTML=c},5e3),this.updateExportButtonState()}}),e.appendChild(a)}}this.filterModelList(),this.updateAnimationButtonStates(),this.updateExportButtonState()}updateExportFrameButtonState(){const e=document.getElementById("export-frame-btn");e&&(e.disabled=!this.currentSelectedAnimFrameInstance||this.currentSelectedAnimFrameInstance.id===void 0)}buildRemappedFaceArray(e,t){const n=new Int32Array(e.faceCount).fill(0);return e.labelFaces&&e.labelFaces.forEach((i,r)=>{if(!i)return;const o=t[r]??r;for(let a=0;a<i.length;a++)n[i[a]]=o}),n}buildRemappedVertexArray(e,t){const n=new Int32Array(e.vertexCount).fill(0);return e.labelVertices&&e.labelVertices.forEach((i,r)=>{if(!i)return;const o=t[r]??r;for(let a=0;a<i.length;a++)n[i[a]]=o}),n}applyCustomFaceLabels(e){const t={};document.querySelectorAll("#label-list .label-item").forEach(i=>{var h;const r=(h=i.querySelector("span"))==null?void 0:h.textContent,o=i.querySelector("input");if(!r||!o)return;const a=r.match(/Label\s+(\d+)/);if(!a)return;const l=parseInt(a[1]),c=parseInt(o.value);!isNaN(c)&&c!==l&&(t[l]=c)}),e.faceLabelForExport=this.buildRemappedFaceArray(e,t),e.hadOriginalFaceLabels=!0}applyCustomVertexLabels(e){const t={};document.querySelectorAll("#vertex-label-list .label-item").forEach(i=>{var h;const r=(h=i.querySelector("span"))==null?void 0:h.textContent,o=i.querySelector("input");if(!r||!o)return;const a=r.match(/Label\s+(\d+)/);if(!a)return;const l=parseInt(a[1]),c=parseInt(o.value);!isNaN(c)&&c!==l&&(t[l]=c)}),e.vertexLabelForExport=this.buildRemappedVertexArray(e,t),e.hadOriginalVertexLabels=!0}async handleExportAnimFrame(){if(!this.currentSelectedAnimFrameInstance||this.currentSelectedAnimFrameInstance.id===void 0){alert("No animation frame selected to export, or the selected frame is invalid."),this.updateExportFrameButtonState();return}const e=this.currentSelectedAnimFrameInstance;try{const t=e.exportToFrame();if(!t){console.error(`AnimFrame ${e.id}: exportToFrame() returned null. This might happen if animFrame.base is missing or other critical data is unavailable.`),alert(`Failed to export frame ${e.id}: Frame data could not be generated. Check console for details.`),this.updateExportFrameButtonState();return}const n=new Blob([t],{type:"application/octet-stream"}),i=document.createElement("a");i.href=URL.createObjectURL(n);let r;if(e.originalFileName)r=e.originalFileName;else if(e.originalPath){const a=e.originalPath.split("/");r=a[a.length-1]}else r=`animframe_${e.id}.frame`;i.download=r,document.body.appendChild(i),i.click(),document.body.removeChild(i),URL.revokeObjectURL(i.href);const o=document.getElementById("status");o&&(o.textContent=`Frame "${r}" exported successfully.`,setTimeout(()=>{var l;const a=((l=this.loader.getAvailableModels())==null?void 0:l.length)||0;o.textContent=`Found ${a} .ob2 files`},3e3))}catch(t){console.error(`Error exporting AnimFrame ${e.id}:`,t),alert(`Failed to export frame ${e.id}: ${t.message}`)}this.updateExportFrameButtonState()}async handleExportModel(){var o,a;const e=this.viewer.getRenderer(),t=e.selectedModel;if(!this.viewer||!t){alert("No model selected to export."),this.updateExportButtonState();return}const n=e.modelMeshes.get(t);if(!n){alert("Selected model data not found."),this.updateExportButtonState();return}const i=Array.isArray(n)?n:[n];let r=null;for(const l of i)if(l&&l.userData&&l.userData.originalModel){r=l.userData.originalModel;break}if(!r){alert("Selected model instance not found."),this.updateExportButtonState();return}(o=this.changeFaceLabels)!=null&&o.checked&&r&&this.applyCustomFaceLabels(r),(a=this.changeVertexLabels)!=null&&a.checked&&r&&this.applyCustomVertexLabels(r);try{if(r.saveCurrentVerticesAsOriginal(),r.partMapping&&r.partMapping.isNpcModel){const l=r.exportNpcParts();if(l&&l.size>0){let c=0;for(const[d,f]of l){const g=`${r.partMapping.parts[d].originalModelName}.ob2`,v=new Blob([f],{type:"application/octet-stream"}),m=document.createElement("a");m.href=URL.createObjectURL(v),m.download=g,document.body.appendChild(m),m.click(),document.body.removeChild(m),URL.revokeObjectURL(m.href),c++}const h=document.getElementById("status");if(h){const d=document.querySelector("#model-list .model-item.selected");let f="NPC";if(d&&d.classList.contains("npc-item")){const u=d.querySelector(".npc-id");u&&(f=`NPC ${u.textContent}`)}h.textContent=`${f} exported as ${c} parts with original names.`,setTimeout(()=>{var g;const u=((g=this.loader.getAvailableModels())==null?void 0:g.length)||0;h.textContent=`Found ${u} .ob2 files`},3e3)}}else throw new Error("Failed to export NPC parts - no part data available")}else{const l=r.exportToOb2(),c=new Blob([l],{type:"application/octet-stream"}),h=document.createElement("a");h.href=URL.createObjectURL(c);let d="exported_model.ob2";const f=document.querySelector("#model-list .model-item.selected");if(f){if(f.classList.contains("obj-item")){const g=f.querySelector(".obj-model-name");g&&g.textContent&&(d=`${g.textContent.replace("Model: ","")}.ob2`)}else if(f.classList.contains("loc-item")){const g=f.querySelector(".loc-model-name");g&&g.textContent&&(d=`${g.textContent.replace("Model: ","")}.ob2`)}else if(t){const g=this.loader.availableFiles.get(t);g&&g.name?d=g.name:d=`${t.split("/").pop()||"exported_model"}.ob2`}}h.download=d,document.body.appendChild(h),h.click(),document.body.removeChild(h),URL.revokeObjectURL(h.href);const u=document.getElementById("status");u&&(u.textContent=`Model "${d}" exported.`,setTimeout(()=>{var v;const g=((v=this.loader.getAvailableModels())==null?void 0:v.length)||0;u.textContent=`Found ${g} .ob2 files`},3e3))}}catch(l){console.error("Error exporting model:",l),alert("Failed to export model: "+l.message)}this.updateExportButtonState()}updateAnimationButtonStates(){const e=document.getElementById("start-seq"),t=document.getElementById("clear-seq"),n=this.viewer.getRenderer(),i=n.selectedModel;let r=!1;if(i){const c=n.modelMeshes.get(i);if(c){const h=Array.isArray(c)?c:[c];r=h.length>0&&h[0]&&h[0].userData&&h[0].userData.originalModel}}const o=document.querySelector("#seq-list .label-item.selected"),a=r&&o&&!this.currentAnimation.timerId,l=!!this.currentAnimation.timerId;e&&(e.disabled=!a),t&&(t.disabled=!l),this.loopSequenceCheckbox&&(this.loopSequenceCheckbox.disabled=!r||!o)}handleStartSequence(){this.currentAnimation.timerId&&this.handleClearSequence();const e=this.viewer.getRenderer(),t=e.selectedModel;if(!t){this.updateAnimationButtonStates();return}const n=e.modelMeshes.get(t);if(!n){this.updateAnimationButtonStates();return}const i=Array.isArray(n)?n:[n];let r=null;for(const c of i)if(c&&c.userData&&c.userData.originalModel){r=c.userData.originalModel;break}if(!r){this.updateAnimationButtonStates();return}const o=document.querySelector("#seq-list .label-item.selected");if(!o){this.updateAnimationButtonStates();return}const a=o.textContent,l=this.loader.getSeqData(a);if(!l||!l.frameIds||l.frameIds.length===0){this.updateAnimationButtonStates();return}this.currentAnimation.modelRef=r,this.currentAnimation.seqId=a,this.currentAnimation.seqData=l,this.currentAnimation.frameIndex=0,this.animateNextFrame(),this.updateAnimationButtonStates()}animateNextFrame(){if(!this.currentAnimation.modelRef||!this.currentAnimation.seqData){this.handleClearSequence();return}const e=this.currentAnimation.modelRef,t=this.currentAnimation.seqData;let n=this.currentAnimation.frameIndex;const i=t.frameIds||[],r=i.length;if(r===0){this.handleClearSequence();return}if(n>=r){const h=this.loopSequenceCheckbox;if(h&&h.checked)n=0;else if(t.replayoff!==void 0&&t.replayoff!==-1&&n>=t.replayoff){this.handleClearSequence();return}else if(t.replayoff===void 0||t.replayoff===-1){if(t.replayoff!==-1){this.handleClearSequence();return}n=0}else n=0}const o=i[n];let a=-1;if(o!=null){const h=String(o).split("_"),d=h.length>1?h[h.length-1]:h[0];a=parseInt(d,10),isNaN(a)&&(a=-1)}if(a!==-1){e.resetToOriginal(),e.applyTransform(a),this.viewer.getRenderer().updateMeshGeometry();const h=this.viewer.getRenderer().selectedModel;h&&this.viewer.getRenderer().updateVertexVisuals(h)}this.currentAnimation.frameIndex=n+1;let l=2;const c=t.delayValues||[];if(c[n]!==void 0)if(c[n]===0)if(a!==-1&&et.instances&&et.instances[a]){const h=et.instances[a];h&&h.frameDelay>0?l=h.frameDelay:l=1}else l=1;else l=c[n];else if(a!==-1&&et.instances&&et.instances[a]){const h=et.instances[a];h&&h.frameDelay>0?l=h.frameDelay:h&&h.frameDelay===0&&(l=1)}this.currentAnimation.timerId=setTimeout(()=>this.animateNextFrame(),l*20)}handleClearSequence(){if(this.currentAnimation.timerId&&clearTimeout(this.currentAnimation.timerId),this.currentAnimation.modelRef){this.currentAnimation.modelRef.resetToOriginal(),this.viewer.getRenderer().updateMeshGeometry();const e=this.viewer.getRenderer().selectedModel;e&&this.viewer.getRenderer().updateVertexVisuals(e)}this.currentAnimation={modelRef:null,seqId:null,seqData:null,frameIndex:0,timerId:null},document.querySelectorAll("#seq-list .label-item.selected").forEach(e=>e.classList.remove("selected")),this.updateAnimFrameListUI(null),this.updateAnimationButtonStates()}updateSeqListUI(){const e=document.getElementById("seq-list");e.innerHTML="",this.loader.getAllSeqs().forEach(n=>{const i=document.createElement("div");i.className="label-item",i.textContent=n,i.addEventListener("click",()=>{if(this.currentAnimation.timerId&&clearTimeout(this.currentAnimation.timerId),this.currentAnimation.modelRef&&this.currentAnimation.timerId){this.currentAnimation.modelRef.resetToOriginal(),this.viewer.getRenderer().updateMeshGeometry();const r=this.viewer.getRenderer().selectedModel;r&&this.viewer.getRenderer().updateVertexVisuals(r)}this.currentAnimation={modelRef:null,seqId:null,seqData:null,frameIndex:0,timerId:null},document.querySelectorAll("#seq-list .label-item").forEach(r=>r.classList.remove("selected")),i.classList.add("selected"),this.updateAnimFrameListUI(n),this.updateAnimationButtonStates()}),e.appendChild(i)}),this.filterSeqList(),this.updateAnimationButtonStates()}updateAnimFrameListUI(e){const t=document.getElementById("animframe-list");if(t.innerHTML="",this.currentSelectedAnimFrameInstance=null,this.clearTransformEditor(),this.updateAnimFrameDetailsUI(null),!e){t.innerHTML='<div class="label-item no-labels"><span style="color: #888; font-style: italic;">Select a SEQ to view frames</span></div>',document.getElementById("clear-frames").disabled=!0,document.getElementById("export-frame-btn").disabled=!0;return}const n=this.loader.getSeqData(e);if(!n||!n.frameIds&&!n.iframeIds){t.innerHTML=`<div class="label-item no-labels"><span style="color: #888; font-style: italic;">No frame data for ${e}</span></div>`;return}const i=n.frameIds||[],r=n.iframeIds||[],o=n.delayValues||[],a=Math.max(i.length,r.length,o.length);if(a===0){t.innerHTML=`<div class="label-item no-labels"><span style="color: #888; font-style: italic;">SEQ ${e} has no frames defined</span></div>`;return}document.getElementById("clear-frames").disabled=!1,document.getElementById("export-frame-btn").disabled=!0;for(let l=0;l<a;l++){const c=i[l],h=r[l],d=o[l],f=(u,g)=>{if(u!=null){const v=document.createElement("div");v.className="label-item";let m=`${l+1}: ${u}`;d!==void 0&&g==="Frame"?m+=` (Delay: ${d})`:d!==void 0&&g==="iFrame"&&!c&&(m+=` (Delay: ${d})`),v.textContent=m;let p=null,M=null;try{const x=String(u).split("_"),y=x.length>1?x[x.length-1]:x[0];M=parseInt(y,10),!isNaN(M)&&et.instances&&et.instances[M]&&(p=et.instances[M],p.id===void 0&&(p.id=M))}catch(x){console.warn(`Could not parse or find AnimFrame for: ${u}`,x)}p?v.addEventListener("click",()=>{const x=v;document.querySelectorAll("#animframe-list .label-item").forEach(y=>y.classList.remove("selected")),x.classList.add("selected"),this.currentSelectedAnimFrameInstance=p,this.updateAnimFrameDetailsUI(p),p&&p.id!==void 0&&(this.displaySingleAnimFrame(p.id),document.querySelectorAll("#animframe-list .label-item").forEach(y=>y.classList.remove("selected")),x.classList.add("selected"))}):(v.style.cursor="not-allowed",v.title="Animation frame data not found"),t.appendChild(v)}};if(f(c,"Frame"),f(h,"iFrame"),c==null&&h==null&&d!==void 0){const u=document.createElement("div");u.className="label-item",u.innerHTML=`Step ${l+1}: (Empty) (Delay: ${d})`,t.appendChild(u)}}t.children.length===0&&(t.innerHTML=`<div class="label-item no-labels"><span style="color: #888; font-style: italic;">No displayable frames in ${e}</span></div>`,document.getElementById("clear-frames").disabled=!0,document.getElementById("export-frame-btn").disabled=!0)}displaySingleAnimFrame(e){if(e===-1||isNaN(e)){console.warn("Invalid frame ID provided for single frame display."),this.updateAnimationButtonStates();return}this.currentAnimation.timerId&&clearTimeout(this.currentAnimation.timerId),this.currentAnimation={modelRef:this.currentAnimation.modelRef,seqId:null,seqData:null,frameIndex:0,timerId:null};const t=this.viewer.getRenderer(),n=t.selectedModel;if(!n){this.updateAnimationButtonStates();return}const i=t.modelMeshes.get(n);if(!i){this.updateAnimationButtonStates();return}const r=Array.isArray(i)?i:[i];let o=null;for(const a of r)if(a&&a.userData&&a.userData.originalModel){o=a.userData.originalModel;break}if(!o){this.updateAnimationButtonStates();return}this.currentAnimation.modelRef=o,o.resetToOriginal(),o.applyTransform(e),t.updateMeshGeometry(),t.updateVertexVisuals(n),this.updateAnimationButtonStates()}handleTransformOperationClick(e,t){const n=this.viewer.getRenderer(),i=n.selectedModel;if(!i)return;const r=n.modelMeshes.get(i);if(!r)return;const o=Array.isArray(r)?r:[r];let a=null;for(const f of o)if(f&&f.userData&&f.userData.originalModel){a=f.userData.originalModel;break}if(!a)return;const l=e.base;if(!l||!e.bases||!l.animLabels||!l.animTypes||t>=e.bases.length){console.warn("Cannot highlight: AnimFrame or AnimBase data incomplete or index out of bounds."),n.clearSpecificVertexHighlights(),n.clearSpecificFaceHighlights();return}const c=e.bases[t];if(c===void 0||c>=l.animTypes.length||c>=l.animLabels.length){console.warn(`Invalid baseGroupIndex (${c}) for transform. AnimBase might not have this group defined.`),n.clearSpecificVertexHighlights(),n.clearSpecificFaceHighlights();return}const h=l.animTypes[c],d=l.animLabels[c];if(n.clearSpecificVertexHighlights(),n.clearSpecificFaceHighlights(),!(!d||d.length===0))if(h===5){const f=new Set;if(a.labelFaces)for(let u=0;u<d.length;u++){const g=d[u];if(a.labelFaces[g]){const v=a.labelFaces[g];for(let m=0;m<v.length;m++)f.add(v[m])}}f.size>0&&n.highlightSpecificFaces(Array.from(f))}else{const f=new Set;if(a.labelVertices)for(let u=0;u<d.length;u++){const g=d[u];if(a.labelVertices[g]){const v=a.labelVertices[g];for(let m=0;m<v.length;m++)f.add(v[m])}}f.size>0&&n.highlightSpecificVertices(Array.from(f))}}updateAnimFrameDetailsUI(e){const t=document.getElementById("animframe-details-content"),n=document.getElementById("clear-details"),i=document.getElementById("add-new-transform-btn"),r=this.viewer.getRenderer();if(r&&(r.clearSpecificVertexHighlights(),r.clearSpecificFaceHighlights()),this.clearTransformEditor(),this.updateExportFrameButtonState(),e&&e.base&&e.base.animTypes&&e.base.animLabels?i&&(i.disabled=!1):(i&&(i.disabled=!0),this.hideNewTransformForm()),!e){t.innerHTML='<div class="label-item no-labels"><span style="color: #888; font-style: italic;">Select an animation frame or frame data missing.</span></div>',n&&(n.disabled=!0);return}n&&(n.disabled=!1);let o=`<div class="detail-item"><span class="detail-label">Frame ID:</span> ${e.id!==void 0?e.id:"N/A"}</div>`;o+=`<div class="detail-item"><span class="detail-label">Frame Delay:</span> ${e.frameDelay} ticks</div>`;const a=e.base;a?o+=`<div class="detail-item"><span class="detail-label">Base Anim Groups:</span> ${a.animLength}</div>`:o+='<div class="detail-item"><span class="detail-label">Base Info:</span> AnimBase object not found on this frame.</div>';const l=e.frameLength;if(o+=`<div class="detail-item"><span class="detail-label">Transforms in this Frame:</span> ${l}</div>`,l>0&&a&&e.bases&&e.x&&e.y&&e.z&&a.animTypes&&a.animLabels){o+='<div class="detail-item" style="margin-top: 8px;"><span class="detail-label">Frame Transforms List:</span></div>';for(let c=0;c<l;c++){if(c>=e.bases.length||c>=e.x.length||c>=e.y.length||c>=e.z.length){console.warn(`Data inconsistency in AnimFrame ${e.id} at transform index ${c}. frameLength: ${l}, but array lengths differ.`);continue}const h=e.bases[c];if(h===void 0||h>=a.animTypes.length||h>=a.animLabels.length){console.warn(`Invalid baseIndexForThisTransform (${h}) in AnimFrame ${e.id} at transform index ${c}. Max base group index: ${a.animTypes.length-1}`),o+=`<div class="transform-group" data-transform-index="${c}" style="padding: 6px; margin-bottom: 6px; border: 1px solid #cc0000; border-radius: 4px; background-color: #4a2a2a;">`,o+=`<div style="font-weight: bold; color: #ffaaaa;">${c+1}: Error - Invalid Base Group Index ${h}</div>`,o+="</div>";continue}const d=a.animTypes[h],f=this.getTransformTypeName(d),u=e.x[c],g=e.y[c],v=e.z[c];o+=`<div class="transform-group" data-transform-index="${c}"
                             style="cursor: pointer; padding: 6px; margin-bottom: 6px; border: 1px solid #444; border-radius: 4px; background-color: #2a2a2a;">`,o+=`<div style="font-weight: bold;">${c+1} (targets Base Group ${h}): ${f}</div>`,o+=`<div>Values: (X: ${u}, Y: ${g}, Z: ${v})</div>`;const m=a.animLabels[h];if(m&&m.length>0){o+=`<div>Affects Model ${d===5?"Face":"Vertex"} Labels: <ul>`;for(let p=0;p<m.length;p++)o+=`<li>Label ${m[p]}</li>`;o+="</ul></div>"}else o+=`<div>Affects Model ${d===5?"Face":"Vertex"} Labels: None specified for Base Group ${h}</div>`;o+="</div>"}}else l>0&&(o+='<div class="detail-item"><span class="detail-label">Transforms:</span> (Data for individual transforms might be incomplete or AnimBase info missing)</div>');t.innerHTML=o,t.querySelectorAll(".transform-group").forEach(c=>{c.addEventListener("click",h=>{const d=h.currentTarget;if(d.style.borderColor==="rgb(204, 0, 0)"){console.warn("Clicked on an error-state transform group. Editor not shown.");return}t.querySelectorAll(".transform-group").forEach(u=>u.style.backgroundColor="#2a2a2a"),d.style.backgroundColor="#0055A4";const f=parseInt(d.dataset.transformIndex,10);if(!isNaN(f)){const u=this.viewer.getRenderer();u&&(u.clearSpecificVertexHighlights(),u.clearSpecificFaceHighlights()),this.handleTransformOperationClick(e,f),this.showTransformEditor(e,f,d);const g=document.getElementById("delete-transform-btn");g.disabled=!1,n.disabled=!1}})})}showNewTransformForm(){const e=document.getElementById("new-transform-form-container");if(!this.currentSelectedAnimFrameInstance||!this.currentSelectedAnimFrameInstance.base){console.warn("Cannot show new Transform form: No valid AnimFrame or AnimBase selected."),this.hideNewTransformForm();return}const n=this.currentSelectedAnimFrameInstance.base;if(e.innerHTML=`
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
        `,this.activeNewTransformForm.baseGroupSelect=document.getElementById("new-transform-base-group-select"),this.activeNewTransformForm.xInput=document.getElementById("new-transform-x"),this.activeNewTransformForm.yInput=document.getElementById("new-transform-y"),this.activeNewTransformForm.zInput=document.getElementById("new-transform-z"),this.activeNewTransformForm.affectedInfoDiv=document.getElementById("affected-labels-info"),n.animLength>0&&n.animTypes&&this.activeNewTransformForm.baseGroupSelect)for(let i=0;i<n.animLength;i++){const r=document.createElement("option");r.value=i.toString(),r.textContent=`Group ${i}: ${this.getTransformTypeName(n.animTypes[i])}`,this.activeNewTransformForm.baseGroupSelect.appendChild(r)}else this.activeNewTransformForm.affectedInfoDiv&&(this.activeNewTransformForm.affectedInfoDiv.textContent="AnimBase has no defined groups.");this.activeNewTransformForm.baseGroupSelect&&(this.activeNewTransformForm.baseGroupSelect.addEventListener("change",i=>{const r=parseInt(i.target.value,10);this.updateAffectedLabelsInfo(n,r),this.highlightAffectedModelParts(n,r);const o=n.animTypes[r];this.activeNewTransformForm.xInput&&this.activeNewTransformForm.yInput&&this.activeNewTransformForm.zInput&&(o===3?(this.activeNewTransformForm.xInput.value="128",this.activeNewTransformForm.yInput.value="128",this.activeNewTransformForm.zInput.value="128"):(this.activeNewTransformForm.xInput.value="0",this.activeNewTransformForm.yInput.value="0",this.activeNewTransformForm.zInput.value="0"))}),this.activeNewTransformForm.baseGroupSelect.options.length>0&&this.activeNewTransformForm.baseGroupSelect.dispatchEvent(new Event("change"))),document.getElementById("confirm-add-transform-btn").addEventListener("click",()=>this.handleConfirmAddNewTransform()),document.getElementById("cancel-add-transform-btn").addEventListener("click",()=>this.hideNewTransformForm()),e.style.display="block"}hideNewTransformForm(){const e=document.getElementById("new-transform-form-container");e.style.display="none",e.innerHTML="";const t=this.viewer.getRenderer();t&&(t.clearSpecificVertexHighlights(),t.clearSpecificFaceHighlights()),this.activeNewTransformForm={baseGroupSelect:null,xInput:null,yInput:null,zInput:null,affectedInfoDiv:null}}handleDeleteSelectedTransform(){if(!this.activeTransformEditor||!this.activeTransformEditor.animFrame||this.activeTransformEditor.transformIndex===-1){console.warn("No transform selected for deletion, or editor not active."),alert("No transform is currently selected for deletion.");return}const e=this.activeTransformEditor.animFrame,t=this.activeTransformEditor.transformIndex;if(!confirm(`Are you sure you want to delete Transform ${t+1} (from list) from frame ${e.id}?`))return;if(e.deleteTransform(t))if(this.clearTransformEditor(),this.updateAnimFrameDetailsUI(e),e.id!==void 0)this.displaySingleAnimFrame(e.id);else{console.warn("AnimFrame ID is undefined, cannot refresh 3D model view after deletion. Resetting model.");const i=this.viewer.getRenderer(),r=i.selectedModel;if(r){const o=i.modelMeshes.get(r);if(o){const a=Array.isArray(o)?o:[o];a[0]&&a[0].userData.originalModel&&(a[0].userData.originalModel.resetToOriginal(),i.updateMeshGeometry(),i.updateVertexVisuals(r))}}}else alert(`Failed to delete transform ${t+1}. Check console for errors or data inconsistencies.`)}updateAffectedLabelsInfo(e,t){if(!e||!e.animLabels||!e.animTypes||!this.activeNewTransformForm.affectedInfoDiv||t>=e.animLabels.length||t>=e.animTypes.length)return;const n=e.animLabels[t];let r=`Affects Model ${e.animTypes[t]===5?"Face":"Vertex"} Label(s): `;n&&n.length>0?r+=Array.from(n).join(", "):r+=`None specified for Base Group ${t}.`,this.activeNewTransformForm.affectedInfoDiv.textContent=r}highlightAffectedModelParts(e,t){const n=this.viewer.getRenderer(),i=n.selectedModel;if(!i)return;const r=n.modelMeshes.get(i);if(!r)return;const o=Array.isArray(r)?r:[r];let a=null;for(const h of o)if(h&&h.userData&&h.userData.originalModel){a=h.userData.originalModel;break}if(!a)return;if(!e||!e.animLabels||!e.animTypes||t>=e.animLabels.length||t>=e.animTypes.length){console.warn("Cannot highlight: AnimBase data incomplete or index out of bounds for highlighting."),n.clearSpecificVertexHighlights(),n.clearSpecificFaceHighlights();return}const l=e.animTypes[t],c=e.animLabels[t];if(n.clearSpecificVertexHighlights(),n.clearSpecificFaceHighlights(),!(!c||c.length===0))if(l===5){const h=new Set;if(a.labelFaces)for(let d=0;d<c.length;d++){const f=c[d];if(a.labelFaces[f]){const u=a.labelFaces[f];for(let g=0;g<u.length;g++)h.add(u[g])}}h.size>0&&n.highlightSpecificFaces(Array.from(h))}else{const h=new Set;if(a.labelVertices)for(let d=0;d<c.length;d++){const f=c[d];if(a.labelVertices[f]){const u=a.labelVertices[f];for(let g=0;g<u.length;g++)h.add(u[g])}}h.size>0&&n.highlightSpecificVertices(Array.from(h))}}handleConfirmAddNewTransform(){if(!this.currentSelectedAnimFrameInstance||!this.activeNewTransformForm.baseGroupSelect||!this.activeNewTransformForm.xInput||!this.activeNewTransformForm.yInput||!this.activeNewTransformForm.zInput){console.error("Cannot add Transform: Form or AnimFrame not ready.");return}const e=this.currentSelectedAnimFrameInstance,t=parseInt(this.activeNewTransformForm.baseGroupSelect.value,10),n=parseInt(this.activeNewTransformForm.xInput.value,10),i=parseInt(this.activeNewTransformForm.yInput.value,10),r=parseInt(this.activeNewTransformForm.zInput.value,10);if(isNaN(t)||isNaN(n)||isNaN(i)||isNaN(r)){alert("Invalid input values for the new Transform. Ensure all are numbers.");return}e.addTransform(t,n,i,r),this.hideNewTransformForm(),this.updateAnimFrameDetailsUI(e),e.id!==void 0&&this.displaySingleAnimFrame(e.id)}updateFaceLabelUI(e){const t=document.getElementById("label-list");t.innerHTML="";const n=this.viewer.getRenderer().getModelFaceLabels(e),i=document.getElementById("clear-labels"),r=!!e;if(i&&(i.disabled=!r),!n||n.length===0){t.innerHTML='<div class="label-item no-labels"><span style="color: #888; font-style: italic;">No face labels available</span></div>';return}n.forEach(o=>{var d;const a=document.createElement("div");a.className="label-item";const l=document.createElement("span");l.textContent=`Label ${o.id}`;const c=document.createElement("input");c.type="text",c.value=o.id.toString(),c.className="label-edit-input",c.style.marginLeft="8px",c.style.width="40px",c.disabled=!((d=this.changeFaceLabels)!=null&&d.checked);const h=document.createElement("span");h.className="label-count",h.textContent=`${o.faceCount} faces`,a.appendChild(l),a.appendChild(c),a.appendChild(h),a.addEventListener("click",()=>{document.querySelectorAll("#label-list .label-item").forEach(f=>f.classList.remove("selected","highlighted-face")),a.classList.add("highlighted-face"),this.viewer.getRenderer().highlightFaceLabel(o.id)}),t.appendChild(a)})}updateVertexLabelUI(e){const t=document.getElementById("vertex-label-list");t.innerHTML="";const n=this.viewer.getRenderer().getModelVertexLabels(e);if(!n||n.length===0){t.innerHTML='<div class="label-item no-labels"><span style="color: #888; font-style: italic;">No vertex labels available</span></div>',this.updateVertexLabelUIState();return}this.updateVertexLabelUIState(),n.forEach(i=>{var c;const r=document.createElement("div");r.className="label-item";const o=document.createElement("span");o.textContent=`Label ${i.id}`;const a=document.createElement("input");a.type="text",a.value=i.id.toString(),a.className="label-edit-input",a.style.marginLeft="8px",a.style.width="40px",a.disabled=!((c=this.changeVertexLabels)!=null&&c.checked);const l=document.createElement("span");l.className="label-count",l.textContent=`${i.vertexCount} vertices`,r.appendChild(o),r.appendChild(a),r.appendChild(l),r.addEventListener("click",()=>{if(!this.viewer.getRenderer().editMode){alert("Enable Vertex Editing mode to highlight vertex labels.");return}document.querySelectorAll("#vertex-label-list .label-item").forEach(h=>h.classList.remove("selected","highlighted-vertex")),r.classList.add("highlighted-vertex"),this.viewer.getRenderer().highlightVertexLabel(i.id)}),t.appendChild(r)})}updateVertexLabelUIState(){const e=document.getElementById("clear-vertex-labels"),t=!!this.viewer.getRenderer().selectedModel,n=this.viewer.getRenderer().editMode;e.disabled=!t||!n}setupFaceLabelUI(){const e=document.getElementById("clear-labels");e.addEventListener("click",()=>{e.disabled||(this.viewer.getRenderer().clearFaceHighlights(),document.querySelectorAll("#label-list .label-item").forEach(t=>t.classList.remove("selected","highlighted-face")),document.querySelectorAll("#label-panel .label-control-btn").forEach(t=>t.classList.remove("active")))})}setupVertexLabelUI(){const e=document.getElementById("clear-vertex-labels"),t=document.getElementById("convert-vertex-labels"),n=document.getElementById("model-relabel-input");e.addEventListener("click",()=>{e.disabled||(this.viewer.getRenderer().clearVertexHighlights(),document.querySelectorAll("#vertex-label-list .label-item").forEach(i=>i.classList.remove("selected","highlighted-vertex")))}),t==null||t.addEventListener("click",()=>n.click()),n==null||n.addEventListener("change",async()=>{var o;const i=(o=n.files)==null?void 0:o[0];if(!i)return;const r=await this.showConversionOptionsModal();if(!r){n.value="";return}try{const a=await i.arrayBuffer(),l=new ve(new Uint8Array(a)),c=ui.convertFromData(l);c.createLabelReferences(),r.revisionDir==="377to274"&&(Jt.applyModelRelabel377To274(c),console.log(`Relabeled ${i.name} (377 -> 274)`));const h=c.exportToOb2(),d=new Blob([h],{type:"application/octet-stream"}),f=document.createElement("a");f.href=URL.createObjectURL(d),f.download=i.name,document.body.appendChild(f),f.click(),document.body.removeChild(f),URL.revokeObjectURL(f.href),alert("Model labels converted and downloaded successfully.")}catch(a){console.error("Model conversion failed:",a),alert("Error: "+a.message)}finally{n.value=""}})}}new Mp;
