import React ,{Component} from 'react';
import Show from './Show';
import Search from './Search';

const api='https://api.themoviedb.org/3/search/movie?api_key=82e8d48ddb324bae84eeb7a2a9ae3695'

class Movie extends Component {
constructor(props){
  super(props);

  this.state = {
    title:'batman',
    result:[],
    notFound:'',
 };
}

getProfile(title){
  let finalURL=`${api}&query=${title}`;
  fetch(finalURL)
  .then((res)=>res.json())
  .then((data)=>{
    this.setState({
      title:title,
      notFound:data.total_results,
      result:data.results,
    });
  })

  .catch((error) => console.log("THERE IS AN ERROR IN FETCHING DATA"));
}
  render(){
    return(
      <div>
        <section id="card">
          <Search  searchProfile={this.getProfile.bind(this)}/>
          <Show
          userData={this.state}/>
        </section>
      </div>
    );
  }
}
export default Movie;
