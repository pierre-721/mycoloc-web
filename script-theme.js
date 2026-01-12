(function(){
    try{
      if(localStorage.getItem('mycoloc-theme') === 'light'){
        document.documentElement.classList.add('light');
      }
    }catch(e){}
  })();

