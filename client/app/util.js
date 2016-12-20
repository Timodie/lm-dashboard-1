/**
 * Converts Unix time (in ms since Jan 1 1970 UTC) to a string in the local time zone.
 */
export function unixTimeToString(time) {
  return new Date(time).toLocaleString();
}

/**
 * If shouldHide is true, returns a CSS class that hides the element.
 */
export function hideElement(shouldHide) {
  if (shouldHide) {
    return 'hidden';
  } else {
    return '';
  }
}

export function checkstatus(status,time) {
  if (status == "Approved" && time != 0) {
    return 'btn btn-md buttons status';
  }
  else {
    return 'hidden'
  }
}

export function checkshowbutton(status,time) {
  if (status == "Approved" && time != 0) {
    return 'hidden';
  }
  else {
    return 'status2'
  }
}

export function checkcolor(status) {
  if (status == "Pending") {
    return 'warning';
  }
  else if (status == "Rejected") {
    return 'danger'
  }
  else {
    return 'success'
  }
}

export function showfield(show){
  if (show) {
    return '';
  } else {
    return 'hidden';
  }
}
