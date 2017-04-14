var Search = ({onClickSearchBar}) => (
  <form className="search-bar form-inline">
    <input 
      className="form-control" 
      type="text"
    />
    <button 
      className="btn hidden-sm-down"
      onClick={(e) => {
        onClickSearchBar(document.getElementsByClassName('form-control')[0].value);
        e.preventDefault();
      }}
    >
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </form> 
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
