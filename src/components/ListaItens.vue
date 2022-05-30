a<template>
    <div>
        <item
            v-for="(item, indice) in itens" 
            :key="indice"
            :dados="item"
        />
    </div>
</template>

<script>
import Item from '@/components/Item.vue'
import { mapState } from 'vuex'

export default {
    name: 'ListaItens',
    components: { 
        Item
    },
    props: {
        tipo: String
    },
    computed: {
        ...mapState({
            enfermeiros: state => state.enfermeiros,
            socorristas: state => state.socorristas,
            medicos: state => state.medicos,
        }),
        itens() {
            switch(this.tipo) {
                case 'enfermeiros': return this.enfermeiros
                case 'socorristas': return this.socorristas
                case 'medicos': return this.medicos
            }
            return [];
        }
    }
}
</script>