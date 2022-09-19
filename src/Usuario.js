import React from "react"

export default function Usuario(props){
  const [nome, setNome] = React.useState(props.UserName);
  const [img, setImg] = React.useState(props.imgUser);

  function alteraNome (){
    let nome = prompt("Para qual nome quer mudar?");
    while(nome === null || nome === undefined || nome === ""){
      alert("Nome não definido");
      nome = prompt("Para qual nome quer mudar?");
    }
    return nome;
  }

  function alteraImg (){
    let link = prompt("Insira o link da imagem para alterar");
    while (link === null || link === undefined || link === ""){
      alert("Link não definido");
      link = prompt("Insira o link da imagem para alterar");
    }
    return link
  }



    return(
        <div class="usuario">
          <img onClick={() => setImg(alteraImg)} src={img} alt={props.UserName} />
          <div class="texto">
            <strong>{props.User}</strong>
            <span>
              {nome}
              <ion-icon onClick={() => setNome(alteraNome)} name="pencil"></ion-icon>
            </span>
          </div>
        </div>
    )
}