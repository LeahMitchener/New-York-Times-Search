function getSearch() {
  let searchTerms = $("#search").text();
  let records = $("#records").text();
  let startYear = $("#startYear").text();
  let endYear = $("#endYear").text();

  return {
    Term: searchTerms,
    StartDate: records,
    EndDate: startYear,
    NumArticles: endYear
  };
}

$(document).ready(function() {
  $("#searchButton").on("click", function(e) {
    console.log("here");
    btnMostrarSeccion($(this));
    e.preventDefault();
    var search = getSearch();
    console.log(search);
  });
});
