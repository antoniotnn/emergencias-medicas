<template>
  <div>
    <div class="row">
      <div class="col">
        <h5 :class="corTitulo"><i class="bi-boxes me-2"></i>{{ tituloCustomizadoLocal }}</h5>
      </div>
    </div>
    <div class="row">
      <div class="col-8">
        <p>Enfermeiro: {{ enfermeiro }}</p>
        <p>Socorrista: {{ socorrista }}</p>
        <p>Médico: {{ medico }}</p>
        <p>Carro: {{ carro }}</p>
        <p>Telefone: {{ telefone }}</p>
        <p>Kit de reanimação: {{ kitDeReanimacao }}</p>
      </div>
      <div class="col-4 text-center">
        <div class="row">
          <div class="col">
            <img class="img-fluid" :src="require(`@/assets/ambulancias/${imgAmbulancia}`)">
          </div>
        </div>
        <div class="row mt-3">
          <div class="col">
            <button type="button" class="btn btn-primary">Montar equipe</button>
          </div>
        </div>              
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'ConfiguracaoEquipe',
  data: () => ({
    titulo: 'Configuração da Equipe'
  }),
  //computed: mapState(['equipe']),
  /*computed: {
    e() {
      return this.$store.state.equipe;
    }
  }*/
  computed: {
    /*
    ...mapState({
      e: state => state.equipe, // 'e' poderia ser chamado do nome que quisesse, e usar no template.
  
      tituloCustomizadoLocal(state) {
        return `${this.titulo} - ${state.equipe.carro}`;
      }
    }),
    */
    ...mapState({
      enfermeiro: state => state.equipe.enfermeiro,
      socorrista: state => state.equipe.socorrista,
      medico: state => state.equipe.medico,
      carro: state => state.equipe.carro,
      telefone: state => state.equipe.telefone,
      kitDeReanimacao: state => state.equipe.kitDeReanimacao,
  
      tituloCustomizadoLocal(state) {
        return `${this.titulo} - ${state.equipe.carro}`;
      }
    }),

    corTitulo() {
      let testeLogico = true;

      if(testeLogico) {
        return 'text-danger';
      }
      return 'text-primary';
    },

    imgAmbulancia() {
      if(this.kitDeReanimacao) {
        return 'uti.png';
      }

      if(this.carro) {
        return 'simples.png';
      }
      
      return 'indefinida.png';
    }

  }
  
}
</script>
