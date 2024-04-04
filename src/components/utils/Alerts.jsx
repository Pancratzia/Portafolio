import Swal from "sweetalert2";

const SuccessAlert = async ({ title, text }) => {
  return (
    await Swal.fire({
      icon: "success",
      title: title,
      text: text,
      showConfirmButton: false,
      timer: 1500,
    })
  )
}

const ErrorAlert = async({ title, text }) => {
  return (
    await Swal.fire({
      icon: "error",
      title: title,
      text: text,
      showConfirmButton: false,
      timer: 1500,
    })
  )
}

export { SuccessAlert, ErrorAlert }