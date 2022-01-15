class Templater {
  #template = '';
  
  #addToTemplate (tag, args) {
    const text = args.reduce((sum, a) => {
      return typeof a === 'string' || a instanceof Templater ? sum + String(a).trim() : sum;
    }, '');

    const settings = args[args.length - 1];
    
    const params = !(settings?.__proto__ === Object.prototype) ? '' :
      Object.entries(settings).reduce((sum, a) => {
        return sum + (typeof a[1] !== 'object' ? ` ${a[0]}=${a[1]}` : '');
      }, '');

    this.#template += `<${tag}${params}>${text}</${tag}>`;
    return this;
  }

  div (...args) {
    return this.#addToTemplate('div', args);
  }

  span (...args) {
    return this.#addToTemplate('span', args);
  }

  p (...args) {
    return this.#addToTemplate('p', args);
  }

  br (...args) {
    if (!args.length) {
      this.#template += '<br>';
      return this;
    } else {
      throw new Error('Nested content is not allowed');
    }
  }

  toString () {
    return this.#template;
  }
}

const x = new Templater();
x.div('first', {id: 5, class: 'test'}).br().span(null, 'second', {id: 40});
x.br();
x.div('third', ['test']);
x.p(' fourth     ', {style: 'color:red'});
console.log(x.toString());
document.body.innerHTML = x.toString();
console.log(new Templater().span().toString())
console.log(
  new Templater().div(
    new Templater().span('Hello'),
    new Templater().br(),
    new Templater().p('World'),
    {id: 100}
  ).toString()
);

/* module.exports = function () {
  return new Templater();
} */