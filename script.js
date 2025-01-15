const btnEl=document.querySelector(".btn");
const paraEl=document.querySelector("p");
const apiKey="6l1OsJFj+zbGvr5R/ORyPQ==AAJ1EvGWWJ4kyKW1";

const options={
    method:"GET",
    headers:{
        "X-Api-Key":apiKey,
    },
}

const apiUrl="https://api.api-ninjas.com/v1/dadjokes";



 btnEl.addEventListener("click",getJoke);

    async function getJoke()
{

    try {

  paraEl.innerText="Updaing...";
  btnEl.disbaled=true;
  btnEl.innerText="Loading..."

  const response=await fetch(apiUrl,options);

  const data=await response.json();

  btnEl.disbaled=false;
  btnEl.innerText="Tell Me A Joke"

  paraEl.innerHTML=data[0].joke;
        
    } catch (error) 
    {
        console.log(error);

        paraEl.innerText="An error occured";
        btnEl.disbaled=false;
        btnEl.innerText="Tell Me A Joke"
        
    }
  

//   setInterval(getJoke,1000*5);

}
    






