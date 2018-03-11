function f_social__share() {
  // Compartir en redes sociales: reemplazar "version" por 'mobile' o 'landing' según corresponda
  // No usar "|" (pipe) o caracteres especiales en el <title> del html
  var myUrl = window.location.href,
      title = 'Este es el CV de Lucas, Te recomiendo que lo mires. Se ve interesante',
      facebook = 'https://www.facebook.com/sharer/sharer.php?u='+myUrl+'',
      twitter = 'https://twitter.com/intent/tweet?text='+title+'%20'+myUrl+'';

  // Compartir en Facebook
  $('.c-cv__share_facebook').on('click', function(event) {
    console.log('Url a compartir: ', myUrl);
    event.preventDefault();
    window.open(facebook, 'Compartir en Facebook', 'width=500,height=500,resizable=1');
  });

  // Compartir en Twitter
  $('.c-cv__share_twitter').on('click', function(event) {
    console.log('Url a compartir: ', myUrl);
    event.preventDefault();
    window.open(twitter, 'Compartir en Twitter', 'width=500,height=500,resizable=1');
  });

  // Compartir en Whatsapp
  // Este atributo abre la app de whatsapp si la tenemos instalada (lo que es muy probable)
  $('.c-cv__share_whatsapp')
    .attr('href', 'whatsapp://send?text='+title+'%20' + myUrl + '');
}
