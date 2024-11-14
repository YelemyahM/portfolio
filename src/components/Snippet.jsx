import style from "../styles/components/Snippet.module.css";
export const Snippet = ({ img, alt, description }) => {
  return (
    <div className={style.snippet}>
      <img src={img} alt={alt} />
    </div>
  );
};
