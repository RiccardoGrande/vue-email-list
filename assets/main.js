const { createApp } = Vue
createApp({
  data() {
    return {
      url: "https://flynn.boolean.careers/exercises/api/random/mail",
      mails: null
      
    }
  }, 
  mounted(){
    //console.log(axios);
    
    //console.log(axios.get(this.url)); // Promise
    // this.url (uri+request body)
    axios
    .get(this.url)
    .then(response => {
      // prendo l'intero responso (solo i dati) e lo salvo nell'oggetto vue
      console.log(response); // contiene un oggetto 
      //console.log(response.data);
      this.mails = response.data 
     
    })

  }
}).mount('#app')



