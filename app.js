window.onload = function()
{
    getImageGalleryReady();
}

function getImageGalleryReady ()
{
    var img = document.getElementsByClassName("main-img");

    for(var i=0; i<img.length; i++)
    {
        img[i].onclick = function ()
        {
            openModal(this.src);
        }
    }
}

function openModal(source)
{
    document.getElementById("modal").style.display = "flex";
    document.getElementById("modalImg").src = source;
}

document.getElementById("crossBtn").onclick = function() /* NOTE: THIS FUNCTION IS NOT WORKING.*/
{
    document.getElementById("modal").style.display = "none";
    
}

