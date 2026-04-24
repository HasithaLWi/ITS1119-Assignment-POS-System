
export function showAlert(title, text, icon = "info") {

    return Swal.fire({
        color: "#f0f0f0",
        title,
        text,
        icon,
        confirmButtonColor: icon === "success" ? "#2f9f66" : icon === "error" ? "#dc3545" : icon === "warning" ? "orange" : "#0d6efd",
        cancelButtonColor: "rgba(255,255,255,0.12)",
        confirmButtonText: "OK",
    });
}


export async function showConfirm(title, text, icon = "warning") {

    const result = await Swal.fire({
        color: "#f0f0f0",
        title,
        text,
        icon,
        confirmButtonColor: icon === "success" ? "#2f9f66" : icon === "error" ? "#dc3545" : icon === "warning" ? "orange" : "#0d6efd",
        cancelButtonColor: "rgba(255,255,255,0.12)",
        showCancelButton: true,
        confirmButtonText: "Yes",
        cancelButtonText: "Cancel",
    });
    return result.isConfirmed;
}