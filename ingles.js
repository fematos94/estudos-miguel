const I=[
['Frutas','Sweet fruits (frutas doces)','Qual é o significado (tradução) de “Persimmon” em português?',['Figo','Caqui','Mamão'],1,'Persimmon = caqui.','persimmon'],
['Frutas','Sweet fruits (frutas doces)','Qual é o significado (tradução) de “Fig” em português?',['Caqui','Mamão','Figo'],2,'Fig = figo.','fig'],
['Frutas','Sweet fruits (frutas doces)','Qual é o significado (tradução) de “Papaya” em português?',['Mamão','Figo','Caqui'],0,'Papaya = mamão.','papaya'],
['Frutas','Semi acidic fruits (frutas semiácidas)','Qual é o significado (tradução) de “Guava” em português?',['Kiwi','Goiaba','Ameixa'],1,'Guava = goiaba.','guava'],
['Frutas','Semi acidic fruits (frutas semiácidas)','Qual é o significado (tradução) de “Plum” em português?',['Goiaba','Kiwi','Ameixa'],2,'Plum = ameixa.','plum'],
['Frutas','Semi acidic fruits (frutas semiácidas)','Qual é o significado (tradução) de “Kiwi” em português?',['Kiwi','Romã','Amora'],0,'Kiwi = kiwi.','kiwi'],
['Frutas','Acidic fruits (frutas ácidas)','Qual é o significado (tradução) de “Pomegranate” em português?',['Framboesa','Romã','Amora'],1,'Pomegranate = romã.','pomegranate'],
['Frutas','Acidic fruits (frutas ácidas)','Qual é o significado (tradução) de “Raspberry” em português?',['Romã','Amora','Framboesa'],2,'Raspberry = framboesa.','raspberry'],
['Frutas','Acidic fruits (frutas ácidas)','Qual é o significado (tradução) de “Blackberry” em português?',['Amora','Framboesa','Romã'],0,'Blackberry = amora.','blackberry'],
['Vegetais','Are leaves (são folhas)','Qual é o significado (tradução) de “Lettuce” em português?',['Rúcula','Alface','Cenoura'],1,'Lettuce = alface.','lettuce'],
['Vegetais','Are leaves (são folhas)','Qual é o significado (tradução) de “Arugula” em português?',['Alface','Cenoura','Rúcula'],2,'Arugula = rúcula.','arugula'],
['Vegetais','Rich in vitamin A (ricos em vitamina A)','Qual é o significado (tradução) de “Carrot” em português?',['Cenoura','Pepino','Batata'],0,'Carrot = cenoura.','carrot'],
['Vegetais','Rich in vitamin A (ricos em vitamina A)','Qual é o significado (tradução) de “Cucumber” em português?',['Abobrinha','Pepino','Cenoura'],1,'Cucumber = pepino.','cucumber'],
['Vegetais','Rich in fibers (ricos em fibras)','Qual é o significado (tradução) de “Zucchini” em português?',['Berinjela','Pepino','Abobrinha'],2,'Zucchini = abobrinha.','zucchini'],
['Vegetais','Rich in fibers (ricos em fibras)','Qual é o significado (tradução) de “Eggplant” em português?',['Berinjela','Beterraba','Cebola'],0,'Eggplant = berinjela.','eggplant'],
['Vegetais','Can be eaten raw (podem ser consumidos crus)','Qual é o significado (tradução) de “Onion” em português?',['Beterraba','Cebola','Batata'],1,'Onion = cebola.','onion'],
['Vegetais','Can be eaten raw (podem ser consumidos crus)','Qual é o significado (tradução) de “Beet” em português?',['Cebola','Batata','Beterraba'],2,'Beet = beterraba.','beet'],
['Vegetais','Rich in vitamin C (ricos em vitamina C)','Qual é o significado (tradução) de “Potato” em português?',['Batata','Brócolis','Pimenta'],0,'Potato = batata.','potato'],
['Vegetais','Rich in vitamin C (ricos em vitamina C)','Observe a imagem. Qual palavra em inglês corresponde a “pimenta”?',['Broccoli','Pepper','Potato'],1,'Pepper = pimenta.','pepper'],
['Vegetais','Rich in vitamin C (ricos em vitamina C)','Qual é o significado (tradução) de “Broccoli” em português?',['Pimenta','Batata','Brócolis'],2,'Broccoli = brócolis.','broccoli'],
['Números','Numbers (números)','Como escrevemos o número 1 em inglês?',['One','Two','Three'],0,'1 = One.','num1'],
['Números','Numbers (números)','Como escrevemos o número 2 em inglês?',['Three','Two','Four'],1,'2 = Two.','num2'],
['Números','Numbers (números)','Como escrevemos o número 3 em inglês?',['Two','Four','Three'],2,'3 = Three.','num3'],
['Números','Numbers (números)','Como escrevemos o número 4 em inglês?',['Four','Five','Six'],0,'4 = Four.','num4'],
['Números','Numbers (números)','Como escrevemos o número 5 em inglês?',['Six','Five','Seven'],1,'5 = Five.','num5'],
['Números','Numbers (números)','Como escrevemos o número 6 em inglês?',['Five','Seven','Six'],2,'6 = Six.','num6'],
['Números','Numbers (números)','Como escrevemos o número 7 em inglês?',['Seven','Eight','Nine'],0,'7 = Seven.','num7'],
['Números','Numbers (números)','Como escrevemos o número 8 em inglês?',['Nine','Eight','Ten'],1,'8 = Eight.','num8'],
['Números','Numbers (números)','Como escrevemos o número 9 em inglês?',['Eight','Ten','Nine'],2,'9 = Nine.','num9'],
['Números','Numbers (números)','Como escrevemos o número 10 em inglês?',['Ten','Nine','Eight'],0,'10 = Ten.','num10'],
['Cores','Colors (cores)','Observe a cor. Qual é o nome dela em inglês?',['Yellow','Orange','Brown'],1,'Laranja = Orange.','orange'],
['Cores','Colors (cores)','Observe a cor. Qual é o nome dela em inglês?',['Green','Red','Purple'],2,'Roxo = Purple.','purple'],
['Cores','Colors (cores)','Observe a cor. Qual é o nome dela em inglês?',['Green','Brown','Yellow'],0,'Verde = Green.','green'],
['Cores','Colors (cores)','Observe a cor. Qual é o nome dela em inglês?',['Red','Brown','Purple'],1,'Marrom = Brown.','brown'],
['Cores','Colors (cores)','Observe a cor. Qual é o nome dela em inglês?',['Yellow','Orange','Red'],2,'Vermelho = Red.','red'],
['Cores','Colors (cores)','Observe a cor. Qual é o nome dela em inglês?',['Yellow','Green','Orange'],0,'Amarelo = Yellow.','yellow'],
['Revisão','Revisão com imagem','Observe a imagem. Que fruta é essa em inglês?',['Guava','Papaya','Fig'],1,'Mamão = Papaya.','papaya'],
['Revisão','Revisão com imagem','Observe a imagem. Que vegetal é esse em inglês?',['Broccoli','Cucumber','Carrot'],2,'Cenoura = Carrot.','carrot'],
['Revisão','Revisão com imagem','Observe a imagem. Que fruta é essa em inglês?',['Pomegranate','Blackberry','Kiwi'],0,'Romã = Pomegranate.','pomegranate'],
['Revisão','Revisão com imagem','Observe a imagem. Que vegetal é esse em inglês?',['Beet','Onion','Eggplant'],1,'Cebola = Onion.','onion']
];

