const { createApp } = Vue
createApp({
  data() {
    return {
      url: "https://flynn.boolean.careers/exercises/api/random/mail",
      mails: null,
      activeMail: 0
      
    }
  }, 
  mounted(){
    
    for (let index = 0; index < 10; index++) {
      axios
      .get(this.url)
      .then(response => {
       
        console.log(response); 

        this.mails[this.activeMail].push({

          response: url
        })
       
      })
      
    }
   

  }
}).mount('#app')



