// Import templates
var link = document.querySelector('link[rel="import"]');
var template = link.import.querySelector('template');
var clone = document.importNode(template, true);
document.querySelector('a-assets').appendChild(clone);

// Define custom schema for syncing avatar color, set by random-color
NAF.schemas.add({
  template: '#avatar-template',
  components: [
    'position',
    'rotation',
    {
      selector: '.head',
      component: 'material',
      property: 'color'
    }
  ]
});