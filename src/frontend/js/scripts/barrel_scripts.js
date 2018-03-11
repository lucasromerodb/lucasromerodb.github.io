module.exports = function () {
  // esta es el prefijo de la ruta donde se encuentra los scripts que componen
  // el framework del front
  var BASE_SCRIPTS_URL = './src/frontend/js/scripts/';

  // y aqui se listan los scripts en un orden cardinal de dependencias
  var script_modules_names = [
    'function_name.js',
    'base.js',
    'share.js',
    'ready.js'
  ];

  return script_modules_names.map(function (module_name) {
    return BASE_SCRIPTS_URL + module_name;
  });

}();
