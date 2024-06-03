const nombre = <input type="text" />;
const colorFav = <input type="color" />;
const user = {
  name: nombre,
  imageUrl: "./imgs/yoshi.jpeg",
  imageSize: 90,
  color: colorFav,
};

export function Perfil() {
  return (
    <>
      <h1>Nombre: {user.name}</h1>
      <h1>Mi color Favorito es: {user.color}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={"Foto de " + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />
    </>
  );
}
