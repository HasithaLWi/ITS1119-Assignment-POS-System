/**
 * showAlert.js
 * Centralised SweetAlert2 utility for the POS System.
 * Relies on the global `Swal` object injected by the SweetAlert2 CDN script.
 */

/**
 * Returns the current accent color from the CSS variable, falling back to a default.
 */
function getAccentColor() {
    return getComputedStyle(document.documentElement)
        .getPropertyValue("--accent-color").trim() || "#f04b66";
}

/**
 * Shared base config for all alerts (glassmorphism theme).
 */
function baseConfig() {
    const accent = getAccentColor();
    return {
        // background: "rgba(20, 20, 35, 0.82)",
        color: "#f0f0f0",
        // backdrop: "rgba(0, 0, 0, 0.55)",
        customClass: {
            popup: "swal2-popup",
            confirmButton: "swal2-confirm",
            cancelButton: "swal2-cancel",
        },
        confirmButtonColor: accent,
        cancelButtonColor: "rgba(255,255,255,0.12)",
    };
}

// /**
//  * Show a simple notification alert.
//  * @param {string} title   - Alert title
//  * @param {string} text    - Alert message body
//  * @param {"success"|"error"|"warning"|"info"|"question"} icon - SweetAlert2 icon type
//  */
export function showAlert(title, text, icon = "info") {
    return Swal.fire({
        ...baseConfig(),
        title,
        text,
        icon,
        confirmButtonText: "OK",
    });
}

// /**
//  * Show a confirmation dialog (Yes / Cancel).
//  * @param {string} title   - Dialog title
//  * @param {string} text    - Dialog message body
//  * @param {"warning"|"question"|"error"|"info"} icon
//  * @returns {Promise<boolean>} Resolves to `true` if the user confirmed, `false` otherwise.
//  */
export async function showConfirm(title, text, icon = "warning") {
    const result = await Swal.fire({
        ...baseConfig(),
        title,
        text,
        icon,
        showCancelButton: true,
        confirmButtonText: "Yes",
        cancelButtonText: "Cancel",
    });
    return result.isConfirmed;
}