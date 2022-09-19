export default function Sugestoes() {
  const usersSugeridos = [
    {
      imgUser: "./assets/img/bad.vibes.memes.svg",
      username: "bad.vibes.memes",
      userStatus: "Segue você",
    },
    {
      imgUser: "./assets/img/chibirdart.svg",
      username: "chibirdart",
      userStatus: "Segue você",
    },
    {
      imgUser: "./assets/img/razoesparaacreditar.svg",
      username: "razoesparaacreditar",
      userStatus: "Novo no Instagram",
    },
    {
      imgUser: "./assets/img/adorable_animals.svg",
      username: "adorable_animals",
      userStatus: "Segue você",
    },
    {
      imgUser: "./assets/img/smallcutecats.svg",
      username: "smallcutecats",
      userStatus: "Segue você",
    },
  ];

  return (
    <div class="sugestoes">
      <div class="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>
      {usersSugeridos.map((u) => (
        <div class="sugestao">
          <div class="usuario">
            <img src={u.imgUser} alt={u.username}/>
            <div class="texto">
              <div class="nome">{u.username}</div>
              <div class="razao">{u.userStatus}</div>
            </div>
          </div>

          <div class="seguir">Seguir</div>
        </div>
      ))}
    </div>
  );
}
