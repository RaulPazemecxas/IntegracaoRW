//DESENVOLVIDO POR: RAUL PAZEMECXAS DE ANDRADE | DEVOPS

//INSTAGRAM DO PROJETO: @noeprojeto //INSTAGRAM PESSOAL: @raulpazemecxas

//https://www.instagram.com/noeprojeto/

//Contribua com a causa animal: Se esse código te ajudar de alguma forma, por favor, considere auxiliar no projeto ADOTE ARCA DE NOE com QUALQUER VALOR;

//PIX: adotearcadenoe@gmail.com

//favor, consultar as redes sociais do projeto para validar a vericidade antes da doação! Sua segurança em primeiro lugar sempre.

//Mantenedor(a) do projeto ARCA DE NOE: +55 16 99254-9131

const express = require("express");
const venom = require("venom-bot");

venom
  .create({
    session: "API-DEVOPS-RaulP",
    catchQR: (base64Qr, asciiQR) => {
      console.log(asciiQR);
    },
  })
  .then((client) => start(client))
  .catch((error) => {
    console.log("Erro ao iniciar o cliente Venom:", error);
  });

function start(client) {
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.listen(4000, () => {
    console.log("Servidor rodando na porta 4000");
  });

  const isGroup = (chatid) => {
    return chatid.toString().startsWith("55") && chatid.toString().length === 12;
  };
  // Rota para enviar mensagens
  app.post("/api/message", async (req, res, next) => {
    const chatid = req.body.number;
    const message = req.body.message;

    try {
      const target = isGroup(chatid) ? `${chatid}@c.us` : `${chatid}@g.us`;
      await client.sendText(target, message);
      res.json(req.body);
    } catch (error) {
      console.error("Erro ao enviar a mensagem:", error);
      res.status(500).json({ error: "Erro ao enviar a mensagem" });
    }
  });

  // Resposta automática ao receber a mensagem "Oi" ou "1"
  client.onMessage((message) => {
    const lowerCaseMessage = message.body.toLowerCase(); // Converter a mensagem para minúsculas

    if (lowerCaseMessage === "oi") {
      const response = "Bem-vindo! Esse é o bot da infraestrutura, digite 1 para iniciar o atendimento!";
      client.sendText(message.from, response).catch((error) => {
        console.error("Erro ao enviar a resposta:", error);
      });
    } else if (lowerCaseMessage === "1") {
      const response = "Certo, irei iniciar o seu atendimento e o envio dos alertas!";
      client.sendText(message.from, response).catch((error) => {
        console.error("Erro ao enviar a resposta:", error);
      });
    }
  });

}
