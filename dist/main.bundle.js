(()=>{"use strict";const e=["Main Page","Action (set A)","Action (set B)","Weather","Furniture","Animal (set A)","Animal (set B)","Clothes","Emotion","Statistics"],t=["cry","dance","dive","draw","walk","fly","hug","jump"],s=["плакать","танцевать","нырять","рисовать","гулять","летать","обнимать","прыгать"],n=["open","play","point","ride","run","sing","skip","swim"],i=["открывать","играть","указывать","ездить","бегать","петь","пропускать, прыгать","плавать"],a=["sun","lightning","rain","snow","wind","hot","cold","cloud"],l=["солнце","молния","дождь","снег","ветер","горячий","холодный","облако"],r=["table","chair","bookcase","bed","sofa","armchair","shelf","cupboard"],c=["стол","стул","книжный шкаф","кровать","диван","кресло","полка","шкаф"],o=["cat","chick","chicken","dog","horse","pig","rabbit","sheep"],d=["кот","цыпленок","курица","собака","лошадь","свинья","кролик","овца"],_=["bird","fish","frog","giraffe","lion","mouse","turtle","dolphin"],m=["птица","рыба","лягушка","жираф","лев","мышь","черепаха","дельфин"],y=["skirt","pants","blouse","dress","boot","shirt","coat","shoe"],g=["юбка","брюки","блузка","платье","ботинки","рубашка","пальто","туфли"],u=["sad","angry","happy","tired","surprised","scared","smile","laugh"],I=["грустный","злой","счастливый","уставший","удивленный","испуганный","улыбка","смех"];let $=!1,f=0,E=!1;const p=[];let b=0;function B(e,t,s,n,i,a,l){const r=document.createElement(e);return r.className=t,void 0!==n&&(r.innerHTML=n),void 0!==i&&(r.id=i),void 0!==l&&r.setAttribute(a,l),s.append(r),r}const v=e=>`<i class="material-icons">${e}</i>`,h=B("div","header_class",document.body),S=B("div","burger_container_class",h),L=B("nav","burger_menu_class",S),N=(B("input","",L,"","menu_toggle_id","type","checkbox"),B("label","menu_btn_class",L,"","","for","menu_toggle_id")),T=(B("span","",N),B("ul","menu_box_class",L)),w=(B("div","cover_class",L),B("div","play_train_container_class",h,"","play_train_container_id"));function O(){B("p","play_train_text_class",w,"TRAIN");const e=B("div","play_train_button_class",w);B("div","play_train_button_pimpochka_class",e)}function J(){const e=B("div","play_train_button_class",w);B("div","play_train_button_pimpochka_class",e),B("p","play_train_text_class",w,"PLAY")}O();const M=B("div","score_class",document.body),H=B("div","card_field_class",document.body);function j(s){0===f&&(document.getElementById("image_1").src="assets/images/dance.jpg",document.getElementById("image_2").src="assets/images/swim.jpg",document.getElementById("image_3").src="assets/images/sun.jpg",document.getElementById("image_4").src="assets/images/table.jpg",document.getElementById("image_5").src="assets/images/chick.jpg",document.getElementById("image_6").src="assets/images/bird.jpg",document.getElementById("image_7").src="assets/images/blouse.jpg",document.getElementById("image_8").src="assets/images/smile.jpg");for(let i=1;i<9;i++)0===f?document.getElementById(`text_${i}`).innerHTML=e[i]:1===f?(document.getElementById(`image_${i}`).src=`assets/images/${t[i-1]}.jpg`,$||(document.getElementById(`text_${i}`).innerHTML=t[i-1])):2===f?(document.getElementById(`image_${i}`).src=`assets/images/${n[i-1]}.jpg`,$||(document.getElementById(`text_${i}`).innerHTML=n[i-1])):3===f?(document.getElementById(`image_${i}`).src=`assets/images/${a[i-1]}.jpg`,$||(document.getElementById(`text_${i}`).innerHTML=a[i-1])):4===f?(document.getElementById(`image_${i}`).src=`assets/images/${r[i-1]}.jpg`,$||(document.getElementById(`text_${i}`).innerHTML=r[i-1])):5===f?(document.getElementById(`image_${i}`).src=`assets/images/${o[i-1]}.jpg`,$||(document.getElementById(`text_${i}`).innerHTML=o[i-1])):6===f?(document.getElementById(`image_${i}`).src=`assets/images/${_[i-1]}.jpg`,$||(document.getElementById(`text_${i}`).innerHTML=_[i-1])):7===f?(document.getElementById(`image_${i}`).src=`assets/images/${y[i-1]}.jpg`,$||(document.getElementById(`text_${i}`).innerHTML=y[i-1])):8===f?(document.getElementById(`image_${i}`).src=`assets/images/${u[i-1]}.jpg`,$||(document.getElementById(`text_${i}`).innerHTML=u[i-1])):9===f&&(document.getElementById(`image_${i}`).src=`assets/images/${s[i-1].original}.jpg`,$||(document.getElementById(`text_${i}`).innerHTML=s[i-1].original))}function x(e){for(let s=1;s<9;s++){for(let e=0;e<10;e++)document.getElementById(`menu_item_${e}`).style.textDecoration="none";9!==f&&(document.getElementById(`menu_item_${f}`).style.textDecoration="underline");const i=B("div","cell_class",H),l=document.createElement("div");l.className=$?"new_card_play_class":"new_card_class",1===f?l.id=`action_set_a_card_${s}`:2===f?l.id=`action_set_b_card_${s}`:3===f?l.id=`action_set_c_card_${s}`:4===f?l.id=`adjective_card_${s}`:5===f?l.id=`animal_set_a_card_${s}`:6===f?l.id=`animal_set_b_card_${s}`:7===f?l.id=`clothes_card_${s}`:8===f?l.id=`emotion_card_${s}`:9===f&&(l.id=`diff_card_${s}`),i.append(l);const c=document.createElement("img");c.className=$?"play_card_image_class":"train_card_image_class",c.id=`image_${s}`,l.append(c),$||(B("p","train_card_text_class",l,"",`text_${s}`),B("div","rotate_class",l,v("autorenew"),`rotate_${s}`)),$||(c.addEventListener("click",(()=>{let i={};if(1===f){const e=JSON.parse(localStorage.getItem(t[s-1]));e.train++,localStorage.setItem(e.original,JSON.stringify(e)),i=new Audio(`assets/audio/${t[s-1]}.mp3`),i.play()}else if(2===f){const e=JSON.parse(localStorage.getItem(n[s-1]));e.train++,localStorage.setItem(e.original,JSON.stringify(e)),i=new Audio(`assets/audio/${n[s-1]}.mp3`),i.play()}else if(3===f){const e=JSON.parse(localStorage.getItem(a[s-1]));e.train++,localStorage.setItem(e.original,JSON.stringify(e)),i=new Audio(`assets/audio/${a[s-1]}.mp3`),i.play()}else if(4===f){const e=JSON.parse(localStorage.getItem(r[s-1]));e.train++,localStorage.setItem(e.original,JSON.stringify(e)),i=new Audio(`assets/audio/${r[s-1]}.mp3`),i.play()}else if(5===f){const e=JSON.parse(localStorage.getItem(o[s-1]));e.train++,localStorage.setItem(e.original,JSON.stringify(e)),i=new Audio(`assets/audio/${o[s-1]}.mp3`),i.play()}else if(6===f){const e=JSON.parse(localStorage.getItem(_[s-1]));e.train++,localStorage.setItem(e.original,JSON.stringify(e)),i=new Audio(`assets/audio/${_[s-1]}.mp3`),i.play()}else if(7===f){const e=JSON.parse(localStorage.getItem(y[s-1]));e.train++,localStorage.setItem(e.original,JSON.stringify(e)),i=new Audio(`assets/audio/${y[s-1]}.mp3`),i.play()}else if(8===f){const e=JSON.parse(localStorage.getItem(u[s-1]));e.train++,localStorage.setItem(e.original,JSON.stringify(e)),i=new Audio(`assets/audio/${u[s-1]}.mp3`),i.play()}else if(9===f){const t=JSON.parse(localStorage.getItem(e[s-1].original));t.train++,localStorage.setItem(t.original,JSON.stringify(t)),i=new Audio(`assets/audio/${e[s-1].original}.mp3`),i.play()}})),document.getElementById(`rotate_${s}`).addEventListener("click",(()=>{if(1===f){const e=JSON.parse(localStorage.getItem(t[s-1]));e.watch++,localStorage.setItem(e.original,JSON.stringify(e)),document.getElementById(`action_set_a_card_${s}`).style.transform="scale(0, 1)",document.getElementById(`action_set_a_card_${s}`).style.visibility="hidden",document.getElementById(`action_set_a_card_${s}`).style.transition="transform 0.3s, visibility 0s 0.3s",document.getElementById(`action_set_a_card_r_${s}`).style.transform="scale(1, 1)",document.getElementById(`action_set_a_card_r_${s}`).style.visibility="visible",document.getElementById(`action_set_a_card_r_${s}`).style.transition="transform 0.3s 0.3s, visibility 0s 0.3s"}else if(2===f){const e=JSON.parse(localStorage.getItem(n[s-1]));e.watch++,localStorage.setItem(e.original,JSON.stringify(e)),document.getElementById(`action_set_b_card_${s}`).style.transform="scale(0, 1)",document.getElementById(`action_set_b_card_${s}`).style.visibility="hidden",document.getElementById(`action_set_b_card_${s}`).style.transition="transform 0.3s, visibility 0s 0.3s",document.getElementById(`action_set_b_card_r_${s}`).style.transform="scale(1, 1)",document.getElementById(`action_set_b_card_r_${s}`).style.visibility="visible",document.getElementById(`action_set_b_card_r_${s}`).style.transition="transform 0.3s 0.3s, visibility 0s 0.3s"}else if(3===f){const e=JSON.parse(localStorage.getItem(a[s-1]));e.watch++,localStorage.setItem(e.original,JSON.stringify(e)),document.getElementById(`action_set_c_card_${s}`).style.transform="scale(0, 1)",document.getElementById(`action_set_c_card_${s}`).style.visibility="hidden",document.getElementById(`action_set_c_card_${s}`).style.transition="transform 0.3s, visibility 0s 0.3s",document.getElementById(`action_set_c_card_r_${s}`).style.transform="scale(1, 1)",document.getElementById(`action_set_c_card_r_${s}`).style.visibility="visible",document.getElementById(`action_set_c_card_r_${s}`).style.transition="transform 0.3s 0.3s, visibility 0s 0.3s"}else if(4===f){const e=JSON.parse(localStorage.getItem(r[s-1]));e.watch++,localStorage.setItem(e.original,JSON.stringify(e)),document.getElementById(`adjective_card_${s}`).style.transform="scale(0, 1)",document.getElementById(`adjective_card_${s}`).style.visibility="hidden",document.getElementById(`adjective_card_${s}`).style.transition="transform 0.3s, visibility 0s 0.3s",document.getElementById(`adjective_card_r_${s}`).style.transform="scale(1, 1)",document.getElementById(`adjective_card_r_${s}`).style.visibility="visible",document.getElementById(`adjective_card_r_${s}`).style.transition="transform 0.3s 0.3s, visibility 0s 0.3s"}else if(5===f){const e=JSON.parse(localStorage.getItem(o[s-1]));e.watch++,localStorage.setItem(e.original,JSON.stringify(e)),document.getElementById(`animal_set_a_card_${s}`).style.transform="scale(0, 1)",document.getElementById(`animal_set_a_card_${s}`).style.visibility="hidden",document.getElementById(`animal_set_a_card_${s}`).style.transition="transform 0.3s, visibility 0s 0.3s",document.getElementById(`animal_set_a_card_r_${s}`).style.transform="scale(1, 1)",document.getElementById(`animal_set_a_card_r_${s}`).style.visibility="visible",document.getElementById(`animal_set_a_card_r_${s}`).style.transition="transform 0.3s 0.3s, visibility 0s 0.3s"}else if(6===f){const e=JSON.parse(localStorage.getItem(_[s-1]));e.watch++,localStorage.setItem(e.original,JSON.stringify(e)),document.getElementById(`animal_set_b_card_${s}`).style.transform="scale(0, 1)",document.getElementById(`animal_set_b_card_${s}`).style.visibility="hidden",document.getElementById(`animal_set_b_card_${s}`).style.transition="transform 0.3s, visibility 0s 0.3s",document.getElementById(`animal_set_b_card_r_${s}`).style.transform="scale(1, 1)",document.getElementById(`animal_set_b_card_r_${s}`).style.visibility="visible",document.getElementById(`animal_set_b_card_r_${s}`).style.transition="transform 0.3s 0.3s, visibility 0s 0.3s"}else if(7===f){const e=JSON.parse(localStorage.getItem(y[s-1]));e.watch++,localStorage.setItem(e.original,JSON.stringify(e)),document.getElementById(`clothes_card_${s}`).style.transform="scale(0, 1)",document.getElementById(`clothes_card_${s}`).style.visibility="hidden",document.getElementById(`clothes_card_${s}`).style.transition="transform 0.3s, visibility 0s 0.3s",document.getElementById(`clothes_card_r_${s}`).style.transform="scale(1, 1)",document.getElementById(`clothes_card_r_${s}`).style.visibility="visible",document.getElementById(`clothes_card_r_${s}`).style.transition="transform 0.3s 0.3s, visibility 0s 0.3s"}else if(8===f){const e=JSON.parse(localStorage.getItem(u[s-1]));e.watch++,localStorage.setItem(e.original,JSON.stringify(e)),document.getElementById(`emotion_card_${s}`).style.transform="scale(0, 1)",document.getElementById(`emotion_card_${s}`).style.visibility="hidden",document.getElementById(`emotion_card_${s}`).style.transition="transform 0.3s, visibility 0s 0.3s",document.getElementById(`emotion_card_r_${s}`).style.transform="scale(1, 1)",document.getElementById(`emotion_card_r_${s}`).style.visibility="visible",document.getElementById(`emotion_card_r_${s}`).style.transition="transform 0.3s 0.3s, visibility 0s 0.3s"}else if(9===f){const t=JSON.parse(localStorage.getItem(e[s-1].original));t.watch++,localStorage.setItem(t.original,JSON.stringify(t)),document.getElementById(`diff_card_${s}`).style.transform="scale(0, 1)",document.getElementById(`diff_card_${s}`).style.visibility="hidden",document.getElementById(`diff_card_${s}`).style.transition="transform 0.3s, visibility 0s 0.3s",document.getElementById(`diff_card_r_${s}`).style.transform="scale(1, 1)",document.getElementById(`diff_card_r_${s}`).style.visibility="visible",document.getElementById(`diff_card_r_${s}`).style.transition="transform 0.3s 0.3s, visibility 0s 0.3s"}})));const d=document.createElement("div");d.className="new_card_r_class",1===f?d.id=`action_set_a_card_r_${s}`:2===f?d.id=`action_set_b_card_r_${s}`:3===f?d.id=`action_set_c_card_r_${s}`:4===f?d.id=`adjective_card_r_${s}`:5===f?d.id=`animal_set_a_card_r_${s}`:6===f?d.id=`animal_set_b_card_r_${s}`:7===f?d.id=`clothes_card_r_${s}`:8===f?d.id=`emotion_card_r_${s}`:9===f&&(d.id=`diff_card_r_${s}`),i.append(d),B("img","train_card_r_image_class",d,"",`image_r_${s}`),B("p","train_card_r_text_class",d,"",`text_r_${s}`),d.addEventListener("mouseleave",(()=>{1===f?(document.getElementById(`action_set_a_card_r_${s}`).style.transform="scale(0, 1)",document.getElementById(`action_set_a_card_r_${s}`).style.visibility="hidden",document.getElementById(`action_set_a_card_r_${s}`).style.transition="transform 0.3s, visibility 0s 0.3s",document.getElementById(`action_set_a_card_${s}`).style.transform="scale(1, 1)",document.getElementById(`action_set_a_card_${s}`).style.visibility="visible",document.getElementById(`action_set_a_card_${s}`).style.transition="transform 0.3s 0.3s, visibility 0s 0.3s"):2===f?(document.getElementById(`action_set_b_card_r_${s}`).style.transform="scale(0, 1)",document.getElementById(`action_set_b_card_r_${s}`).style.visibility="hidden",document.getElementById(`action_set_b_card_r_${s}`).style.transition="transform 0.3s, visibility 0s 0.3s",document.getElementById(`action_set_b_card_${s}`).style.transform="scale(1, 1)",document.getElementById(`action_set_b_card_${s}`).style.visibility="visible",document.getElementById(`action_set_b_card_${s}`).style.transition="transform 0.3s 0.3s, visibility 0s 0.3s"):3===f?(document.getElementById(`action_set_c_card_r_${s}`).style.transform="scale(0, 1)",document.getElementById(`action_set_c_card_r_${s}`).style.visibility="hidden",document.getElementById(`action_set_c_card_r_${s}`).style.transition="transform 0.3s, visibility 0s 0.3s",document.getElementById(`action_set_c_card_${s}`).style.transform="scale(1, 1)",document.getElementById(`action_set_c_card_${s}`).style.visibility="visible",document.getElementById(`action_set_c_card_${s}`).style.transition="transform 0.3s 0.3s, visibility 0s 0.3s"):4===f?(document.getElementById(`adjective_card_r_${s}`).style.transform="scale(0, 1)",document.getElementById(`adjective_card_r_${s}`).style.visibility="hidden",document.getElementById(`adjective_card_r_${s}`).style.transition="transform 0.3s, visibility 0s 0.3s",document.getElementById(`adjective_card_${s}`).style.transform="scale(1, 1)",document.getElementById(`adjective_card_${s}`).style.visibility="visible",document.getElementById(`adjective_card_${s}`).style.transition="transform 0.3s 0.3s, visibility 0s 0.3s"):5===f?(document.getElementById(`animal_set_a_card_r_${s}`).style.transform="scale(0, 1)",document.getElementById(`animal_set_a_card_r_${s}`).style.visibility="hidden",document.getElementById(`animal_set_a_card_r_${s}`).style.transition="transform 0.3s, visibility 0s 0.3s",document.getElementById(`animal_set_a_card_${s}`).style.transform="scale(1, 1)",document.getElementById(`animal_set_a_card_${s}`).style.visibility="visible",document.getElementById(`animal_set_a_card_${s}`).style.transition="transform 0.3s 0.3s, visibility 0s 0.3s"):6===f?(document.getElementById(`animal_set_b_card_r_${s}`).style.transform="scale(0, 1)",document.getElementById(`animal_set_b_card_r_${s}`).style.visibility="hidden",document.getElementById(`animal_set_b_card_r_${s}`).style.transition="transform 0.3s, visibility 0s 0.3s",document.getElementById(`animal_set_b_card_${s}`).style.transform="scale(1, 1)",document.getElementById(`animal_set_b_card_${s}`).style.visibility="visible",document.getElementById(`animal_set_b_card_${s}`).style.transition="transform 0.3s 0.3s, visibility 0s 0.3s"):7===f?(document.getElementById(`clothes_card_r_${s}`).style.transform="scale(0, 1)",document.getElementById(`clothes_card_r_${s}`).style.visibility="hidden",document.getElementById(`clothes_card_r_${s}`).style.transition="transform 0.3s, visibility 0s 0.3s",document.getElementById(`clothes_card_${s}`).style.transform="scale(1, 1)",document.getElementById(`clothes_card_${s}`).style.visibility="visible",document.getElementById(`clothes_card_${s}`).style.transition="transform 0.3s 0.3s, visibility 0s 0.3s"):8===f?(document.getElementById(`emotion_card_r_${s}`).style.transform="scale(0, 1)",document.getElementById(`emotion_card_r_${s}`).style.visibility="hidden",document.getElementById(`emotion_card_r_${s}`).style.transition="transform 0.3s, visibility 0s 0.3s",document.getElementById(`emotion_card_${s}`).style.transform="scale(1, 1)",document.getElementById(`emotion_card_${s}`).style.visibility="visible",document.getElementById(`emotion_card_${s}`).style.transition="transform 0.3s 0.3s, visibility 0s 0.3s"):9===f&&(document.getElementById(`diff_card_r_${s}`).style.transform="scale(0, 1)",document.getElementById(`diff_card_r_${s}`).style.visibility="hidden",document.getElementById(`diff_card_r_${s}`).style.transition="transform 0.3s, visibility 0s 0.3s",document.getElementById(`diff_card_${s}`).style.transform="scale(1, 1)",document.getElementById(`diff_card_${s}`).style.visibility="visible",document.getElementById(`diff_card_${s}`).style.transition="transform 0.3s 0.3s, visibility 0s 0.3s")}))}j(e),function(e){for(let $=1;$<9;$++)1===f?(document.getElementById(`image_r_${$}`).src=`assets/images/${t[$-1]}.jpg`,document.getElementById(`text_r_${$}`).innerHTML=s[$-1]):2===f?(document.getElementById(`image_r_${$}`).src=`assets/images/${n[$-1]}.jpg`,document.getElementById(`text_r_${$}`).innerHTML=i[$-1]):3===f?(document.getElementById(`image_r_${$}`).src=`assets/images/${a[$-1]}.jpg`,document.getElementById(`text_r_${$}`).innerHTML=l[$-1]):4===f?(document.getElementById(`image_r_${$}`).src=`assets/images/${r[$-1]}.jpg`,document.getElementById(`text_r_${$}`).innerHTML=c[$-1]):5===f?(document.getElementById(`image_r_${$}`).src=`assets/images/${o[$-1]}.jpg`,document.getElementById(`text_r_${$}`).innerHTML=d[$-1]):6===f?(document.getElementById(`image_r_${$}`).src=`assets/images/${_[$-1]}.jpg`,document.getElementById(`text_r_${$}`).innerHTML=m[$-1]):7===f?(document.getElementById(`image_r_${$}`).src=`assets/images/${y[$-1]}.jpg`,document.getElementById(`text_r_${$}`).innerHTML=g[$-1]):8===f?(document.getElementById(`image_r_${$}`).src=`assets/images/${u[$-1]}.jpg`,document.getElementById(`text_r_${$}`).innerHTML=I[$-1]):9===f&&(document.getElementById(`image_r_${$}`).src=`assets/images/${e[$-1].original}.jpg`,document.getElementById(`text_r_${$}`).innerHTML=e[$-1].translate)}(e);const h=B("button","start_game_class",H,"Начать игру","","type","button");$&&f>0&&(document.querySelector(".start_game_class").style.visibility="visible"),!$&&f>0&&(document.querySelector(".start_game_class").style.visibility="hidden"),h.addEventListener("click",(()=>{M.innerHTML="",b=0,E=!0;let s,i=[],l="",c=0,d={};for(;p.length<8;)s=Math.round(7*Math.random()),-1===p.indexOf(s,0)&&p.push(s);if(1===f)l="action_set_a_card_",i=t;else if(2===f)l="action_set_b_card_",i=n;else if(3===f)l="action_set_c_card_",i=a;else if(4===f)l="adjective_card_",i=r;else if(5===f)l="animal_set_a_card_",i=o;else if(6===f)l="animal_set_b_card_",i=_;else if(7===f)l="clothes_card_",i=y;else if(8===f)l="emotion_card_",i=u;else if(9===f){l="diff_card_";for(let t=0;t<8;t++)i.push(e[t].original)}if(setTimeout((()=>{d=new Audio(`assets/audio/${i[p[b]]}.mp3`),d.play()}),500),B("button","repeat_butt_class",H,v("autorenew"),"","type","button"),document.querySelector(".start_game_class").className="start_game_class repeat_class",document.querySelector(".repeat_class").innerHTML=v("autorenew"),document.querySelector(".repeat_class").style="visibility: hidden",document.querySelector(".repeat_butt_class").addEventListener("click",(()=>{d=new Audio(`assets/audio/${i[p[b]]}.mp3`),d.play()})),f>0&&$&&E)for(let e=1;e<=p.length;e++)document.getElementById(`${l}${e}`).style="pointer-events: auto; opacity: 1;",document.getElementById(`${l}${e}`).addEventListener("click",(()=>{if(document.getElementById(`${l}${e}`).id===`${l}${p[b]+1}`){document.getElementById(`${l}${e}`).style="pointer-events: none; opacity: 0.15; transition: opacity 0.5s";const t=JSON.parse(localStorage.getItem(i[p[b]]));t.victory++,t.percent=Math.floor(100*t.victory/(t.victory+t.fail)*10)/10,localStorage.setItem(t.original,JSON.stringify(t)),d=new Audio("assets/audio/dzyn.mp3"),d.play(),M.innerHTML+=v("star"),b++,b<8?setTimeout((()=>{d=new Audio(`assets/audio/${i[p[b]]}.mp3`),d.play()}),1e3):(setTimeout((()=>{0===c?(document.body.innerHTML='<img src="assets/images/success.jpg">',d=new Audio("assets/audio/victory.mp3"),d.play()):(document.body.innerHTML=`<h2>Количество ошибок: ${c}</h2><br><img src="assets/images/failure.jpg">`,d=new Audio("assets/audio/failure.mp3"),d.play())}),1e3),setTimeout((()=>{window.location.reload()}),6e3))}else{const e=JSON.parse(localStorage.getItem(i[p[b]]));e.fail++,e.percent=Math.floor(100*e.victory/(e.victory+e.fail)*10)/10,localStorage.setItem(e.original,JSON.stringify(e)),d=new Audio("assets/audio/fail.mp3"),d.play(),M.innerHTML+=`<span style="color: gray">${v("star_border")}</span>`,c++}}))}))}for(let t=0;t<10;t++)B("li","menu_item_class",T,e[t],`menu_item_${t}`),t>0&&t<9&&document.getElementById(`menu_item_${t}`).addEventListener("click",(()=>{H.innerHTML="",w.style.visibility="visible",f=t,x(),setTimeout((()=>{document.getElementById("menu_toggle_id").checked=!1}),200)}));for(let e=0;e<10;e++)document.getElementById(`menu_item_${e}`).style.textDecoration="none";function k(){for(let e=1;e<9;e++){const t=document.createElement("div");t.className=$?"card_play_class":"card_class",t.id=`card_${e}`,H.append(t),B("img","card_image_class",t,"",`image_${e}`),B("p","card_text_class",t,"",`text_${e}`),document.getElementById(`card_${e}`).addEventListener("click",(()=>{H.innerHTML="",f=e,x()}))}j()}document.getElementById(`menu_item_${f}`).style.textDecoration="underline",k();const A=["",t,n,a,r,o,_,y,u],q=["",s,i,l,c,d,m,g,I];let D=[];function Y(){for(let t=1;t<9;t++)for(let s=0;s<8;s++){const n={set:e[t],original:A[t][s],translate:q[t][s],train:0,watch:0,victory:0,fail:0,percent:100};D.push(n),null===JSON.parse(localStorage.getItem(A[t][s]))&&localStorage.setItem(n.original,JSON.stringify(n))}}function R(){const e=[];for(let t=0;t<D.length;t++)e.push(JSON.parse(localStorage.getItem(D[t].original)));e.sort(((e,t)=>e.percent-t.percent));const t=[];for(let s=0;s<8;s++)t.push(e[s]);return t}Y(),w.addEventListener("click",(()=>{$=!$,M.innerHTML="",$?(w.innerHTML="",J(),document.getElementById("play_train_container_id").className="play_train_play_container_class",0===f?function(){for(let e=1;e<9;e++)document.getElementById(`card_${e}`).className="card_play_class"}():f>0&&(H.innerHTML="",x(R())),f>0&&(document.querySelector(".start_game_class").style.visibility="visible")):(w.innerHTML="",O(),document.getElementById("play_train_container_id").className="play_train_container_class",0===f?function(){for(let e=1;e<9;e++)document.getElementById(`card_${e}`).className="card_class"}():f>0&&(H.innerHTML="",x(R())),f>0&&(document.querySelector(".start_game_class").style.visibility="hidden"))}));let W=!1,F=!1,P=!1,z=!1,C=!1,G=!1,K=!1,Q=!1;function U(){const e=B("button","reset_stat_class",H,"Reset"),t=B("button","repeat_diff_words_class",H,"Repeat difficult words"),s=B("table","stat_table_class",H),n=B("tr","th_class",s);B("th","th_class",n,"Theme"),B("th","th_class",n,"Word"),B("th","th_class",n,"Translate"),B("th","th_class",n,"Listen"),B("th","th_class",n,"Rotate"),B("th","th_class",n,"Win"),B("th","th_class",n,"Fail"),B("th","th_class",n,"%");const i=B("tr","tr_class",s);B("th","td_class_1",i,v("sort_by_alpha")),B("th","td_class_2",i,v("sort_by_alpha")),B("th","td_class_3",i,v("sort_by_alpha")),B("th","td_class_4",i,v("sort_by_alpha")),B("th","td_class_5",i,v("sort_by_alpha")),B("th","td_class_6",i,v("sort_by_alpha")),B("th","td_class_7",i,v("sort_by_alpha")),B("th","td_class_8",i,v("sort_by_alpha"));for(let e=0;e<D.length;e++){const t=JSON.parse(localStorage.getItem(D[e].original)),n=B("tr","tr_class",s);B("td","td_class_0",n,t.set),B("td","td_class",n,t.original),B("td","td_class",n,t.translate),B("td","td_class",n,t.train),B("td","td_class",n,t.watch),B("td","td_class",n,t.victory),B("td","td_class",n,t.fail),B("td","td_class",n,t.percent)}document.querySelector(".td_class_1").addEventListener("click",(()=>{W=!W;const e=[];for(let t=0;t<D.length;t++)e.push(JSON.parse(localStorage.getItem(D[t].original)));D=[],D=e,W?D.sort(((e,t)=>e.set>t.set?1:-1)):D.sort(((e,t)=>t.set>e.set?1:-1)),H.innerHTML="",U()})),document.querySelector(".td_class_2").addEventListener("click",(()=>{F=!F;const e=[];for(let t=0;t<D.length;t++)e.push(JSON.parse(localStorage.getItem(D[t].original)));D=[],D=e,F?D.sort(((e,t)=>e.original>t.original?1:-1)):D.sort(((e,t)=>t.original>e.original?1:-1)),H.innerHTML="",U()})),document.querySelector(".td_class_3").addEventListener("click",(()=>{P=!P;const e=[];for(let t=0;t<D.length;t++)e.push(JSON.parse(localStorage.getItem(D[t].original)));D=[],D=e,P?D.sort(((e,t)=>e.translate>t.translate?1:-1)):D.sort(((e,t)=>t.translate>e.translate?1:-1)),H.innerHTML="",U()})),document.querySelector(".td_class_4").addEventListener("click",(()=>{z=!z;const e=[];for(let t=0;t<D.length;t++)e.push(JSON.parse(localStorage.getItem(D[t].original)));D=[],D=e,z?D.sort(((e,t)=>e.train-t.train)):D.sort(((e,t)=>t.train-e.train)),H.innerHTML="",U()})),document.querySelector(".td_class_5").addEventListener("click",(()=>{C=!C;const e=[];for(let t=0;t<D.length;t++)e.push(JSON.parse(localStorage.getItem(D[t].original)));D=[],D=e,C?D.sort(((e,t)=>e.watch-t.watch)):D.sort(((e,t)=>t.watch-e.watch)),H.innerHTML="",U()})),document.querySelector(".td_class_6").addEventListener("click",(()=>{G=!G;const e=[];for(let t=0;t<D.length;t++)e.push(JSON.parse(localStorage.getItem(D[t].original)));D=[],D=e,G?D.sort(((e,t)=>e.victory-t.victory)):D.sort(((e,t)=>t.victory-e.victory)),H.innerHTML="",U()})),document.querySelector(".td_class_7").addEventListener("click",(()=>{K=!K;const e=[];for(let t=0;t<D.length;t++)e.push(JSON.parse(localStorage.getItem(D[t].original)));D=[],D=e,K?D.sort(((e,t)=>e.fail-t.fail)):D.sort(((e,t)=>t.fail-e.fail)),H.innerHTML="",U()})),document.querySelector(".td_class_8").addEventListener("click",(()=>{Q=!Q;const e=[];for(let t=0;t<D.length;t++)e.push(JSON.parse(localStorage.getItem(D[t].original)));D=[],D=e,Q?D.sort(((e,t)=>e.percent-t.percent)):D.sort(((e,t)=>t.percent-e.percent)),H.innerHTML="",U()})),e.addEventListener("click",(()=>{localStorage.clear(),H.innerHTML="",D=[],Y(),U()})),t.addEventListener("click",(()=>{if(H.innerHTML="",100===R()[0].percent){for(let e=0;e<10;e++)document.getElementById(`menu_item_${e}`).style.textDecoration="none";let e=9;B("h3","h_class",H,"You have never been wrong! You will be taken to the main page after <span>10</span> seconds"),setInterval((()=>{H.innerHTML="",B("h3","h_class",H,`You have never been wrong! You will be taken to the main page after <span>${e--}</span> seconds`)}),1e3),setTimeout((()=>{window.location.reload()}),9950)}else f=9,w.innerHTML="",w.style.visibility="visible",$?(J(),document.getElementById("play_train_container_id").className="play_train_play_container_class"):(O(),document.getElementById("play_train_container_id").className="play_train_container_class"),x(R())}))}for(let e=0;e<10;e++)document.getElementById(`menu_item_${e}`).addEventListener("mouseover",(()=>{document.getElementById(`menu_item_${e}`).style.color="rgb(192, 225, 255)"})),document.getElementById(`menu_item_${e}`).addEventListener("mouseout",(()=>{document.getElementById(`menu_item_${e}`).style.color="white"}));document.getElementById("menu_item_0").addEventListener("click",(()=>{H.innerHTML="",w.style.visibility="visible",f=0,k(),setTimeout((()=>{document.getElementById("menu_toggle_id").checked=!1}),200);for(let e=0;e<10;e++)document.getElementById(`menu_item_${e}`).style.textDecoration="none";document.getElementById(`menu_item_${f}`).style.textDecoration="underline"})),document.getElementById("menu_item_9").addEventListener("click",(()=>{H.innerHTML="",w.style.visibility="hidden",U(),H.className="card_field_class table_field_class",setTimeout((()=>{document.getElementById("menu_toggle_id").checked=!1}),200);for(let e=0;e<10;e++)document.getElementById(`menu_item_${e}`).style.textDecoration="none";document.getElementById("menu_item_9").style.textDecoration="underline"})),document.querySelector(".cover_class").addEventListener("click",(()=>{document.getElementById("menu_toggle_id").checked=!1}))})();