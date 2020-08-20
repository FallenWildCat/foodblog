<!-- start Simple Custom CSS and JS -->
<script type="text/javascript">
const scriptURL="https://script.google.com/macros/s/AKfycbxYtiKbZEzM1I4mHtYnJ6A88pAmtqAsRyuiOAbhVA-g1_E-grpr/exec",form=document.forms["5765624d696468756e"];var reg=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,email=document.getElementById("et_pb_contact_email_0");form.addEventListener("submit",e=>{if(e.preventDefault(),!reg.test(email.value))return Swal.fire({icon:"error",title:"Oops...",text:"Wrong Email!"}),email.focus,!1;Swal.fire({icon:"success",title:"I'll email you soon!"}),fetch(scriptURL,{method:"POST",body:new FormData(form)})});

</script>
<!-- end Simple Custom CSS and JS -->
