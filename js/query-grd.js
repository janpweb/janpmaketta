window.addEventListener('load', () => {
    var contenGrd = document.querySelector('.conten-grd');
    var grdCols = document.querySelector('.grd-col-3');
    console.log(grdCols);

    function tamaño800(x) {
        if (x.matches) {
            grdCols.style.gridTemplateColumns = "auto";
        } else {

        }
        return x;
    }

    var x = window.matchMedia("(max-width:800px)");
    console.log(x)
    tamaño800(x);

    x.addListener(tamaño800);
});