import anfahrt from './../images/batur.jpg'

export default function Packliste() {
  const date = new Date();
  const day = date.getDate();
  console.log(date)
  let message = "Alex is helping her friends when they need her";
  switch (day) {
    case 8:
      message = "Alex is helping her friends when they need her"
      break;
    default:
      break;
  }
  return (
    <div className='container App'>
      <div className='card my-3' style={{borderColor: 'white'}}>Actions</div>
      <div className="card">
        <img src={anfahrt} alt='Logo'/>
        <div className="card-body">
          <h5 className="card-title">Todays special</h5>
          <p className="card-text">
            {message}
          </p>
        </div>
    </div>
    </div>
  );
  }