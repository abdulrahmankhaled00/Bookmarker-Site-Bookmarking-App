
var siteName=document.getElementById('siteName')
var siteUrl=document.getElementById('siteURL')
var submitBtn=document.getElementById('submitBtn')
var sitNameVlidatorContaier=document.getElementById('sitNameVlidatorContaier')
var sitUrlVlidatorContaier=document.getElementById('sitUrlVlidatorContaier')
var modalBtn=document.getElementById('ss')
var allSites=[]


if(localStorage.getItem('allSites') !=null){
    allSites=JSON.parse(localStorage.getItem('allSites'))
    disPlay(allSites)
}

function validat(){
    
    submitBtn.setAttribute('data-bs-toggle','modal')
    submitBtn.setAttribute('data-bs-target','#staticBackdrop')
}
function isValidSiteName(siteName) {
    return siteName.length >= 3;
  }


  
  function isValidSiteURL(siteURL) {
    const urlRegex =   /^(ftp|http|https):\/\/[^ "]+$/;
    const urlRegex2 =   /^(www\.)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;
    return urlRegex.test(siteURL)||urlRegex2.test(siteURL);
  }

  function sitNameVlidator(id,value){
    
    if(id == siteName.id){
        console.log('is in')
    if(isValidSiteName(value)){
        
        siteName.classList.replace('is-invalid','is-valid')
    }else{
        if(siteName.classList.contains('is-valid')){
            siteName.classList.replace('is-valid','is-invalid')
        }else{
            siteName.classList.add('is-invalid')

        }
    }        


} else if(id == siteUrl.id){
    if(isValidSiteURL(value)){

        siteUrl.classList.replace('is-invalid','is-valid')
    }else{
        if(siteUrl.classList.contains('is-valid')){
            siteUrl.classList.replace('is-valid','is-invalid')
        }else{
            siteUrl.classList.add('is-invalid')
        }
        
    }        
}
  }
function addSite(){

    var site={
        name:siteName.value,
        url:siteUrl.value
    }
    
    if(siteName.classList.contains('is-valid')&& siteUrl.classList.contains('is-valid')){
        allSites.push(site)
        localStorage.setItem('allSites',JSON.stringify(allSites))
        disPlay(allSites)
        clearInupts() 
        siteName.classList.remove('is-valid')
        siteUrl.classList.remove('is-valid')
        console.log('222222');
    
        }
    else{
    console.log('333333');
    modalBtn.click
    
    }
   

}

function disPlay(allSites){
    var container=''
    for(var i=0;i<allSites.length;i++){
        container+=`
        <tr>
        <td>${i+1}</td>
        <td>${allSites[i].name}</td>
        <td>
        <a href="${allSites[i].url}" target="_blank"> 
        <button id="vist-vsite" class="vist-site btn px-4"> 
        <i class="fa-solid fa-eye pe-2 "></i>
        <span>visit</span>
    </button>
     </a>
        </td>
        <td><button onclick="deleteSiteBM(${i})"
         id="vist-vsite" class="delete-site  btn px-4"> 
            
            <i class="fa-solid fa-trash-can"></i>
            <span>delet</span>
        </button></td>
    </tr>`
    }
    document.getElementById('tbody').innerHTML=container
}
function deleteSiteBM(siteIndex){
    allSites.splice(siteIndex,1)
    disPlay(allSites)
    localStorage.setItem('allSites',JSON.stringify(allSites))

}

function clearInupts(){
    siteName.value=''
    siteUrl.value=''
}