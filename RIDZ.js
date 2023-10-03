//DESENVOLVIDO POR: RAUL PAZEMECXAS DE ANDRADE | DEVOPS

//INSTAGRAM DO PROJETO: @noeprojeto //INSTAGRAM PESSOAL: @raulpazemecxas

https://www.instagram.com/noeprojeto/

//Contribua com a causa animal: Se esse código te ajudar de alguma forma, por favor, considere auxiliar no projeto ADOTE ARCA DE NOE com QUALQUER VALOR;

//PIX: adotearcadenoe@gmail.com

//favor, consultar as redes sociais do projeto para validar a vericidade antes da doação! Sua segurança em primeiro lugar sempre.

//Mantenedor(a) do projeto ARCA DE NOE: +55 16 99254-9131


const venom = require('venom-bot');

venom.create({ session: 'API-devops-RZAP' })
  .then(async (client) => {
    const groups = await client.getAllChatsGroups();
    console.log('Groups:', groups);
    client.close();
  })
  .catch((error) => {
    console.log(error);
  });
