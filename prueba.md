
```<div class="jm-card-df">
                    <div class="jm-card-header">
                        <div class="cart-thumb" data-imagen="/img/jose.jpg">

                        </div>

                    </div>

                    <div class="jm-card-body">
                        <div class="jm-card-titulo">Esto es un titulo</div>
                        <div class="jm-card-subtitulo">esto es un subtitulo</div>
                        <div class="jm-card-articulo txt-justify">
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt sunt rerum, voluptate libero culpa fugiat voluptatibus omnis provident eos in amet ipsa molestiae porro veniam cupiditate voluptatem praesentium facere, excepturi
                                nostrum? Officiis eligendi, quo itaque iusto ratione illum beatae molestiae, dolorem accusantium repudiandae et labore commodi nesciunt praesentium saepe quasi.</p>
                        </div>
                    </div>
                    <div class="jm-card-footer">FOOTER</div>
                </div>
                <div class="jm-card-df">
                    <div class="jm-card-header">
                        <div class="cart-thumb" data-imagen="/img/jose.jpg">

                        </div>

                    </div>

                    <div class="jm-card-body">
                        <div class="jm-card-titulo">Esto es un titulo</div>
                        <div class="jm-card-subtitulo">esto es un subtitulo</div>
                        <div class="jm-card-articulo txt-justify">
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt sunt rerum, voluptate libero culpa fugiat voluptatibus omnis provident eos in amet ipsa molestiae porro veniam cupiditate voluptatem praesentium facere, excepturi
                                nostrum? Officiis eligendi, quo itaque iusto ratione illum beatae molestiae, dolorem accusantium repudiandae et labore commodi nesciunt praesentium saepe quasi.</p>
                        </div>
                    </div>
                    <div class="jm-card-footer">FOOTER</div>
                </div>```
## el  codigo javascript
```var cartThumb = document.querySelector('.cart-thumb');
    var dataImg = cartThumb.dataset;
    var laimagen = dataImg.imagen;
    var resultado = cartThumb.style.backgroundImage = "url(" + laimagen + ")";```
