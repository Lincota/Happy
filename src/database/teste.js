const db = require("./db");
const Database = require("./db");
const saveOrphanage = require("./saveOrphanages");

Database.then(async (db) => {
  // inserir dados na table orphanages
  await saveOrphanage(db, {
    lat: "-21.0781714",
    lng: "-49.5449262",
    name: "Lar do lincota",
    about: "amor e carinho",
    whatsapp: "17997833924",
    images: [
      "https://images.unsplash.com/photo-1590966473477-e74b95a0c407?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

      "https://images.unsplash.com/photo-1573924436756-128cf1f6387a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
    ].toString(),
    instructions: "nao quebrem nada",
    opening_hours: "visita das 8h as 18h",
    open_weekends: "1",
  });

  //consultar dados da table orphanages
  const selectdOrphanage = await db.all("SELECT * FROM orphanages");
  console.log(selectdOrphanage);

  // //consultar orphanage
  // const orphanage = await db.all('SELECT * FROM orphanages WHERE id ="2"');
  // console.log(orphanage);

  //deletar orphanage
  //console.log(await db.run("DELETE FROM orphanages"))
});
