//Send the run macro request

export function submitUpdateMacroToServer(userRole,parameters,type,cb){
  sendXHR('POST','/submitMacro/update'+ userRole,parameters ,
    //specify contents here
  (xhr)=>{cb,(JSON.parse(xhr.responseText))}
  );
}
export function submitDeleteMacroToServer(userRole,parameters,type,cb){
  sendXHR('POST','/submitMacro/delete'+ userRole,parameters ,
    //specify contents here
  (xhr)=>{cb,(JSON.parse(xhr.responseText))}
  );
}
export function getMacroStatusCode(userRole,macroname,statusCode,cb){
  sendXHR('POST','/view_macro_run_status_code',{
    userRole: userRole,
    macroname:macroname,
    statusCode:statusCode
  },  (xhr)=>{cb,(JSON.parse(xhr.responseText))}
    );
}
export function updateHistory(userRole,cb){
  sendXHR('POST','/history',userRole,
  (xhr)=> {cb(JSON.parse(xhr.responseText))
});

}
export function getViewLogData(cb){
  sendXHR('GET','/history',undefined,
(xhr)=>{cb(JSON.parse(xhr.responseText));
});
}

/**
 * Properly configure+send an XMLHttpRequest with error handling, authorization token,
 * and other needed properties.
 */
function sendXHR(verb, resource, body, cb) {
  var xhr = new XMLHttpRequest();
  xhr.open(verb, resource);
  /* global lm_dashboardError */

  // Response received from server. It could be a failure, though!
  xhr.addEventListener('load', function() {
    var statusCode = xhr.status;
    var statusText = xhr.statusText;
    if (statusCode >= 200 && statusCode < 300) {
      // Success: Status code is in the [200, 300) range.
      // Call the callback with the final XHR object.
      cb(xhr);
    } else {
      // Client or server error.
      // The server may have included some response text with details concerning
      // the error.
      var responseText = xhr.responseText;
      lm_dashboardError('Could not ' + verb + " " + resource + ": Received " + statusCode + " " + statusText + ": " + responseText);
    }
  });

  // Time out the request if it takes longer than 10,000 milliseconds (10 seconds)
  xhr.timeout = 10000;

  // Network failure: Could not connect to server.
  xhr.addEventListener('error', function() {
    lm_dashboardError('Could not ' + verb + " " + resource + ": Could not connect to the server.");
  });

  // Network failure: request took too long to complete.
  xhr.addEventListener('timeout', function() {
    lm_dashboardError('Could not ' + verb + " " + resource + ": Request timed out.");
  });

  switch (typeof(body)) {
    case 'undefined':
      // No body to send.
      xhr.send();
      break;
    case 'string':
      // Tell the server we are sending text.
      xhr.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
      xhr.send(body);
      break;
    case 'object':
      // Tell the server we are sending JSON.
      xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
      // Convert body into a JSON string.
      xhr.send(JSON.stringify(body));
      break;
    default:
      throw new Error('Unknown body type: ' + typeof(body));
  }
}
