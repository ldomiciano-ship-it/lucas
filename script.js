
// Banco de dados simulado de produtos do Paraná
const produtos = [
    {
        id: 1,
        nome: "Café Especial Gourmet",
        produtor: "Sítio São Roque",
        regiao: "Norte",
        preco: "R$ 32,00 / 500g",
        imagem: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 2,
        nome: "Queijo Colonial Artesanal",
        produtor: "Laticínios Alvorada",
        regiao: "Sudoeste",
        preco: "R$ 45,00 / Kg",
        imagem: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 3,
        nome: "Mel de Abelha Puro",
        produtor: "Apacel Cooperativa",
        regiao: "Oeste",
        preco: "R$ 28,00 / 500g",
        imagem: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 4,
        nome: "Cesta de Hortaliças Orgânicas",
        produtor: "Chácara Verde Viva",
        regiao: "RMC",
        preco: "R$ 35,00 / Unid",
        imagem: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 5,
        nome: "Feijão Preto Tipo 1",
        produtor: "Cooperativa AgroOeste",
        regiao: "Oeste",
        preco: "R$ 8,50 / Kg",
        imagem: "https://images.unsplash.com/photo-1551462147-ff29053bfc14?auto=format&fit=crop&w=400&q=80"
    }
];

let carrinhoContador = 0;

// Função para renderizar os produtos na tela
function renderizarProdutos(produtosFiltrados) {
    const container = document.getElementById('produtos-container');
    container.innerHTML = ''; // Limpa o container

    if(produtosFiltrados.length ===
