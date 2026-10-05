const videos=[
 {title:'O MILHO TE CONTA TODA A SUA HISTÓRIA!',cat:'Histórias',emoji:'🌽',duration:'2:00',views:'12,4 mil'},
 {title:'Mamão: o amigo da sua digestão',cat:'Benefícios',emoji:'🍈',duration:'0:10',views:'9,8 mil'},
 {title:'Tomate estressado: pare de guardar assim!',cat:'Curiosidades',emoji:'🍅',duration:'0:10',views:'8,7 mil'},
 {title:'O segredo do alho que quase ninguém conta',cat:'Benefícios',emoji:'🧄',duration:'0:10',views:'7,9 mil'},
 {title:'Cenoura: muito mais que visão',cat:'Benefícios',emoji:'🥕',duration:'0:10',views:'6,4 mil'},
 {title:'A vida secreta do feijão',cat:'Histórias',emoji:'🫘',duration:'1:00',views:'5,9 mil'},
 {title:'Pimentão: sabor e benefícios',cat:'Benefícios',emoji:'🫑',duration:'0:10',views:'5,2 mil'},
 {title:'Batata nervosa e o óleo reutilizado',cat:'Curiosidades',emoji:'🥔',duration:'0:10',views:'4,8 mil'}
];
let categoria='Todos';
function render(list=videos){const grid=document.querySelector('#grid');grid.innerHTML=list.map(v=>`<article class="card" onclick="alert('Player do vídeo: ${v.title.replace(/'/g,"\\'")}\\n\\nNa próxima etapa vamos conectar o armazenamento/streaming real.')"><div class="thumb">${v.emoji}<span class="duration">${v.duration}</span></div><div class="info"><b>${v.title}</b><div class="meta">${v.cat} • ${v.views} visualizações</div></div></article>`).join('');document.querySelector('#count').textContent=`${list.length} vídeos`}
function filtrar(){const q=document.querySelector('#search').value.toLowerCase();let list=videos.filter(v=>(categoria==='Todos'||v.cat===categoria)&&(!q||v.title.toLowerCase().includes(q)||v.cat.toLowerCase().includes(q)));render(list)}
function buscar(){filtrar();document.querySelector('#videos').scrollIntoView({behavior:'smooth'})}
document.querySelectorAll('.chips button').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('.chips button').forEach(x=>x.classList.remove('active'));b.classList.add('active');categoria=b.dataset.cat;filtrar()}));document.querySelector('#search').addEventListener('input',filtrar);document.querySelector('.chips button').classList.add('active');render();document.querySelector('#popular').innerHTML=videos.slice(0,4).map(v=>`<article class="card"><div class="thumb">${v.emoji}<span class="duration">${v.duration}</span></div><div class="info"><b>${v.title}</b><div class="meta">${v.views} visualizações</div></div></article>`).join('');
