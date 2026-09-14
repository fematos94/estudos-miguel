const I=[
['Frutas','Sweet fruits','What does “Persimmon” mean?',['Caqui','Figo','Mamão'],0,'Persimmon = caqui.','🍈'],
['Frutas','Sweet fruits','What does “Fig” mean?',['Mamão','Figo','Caqui'],1,'Fig = figo.','🍐'],
['Frutas','Sweet fruits','What does “Papaya” mean?',['Mamão','Amora','Ameixa'],0,'Papaya = mamão.','🍊'],
['Frutas','Semi acidic fruits','What does “Guava” mean?',['Goiaba','Romã','Framboesa'],0,'Guava = goiaba.','🍐'],
['Frutas','Semi acidic fruits','What does “Plum” mean?',['Kiwi','Ameixa','Figo'],1,'Plum = ameixa.','🟣'],
['Frutas','Semi acidic fruits','Which word means “kiwi”?',['Kiwi','Fig','Guava'],0,'Kiwi = kiwi.','🥝'],
['Frutas','Acidic fruits','What does “Pomegranate” mean?',['Romã','Amora','Mamão'],0,'Pomegranate = romã.','🔴'],
['Frutas','Acidic fruits','What does “Raspberry” mean?',['Framboesa','Goiaba','Ameixa'],0,'Raspberry = framboesa.','🍓'],
['Frutas','Acidic fruits','What does “Blackberry” mean?',['Amora','Caqui','Figo'],0,'Blackberry = amora.','🫐'],
['Vegetais','Leaves','Which word means “alface”?',['Lettuce','Arugula','Carrot'],0,'Lettuce = alface.','🥬'],
['Vegetais','Leaves','What does “Arugula” mean?',['Rúcula','Cebola','Pepino'],0,'Arugula = rúcula.','🌿'],
['Vegetais','Vitamin A','What does “Carrot” mean?',['Cenoura','Beterraba','Batata'],0,'Carrot = cenoura.','🥕'],
['Vegetais','Vitamin A','What does “Cucumber” mean?',['Pepino','Abobrinha','Pimentão'],0,'Cucumber = pepino.','🥒'],
['Vegetais','Fibers','Which word means “abobrinha”?',['Zucchini','Eggplant','Broccoli'],0,'Zucchini = abobrinha.','🥒'],
['Vegetais','Fibers','What does “Eggplant” mean?',['Berinjela','Beterraba','Cebola'],0,'Eggplant = berinjela.','🍆'],
['Vegetais','Raw','What does “Onion” mean?',['Cebola','Pepino','Alface'],0,'Onion = cebola.','🧅'],
['Vegetais','Raw','Which word means “beterraba”?',['Beet','Pepper','Potato'],0,'Beet = beterraba.','🟣'],
['Vegetais','Vitamin C','What does “Potato” mean?',['Batata','Pimentão','Brócolis'],0,'Potato = batata.','🥔'],
['Vegetais','Vitamin C','What does “Pepper” mean in this study sheet?',['Pimentão','Pimenta-do-reino','Pepino'],0,'Na folha, Pepper = pimentão.','🫑'],
['Vegetais','Vitamin C','What does “Broccoli” mean?',['Brócolis','Rúcula','Cenoura'],0,'Broccoli = brócolis.','🥦'],
['Números','Numbers','How do we write 1 in English?',['One','Two','Ten'],0,'1 = One.','1️⃣'],
['Números','Numbers','How do we write 3 in English?',['Five','Three','Eight'],1,'3 = Three.','3️⃣'],
['Números','Numbers','Which number is “Six”?',['4','6','9'],1,'Six = 6.','6️⃣'],
['Números','Numbers','Which number is “Eight”?',['8','7','10'],0,'Eight = 8.','8️⃣'],
['Números','Numbers','How do we write 10 in English?',['Ten','Nine','Two'],0,'10 = Ten.','🔟'],
['Cores','Colors','What color is “Orange”?',['Laranja','Roxo','Marrom'],0,'Orange = laranja.','🟠'],
['Cores','Colors','What color is “Purple”?',['Vermelho','Roxo','Verde'],1,'Purple = roxo.','🟣'],
['Cores','Colors','What color is “Green”?',['Verde','Amarelo','Marrom'],0,'Green = verde.','🟢'],
['Cores','Colors','What color is “Brown”?',['Marrom','Vermelho','Laranja'],0,'Brown = marrom.','🟤'],
['Cores','Colors','Which pair is correct?',['Red = vermelho','Yellow = roxo','Green = amarelo'],0,'Red = vermelho.','🔴 🟡 🟢']
];
function visualIng(v){return `<div class="port-visual">${v}</div>`}
function montarIng(){const g=document.getElementById('gridIng');g.innerHTML='';I.forEach((q,i)=>{const c=document.createElement('div');c.className='qcard';c.dataset.grupo=q[0];c.innerHTML=`<div class="qhead"><h3>${i+1}. ${q[1]}</h3><div class="tags"><span class="tag">${q[0]}</span></div></div><div class="visual"><div class="canvas">${visualIng(q[6])}</div></div><div class="body"><p class="question">${q[2]}</p>${q[3].map((x,j)=>`<label class="option"><input type="radio" name="i${i}" value="${j}"> ${String.fromCharCode(65+j)}) ${x}</label>`).join('')}<div class="feedback"></div></div>`;g.appendChild(c)})}
function filtrarIng(g,b){document.querySelectorAll('.filter').forEach(x=>x.classList.remove('active'));b.classList.add('active');document.querySelectorAll('#gridIng .qcard').forEach(c=>c.style.display=g==='Todos'||c.dataset.grupo===g?'':'none')}
function corrigirIng(){let ac=0,rp=0;document.querySelectorAll('#gridIng .qcard').forEach((c,i)=>{c.querySelectorAll('.option').forEach(x=>x.classList.remove('correct','wrong'));const q=I[i],m=c.querySelector('input:checked'),f=c.querySelector('.feedback');if(!m){f.style.display='block';f.innerHTML='⚠️ <strong>Não respondida.</strong>';return}rp++;if(+m.value===q[4]){ac++;m.closest('.option').classList.add('correct');f.innerHTML='✅ <strong>Correct!</strong> '+q[5]}else{m.closest('.option').classList.add('wrong');c.querySelectorAll('.option')[q[4]].classList.add('correct');f.innerHTML='❌ <strong>Review:</strong> '+q[5]}f.style.display='block'});const r=document.getElementById('resultIng');r.innerHTML=`Respondidas: <strong>${rp}/${I.length}</strong><br>Acertos: <strong>${ac}/${I.length}</strong><br>${ac>=27?'🌟 Excellent!':ac>=22?'👏 Very good!':ac>=16?'🙂 Good job! Revise os erros.':'💪 Keep studying and try again!'}`;r.style.display='block';r.scrollIntoView({behavior:'smooth',block:'center'})}
function refazerIng(){document.querySelectorAll('#quizIng input[type=radio]').forEach(x=>x.checked=false);document.querySelectorAll('#gridIng .option').forEach(x=>x.classList.remove('correct','wrong'));document.querySelectorAll('#gridIng .feedback').forEach(x=>{x.style.display='none';x.innerHTML=''});document.getElementById('resultIng').style.display='none'}
montarIng();