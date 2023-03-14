const $gifs = $("#gifs");
const $searchInput = $("#searchInput");
// Appends the result to the div element.
function addGif(results){
    let countResults = results.data.length;
    if (countResults){
        let randomIndex = Math.floor(Math.random() * countResults);
        let $newCol = $("<div>", { class: "col-md-4 col-12 mb-4" });
        let $newGif = $("<img>", { src: results[randomIndex].images.original.url, class: "w-100"});
        $newCol.append($newGif);
        $gifs.append($newCol);
    }
}
// Handles the search of the api and clears the search bar.
$("form").on("submit", async function(e){
    e.prevent.default();
    let searchTerm = $searchInput.val();
    $searchInput.val("");
    const response = await axios.get("http://api.giphy.com/v1/gifs/search", {params: {
     api_key: "thfc6o5F3i0U2pi8adrWmNpnQHZkXaC6",
     q: searchTerm  
 } 
});
   addGif(response.data);
});
// Delete button function.

$("#deleteBtn").on("click", function(){
    $gifs.empty();
});