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
    case 11:
      message = "Alex breasts are simply perfect"
      break;
    case 12:
      message = "Her little ***** is tight and wet"
      break;
    default:
      break;
  }
  return (
    <div className='container App h-100 d-flex flex-column ' style={{flex: 1}}>
      <div className='card my-3 card-background' >Body</div>
      <div className="card card-background">
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