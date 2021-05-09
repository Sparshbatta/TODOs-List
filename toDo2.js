function display()
{
    let tableData='';
    if(localStorage.getItem('itemsJson')!=null)
    {
        itemJsonArrayStr=localStorage.getItem('itemsJson');
        itemJsonArray=JSON.parse(itemJsonArrayStr);
        itemJsonArray.forEach((element,index) => {
            tableData+=`   <tr>
            <th scope="row">${index+1}</th>
            <td>${element[0]}</td>
            <td>${element[1]}</td>
            <td><button class="btn btn-sm btn-primary" onclick="removed(${index})">Delete</button></td>
          </tr>
                      `;
        
    
        });
        let tableBody=document.getElementById('tableBody');
        tableBody.innerHTML=tableData;
        
    }
   
    
}

function removed(itemIndex)
{
    let ItemJsonString=localStorage.getItem('itemsJson')
    let itemJsonArray=JSON.parse(ItemJsonString)
    itemJsonArray.splice(itemIndex,1)
    console.log(itemIndex)
    console.log(itemJsonArray)
    localStorage.setItem('itemsJson',JSON.stringify(itemJsonArray));
    display();
}


function add()
{
    let title=document.getElementById('title').value;
    let description=document.getElementById('description').value
    if(localStorage.getItem('itemsJson')==null)
    {
        itemJsonArray=[];
        itemJsonArray.push([title,description]);
        localStorage.setItem('itemsJson',JSON.stringify(itemJsonArray));
    }
    else
    {
        itemJsonArrayStr=localStorage.getItem('itemsJson');
        itemJsonArray=JSON.parse(itemJsonArrayStr)
        itemJsonArray.push([title,description])
        localStorage.setItem('itemsJson',JSON.stringify(itemJsonArray));
    }
    display();
}

let add2=document.getElementById('add');
add2.addEventListener('click',add);
display();
console.log('TODO2')

let clear=document.getElementById('clear');
clear.addEventListener('click',clearList);

function clearList()
{
    if(confirm("Do you really want to clear the list?"))
    {
    document.getElementById('tableBody').innerHTML=''
    localStorage.clear();
    }
    
}