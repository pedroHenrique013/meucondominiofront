export default async function handler(req, res) {
    const { nome, cpf, email, fone, apartamento, bloco, senha, confirmasenha } = req.body;
  
    try {
      const response = await fetch('http://localhost:8080/cadastro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nome, cpf, email, fone, apartamento, bloco, senha, confirmasenha }),
      });
  
      const data = await response.json();
  
      res.status(200).json(data);
    } catch (error) {
      console.error('Erro ao enviar dados para a API:', error);
      res.status(500).json({ mensagem: 'Erro ao enviar dados para a API' });
    }
  }
