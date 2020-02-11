export function rot13Encoder(str){
    return str.replace(/[A-Z]/g, c => String.fromCharCode(('A'.charCodeAt() + (c.charCodeAt() - 'A'.charCodeAt() + 13)%26)))
}