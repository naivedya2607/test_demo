import React ,{Component} from 'react';

const im='https://image.tmdb.org/t/p/w500/';
class Show extends Component {

  render(){

    let userdata=this.props.userData;
    if(userdata.notFound=== 0)
    {
      return(
      <h2>Entered Movie name is Invalid Please Try Again!!!!</h2>
    );
    }
    else {
      return(
        <div>
        {userdata.result.map(ob =>
          <div className="showing">
          <br/>
                <img className="github-profile-info" src={`${im}${ob.poster_path}`} />
          <br />
              <table striped bordered hover variant="dark">
                <tr>
                  <th>Movie Name:</th>
                  <td>{ob.original_title}</td>
                </tr>
                <tr>
                <th>Rating:</th>
                <td>{ob.vote_average}</td>
                </tr>
                <tr>
                <th>Release Date:</th>
                <td>{ob.release_date}</td>
                </tr>
                <tr>
                <th>Overview:</th>
                <td>{ob.overview}</td>
                </tr>
              </table>
              <img className="more" src={`${im}${ob.backdrop_path}`} />
              <h4>.</h4>
              <br/>
        </div>
        )
      }
          </div>
      );
    }
    }
}
export default Show;
