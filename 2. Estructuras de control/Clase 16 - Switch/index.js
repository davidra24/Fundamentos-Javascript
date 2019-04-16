const signo = prompt('¿Cuál es tu signo?');

switch (signo) {
    case 'aries':
    case 'ARIES':
        alert('Aunque su confianza esté en declive, podrá superar las dificultades gracias a sus seres queridos que lo ayudarán. Relájese, usted siempre encuentra la solución.');
        break;
    case 'tauro':
    case 'TAURO':
        alert('Sepa que sus dotes inteligentes harán que finalmente encuentre la solución exacta para ese problema que lo aqueja hace días. Soluciónelo hoy mismo.');
        break;
    case 'geminis':
    case 'GEMINIS':
    case 'géminis':
    case 'GÉMINIS':
        alert('Gracias a su elevada intuición obtendrá la respuesta adecuada para ayudar a esa persona que le ha pedido un consejo. No le de vuelta la cara y bríndele su ayuda.');
        break;
    case 'cancer':
    case 'cáncer':
    case 'CANCER':
    case 'CÁNCER':
        alert('Comprenda que no siempre todo tiene una explicación racional a todas las situaciones que nos enfrentamos. Disfrute de lo bueno y déjese fluir.');
        break;
    case 'leo':
    case 'LEO':
        alert('Sería bueno que recuerde que no todos tienen las ideas tan claras como usted. Tendrá que armarse de paciencia frente a las dudas de los demás.');
        break;
    case 'virgo':
    case 'VIRGO':
        alert('Sepa manejar esa tendencia que tiene a decir todo lo que piensa sin importarle lo que los demás piensan, ya que puede traerle más de una complicación.');
        break;
    case 'libra':
    case 'LIBRA':
        alert('Muévase con cuidado en todo lo que tenga que llevar a cabo, ya que podría equivocarse aún en cosas sencillas de resolver. Actúe de forma prudente.');
        break;
    case 'escorpio':
    case 'ESCORPIO':
        alert('Intente minimizar los problemas, ya que no todo es tan dramático como parece. Tenga paciencia y en poco tiempo podrá olvidar sus preocupaciones.');
        break;
    case 'sagitario':
    case 'SAGITARIO':
        alert('Si actúa con prisa y pone en práctica sus ideas, por más disparatadas que parezcan, en esta jornada logrará todo lo que se proponga sin tanto esfuerzo.');
        break;
    case 'capricornio':
    case 'CAPRICORNIO':
        alert('Prepárese, ya que las antiguas estructuras podrían desmoronarse de un momento a otro. Anímese y de un paso a ese nuevo proyecto de vida que tanto quiere.');
        break;
    case 'acuario':
    case 'ACUARIO':
        alert('Sepa que podría llegar a cometer una gran injusticia, si sigue juzgando con severidad las situaciones o a las personas que no conoce demasiado.');
        break;
    case 'piscis':
    case 'PISCIS':
        alert('Será fundamental que antes de tomar una decisión trascendental en su vida, intente abandonar los arrebatos y analizar meticulosamente la situación.');
        break;
    default:
        alert('No es un signo zodical');
        break;
}