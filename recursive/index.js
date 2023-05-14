const reverse = (str) => {
    if (str === '') return ''

    return str.slice(-1).concat(reverse(str.slice(0, -1)))
}

console.log(reverse('hello'))


module.exports = reverse;