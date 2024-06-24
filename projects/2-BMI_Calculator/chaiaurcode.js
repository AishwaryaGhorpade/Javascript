 const form=document.querySelector('form')
 form.addEventListener('submit',function(e){
    e.preventDefault(); //for not submiting to server
    //when user click on submit button using form will be submitted to server
    //so here he are not using any server to prevent that use preventDefault() method
  
    const height=parseInt(document.querySelector("#height").value);
    const weight=parseInt(document.querySelector("#weight").value);
    const results=document.querySelector("#results");
    const output=document.querySelector("#output");

    if(height=="" || height<0 || isNaN(height))
    {
        results.innerHTML=`Please give a valid height ${height}`;
    }
    else if(weight=="" || weight<0 || isNaN(weight))
    {
        results.innerHTML=`Please give a valid weight ${weight}`;
    }
    else{
        const bmi=(weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML=`<span>${bmi}</span>`;
         if(bmi<18.6)
        {
            output.innerHTML=`<span>Under Weight</span>`;     
        }
        else if(bmi>=18.6 && bmi<24.9)
        {
            output.innerHTML=`<span>Normal range</span>`;     
        }
        else{
            output.innerHTML=`<span>Over Weight</span>`;
        }
    }
 });