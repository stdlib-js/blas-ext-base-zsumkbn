"use strict";var k=function(v,r){return function(){try{return r||v((r={exports:{}}).exports,r),r.exports}catch(t){throw r=0,t}}};var d=k(function(P,w){"use strict";var h=require("@stdlib/strided-base-reinterpret-complex128"),y=require("@stdlib/complex-float64-ctor"),b=require("@stdlib/math-base-special-abs");function A(v,r,t,z){var s,n,o,e,i,a,m,c,l,p,u,f,q;if(v<=0)return new y(0,0);if(r=h(r,0),e=z*2,t===0)return new y(v*r[e],v*r[e+1]);if(o=t*2,i=r[e],a=r[e+1],s=i,n=a,i===0||a===0)for(f=-1,q=-1,u=0;u<v&&(f<0&&(i=r[e],i===0?s+=i:f=u),q<0&&(a=r[e+1],a===0?n+=a:q=u),!(f>=0&&q>=0));u++)e+=o;else f=0,q=0;for(e=z*2+o,l=0,p=0,u=1;u<v;u++)u>=f&&(i=r[e],m=s+i,b(s)>=b(i)?l+=s-m+i:l+=i-m+s,s=m),u>=q&&(a=r[e+1],c=n+a,b(n)>=b(a)?p+=n-c+a:p+=a-c+n,n=c),e+=o;return f>=0&&(s+=l),q>=0&&(n+=p),new y(s,n)}w.exports=A});var _=k(function(Q,R){"use strict";var B=require("@stdlib/strided-base-stride2offset"),D=d();function F(v,r,t){return D(v,r,t,B(v,t))}R.exports=F});var O=k(function(S,E){"use strict";var G=require("@stdlib/utils-define-nonenumerable-read-only-property"),C=_(),H=d();G(C,"ndarray",H);E.exports=C});var I=require("path").join,J=require("@stdlib/utils-try-require"),K=require("@stdlib/assert-is-error"),L=O(),j,g=J(I(__dirname,"./native.js"));K(g)?j=L:j=g;module.exports=j;
/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
