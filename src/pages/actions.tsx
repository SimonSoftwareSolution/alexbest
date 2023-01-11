import anfahrt from './../images/batur.jpg'

export default function Actions() {
  const date = new Date();
  const day = date.getDate();
  console.log(date)
  let message = "Alex is helping her friends when they need her";
  switch (day) {
    case 8:
      message = "Alex is helping her friends when they need her"
      break;
    case 9:
      message = "Alex is a good kisser & cuddle partner"
      break;
    case 10:
      message = "Alex can cook amazing filled chicken"
      break;
    case 11:
      message = "She is up for almost everything. She tries out new stuff and goes out of her comfort zone straight in my heart"
      
      break;
    case 12:
      message = "Alex is a good kisser & cuddle partner"
      break;
    default:
      break;
  }
  return (
    <div className='container App h-100 d-flex flex-column ' style={{flex: 1}}>
      <div className='card my-3 card-background' >Actions</div>
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