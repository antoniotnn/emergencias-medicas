import Vuex from 'vuex';


export default new Vuex.Store({
    state: {
        titulo: 'Emergências Médicas',
        equipe: {
            enfermeiro: '',
            socorrista: '',
            medico: '',
            carro: '',
            telefone: '',
            kitDeReanimacao: '',
        },
        enfermeiros: [],
        socorristas: [],
        medicos: [],
        equipamentos: {
            carros: [],
            telefones: [],
            kitsDeReanimacao: []
        }
    },
    getters: {
        totalEnfermeiros(state) {
            return state.enfermeiros.length;
        },
        socorristasPorTurno(state) { //closure (javascript)
            // return (turno) => {
            //     if(!turno) {
            //         return state.socorristas;    
            //     }
            //     return state.socorristas.filter(s => s.turno === turno);
            // };
            return turno => !turno ? state.socorristas : state.socorristas.filter(s => s.turno === turno);
        },
        totalSocorristas: state => state.socorristas.length,
        totalSocorristasPorTurno: (state, getters) => turno => getters.socorristasPorTurno(turno).length,
    },
    mutations: {
        //setItemEquipe: (state, item) => {
        //setItemEquipe: (state, payload) => {
        //setItemEquipe: (state, { item }) => {
        setItemEquipe: (state, item) => {

            //console.log(payload);
            //let item = payload.item
            
            let t = item.tipo;
            let d = item.dados;
            
            if(t == 'enfermeiros') state.equipe.enfermeiro = d.nome;
            if(t == 'socorristas') state.equipe.socorrista = d.nome;
            if(t == 'medicos') state.equipe.medico = d.nome;
            if(t == 'carros') state.equipe.carro = d.placa;
            if(t == 'telefones') state.equipe.telefone = d.telefone;
            if(t == 'kits-de-reanimacao') state.equipe.kitDeReanimacao = d.kit;
            
        },

        setEnfermeiros: (state, payload) => {
            state.enfermeiros = payload;
            //console.log('Estamos em uma mutation', payload);
        },
        setSocorristas: (state, payload) => {
            state.socorristas = payload;
        },
        setMedicos: (state, payload) => {
            state.medicos = payload;
        },
        // setCarros: (state, payload) => {
        //     state.carros = payload.carros;
        //     console.log(payload);
        // }
        // setCarros: (state, { carros }) => {
        //     state.equipamentos.carros = carros;
        //     console.log(carros);
        // }
        setCarros: (state, payload) => {
            state.equipamentos.carros = payload;
        },
        //setTelefones: (state, { telefones }) => {
        setTelefones: (state, payload) => {
            state.equipamentos.telefones = payload;
        },
        setKitsDeReanimacao: (state, payload) => {
            state.equipamentos.kitsDeReanimacao = payload;
        }
    },
    actions: {
        //adicionarEquipamentos(context, payload) {
        adicionarEquipamentos(context, { carros, kitsDeReanimacao, telefones}) {
            // console.log(payload.carros);
            // console.log(payload.kitsDeReanimacao);
            // console.log(payload.telefones);
            // console.log(carros);
            // console.log(kitsDeReanimacao);
            // console.log(telefones);

            context.commit('setCarros', carros);
            //processamento assíncrono
            context.commit('setTelefones', telefones);
            //processamento assíncrono
            //diversas regras de negócio
            context.commit('setKitsDeReanimacao', kitsDeReanimacao);
        }
    }
});