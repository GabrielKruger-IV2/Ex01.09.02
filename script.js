var body = document.getElementById("body")
var btn = document.getElementById("btn")


btn.addEventListener("click", function () {
    body.innerHTML = `    <section>
    <div id="questão">
        
        <h3 id="texto">(PUC-MG) Calcule o valor de t sabendo que os pontos A(1/2, t), B(2/3, 0) e C(–1, 6) são colineares.</h3>
        <select name="" id="select">
            <optgroup>
                <option value="" hidden selected>Selecione...</option>
                <option value="1">3/5</option>
                <option value="0">3/4</option>
                <option value="0">2/5</option>
            </optgroup>
        </select>

    </div>
</section>`

    const select = document.getElementById("select")

        select.addEventListener("change", function () {
            const selected = select.options[select.selectedIndex].value;
            if (selected == 1) {
                body.innerHTML = `<div id="divTempo">
        
                <h1>Você acertou!</h1>
            
            </div>`
                clearTimeout(mytime)
               
            } else {
                body.innerHTML = `<div id="divTempo">
        
                <h1>Você errou!</h1>
            
            </div>`
                
                clearTimeout(mytime)
            }
        })

       var  mytime = setTimeout(() => {
            body.innerHTML = `<div id="divTempo">
    
            <h1>Acabou o seu tempo</h1>
        
        </div>`
        }, 5000)
   

})