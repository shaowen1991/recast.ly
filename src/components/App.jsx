class App extends React.Component {
  constructor(props) {
    super(props);
    //initialize states
    this.state = {
      currentPlayState: window.exampleVideoData[0],
      playListState: window.exampleVideoData,
    };
    this.onClickPlayListHandler = this.onClickPlayListHandler.bind(this);
    this.searchNewVideos = this.searchNewVideos.bind(this);
  }

  componentDidMount() {
    this.searchNewVideos('overwatch');  
  }

  onClickPlayListHandler(video) {
    console.log('clicked play list');
    this.setState({
      currentPlayState: video
    });
  }

  searchNewVideos(querys) {
    var options = {
      key: window.YOUTUBE_API_KEY,
      query: querys,
      max: 7
    };
    this.props.searchYouTube(options, (data) => {
      this.setState({
        currentPlayState: data[0],
        playListState: data
      });
    });
  }

  render() {
    console.log('render');
    return (
      <div>
        <Nav onClickSearchBar={this.searchNewVideos}/>
        <div className="media">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentPlayState}/>
          </div>
          <div className="col-md-5">
            <VideoList 
              videos={this.state.playListState}
              onClickPlayListHandler={this.onClickPlayListHandler} 
            />
          </div>
        </div>
      </div>
    );
  }
}
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
