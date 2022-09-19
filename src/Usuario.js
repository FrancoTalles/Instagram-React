export default function Usuario(props){
    return(
        <div class="usuario">
          <img src={props.imgUser} alt={props.UserName} />
          <div class="texto">
            <strong>{props.User}</strong>
            <span>
              {props.UserName}
              <ion-icon name="pencil"></ion-icon>
            </span>
          </div>
        </div>
    )
}