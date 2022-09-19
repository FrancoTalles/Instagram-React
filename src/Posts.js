import Post from "./Post";

export default function Posts() {
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
        <Post
          imgUsuario={p.imgUsuario}
          nomeUsuario={p.nomeUsuario}
          imagem={p.imagem}
          imgCurtida={p.imgCurtida}
          curtida={p.curtida}
          qtdCurtidas={p.qtdCurtidas}
        />
      ))}
    </div>
  );
}
