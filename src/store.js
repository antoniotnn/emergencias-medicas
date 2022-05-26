import Vuex from 'vuex';


export default new Vuex.Store({
    state: {
        titulo: 'Emergências Médicas',
        equipe: {
            enfermeiro: 'Nome do enfermeiro',
            socorrista: 'Nome do socorrista',
            medico: 'Nome do médico',
            carro: 'Placa do carro',
            telefone: '+55 91 99999-1111',
            kitDeReanimacao: 'Kit 0001',
        },
    }
});