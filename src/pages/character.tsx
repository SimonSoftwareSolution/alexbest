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
      case 11:
        message = "Alex is always positive and smiles a lot. I can not be in a bad mood for more than 10 minutes while she is around."
        break;
      case 12:
        message = "She trusts people in advance instead of questioning everyone"
        break;
      default:
        break;
    }
    return (
      <div className='container App h-100 d-flex flex-column ' style={{flex: 1}}>
        <div className='card my-3 card-background' >Character</div>
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

