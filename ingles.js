const I=[
['Frutas','Sweet fruits','What does “Persimmon” mean?',['Caqui','Figo','Mamão'],0,'Persimmon = caqui.','persimmon'],
['Frutas','Sweet fruits','What does “Fig” mean?',['Mamão','Figo','Caqui'],1,'Fig = figo.','fig'],
['Frutas','Sweet fruits','What does “Papaya” mean?',['Mamão','Amora','Ameixa'],0,'Papaya = mamão.','papaya'],
['Frutas','Semi acidic fruits','What does “Guava” mean?',['Goiaba','Romã','Framboesa'],0,'Guava = goiaba.','guava'],
['Frutas','Semi acidic fruits','What does “Plum” mean?',['Kiwi','Ameixa','Figo'],1,'Plum = ameixa.','plum'],
['Frutas','Semi acidic fruits','Which word means “kiwi”?',['Kiwi','Fig','Guava'],0,'Kiwi = kiwi.','kiwi'],
['Frutas','Acidic fruits','What does “Pomegranate” mean?',['Romã','Amora','Mamão'],0,'Pomegranate = romã.','pomegranate'],
['Frutas','Acidic fruits','What does “Raspberry” mean?',['Framboesa','Goiaba','Ameixa'],0,'Raspberry = framboesa.','raspberry'],
['Frutas','Acidic fruits','What does “Blackberry” mean?',['Amora','Caqui','Figo'],0,'Blackberry = amora.','blackberry'],
['Vegetais','Leaves','Which word means “alface”?',['Lettuce','Arugula','Carrot'],0,'Lettuce = alface.','lettuce'],
['Vegetais','Leaves','What does “Arugula” mean?',['Rúcula','Cebola','Pepino'],0,'Arugula = rúcula.','arugula'],
['Vegetais','Vitamin A','What does “Carrot” mean?',['Cenoura','Beterraba','Batata'],0,'Carrot = cenoura.','carrot'],
['Vegetais','Vitamin A','What does “Cucumber” mean?',['Pepino','Abobrinha','Pimentão'],0,'Cucumber = pepino.','cucumber'],
['Vegetais','Fibers','Which word means “abobrinha”?',['Zucchini','Eggplant','Broccoli'],0,'Zucchini = abobrinha.','zucchini'],
['Vegetais','Fibers','What does “Eggplant” mean?',['Berinjela','Beterraba','Cebola'],0,'Eggplant = berinjela.','eggplant'],
['Vegetais','Raw','What does “Onion” mean?',['Cebola','Pepino','Alface'],0,'Onion = cebola.','onion'],
['Vegetais','Raw','Which word means “beterraba”?',['Beet','Pepper','Potato'],0,'Beet = beterraba.','beet'],
['Vegetais','Vitamin C','What does “Potato” mean?',['Batata','Pimentão','Brócolis'],0,'Potato = batata.','potato'],
['Vegetais','Vitamin C','What does “Pepper” mean in this study sheet?',['Pimentão','Pimenta-do-reino','Pepino'],0,'Na folha, Pepper = pimentão.','pepper'],
['Vegetais','Vitamin C','What does “Broccoli” mean?',['Brócolis','Rúcula','Cenoura'],0,'Broccoli = brócolis.','broccoli'],
['Números','Numbers','How do we write 1 in English?',['One','Two','Ten'],0,'1 = One.','num1'],
['Números','Numbers','How do we write 3 in English?',['Five','Three','Eight'],1,'3 = Three.','num3'],
['Números','Numbers','Which number is “Six”?',['4','6','9'],1,'Six = 6.','num6'],
['Números','Numbers','Which number is “Eight”?',['8','7','10'],0,'Eight = 8.','num8'],
['Números','Numbers','How do we write 10 in English?',['Ten','Nine','Two'],0,'10 = Ten.','num10'],
['Cores','Colors','What color is “Orange”?',['Laranja','Roxo','Marrom'],0,'Orange = laranja.','orange'],
['Cores','Colors','What color is “Purple”?',['Vermelho','Roxo','Verde'],1,'Purple = roxo.','purple'],
['Cores','Colors','What color is “Green”?',['Verde','Amarelo','Marrom'],0,'Green = verde.','green'],
['Cores','Colors','What color is “Brown”?',['Marrom','Vermelho','Laranja'],0,'Brown = marrom.','brown'],
['Cores','Colors','Which pair is correct?',['Red = vermelho','Yellow = roxo','Green = amarelo'],0,'Red = vermelho.','red']
];

