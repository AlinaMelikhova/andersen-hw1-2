window.addEventListener('load', main);

function main() {
  try {
    const firstNumber = ask('Введите число');
    const secondNumber = ask('Введите второе число');

    console.log(
      `Ответ: ${firstNumber + secondNumber}, ${firstNumber / secondNumber}`
    );
  } catch (err) {
    console.log('Некорректный ввод!');
  }
}

function ask(message) {
  const result = +prompt(message);

  if (typeof result === 'number') {
    return result;
  }
}
