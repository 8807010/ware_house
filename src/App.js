import s from './App.module.scss';
import rectHeader from "./components/assets/images/rectHeader.png";

function App() {
  return (

    // объекты для CardCollection
  const data0 = {
    img: pots,
    alt: 'pots',
    title: 'SEVEN POTS'
  }
  const data1 = {
    img: shakers,
    alt: 'shakers',
    title: 'SHAKERS'
  }
  const data2 = {
    img: authentics,
    alt: 'authentics',
    title: 'AUTHENTICS'
  }

  // объекты для CardProduct
  const fact0 = {
    name: 'Kettle Thermo Pot',
    price: '274.50 $',
    span: 'ADD TO FAVS'
  }

  const fact1 = {
    name: 'Salt & Pepper  Grinder',
    price: '75.50 $',
    span: 'FAVED'
  }

  const fact2 = {
    name: 'Generic Oak Bowl',
    price: '87.49 $',
    span: 'FAVED copy'
  }

  // объекты для CardAdvice
  const record0 = {
    foto: fotoNOOR,
    caption: 'BY NOOR JAHAAN',
    title: 'Tea  O’Clock'
  }

  const record1 = {
    foto: fotoAMISHA,
    caption: 'BY AMISHA PATEL',
    title: 'Ebony & Ivory'
  }

  const record2 = {
    foto: fotoKARINA,
    caption: 'BY KARINA KAPOOR',
    title: 'Back to Basics'
  }
    <>
    <div className={s.app}>

      <div className={s.cork}>
        <img className={s.headerFoto} src={rectHeader} alt="header rect"/>
        
        <h3 className={s.price}>Cork Salt & Pepper 45.50  $</h3>
      </div>



      <div className={s.goodThings}>

      </div>

      <div className={s.nav}>

      </div>

      <div className={s.sevenPots}>
        









      </div>

      <div className={s.teaOclock}>

      </div>

      <div className={s.rooms}>

      </div>

      <div className={s.ebony}>

      </div>

      <div className={s.shakers}>

      </div>

      <div className={s.authentics}>

      </div>

      <div className={s.backToBasis}>

      </div>

      <footer>

      </footer>

    </div>
    </>
  );
}

export default App;
