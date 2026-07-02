import "./marque.css";
const Marque = ({ arr , dir="forwards"}) => {
  const doubled = [...arr, ...arr];
  return (
    <>
      <div className="ticker-wrap">
        <div className={`ticker-track`} style={{"--direction" : dir}}>
          {doubled.map((item, i) => (
            <span key={i} className={`ticker-item`}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};
export default Marque;
