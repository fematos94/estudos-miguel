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
['Vegetais','Rich in vitamin C (ricos em vitamina C)','Qual palavra em inglês corresponde a “pimenta”?',['Broccoli','Pepper','Potato'],1,'Pepper = pimenta.','pepper'],
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
['Revisão','Revisão','Qual é a tradução de “Papaya” para o português?',['Goiaba','Mamão','Figo'],1,'Papaya = mamão.','papaya'],
['Revisão','Revisão','Qual é a tradução de “Carrot” para o português?',['Brócolis','Pepino','Cenoura'],2,'Carrot = cenoura.','carrot'],
['Revisão','Revisão','Qual é a tradução de “Pomegranate” para o português?',['Romã','Amora','Kiwi'],0,'Pomegranate = romã.','pomegranate'],
['Revisão','Revisão','Qual é a tradução de “Onion” para o português?',['Beterraba','Cebola','Berinjela'],1,'Onion = cebola.','onion']
];
function visualIng(k){const colors={orange:'#f39a24',purple:'#7c4db5',green:'#43a047',brown:'#795548',red:'#d63f3f',yellow:'#f2c94c'};if(!colors[k])return '';return `<div class="port-visual"><div style="width:120px;height:120px;border-radius:50%;background:${colors[k]};border:5px solid #fff;box-shadow:0 4px 14px #0002,0 0 0 2px #dfe5ec"></div></div>`}
function montarIng(){const g=document.getElementById('gridIng');g.innerHTML='';I.forEach((q,i)=>{const c=document.createElement('div');c.className='qcard';c.dataset.grupo=q[0];const visual=q[0]==='Cores'?`<div class="visual"><div class="canvas">${visualIng(q[6])}</div></div>`:'';c.innerHTML=`<div class="qhead"><h3>${i+1}. ${q[1]}</h3><div class="tags"><span class="tag">${q[0]}</span></div></div>${visual}<div class="body"><p class="question">${q[2]}</p>${q[3].map((x,j)=>`<label class="option"><input type="radio" name="i${i}" value="${j}"> ${String.fromCharCode(65+j)}) ${x}</label>`).join('')}<div class="feedback"></div></div>`;g.appendChild(c)})}
function filtrarIng(g,b){document.querySelectorAll('.filter').forEach(x=>x.classList.remove('active'));b.classList.add('active');document.querySelectorAll('#gridIng .qcard').forEach(c=>c.style.display=g==='Todos'||c.dataset.grupo===g?'':'none')}
function corrigirIng(){let ac=0,rp=0;document.querySelectorAll('#gridIng .qcard').forEach((c,i)=>{c.querySelectorAll('.option').forEach(x=>x.classList.remove('correct','wrong'));const q=I[i],m=c.querySelector('input:checked'),f=c.querySelector('.feedback');if(!m){f.style.display='block';f.innerHTML='⚠️ <strong>Não respondida.</strong>';return}rp++;if(+m.value===q[4]){ac++;m.closest('.option').classList.add('correct');f.innerHTML='✅ <strong>Correto!</strong> '+q[5]}else{m.closest('.option').classList.add('wrong');c.querySelectorAll('.option')[q[4]].classList.add('correct');f.innerHTML='❌ <strong>Vamos revisar:</strong> '+q[5]}f.style.display='block'});const r=document.getElementById('resultIng');r.innerHTML=`Respondidas: <strong>${rp}/40</strong><br>Total: <strong>${ac}/40</strong><br>${ac>=36?'🌟 Excelente!':ac>=30?'👏 Muito bom!':ac>=22?'🙂 Bom trabalho! Revise os erros.':'💪 Continue treinando e tente novamente.'}`;r.style.display='block';r.scrollIntoView({behavior:'smooth',block:'center'})}
function refazerIng(){document.querySelectorAll('#quizIng input[type=radio]').forEach(x=>x.checked=false);document.querySelectorAll('#gridIng .option').forEach(x=>x.classList.remove('correct','wrong'));document.querySelectorAll('#gridIng .feedback').forEach(x=>{x.style.display='none';x.innerHTML=''});document.getElementById('resultIng').style.display='none'}
montarIng();