const svgWrap=(inner)=>`<svg viewBox="0 0 220 160" role="img" aria-hidden="true" style="width:min(220px,90%);height:auto">${inner}</svg>`;
function visualIng(k){
  const exact={
    kiwi:'<div style="font-size:88px">🥝</div>',carrot:'<div style="font-size:88px">🥕</div>',cucumber:'<div style="font-size:88px">🥒</div>',eggplant:'<div style="font-size:88px">🍆</div>',onion:'<div style="font-size:88px">🧅</div>',potato:'<div style="font-size:88px">🥔</div>',broccoli:'<div style="font-size:88px">🥦</div>'
  };
  if(exact[k]) return `<div class="port-visual">${exact[k]}</div>`;
  if(k.startsWith('num')){const n=Number(k.slice(3));return `<div class="port-visual" style="font-size:34px;line-height:1.7">${'⭐'.repeat(n)}</div>`}
  const colors={orange:'#f39a24',purple:'#7c4db5',green:'#43a047',brown:'#795548',red:'#d63f3f'};
  if(colors[k]) return `<div class="port-visual"><div style="width:120px;height:120px;border-radius:50%;background:${colors[k]};border:5px solid #fff;box-shadow:0 4px 14px #0002,0 0 0 2px #dfe5ec"></div></div>`;
  const art={
    persimmon:svgWrap('<ellipse cx="110" cy="92" rx="54" ry="42" fill="#f28c28"/><path d="M78 57 Q110 38 142 57 L128 67 L110 59 L92 67 Z" fill="#4f8a3d"/><path d="M110 52 Q112 37 124 30" stroke="#5d713b" stroke-width="7" fill="none" stroke-linecap="round"/>'),
    fig:svgWrap('<path d="M110 26 C92 53 63 69 66 105 C69 136 94 146 110 146 C126 146 151 136 154 105 C157 69 128 53 110 26Z" fill="#7d4a8e"/><path d="M110 35 C101 59 82 77 84 105 C86 125 98 135 110 135" fill="#bf6c98" opacity=".55"/><circle cx="108" cy="100" r="4" fill="#f2c66b"/><circle cx="123" cy="91" r="3" fill="#f2c66b"/><circle cx="94" cy="91" r="3" fill="#f2c66b"/><path d="M106 27 Q112 16 120 20" stroke="#54824a" stroke-width="6" fill="none"/>'),
    papaya:svgWrap('<ellipse cx="110" cy="88" rx="68" ry="43" fill="#f4a340"/><ellipse cx="110" cy="88" rx="47" ry="28" fill="#ffd66e"/><ellipse cx="110" cy="88" rx="31" ry="18" fill="#ed8b2d"/><g fill="#242424"><circle cx="90" cy="83" r="4"/><circle cx="103" cy="92" r="4"/><circle cx="116" cy="82" r="4"/><circle cx="128" cy="94" r="4"/><circle cx="112" cy="102" r="4"/></g>'),
    guava:svgWrap('<ellipse cx="105" cy="93" rx="58" ry="42" fill="#79ad4c"/><path d="M98 51 Q102 35 117 29" stroke="#5f7f3c" stroke-width="7" fill="none"/><ellipse cx="144" cy="97" rx="38" ry="31" fill="#f2a4a7" stroke="#79ad4c" stroke-width="10"/><g fill="#f7e7bf"><circle cx="134" cy="91" r="3"/><circle cx="148" cy="104" r="3"/><circle cx="157" cy="91" r="3"/></g>'),
    plum:svgWrap('<circle cx="110" cy="92" r="50" fill="#70408f"/><path d="M108 42 Q111 25 124 19" stroke="#5c7338" stroke-width="7" fill="none"/><path d="M126 28 Q151 21 160 39 Q141 45 126 28Z" fill="#6d9d43"/><path d="M91 58 Q76 77 82 104" stroke="#a77ab8" stroke-width="8" fill="none" opacity=".5"/>'),
    pomegranate:svgWrap('<path d="M110 46 C75 45 57 72 61 106 C65 137 89 145 110 145 C131 145 155 137 159 106 C163 72 145 45 110 46Z" fill="#c94646"/><path d="M91 48 L98 25 L110 38 L122 25 L130 48" fill="#c94646"/><circle cx="91" cy="96" r="5" fill="#f4bb5c" opacity=".8"/><circle cx="111" cy="109" r="5" fill="#f4bb5c" opacity=".8"/>'),
    raspberry:svgWrap('<g fill="#d64d63"><circle cx="92" cy="73" r="18"/><circle cx="116" cy="68" r="18"/><circle cx="136" cy="84" r="18"/><circle cx="78" cy="94" r="18"/><circle cx="103" cy="95" r="18"/><circle cx="127" cy="105" r="18"/><circle cx="94" cy="119" r="18"/></g><path d="M103 48 Q107 32 120 27" stroke="#4d813b" stroke-width="7" fill="none"/>'),
    blackberry:svgWrap('<g fill="#3f3159"><circle cx="92" cy="73" r="18"/><circle cx="116" cy="68" r="18"/><circle cx="136" cy="84" r="18"/><circle cx="78" cy="94" r="18"/><circle cx="103" cy="95" r="18"/><circle cx="127" cy="105" r="18"/><circle cx="94" cy="119" r="18"/></g><path d="M103 48 Q107 32 120 27" stroke="#4d813b" stroke-width="7" fill="none"/>'),
    lettuce:svgWrap('<g fill="#68b95b"><circle cx="89" cy="80" r="31"/><circle cx="121" cy="69" r="33"/><circle cx="142" cy="98" r="32"/><circle cx="104" cy="111" r="35"/><circle cx="75" cy="105" r="29"/></g><path d="M110 66 L110 130 M82 93 Q105 101 110 122 M139 89 Q118 102 110 122" stroke="#d8f0b8" stroke-width="5" fill="none"/>'),
    arugula:svgWrap('<g fill="#4e9a50"><ellipse cx="85" cy="70" rx="20" ry="33" transform="rotate(-28 85 70)"/><ellipse cx="120" cy="64" rx="20" ry="35" transform="rotate(12 120 64)"/><ellipse cx="144" cy="88" rx="18" ry="31" transform="rotate(32 144 88)"/><ellipse cx="95" cy="105" rx="18" ry="30" transform="rotate(-6 95 105)"/></g><g stroke="#7bbf68" stroke-width="4"><path d="M85 72 L108 137"/><path d="M120 66 L111 137"/><path d="M144 90 L114 137"/></g>'),
    zucchini:svgWrap('<rect x="51" y="65" width="119" height="45" rx="22" fill="#438c4b" transform="rotate(-8 110 88)"/><path d="M157 61 L183 50 L178 71Z" fill="#6ca55e"/>'),
    beet:svgWrap('<circle cx="110" cy="92" r="44" fill="#a23b72"/><path d="M98 53 Q82 28 70 22 M111 51 Q113 23 122 16 M125 55 Q146 30 158 28" stroke="#4b9a51" stroke-width="10" fill="none" stroke-linecap="round"/><path d="M110 136 Q104 151 92 155" stroke="#9b5373" stroke-width="5" fill="none"/>'),
    pepper:svgWrap('<path d="M78 62 C82 43 98 39 110 49 C122 39 139 43 143 62 C159 71 160 104 146 124 C134 141 89 141 76 124 C61 104 62 72 78 62Z" fill="#d94e3f"/><path d="M108 48 Q110 29 123 25" stroke="#4a883f" stroke-width="8" fill="none" stroke-linecap="round"/>')
  };
  return `<div class="port-visual">${art[k]||''}</div>`
}
function montarIng(){const g=document.getElementById('gridIng');g.innerHTML='';I.forEach((q,i)=>{const c=document.createElement('div');c.className='qcard';c.dataset.grupo=q[0];c.innerHTML=`<div class="qhead"><h3>${i+1}. ${q[1]}</h3><div class="tags"><span class="tag">${q[0]}</span></div></div><div class="visual"><div class="canvas">${visualIng(q[6])}</div></div><div class="body"><p class="question">${q[2]}</p>${q[3].map((x,j)=>`<label class="option"><input type="radio" name="i${i}" value="${j}"> ${String.fromCharCode(65+j)}) ${x}</label>`).join('')}<div class="feedback"></div></div>`;g.appendChild(c)})}
function filtrarIng(g,b){document.querySelectorAll('.filter').forEach(x=>x.classList.remove('active'));b.classList.add('active');document.querySelectorAll('#gridIng .qcard').forEach(c=>c.style.display=g==='Todos'||c.dataset.grupo===g?'':'none')}
function corrigirIng(){let ac=0,rp=0;document.querySelectorAll('#gridIng .qcard').forEach((c,i)=>{c.querySelectorAll('.option').forEach(x=>x.classList.remove('correct','wrong'));const q=I[i],m=c.querySelector('input:checked'),f=c.querySelector('.feedback');if(!m){f.style.display='block';f.innerHTML='⚠️ <strong>Não respondida.</strong>';return}rp++;if(+m.value===q[4]){ac++;m.closest('.option').classList.add('correct');f.innerHTML='✅ <strong>Correct!</strong> '+q[5]}else{m.closest('.option').classList.add('wrong');c.querySelectorAll('.option')[q[4]].classList.add('correct');f.innerHTML='❌ <strong>Review:</strong> '+q[5]}f.style.display='block'});const r=document.getElementById('resultIng');r.innerHTML=`Respondidas: <strong>${rp}/${I.length}</strong><br>Acertos: <strong>${ac}/${I.length}</strong><br>${ac>=27?'🌟 Excellent!':ac>=22?'👏 Very good!':ac>=16?'🙂 Good job! Revise os erros.':'💪 Keep studying and try again!'}`;r.style.display='block';r.scrollIntoView({behavior:'smooth',block:'center'})}
function refazerIng(){document.querySelectorAll('#quizIng input[type=radio]').forEach(x=>x.checked=false);document.querySelectorAll('#gridIng .option').forEach(x=>x.classList.remove('correct','wrong'));document.querySelectorAll('#gridIng .feedback').forEach(x=>{x.style.display='none';x.innerHTML=''});document.getElementById('resultIng').style.display='none'}
montarIng();