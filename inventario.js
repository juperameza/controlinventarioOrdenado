 
  export default class Inventario {
    constructor(){
      this.productos=new Array();
    }
    buscar(codigo){
      for (let i=0;i<this.productos.length;i++){
          if (codigo<this.productos[i].codigo){
            return "Error no se encontro el producto";
            
          }
          else if(codigo==this.productos[i].codigo){
            return `Se encontro el producto ${this.productos[i].infoHtml()}`;
          }
        }
       
  }
    buscarIndex(codigo){
      for(let i=0; i<this.productos.length; i++){
        if(this.productos[i].codigo >codigo){
          return -1; 
         }
         else if(codigo==this.productos[i].codigo){
          return i;
         }
         
     }
     
    }      
   
    buscarOrden(codigo){
      for (let i=0;i<this.productos.length;i++){
        if(this.productos[i].codigo==codigo){
         return -1
        }
        else if(this.productos[i].codigo>codigo){
            return i;
         }
         
        }
    }

    empujar(pos){
      this.productos.push(null)
      for (let i = pos, j=this.productos.length-1; i < this.productos.length-1; i++,j--) {
        this.productos[j]=this.productos[j-1];
      }
      
    }


    agregar(nuevo){
    let pos=0;
      if(this.productos.length>=20){

        return "Error no se pueden ingresar mas de 20 elementos ";
      }

      
          if(this.productos.length!=0){
          
        if(nuevo.getCodigo()<this.productos[this.productos.length-1].getCodigo()){
          pos= this.buscarOrden(nuevo.getCodigo());
          if(pos>=0){
            this.empujar(pos);
            this.productos[pos]=nuevo
            return `Agregaste el producto  ${nuevo.infoHtml()}`
          }
            return `Ya ingresaste este producto`
           }
          }


           this.productos.push(nuevo)
           return `Agregaste el producto  ${nuevo.infoHtml()}`
    }
    borrar(codigo){
      let pos= this.buscarIndex(codigo);
      let eliminado=this.productos[pos].infoHtml();
      for(let i=pos;i<=(this.productos.length-1);i++){
       
        this.productos[i]=this.productos[i+1];
      }
      this.productos.pop()
     return `Eliminaste el producto ${eliminado}`;
  }
  
  list(){
    let info="";
    this.productos.forEach(i => {
      info+=i.infoHtml();
    });
    return info;
  }
  inverseList(){
    let detalles="";
    for(let i=this.productos.length-1;i>=0;i--){
      const p = this.productos[i];
      detalles+= p.infoHtml();
  }
  return detalles;
}

}
