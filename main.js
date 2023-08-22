let form=document.getElementById('formid');
form.addEventListener('submit',onsubmit);
function onsubmit(e){
    e.preventDefault();
    obj={
        price:document.getElementById('price').value,
        dish:document.getElementById('dish').value,
        table:document.getElementById('tables').value
    }
    axios.post('https://crudcrud.com/api/b18e06953d094f4292e1f023afe6b364/OrderDetails',obj)
    .then(response=>{
        displayorderdetails(response.data)
    })
    .catch(err=>console.log(err))
}
window.addEventListener('DOMContentLoaded',()=>{
    axios.get('https://crudcrud.com/api/b18e06953d094f4292e1f023afe6b364/OrderDetails')
  .then(dt=>{
    let len=dt.data.length
    for(let i=0;i<len;i++){
      displayorderdetails(dt.data[i]);
     }
  })
  .catch(err=>console.log(err));
})
function displayorderdetails(obj){
    let dltbutton=document.createElement('button');
    dltbutton.textContent='Delete Order'
if(obj.table=='Table1'){

    let parent1=document.getElementById('ul1');
    let child1=document.createElement('li');
    child1.textContent=`${obj.price} - ${obj.table} - ${obj.dish}`
    child1.appendChild(dltbutton);
    parent1.appendChild(child1)
    dltbutton.onclick=()=>{
        let dltid=obj._id
        axios.delete(`https://crudcrud.com/api/b18e06953d094f4292e1f023afe6b364/OrderDetails/${dltid}`)
        .then(()=>{
            parent1.removeChild(child1)
        })
        .catch(err=>console.log(err))
    }
}
 else if(obj.table=='Table2'){
    let parent2=document.getElementById('ul2');
    let child2=document.createElement('li');
    child2.textContent=`${obj.price} - ${obj.table} - ${obj.dish}`
    child2.appendChild(dltbutton);
    parent2.appendChild(child2)
    dltbutton.onclick=()=>{
        let dltid=obj._id
        axios.delete(`https://crudcrud.com/api/b18e06953d094f4292e1f023afe6b364/OrderDetails/${dltid}`)
        .then(()=>{
            parent2.removeChild(child2)
        })
        .catch(err=>console.log(err))
    }
 }
 else if(obj.table=='Table3'){
    let parent3=document.getElementById('ul3');
    let child3=document.createElement('li');
    child3.textContent=`${obj.price} - ${obj.table} - ${obj.dish}`
    child3.appendChild(dltbutton);
    parent3.appendChild(child3)
    dltbutton.onclick=()=>{
        let dltid=obj._id
        axios.delete(`https://crudcrud.com/api/b18e06953d094f4292e1f023afe6b364/OrderDetails/${dltid}`)
        .then(()=>{
            parent3.removeChild(child3)
        })
        .catch(err=>console.log(err))
    }
 }
}