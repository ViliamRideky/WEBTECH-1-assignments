const section = document.querySelector("section")
const search = document.querySelector("#search")
const searchValue = localStorage.getItem("searchString") == null ? "" : localStorage.getItem("searchString")
const images = []
const backdrop = document.querySelector("#backdrop")
const modal = document.querySelector("#modal")
const carouselItem = document.querySelector("carousel-item")
const close = document.querySelector("close")

backdrop.addEventListener("click", () => {
    document.body.style.position = '';
    document.body.style.top = '';
})

search.value = searchValue

search.addEventListener("input", event => {
    loadPhotos(event.target.value)
})

function loadPhotos(searchString) {
    localStorage.setItem("searchString", searchString)
    section.innerHTML = ""
    fetch("photos/photos.json")
        .then(res => res.json())
        .then(data => {

            data.forEach(image => addImageToModal(image, section))

            data.forEach(image => {
                if (image.title.indexOf(searchString) != -1 || image.description.indexOf(searchString) != -1 || searchString === null) {
                    const thumbnail = document.createElement("img")
                    const map = document.createElement("div");

                    thumbnail.src = `photos/${image.src}`
                    thumbnail.height = "200"
                    thumbnail.width = "200"
                    thumbnail.style = "object-fit: cover"
                    thumbnail.id = `${image.id}`
                    thumbnail.setAttribute("data-id", image.filename)
                    map.setAttribute("id", "map");
                    thumbnail.addEventListener("click", (e) => {
                        backdrop.style.display = "flex"
                        document.body.style.position = 'fixed';

                    })


                    section.appendChild(thumbnail)
                }
            })
        })
}
loadPhotos(searchValue)


const addImageToModal = (image, section) => {

    const imgc = document.createElement("img")
    imgc.src = `photos/${image.src}`
    imgc.id = image.id
    console.log(image.thumbnail)

    // otvorenie modal okna na kliknutie
    $("section").on("click", (event) => {
        $('modal').modal('show')


        // pripojenie carouselu
        $(".carousel-inner").append("<div class='carousel-item'><div class='carousel-caption d-none d-md-block'><h4></h4><p class='text-center'></p><span></span></div></div>");
        let item = $(".carousel-inner").find(".carousel-item");

        //generovanie obrazkov do carouselu
        $(item[item.length - 1]).prepend(imgc)
        $(".carousel-inner img").addClass("d-block w-100")
        // $(".carousel-item").first().addClass("active")
        $('.carousel-item').removeClass('active')
        $('.carousel-item').eq(2).addClass('active');

        //pridanie nazvu+caption k obrazku

        let title = $(".carousel-caption").find("h4");
        $(title[title.length - 1]).html(image.title);
        let desc = $(".carousel-caption").find("p");
        $(desc[desc.length - 1]).html(image.description);
        let date = $(".carousel-caption").find("span");
        $(date[date.length - 1]).html(image.date);
    })

}

function closeModal() {
    backdrop.style.display = "none"
    $(".carousel-inner").empty()
}

function slideshowPlayPause(button) {
    var carousel = document.getElementById("carousel");
    var carouselInstance = bootstrap.Carousel.getInstance(carousel);
    if (button.getAttribute("data-play") == "true") {
        carouselInstance.cycle();
    } else if (button.getAttribute("data-play") == "false") {
        carouselInstance.pause();
    }
}

// 
function myMap(mapDiv, image) {
    console.log(mapDiv);
    console.log(image);
    var mapProp = {
        center: new google.maps.LatLng(Number(image.gps.lat), Number(image.gps.lon)),
        zoom: 5,
    };
    var map = new google.maps.Map(mapDiv, mapProp);
}
