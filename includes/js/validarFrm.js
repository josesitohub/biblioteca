function validarFormAdd(){
    //alert("Validando");
    var verificarAdd = true;
    var expRegCode=/^[0-9a-zA-Z\_]+$/;
    var formulario = document.getElementById("add_product");
    var prod_code = document.getElementById("code");
    var prod_description = document.getElementById("description");
    var prod_quantity = document.getElementById("quantity");
    var price = document.getElementById("price");
    var prod_aportacion = document.getElementById("aportacion");
    var edo_good = document.getElementById("good");
    var edo_regular = document.getElementById("regular");
    var edo_bad = document.getElementById("bad");
    //var date_rec = document.getElementById("daterec");
    var validar_code = document.getElementById("info_code");
    var validar_description = document.getElementById("info_description");
    var validar_quantity = document.getElementById("info_quantity");
    var validar_price = document.getElementById("info_price");
    var validar_aportacion = document.getElementById("info_aportacion");
    var validar_good = document.getElementById("info_good");
    var validar_regular = document.getElementById("info_regular");
    var validar_bad = document.getElementById("info_bad");
    //var validar_daterec = document.getElementById("info_daterec");

    if(!prod_code.value)
	{
        validar_code.innerHTML = "El campo CÓDIGO es requerido.";
        //alert("El campo CÓDIGO es requerido.");  
        prod_code.focus();
		verificarAdd = false;
    }
    else if(!expRegCode.exec(prod_code.value))
    {
        validar_code.innerHTML = "El campo CÓDIGO NO acepta caracteres extraños.";
        //alert("El campo CÓDIGO NO acepta caracteres extraños.");
        prod_code.focus();
        verificarAdd = false;
    }
    else if(prod_code.value.length > 10)
	{
        validar_code.innerHTML = "El campo CÓDIGO NO puede tener más de 10 caracteres.";
		//alert("El campo CÓDIGO NO puede tener más de 10 caracteres");
		prod_code.focus();
		verificarAdd = false;
	} 
    else if(!prod_description.value)
    {
        validar_description.innerHTML = "El campo DESCRIPCIÓN es requerido.";
        //alert("El campo DESCRIPCIÓN es requerido");
        prod_description.focus();
        verificarAdd = false;
    }
    else if(!prod_quantity.value)
    {
        validar_quantity.innerHTML = "El campo CANTIDAD es requerido";
        //alert("El campo CANTIDAD es requerido");
        prod_quantity.focus();
        verificarAdd = false;
    }
    else if(isNaN(prod_quantity.value))
	{
        validar_quantity.innerHTML = "El campo CANTIDAD solo acepta números.";
        //alert("El campo CANTIDAD solo acepta números");
        prod_quantity.focus();
		verificarAdd = false;
	}
    /*else if(!prod_quantity.value < 0 )
    {
        validar_quantity.innerHTML = "El campo CANTIDAD acepta números mayores a 0.";
        //alert("El campo CANTIDAD acepta números mayores a 0.");
        prod_quantity.focus();
        verificarAdd = false;
    }*/
    else if(!price.value)
    {
        validar_price.innerHTML = "El campo PRECIO es requerido";
        //alert("El campo PRECIO es requerido");
        price.focus();
        verificarAdd = false;
    }
    else if(isNaN(price.value))
	{
        validar_price.innerHTML = "El campo PRECIO solo acepta números.";
        //alert("El campo PRECIO solo acepta números");
        price.focus();
		verificarAdd = false;
	}
    /*else if(price.value <= 0 )
    {
        validar_price.innerHTML = "El campo PRECIO acepta números mayores a 0.";
        alert("El campo PRECIO acepta números mayores a 0.");
        price.focus();
        verificarAdd = false;
    }*/
    else if(!prod_aportacion.value)
    {
        validar_aportacion.innerHTML = "El campo Aportación es requerido";
        //alert("El campo Aportación es requerido");
        prod_aportacion.focus();
        verificarAdd = false;
    }
    else if(!edo_good.value)
    {
        validar_good.innerHTML = "El campo ESTADO BUENO es requerido";
        //alert("El campo ESTADO BUENO es requerido");
        edo_good.focus();
        verificarAdd = false;
    }
    else if(isNaN(edo_good.value))
	{
        validar_good.innerHTML = "El campo ESTADO BUENO solo acepta números.";
        //alert("El campo ESTADO BUENO solo acepta números");
        edo_good.focus();
		verificarAdd = false;
	}
    /*else if(edo_good.value < 0)
    {
        validar_good.innerHTML = "El campo ESTADO BUENO acepta números mayores a 0.";
        alert("El campo ESTADO BUENO acepta números mayores a 0.");
        edo_good.focus();
        verificarAdd = false;
    }*/
    else if(!edo_regular.value)
    {
        validar_regular.innerHTML = "El campo ESTADO REGULAR es requerido";
        //alert("El campo ESTADO REGULAR es requerido");
        edo_regular.focus();
        verificarAdd = false;
    }
    else if(isNaN(edo_regular.value)) 
	{
        validar_regular.innerHTML = "El campo ESTADO REGULAR solo acepta números.";
        //alert("El campo ESTADO REGULAR solo acepta números");
        edo_regular.focus();
		verificarAdd = false;
	}
    /*else if(edo_regular.value < 0)
    {
        validar_regular.innerHTML = "El campo ESTADO REGULAR acepta números mayores a 0.";
        alert("El campo ESTADO REGULAR acepta números mayores a 0.");
        edo_regular.focus();
        verificarAdd = false;
    }*/
    else if(!edo_bad.value)
    {
        validar_bad.innerHTML = "El campo ESTADO MALO es requerido";
        //alert("El campo ESTADO MALO es requerido");
        edo_bad.focus();
        verificarAdd = false;
    }
    else if(isNaN(edo_bad.value))
	{
        validar_bad.innerHTML = "El campo ESTADO MALO solo acepta números.";
        //alert("El campo ESTADO MALO solo acepta números");
        edo_bad.focus();
		verificarAdd = false;
	}
    /*else if(edo_bad.value <= 0)
    {
        validar_bad.innerHTML = "El campo ESTADO MALO acepta números mayores a 0.";
        alert("El campo ESTADO MALO acepta números mayores a 0.");
        edo_bad.focus();
        verificarAdd = false;
    }*/
    
}

