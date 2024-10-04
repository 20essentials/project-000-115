import '../Styles/GridCols.css';

const GridCols = ({ data }) => {
  return (
    <main className='C2-Main'>
      <section className="subcontainer">
        {data.map((el,index) => {
          return (
            <div key={index} className='item'>
              <img src={el} />
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default GridCols;
