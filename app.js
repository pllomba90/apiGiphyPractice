const $gifSpot = $("#gifs");
// Appends the result to the div element.
function addGif(results){
    let countResults = results.data.length;
    if (countResults){
        let randomIndex = Math.floor(Math.random() * countResults);
        let $newCol = $("<div>", { class: "col-md-4 col-12 mb-4" });
        let $newGif = $("<img>", { src: results.data[randomIndex].images.original.url, class: "w-100"});
        $newCol.append($newGif);
        $gifSpot.append($newCol);
    }
}


const gifForm = document.getElementById("gifForm");
gifForm.addEventListener("submit", async function(e){
    e.preventDefault();
    let $searchTerm = $("#searchInput").val();
    const response = await axios.get("https://api.giphy.com/v1/gifs/search", {
        params:{
            api_key: "thfc6o5F3i0U2pi8adrWmNpnQHZkXaC6",
            q: $searchTerm
        }
    });
    addGif(response.data);
});
$("#deleteBtn").on("click", function(){
    $gifSpot.empty();
});
