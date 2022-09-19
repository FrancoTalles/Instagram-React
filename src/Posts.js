export default function Posts() {
    function formatarValor(valor){
        return valor.toLocaleString("pt-BR")
    }


  const postagens = [
    {
      imgUsuario: "./assets/img/meowed.svg",
      nomeUsuario: "meowed",
      imagem: "./assets/img/gato-telefone.svg",
      imgCurtida: "./assets/img/respondeai.svg",
      curtida: "respondeai",
      qtdCurtidas: 101153,
    },
    {
      imgUsuario: "./assets/img/barked.svg",
      nomeUsuario: "barked",
      imagem: "./assets/img/dog.svg",
      imgCurtida: "./assets/img/adorable_animals.svg",
      curtida: "adorable_animals",
      qtdCurtidas: 99159,
    },
  ];

  return (
    <div class="posts">
      {postagens.map((p) => (
        <div class="post">
          <div class="topo">
            <div class="usuario">
              <img src={p.imgUsuario} alt={p.nomeUsuario}/>
              {p.nomeUsuario}
            </div>
            <div class="acoes">
              <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
          </div>

          <div class="conteudo">
            <img src={p.imagem} alt="Não carregou" />
          </div>

          <div class="fundo">
            <div class="acoes">
              <div>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
              </div>
              <div>
                <ion-icon name="bookmark-outline"></ion-icon>
              </div>
            </div>

            <div class="curtidas">
              <img src={p.imgCurtida} alt="User" />
              <div class="texto">
                Curtido por <strong>{p.curtida}</strong> e 
                <strong> outras {formatarValor(p.qtdCurtidas)} pessoas</strong>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