function validarFormEdit(){
    //alert("Validando");
    var verificar = true;
    //var expRegCode=/^[0-9a-zA-Z\_]+$/;
    var formulario = document.getElementById("edit_product");
    //var prod_code = document.getElementById("code");
    var edit_prod_description = document.getElementById("edit_description");
    var edit_prod_quantity = document.getElementById("edit_quantity");
    var edit_price = document.getElementById("edit_price");
    //var prod_aportacion = document.getElementById("aportacion");
    var edit_edo_good = document.getElementById("edit_good");
    var edit_edo_regular = document.getElementById("edit_regular");
    var edit_edo_bad = document.getElementById("edit_bad");
    //var date_rec = document.getElementById("daterec");
    //var validar_code = document.getElementById("info_code");
    var edit_validar_description = document.getElementById("edit_info_description");
    var edit_validar_quantity = document.getElementById("edit_info_quantity");
    var edit_validar_price = document.getElementById("edit_info_price");
    //var validar_aportacion = document.getElementById("info_aportacion");
    var edit_validar_good = document.getElementById("edit_info_good");
    var edit_validar_regular = document.getElementById("edit_info_regular");
    var edit_validar_bad = document.getElementById("edit_info_bad");
    //var validar_daterec = document.getElementById("info_daterec");

    /*if(!prod_code.value)
	{
        validar_code.innerHTML = "El campo CÓDIGO es requerido.";
        alert("El campo CÓDIGO es requerido.");  
        prod_code.focus();
		verificar = false;
    }
    else if(!expRegCode.exec(prod_code.value))
    {
        validar_code.innerHTML = "El campo CÓDIGO NO acepta caracteres extraños.";
        alert("El campo CÓDIGO NO acepta caracteres extraños.");
        prod_code.focus();
        verificar = false;
    }
    else if(prod_code.value.length > 10)
	{
        validar_code.innerHTML = "El campo CÓDIGO NO puede tener más de 10 caracteres.";
		alert("El campo CÓDIGO NO puede tener más de 10 caracteres");
		prod_code.focus();
		verificar = false;
    }*/ 
    if(!edit_prod_description.value)
    {
        edit_validar_description.innerHTML = "El campo DESCRIPCIÓN es requerido.";
        //alert("El campo DESCRIPCIÓN es requerido");
        edit_prod_description.focus();
        verificar = false;
    }
    else if(!edit_prod_quantity.value)
    {
        edit_validar_quantity.innerHTML = "El campo CANTIDAD es requerido";
        //alert("El campo CANTIDAD es requerido");
        edit_prod_quantity.focus();
        verificar = false;
    }
    else if(isNaN(edit_prod_quantity.value))
	{
        edit_validar_quantity.innerHTML = "El campo CANTIDAD solo acepta números.";
        //alert("El campo CANTIDAD solo acepta números");
        edit_prod_quantity.focus();
		verificar = false;
	}
    /*else if(edit_prod_quantity.value < 0 )
    {
        edit_validar_quantity.innerHTML = "El campo CANTIDAD acepta números mayores a 0.";
        alert("El campo CANTIDAD acepta números mayores a 0.");
        edit_prod_quantity.focus();
        verificar = false;
    }*/
    else if(!edit_price.value)
    {
        edit_validar_price.innerHTML = "El campo PRECIO es requerido";
        //alert("El campo PRECIO es requerido");
        edit_price.focus();
        verificar = false;
    }
    else if(isNaN(edit_price.value)) 
	{
        edit_validar_price.innerHTML = "El campo PRECIO solo acepta números.";
        //alert("El campo PRECIO solo acepta números");
        edit_price.focus();
		verificar = false;
	}
    /*else if(edit_price.value < 0 )
    {
        edit_validar_price.innerHTML = "El campo PRECIO acepta números mayores a 0.";
        alert("El campo PRECIO acepta números mayores a 0.");
        edit_price.focus();
        verificar = false;
    }*/
    else if(!prod_aportacion.value)
    {
        validar_aportacion.innerHTML = "El campo Aportación es requerido";
        //alert("El campo Aportación es requerido");
        prod_aportacion.focus();
        verificar = false;
    }
    else if(!edit_edo_good.value)
    {
        edit_validar_good.innerHTML = "El campo ESTADO BUENO es requerido";
        //alert("El campo ESTADO BUENO es requerido");
        edit_edo_good.focus();
        verificar = false;
    }
    else if(isNaN(edit_edo_good.value)) 
	{
        edit_validar_good.innerHTML = "El campo ESTADO BUENO solo acepta números.";
        //alert("El campo ESTADO BUENO solo acepta números");
        edit_edo_good.focus();
		verificar = false;
	}
    /*else if(edit_edo_good.value < 0)
    {
        edit_validar_good.innerHTML = "El campo ESTADO BUENO acepta números mayores a 0.";
        alert("El campo ESTADO BUENO acepta números mayores a 0.");
        edit_edo_good.focus();
        verificar = false;
    }*/
    else if(!edit_edo_regular.value)
    {
        edit_validar_regular.innerHTML = "El campo ESTADO REGULAR es requerido";
        //alert("El campo ESTADO REGULAR es requerido");
        edit_edo_regular.focus();
        verificar = false;
    }
    else if(isNaN(edit_edo_regular.value)) 
	{
        edit_validar_regular.innerHTML = "El campo ESTADO REGULAR solo acepta números.";
        //alert("El campo ESTADO REGULAR solo acepta números");
        edit_edo_regular.focus();
		verificar = false;
	}
    /*else if(edit_edo_regular.value < 0)
    {
        edit_validar_regular.innerHTML = "El campo ESTADO REGULAR acepta números mayores a 0.";
        alert("El campo ESTADO REGULAR acepta números mayores a 0.");
        edit_edo_regular.focus();
        verificar = false;
    }*/
    else if(!edit_edo_bad.value)
    {
        edit_validar_bad.innerHTML = "El campo ESTADO MALO es requerido";
        //alert("El campo ESTADO MALO es requerido");
        edit_edo_bad.focus();
        verificar = false;
    }
    else if(isNaN(edit_edo_bad.value)) 
	{
        edit_validar_bad.innerHTML = "El campo ESTADO MALO solo acepta números.";
        //alert("El campo ESTADO MALO solo acepta números");
        edit_edo_bad.focus();
		verificar = false;
	}
    /*else if(edit_edo_bad.value < 0)
    {
        edit_validar_bad.innerHTML = "El campo ESTADO MALO acepta números mayores a 0.";
        alert("El campo ESTADO MALO acepta números mayores a 0.");
        edo_bad.focus();
        verificar = false;
    }*/ 
}

function limpiarForm()
{
	//alert("Limpiando el Formulario");
	document.getElementById("add_product").reset();
}


window.onload = function()
{
    var botonEnviar, botonLimpiar;
	botonLimpiar = document.getElementById("limpiar");
	botonLimpiar.onclick = limpiarForm;

	botonEnviar = document.add_product.enviar_btn;
    botonEnviar.onclick = validarFormAdd;
    
    var botonEnviarAdd;
	//botonLimpiar = document.getElementById("limpiar");
	//botonLimpiar.onclick = limpiarForm;
	botonEnviarAdd = document.edit_product.edit_btn;
	botonEnviarAdd.onclick = validarFormEdit;
}