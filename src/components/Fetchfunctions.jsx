


export async function fetchmultipla(artisti){
    try {
      const fetchPromises = artisti.map((artist) =>
        fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + artist, {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': '8bcbc2b046msh3dcbb714409d7fep1e2e85jsn9003429acc6f',
            'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
          }
        })
        .then(response => {
          if (response.ok) {
            console.log(artist);
            return response.json();
          } else {
            console.log("Errore nella fetch", response.statusText);
            throw new Error("Errore nella fetch");
          }
        })
        .catch(error => {
          console.error("Errore nella fetch", error);
          throw error;
        })
      );
  
      const results = await Promise.all(fetchPromises);
      return results
    } catch (error) {
      console.error("Errore generale nella fetch", error);
    }
  }
  export async function fetchSingola(query,valore){
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/${query}${valore}`,
        {
          method: "GET",
          headers: {
            "X-RapidAPI-Key": "8bcbc2b046msh3dcbb714409d7fep1e2e85jsn9003429acc6f",
            "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
          },
        }
      );
  
      
        
        const data=await  response.json()
        if(data){
         return data
       
      } else {
        console.log("Errore nella fetch", response.statusText);
        throw new Error("Errore nella fetch");
      }
    } catch (error) {
      console.error("Errore nella fetch", error);
      throw error;
    }
  }

  export function numRandomartist(artist){
    let randomartist=[]
    while (randomartist.length < 4) {
        
            let numrandom=Math.floor(Math.random() * artist.length)
           
        if (!randomartist.includes(artist[numrandom])) {
          // checks if the artist is not already present in the array
         randomartist.push(artist[numrandom]) // pushes the artist in the array
        }
      }
      return randomartist
  }