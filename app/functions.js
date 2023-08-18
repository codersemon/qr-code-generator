/**
 *
 * @param {*} msg - take msg to show
 * @param {*} type - alert type
 * @returns - return dismissible alert
 */
function createAlert(msg, type = "warning") {
    return `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
      ${msg}
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`;
  }