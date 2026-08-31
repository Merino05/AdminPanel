import swal from "sweetalert";

const Alert = (title, text, icon)=>{
    swal({
        title,
        text,
        icon,
        button: "متوجه شدم",
    });
}
export default Alert;