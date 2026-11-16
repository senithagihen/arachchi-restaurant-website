// [name, price] or [name, one, full] or [name, price, note-in-3rd as string for packs]
const M={
"Packs & biriyani":[
 ["Special packs",null,null,[
  ["Combo deal, 6 persons: biriyani 2, nasi 2, chicken rice 2, 1L Coca-Cola","5,000"],
  ["Mixed fiesta, 8 persons: mixed noodles, mixed rice, nasi, mixed devilled, 1L Coca-Cola","6,400"],
  ["Hungry Bandi family pack, 6 persons: chicken rice 2, biriyani 4, fries, watalappan 6, 1L Coca-Cola","6,000"],
  ["Special family deal, 4 persons: chicken rice, devilled chicken, yoghurt 4, 1L Coca-Cola","4,700"],
  ["Two person full option: chicken soup 2, egg rice, devilled chicken, Pepsi 500ml, yoghurt 2","3,300"],
  ["Rice kottu menia, 6 persons: chicken rice 3, chicken kottu 3, chicken curry, watalappan 6, 1L Coca-Cola","5,400"],
  ["Rice & kottu, 3 persons: mix rice, mix kottu 2, watalappan 3, Pepsi 1L","3,600"],
  ["Rice & kottu, 5 persons: mix rice 2, mix kottu 3, watalappan 5, Pepsi 1L","4,600"]]],
 ["Biriyani",null,null,[["Chicken pot biriyani, one person","1,200"],["Chicken pot biriyani, two persons","2,200"],["Chicken pot biriyani family pack, 4 persons, free 1L Coca-Cola","4,000"]]],
 ["Appetizers",null,null,[["French fries","1,200"],["Fish fingers & chips","2,200"],["Fish fingers, chips & veg. salad","2,300"],["Cashew nuts","1,400"]]]],
"Rice & noodles":[
 ["Fried rice (basmathi)","One","Full",[["Vegetable","800","1,000"],["Egg","900","1,100"],["Fish","1,250","1,600"],["Chicken","1,250","1,600"],["Prawns","1,450","1,800"],["Pork","1,450","1,800"],["Sea food","1,450","1,800"],["Mixed","1,450","1,800"],["Mixed special","1,800","2,100"],["Nasi goreng pot","1,650","2,100"],["Mongolian rice","","2,200"],["Arachchi special (ආරච්චි)","1,900","2,400"],["Nasi goreng family pack, pot with 1L Coca-Cola","","4,100"]]],
 ["Noodles",null,null,[["Vegetable","900"],["Egg","1,100"],["Fish","1,600"],["Chicken","1,600"],["Sea food","1,800"],["Mixed","1,800"],["Mixed special","2,100"]]],
 ["Soup",null,null,[["Vegetable","350"],["Chicken","450"],["Mixed","550"],["Sea food","550"],["Tom yum","600"]]]],
"Kottu & chopsuey":[
 ["Kottu","One","Full",[["Egg","700","900"],["Chicken","850","1,200"],["Fish","850","1,200"],["Sea food","1,300","1,600"],["Mixed","1,300","1,600"],["Cheese chicken","1,450","1,800"]]],
 ["Chopsuey with rice or noodles",null,null,[["Vegetable","1,500"],["Fish","2,500"],["Chicken","2,500"],["Sea food","3,000"],["Mixed","3,000"]]],
 ["Vegetable",null,null,[["Boiled vegetable","1,400"],["Battered fried vegetable","1,400"],["Fresh vegetable salad","800"],["Vegetable chopsuey","1,200"],["Kan kun with chillie","800"],["Hot butter mushroom","1,000"],["Devilled mushroom","1,000"],["Mushroom curry","1,000"],["Fried garlic","1,200"],["Garlic curry","1,200"]]]],
"Seafood":[
 ["Fish (thalapath)",null,null,[["Devilled fish","2,000"],["Fried fish with chips","2,000"],["Fish finger with chips","2,200"],["Hot butter fish","2,000"],["Chillie fish","2,000"],["Fish stew","2,000"],["Fish curry","2,000"],["Galmalu (100g)","350"]]],
 ["Prawns",null,null,[["Devilled, battered, fried, hot butter, curry or stew","2,400"]]],
 ["Cuttlefish",null,null,[["Devilled","2,200"],["Hot butter","2,400"],["Stew","2,200"],["Curry","2,200"]]],
 ["Octopus",null,null,[["Devilled, stew or curry","2,200"]]]],
"Meat":[
 ["Chicken",null,null,[["Devilled chicken","1,750"],["Fried chicken with onion","1,850"],["Hot butter chicken","2,100"],["Devilled sausage","1,400"],["Chillie chicken","2,100"],["Chicken stew","1,850"],["Chicken curry","1,850"],["Gizzard curry","1,850"]]],
 ["Pork",null,null,[["Devilled, fried with onion, chillie, black pepper, stew or black pork curry","2,400"]]],
 ["Mutton",null,null,[["Devilled, fried, chillie, black pepper, stew or curry","3,200"]]],
 ["Mixed",null,null,[["Mixed grilled","3,000"],["Mixed grilled pot, large portion","3,300"],["Mixed devilled","2,500"],["Mixed stew","2,500"],["Mixed curry","2,500"]]]],
"Eggs, drinks & sweets":[
 ["Egg & omelette",null,null,[["Egg bullseye","120"],["Boiled egg (5 eggs)","600"],["Plain omelette","700"],["Chicken omelette","900"],["Cheese omelette","900"],["Prawns omelette","900"],["Cheese chicken omelette","1,000"]]],
 ["Juice",null,null,[["Orange, lime, watermelon or papaya","300"],["Avocado","350"],["Mixed fruit","450"]]],
 ["Soft drinks",null,null,[["Soda 300ml","180"],["Coca-Cola, Sprite or Pepsi 300ml","180–200"],["Coca-Cola, Sprite or Pepsi 400ml","250"],["Coca-Cola, Sprite or Pepsi 1000ml","400"],["Tonic 400ml / 500ml","250 / 300"],["EGB 200ml / 400ml / 500ml / 1000ml","100 / 200 / 250 / 400"],["Kist fruit juice 500ml / 1000ml","450 / 660"],["Red Bull","900"],["Water 500ml / 1000ml","100 / 200"]]],
 ["Desserts & fruit",null,null,[["Fruit salad","350"],["Ice cream","300"],["Yoghurt","80"],["Watalappan cup","150"],["Jelly pudding","150"],["Biscuit pudding","150"],["Apple or papaya plate","1,000"],["Fruit plate (mixed)","1,900"]]]]
};
const tabs=document.getElementById('tabs'),out=document.getElementById('dishes');
function show(k){
 out.innerHTML=M[k].map(g=>{
  const two=g[1]!==null;
  const head=two?`<div class="cols"><span>${g[1]}</span><span>${g[2]}</span></div>`:'';
  const rows=g[3].map(r=>`<div class="row"><span>${r[0]}</span>${r[2]!==undefined?`<span>${r[1]||'–'}</span><span>${r[2]}</span>`:`<span>${r[1]}</span>`}</div>`).join('');
  return `<div class="grp"><h3>${g[0]}</h3>${head}${rows}</div>`}).join('');
}
Object.keys(M).forEach((k,i)=>{
 const b=document.createElement('button');b.role='tab';b.textContent=k;b.setAttribute('aria-selected',i===0);
 b.onclick=()=>{tabs.querySelectorAll('button').forEach(x=>x.setAttribute('aria-selected',x===b));show(k)};
 tabs.appendChild(b)});
show(Object.keys(M)[0]);
(function(){
 const t=new Date(Date.now()+(new Date().getTimezoneOffset()+330)*60000);
 const m=t.getHours()*60+t.getMinutes(),el=document.getElementById('status'),open=m>=660&&m<1290;
 el.className='status '+(open?'open':'closed');
 el.textContent=open?'Open now · until 9:30 PM':'Closed now · opens 11:00 AM';
})();
document.getElementById('yr').textContent=new Date().getFullYear();
