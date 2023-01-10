import anfahrt from './../images/batur.jpg'

export default function Character() {
    const date = new Date();
    const day = date.getDate();
    console.log(date)
    let message =  "Unless Alex is a very strong women, she can be very soft and understanding when speaking about feelings ";
    switch (day) {
      case 8:
        message = "Unless Alex is a very strong women, she can be very soft and understanding when speaking about feelings "
        break;
      case 9:
        message = "Alex is very decisive, she knows what she wants and what not"
        break;
      case 10:
        message = "Alex "
        break;
      default:
        break;
    }
    return (
      <div className='container App'>
        <div className='card my-3' style={{borderColor: 'white'}}>Character</div>
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