const svgWrap=(inner)=>`<svg viewBox="0 0 220 160" role="img" aria-hidden="true" style="width:min(220px,90%);height:auto">${inner}</svg>`;
function visualIng(k){
  const exact={
    kiwi:'<div style="font-size:88px">🥝</div>',carrot:'<div style="font-size:88px">🥕</div>',cucumber:'<div style="font-size:88px">🥒</div>',eggplant:'<div style="font-size:88px">🍆</div>',onion:'<div style="font-size:88px">🧅</div>',potato:'<div style="font-size:88px">🥔</div>',broccoli:'<div style="font-size:88px">🥦</div>'
  };
  if(exact[k]) return `<div class="port-visual">${exact[k]}</div>`;
  if(k.startsWith('num')){const n=Number(k.slice(3));return `<div class="port-visual" style="font-size:28px;line-height:1.7;max-width:220px">${'⭐'.repeat(n)}</div>`}
  const colors={orange:'#f39a24',purple:'#7c4db5',green:'#43a047',brown:'#795548',red:'#d63f3f',yellow:'#f2c94c'};
  if(colors[k]) return `<div class="port-visual"><div style="width:120px;height:120px;border-radius:50%;background:${colors[k]};border:5px solid #fff;box-shadow:0 4px 14px #0002,0 0 0 2px #dfe5ec"></div></div>`;
  const art={
    persimmon:svgWrap('<ellipse cx="110" cy="92" rx="54" ry="42" fill="#f28c28"/><path d="M78 57 Q110 38 142 57 L128 67 L110 59 L92 67 Z" fill="#4f8a3d"/>'),
    fig:svgWrap('<path d="M110 26 C92 53 63 69 66 105 C69 136 94 146 110 146 C126 146 151 136 154 105 C157 69 128 53 110 26Z" fill="#7d4a8e"/><ellipse cx="110" cy="98" rx="27" ry="33" fill="#d84b62"/>'),
    papaya:svgWrap('<ellipse cx="110" cy="88" rx="68" ry="43" fill="#f4a340"/><ellipse cx="110" cy="88" rx="31" ry="18" fill="#ed8b2d"/><g fill="#242424"><circle cx="90" cy="83" r="4"/><circle cx="103" cy="92" r="4"/><circle cx="116" cy="82" r="4"/><circle cx="128" cy="94" r="4"/></g>'),
    guava:svgWrap('<ellipse cx="95" cy="91" rx="48" ry="39" fill="#79ad4c"/><ellipse cx="145" cy="96" rx="38" ry="31" fill="#f2a4a7" stroke="#79ad4c" stroke-width="10"/>'),
    plum:svgWrap('<circle cx="110" cy="92" r="50" fill="#70408f"/><path d="M108 42 Q111 25 124 19" stroke="#5c7338" stroke-width="7" fill="none"/>'),
    pomegranate:svgWrap('<path d="M110 46 C75 45 57 72 61 106 C65 137 89 145 110 145 C131 145 155 137 159 106 C163 72 145 45 110 46Z" fill="#c94646"/><path d="M91 48 L98 25 L110 38 L122 25 L130 48" fill="#c94646"/><g fill="#f4bb5c"><circle cx="91" cy="96" r="5"/><circle cx="111" cy="109" r="5"/><circle cx="129" cy="91" r="5"/></g>'),
    raspberry:svgWrap('<g fill="#d64d63"><circle cx="92" cy="73" r="18"/><circle cx="116" cy="68" r="18"/><circle cx="136" cy="84" r="18"/><circle cx="78" cy="94" r="18"/><circle cx="103" cy="95" r="18"/><circle cx="127" cy="105" r="18"/><circle cx="94" cy="119" r="18"/></g>'),
    blackberry:svgWrap('<g fill="#30243f"><circle cx="92" cy="73" r="18"/><circle cx="116" cy="68" r="18"/><circle cx="136" cy="84" r="18"/><circle cx="78" cy="94" r="18"/><circle cx="103" cy="95" r="18"/><circle cx="127" cy="105" r="18"/><circle cx="94" cy="119" r="18"/></g>'),
    lettuce:svgWrap('<g fill="#68b95b"><circle cx="89" cy="80" r="31"/><circle cx="121" cy="69" r="33"/><circle cx="142" cy="98" r="32"/><circle cx="104" cy="111" r="35"/><circle cx="75" cy="105" r="29"/></g>'),
    arugula:svgWrap('<g fill="#4e9a50"><ellipse cx="85" cy="70" rx="20" ry="33" transform="rotate(-28 85 70)"/><ellipse cx="120" cy="64" rx="20" ry="35" transform="rotate(12 120 64)"/><ellipse cx="144" cy="88" rx="18" ry="31" transform="rotate(32 144 88)"/><ellipse cx="95" cy="105" rx="18" ry="30" transform="rotate(-6 95 105)"/></g>'),
    zucchini:svgWrap('<rect x="51" y="65" width="119" height="45" rx="22" fill="#6f9f4e" transform="rotate(-8 110 88)"/><path d="M157 61 L183 50 L178 71Z" fill="#6ca55e"/>'),
    beet:svgWrap('<circle cx="110" cy="92" r="44" fill="#a23b72"/><path d="M98 53 Q82 28 70 22 M111 51 Q113 23 122 16 M125 55 Q146 30 158 28" stroke="#4b9a51" stroke-width="10" fill="none"/>'),
    pepper:svgWrap('<g fill="#d8342f"><path d="M72 47 Q101 53 111 126 Q92 133 82 106 Q72 80 72 47Z"/><path d="M108 38 Q137 43 148 119 Q129 126 119 95 Q108 69 108 38Z"/><path d="M132 60 Q157 66 164 125 Q147 130 140 105 Q133 83 132 60Z"/></g><g stroke="#47843f" stroke-width="6"><path d="M72 48 Q67 31 61 25"/><path d="M108 39 Q106 25 101 17"/></g>')
  };
  return `<div class="port-visual">${art[k]||'<div style="font-size:64px">🥗</div>'}</div>`
}
function montarIng(){const g=document.getElementById('gridIng');g.innerHTML='';I.forEach((q,i)=>{const c=document.createElement('div');c.className='qcard';c.dataset.grupo=q[0];c.innerHTML=`<div class="qhead"><h3>${i+1}. ${q[1]}</h3><div class="tags"><span class="tag">${q[0]}</span></div></div><div class="visual"><div class="canvas">${visualIng(q[6])}</div></div><div class="body"><p class="question">${q[2]}</p>${q[3].map((x,j)=>`<label class="option"><input type="radio" name="i${i}" value="${j}"> ${String.fromCharCode(65+j)}) ${x}</label>`).join('')}<div class="feedback"></div></div>`;g.appendChild(c)})}
function filtrarIng(g,b){document.querySelectorAll('.filter').forEach(x=>x.classList.remove('active'));b.classList.add('active');document.querySelectorAll('#gridIng .qcard').forEach(c=>c.style.display=g==='Todos'||c.dataset.grupo===g?'':'none')}
function corrigirIng(){let ac=0,rp=0;document.querySelectorAll('#gridIng .qcard').forEach((c,i)=>{c.querySelectorAll('.option').forEach(x=>x.classList.remove('correct','wrong'));const q=I[i],m=c.querySelector('input:checked'),f=c.querySelector('.feedback');if(!m){f.style.display='block';f.innerHTML='⚠️ <strong>Não respondida.</strong>';return}rp++;if(+m.value===q[4]){ac++;m.closest('.option').classList.add('correct');f.innerHTML='✅ <strong>Correto!</strong> '+q[5]}else{m.closest('.option').classList.add('wrong');c.querySelectorAll('.option')[q[4]].classList.add('correct');f.innerHTML='❌ <strong>Revise:</strong> '+q[5]}f.style.display='block'});const r=document.getElementById('resultIng');r.innerHTML=`Respondidas: <strong>${rp}/${I.length}</strong><br>Acertos: <strong>${ac}/${I.length}</strong><br>${ac>=36?'🌟 Excelente!':ac>=30?'👏 Muito bem!':ac>=22?'🙂 Bom trabalho! Revise os erros.':'💪 Continue estudando e tente novamente!'}`;r.style.display='block';r.scrollIntoView({behavior:'smooth',block:'center'})}
function refazerIng(){document.querySelectorAll('#quizIng input[type=radio]').forEach(x=>x.checked=false);document.querySelectorAll('#gridIng .option').forEach(x=>x.classList.remove('correct','wrong'));document.querySelectorAll('#gridIng .feedback').forEach(x=>{x.style.display='none';x.innerHTML=''});document.getElementById('resultIng').style.display='none'}
montarIng();