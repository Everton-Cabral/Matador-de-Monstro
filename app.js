new Vue({
    el: '#app',
    data:{
       
        efeitoJ: 100,
        efeitoM: 100,
        ataqueJ: 0,
        ataqueM: 0,
        textoC: " O JOGADOR GANHOU FORÇA DE",
        textoJ: " O JOGADOR ATACOU O MONSTRO COM",
        textoM: " O MONSTRO ATACOU O JOGADOR COM",
        classeM: "pm",
        classeJ: "pj",
        painel: [],
        menu: false
      
         },
    methods: {
        ataque (){
            
           
            this.ataqueJ =  this.numAleatorio(7,0) 
            this.ataqueM =  this.numAleatorio(11,0)
            
            this.efeitoJ = this.efeitoJ - this.ataqueM
            this.efeitoM = this.efeitoM - this.ataqueJ

            this.painel.unshift({p:this.ataqueJ, texto:this.textoJ, classe:this.classeJ})
            this.painel.unshift({p:this.ataqueM, texto:this.textoM, classe:this.classeM})
          

            this.efeitoJ < 0 ? this.efeitoJ = 0 : this.efeitoJ
            this.efeitoM < 0 ? this.efeitoM = 0 : this.efeitoM

            
           
       },
        ataqueEspecial(){
            
            this.ataqueJ =  this.numAleatorio(11,4) 
            this.ataqueM =  this.numAleatorio(6,0)

            this.efeitoJ = this.efeitoJ - this.ataqueM
            this.efeitoM = this.efeitoM - this.ataqueJ
            
            this.painel.unshift({p:this.ataqueJ, texto:this.textoJ, classe:this.classeJ})
            this.painel.unshift({p:this.ataqueM, texto:this.textoM, classe:this.classeM})


            this.efeitoJ < 0 ? this.efeitoJ = 0 : this.efeitoJ
            this.efeitoM < 0 ? this.efeitoM = 0 : this.efeitoM
            
        },
        curar(){
           
            this.ataqueJ =  this.numAleatorio(6,1) 
            this.ataqueM =  this.numAleatorio(3,0)
            

            this.painel.push(this.ataqueM)
            this.painel.push(this.ataqueJ)

            this.efeitoJ = this.efeitoJ + ( this.ataqueJ - this.ataqueM)

            this.painel.unshift({p:this.ataqueJ, texto:this.textoC, classe:this.classeJ})
            this.painel.unshift({p:this.ataqueM, texto:this.textoM, classe:this.classeM})

            this.efeitoJ > 100 ? this.efeitoJ = 100 : this.efeitoJ
           
            },

            numAleatorio(max, min){

                return  Math.floor(Math.random() * (max - min)) + min
            },
            sair(){
                this.menu = false
                this.efeitoJ = 100
                this.efeitoM = 100
                this.painel = []
            }
        
      
    },
   
}) 