import { OptionSelectProps } from "@/hooks/useSelect";

export const motiveOptions: OptionSelectProps[] = [
    { id: 1, name: "Pessoal", enum: "pessoal" },
    { id: 2, name: "Crescimento", enum: "crescimento" },
    { id: 3, name: "Estudos", enum: "estudos" },
    { id: 4, name: "Família", enum: "familia" },
    { id: 5, name: "Matrimonial", enum: "matrimonial" },
    { id: 6, name: "Conversão", enum: "conversao" },
    { id: 7, name: "Missões", enum: "missoes" },
    { id: 8, name: "Viagem", enum: "viagem" },
    { id: 9, name: "Finanças", enum: "financas" },
    { id: 10, name: "Trabalho", enum: "trabalho" },
    { id: 11, name: "Saúde", enum: "saude" },
    { id: 12, name: "Igreja", enum: "igreja" },
    { id: 13, name: "Ação de Graças", enum: "acao_de_gracas" },
    { id: 14, name: "Nação", enum: "nacao" },
    { id: 15, name: "Outro", enum: "outro" }
];

export const activeData = [{name: 'Sim', enum: 'SIM', id: 1}, {name: 'Não', enum: 'NÃO', id: 2}];

export const positionData = [
    {
        "id": 10,
        "name": "Pastor Presidente",
        "enum": "PASTOR_PRESIDENTE"
    },
    {
        "id": 1,
        "name": "Pastor",
        "enum": "PASTOR"
    },
    {
        "id": 9,
        "name": "Co-pastor",
        "enum": "CO_PASTOR"
    },    
    {
        "id": 2,
        "name": "Diácono(a)",
        "enum": "DIACONO"
    },
    {
        "id": 3,
        "name": "Líder de Departamento",
        "enum": "LIDER_DEPARTAMENTO"
    },
    {
        "id": 4,
        "name": "Professor(a) de Escola Bíblica",
        "enum": "PROFESSOR_ESCOLA_BIBLICA"
    },
    {
        "id": 5,
        "name": "Secretário(a)",
        "enum": "SECRETARIO"
    },
    {
        "id": 6,
        "name": "Tesoureiro(a)",
        "enum": "TESOUREIRO"
    },
    {
        "id": 7,
        "name": "Músico",
        "enum": "MUSICO"
    },
    {
        "id": 8,
        "name": "Voluntário(a)",
        "enum": "VOLUNTARIO"
    }
]