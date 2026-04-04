import "../styles/Loading.css";

export const Loading = () => {
  return (
    <div className="loader">
      <img
        src="https://45.media.tumblr.com/f1baaf64498987c3e60aeab3a2142952/tumblr_mt74youk9P1r5n0t0o1_250.gif"
        alt="Cargando..."
      />
      <p>Cargando...</p>
    </div>
  );
};
