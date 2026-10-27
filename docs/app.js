import { projects, modules, architectures } from './data.js?v=3';

const $ = selector => document.querySelector(selector);
const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const visuals = {
  dopzero:'<div class="code-visual"><span class="code-muted">dopzero / caminho pessoal</span><strong>Quests, estudo<br>e progresso.</strong><span class="code-accent">quests · progresso · comunidade</span><span class="code-muted">React + TypeScript + D1</span></div>',
  audit:'<div class="code-visual"><span class="code-muted">auditoria / http</span><strong>Triagem HTTP<br>em Python.</strong><span class="code-accent">HTTP → evidências → relatório</span></div>',
  motion:'<div class="code-visual"><span class="code-muted">composition / timeline</span><strong>Vídeos e<br>apresentações.</strong><span class="code-accent">const frame = timeline.seek(time)</span></div>'
};
function artwork(project){
  if(project.image) return `<img src="${escape(project.image)}" alt="${escape(project.alt)}" width="1100" height="660" loading="lazy">`;
  if(['chameleon','apuracao','aurea'].includes(project.visual)) return `<img src="assets/${project.visual}.svg" alt="${escape(project.title)}: ilustração de apresentação do projeto" width="900" height="540" loading="lazy">`;
  return visuals[project.visual] || '';
}
const featured = ['ounce','chameleon','apuracao','souza','aurea','dopzero'];
const cards = projects.filter(p=>featured.includes(p.id));
$('#project-grid').innerHTML=cards.map(p=>`<article class="project-card" data-categories="${p.categories.join(' ')}"><div class="project-art ${p.id}">${artwork(p)}${!p.image?'<span class="art-type">Ilustração de apresentação</span>':''}</div><div class="card-title-row"><h3>${escape(p.title)}</h3><button class="open-project" data-project="${p.id}" aria-label="Conhecer ${escape(p.title)}">↗</button></div><p>${escape(p.summary)}</p><div class="card-stack">${p.stack.map(t=>`<span>${escape(t)}</span>`).join('')}</div></article>`).join('');
$('#project-archive').innerHTML=projects.filter(p=>!featured.includes(p.id)&&p.id!=='32enterprises').map(p=>`<button class="archive-row" data-project="${p.id}"><strong>${escape(p.title)}</strong><small>${escape(p.kind)} · ${escape(p.stack.slice(0,2).join(' / '))}</small><span aria-hidden="true">↗</span></button>`).join('');

const dialog=$('#project-dialog');let lastTrigger;
function closeProject(){dialog.close();}
function openProject(id, trigger){
  const p=projects.find(item=>item.id===id);if(!p)return;
  lastTrigger=trigger;
  $('#dialog-content').innerHTML=`<div class="dialog-cover">${artwork(p)}</div><div class="dialog-body"><span class="dialog-kind">${escape(p.kind)}</span><h2 id="dialog-title">${escape(p.title)}</h2><span class="project-status">${escape(p.status)}</span><div class="tags">${p.stack.map(t=>`<span>${escape(t)}</span>`).join('')}</div><h3>O desafio</h3><p>${escape(p.challenge)}</p><h3>O que construí</h3><p>${escape(p.built)}</p><h3>Decisões de engenharia</h3><ul>${p.decisions.map(item=>`<li>${escape(item)}</li>`).join('')}</ul><p class="scope-note">${escape(p.scope)}</p>${p.url?`<a class="button dark" href="${escape(p.url)}" target="_blank" rel="noopener noreferrer">Abrir site do projeto <span aria-hidden="true">↗</span></a>`:''}</div>`;
  dialog.showModal();document.body.classList.add('modal-open');$('#dialog-close').focus();
}
document.addEventListener('click',e=>{const button=e.target.closest('[data-project]');if(button)openProject(button.dataset.project,button);});
$('#dialog-close').addEventListener('click',closeProject);
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)closeProject();}});
dialog.addEventListener('close',()=>{document.body.classList.remove('modal-open');lastTrigger?.focus();});

document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{
  const category=button.dataset.filter;
  document.querySelectorAll('[data-filter]').forEach(b=>{const active=b===button;b.classList.toggle('active',active);b.setAttribute('aria-pressed',active);});
  let count=0;document.querySelectorAll('.project-card').forEach(card=>{card.hidden=category!=='all'&&!card.dataset.categories.split(' ').includes(category);if(!card.hidden)count++;});
  $('#filter-status').textContent=`${count} projetos exibidos.`;
}));

const focus={business:{src:'assets/32business.webp',alt:'Interface da reformulação do 32Business Desk, em desenvolvimento',caption:'Business Desk · Reformulação em desenvolvimento'},ounce:{src:'assets/ounce.webp',alt:'Registro da interface de terminal do Ounce AI',caption:'Ounce AI · Registro de desenvolvimento'},chameleon:{src:'assets/chameleon.svg',alt:'Ilustração da interface de diagnóstico do Chameleon',caption:'Chameleon · Ilustração de apresentação'}};
document.querySelectorAll('[data-focus]').forEach(button=>button.addEventListener('click',()=>{const item=focus[button.dataset.focus];$('#focus-image').src=item.src;$('#focus-image').alt=item.alt;$('#focus-caption').textContent=item.caption;document.querySelectorAll('[data-focus]').forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',b===button);});}));

function selectModule(button){const data=modules[button.dataset.module];$('#module-title').textContent=data.title;$('#module-description').textContent=data.description;$('#module-tech').textContent=data.tech;$('#module-panel').setAttribute('aria-labelledby',button.id);document.querySelectorAll('[data-module]').forEach(b=>{b.setAttribute('aria-selected',b===button);b.tabIndex=b===button?0:-1;});}
const moduleButtons=[...document.querySelectorAll('[data-module]')];moduleButtons.forEach((button,index)=>{button.addEventListener('click',()=>selectModule(button));button.addEventListener('keydown',e=>{let next=index;if(e.key==='ArrowRight')next=(index+1)%moduleButtons.length;else if(e.key==='ArrowLeft')next=(index-1+moduleButtons.length)%moduleButtons.length;else if(e.key==='Home')next=0;else if(e.key==='End')next=moduleButtons.length-1;else return;e.preventDefault();moduleButtons[next].focus();selectModule(moduleButtons[next]);});});

let activeArchitecture='apuracao';
function selectNode(index){const node=architectures[activeArchitecture].nodes[index];$('#architecture-step').textContent=node[0];$('#architecture-description').textContent=node[2];document.querySelectorAll('.architecture-node').forEach((b,i)=>b.setAttribute('aria-pressed',i===index));}
function showArchitecture(id){activeArchitecture=id;const icons=['< >','{ }','▤','↗'];$('#architecture-canvas').innerHTML=architectures[id].nodes.map((node,index)=>`<button class="architecture-node" data-node="${index}" aria-pressed="${index===0}"><span class="node-icon" aria-hidden="true">${escape(icons[index])}</span><strong>${escape(node[0])}</strong><small>${escape(node[1])}</small></button>`).join('');$('#architecture-canvas').querySelectorAll('button').forEach(b=>b.addEventListener('click',()=>selectNode(Number(b.dataset.node))));selectNode(0);}
document.querySelectorAll('[data-architecture]').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('[data-architecture]').forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',b===button);});showArchitecture(button.dataset.architecture);}));showArchitecture('apuracao');
$('#year').textContent=new Date().getFullYear();
