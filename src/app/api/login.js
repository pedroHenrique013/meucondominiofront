
export default async function handler(req, res) {
  const { email, senha } = req.body;

  try {
    const response = await fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, senha }),
    });

    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    console.error('Erro ao enviar dados para a API:', error);
    res.status(500).json({ mensagem: 'Erro ao enviar dados para a API' });
  }
}
