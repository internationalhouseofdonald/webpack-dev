import _ from 'lodash';
import './style.css';
import Icon from './icon.png';
import Data from './data.xml';
import Cloud from './cloud.csv';

function component() {
  var element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'World!'], ' ');
  element.classList.add('hello');

  var myIcon = new Image();
  var myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  // This can be especially helpful when implementing some sort of data visualization using a tool like d3. Instead of making an ajax request and parsing the data at runtime you can load it into your module during the build process so that the parsed data is ready to go as soon as the module hits the browser. 
  console.log(Data);
  console.log(Cloud);

  return element;
}

document.body.appendChild(component());