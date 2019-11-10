$(document).ready(function () {
    $("input").change(function () {
        
        let length = this.files.length;
        
        //alert(file.name);
        for (let i = 0; i < length; i++) {
            var reader=new FileReader()
            console.log(this.files[i].lastModifiedDate);
            let file=this.files[i];
            reader.readAsText(file);
            reader.onload=function(e){
console.log(e.target.result);
            }
          

        }






    })

})