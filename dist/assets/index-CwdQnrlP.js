(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();console.log("Welcome to my website!");class h{constructor(){this.canvas=document.getElementById("particles-canvas"),this.ctx=this.canvas.getContext("2d"),this.particles=[],this.init()}init(){this.resize(),this.createParticles(),this.animate(),window.addEventListener("resize",()=>this.resize())}resize(){this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight}createParticles(){const t=Math.floor(this.canvas.width*this.canvas.height/15e3);this.particles=Array.from({length:t},()=>({x:Math.random()*this.canvas.width,y:Math.random()*this.canvas.height,vx:(Math.random()-.5)*.5,vy:(Math.random()-.5)*.5,size:1+Math.random()*2,opacity:Math.random()*.5+.2}))}animate(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.particles.forEach(t=>{t.x+=t.vx,t.y+=t.vy,t.x<0&&(t.x=this.canvas.width),t.x>this.canvas.width&&(t.x=0),t.y<0&&(t.y=this.canvas.height),t.y>this.canvas.height&&(t.y=0),this.ctx.beginPath(),this.ctx.arc(t.x,t.y,t.size,0,Math.PI*2),this.ctx.fillStyle=`rgba(96, 165, 250, ${t.opacity})`,this.ctx.fill()}),this.drawConnections(),requestAnimationFrame(()=>this.animate())}drawConnections(){for(let i=0;i<this.particles.length;i++)for(let s=i+1;s<this.particles.length;s++){const e=this.particles[i].x-this.particles[s].x,o=this.particles[i].y-this.particles[s].y,r=Math.sqrt(e*e+o*o);if(r<150){const c=(150-r)/150*.3;this.ctx.beginPath(),this.ctx.moveTo(this.particles[i].x,this.particles[i].y),this.ctx.lineTo(this.particles[s].x,this.particles[s].y),this.ctx.strokeStyle=`rgba(96, 165, 250, ${c})`,this.ctx.lineWidth=1,this.ctx.stroke()}}}}class u{constructor(t,i){this.element=t,this.text=i,this.index=0,this.init()}init(){this.element.textContent="",this.type()}type(){this.index<this.text.length&&(this.element.textContent+=this.text.charAt(this.index),this.index++,setTimeout(()=>this.type(),100))}}class m{constructor(){this.init()}init(){document.querySelectorAll('a[href^="#"]').forEach(t=>{t.addEventListener("click",i=>{i.preventDefault();const s=document.querySelector(t.getAttribute("href"));s&&s.scrollIntoView({behavior:"smooth",block:"start"})})})}}class f{constructor(){this.init()}init(){this.observeElements(),this.updateNavbar(),this.animateCounters(),this.animateSkillBars()}observeElements(){const t=new IntersectionObserver(i=>{i.forEach(s=>{s.isIntersecting&&s.target.classList.add("visible")})},{threshold:.1});document.querySelectorAll(".fade-in").forEach(i=>{t.observe(i)})}updateNavbar(){window.addEventListener("scroll",()=>{const t=document.querySelector("nav");window.scrollY>100?t.style.background="rgba(15, 23, 42, 0.95)":t.style.background="rgba(15, 23, 42, 0.9)"})}animateCounters(){const t=document.querySelectorAll(".stat-number"),i=new IntersectionObserver(s=>{s.forEach(e=>{e.isIntersecting&&this.animateCounter(e.target)})},{threshold:.5});t.forEach(s=>{i.observe(s)})}animateCounter(t){const i=parseInt(t.dataset.target),e=i/(2e3/16);let o=0;const r=setInterval(()=>{o+=e,t.textContent=Math.floor(o),o>=i&&(t.textContent=i,clearInterval(r))},16)}animateSkillBars(){const t=document.querySelectorAll(".skill-bar"),i=new IntersectionObserver(s=>{s.forEach(e=>{if(e.isIntersecting){const o=e.target.querySelector(".skill-fill"),r=e.target.dataset.skill;setTimeout(()=>{o.style.width=r+"%"},300)}})},{threshold:.5});t.forEach(s=>{i.observe(s)})}}class p{constructor(){this.init()}init(){document.querySelectorAll(".project-card, .skill-category, .contact-item").forEach(i=>{i.addEventListener("mousemove",s=>{const e=i.getBoundingClientRect(),o=s.clientX-e.left,r=s.clientY-e.top,c=e.width/2,a=e.height/2,l=(r-a)/10,d=(c-o)/10;i.style.transform=`perspective(1000px) rotateX(${l}deg) rotateY(${d}deg) translateZ(10px)`}),i.addEventListener("mouseleave",()=>{i.style.transform="perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)"})})}}class y{constructor(){this.init()}init(){document.addEventListener("mousemove",t=>{document.querySelector(".cursor-dot")||this.createCursor();const s=document.querySelector(".cursor-dot"),e=document.querySelector(".cursor-outline");s&&(s.style.left=t.clientX+"px",s.style.top=t.clientY+"px"),e&&(e.style.left=t.clientX+"px",e.style.top=t.clientY+"px")})}createCursor(){const t=document.createElement("div");t.className="cursor-dot",document.body.appendChild(t);const i=document.createElement("div");i.className="cursor-outline",document.body.appendChild(i)}}class g{constructor(){this.init()}init(){const t=document.createElement("div");t.id="loading-screen",t.innerHTML=`
            <div class="loading-content">
                <div class="loading-spinner"></div>
                <h2>Loading Portfolio...</h2>
            </div>
        `,t.style.cssText=`
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10000;
            transition: opacity 0.5s ease;
        `;const i=document.createElement("style");i.textContent=`
            .loading-content {
                text-align: center;
                color: #e2e8f0;
            }
            
            .loading-spinner {
                width: 50px;
                height: 50px;
                border: 3px solid rgba(96, 165, 250, 0.3);
                border-top: 3px solid #60a5fa;
                border-radius: 50%;
                animation: spin 1s linear infinite;
                margin: 0 auto 20px;
            }
            
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
        `,document.head.appendChild(i),document.body.appendChild(t),window.addEventListener("load",()=>{setTimeout(()=>{t.style.opacity="0",setTimeout(()=>{document.body.removeChild(t)},500)},1e3)})}}class v{constructor(){this.init()}init(){const t=document.querySelectorAll("section"),i=document.querySelectorAll("nav a");window.addEventListener("scroll",()=>{let s="";t.forEach(e=>{const o=e.offsetTop;e.clientHeight,window.scrollY>=o-200&&(s=e.getAttribute("id"))}),i.forEach(e=>{e.classList.remove("active"),e.getAttribute("href").substring(1)===s&&e.classList.add("active")})})}}class x{constructor(){this.init()}init(){document.querySelectorAll(".btn").forEach(s=>{s.addEventListener("click",e=>{const o=s.getBoundingClientRect(),r=e.clientX-o.left,c=e.clientY-o.top,a=document.createElement("span");a.style.cssText=`
                    position: absolute;
                    width: 20px;
                    height: 20px;
                    background: rgba(255, 255, 255, 0.6);
                    border-radius: 50%;
                    transform: scale(0);
                    animation: ripple-animation 0.6s linear;
                    left: ${r-10}px;
                    top: ${c-10}px;
                `,s.appendChild(a),setTimeout(()=>{a.remove()},600)})});const i=document.createElement("style");i.textContent=`
            @keyframes ripple-animation {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
            
            .btn {
                position: relative;
                overflow: hidden;
            }
            
            nav a.active {
                color: #60a5fa;
            }
        `,document.head.appendChild(i)}}function b(){const n=document.createElement("div");n.className="scroll-to-top",n.innerHTML="↑",n.style.cssText=`
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        width: 50px;
        height: 50px;
        background: linear-gradient(45deg, #60a5fa, #a855f7);
        border: none;
        border-radius: 50%;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
        opacity: 0;
        visibility: hidden;
        z-index: 1000;
        box-shadow: 0 4px 15px rgba(96, 165, 250, 0.3);
    `,n.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}),n.addEventListener("mouseenter",()=>{n.style.transform="scale(1.1)",n.style.boxShadow="0 6px 20px rgba(96, 165, 250, 0.4)"}),n.addEventListener("mouseleave",()=>{n.style.transform="scale(1)",n.style.boxShadow="0 4px 15px rgba(96, 165, 250, 0.3)"}),document.body.appendChild(n)}document.addEventListener("DOMContentLoaded",()=>{new g;const n=document.querySelector(".typing-text");n&&new u(n,"Amirreza Asgharzadeh"),new h,new m,new f,new p,new y,new v,new x,console.log("3D Portfolio loaded successfully!")});window.addEventListener("scroll",()=>{const n=document.querySelector(".scroll-to-top");n?window.scrollY>500?(n.style.opacity="1",n.style.visibility="visible"):(n.style.opacity="0",n.style.visibility="hidden"):b()});
