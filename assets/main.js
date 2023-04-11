const { createApp } = Vue
createApp({
  data() {
    return {
      url: "https://flynn.boolean.careers/exercises/api/random/mail",
      mails: null
      
    }
  }, 
  mounted(){
    
    for (let index = 0; index < 10; index++) {
      axios
      .get(this.url)
      .then(response => {
       
        console.log(response); 

        this.mails.push({
          
        })
       
      })
      
    }
   

  }
}).mount('#app')



