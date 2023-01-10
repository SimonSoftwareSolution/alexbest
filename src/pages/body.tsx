import anfahrt from './../images/batur.jpg'

export default function Body() {
  const date = new Date();
  const day = date.getDate();
  console.log(date)
  let message = "Alex skin is insane soft";
  switch (day) {
    case 8:
      message = "Alex skin is insane soft"
      break;
    case 9:
      message = "Alex has the perfect height"
      break;
    case 10:
      message = "Alex breasts are perfect"
      break;
    default:
      break;
  }
  return (
    <div className='container App'>
      <div className='card my-3' style={{borderColor: 'white'}}>Body</div>
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