import Inventario from "./inventario.js";
import Producto from "./producto.js";
 class App {
    constructor(){
      this._inventory= new Inventario();
      const btnRegister= document.getElementById("btnAdd");
      const  btnBuscar=document.getElementById("btnSearch");
        const  btnEliminar=document.getElementById("btnDelete");
        const  btnListar=document.getElementById("btnList");
        const  btnListarReves=document.getElementById("btnInvList");
        const  btnInsertar=document.getElementById("btnInsert");
        btnEliminar.addEventListener("click",  this._deleteProduct)
        btnInsertar.addEventListener("click",  this._insertProduct)
        btnListarReves.addEventListener("click",  this._inverseListProducts)
        btnListar.addEventListener("click",  this._listProducts)
      btnBuscar.addEventListener("click",  this._searchProduct)
      btnRegister.addEventListener("click", this._addProduct)    
    }
      readForm(){
        let inpCodigo=document.getElementById("txtCodigo");
        let inpNombre=document.getElementById("txtNombre");
        let inpCantidad=document.getElementById("txtCantidad");
        let inpCosto=document.getElementById("txtCosto");
        let codigo=inpCodigo.value;
        let nombre=inpNombre.value;
        let cantidad=inpCantidad.value
        let costo=inpCosto.value
        if(codigo&&nombre&&cantidad&&costo){
            inpCodigo.value="";
            inpNombre.value="";
            inpCantidad.value="";
            inpCosto.value=""; 
            codigo=Number(codigo)
            cantidad=Number(cantidad)
            costo=Number(costo)
            return new Producto(codigo, nombre, cantidad, costo);
        }
        return null;
    }
    _addProduct=()=>{
      let producto= this.readForm();
      let resultado=document.getElementById("resultado");
      if(producto!=null){
      let added=this._inventory.agregar(producto);
      resultado.innerHTML=added;
      return
    }

        resultado.innerHTML="Error todos los campos deben ser llenados"
      console.log(this._inventory)
      return
    }
    _searchProduct=()=>{
      let codigo=document.getElementById('txtCodigo').value;
    let resultado=this._inventory.buscar(codigo);
    let detalles=document.getElementById('resultado');
   detalles.innerHTML=resultado;
    }
    _deleteProduct=()=>{
      let codigo=document.getElementById('txtCodigo').value;
      let detalles=document.getElementById('resultado');
   detalles.innerHTML=this._inventory.borrar(codigo);
    
     
    }
    _listProducts=()=>{
      let detalles=document.getElementById('resultado');
      detalles.innerHTML=this._inventory.list();
    }
    _inverseListProducts=()=>{
      let detalles=document.getElementById('resultado');
      detalles.innerHTML=this._inventory.inverseList();
      }
    
    
  }
 new App();

  //interacción con el usuario

  
  
  
  