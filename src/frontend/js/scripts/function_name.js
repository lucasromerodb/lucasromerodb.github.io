/* ---- Genera un log en la consola indicando que funcion se ejecuta ---- */
function f_start_running(fun) {
  console.log('%c\nRunning: '+fun+'();', 'color: #ababab;');
}

/* ---- Genera un log en la consola indicando un comentario ---- */
function f_start_comment(comment) {
  console.log('%cComment: '+comment+'', 'color: #888;');
}
