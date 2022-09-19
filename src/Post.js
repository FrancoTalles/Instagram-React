import React from "react";

export default function Post(props) {
  const [item, setItem] = React.useState("bookmark-outline");
  const [like, setLike] = React.useState("heart-outline");
  const [likeClass, setlikeClass] = React.useState("");
  const [qtdLikes, setqtdLikes] = React.useState(props.qtdCurtidas);

  function formatarValor(valor) {
    return valor.toLocaleString("pt-BR");
  }

  return (
    <div class="post">
      <div class="topo">
        <div class="usuario">
          <img src={props.imgUsuario} alt={props.nomeUsuario} />
          {props.nomeUsuario}
        </div>
        <div class="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div class="conteudo">
        <img
          onClick={() => {
            if (like === "heart-outline") {
              setLike("heart");
              setlikeClass("red");
              setqtdLikes(qtdLikes + 1);

            } else {
              setLike("heart-outline");
              setlikeClass("");
              setqtdLikes(qtdLikes - 1);
            }
          }}
          src={props.imagem}
          alt="Não carregou"
        />
      </div>

      <div class="fundo">
        <div class="acoes">
          <div>
            <ion-icon
              onClick={() => {
                if (like === "heart-outline") {
                  setLike("heart");
                  setlikeClass("red");
                  setqtdLikes(qtdLikes + 1);
                } else {
                  setLike("heart-outline");
                  setlikeClass("");
                  setqtdLikes(qtdLikes - 1);
                }
              }}
              name={like}
              class={likeClass}
            ></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon
              onClick={() => {
                if (item === "bookmark-outline") {
                  setItem("bookmark");
                } else {
                  setItem("bookmark-outline");
                }
              }}
              name={item}
            ></ion-icon>
          </div>
        </div>

        <div class="curtidas">
          <img src={props.imgCurtida} alt="User" />
          <div class="texto">
            Curtido por <strong>{props.curtida}</strong> e
            <strong> outras {formatarValor(qtdLikes)} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
