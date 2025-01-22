// Создание генератора slug

// Создаем функцию которая принимает 1 параметр - строка

function slugify(title) {
    // так как title это строка, нам нужно преобразовать в массив
    const titleArray = title.split(' ')
    // объединим элементы массива в строку и преобразуем строку в нижний регистр
    const slug = titleArray.join('-').toLowerCase()
    //
    return slug
}




console . log (slugify( "Arrays for beginners" )); // "arrays-for-beginners" 
console . log (slugify( "English for developer" )); // "english-for-developer" 
console . log (slugify( "Ten secrets of JavaScript" )); // "ten-secrets-of-javascript" 
console . log (slugify( "How to become a JUNIOR developer in TWO WEEKS" )); // "how-to-become-a-junior-developer-in-two-weeks"
